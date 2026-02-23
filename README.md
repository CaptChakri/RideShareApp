# Ride Share App

React Native + Expo sample rideshare application.

## Prerequisites

- Node.js 18+
- npm 9+

Install dependencies:

```bash
npm install
```

## Run the app locally

Start Expo in web mode:

```bash
npm run web
```

Then open the local URL shown in the terminal (usually `http://localhost:19006`).

## Build / test the app

This repo now includes CI-friendly scripts that run in offline mode to avoid Expo dependency checks that can fail in restricted environments.

Run the production web build (also used as the default test command):

```bash
npm run build
```

Run the test command:

```bash
npm test
```

> `npm test` currently runs the same validation as `npm run build` by exporting the web bundle with Expo.

## Available scripts

- `npm run start` - start Expo
- `npm run android` - open Android target
- `npm run ios` - open iOS target
- `npm run web` - start Expo web dev server
- `npm run build` - export production web bundle (`expo export:web`)
- `npm test` - run the build validation
