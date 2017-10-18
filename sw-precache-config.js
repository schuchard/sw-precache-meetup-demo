module.exports = {

  // if the user requests a url not recognized fallback to index.html
  navigateFallback: '/index.html',

  // tells precache that dist is the root and to not add it to file paths
  stripPrefix: 'dist',

  // tells precache where to create the service worker file
  root: 'dist/',

  // tells precache what files to cache
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css'
  ]
};
