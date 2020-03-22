const video = document.getElementById('video')

function startVideo(){
    navigator.getUserMedia(
        {video: {}},
        stream => video.srcObject = streams,
        err => console.log(error)
    )
}
startVideo()