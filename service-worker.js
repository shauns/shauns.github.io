self.__precacheManifest = [
  {
    "url": "/_next/static/VsqeavsL4AAVNSsy-9xFf/_buildManifest.js",
    "revision": "538b8f4a298241be7ceeb49190fc5ae5"
  },
  {
    "url": "/_next/static/VsqeavsL4AAVNSsy-9xFf/pages/_app.js",
    "revision": "c9b30d4598ee16177803"
  },
  {
    "url": "/_next/static/VsqeavsL4AAVNSsy-9xFf/pages/_error.js",
    "revision": "b38a694c0c97c98f4aaf"
  },
  {
    "url": "/_next/static/VsqeavsL4AAVNSsy-9xFf/pages/index.js",
    "revision": "7e9ea468ba1968f9c9c5"
  },
  {
    "url": "/_next/static/chunks/1bfc9850.ef19afdb397351ee8a45.js",
    "revision": "5d2cc04c0810bc28355e"
  },
  {
    "url": "/_next/static/chunks/252f366e.6e5521f8581edda6b3a0.js",
    "revision": "8d1a1b78b2e60ccbf65c"
  },
  {
    "url": "/_next/static/chunks/95873029f47ab57de4ed575d4928b2fc537f6d61.f5868fc0f53466aa6279.js",
    "revision": "06ee3fe11da2deb2528c"
  },
  {
    "url": "/_next/static/chunks/commons.91db29748fe1635ed6ff.js",
    "revision": "2d7071822f76ca888f5d"
  },
  {
    "url": "/_next/static/chunks/framework.94bc9fd9a7de53a90996.js",
    "revision": "0dbc4a39205e343f876d"
  },
  {
    "url": "/_next/static/chunks/styles.2e7ef780858f1c1afa44.js",
    "revision": "ba88bfb2a5e493ec524b"
  },
  {
    "url": "/_next/static/css/styles.04f1142f.chunk.css",
    "revision": "ba88bfb2a5e493ec524b"
  },
  {
    "url": "/_next/static/runtime/main-a9b38ab962f9ad5cb518.js",
    "revision": "f95db2525e476645b095"
  },
  {
    "url": "/_next/static/runtime/polyfills-94f0186407335ec616c3.js",
    "revision": "c2aafb1dc4ee9405f92d"
  },
  {
    "url": "/_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js",
    "revision": "339869abd27a67efd9af"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, new workbox.strategies.CacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.expiration.Plugin({ maxAgeSeconds: 31536000, maxEntries: 30, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
