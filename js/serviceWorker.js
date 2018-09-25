if (navigator.serviceWorker) {
	navigator.serviceWorker.register('./sw.js')
	.then(function(reg) {
		console.log('Working!');
	})
	.catch(function(err) {
		console.log('Not working!', err);
	});
}