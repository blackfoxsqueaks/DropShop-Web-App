'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f4a4a16410fc0264149e00959bddeea8",
"version.json": "1b29dcc1643190cc9006db071a0d871a",
"index.html": "e79872902448fbb80ea1e780ef01b20e",
"/": "e79872902448fbb80ea1e780ef01b20e",
"styles.css": "3a077037ea142830e4bae0cf890547b6",
"main.dart.js": "d392bf756276f26ed161b944e0d5dce8",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"drop_header_desktop.webp": "d95a01e8489486fec07193ce6900ba83",
"drop_init.js": "4eeb70096b06bdc6a8b2c4b07072d441",
"favicon.png": "729195ec7f4ce3ac8026a6c4242e5565",
"icons/Icon-192.png": "a2b55a6277cf330341672752aa497ebb",
"icons/Icon-maskable-192.png": "cc65814539784bf0e073174c583dbea1",
"icons/Icon-maskable-512.png": "f521106622a77ec060777b76553fa2d5",
"icons/Icon-512.png": "c73dbefd372d39fe807c88ec9e6a205e",
"manifest.json": "74bf8c7c642ae437a7198ab3026ec77a",
"assets/AssetManifest.json": "c12db09af8e8d622fb44a74134f062a3",
"assets/NOTICES": "85d9ba5cc3e91ad0cbd941a113a3454a",
"assets/FontManifest.json": "032dc0d8b5d2bb6cf37649f3af3ed4ea",
"assets/AssetManifest.bin.json": "05f676d6502b0bf37fac14b138ae2afd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a90d768d64a55ac20153458f1ef8fb2b",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6903aebfb5d92cbfcb1ce7f99f2c9c4d",
"assets/fonts/MaterialIcons-Regular.otf": "7e59f996aa620095dc46a6c7bd4cb4f1",
"assets/assets/dropshop-header.png": "ff0d2979eecf6bc87f07587a617f057a",
"assets/assets/burger_back.png": "938f95c4c2471c03b55fa16db3992d53",
"assets/assets/drop_blob.gif": "69d18742f9dabc9599404457cb8e0c90",
"assets/assets/egypt_plates.png": "6d669902d55e3cfe967b6df3e9b35368",
"assets/assets/burger_back_blue.png": "9a5765b8ecf38fe24292b039bff73793",
"assets/assets/image_placeholder.png": "370fa560f6e01d2b5111d1821d538ced",
"assets/assets/drop_blob.mp4": "a7282c501dedbf3f239bb8e74d79e68a",
"assets/assets/burger_blue.png": "b1a6763f1d23119349ad666dc48e6601",
"assets/assets/dropshop-logo-white.png": "baaf9e628b5b62a3ef11eb1013029fb5",
"assets/assets/icons/users-white.png": "d7683836ebbdd9c74e4b457902e43063",
"assets/assets/icons/hours-white.png": "f10f38757832e3b0b778102958dcb083",
"assets/assets/icons/home-white.png": "f6acd9191f8ef62f8bbb25c726e5aa5b",
"assets/assets/icons/billing-white.png": "cf753ed45f8b57d4111701e3dbb8c99f",
"assets/assets/icons/orders-black.png": "70601d03c1fba978c0b2d80ca5b249d0",
"assets/assets/icons/locations-white.png": "927ee1e620c28bee6ea344ae22ad6a2e",
"assets/assets/icons/items-black.png": "df1514d349ed62e9a56c14155ccb28d1",
"assets/assets/icons/users-black.png": "7714816ad8f96c5096de609fdf877004",
"assets/assets/icons/hours-black.png": "fca91d692ba1a441571096bc9fa3b5f0",
"assets/assets/icons/home-black.png": "1fd72a0b4ab396a013402e6f5a5bccd6",
"assets/assets/icons/billing-black.png": "ef2271ec1886062269dd309bfeef437e",
"assets/assets/icons/locations-black.png": "45865d83b00eb19f16e4e5988575660d",
"assets/assets/icons/orders-white.png": "06eab7dc6bed5416a5e221e619ac3940",
"assets/assets/icons/items-white.png": "671aba67524b6a45c31bf41e834ee11f",
"assets/assets/warsha-logo.png": "92ac453001fa3c0533c3e26f0761e24c",
"assets/assets/dropshop-logo-blue.png": "a6c993329d4eac6359808ff6eddbe1cc",
"assets/assets/fonts/LTWave-Medium.otf": "168583b17e1c9bbee69c91ba57c6aad1",
"assets/assets/fonts/LTWave-Regular.otf": "2034dcdb917ab6a966ff21632b4e7a1f",
"assets/assets/fonts/LTWave-Bold.otf": "664b5bfb042261d2c593c2bfee41ed4b",
"assets/assets/burger.png": "323aaea4fbd6bad75478a0714a865ca2",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
        "index.html",
        "flutter_bootstrap.js",
        "assets/AssetManifest.bin.json",
        "assets/FontManifest.json",
        "canvaskit/skwasm.js",
        "canvaskit/skwasm.wasm",
        "canvaskit/canvaskit.js"
        ];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
