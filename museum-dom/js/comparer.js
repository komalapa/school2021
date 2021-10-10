function initComparer() {
    const overlay = document.querySelector(".overlay");
    // console.log(overlay)
    function compareImages(img = overlay) {
    let slider, clicked = 0, width, height;
    width = img.offsetWidth;
    height = img.offsetHeight;
    
    img.style.width = (width / 2) + "px";
    
    slider = document.createElement("div");
    slider.classList.add("compare-slider");
    
    img.parentElement.insertBefore(slider, img)
    
    slider.style.top = ((height - slider.offsetWidth) / 2) + "px";
    slider.style.left = ((width  - slider.offsetWidth) / 2) + "px";
    
    //eventlisteners
    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);//window need if mouse leaved comparer
    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchstop", slideFinish);
    
    
    function slideReady(e) {
        // console.log(e.type)
        e.preventDefault();
        clicked = 1;
        
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
        clicked = 0;
        window.removeEventListener("mousemove", slideMove);
        window.removeEventListener("touchmove", slideMove);
    }
    function slideMove(e) {
        console.log(e.type, e.touches[0])
        let position;
        
        if (clicked == 0) return false;//slideFinished by event
        
        position = getCursorPos(e) || e.touches[0].clientX - overlay.getBoundingClientRect().left;
        // console.log('comparer', position)
        if (position < 0) position = 0;
        if (position > width) position = width;
        
        slide(position);
    }
    function getCursorPos(e) {
        var rect, x = 0;
        e = e || window.event;
        
        rect = overlay.getBoundingClientRect();
        
        x = e.pageX - rect.left;
        
        x = x - window.pageXOffset;
        return x;
    }
    function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = overlay.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
    // slide(440)
    const comparer = document.querySelector('.explore-img')
    console.log(comparer.offsetWidth)
    slide(0.61 * comparer.offsetWidth)
 }
 compareImages()
 
}

initComparer()