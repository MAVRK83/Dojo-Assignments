console.log("page loaded...");

// var this= "droneVid";

function playVideo(vid) {
    vid.play();
}

function pauseVideo(vid) {
    vid.pause();
    vid.currentTime = 0;
}