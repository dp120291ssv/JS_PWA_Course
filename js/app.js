// if (navigator.serviceWorker) {

//     //Register the SW
//     navigator.serviceWorker.register('sw.js').then(function(registration){

//         registration.onupdatefound = () => {
//             console.log("New SW Found");
//             console.log(registration.installing)
//             let newSW = registration.installing

//             newSW.onstatechange = () => {
//                 console.log(newSW.state)
//             }
//         };

//     }).catch(console.log)
// }


// if ('serviceWorker' in navigator){
//     if (navigator.serviceWorker){
//         navigator.serviceWorker
//       .register('/sw.js')
//       .then((registration) => {
//         // some code
//         console.log('registered')
//       });
//     }

if (navigator.serviceWorker){

}