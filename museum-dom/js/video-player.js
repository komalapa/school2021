const progressColor = '#710707';
let video = document.querySelector('.video-player');
// const slider = document.querySelector('.video-slider');
// const slides = slider.querySelectorAll('video')
// const slidesLength = slides.length;
// const sliderDuration = 200;
//const sliderWidth = slider.clientWidth;
//controls
const centralPlayBtn = document.querySelector('.video-player-start');
const playBtn = document.querySelector('.video-player-controls-play');
const backBtn = document.querySelector('.video-player-controls-back');
const forwardBtn = document.querySelector('.video-player-controls-forward');
const muteBtn = document.querySelector('.video-player-controls-mute');
const fullscreenBtn = document.querySelector('.video-player-controls-full');


const progressBar = document.querySelector('.video-player-controls-progress');
const volumeBar = document.querySelector('.video-player-controls-volume');

const controlsMsg = document.querySelector('#video-message');

//range styles
progressBar.style.background = `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${progressBar.value}%, #c4c4c4 ${progressBar.value}%, #c4c4c4 100%)`  
volumeBar.style.background = `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${volumeBar.value}%, #c4c4c4 ${volumeBar.value}%, #c4c4c4 100%)`  


const MSG_DURATION = 2000;

//const VIDEOS = ['assets/video/paris.mp4', "assets/video/TourEiffel.mp4", "assets/video/louvre.mp4"]
let activeVideo = 0;
//sl -slider
// function slChangeSlide(direction){
//     const prevSlide = activeVideo;
//     video.pause();
//     if (direction === 'forward'){
//         activeVideo = activeVideo < slidesLength -1 ? activeVideo + 1 : 0
//     } else if (direction === 'back'){
//         activeVideo = activeVideo > 0 ? activeVideo - 1 : slidesLength -1    
//     }
//     slides[activeVideo].classList.add('video-active');
//     slides[prevSlide].classList.remove('video-active');
//     slides[prevSlide].style.left = 0;//timeout before previous slide will be moved
//     setTimeout (() => slides[prevSlide].style.left = null, sliderDuration)
//     video = slides[activeVideo];
//     //console.log(video.src)
//     vpSetProgressBar();
//     video.play();   
// }


//vp - video player
function vpPlay(){
    video[video.paused ? 'play' : 'pause']();
    //msg
    controlsMsg.innerText = `${video.paused ? 'pause' : 'play'}` 
    controlsMsg.style.display = 'block';
    setTimeout(() => {
        controlsMsg.style.display = 'none';
    }, MSG_DURATION);
}

// function vpChooseVideo(direction = 'back'){
//     const length = VIDEOS.length
//     if (direction === 'forward'){
//         activeVideo = activeVideo < length -1 ? activeVideo + 1 : 0
//     } else if (direction === 'back'){
//         activeVideo = activeVideo > 0 ? activeVideo - 1 : length -1    
//     }
//     video.src = VIDEOS[activeVideo]
//     video.play();
//     //msg
//     controlsMsg.innerText = `${direction}` 
//     controlsMsg.style.display = 'block';
//     setTimeout(() => {
//         controlsMsg.style.display = 'none';
//     }, MSG_DURATION);
// }

function vpMute(){
    // slides.forEach(video => {video.muted = !video.muted})
    video.muted = !video.muted;
    if (video.muted){
        muteBtn.classList.add("video-player-controls-muted")
    } else {
        muteBtn.classList.remove("video-player-controls-muted")
    }
    //msg
    controlsMsg.innerText = `${video.muted ? 'muted' : 'unmuted'}` 
    controlsMsg.style.display = 'block';
    setTimeout(() => {
        controlsMsg.style.display = 'none';
    }, MSG_DURATION);
}

