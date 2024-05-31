const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 750,
    minWidth: 380,
    minHeight: 700,
  });
  win.loadFile('index.html');
  win.setMenu(null);
}

app.whenReady().then(() => {
  createWindow();
});
