self.addEventListener('install', event => {
  console.log('[SW] Instalando...');
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/app/components/home/principal.html',
        '/script.js',
        '/assets/styles/style.css',
        '/assets/resources/FyA.png',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
        // Agrega más recursos si es necesario
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
