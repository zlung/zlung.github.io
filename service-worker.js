/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "40876c727c370d13851074f9817e9620"
  },
  {
    "url": "assets/css/1.styles.ea626faf.css",
    "revision": "3d1395bcfe82002f9a982bd0ddeede17"
  },
  {
    "url": "assets/css/2.styles.edb37d43.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.534dd53a.css",
    "revision": "cdbcfbd9a0654e6beec824fcc18d54a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ea626faf.js",
    "revision": "3c9a466b5059d5a2c283694d36cb47e7"
  },
  {
    "url": "assets/js/2.edb37d43.js",
    "revision": "f3f2258e27822314bbd55bf46748bdae"
  },
  {
    "url": "assets/js/3.039c78fa.js",
    "revision": "1fb0e0a210997b547a9bf8d20db94b5c"
  },
  {
    "url": "assets/js/4.6aa32a89.js",
    "revision": "f4bd4fed10d6766ca9a6f3c66f7aca2b"
  },
  {
    "url": "assets/js/5.14beee29.js",
    "revision": "2bdd9e8858af2166e775a1bdfb0bbfc3"
  },
  {
    "url": "assets/js/6.5b54cdda.js",
    "revision": "865463899554e350e9688a5e1d722f40"
  },
  {
    "url": "assets/js/7.ef25ef4b.js",
    "revision": "36b864cb8da21e0503a9c4803eb83782"
  },
  {
    "url": "assets/js/8.9a7bf340.js",
    "revision": "cd0f495739bcd32471409e17a0fd881b"
  },
  {
    "url": "assets/js/9.d3b34be0.js",
    "revision": "96fdf5faeb1c459d84b03ae8207667b7"
  },
  {
    "url": "assets/js/app.534dd53a.js",
    "revision": "4b95e7377bf4c1723a8bb16abb55fe8d"
  },
  {
    "url": "atcoder/2018_abc113_d.html",
    "revision": "f3b9c6796286a8c53add0b29d39536ef"
  },
  {
    "url": "atcoder/2018_tenka1_c.html",
    "revision": "1f08698a41027b62277db8f64ad45777"
  },
  {
    "url": "atcoder/2018_tenka1_d.html",
    "revision": "2251d8fedcba80e6fb4d63e8ecdd523a"
  },
  {
    "url": "atcoder/index.html",
    "revision": "26e0e01f07ea7258c664173e2a6efb4e"
  },
  {
    "url": "git.png",
    "revision": "1da9e15e0cfd27a6db73a3eb1964e259"
  },
  {
    "url": "index.html",
    "revision": "d308954bbcd71d23a37a3c8922a24e39"
  },
  {
    "url": "leetcode/index.html",
    "revision": "e2542a79fc2ca7feef49410080b497b4"
  },
  {
    "url": "math/index.html",
    "revision": "2a5637a64ddcc3d190f926ebe0738c9b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
