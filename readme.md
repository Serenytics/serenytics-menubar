# Serenytics menu bar app

Menu bar application to consult your [Serenytics](https://www.serenytics.com) dashboards.

## Quick start

- Download the latest version [here]() (OSX only).
- Create a text file `~/.serenytics-menubar` with the following content:

```
username=YOUR_USERNAME
password=YOUR_PASSWORD
webAppUuid=OPTIONAL_YOUR_DASHBOARD_UUID
```

- launch the app!

## Developer

- clone the repo
- run `npm install`

To start the app:

- run `npm start`

To build a package:

- run `npm run build`

## Credits

This app uses [menubar](https://github.com/maxogden/menubar), itself based on [Electron](https://electron.atom.io/).
