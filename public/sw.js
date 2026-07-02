const CACHE_NAME = "3d-print-course-v1";
const scopedPath = (path) => new URL(path.replace(/^\//, ""), self.registration.scope).pathname;
const OFFLINE_URL = scopedPath("/offline.html");
const PRECACHE_URLS = [
  scopedPath("/"),
  scopedPath("/course/"),
  scopedPath("/printers/"),
  scopedPath("/choose-printer/"),
  scopedPath("/materials/"),
  scopedPath("/software/"),
  scopedPath("/glossary/"),
  scopedPath("/troubleshooting/"),
  scopedPath("/checklists/"),
  scopedPath("/faq/"),
  scopedPath("/manifest.webmanifest"),
  OFFLINE_URL
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL)))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