function vpSetVolume(e){
    // console.log('vol',e)
    video.volume = e ? e.target.value/100 : volumeBar.value/100
    if (video.muted) vpMute();
    volumeBar.style.background = `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${volumeBar.value}%, #c4c4c4 ${volumeBar.value}%, #c4c4c4 100%)`
    
    if (video.volume === 0){
        muteBtn.classList.add("crossed")
    } else {
        muteBtn.classList.remove("crossed")
    }
    //msg
    controlsMsg.innerText = `Volume ${volumeBar.value}%` 
        controlsMsg.style.display = 'block';
        setTimeout(() => {
            controlsMsg.style.display = 'none';
        }, MSG_DURATION);
}
function vpSetProgress(e){
    let value
    if (!e) {
        //console.log("not e")
        value = progressBar.value;
    } else {
        value = e.target.value;
    }
    video.currentTime = value/100 * video.duration
}

function vpFullscreen(){
    // console.log('FS')
    if (!document.fullscreenElement) {
        document.querySelector('.video-player-wrp').requestFullscreen();
        //video.classList.add("fullscreen")
        video.classList.add("fullscreen")
    } else if (document.exitFullscreen) {
        document.exitFullscreen();      
    } 
}
//fixes exit fullscreen by esc and button
document.addEventListener('fullscreenchange', () => {
    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        video.classList.remove("fullscreen")
        // slider.classList.remove("fullscreen") 
    }
})

function vpReplaceIconPlay(){
    // console.log("icon")
    if (!video.paused){
        centralPlayBtn.style.opacity = 0;
        playBtn.classList.add('video-player-controls-pause');
    } else {
        centralPlayBtn.style.opacity = 1;
        playBtn.classList.remove('video-player-controls-pause');
    }
}

function vpSetProgressBar(){
    progressBar.value = Math.floor(100*video.currentTime/video.duration)
    progressBar.style.background = `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${progressBar.value}%, #c4c4c4 ${progressBar.value}%, #c4c4c4 100%)`
}
//Listeners
playBtn.addEventListener('click', vpPlay);
centralPlayBtn.addEventListener('click', vpPlay);
    video.addEventListener('click', vpPlay);
    video.addEventListener('play',vpReplaceIconPlay);
    video.addEventListener('pause',vpReplaceIconPlay);
    // video.addEventListener('ended',  () => slChangeSlide('forward'))

    video.addEventListener('timeupdate', vpSetProgressBar);

// video.addEventListener('ended',  () => vpChooseVideo('forward'))
// backBtn.addEventListener('click',() => vpChooseVideo('back'));
// forwardBtn.addEventListener('click', () => vpChooseVideo('forward'));
// backBtn.addEventListener('click',() => slChangeSlide('back'));
// forwardBtn.addEventListener('click', () => slChangeSlide('forward'));
muteBtn.addEventListener('click', vpMute);
fullscreenBtn.addEventListener('click', vpFullscreen);
// fullscreenBtn.addEventListener('click', ()=>console.log('fs'))

volumeBar.addEventListener('input', vpSetVolume);
progressBar.addEventListener('input', vpSetProgress);

let isVideoVisible = false
var observer = new IntersectionObserver(function(entries) { console.log(entries);
	if(entries[0]['isIntersecting'] === true) {
		isVideoVisible = true;
	}
	else {
		isVideoVisible = false;
	}
}, { threshold: [0, 0.5, 1] });

observer.observe(video);

