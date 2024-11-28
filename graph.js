export const nodes = [
  {
    "id": "start",
    "type": "input",
    "data": { "label": "Start" },
    "position": { "x": 300, "y": 50 }
  },

  {
    "id": "action_check",
    "type": "default",
    "data": {
      "label": "Check Pending Inbounds\nCheck if there is any pending inbound action."
    },
    "position": { "x": 300, "y": 150 }
  },

  {
    "id": "pending_decision",
    "type": "default",
    "data": { "label": "Is there a pending restart?" },
    "position": { "x": 300, "y": 250 }
  },
  {
    "id": "pending_yes",
    "type": "default",
    "data": { "label": "Yes" },
    "position": { "x": 150, "y": 350 }
  },
  {
    "id": "pending_no",
    "type": "default",
    "data": { "label": "No\nEnd State" },
    "position": { "x": 450, "y": 350 }
  },

  {
    "id": "update_check",
    "type": "default",
    "data": { "label": "Is an update pending?" },
    "position": { "x": 150, "y": 450 }
  },
  {
    "id": "update_yes",
    "type": "default",
    "data": { "label": "Yes" },
    "position": { "x": 100, "y": 550 }
  },
  {
    "id": "update_no",
    "type": "default",
    "data": { "label": "No\nEnd State" },
    "position": { "x": 200, "y": 550 }
  },

  {
    "id": "group_permissions",
    "type": "default",
    "data": { "label": "User Permissions Check" },
    "position": { "x": 100, "y": 650 },
    "style": { "width": "100%", "height": 500, "background": "transparent", 'display': 'flex' }
  },

  {
    "id": "campaign_prompt",
    "type": "default",
    "data": {
      "label": "Campaign Prompt\nPrompt user to restart device now or later."
    },
    "position": { "x": 50, "y": 50 },
    "parentId": "group_permissions"
  },

  {
    "id": "restart_now",
    "type": "default",
    "data": { "label": "Restart Now" },
    "position": { "x": -100, "y": 150 },
    "parentId": "group_permissions"
  },
  {
    "id": "remind_hours",
    "type": "default",
    "data": { "label": "Remind in X hours\nOptions: 1 hour, 60 min" },
    "position": { "x": 100, "y": 150 },
    "parentId": "group_permissions"
  },
  {
    "id": "remind_tomorrow",
    "type": "default",
    "data": { "label": "Remind Tomorrow\nOptions: 3 hours, 24 hours" },
    "position": { "x": 300, "y": 150 },
    "parentId": "group_permissions"
  },

  {
    "id": "restart_decision",
    "type": "default",
    "data": { "label": "Has device been recently restarted?" },
    "position": { "x": 100, "y": 250 },
    "parentId": "group_permissions"
  },

  {
    "id": "restart_last_day",
    "type": "default",
    "data": { "label": "Restarted in last day\nEnd State" },
    "position": { "x": 0, "y": 350 },
    "parentId": "group_permissions"
  },
  {
    "id": "restart_default_exit",
    "type": "default",
    "data": { "label": "Default Exit\nExit after 3 times\nEnd State" },
    "position": { "x": 200, "y": 350 },
    "parentId": "group_permissions"
  },
  {
    "id": "restart_three_times",
    "type": "default",
    "data": { "label": "Request after 3 times\nEnd State" },
    "position": { "x": 350, "y": 350 },
    "parentId": "group_permissions"
  },

  {
    "id": "os_check",
    "type": "default",
    "data": { "label": "Check Operating System" },
    "position": { "x": 100, "y": 1150 }
  },
  {
    "id": "os_macos",
    "type": "default",
    "data": { "label": "macOS" },
    "position": { "x": 50, "y": 1250 }
  },
  {
    "id": "os_windows",
    "type": "default",
    "data": { "label": "Windows" },
    "position": { "x": 150, "y": 1250 }
  },

  {
    "id": "restart_macos",
    "type": "default",
    "data": { "label": "Restart macOS Device\nEnd State" },
    "position": { "x": 50, "y": 1350 }
  },
  {
    "id": "restart_windows",
    "type": "default",
    "data": { "label": "Restart Windows Device\nEnd State" },
    "position": { "x": 150, "y": 1350 }
  }
];
  export const edges =[
    {
      "id": "e-start-action_check",
      "source": "start",
      "target": "action_check",
      "label": "Start Process"
    },
    {
      "id": "e-action_check-pending_decision",
      "source": "action_check",
      "target": "pending_decision",
      "label": "Next Step"
    },
    {
      "id": "e-pending_decision-pending_yes",
      "source": "pending_decision",
      "target": "pending_yes",
      "label": "Yes"
    },
    {
      "id": "e-pending_decision-pending_no",
      "source": "pending_decision",
      "target": "pending_no",
      "label": "No"
    },

    {
      "id": "e-pending_yes-update_check",
      "source": "pending_yes",
      "target": "update_check",
      "label": "Check Update"
    },
    {
      "id": "e-update_check-update_yes",
      "source": "update_check",
      "target": "update_yes",
      "label": "Yes"
    },
    {
      "id": "e-update_check-update_no",
      "source": "update_check",
      "target": "update_no",
      "label": "No"
    },

    {
      "id": "e-update_yes-group_permissions",
      "source": "update_yes",
      "target": "group_permissions",
      "label": "Permissions Check"
    },
    {
      "id": "e-campaign_prompt-restart_now",
      "source": "campaign_prompt",
      "target": "restart_now",
      "label": "Restart Now"
    },
    {
      "id": "e-campaign_prompt-remind_hours",
      "source": "campaign_prompt",
      "target": "remind_hours",
      "label": "Remind X hours"
    },
    {
      "id": "e-campaign_prompt-remind_tomorrow",
      "source": "campaign_prompt",
      "target": "remind_tomorrow",
      "label": "Remind Tomorrow"
    },

    {
      "id": "e-remind_hours-restart_decision",
      "source": "remind_hours",
      "target": "restart_decision",
      "label": "Device Check"
    },
    {
      "id": "e-remind_tomorrow-restart_decision",
      "source": "remind_tomorrow",
      "target": "restart_decision",
      "label": "Device Check"
    },

    {
      "id": "e-restart_decision-restart_last_day",
      "source": "restart_decision",
      "target": "restart_last_day",
      "label": "Last Day"
    },
    {
      "id": "e-restart_decision-restart_default_exit",
      "source": "restart_decision",
      "target": "restart_default_exit",
      "label": "Default Exit"
    },
    {
      "id": "e-restart_decision-restart_three_times",
      "source": "restart_decision",
      "target": "restart_three_times",
      "label": "Request 3 times"
    },

    {
      "id": "e-restart_default_exit-os_check",
      "source": "restart_default_exit",
      "target": "os_check",
      "label": "Check OS"
    },
    {
      "id": "e-os_check-os_macos",
      "source": "os_check",
      "target": "os_macos",
      "label": "macOS"
    },
    {
      "id": "e-os_check-os_windows",
      "source": "os_check",
      "target": "os_windows",
      "label": "Windows"
    },

    {
      "id": "e-os_macos-restart_macos",
      "source": "os_macos",
      "target": "restart_macos",
      "label": "Restart macOS"
    },
    {
      "id": "e-os_windows-restart_windows",
      "source": "os_windows",
      "target": "restart_windows",
      "label": "Restart Windows"
    },
    {
      "id": "update_yes-campaign_prompt",
      "source": "update_yes",
      "target": "campaign_prompt",
      "label": "Campaign Prompt"
    }
  ]
