const BACKGROUNDS_COUNT = 4;
const AUTO_CHANGE_INTERVAL = 10 * 60 * 1000; //10min

let tag = timeOfDay;
let service = 'unsplash'


const sliderLeftBtn = document.querySelector('#slider-left');
const sliderRightBtn = document.querySelector('#slider-right');

let inTransition = false;
app.addEventListener('transitionstart', () => {
    inTransition = true
})
app.addEventListener('transitionend', () => {
    inTransition = false
})


let backgroundNumber = Math.floor(Math.random() * BACKGROUNDS_COUNT);

document.documentElement.style.setProperty('--background-image', ``)


let apiBackgrounds = [];
let activeApiBackground = -1;

function setBackgroundSettings(srvc = 'git', tg = timeOfDay) {
    console.log('SETTINGS', tg, srvc)
    tag = tg || timeOfDay;
    service =srvc;
    if (service === 'git'){
        backgroundNumber = Math.floor(Math.random() * BACKGROUNDS_COUNT);
    } else {
        backgroundNumber = 0
        apiBackgrounds = [];
        activeApiBackground = -1;
    }
    setBackground()
}


function setBackgroundGit(number = backgroundNumber){
    // console.log(backgroundNumber)
    const image = new Image();
    number++;
    number = ('0' + number).slice(-2)
    image.src = `https://raw.githubusercontent.com/komalapa/stage1-tasks/assets/images/${timeOfDay}/${number}.webp`;

    image.onload = function () {
        if (!inTransition){ //only when not transition apply changes for new background
            document.documentElement.style.setProperty('--background-image', `url("${image.src}")`)
            app.style.opacity = 1;
        }
    };
};

function setBackground(n) {
    // console.log("slide n", n)
    if (service==='git') setBackgroundGit()
    if (service==='unsplash') setBackgroundUnsplash(n)
    if (service==='flickr') setBackgroundFlickr(n)
    
}

let slidesTimer;//for automatic change

function changeSlide(direction = 'right'){
    // console.log(direction)
    if (direction === 'right'){
        backgroundNumber = backgroundNumber < BACKGROUNDS_COUNT-1 ? backgroundNumber + 1 : 0;
        setBackground(backgroundNumber);
    } else if (direction === 'left'){
        backgroundNumber = backgroundNumber > 0 ? backgroundNumber - 1 : BACKGROUNDS_COUNT-1;
        setBackground(backgroundNumber);
    }
    clearInterval(slidesTimer);
    slidesTimer = setInterval(changeSlide,AUTO_CHANGE_INTERVAL)
}
 

function toggleKey(e){
    //console.log(e)
    if (!e) return;
    if (e.key === "ArrowRight" ){
        changeSlide('right');
        return;
    }
    if (e.key === "ArrowLeft"){
        changeSlide('left');
        return;
    }
}
//events
document.addEventListener('keyup', toggleKey);
sliderLeftBtn.addEventListener('click',()=>changeSlide('left'));
sliderRightBtn.addEventListener('click',()=>changeSlide('right'));

//init
// setBackgroundGit()


// const apiBackgrounds = [];
// let activeApiBackground = -1;
async function getLinkToImageUnsplash(n) {
    // console.log('apiN', activeApiBackground)
    // console.log('n', n)
    const LENGTH = BACKGROUNDS_COUNT;
    if (typeof n !== 'undefined'){
        if (n<0) {
            activeApiBackground = -1;
        } else if (n>apiBackgrounds.length - 1) {
            activeApiBackground = apiBackgrounds.length -1
        } else {
            activeApiBackground= n;
            return apiBackgrounds[activeApiBackground]
        }
    }

    if (apiBackgrounds.length<LENGTH){
        // console.log('NEW')
        const url = `https://api.unsplash.com/photos/random?query=${tag}&orientation=landscape&client_id=R_-j0FlbUgTGBC_0hqN3sYG-dflJXCA_xL0eHN43eaA`;
        const res = await fetch(url);
        const data = await res.json();
        // if (!data) alert("can't find tag on unsplash")
        apiBackgrounds.push(data.urls.regular)
        activeApiBackground++;
        // console.log(data.urls.regular)
        // return data.urls.regular
    } else {
        activeApiBackground = (activeApiBackground+1)%LENGTH;
        // console.log(apiBackgrounds[activeApiBackground])
    }
        return apiBackgrounds[activeApiBackground]
       
}

async function setBackgroundUnsplash(number){
    //console.log(backgroundNumber)
    const image = new Image();
    image.src = await getLinkToImageUnsplash(number);

    image.onload = function () {
        if (!inTransition){ //only when not transition apply changes for new background
            document.documentElement.style.setProperty('--background-image', `url("${image.src}")`)
            app.style.opacity = 1;
        }
    };
};

async function getLinkToImageFlickr(n) {
    // console.log('apiN', activeApiBackground)
    // console.log('n', n)
    const LENGTH = BACKGROUNDS_COUNT;
    if (typeof n !== 'undefined'){
        if (n<0) {
            activeApiBackground = -1;
        } else if (n>apiBackgrounds.length - 1) {
            activeApiBackground = apiBackgrounds.length -1
        } else {
            activeApiBackground= n;
            return apiBackgrounds[activeApiBackground]
        }
    }

    if (apiBackgrounds.length<LENGTH){
        console.log('NEW')
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4814ca8cacb6f0ae76e0dcb23fbaea2a&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.photos.photo)
        // if (!data) alert("can't find tag on unsplash")
        data.photos.photo.forEach(item =>{
            if (apiBackgrounds.length < LENGTH){
                apiBackgrounds.push(item.url_l);
            } 
        })
          
        activeApiBackground++;
        // console.log(apiBackgrounds)
        // return data.urls.regular
    } else {
        activeApiBackground = (activeApiBackground+1)%LENGTH;
        console.log(apiBackgrounds[activeApiBackground])
    }
        return apiBackgrounds[activeApiBackground]
       
}

async function setBackgroundFlickr(number){
    //console.log(backgroundNumber)
    const image = new Image();
    image.src = await getLinkToImageFlickr(number);

    image.onload = function () {
        if (!inTransition){ //only when not transition apply changes for new background
            document.documentElement.style.setProperty('--background-image', `url("${image.src}")`)
            app.style.opacity = 1;
        }
    };
};
setBackgroundSettings('flickr')
setBackground()