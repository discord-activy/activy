var rpc = require("discord-rpc");
const { contextBridge } = require('electron');
const client = new rpc.Client({ transport: 'ipc' });

var config = {
    pid: process.pid,
    activity : {
        details : "Customizing Activy",
        assets : {
            large_image : "big",
            large_text : "@Activy [v0.0.1-alpha]"
        },
        buttons : [{label : "Powered By Activy" , url : "https://github.com/discord-activy/activy"}]
    }
}

var conf = {
    client_id: '1074339964185215116'
}



contextBridge.exposeInMainWorld('client', {
  login: () => {
    const client = new rpc.Client({ transport: 'ipc' });

    client.login({ clientId : conf.client_id || '1074339964185215116' });

    client.on('ready', () => {
        client.request('SET_ACTIVITY', config)
    });
  },
  set_client_id: (d) => {
    conf.client_id = d;
  },
  set_details: (d) => {
    config.activity.details = d;
  },
  set_large_image: (d) => {
    config.activity.assets.large_image = d;
  },
  set_large_text: (d) => {
    config.activity.assets.large_text = d;
  }
});

  