const form = document.querySelector('#start-form');
const nameInput = document.querySelector('#name');
const cityInput = document.querySelector('#city');
const settingsBtn = document.querySelector('#settings-btn');
const cancelBtn = document.querySelector('#start-form-reset');
const submitBtn = document.querySelector('#start-form-submit');
const langSwitch = document.querySelector('#lang-switch');

const nameLbl = document.querySelector('#name-lbl');
const cityLbl = document.querySelector('#city-lbl');

if (localStorage.getItem('momentLang')) lang = localStorage.getItem('momentLang');
langSwitch.checked = (lang === 'en')
// if (typeof weatherListGen == 'function') weatherListGen();

//func switchers
const blocksState = {
    player: true,
    weather: true,
    quotes: true,
    todos: true,
    wallpapers: 'git',
    tag:''
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
}) 

const todosSw = document.createElement('span');
todosSw.classList.add('form-func-switcher');
todosSw.addEventListener('click', ()=>{
    blocksState.todos = !blocksState.todos;
    quoteSw.style.textDecoration = !blocksState.todos ? 'line-through' : 'none';
    const todosWrp = document.querySelector('.todos-wrp');
    console.log(todosWrp)
    if (todosWrp) {
        blocksState.todos ? todosWrp.classList.remove('form-none')
                :todosWrp.classList.add('form-none')
    }
}) 

switchers.append(playerSw, weatherSw, quoteSw, todosSw )





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
}

function resetStartForm(e){
    if (e) e.preventDefault();
    name = localStorage.getItem('momentName');
    city = localStorage.getItem('momentCity');
    if (city) {
        if (DEFAULT_CITIES_EN.indexOf(city.toLowerCase()) >= 0 || DEFAULT_CITIES_RU.indexOf(city.toLowerCase()) >= 0){
            if (typeof weatherNotDefault == 'function') weatherNotDefault(city);
        } else {
            cities.push(city.toLowerCase());
        }
    }
    nameInput.value = name || '';
    cityInput.value = city || '';
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
        cancelBtn.innerText = 'Отмена';
        playerSw.innerText = 'Музыка'
        weatherSw.innerText = 'Погода';
        quoteSw.innerText = 'Цитаты';
        todosSw.innerText = 'Дела';
    } else {
        cityLbl.innerText = 'City';
        nameLbl.innerText = 'Name';
        cancelBtn.innerText = 'Cancel';
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

if (!name || ! city) form.classList.remove('form-none');

document.addEventListener('keydown', (e)=>{
    // console.log(e.key)
    if (e.key == 'Escape') form.classList.add('form-none')
})