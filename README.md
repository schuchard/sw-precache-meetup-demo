# SvcWorkerDemo

## Setup

`npm install -g live-server`

`npm install`

`npm run launch`

### If you're starting from a blank Angular ClI project:

1. install dependencies
    1. `npm install --save-dev sw-precache`
2. add service worker registration to `main.ts` file
3. add `service-worker.js` file to `/src` directory
4. add `service-worker.js` file path to angular-cli assets array
5. add `sw-precache-config.js` file to root dir
    1. `navigateFallback` – if the user requests a url not recognized fallback to index.html
    2. `stripPrefix` – tells precache that dist is the root and to not add it to file paths
    3. `root` – tells precache where to create the service worker file
    4. `staticFileGlobs` – tells precache what files to cache
6. `ng build --prod`
7. add scripts to `package json`
    1. build sw - `"sw": "sw-precache --root=dist --config=sw-precache-config.js"`
    2. demo server - `"static-serve": "cd dist && live-server --port=4200 --host=localhost --entry-file=/index.html"`
8. `npm run sw`
9. `npm run static-serve`

----

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