//keyboard
function toggleKeys(e){
    if (!isVideoVisible) return
    // e.preventDefault();
    const hideMsg = () =>{
        controlsMsg.style.display = 'none';
        video.removeEventListener('click', hideMsg)
    } 
    const key = e.key;
    if (!key) return;
    //console.log(e.shiftKey,key)
//play
    if (key === "k" || key === "л" || key === " ") {
        e.preventDefault();
        vpPlay();
        return
    }
//>>    
    if (key === "j" || key === "о" || e.key === "ArrowLeft") {
        video.currentTime -= 10/60 //tmp not 10s (1/6 s) because videos too short
        vpSetProgressBar();
        //msg
        controlsMsg.innerText = `${progressBar.value}%` 
        controlsMsg.style.display = 'block';
        setTimeout(() => {
            controlsMsg.style.display = 'none';
        }, MSG_DURATION);
        return
    }
//<<    
    if (key === "l" || key === "д" || e.key === "ArrowRight") {
        video.currentTime += 10/60;
        vpSetProgressBar();
        //msg
        controlsMsg.innerText = `${progressBar.value}%` 
        controlsMsg.style.display = 'block';
        setTimeout(() => {
            controlsMsg.style.display = 'none';
        }, MSG_DURATION);
        return
    }
// //slider
//     if (key === "P" || (e.shiftKey && key ==="p") || key === "З" || (e.shiftKey && key ==="з")) {
//         //vpChooseVideo('back')
//         slChangeSlide('back')
//         return
//     }
//     if (key === "N" || (e.shiftKey && key ==="n") || key === "Т" || (e.shiftKey && key ==="т")) {
//         //vpChooseVideo('forward')
//         slChangeSlide('forward')
//         return
//     }
//frames
    if (!e.shiftKey && (key === "," || key ==="б") && video.paused) {
        video.currentTime -= 0.04//25frames per sec
        vpSetProgressBar();
        return
    }
    if (!e.shiftKey && (key === "." || key ==="ю") && video.paused) {
        video.currentTime += 0.04//25frames per sec
        vpSetProgressBar();
        return
    }
//speed    
    if (((e.shiftKey && key ===",") || key === "<" || key ==="Б") && video.playbackRate > 0.25 ) {
        video.playbackRate -= 0.25;
        //msg
        controlsMsg.innerText = `playback rate: ${video.playbackRate}` 
        controlsMsg.style.display = 'block';
        setTimeout(() => {
            controlsMsg.style.display = 'none';
        }, MSG_DURATION);
        return
    }
    if (((e.shiftKey && key ===".") ||key === ">" || key ==="Ю") && video.playbackRate < 3 ) {
        video.playbackRate += 0.25
        //msg
        controlsMsg.innerText = `playback rate: ${video.playbackRate}` 
        controlsMsg.style.display = 'block';
        setTimeout(() => {
            controlsMsg.style.display = 'none';
        }, MSG_DURATION);
        return
    }
//fullscreen
    if (key === "F" || (e.shiftKey && key ==="f") || key === "А" || (e.shiftKey && key ==="а") || key ==="а" || key ==="f") {
        vpFullscreen()
        return
    }
//parts
    if (+key >=0 || +key<=9){
       progressBar.value = +key * 10;
        vpSetProgress();
        //msg
        controlsMsg.innerText = `${progressBar.value}%` 
        controlsMsg.style.display = 'block';
        setTimeout(() => {
            controlsMsg.style.display = 'none';
        }, MSG_DURATION);
        return
    }
//doc
    if (((e.shiftKey && key ==="/") || (e.shiftKey && key ===",") || key === "?" || key === "H" || (e.shiftKey && key ==="h") || key === "Р" || e.shiftKey && key ==="р" || key ==="h" || key ==="р")) {
        //msg
        controlsMsg.innerText = `
        Shift + / / h / H - help (wait 10sec or click for exit)
        k / Space         - play/pause
        j / ←             - forward
        l / →             - back
        P / Shift + p     - previous video
        N / Shift + n     - next video
        ,                 - previous frame
        .                 - next frame
        <                 - slower
        >                 - faster
        f / F / Shift+f   - fullscreen
        0..9              - navigation by tenths
        ↑                 - volume up for all videos
        ↓                 - volume down for all videos
        m / M / Shift+m   - mute for all videos
        ` 
        controlsMsg.style.display = 'block';
        video.addEventListener('click', hideMsg);
        setTimeout(hideMsg, MSG_DURATION * 5);
        return
    }
//volume    
    if (e.key === "ArrowDown" && volumeBar.value >= 5) {
        e.preventDefault();
        volumeBar.value = +volumeBar.value - 5
        vpSetVolume()
        return
    }
    if (e.key === "ArrowUp" && volumeBar.value <= 95) {
        e.preventDefault();
        volumeBar.value = +volumeBar.value + 5
        //console.log(volumeBar.value)
        vpSetVolume()
        return
    }
//mute
    if (key === "M" || (e.shiftKey && key ==="m") || key === "Ь" || (e.shiftKey && key ==="ь") || key ==="ь" || key ==="m") {
        vpMute()
        return
    }
}

document.addEventListener('keydown', toggleKeys)
