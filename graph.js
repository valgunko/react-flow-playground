
export const nodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Start' },
      position: { x: 200, y: 5 },
      width: 200,
    },
    {
      id: '2',
      data: { label: 'Check Pending Inbounds Check if there is any pending inbound action.' },
      position: { x: 200, y: 65 },
      width: 200,
    },
    {
      id: '3',
      data: { label: 'Is there a pending restart?' },
      position: { x: 200, y: 155 },
      width: 200, 
    },
    {
      id: '4a',
      data: { label: 'Yes' },
      position: { x: 0, y: 205 },
      width: 100, 
    },
    {
      id: '4b',
      data: { label: 'No' },
      position: { x: 450, y: 205 },
      width: 100, 
    },
    {
      id: '5',
      data: { label: 'Is an update pending?' },
      position: { x: 200, y: 265 },
      width: 200, 
    },
    {
      id: '6a',
      data: { label: 'Yes' },
      position: { x: 0, y: 325 },
      width: 100, 
    },
    {
      id: '6b',
      data: { label: 'No' },
      position: { x: 450, y: 325 },
      width: 100, 
    },
    {
      id: '7',
      data: null,
      position: { x: -300, y: 395 },
      width: 1200,
      height: 400,
      style: {
        backgroundColor: 'rgba(240,240,240,0.25)',
      },
    },
    {
      id: '8',
      data: { label: 'Remind Tomorrow.' },
      position: { x: 500, y: 50 },
      parentId: '7',
      extent: 'parent',
      width: 200,
    },
    {
      id: '9a',
      data: { label: 'Campaign Promp Prompt user to restart device now or later.' },
      position: { x: 40, y: 135 },
      parentId: '7',
      extent: 'parent',
      width: 200,
    },
    {
      id: '9b',
      data: { label: 'Remind in X hours Options: 1 hour, 60' },
      position: { x: 500, y: 135 },
      parentId: '7',
      extent: 'parent',
      width: 200,
    },
    {
      id: '9c',
      data: { label: 'Restart Now' },
      position: { x: 880, y: 135 },
      parentId: '7',
      extent: 'parent',
      width: 200,
    },
    {
      id: '10',
      data: { label: 'Default Exit' },
      position: { x: 20, y: 400 },
      parentId: '7',
      extent: 'parent',
      width: 200,
      style: {
        marginTop: 20,
      }
    },
    {
      id: '11',
      data: { label: 'Exit After X times' },
      position: { x: 280, y: 400 },
      parentId: '7',
      extent: 'parent',
      width: 200,
      style: {
        marginTop: 20,
      }
    },
    {
      id: '12',
      data: { label: 'Exit After X times' },
      position: { x: 280, y: 400 },
      parentId: '7',
      extent: 'parent',
      width: 200,
      style: {
        marginTop: 20,
      }
    },
    {
      id: '13',
      data: { label: 'Exit After X minutes' },
      type: 'output',
      position: { x: 720, y: 400 },
      parentId: '7',
      extent: 'parent',
      width: 200,
      style: {
        marginTop: 20,
      }
    },
    {
      id: '14',
      data: { label: 'Custom exit' },
      position: { x: 960, y: 400 },
      parentId: '7',
      extent: 'parent',
      width: 200,
      style: {
        marginTop: 20,
      }
    },
    {
      id: '15',
      data: { label: 'Check Operating System' },
      position: { x: 200, y: 825 },
      width: 200,
    },
    {
      id: '15a',
      data: { label: 'macOS' },
      position: { x: 0, y: 895 },
      width: 200,
    },
    {
      id: '15b',
      data: { label: 'Windows' },
      position: { x: 400, y: 895 },
      width: 200,
    },
    {
      id: '16',
      data: { label: 'End' },
      position: { x: 0, y: 955 },
      width: 200,
    },
    {
      id: '17',
      data: { label: 'End' },
      position: { x: 400, y: 955 },
      width: 200,
    },
  ];
   
  export const edges = [
      {
          "id": "e1-2",
          "source": "1",
          "target": "2"
      },
      {
          "id": "e2-3",
          "source": "2",
          "target": "3"
      },
      {
          "id": "e3-4a",
          "source": "3",
          "target": "4a"
      },
      {
          "id": "e3-4b",
          "source": "3",
          "target": "4b"
      },
      {
          "id": "e4a-5",
          "source": "4b",
          "target": "5"
      },
      {
          "id": "e5-6a",
          "source": "5",
          "target": "6a"
      },
      {
          "id": "6a-7",
          "source": "6a",
          "target": "7"
      },
      {
          "id": "7-13",
          "source": "7",
          "target": "15"
      },
      {
          "id": "8-9a",
          "source": "8",
          "target": "9a"
      },
      {
          "id": "8-9b",
          "source": "8",
          "target": "9b"
      },
      {
          "id": "8-9c",
          "source": "8",
          "target": "9c"
      },
      {
          "id": "15-15a",
          "source": "15",
          "target": "15a"
      },
      {
          "id": "15-15b",
          "source": "15",
          "target": "15b"
      },
      {
          "id": "15b-16",
          "source": "15a",
          "target": "16"
      },
      {
          "id": "15a-17",
          "source": "15b",
          "target": "17"
      },
      {
          "source": "9a",
          "target": "10",
          "id": "xy-edge__9a-10"
      },
      {
          "source": "9b",
          "target": "11",
          "id": "xy-edge__9b-11"
      },
      {
          "source": "9c",
          "target": "14",
          "id": "xy-edge__9c-14"
      }
  ];
   
