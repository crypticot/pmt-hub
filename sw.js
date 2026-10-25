/* PMT Hub service worker (pass-through, same approach as Limey).
   It keeps the site installable but never saves pages, so every edit
   shows on the next reload. No version number to bump. */

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

/* Empty on purpose: every request goes to the network as normal. */
self.addEventListener('fetch', () => {});
