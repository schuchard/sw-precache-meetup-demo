# Code Example:

###### Create the app
`ng new my-app`

###### Run the app
`ng serve`

###### Add Service worker code to index.html
```
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('Service Worker registered');
    }).catch(function(err) {
      console.log('Service Worker registration failed: ', err);
    });
  }
</script>
```
###### Add service-worker.js to src folder

###### Add service-worker to assets in .angular-cli.json

Service worker is now installed.  Should be able to see it Applications Tab->Service Worker section… it doesn’t do anything yet because service-worker.js doesn’t have any code.

sw-precache is a library for caching static assets

###### First, build the project
`ng build --prod`

###### Install sw-precache
`npm install --save-dev sw-precache`

###### Add to package.json scripts section
`"sw": "sw-precache --root=dist --config=sw-precache-config.js"`

Tells sw-precache to generate the service worker in our dist folder and user the sw-precache-config.js for config info

###### Create sw-precache-config.js
```
module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css'
  ]
};
```
###### Config Explanation
NavigateFallback – if the user requests a url not recognized fallback to index.html
stripPrefix – tells precache that dist is the root and to not add it to file paths
root – tells precache where to create the service worker file
staticFileGlogs – tells precache what files to cache


###### run sw-precach
`npm run sw`

###### install live-server
`npm install -g live-server`

###### add live server to package.json scripts
`"static-serve": "cd dist && live-server --port=4200 --host=localhost --entry-file=/index.html"`

###### run the app
`npm run static-serve`
