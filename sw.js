const CACHE_NAME = "silabas-v3";


const FILES_TO_CACHE = [
  "../",
  "../index.html",
  "../style.css",
  "../js/app.js",
  "../manifest.json",

  "../assets/img/logo.png",
  "../assets/img/phone.png",
  "../assets/img/sound.png",

  "../assets/img/mascot-normal.png",
  "../assets/img/mascot-happy.png",
  "../assets/img/mascot-sad.png",
  "../assets/img/mascot-congrats.png",

  "../assets/sounds/success.mp3",
  "../assets/sounds/error.mp3",
  "../assets/sounds/congrats.mp3",

  "../assets/icons/icon-192.png",
  "../assets/icons/icon-512.png"
];


self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

