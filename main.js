const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 700,
    minWidth: 250,
    minHeight: 650,
  });
  win.loadFile('index.html');
  win.setMenu(null);
}

app.whenReady().then(() => {
  createWindow();
});
