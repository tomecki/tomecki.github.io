!function(){"use strict";const e=["client/about.474e036c.js","client/index.e6876701.js","client/index.73d11c4d.js","client/[slug].6c784b1e.js","client/client.6bd3202a.js","client/[slug].62fa55dd.js","client/client.6736b532.js"].concat(["service-worker-index.html","favicon.png","global.css","great-success.png","images/0-assets/matt-hardy-6ArTTluciuA-unsplash.jpg","images/1-assets/article-token-length.png","images/1-assets/clean-token-frequency.png","images/1-assets/devtools.png","images/1-assets/dirty-token-frequency.png","images/1-assets/fullarticle.png","images/1-assets/header.jpg","images/1-assets/pandas_df.png","images/1-assets/sample_article.png","images/1-assets/wordcloud.png","images/2-assets/adi-goldstein-mDinBvq1Sfg-unsplash.jpg","images/insung-yoon-lUlYVk8_9WU-unsplash.jpg","logo-192.png","logo-512.png","manifest.json"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1586286235678").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1586286235678"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&s.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586286235678").then(async s=>{try{const t=await fetch(e.request);return s.put(e.request,t.clone()),t}catch(t){const a=await s.match(e.request);if(a)return a;throw t}}))))})}();
