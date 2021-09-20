

function initSlider(){
    const welcomeSliderContent = document.querySelector('.welcome-slider');
    const welcomeSliderControls = document.querySelector('.welcome-slider-controls');
    console.log(welcomeSliderControls)
    const controlsButtonsList = welcomeSliderControls.querySelector('.welcome-slider-controls-buttons')

    const arrowLeft = welcomeSliderControls.querySelector('.arrow-left');
    const arrowRight = welcomeSliderControls.querySelector('.arrow-right');
    
    const sliderLength = welcomeSliderContent.querySelectorAll('img').length;
    let activeSlide = 0;
    

    
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


    const sliderWidth = welcomeSliderContent.clientWidth;
    console.log(sliderWidth)

    function changeSlide(number = activeSlide, direction = null){
        controlsButtons[activeSlide].classList.remove('active');
        if (direction === null) activeSlide = number;
        if (direction === 'r'){
            activeSlide = activeSlide+1 < sliderLength ? activeSlide + 1 : 0
        }
        if (direction === 'l'){
            activeSlide = activeSlide-1 >= 0 ? activeSlide - 1 : sliderLength -1;
        }
        console.log(activeSlide);
        document.documentElement.style.setProperty('--welcome-slider-offset', -(activeSlide*sliderWidth)+'px');
        welcomeSliderControls.querySelector('#welcome-controls-current').innerText = `0${+activeSlide+1}`.slice(-2);
        controlsButtons[activeSlide].classList.add('active');
    }

    arrowLeft.addEventListener('click', () => changeSlide(activeSlide, 'l'));
    arrowRight.addEventListener('click', () => changeSlide(activeSlide, 'r'));
}
initSlider()