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

  const videoContent = document.querySelector('.video-slider-wrp');
  const videoSliderControls = document.querySelector('.video-slider-controls');
  const slides = videoContent.querySelectorAll('.video-slider-item');
  const controlsButtonsList = videoSliderControls.querySelector('.video-slider-controls-dots')

  const arrowLeft = videoSliderControls.querySelector('.arrow-left');
  const arrowRight = videoSliderControls.querySelector('.arrow-right');
  
  const sliderLength = slides.length;
  let activeVideo = 0;
  
  videoContent.append(slides[0].cloneNode(true),slides[1].cloneNode(true),slides[2].cloneNode(true))
  videoContent.prepend(slides[sliderLength -1].cloneNode(true),slides[sliderLength-2].cloneNode(true),slides[sliderLength-3].cloneNode(true))

  let inTransition = false;
  
  for (let i = 0; i< sliderLength; i++){
      const sliderBtn = document.createElement('div');
      sliderBtn.classList.add('video-slider-controls-dot');
      if (i === activeVideo)  sliderBtn.classList.add('active');
      sliderBtn.dataset.number = i;
      sliderBtn.addEventListener('click', ()=>setSliderOffset(i))
      controlsButtonsList.append(sliderBtn);
  }
  const controlsBtns = controlsButtonsList.querySelectorAll('*');
  function setSliderOffset(slideNumber){
    if (typeof slideNumber !== 'undefined' ) {
      controlsBtns[activeVideo].classList.remove('active');
      activeVideo = slideNumber
      controlsBtns[activeVideo].classList.add('active');
    }
    document.documentElement.style.setProperty('--video-slider-offset', `calc(${-activeVideo-3}*var(--video-slider-step))`);
  }

  
  function moveSlider(direction = 'right'){
    if (inTransition) return;
    controlsBtns[activeVideo].classList.remove('active');
    if (direction==='right'){
      activeVideo++; 
      setSliderOffset();
    }else if (direction==='left'){
      activeVideo--; 
      setSliderOffset();
    }
    if (activeVideo < 0) activeVideo = sliderLength -1;
    if (activeVideo > sliderLength-1) activeVideo =0;
    controlsBtns[activeVideo].classList.add('active');
  }
  //eventlisteners
  arrowLeft.addEventListener('click',()=>moveSlider('left'));
  arrowRight.addEventListener('click',()=>moveSlider('right'));
  videoContent.addEventListener('transitionstart', () => inTransition = true)
  videoContent.addEventListener('transitionend', () => {
      inTransition = false
      videoContent.classList.add('no-transition');
      setSliderOffset(activeVideo)
      setTimeout(()=>{
          videoContent.classList.remove('no-transition')
      })
  })
}
initVideoSlider()