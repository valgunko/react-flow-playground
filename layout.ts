'use server';

import { Edge, Node } from '@xyflow/react';
import Elk, {
  type ElkExtendedEdge,
  type LayoutOptions as ElkLayoutOptions,
  type ElkNode,
} from 'elkjs/lib/elk.bundled.js';

const elk = new Elk();

type LayoutOptions = {
  algorithm?: 'layered' | 'mrtree';
  direction?: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
  spacing?: number;
  nodePlacement?:
    | 'SIMPLE'
    | 'LINEAR_SEGMENTS'
    | 'BRANDES_KOEPF'
    | 'NETWORK_SIMPLEX';
};

function xyEdgeToElkEdge(edge: Edge): ElkExtendedEdge {
  return {
    id: edge.id,
    sources: [edge.source],
    targets: [edge.target],
  };
}

function xyNodeToElkNode(node: Node): ElkNode {
  console.log('xyNodeToElkNode',);
  return {
    id: node.id,
    width: node.measured?.width ?? 200,
    height: node.measured?.height ?? 50,
  };
}

function xyGraphToElkGraph(
  nodes: Node[],
  edges: Edge[],
  layoutOptions: ElkLayoutOptions,
  parentId?: string
): Omit<ElkNode, 'id'> {
  const rootNodes = nodes.filter((node) =>
    parentId ? node.parentId === parentId : !node.parentId
  );
  const rootNodeIds = rootNodes.map((node) => node.id);
  const rootEdges = edges.filter(
    (edge) =>
      rootNodeIds.includes(edge.source) || rootNodeIds.includes(edge.target)
  );

  return {
    layoutOptions,
    children: rootNodes.map((node) => ({
      ...xyNodeToElkNode(node),
      ...xyGraphToElkGraph(nodes, edges, layoutOptions, node.id),
    })),
    edges: rootEdges.map(xyEdgeToElkEdge),
  };
}

function flattenGraph(graph: ElkNode): ElkNode[] {
  const nodes = [graph];

  for (const child of graph.children ?? []) {
    nodes.push(...flattenGraph(child));
  }
  return nodes;
}

export async function layout(
  nodes: Node[],
  edges: Edge[],
  options: LayoutOptions = {}
): Promise<{ nodes: Node[]; edges: Edge[]; layoutOptions: ElkLayoutOptions }> {
  const {
    algorithm = 'layered',
    direction = 'DOWN',
    spacing = 50,
    nodePlacement = 'SIMPLE',
  } = options;

  const layoutOptions = {
    'elk.algorithm': algorithm,
    'elk.direction': direction,
    'elk.spacing.nodeNode': `${spacing}`,
    'elk.hierarchyHandling': 'INCLUDE_CHILDREN',
    'elk.layered.nodePlacement.strategy': nodePlacement,
  };

  const graph = {
    id: 'graph',
    ...xyGraphToElkGraph(nodes, edges, layoutOptions),
  };

  const root = await elk.layout(graph);

  const flatRoot = flattenGraph(root);

  const nextNodes = nodes.map((node) => {
    const elkNode = flatRoot.find((n) => n.id === node.id)!;
    const position = { x: elkNode.x!, y: elkNode.y! };
    const size = { width: elkNode.width!, height: elkNode.height! };
    // console.log('size', size);
    
    return {
      ...node,
      position,
      style: { ...node.style, ...size },
    };
  });

  return { nodes: nextNodes, edges, layoutOptions };
}