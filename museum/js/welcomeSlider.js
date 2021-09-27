function initSlider(){
    const welcomeSliderContent = document.querySelector('.welcome-slider');
    const welcomeSliderControls = document.querySelector('.welcome-slider-controls');
    const slides = welcomeSliderContent.querySelectorAll('img');
    const controlsButtonsList = welcomeSliderControls.querySelector('.welcome-slider-controls-buttons')

    const arrowLeft = welcomeSliderControls.querySelector('.arrow-left');
    const arrowRight = welcomeSliderControls.querySelector('.arrow-right');
    
    const sliderLength = welcomeSliderContent.querySelectorAll('img').length;
    let activeSlide = 0;
    

    const slidesWrp = welcomeSliderContent.querySelector('div');
    slidesWrp.prepend(slides[slides.length -1].cloneNode());
    slidesWrp.append(slides[0].cloneNode());

    let inTransition = false;
    
    for (let i = 0; i< sliderLength; i++){
        const sliderBtn = document.createElement('div');
        sliderBtn.classList.add('welcome-slider-controls-btn');
        if (i === activeSlide)  sliderBtn.classList.add('active');
        sliderBtn.dataset.number = i;
        sliderBtn.addEventListener('click', ()=>changeSlide(sliderBtn.dataset.number))
        controlsButtonsList.append(sliderBtn);
    }
    const controlsButtons = controlsButtonsList.querySelectorAll('.welcome-slider-controls-btn')
    
    welcomeSliderControls.querySelector('#welcome-controls-current').innerText = `0${+activeSlide+1}`.slice(-2);
    welcomeSliderControls.querySelector('#welcome-controls-all').innerText = `0${sliderLength}`.slice(-2);


    const sliderWidth = slides[0].clientWidth;
    
    function changeSlide(number = activeSlide, direction = null){
        if (!inTransition){
            controlsButtons[activeSlide].classList.remove('active');
            if (direction === null) activeSlide = +number;
            if (direction === 'r'){
                activeSlide = activeSlide+1 //< sliderLength ? activeSlide + 1 : 0
            }
            if (direction === 'l'){
                activeSlide = activeSlide-1  //>= 0 ? activeSlide - 1 : sliderLength -1;
            }
            document.documentElement.style.setProperty('--welcome-slider-offset', -((activeSlide+1)*sliderWidth)+'px');
            if (activeSlide < 0){
                activeSlide = sliderLength -1;
            }
            if (activeSlide > sliderLength-1){
                activeSlide = 0;
            }
            welcomeSliderControls.querySelector('#welcome-controls-current').innerText = `0${+activeSlide+1}`.slice(-2);
            controlsButtons[activeSlide].classList.add('active');
        }
    }
    document.documentElement.style.setProperty('--welcome-slider-offset', -((activeSlide+1)*sliderWidth)+'px');
    
    welcomeSliderContent.addEventListener('transitionstart', () => inTransition = true)
    welcomeSliderContent.addEventListener('transitionend', () => {
        inTransition = false
        slidesWrp.classList.add('no-transition');
        document.documentElement.style.setProperty('--welcome-slider-offset', -((activeSlide+1)*sliderWidth)+'px');
        setTimeout(()=>{
            slidesWrp.classList.remove('no-transition')
        })
    })
    arrowLeft.addEventListener('click', () => changeSlide(activeSlide, 'l'));
    arrowRight.addEventListener('click', () => changeSlide(activeSlide, 'r'));
}
initSlider()