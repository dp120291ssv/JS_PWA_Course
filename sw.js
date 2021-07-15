
const staticCacheName = 's-app-v'
const assetUrls = [
    'index.html',
    '/js/app.js',
    '/css/style.css',
    '/img'
]

// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(staticCacheName).then(cache => cache.addAll(assetUrls))
//     )
//     console.log('SW installed')
// })
self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName)
    await cache.addAll(assetUrls)
    console.log('SW installed')
})

self.addEventListener('activate', async event => {
    const cacheNames = await caches.keys()
    await Promise.all(
        cacheNames
            .filter(name => name !== staticCacheName)
            .map(name => caches.delete(name))
    )
    console.log('SW activated')
})

self.addEventListener('fetch', event => {
    event.respondWith(cacheFirst(event.request))
    console.log('Fetch events: ', event.request.url)
})

async function cacheFirst(request){
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}