!function(){"use strict";const e=["client/about.81078107.js","client/index.a64776d9.js","client/index.365145e1.js","client/coda.13c8f312.js","client/[slug].4707c4c7.js","client/[slug].e7d43abc.js","client/client.8e0649ca.js","client/client.9caea21e.js"].concat(["service-worker-index.html","favicon.png","global.css","great-success.png","images/0-assets/matt-hardy-6ArTTluciuA-unsplash-big.jpg","images/0-assets/matt-hardy-6ArTTluciuA-unsplash.jpg","images/1-assets/article-token-length.png","images/1-assets/clean-token-frequency.png","images/1-assets/devtools.png","images/1-assets/dirty-token-frequency.png","images/1-assets/fullarticle.png","images/1-assets/header-big.jpg","images/1-assets/header.jpg","images/1-assets/pandas_df.png","images/1-assets/sample_article.png","images/1-assets/wordcloud.png","images/2-assets/adi-goldstein-mDinBvq1Sfg-unsplash.jpg","images/3-assets/shelby-miller-hL0xl0qmxYM-unsplash-big.jpg","images/3-assets/shelby-miller-hL0xl0qmxYM-unsplash.jpg","images/insung-yoon-lUlYVk8_9WU-unsplash.jpg","logo-192.png","logo-512.png","manifest.json"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1600525212500").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1600525212500"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&s.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1600525212500").then(async s=>{try{const t=await fetch(e.request);return s.put(e.request,t.clone()),t}catch(t){const a=await s.match(e.request);if(a)return a;throw t}}))))})}();
