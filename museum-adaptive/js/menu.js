document.querySelector('.main-wrp').addEventListener('click',(e) => {
    const chckBx = document.querySelector('#main-burger-checkbox');
    if (chckBx.checked && e.target != chckBx) chckBx.checked = false
})