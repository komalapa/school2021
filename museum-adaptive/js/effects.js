const button = document.querySelector('.book-submit')
function ripple(e){
    const button = e.target;
    
    const circle = document.createElement("span");
    circle.classList.add('ripple')
    
    const d = Math.max(button.clientWidth, button.clientHeight);
    
    circle.style.width = d + 'px'; 
    circle.style.height = d + 'px';
    
    circle.style.left = (e.offsetX - d/2)+ 'px';
    circle.style.top = (e.offsetY - d/2) + 'px';
    
    const lostRipples = document.querySelectorAll('.ripple');
    lostRipples.forEach(r => r.remove());

    button.appendChild(circle);
}

button.addEventListener('click', ripple)