console.log("page loaded...");

function playVideo(vid) {
    vid.play();
    console.log(vid)
}

function pauseVideo(vid) {
    vid.pause();
    console.log(vid);
    vid.currentTime = 0;
}
