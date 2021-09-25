function streetViewInit(){
    const discoverBtn = document.querySelector('.welcome-button');
    const discoverView = document.querySelector('#welcome-street-view');
    discoverBtn.addEventListener('click', () => {
        console.log('toggle fs', discoverView,discoverBtn)
        discoverView.requestFullscreen();
    })
}
streetViewInit()