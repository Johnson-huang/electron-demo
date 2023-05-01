const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })
    ipcMain.handle('ping', () => 'pong')
    win.loadFile('index.html')
}

// 通常我们使用触发器的 .on 函数来监听 Node.js 事件。
// 但是 Electron 暴露了 app.whenReady() 方法，作为其 ready 事件的专用监听器，这样可以避免直接监听 .on 事件带来的一些问题
// 参见 electron/electron#21972 。
app.whenReady().then(() => {
    createWindow()

    // 即使没有打开任何窗口，macOS 应用通常也会继续运行
    // 在没有窗口可用时调用 app 会打开一个新窗口。
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 在 Windows 和 Linux 上，我们通常希望在关闭一个应用的所有窗口后让它退出
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
