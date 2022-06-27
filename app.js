
const openMediaDevices = async (constrints) => {
    return await navigator.mediaDevices.getUserMedia(constrints);
};

try {
    const stream = openMediaDevices({video: true, audio: false});
    document.getElementById('user-1').srcObject = stream;
    console.log('Got media stream: ', stream);
} catch(error) {
    console.log('Error accessing media device.', error);
}

// let init = async () => {
//     let localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

//     document.getElementById('user-1').srcObject = localStream;
// };

// init();
