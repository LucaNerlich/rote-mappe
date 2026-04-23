// Minimal network-passthrough service worker.
//
// Why this file exists:
// - Chromium-based browsers (Chrome, Edge, Android Chrome) require an active
//   service worker with a `fetch` handler before they treat the site as
//   installable (i.e. before they fire `beforeinstallprompt` and show the
//   "Install app" affordance). iOS Safari doesn't need this, but shipping a
//   SW keeps parity across platforms.
// - We deliberately do NOT cache anything. The project previously used
//   vite-plugin-pwa + Workbox precaching, which left returning users stuck
//   on stale bundles after deploys. A passthrough SW gives us installability
//   without reintroducing that class of bug.
//
// On first activation we also wipe any cache entries left over from the
// old Workbox-based SW so returning users don't keep megabytes of dead
// precache data around forever.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const cacheKeys = await caches.keys();
      await Promise.all(
        cacheKeys
          .filter((key) => key.startsWith('workbox-') || key.includes('precache'))
          .map((key) => caches.delete(key))
      );
    } catch (_) {
      // Cache cleanup is best-effort; never block activation on it.
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  // Network passthrough. No caching, no offline fallback — the browser's
  // normal HTTP cache handles performance, and the site requires the network
  // to function anyway. The handler exists purely to satisfy the "has a
  // fetch handler" installability criterion in Chromium.
  event.respondWith(fetch(event.request));
});
