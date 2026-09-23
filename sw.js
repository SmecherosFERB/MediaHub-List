/* MEDIA HUB service worker.
   - the app page: network first (online you always get the newest version), cache when offline
   - fonts / icon CDN: stale-while-revalidate
   - Apps Script (your data), TMDB API and every non-GET request: network only, never cached
   Bump CACHE when this file changes so old caches are dropped. */
const CACHE = 'mediahub-v1';
const APP = 'MEDIAHUB_2026_09_21_new%20(2).html';
const SHELL = ['./', 'index.html', APP, 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png'];
const NEVER = /(^|\.)script\.google\.com$|(^|\.)googleusercontent\.com$|(^|\.)api\.themoviedb\.org$/;
const CDN = /(^|\.)cdnjs\.cloudflare\.com$|(^|\.)fonts\.googleapis\.com$|(^|\.)fonts\.gstatic\.com$/;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;                       // saves and every POST go straight to the network
  const url = new URL(req.url);
  if (NEVER.test(url.hostname)) return;                   // your data and TMDB are never served from a cache
  if (url.origin === location.origin) {
    if (req.mode === 'navigate' || req.destination === 'document' || url.pathname.endsWith('.html')) {
      e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
        .catch(() => caches.match(req, {ignoreSearch: true}).then(r => r || caches.match(APP))));
      return;
    }
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
    return;
  }
  if (CDN.test(url.hostname)) {
    e.respondWith(caches.open(CACHE).then(c => c.match(req).then(hit => {
      const net = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    })));
  }
  // everything else (posters from TMDB / Amazon...) behaves as if there was no service worker
});
