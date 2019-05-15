const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// start and stop video playback
function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//event listeners
// video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
