export default function sourcesScroll() : void{
  const buttonRight = document.querySelector('.sources__right') as HTMLElement;
  const buttonLeft = document.querySelector('.sources__left') as HTMLElement;
  
  const slider = document.querySelector('.sources') as HTMLElement;
  
  
  let maxScrollWidth : number = slider.scrollWidth - slider.clientWidth;
  let maxScrollHeight : number = slider.scrollHeight - slider.clientHeight;
  
  
  let sliderInterval : NodeJS.Timeout;
  
  function scrollSlider(step = 10){
    const maxScroll : number = slider.scrollWidth - slider.clientWidth ;
    slider.scrollLeft += step;
    const sliderScroll = slider.scrollLeft;

    // console.log(sliderScroll)
    if (sliderScroll <= 0){
        buttonLeft.classList.add('disabled-arrow')
    } else {
        buttonLeft.classList.remove('disabled-arrow')
    }
    // console.log(maxScroll)
    if (maxScroll !== 0 && sliderScroll >= maxScroll){
        buttonRight.classList.add('disabled-arrow')
    } else {
        buttonRight.classList.remove('disabled-arrow')
    }  
  }
  
  
  buttonRight.addEventListener('mousedown', () => {
      sliderInterval = setInterval(() => scrollSlider(30), 100)
  
    })
  
  buttonLeft.addEventListener('mousedown', () => {
      sliderInterval = setInterval(() => scrollSlider(-30), 100)
  
  
    })
  
  buttonRight.addEventListener('mouseleave',()=>clearInterval(sliderInterval))
  buttonLeft.addEventListener('mouseleave',()=>clearInterval(sliderInterval))
  
  document.addEventListener('mouseup', ()=>clearInterval(sliderInterval))
  
  scrollSlider(0); // init slider position
  
  window.addEventListener('resize', ()=>{ // reinit slider on window resize
      maxScrollWidth = slider.scrollWidth - slider.clientWidth;
      maxScrollHeight = slider.scrollHeight- slider.clientHeight;; 
      slider.scrollLeft = 0;
      slider.scrollTop = 0;
      scrollSlider(0)
  })
}
