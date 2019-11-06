var cacheName = 'lwing';

var filesToCache = [
  '/',
  '/index.html',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/browserconfig.xml',
  '/bundle.css',
  '/bundle.css.map',
  '/bundle.js',
  '/bundle.js.map',
  '/favicon.ico',
  '/favicon-32x32.png',
  '/global.css',
  '/icons/clipboard.png',
  '/icons/share.png',
  '/icons/whatsapp.png',
  '/index.html',
  '/logo.svg',
  '/manifest.json',
  '/mstile-150x150.png',
  '/safari-pinned-tab.svg'
,
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
