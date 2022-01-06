function playPause() {
    let myVideo = document.getElementById("v1");
    if (myVideo.paused){
        myVideo.play();
    }else{ 
        myVideo.pause(); 
    } 
}