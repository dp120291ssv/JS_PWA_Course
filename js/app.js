// if (navigator.serviceWorker){
//     navigator.serviceWorker.register('./sw.js').then((registration) => {
//         //some code
//         console.log('registered: ', registration)
//     })
// }

window.addEventListener('load', async () => {
    if (navigator.serviceWorker) {
        try {
            const swRegObj = await navigator.serviceWorker.register('./sw.js');
            console.log('SW registered: ', swRegObj);
        } catch (e) {
            console.log('SW fail registration', e);
        }
    }
})

navigator.serviceWorker.ready.then((registration) => {
    console.log('active SW: ', registration.active);
});

