function initVideoPlayer(){
  const progressColor = '#710707'
  const progress = document.querySelector('#video-progress');
  progress.style.background = `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${progress.value}%, #c4c4c4 ${progress.value}%, #c4c4c4 100%)`  
  progress.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
  })
  
  const volume = document.querySelector('#volume-level');
  volume.style.background = `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${volume.value}%, #c4c4c4 ${volume.value}%, #c4c4c4 100%)`  
    
  volume.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
  })
}
initVideoPlayer();




function initVideoSlider(){
  const videoContent = document.querySelector('.video-slides-wrp');
  const videoSliderControls = document.querySelector('.video-slider-controls');
  const slides = videoContent.querySelectorAll('video');
  const controlsButtonsList = videoSliderControls.querySelector('.video-slider-controls-dots')

  const arrowLeft = videoSliderControls.querySelector('.arrow-left');
  const arrowRight = videoSliderControls.querySelector('.arrow-right');
  
  const sliderLength = slides.length;
  let activeVideo = 0;
  

  const slidesWrp = videoContent;

  let inTransition = false;
  
  for (let i = 0; i< sliderLength; i++){
      const sliderBtn = document.createElement('div');
      sliderBtn.classList.add('video-slider-controls-dot');
      if (i === activeVideo)  sliderBtn.classList.add('active');
      sliderBtn.dataset.number = i;
      // sliderBtn.addEventListener('click', ()=>changeSlide(+sliderBtn.dataset.number))
      controlsButtonsList.append(sliderBtn);
  }

}
initVideoSlider()