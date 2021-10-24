const form = document.querySelector('#start-form');
const nameInput = document.querySelector('#name');
const cityInput = document.querySelector('#city');
const settingsBtn = document.querySelector('#settings-btn');
const cancelBtn = document.querySelector('#start-form-reset');
const submitBtn = document.querySelector('#start-form-submit');
const langSwitch = document.querySelector('#lang-switch');

const backgroundRadio = document.querySelectorAll('input[name="backgrounds-radio"]');
const backgroundTagInput = document.querySelector('#tag');

const nameLbl = document.querySelector('#name-lbl');
const cityLbl = document.querySelector('#city-lbl');
const tagLbl = document.querySelector('#tag-lbl');

let isBackgroundChanged = false; //to prevent reload backgrounds without changing

if (localStorage.getItem('momentLang')) lang = localStorage.getItem('momentLang');
langSwitch.checked = (lang === 'en')
// if (typeof weatherListGen == 'function') weatherListGen();

//===========func switchers
let backgroundService = document.querySelector('input[name="backgrounds-radio"]:checked').value;
let backgroundTag = timeOfDay;
backgroundTagInput.value = backgroundTag;

let blocksState = {
    player: true,
    weather: true,
    quotes: true,
    todos: true,
    clock: true,
    seconds: true,
}

const switchers = document.createElement('div');
switchers.classList.add('form-switchers')

form.append(switchers)

const playerSw = document.createElement('span');
playerSw.classList.add('form-func-switcher');
playerSw.addEventListener('click', ()=>{
    blocksState.player = !blocksState.player;
    playerSw.style.textDecoration = !blocksState.player ? 'line-through' : 'none';
    const playerWrp = document.querySelector('.audio-wrp');
    console.log(playerWrp)
    if (playerWrp) {
        blocksState.player ? playerWrp.classList.remove('form-none')
                :playerWrp.classList.add('form-none')
    }
    localStorage.setItem('momentumSettings', JSON.stringify(blocksState))
}) 

const weatherSw = document.createElement('span');
weatherSw.classList.add('form-func-switcher');
weatherSw.addEventListener('click', ()=>{
    blocksState.weather = !blocksState.weather;
    weatherSw.style.textDecoration = !blocksState.weather ? 'line-through' : 'none';
    const weatherWrp = document.querySelector('.weather-list');
    console.log(weatherWrp)
    if (weatherWrp) {
        blocksState.weather ? weatherWrp.classList.remove('form-none')
                :weatherWrp.classList.add('form-none')
    }
    localStorage.setItem('momentumSettings', JSON.stringify(blocksState))
}) 

const quoteSw = document.createElement('span');
quoteSw.classList.add('form-func-switcher');
quoteSw.addEventListener('click', ()=>{
    blocksState.quotes = !blocksState.quotes;
    quoteSw.style.textDecoration = !blocksState.quotes ? 'line-through' : 'none';
    const quoteWrp = document.querySelector('.quote-wrp');
    console.log(quoteWrp)
    if (quoteWrp) {
        blocksState.quotes ? quoteWrp.classList.remove('form-none')
                :quoteWrp.classList.add('form-none')
    }
    localStorage.setItem('momentumSettings', JSON.stringify(blocksState))
}) 

const todosSw = document.createElement('span');
todosSw.classList.add('form-func-switcher');
todosSw.addEventListener('click', ()=>{
    blocksState.todos = !blocksState.todos;
    todosSw.style.textDecoration = !blocksState.todos ? 'line-through' : 'none';
    const todosWrp = document.querySelector('.todos-wrp');
    console.log(todosWrp)
    if (todosWrp) {
        blocksState.todos ? todosWrp.classList.remove('form-none')
                :todosWrp.classList.add('form-none')
    }
    localStorage.setItem('momentumSettings', JSON.stringify(blocksState))
}) 
const clockSw = document.createElement('span');
clockSw.classList.add('form-func-switcher');
clockSw.addEventListener('click', ()=>{
    blocksState.clock = !blocksState.clock;
    clockSw.style.textDecoration = !blocksState.clock ? 'line-through' : 'none';
    const clockWrp = document.querySelector('.clock-wrp');
    // console.log(todosWrp)
    if (clockWrp) {
        blocksState.clock ? clockWrp.classList.remove('form-none')
                :clockWrp.classList.add('form-none')
    }

    localStorage.setItem('momentumSettings', JSON.stringify(blocksState))
}) 

const secSw = document.createElement('span');
secSw.classList.add('form-func-switcher');
secSw.addEventListener('click', ()=>{
    blocksState.seconds = !blocksState.seconds;
    secSw.style.textDecoration = !blocksState.seconds ? 'line-through' : 'none';
    showSecs = blocksState.seconds

    localStorage.setItem('momentumSettings', JSON.stringify(blocksState))
}) 

switchers.append( clockSw, secSw, playerSw, weatherSw, quoteSw, todosSw, )

const savedBlocksStateJSON = localStorage.getItem('momentumSettings');
// console.log(savedBlocksState)
if (savedBlocksStateJSON) {
    const savedBlocksState=  JSON.parse(savedBlocksStateJSON)
    if (!savedBlocksState.player) playerSw.click();
    if (!savedBlocksState.clock) clockSw.click();
    if (!savedBlocksState.quotes) quoteSw.click();
    if (!savedBlocksState.seconds) secSw.click();
    if (!savedBlocksState.todos) todosSw.click();
    if (!savedBlocksState.weather) weatherSw.click();
    
    
}


//===========func switchers end

