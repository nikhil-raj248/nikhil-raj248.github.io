'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "a23ab2a794f489993bb3ee8d3f11e3e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d365a4d1c07010fe55176739f2a000cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb88d523c61ca52a19f11746e07e9a5e",
".git/logs/refs/heads/main": "84337c8408fde5f1ebb66deeeb509f8a",
".git/logs/refs/remotes/origin/main": "52a843a857b54b5176c63d20d0722ee5",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/07/29ebdc508c3337c8e007c5c5768e1f28efabab": "8f1f0237dda8e21444cf024c1791881e",
".git/objects/07/3e8e2127e4135e7dbc301f26f4131b36ac328a": "16b0b4f01591f81ed884a09707153322",
".git/objects/07/a781bb16be21c9ca9dfe25e90e52c26ec709c0": "d20c98198a891d0c9e5c309ef99b9baa",
".git/objects/10/7db78ada677798ea23fa184d41cf57676171d4": "eb2355e6a369e1aca27fb86e092d1e03",
".git/objects/14/f1aedfd3fc8bbe20cac06e9d153c6abface40f": "ed5734f0110c21f2be7571345b550200",
".git/objects/14/f5968a9ede24d7c80a06ceedbfbda203711348": "ba3aad2880bd228270a26f361d065b1b",
".git/objects/1a/ed6edf79be27dc08a524ee4834fcba2b83b676": "5d343f3ff35713983656f34ce11fc58d",
".git/objects/1c/653c318870afc5391379c086e8f3badbf2e1e0": "e2efd9d99af6315b448a93147f7c679f",
".git/objects/27/5331b327efe38908c7dd8d5f5bcdb7a92bc520": "8da36882aa01924b9043129591bd4c47",
".git/objects/27/b760a06172800b3317e0cbc7c907c82d31580f": "1019b1e591ad031ace09d5a496593745",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/7312fe08988d37f9d89711d4a95f1b99e0a8db": "30329953e4a826c05e12466494fa150e",
".git/objects/3e/cd0679167288b25db2205c723c4b1a14325fe7": "4c3cce5bf1c9657fa7636e268b09793b",
".git/objects/44/68bcc8b4da1e006cc2d23943e2a6a72a67a591": "eb4ffd0a8cfd9529827add70fd75857d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/92339b1df959b654da0029629e37c86058183e": "ebe4957935f4d60bd48bed737cc337b5",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/5ae8f843bb94bdcfb8afb0f70898ec2757bc94": "6d0f1b0dc80604e5973b61b8b66561b0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/6f01ff9ea8c264a069201f5a908d9f1fdbdd35": "63452b6bc7d7d45e9933643870ed4bc9",
".git/objects/62/bb0aa613c8b0dfdc9f15d6a5f76fa148563f22": "149f567633c1efe82572e1867127c783",
".git/objects/6b/9dfe5fe4ef06b3df57360f03dc8d5e6a4df071": "fe79e83ce1d0e89e0fe9da31d72f3516",
".git/objects/72/746bdd30f828c444b394dff8971caeafc824f1": "8caca45e0692e2e3c300f21375c0bb05",
".git/objects/7e/2ac23bb566f14a487041181d21496005494bec": "389dee5b7ca79bfe5495102b2ae1c937",
".git/objects/7f/602b3eba08f07eeb7598ca44f8e4b94203ef9d": "5730b1eca945aaa57e56810a2cdd1836",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/85f8cf7f7eca561be1eb109d8394efe5c63cbb": "b694a4d3c61de57060448bd47860af89",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/a2/8df12713301dae887892d721e5ff979da14f62": "becf5e75e855126c6b5ca877071ee93a",
".git/objects/a4/da78a1fb2fc4240522bbef762059660f7c8224": "ccf77bd958c370680944b1450f6063fb",
".git/objects/a4/fc5514658cb27725a19fd37b082253a809858f": "c09470f99aaccc2c26878b2c559203ae",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/51d7b059db2ae015b67da26c6fce2abc087c4c": "d26beef922d983fcaf9a8b31d4157054",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/76fad40ffdc6340ed5968f315feb56d99d3766": "9b3b3287ae55bdda88fef5d505a0bf90",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/892d273aa0a248cbc73380d78cad8a92dd6746": "0aa00654175f652f4483cf3637c18e88",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e4/5fc079a976008439c29f3da500dbe39d81a625": "c3939bafb694ff4ec087fbadb77052ad",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/d5e8f701309069a5eb4d4ea766a2867c0e1ff0": "b8eaf727c45350b6d85bb8da072a7ab3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/5996729dbf34e502982959c1e75b57c4181c35": "dbea2e9d133dc775ecd385f7c3811c7d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/b5e147350a9f6dde78d2856834dfed5aa2da39": "0d8b78c50e7909fbdb84d82cdb9e556d",
".git/refs/heads/main": "f4f9a6ea2caf88cf4ea3530a5afc8ccd",
".git/refs/remotes/origin/main": "f4f9a6ea2caf88cf4ea3530a5afc8ccd",
"assets/AssetManifest.bin": "3aabb14b78fcfa420fa6b118f34763d4",
"assets/AssetManifest.json": "2c2607b3bee7cae7cd351a93484b43de",
"assets/assets/images/Aayush.png": "173314be4f5aa6e4a0603e04ff558aa7",
"assets/assets/images/Amitesh.png": "0cdfc9f3731d77d1323456955f81aa00",
"assets/assets/images/image1.png": "6f560e2b0202b66235a7986bca03f603",
"assets/assets/images/image10.png": "6a0c474ab7bbc4b2bfe0dfade12388d6",
"assets/assets/images/image2.png": "18eacf35dc8bb7b8ea7e82a961b81050",
"assets/assets/images/image3.png": "2ca63b0f69a5a1f30bd2dcd102168623",
"assets/assets/images/image4.png": "c247195ee49e97c4af3c98b3349912af",
"assets/assets/images/image5.png": "5547eae1d51d735591f031622f4e65a7",
"assets/assets/images/image6.png": "c50b698b81b01f744debfa4e123e8f87",
"assets/assets/images/image7.png": "cbbddeff6fcdc8d4510bdb52d7a38e07",
"assets/assets/images/image8.png": "a4e5c2503810216843af1665c8ecdbc1",
"assets/assets/images/image9.png": "ebb775e285edc70b4b046fa1ee38dd02",
"assets/assets/images/Midhun.png": "b6697d3f63fd3ec11f09bfc5ed7b7e01",
"assets/assets/images/Nikhil.png": "da8516726ce0874d88af43dddb836d7a",
"assets/assets/images/Shubham.png": "e40050fea2f75cadc63296dc53f0c381",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "20fb23e8c20d01deaba6405efe539f58",
"assets/NOTICES": "6813b28ec4730b827efd79519fd5fef5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "3ca115d233300fa2ee40f89e2ef91798",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "12cdaa996d8aecd31007d1cea6142b8b",
"/": "12cdaa996d8aecd31007d1cea6142b8b",
"main.dart.js": "8171b3582d12a4cecb434f3ce00ae0fa",
"manifest.json": "3569aeb7265337f211660a035d37e985",
"version.json": "369d0fba825a0231b341353e8b6bd37c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

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
