const { app, BrowserWindow, Menu, MenuItem, shell } = require('electron') //powered by electron
const path = require('path') //uses the built-in node path package

function createWindow () {
  const win = new BrowserWindow({ //creates the new windows
    width: 434,
    height: 601,
    icon: path.join(__dirname, 'logo.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      devTools: true,
    }
  })

  win.setResizable(false);

  win.setMenu(null); //hides the upper menu

  const menu = Menu.buildFromTemplate([
    {
      label: 'Help', //buttons category label
      submenu: [
        {
          label: 'Open Developer Tools', //button label
          accelerator: 'CmdOrCtrl+Shift+I', //shortcut
          click: () => {
            // Open the developer tools with the button
            win.webContents.openDevTools();
          },
        },
        {
            label: 'Github', //button label
            click: () => {
                shell.openExternal('https://github.com/discord-activy/activy');
                //opens the github repo in the user's browser
            }
        }
      ],
    }
  ]);

  Menu.setApplicationMenu(menu); //sets the new menu as we created

  win.loadFile('index.html') //loads the index.html file
}

app.whenReady().then(() => {
  createWindow() //creates the windows when the app is ready

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})