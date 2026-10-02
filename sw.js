const C="sm1";
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html"]))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET"||!e.request.url.startsWith("http"))return;
e.respondWith(fetch(e.request).then(r=>{if(r.status===200||r.type==="opaque"){const x=r.clone();caches.open(C).then(c=>c.put(e.request,x))}return r}).catch(()=>caches.match(e.request)))});
