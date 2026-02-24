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

> `npm test` currently runs the same validation as `npm run build` by exporting the bundle with Expo.

## Available scripts

- `npm run start` - start Expo
- `npm run android` - open Android target
- `npm run ios` - open iOS target
- `npm run web` - start Expo web dev server
- `npm run build` - export production bundle (`expo export`)
- `npm test` - run the build validation

## CI startup validation integration

A GitHub Actions workflow now validates that the app can start without build failures by running the production build on every pull request and on pushes to `main`:

- Workflow: `.github/workflows/startup-validation.yml`
- Validation steps: `npm run build`, an Expo startup smoke check (`expo start --offline`), and HTTP `curl` checks that expect `200` from all three runtime targets: web (`/`), iOS bundle (`/index.bundle?platform=ios...`), and Android bundle (`/index.bundle?platform=android...`).

