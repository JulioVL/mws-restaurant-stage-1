const cacheName = 'v2';

self.addEventListener('install', function(event) {
	const urlsToCache = [
		'/',
		'js/dbhelper.js',
		'js/main.js',
		'js/restaurant_info.js',
		'js/serviceWorker.js',
		'css/styles.css',
		'data/restaurants.json',
		'img/1.jpg',
		'img/2.jpg',
		'img/3.jpg',
		'img/4.jpg',
		'img/5.jpg',
		'img/6.jpg',
		'img/7.jpg',
		'img/8.jpg',
		'img/9.jpg',
		'img/10.jpg',
		'index.html',
		'restaurant.html'
	];

	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});

// Code by bitsofcode (youtube): https://www.youtube.com/watch?v=BfL3pprhnms
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {
				if (thisCacheName !== cacheName) {
					return caches.delete(thisCacheName);
				}
			}))
		})
	)
})

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});