'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "046132b4f32b24b414540f2cb6466aa5",
"/assets\audios\DING.mp3": "1d3a4523212d33ec4fc94cacb27a0f7e",
"/assets\audios\sad.mp3": "c6709719258121f82e94b220402eae92",
"/assets\audios\VICTORY.mp3": "012adf671ca910a16d386e044ad71138",
"/assets\audios\YAY.mp3": "63c1593a3dd9508ebbb2601a319e5c75",
"/assets\FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "b3a46a2990909b363d1abd5f3028aac0",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "a231e2d1c90ad90cf9fd5597931ad73c",
"/main.dart.js": "666498ee09472cb70e87ae1cd0a71ab2",
"/manifest.json": "dd72c0f0ae3c7d83e09401dfd32c437a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
