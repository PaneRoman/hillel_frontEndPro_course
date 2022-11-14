// Как работает Async, Await, 
// чем отличается от Promise (+ 3 асинхронных примера)
// https://www.youtube.com/watch?v=SLQAVVziUzg


// Примеры асинхронных операций, используя Promise подход
// и Async Await подход


// use Promise //

// const myGit = fetch('https://api.github.com/users/vasilymur');
// console.log(myGit); // Promise

// myGit
//     .then((response) => {
//         return response.json();
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => {
//         console.warn('Error >>>', err)
//     })

// use AsyncAwait //

// async function getGitData() {
//     try {
//         const response = await fetch('https://api.github.com/users/vasilymur');
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.warn('Error >>>', err);
//     }
    
// }
// getGitData()



// use Promise //

// const video = document.querySelector('video');
// const myVideo = navigator.mediaDevices.getUserMedia({video: true});
// console.log(myVideo);

// myVideo
//     .then((mediaStream) => {
//         video.srcObject = mediaStream;
//     })
//     .catch((err) => {
//         console.log('Video error >>>', err);
//     })

// use AsyncAwait //

// const video = document.querySelector('video');
// async function getUserVideo() {
//     try {
//         const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
//         // console.log(mediaStream)
//         video.srcObject = mediaStream; 
//     } catch (err) {
//         console.warn('Error >>>', err)
//     }
    
// }
// getUserVideo()



// use Promise //

function sleep(time) {
    return new Promise((resolve, reject) => {
        
        if (time < 500) {
            reject('Not enogh sleep ;((')
        }

        setTimeout(() => {
            return resolve(`Sleep ${time}`)
        }, time)
    })
}

// sleep(1500)
//     .then((response) => {
//         console.log(response);
//         return sleep(1000);
//     })
//     .then((response) => {
//         console.log(response);
//         return sleep(500);
//     })
//     .then((response) => {
//         console.log(response);
//         return sleep(200);
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => {
//         console.warn('Error >>>', err);
//     })

// use AsyncAwait //

// function sleep(time) {
//     // ... previous code
// }

async function sleepSession() {
    try {
        const sleep1 = await sleep(1500);
        console.log(sleep1);
        const sleep2 = await sleep(1000);
        console.log(sleep2);
        const sleep3 = await sleep(500);
        console.log(sleep3);
        const sleep4 = await sleep(200);
        console.log(sleep4);
    } catch (err) {
        console.warn('Error >>>', err)
    }
    
}
sleepSession()