const cities = (lang == 'ru') ? [...DEFAULT_CITIES_RU] : [...DEFAULT_CITIES_EN]
let name, city;

resetStartForm();
changeLang();

function submitStartForm(e){
    e.preventDefault();
    if (nameInput.value) {
        localStorage.setItem('momentName', nameInput.value);
        userName = nameInput.value;
    } else {
        localStorage.setItem('momentName', '');
        userName = '';
    }

    
    if (cityInput.value) {
        if (DEFAULT_CITIES_EN.indexOf(cityInput.value.toLowerCase()) >= 0 || DEFAULT_CITIES_RU.indexOf(cityInput.value.toLowerCase()) >= 0){
            if (typeof weatherNotDefault == 'function') weatherNotDefault(cityInput.value);
            localStorage.setItem('momentCity', cityInput.value);
        }
        if (cities.indexOf(cityInput.value.toLowerCase()) < 0 ){
            if (typeof getWeather == 'function'){
                let weather = getWeather(cityInput.value)
                weather.then((weather)=>{
                    
                    if (weather === null) {
                        form.classList.add('error-city');
                        setTimeout(()=>{
                            form.classList.remove('error-city');
                        }, 5000)
                    } else {
                        console.log('add city')
                        localStorage.setItem('momentCity', cityInput.value);
                        cities.push(cityInput.value.toLowerCase());
                        form.classList.add("form-none")
                    }
                })
                
            } else {
                form.classList.add("form-none")//module not found. exit
            }
        } else {
            form.classList.add("form-none")//city exists
        }
        localStorage.setItem('momentName', nameInput.value);
    }
    if (isBackgroundChanged){
        localStorage.setItem('momentBackgroundSrc', backgroundService);
        localStorage.setItem('momentBackgroundTag', backgroundTag);
        isBackgroundChanged = false;
        setBackgroundSettings(backgroundService, backgroundTag);
    }
}

function resetStartForm(e){
    if (e) e.preventDefault();
    name = localStorage.getItem('momentName');
    city = localStorage.getItem('momentCity');
    backgroundService = localStorage.getItem('momentBackgroundSrc') || 'git';
    backgroundTag = localStorage.getItem('momentBackgroundTag') || timeOfDay;
    setBackgroundSettings(backgroundService, backgroundTag);
    if (city) {
        if (DEFAULT_CITIES_EN.indexOf(city.toLowerCase()) >= 0 || DEFAULT_CITIES_RU.indexOf(city.toLowerCase()) >= 0){
            if (typeof weatherNotDefault == 'function') weatherNotDefault(city);
        } else {
            cities.push(city.toLowerCase());
        }
    }
    nameInput.value = name || '';
    cityInput.value = city || '';
    backgroundTagInput.value = backgroundTag;
    document.querySelector(`#${backgroundService}-background`).checked = true;
    form.classList.add("form-none")
}


function changeLang(){
    lang = langSwitch.checked ? 'en' : 'ru';
    localStorage.setItem('momentLang', lang);
    if (typeof weatherListGen == 'function') weatherListGen(city);
    
    if (city){
        if (DEFAULT_CITIES_EN.indexOf(city.toLowerCase()) >= 0 || DEFAULT_CITIES_RU.indexOf(city.toLowerCase()) >= 0){
            console.log('def city')
            if (typeof weatherNotDefault == 'function') weatherNotDefault(city);
        } else if(typeof getWeather == 'function'){ 
            getWeather(city, lang)
        }  
    } 
    if (typeof newQuote == 'function') newQuote();
    if (lang === 'ru'){
        cityLbl.innerText = 'Город';
        nameLbl.innerText = 'Имя';
        tagLbl.innerText = 'Тэг';
        cancelBtn.innerText = 'Отмена';
        clockSw.innerText = 'Часы';
        secSw.innerText = 'Секунды';
        playerSw.innerText = 'Музыка'
        weatherSw.innerText = 'Погода';
        quoteSw.innerText = 'Цитаты';
        todosSw.innerText = 'Дела';
    } else {
        cityLbl.innerText = 'City';
        nameLbl.innerText = 'Name';
        tagLbl.innerText = 'Tag'
        cancelBtn.innerText = 'Cancel';
        clockSw.innerText = 'Clock';
        secSw.innerText = 'Seconds';
        playerSw.innerText = 'Player';
        weatherSw.innerText = 'Weather';
        quoteSw.innerText = 'Quotes';
        todosSw.innerText = 'ToDos';
    }
    if(typeof changeTodoLang == 'function') changeTodoLang()
}

settingsBtn.addEventListener('click', () => form.classList.remove('form-none'));
cancelBtn.addEventListener('click', resetStartForm);
submitBtn.addEventListener('click', submitStartForm)
langSwitch.addEventListener('input',changeLang)

backgroundRadio.forEach(el => el.addEventListener('input',() => {
    backgroundService = document.querySelector('input[name="backgrounds-radio"]:checked').value;
    isBackgroundChanged = true;
}))

backgroundTagInput.addEventListener('input',(e) => {
    const re = new RegExp(`^[a-zA-Z]*$`)
    if (!re.test(e.target.value)) {
        form.classList.add('error-tag');
        setTimeout(()=>{
            form.classList.remove('error-tag');
        }, 5000)
    } else {
        console.log(e.target.value)
        backgroundTag = e.target.value.toLowerCase();
        isBackgroundChanged = true;
    }
})


if (!name || ! city) form.classList.remove('form-none');

document.addEventListener('keydown', (e)=>{
    // console.log(e.key)
    if (e.key == 'Escape') form.classList.add('form-none')
})