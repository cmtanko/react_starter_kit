const url = require('url');
const path = require('path');
var log = require('electron-log');
const electron = require('electron');

const { app, Menu, BrowserWindow } = electron;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'My App',
    transparent: true,
    titleBarStyle: 'hidden'
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  mainWindow.setMenu(null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
