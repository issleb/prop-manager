## Installation

- `git clone <repository-url>` this repository
- `cd prop-manager`
- `npm i`

## Building

- `npm run build`
- This will build the extension and copy it to the dist folder with Prod settings.

## Getting started

- Run the build.
- Navigate to chrome://extensions in Chrome.
- Turn on "Developer mode" via the slider at the top-right.
- Click the "Load unpacked" button and select the dist folder created during the build process.
- Navigate to one of the propertties below to see the extension in action.
- Click the refresh button to reload the extension after a build.

## Working properties

- The properties below are currently hardcoded into /src/data/api.json:
- [AirBnb 1](https://www.airbnb.com/rooms/610721631326249541)
- [AirBnb 2](https://www.airbnb.com/rooms/33654056)


## Development

- `npm start`
- Click the refresh button to reload the extension if switch from build mode.
- This will build the extension, copy it to the dist folder with Dev settings and start watching the project. 
- When running in devlopment, you will also see a "Tookkit" at the top of the page. Use the "Refresh" button on the toolkit to reload the extension after changes.

## Running locally

- `npm run host`
- You can also view the app on a blank page rather than as an extension for easier development.
