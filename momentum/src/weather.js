const weatherList = document.createElement('ul');
weatherList.classList.add('weather-list');
app.append(weatherList)

async function getWeather(city='Минск', lang = 'ru', isDefault = false) {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=ad379d091ac804c128d00dc78bd9de17&units=metric`;
    const res = await fetch(url);
    // console.log(res.status)
    if (res.status !== 200) return null;
    const data = await res.json(); 
    console.log(data.wind);
    const weatherItem = document.createElement('li');
    weatherItem.classList.add('weather-list-item');
    const name = document.createElement('h3');
    name.classList.add('weather-list-item-header');
    name.innerText = city;

    const temp = document.createElement('span');
    temp.classList.add('weather-list-item-temp');
    temp.innerHTML = data.main.temp.toFixed(0) + '&deg;C';
    temp.title = `${lang === 'ru' ? 'ощущается как': 'feels like'} ${data.main.feels_like.toFixed(0)}°C`
    
    const icon = document.createElement('span');
    icon.classList.add('weather-list-item-icon','weather-icon' , 'owf' , 'owf-'+data.weather[0].id);
    icon.title = data.weather[0].description;
    
    const humidity = document.createElement('div');
    humidity.classList.add('weather-list-item-icon','weather-icon' , 'icon-tint');
    humidity.innerText = data.main.humidity + '%';
    humidity.title = `${lang === 'ru' ? 'влажность': 'humidity'}`

    const wind = document.createElement('div');
    const windIcon = document.createElement('span');
    windIcon.style.transform = `rotate(${data.wind.deg}deg)`
    // windIcon.classList.add('icon-arrow-circle-o-up');
    windIcon.innerText = '↑'
    windIcon.classList.add('wind-icon')
    wind.classList.add('weather-list-item-icon','weather-icon');
    wind.innerText = Math.round(data.wind.speed) + `${lang === 'ru' ? 'м/c' : 'm/s'}`;
    wind.prepend(windIcon);
    wind.style.textTransform = "lowercase"


    weatherItem.append(name, icon, temp, humidity, wind)
    if (isDefault) {
      weatherItem.classList.add('weather-default-city');
      weatherList.prepend(weatherItem)
    } else {
      weatherList.append(weatherItem)
    }
   

  }

  function weatherListGen(){
    weatherList.innerHTML = '';
    weatherList.innerText = '';
    if (lang === "ru"){
      //console.log('ru')
        DEFAULT_CITIES_RU.forEach(city => {
        //  console.log(city)
        getWeather(city, lang, true)
      })
    } else {
      //console.log('en')
        DEFAULT_CITIES_EN.forEach(city => {
      //    console.log(city)
        getWeather(city, 'en', true)
      })
    }
  }
  
