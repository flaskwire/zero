
self.addEventListener("install", e => {
  console.log("[SW] Installed");
});
self.addEventListener("fetch", e => {
  console.log("[SW] Fetching", e.request.url);
});
