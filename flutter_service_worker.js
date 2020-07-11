'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "25154c58cbd18025c72fa40f11ad0eb4",
".git/config": "abda33996b017c93115d0f8f4347698b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "2a0cf97fc4b0da669acff9efacf709a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a26496c99f27b1e3489131eef1bac6ea",
".git/logs/refs/heads/master": "a26496c99f27b1e3489131eef1bac6ea",
".git/logs/refs/remotes/origin/master": "86ed9c34cbfc3ee621661b695f2f1709",
".git/objects/06/7f594add218df8c537e80c78158783593239f0": "b0783d034347fb25cf32216bcedb542a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1e/90a4ec206506e338c260b7be9abff8018d789b": "6510a9acea33ff17f8c57adcd766e264",
".git/objects/1f/f28ac80294836291d5136b564b9f438ecccab8": "9b28d63f5311b7b3abba0832d2b5a894",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/36/2cc0d3efd3c76f05ded84ddcc03dd72a9d267f": "076c032b2dba59a210c6bf0d9a4f2c26",
".git/objects/3c/81e150e93622e058ed55c0c77a9579c178ff08": "209802a454bd21e0be57384e47032959",
".git/objects/4b/32eac62eda8174f1f8907c48622609378a8b5a": "2226fd6bc9f09e893578beca50fe8bed",
".git/objects/68/c3e69c89a116adac5035b7bad08ef8f693c134": "b032ce762882fb977525314e048dd7df",
".git/objects/6c/adddb82c29ec947efef523e866fc6c52e36906": "1916ed967d4d59e36b18db0d4ac77423",
".git/objects/75/38538a75ffde067e627b0b89e441eb193680c3": "bbcb8f16b0308596b0cdb35dec3a13b2",
".git/objects/7e/b8885001cc838c693e55c44fde75cbd30e348c": "3161ddae2b1a5acbe12c547025809072",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/87/550d547dc9548fb3a46c2d6ab9d9c9f135af5d": "15efa04b20c8c6c544ccbf7734381795",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/c16239e73370b51ca1470ccb20b566239923b3": "c9c43f14bb30c1f6c09d4c5ae58125f5",
".git/objects/92/cd98d6cb03058121f726f70a3c097ceb7cebec": "c6cc669281b240e53ae1c68f25b1b092",
".git/objects/94/ca151ae14fbca64316e0adc4a84ef3330de8b4": "85b83cb2bcef03fe8409ed7cc900ec12",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a1/cf41a6a167c08b1c0f34a029074da3b405bc0a": "60b0e6f2c22b5d0c23bb8061a07dd94c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cd/9d08bacc71180ea877180688ea160020d11a6d": "f5918f5027afa3a48de34b38650e0ec5",
".git/objects/d0/7f14fb59197500a3e20939bf07df367bdcb9e8": "e1ffa5d7a25d363bb424771606870bfd",
".git/objects/dc/3d56c22e5ee53fa0b581aadacf547338ae2bba": "b8f19647f6a86d8715f346375519b1fa",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f6/bed400350b151b9da4fd6b1eb358e85f37c6ea": "d3765b1e8ce014b7c386223e8f2de9a2",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "aff82b52d579a83a99d7122b2fba8f5e",
".git/refs/remotes/origin/master": "aff82b52d579a83a99d7122b2fba8f5e",
"assets/AssetManifest.json": "c9987d130328d67604addb2a9493ddb6",
"assets/assets/body.jpg": "9d76454e0638f40b5085a91dff8d840e",
"assets/assets/image1.JPG": "9ebaf112430fa369556fb794fa803abc",
"assets/assets/image2.JPG": "67c5ba8c68b21727f525bcd96cc5ee48",
"assets/assets/image3.JPG": "cabfcc1ee88fc31392c877dc44d138ed",
"assets/assets/image4.jpeg": "f5d064f71cb50de57f965bf36bc8216a",
"assets/assets/image5.jpeg": "f7996ac3a344e6ff1f74f70554c2106f",
"assets/assets/image_page.JPG": "2d4c8c140ceec7ee6ee83c1e1d7fbd22",
"assets/assets/thank.png": "a78a41c639eda698e8b553c9ebf575ea",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "56190d4133fe64cd552448fac2092161",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"git": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "96d993fc170c98ff02b025351bf34999",
"/": "96d993fc170c98ff02b025351bf34999",
"main.dart.js": "2a6c642f9a1b09eb2097b8d62c43a364",
"manifest.json": "7c0c4fcaa98aa0bf04b56c3191efae99"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
