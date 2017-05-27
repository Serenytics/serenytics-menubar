// load config from ~/.serenytics-menubar
require('dotenv').config({path: process.env.HOME + '/.serenytics-menubar'});

const menubar = require('menubar');
const {dialog} = require('electron');


process.on('uncaughtException', function (err) {
    dialog.showErrorBox('Uncaught Exception: ' + err.message, err.stack || '')
    app.app.quit()
});

const app = menubar({
    width: 1350,
    height: 900,
    preloadWindow: true
});

app.on('ready', function ready () {
  console.log('Serenytics menubar is ready!');
});

app.on('after-create-window', function () {
    // mb.window.openDevTools();

    const env = process.env;
    const config = {
        username: env.username,
        password: env.password,
        webAppUuid: env.webAppUuid
    };

    if (!config.username || !config.password) {
        dialog.showErrorBox('Configuration error!', `
You need to create a file named ~/.serenytics-menubar containing:

username=YOUR_USERNAME
password=YOUR_PASSWORD
webAppUuid=OPTIONAL_YOUR_DASHBOARD_UUID
        `);
        app.app.quit()
    }

    app.window.webContents.executeJavaScript(`window.main('${JSON.stringify(config)}')`);
});


