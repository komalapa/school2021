(()=>{"use strict";var a={845:(a,e,t)=>{a.exports=t.p+"images/rs_school_js.svg"}},e={};function t(m){var r=e[m];if(void 0!==r)return r.exports;var u=e[m]={exports:{}};return a[m](u,u.exports,t),u.exports}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"==typeof window)return window}}(),(()=>{var a;t.g.importScripts&&(a=t.g.location+"");var e=t.g.document;if(!a&&e&&(e.currentScript&&(a=e.currentScript.src),!a)){var m=e.getElementsByTagName("script");m.length&&(a=m[m.length-1].src)}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=a+"../"})(),(()=>{const a=10,e=document.querySelector("#app");function m(a){const t=document.createElement("div");t.classList.add("rounds-wrp");const m=document.createElement("h2");m.classList.add("rounds-header"),"picture"===a.type?m.innerText="Найди автора":"author"===a.type?m.innerText="Найди картину":m.innerText="Смешаный режим",t.append(m);for(let e=0;e<a.rounds.length;e+=1){const m=document.createElement("div");m.classList.add("rounds-opener");const r=document.createElement("span");r.innerText=e+1;const u=document.createElement("span");u.innerText=100*a.rounds[e].getProgress()+"%",u.classList.add("rounds-opener-result"),m.append(r,u),m.dataset.action="render",m.dataset.object="roundQuestions",m.dataset.roundNumber=e,a.rounds[e].getProgress()<.3&&m.classList.add("rounds-opener-not-solved"),t.append(m)}e.innerHTML="",e.append(t)}function r(a){const t=document.createElement("div");t.classList.add("question-wrp");const m=document.createElement("span");m.classList.add("question-text"),t.append(m);const r=document.createElement("div");if(r.classList.add("question-answers-wrp"),"picture"===a.type){m.innerText="Выберите автора картины:";const e=a.getImage(),u=document.createElement("img");u.classList.add("question-main-picture"),e.onload=()=>{u.src=e.src},a.getAnswers().forEach(((e,m)=>{const n=document.createElement("div");n.classList.add("question-answers","question-answers-author"),n.innerText=e,r.append(n),t.append(u,r),n.dataset.action="answer",n.dataset.questionNumber=a.number,n.dataset.index=m}))}else"author"===a.type&&(m.innerText=`${a.author} написал:`,a.getAnswers().forEach(((e,m)=>{const u=document.createElement("img");u.src=e,u.classList.add("question-answers","question-answers-picture"),u.onload=()=>r.append(u),u.dataset.action="answer",u.dataset.questionNumber=a.number,u.dataset.index=m,t.append(r)})));e.innerHTML="",e.append(t)}const u=[{author:"Павел Федотов",name:"Сватовство майора",year:"1852",imageNum:"0"},{author:"Эдгар Дега",name:"Голубые танцовщицы",year:"1897",imageNum:"1"},{author:"Веронезе",name:"Пир в доме Левия",year:"1563",imageNum:"2"},{author:"Илья Репин",name:"Иван Грозный и сын его Иван",year:"1885",imageNum:"3"},{author:"Константин Маковский",name:"Портрет графини Софьи",year:"1890",imageNum:"4"},{author:"Василий Перов",name:"Приезд гувернантки в купеческий дом",year:"1866",imageNum:"5"},{author:"Микеланджело",name:"Сотворение Адама",year:"1511",imageNum:"6"},{author:"Пьер Огюст Ренуар",name:"Прогулка в Булонском лесу",year:"1873",imageNum:"7"},{author:"Ян Вермеер",name:"Хозяйка и служанка",year:"1667",imageNum:"8"},{author:"Василий Поленов",name:"Московский дворик",year:"1877",imageNum:"9"},{author:"Фёдор Васильев",name:"Мокрый луг",year:"1872",imageNum:"10"},{author:"Илья Репин",name:"Проводы новобранца",year:"1879",imageNum:"11"},{author:"Веронезе",name:"Марс и Венера",year:"1560",imageNum:"12"},{author:"Виктор Васнецов",name:"Аленушка",year:"1881",imageNum:"13"},{author:"Клод Лоррен",name:"Отплытие святой Урсулы",year:"1614",imageNum:"14"},{author:"Илья Репин",name:"Вечорници",year:"1881",imageNum:"15"},{author:"Жан Фрагонар",name:"Качели",year:"1767",imageNum:"16"},{author:"Архип Куинджи",name:"Берёзовая роща",year:"1879",imageNum:"17"},{author:"Пабло Пикассо",name:"Герника",year:"1937",imageNum:"18"},{author:"Поль Гоген",name:"Откуда мы пришли? Кто мы? Куда мы идём?",year:"1898",imageNum:"19"},{author:"Бартоломео Мурильо",name:"Мадонна с четками",year:"1655",imageNum:"20"},{author:"Питер Брейгель",name:"Фламандские пословицы",year:"1559",imageNum:"21"},{author:"Ян ван Эйк",name:"Портрет четы Арнольфини",year:"1434",imageNum:"22"},{author:"Питер Брейгель",name:"Избиение младенцев",year:"1567",imageNum:"23"},{author:"Константин Маковский",name:"Дети, бегущие от грозы",year:"1872",imageNum:"24"},{author:"Рембрандт",name:"Даная",year:"1647",imageNum:"25"},{author:"Рафаэль",name:"Мадонна в кресле",year:"1514",imageNum:"26"},{author:"Василий Суриков",name:"Взятие снежного городка",year:"1891",imageNum:"27"},{author:"Иван Шишкин",name:"Ручей в берёзовом лесу",year:"1883",imageNum:"28"},{author:"Василий Суриков",name:"Покорение Сибири Ермаком Тимофеевичем",year:"1895",imageNum:"29"},{author:"Владимир Боровиковский",name:"Портрет Лопухиной",year:"1797",imageNum:"30"},{author:"Рене Магритт",name:"Сын человеческий",year:"1964",imageNum:"31"},{author:"Веласкес",name:"Венера с зеркалом",year:"1651",imageNum:"32"},{author:"Иван Богданов",name:"За расчётом",year:"1890",imageNum:"33"},{author:"Рембрандт",name:"Христос и грешница",year:"1644",imageNum:"34"},{author:"Джон Уильям Уотерхаус",name:"Волшебница Шалот",year:"1888",imageNum:"35"},{author:"Пьер Огюст Ренуар",name:"Большие купальщицы",year:"1887",imageNum:"36"},{author:"Бартоломео Мурильо",name:"Мальчик с собакой",year:"1650",imageNum:"37"},{author:"Василий Перов",name:"Тройка",year:"1866",imageNum:"38"},{author:"Николай Богданов-Бельский",name:"Устный счёт",year:"1895",imageNum:"39"},{author:"Виктор Васнецов",name:"Три царевны подземного царства",year:"1884",imageNum:"40"},{author:"Анри Матисс",name:"Танец",year:"1910",imageNum:"41"},{author:"Эдвард Мунк",name:"Мадонна",year:"1894",imageNum:"42"},{author:"Марк Шагал",name:"Прогулка",year:"1918",imageNum:"43"},{author:"Василий Перов",name:"Сельский крестный ход на Пасхе",year:"1861",imageNum:"44"},{author:"Иероним Босх",name:"Страшный суд",year:"1504",imageNum:"45"},{author:"Карл Лемох",name:"Варька",year:"1893",imageNum:"46"},{author:"Жан Фрагонар",name:"Поцелуй украдкой",year:"1788",imageNum:"47"},{author:"Франсуа Буше",name:"Венера, утешающая Амура",year:"1751",imageNum:"48"},{author:"Иван Шишкин",name:"Корабельная роща",year:"1898",imageNum:"49"},{author:"Густав Климт",name:"Золотая Адель",year:"1907",imageNum:"50"},{author:"Виктор Васнецов",name:"Богатыри",year:"1898",imageNum:"51"},{author:"Вильгельм фон Каульбах",name:"Разрушение Иерусалима",year:"1846",imageNum:"52"},{author:"Веронезе",name:"Брак в Кане Галилейской",year:"1562",imageNum:"53"},{author:"Андрей Рублев",name:"Троица",year:"1411",imageNum:"54"},{author:"Василий Суриков",name:"Утро стрелецкой казни",year:"1881",imageNum:"55"},{author:"Тициан",name:"Вакханалия",year:"1526",imageNum:"56"},{author:"Веласкес",name:"Вилла Медичи в Риме. Полдень",year:"1630",imageNum:"57"},{author:"Эдуард Мане",name:"Ланч на траве",year:"1863",imageNum:"58"},{author:"Сальвадор Дали",name:"Постоянство памяти",year:"1931",imageNum:"59"},{author:"Пьер Огюст Ренуар",name:"Две девушки",year:"1892",imageNum:"60"},{author:"Александр Маковский",name:"Надоела",year:"1897",imageNum:"61"},{author:"Веласкес",name:"Менины",year:"1656",imageNum:"62"},{author:"Антонис ван Дейк",name:"Самсон и Далила",year:"1628",imageNum:"63"},{author:"Пабло Пикассо",name:"Девочка на шаре",year:"1905",imageNum:"64"},{author:"Джованни Беллини",name:"Пир богов",year:"1514",imageNum:"65"},{author:"Леонардо да Винчи",name:"Дама с горностаем",year:"1490",imageNum:"66"},{author:"Веласкес",name:"Бахус",year:"1628",imageNum:"67"},{author:"Бартоломео Мурильо",name:"Непорочное зачатие",year:"1678",imageNum:"68"},{author:"Теодор Жерико",name:'Плот "Медузы"',year:"1819",imageNum:"69"},{author:"Иван Шишкин",name:"Утро в сосновом лесу",year:"1889",imageNum:"70"},{author:"Жан Этьен Лиотар",name:"Шоколадница",year:"1745",imageNum:"71"},{author:"Рембрандт",name:"Автопортрет с Саскией",year:"1635",imageNum:"72"},{author:"Илья Репин",name:"Крестный ход",year:"1883",imageNum:"73"},{author:"Алексей Венецианов",name:"Спящий пастушок",year:"1826",imageNum:"74"},{author:"Иван Богданов",name:"Новичок",year:"1893",imageNum:"75"},{author:"Анри де Тулуз-Лотрек",name:"Угол Мулен де ла Галет",year:"1892",imageNum:"76"},{author:"Тициан",name:"Кающаяся Марина Магдалина",year:"1565",imageNum:"77"},{author:"Веласкес",name:"Инфанта Маргарита",year:"1654",imageNum:"78"},{author:"Тициан",name:"Динарий Кесаря",year:"1516",imageNum:"79"},{author:"Карл Брюллов",name:"Всадница",year:"1832",imageNum:"80"},{author:"Василий Верещагин",name:"Апофеоз войны",year:"1817",imageNum:"81"},{author:"Леонардо да Винчи",name:"Благовещение",year:"1475",imageNum:"82"},{author:"Алексей Саврасов",name:"Грачи прилетели",year:"1871",imageNum:"83"},{author:"Тициан",name:"Любовь земная и Любовь небесная",year:"1516",imageNum:"84"},{author:"Жан Батист Грёз",name:"Деревенская помолвка",year:"1761",imageNum:"85"},{author:"Пабло Пикассо",name:"Авиньонские девицы",year:"1907",imageNum:"86"},{author:"Илья Репин",name:"Бурлаки на Волге",year:"1873",imageNum:"87"},{author:"Михаил Нестеров",name:"Видение отроку Варфоломею",year:"1890",imageNum:"88"},{author:"Рафаэль",name:"Мадонна Бельведерская",year:"1506",imageNum:"89"},{author:"Василий тропинин",name:"Девушка с горшком роз",year:"1850",imageNum:"90"},{author:"Караваджо",name:"Лютнист",year:"1596",imageNum:"91"},{author:"Василий Перов",name:"Охотники на привале",year:"1871",imageNum:"92"},{author:"Леонардо да Винчи",name:"Тайная вечеря",year:"1498",imageNum:"93"},{author:"Жан Батист Грёз",name:"Избалованное дитя",year:"1765",imageNum:"94"},{author:"Адольф Вильям Бугро",name:"Волна",year:"1896",imageNum:"95"},{author:"Кузьма Петров-Водкин",name:"Купание красного коня",year:"1912",imageNum:"96"},{author:"Густав Климт",name:"Поцелуй",year:"1908",imageNum:"97"},{author:"Иван Шишкин",name:"Рожь",year:"1878",imageNum:"98"},{author:"Жан-Леон Жером",name:"Бой гладиаторов",year:"1872",imageNum:"99"},{author:"Василий Суриков",name:"Боярыня Морозова",year:"1887",imageNum:"100"},{author:"Исаак Левитан",name:"Над вечным покоем",year:"1894",imageNum:"101"},{author:"Гейнсборо",name:"Дама в голубом",year:"1780",imageNum:"102"},{author:"Алексей Венецианов",name:"На пашне. Весна",year:"1820",imageNum:"103"},{author:"Тициан",name:"Саломея",year:"1515",imageNum:"104"},{author:"Василий Кандинский",name:"Композиция VIII",year:"1923",imageNum:"105"},{author:"Василий Поленов",name:"В парке",year:"1874",imageNum:"106"},{author:"Луи Лагрене",name:"Марс и Венера",year:"1770",imageNum:"107"},{author:"Сальвадор Дали",name:"Сон, вызванный полётом пчелы вокруг граната, за секунду до пробуждения",year:"1944",imageNum:"108"},{author:"Ян Вермеер",name:"Девушка с жемчужной серёжкой",year:"1665",imageNum:"109"},{author:"Анри Руссо",name:"Спящая цыганка",year:"1897",imageNum:"110"},{author:"Василий Поленов",name:"Переправа через реку",year:"1872",imageNum:"111"},{author:"Эдвард Мунк",name:"Крик",year:"1893",imageNum:"112"},{author:"Карл Брюллов",name:"Последний день Помпеи",year:"1833",imageNum:"113"},{author:"Илья Репин",name:"Летний пейзаж",year:"1879",imageNum:"114"},{author:"Ян Вермеер",name:"Молочница",year:"1660",imageNum:"115"},{author:"Иван Айвазовский",name:"Девятый вал",year:"1850",imageNum:"116"},{author:"Винсент ван Гог",name:"Подсолнухи",year:"1888",imageNum:"117"},{author:"Валентин Серов",name:"Девочка с персиками",year:"1887",imageNum:"118"},{author:"Караваджо",name:"Обращение Савла",year:"1601",imageNum:"119"},{author:"Альбрехт Дюрер",name:"Праздник венков из роз",year:"1506",imageNum:"120"},{author:"Эль Греко",name:"Изгнание торгующих из храма",year:"1600",imageNum:"121"},{author:"Илья Репин",name:"Приготовление к экзамену",year:"1864",imageNum:"122"},{author:"Исаак Левитан",name:"Март",year:"1895",imageNum:"123"},{author:"Адольф Вильям Бугро",name:"Девушка и Амур",year:"1880",imageNum:"124"},{author:"Леонардо да Винчи",name:"Мадонна Литта",year:"1491",imageNum:"125"},{author:"Казимир Малевич",name:"Черный квадрат",year:"1915",imageNum:"126"},{author:"Эль Греко",name:"Апостолы Петр и Павел",year:"1592",imageNum:"127"},{author:"Виктор Васнецов",name:"Витязь на распутье",year:"1878",imageNum:"128"},{author:"Константин Маковский",name:"Боярский свадебный пир",year:"1883",imageNum:"129"},{author:"Эжен Делакруа",name:"Свобода, ведущая народ",year:"1830",imageNum:"130"},{author:"Василий Поленов",name:"Бабушкин сад",year:"1878",imageNum:"131"},{author:"Анри Матисс",name:"Семейный портрет",year:"1911",imageNum:"132"},{author:"Константин Маковский",name:"Гадание",year:"1890",imageNum:"133"},{author:"Пьер Огюст Ренуар",name:"Мост в Шату",year:"1875",imageNum:"134"},{author:"Сандро Боттичелли",name:"Весна",year:"1482",imageNum:"135"},{author:"Пьер Огюст Ренуар",name:"Зонтики",year:"1886",imageNum:"136"},{author:"Гюстав Курбе",name:"Мастерская художника",year:"1855",imageNum:"137"},{author:"Василий Поленов",name:"Деревня Окулова гора",year:"1860",imageNum:"138"},{author:"Константин Маковский",name:"Перемещение ковра Мухаммеда из Мекки в Каир",year:"1875",imageNum:"139"},{author:"Пьер Огюст Ренуар",name:"Бал в Мулен де ла Галетт",year:"1876",imageNum:"140"},{author:"Иван Крамской",name:"Неизвестная",year:"1883",imageNum:"141"},{author:"Веласкес",name:"Кузница вулкана",year:"1630",imageNum:"142"},{author:"Илья Репин",name:"Запорожцы",year:"1891",imageNum:"143"},{author:"Рафаэль",name:"Дама с единорогом",year:"1506",imageNum:"144"},{author:"Александр Иванов",name:"Явление Христа народу",year:"1857",imageNum:"145"},{author:"Эдуард Мане",name:"Женщина с кувшином",year:"1858",imageNum:"146"},{author:"Тициан",name:"Конный портрет Карла V",year:"1548",imageNum:"147"},{author:"Пьер Огюст Ренуар",name:"Завтрак гребцов",year:"1881",imageNum:"148"},{author:"Карл Брюллов",name:"Итальянский полдень",year:"1827",imageNum:"149"},{author:"Виктор Васнецов",name:"Царь Иван Васильевич Грозный",year:"1896",imageNum:"150"},{author:"Питер Брейгель",name:"Охотники на снегу",year:"1565",imageNum:"151"},{author:"Виктор Васнецов",name:"Ковер-самолёт",year:"1880",imageNum:"152"},{author:"Марк Шагал",name:"Я и деревня",year:"1911",imageNum:"153"},{author:"Леонардо да Винчи",name:"Мона Лиза",year:"1505",imageNum:"154"},{author:"Франческо Баккьякка",name:"Мадонна с младенцем",year:"1520",imageNum:"155"},{author:"Жак-Луи Давид",name:"Клятва Горациев",year:"1784",imageNum:"156"},{author:"Альбрехт Дюрер",name:"Адам и Ева",year:"1507",imageNum:"157"},{author:"Бартоломео Мурильо",name:"Явление и дар Богородицы",year:"1655",imageNum:"158"},{author:"Василий Перов",name:"Птицелов",year:"1870",imageNum:"159"},{author:"Караваджо",name:"Отдых на пути в Египет",year:"1596",imageNum:"160"},{author:"Франциско Гоя",name:"Расстрел повстанцев",year:"1808",imageNum:"161"},{author:"Рафаэль",name:"Триумф Галатеи",year:"1512",imageNum:"162"},{author:"Михаил Врубель",name:"Демон сидящий",year:"1890",imageNum:"163"},{author:"Винсент ван Гог",name:"Ирисы",year:"1889",imageNum:"164"},{author:"Поль Деларош",name:"Казнь Джейн Грей",year:"1833",imageNum:"165"},{author:"Джон Констебл",name:"Вид на собор в Солсбери из епископского сада",year:"1823",imageNum:"166"},{author:"Винсент ван Гог",name:"Звёздная ночь",year:"1889",imageNum:"167"},{author:"Франсуа Буше",name:"Четыре сезона - Весна",year:"1755",imageNum:"168"},{author:"Рафаэль",name:"Мадонна с розой",year:"1518",imageNum:"169"},{author:"Василий Тропинин",name:"Кружевница",year:"1823",imageNum:"170"},{author:"Рембрандт",name:"Пир Вальтасара",year:"1635",imageNum:"171"},{author:"Василий Суриков",name:"Переход Суворова через Альпы",year:"1899",imageNum:"172"},{author:"Исаак Левитан",name:"Золотая осень",year:"1895",imageNum:"173"},{author:"Архип Куинджи",name:"На острове Валааме",year:"1873",imageNum:"174"},{author:"Веласкес",name:"Сдача Бреды",year:"1635",imageNum:"175"},{author:"Илья Репин",name:"Не ждали",year:"1888",imageNum:"176"},{author:"Франсуа Буше",name:"Купание Дианы",year:"1742",imageNum:"177"},{author:"Марианна Верёвкина",name:"Муравейник",year:"1916",imageNum:"178"},{author:"Пьер Огюст Ренуар",name:"Портрет Жанны Самари",year:"1877",imageNum:"179"},{author:"Илья Репин",name:"Садко",year:"1876",imageNum:"180"},{author:"Архип Куинджи",name:"Лунная ночь на Днепре",year:"1880",imageNum:"181"},{author:"Веласкес",name:"Поклонение волхвов",year:"1619",imageNum:"182"},{author:"Николай Богданов-Бельский",name:"У дверей школы",year:"1897",imageNum:"183"},{author:"Иероним Босх",name:"Сад земных наслаждений",year:"1510",imageNum:"184"},{author:"Корреджо",name:"Даная",year:"1530",imageNum:"185"},{author:"Питер Пауль Рубенс",name:"Похищение дочерей Левкиппа",year:"1618",imageNum:"186"},{author:"Жан Энгр",name:"Большая одалиска",year:"1814",imageNum:"187"},{author:"Рафаэль",name:"Сикстинская Мадонна",year:"1520",imageNum:"188"},{author:"Рембрандт",name:"Похищение Европы",year:"1632",imageNum:"189"},{author:"Питер Пауль Рубенс",name:"Похищение Орфии Бореем",year:"1615",imageNum:"190"},{author:"Архип Куинджи",name:"Украинская ночь",year:"1876",imageNum:"191"},{author:"Эдгар Дега",name:"Танцовщицы у станка",year:"1877",imageNum:"192"},{author:"Алексей Венецианов",name:"На жатве. Лето",year:"1827",imageNum:"193"},{author:"Пьер Огюст Ренуар",name:"Две сестры",year:"1881",imageNum:"194"},{author:"Рембрандт",name:"Ночной дозор",year:"1642",imageNum:"195"},{author:"Эдуар Мане",name:"Бар в «Фоли-Бержер»",year:"1882",imageNum:"196"},{author:"Никола Пуссен",name:"Пейзаж с Полифемом",year:"1649",imageNum:"197"},{author:"Питер Брейгель",name:"Притча о слепых",year:"1568",imageNum:"198"},{author:"Виктор Васнецов",name:"Иван-царевич на Сером Волке",year:"1888",imageNum:"199"},{author:"Сандро Боттичелли",name:"Рождение Венеры",year:"1486",imageNum:"200"},{author:"Леонардо да Винчи",name:"Мадонна в скалах",year:"1486",imageNum:"201"},{author:"Аксели Галлен-Каллела",name:"Любовники",year:"1916",imageNum:"202"},{author:"Винсент Ван Гог",name:"Автопортрет с перевязанным ухом",year:"1889",imageNum:"203"},{author:"Клод Моне",name:"Впечатление. Восходящее солнце",year:"1882",imageNum:"204"},{author:"Рембрандт",name:"Возвращение блудного сына",year:"1662",imageNum:"205"},{author:"Караваджо",name:"Больной вакх",year:"1593",imageNum:"206"},{author:"Иван Айвазовский",name:"Лунная дорожка",year:"1886",imageNum:"207"},{author:"Винсент Ван Гог",name:"Пшеничное поле с кипарисами",year:"1889",imageNum:"208"},{author:"Аксели Галлен-Каллела",name:"Мальчик и ворона",year:"1884",imageNum:"209"},{author:"Ян Вермеер",name:"Астроном",year:"1668",imageNum:"210"},{author:"Питер Пауль Рубенс",name:"Союз Земли и Воды",year:"1618",imageNum:"211"},{author:"Клод Моне",name:"Стог сена в Живерни",year:"1886",imageNum:"212"},{author:"Жан Фрагонар",name:"Задвижка",year:"1777",imageNum:"213"},{author:"Марианна Верёвкина",name:"Осень, школа",year:"1907",imageNum:"214"},{author:"Винсент Ван Гог",name:"Ночное кафе в Арле",year:"1888",imageNum:"215"},{author:"Клод Моне",name:"Пруд с кувшинками",year:"1899",imageNum:"216"},{author:"Иван Айвазовский",name:"Буря",year:"1868",imageNum:"217"},{author:"Ян Вермеер",name:"Кружевница",year:"1671",imageNum:"218"},{author:"Карл Брюллов",name:"Автопортрет",year:"1848",imageNum:"219"},{author:"Питер Брейгель",name:"Вавилонская башня",year:"1563",imageNum:"220"},{author:"Поль Гоген",name:"Кафе в Арле",year:"1888",imageNum:"221"},{author:"Иван Шишкин",name:"Сосновый бор",year:"1895",imageNum:"222"},{author:"Клод Моне",name:"Завтрак на траве",year:"1865",imageNum:"223"},{author:"Рафаэль",name:"Святой Георгий и дракон",year:"1506",imageNum:"224"},{author:"Пабло Пикассо",name:"Любительница абсента",year:"1901",imageNum:"225"},{author:"Эдгар Дега",name:"Перед репетицией",year:"1880",imageNum:"226"},{author:"Николай Рерих",name:"Помни!",year:"1924",imageNum:"227"},{author:"Илья Репин",name:"Стрекоза",year:"1884",imageNum:"228"},{author:"Клод Моне",name:"Мост Ватерлоо, туман",year:"1903",imageNum:"229"},{author:"Исаак Левитан",name:"Весна – большая вода",year:"1897",imageNum:"230"},{author:"Аксели Галлен-Каллела",name:"Первый урок",year:"1889",imageNum:"231"},{author:"Иван Айвазовский",name:"Буря на море",year:"1873",imageNum:"232"},{author:"Эдгар Дега",name:"Балетный класс",year:"1874",imageNum:"233"},{author:"Николай Рерих",name:"Горная обитель",year:"1933",imageNum:"234"},{author:"Леонардо да Винчи",name:"Святая Анна с Мадонной",year:"1510",imageNum:"235"},{author:"Эль Греко",name:"Мальчик, зажигающий свечу",year:"1572",imageNum:"236"},{author:"Пабло Пикассо",name:"Дружба",year:"1908",imageNum:"237"},{author:"Аксели Галлен-Каллела",name:"Девушка на ветру",year:"1893",imageNum:"238"},{author:"Иван Айвазовский",name:"Волна",year:"1889",imageNum:"239"},{author:"Эжен Делакруа",name:"Автопортрет",year:"1837",imageNum:"240"}];class n{constructor(e,t="picture",m=4){let r=e;r>=u.length&&(r=0),this.answersNumber=m,this.number=r,this.roundNumber=Math.floor(r/a),this.name=u[r].name,this.author=u[r].author,this.year=u[r].year,this.imageNum=u[r].imageNum,this.imagePath=`https://github.com/komalapa/image-data/raw/master/full/${this.imageNum}full.jpg`,this.answers=[],this.type=t,this.genAnswers=this.genAnswers.bind(this),this.genAnswers(),this.isSolved=!1}getImage(){const a=new Image;return a.src=this.imagePath,a}getAuthor(){return this.author}getAnswers(){return this.answers}genAnswers(){const a=[];a.push(this.author);for(let e=0;e<this.answersNumber-1;e+=1){const t=Math.floor(Math.random()*u.length);let m;"author"===this.type?m=`https://github.com/komalapa/image-data/raw/master/img/${u[t].imageNum}.jpg`:"picture"===this.type&&(m=u[t].author),a.indexOf(u[t].author)>=0?e-=1:(this.answers.push(m),a.push(u[t].author))}return"author"===this.type&&this.answers.push(this.imagePath),"picture"===this.type&&this.answers.push(this.author),this.answers=this.answers.sort((()=>.5-Math.random())),this.answers}isAnswer(a){return("author"===this.type&&this.answers[a]===this.imagePath||"picture"===this.type&&this.answers[a]===this.author)&&(this.isSolved=!0,!0)}}class o{constructor(e,t="picture",m=4){this.questions=[];for(let r=e*a;r<(e+1)*a;r+=1)this.questions.push(new n(r,t,m));this.type=t,this.numberOfAnswers=m,this.number=e}getProgress(){let e=0;return this.questions.forEach((a=>{a.isSolved&&(e+=1)})),e/a}}class i{constructor(a="picture",e=4){this.rounds=[];for(let t=0;t<Math.floor(24);t+=1)this.rounds.push(new o(t,a,e));this.type=a,this.numberOfAnswers=e}}const s=function(){let a;return function(e){return void 0===a&&(a={},a.paths={...e},a.sounds=[],a.container=document.createElement("div"),a.container.id="audios",Object.keys(a.paths).forEach((e=>{const t=document.createElement("audio");t.id=`audio-${e}`,t.src=a.paths[e],t.loop=!1,t.autoplay=!1,t.muted=!1,a.container.append(t),"main"===e?a.main=t:a.sounds.push(t)})),document.documentElement.append(a.container),a.isMusicOn=!0,a.main.loop=!0,a.isMusicOn&&(a.main.autoplay=!0),a.playClick=()=>{a.container.querySelector("#audio-click").play()},a.playWrong=()=>{a.container.querySelector("#audio-wrong").play()},a.muteAll=()=>{a.muteMusic(),a.muteSounds()},a.muteMusic=()=>{a.main.muted=!0,a.main.pause()},a.muteSounds=()=>{a.sounds=a.sounds.map((a=>{const e=a;return e.muted=!0,e}))}),a}}();var h=t(845);function g(){const a=document.createElement("div");a.classList.add("home-wrp");const t=document.createElement("h1");t.classList.add("home-header"),t.innerText="Art-Quiz",a.append(t);const m=document.createElement("button");m.classList.add("home-button"),m.innerText="Авторы",m.dataset.action="start",m.dataset.type="author";const r=document.createElement("button");r.classList.add("home-button"),r.innerText="Картины",r.dataset.action="start",r.dataset.type="picture";const u=document.createElement("button");u.classList.add("home-button"),u.innerText="Игра с другом",u.dataset.action="network";const n=document.createElement("button");n.classList.add("home-button"),n.innerText="Быстрая игра",n.dataset.action="fast-game";const o=document.createElement("button");o.classList.add("home-button","settings-button"),o.innerText="Настройки",o.dataset.action="settings";const i=document.createElement("footer");i.classList.add("home-footer");const s=document.createElement("a");s.classList.add("home-footer-course-link"),s.href="https://rs.school/js/",s.title="Курс «JavaScript/Front-end»";const g=document.createElement("img");g.classList.add("home-footer-course-img"),g.alt="RS school logo",g.src=h,s.append(g);const c=document.createElement("a");c.classList.add("home-footer-git-link"),c.innerText="github: komalapa",c.href="https://github.com/komalapa",i.append(s,c),a.append(m,r,u,n,o,i),e.innerHTML="",e.append(a)}const c=new s({click:"audio/zipclick.flac",wrong:"audio/MetalClick.wav",main:"audio/main.mp3"});let d=new i("picture");g(),document.addEventListener("click",(t=>{switch(t.target.dataset.action){case"render":if(c.playClick(),"roundQuestions"===t.target.dataset.object){!function(a){const t=document.createElement("div");t.classList.add("round-wrp");const m=document.createElement("h2");m.classList.add("rounds-header"),m.innerText=`Раунд № ${a.number}`,t.append(m);for(let e=0;e<a.questions.length;e+=1){const m=document.createElement("div");m.classList.add("rounds-opener"),m.innerText=e+1,m.dataset.action="render",m.dataset.object="questions",m.dataset.roundNumber=a.number,m.dataset.questionNumber=e,t.append(m)}e.innerHTML="",e.append(t)}(d.rounds[+t.target.dataset.roundNumber]);break}if("questions"===t.target.dataset.object){r(d.rounds[+t.target.dataset.roundNumber].questions[+t.target.dataset.questionNumber]);break}break;case"answer":{const m=Math.floor(t.target.dataset.questionNumber/a),r=t.target.dataset.questionNumber%a,u=d.rounds[m].questions[r],n=u.isAnswer(t.target.dataset.index);n?c.playClick():c.playWrong(),function(a,t=!0){const m=document.createElement("div");m.classList.add("card-wrp"),t||m.classList.add("card-wrp-wrong");const r=document.createElement("img");r.src=a.imagePath,r.classList.add("card-img");const u=document.createElement("span");u.classList.add("card-name"),u.innerText=a.name;const n=document.createElement("span");n.classList.add("card-year"),n.innerText=a.year;const o=document.createElement("span");o.classList.add("card-author"),o.innerText=a.author;const i=document.createElement("button");i.classList.add("card-button"),i.innerText="Далее",i.dataset.action="closeCard",i.dataset.number=a.number,i.dataset.roundNumber=a.roundNumber,r.onload=()=>{m.append(r,n,u,o,i),e.append(m)}}(u,n)}break;case"start":c.playClick(),d.type!==t.target.dataset.type&&(d=new i(t.target.dataset.type)),m(d);break;case"closeCard":if(t.target.dataset.number%a==9){!function(a,t){const m=document.createElement("div");m.classList.add("results-container");const r=document.createElement("h3");r.innerText=`Раунд №${a} завершен!`;const u=document.createElement("span");u.innerText=`Ваш результат ${100*t}%`;let n="result-container";t<.3&&(n="low-result"),t>.6&&(n="high-result"),m.classList.add(n);const o=document.createElement("button");o.classList.add("results-home","results-button"),o.dataset.action="goHome",o.innerText="Домой";const i=document.createElement("button");i.classList.add("results-next-round","results-button"),i.dataset.action="nextRound",i.dataset.roundNumber=a,i.innerText="Далее",m.append(r,u,o,i),e.append(m)}(+t.target.dataset.roundNumber,d.rounds[+t.target.dataset.roundNumber].getProgress());break}r(d.rounds[+t.target.dataset.roundNumber].questions[(+t.target.dataset.number+1)%a]);break;case"nextRound":t.target.dataset.roundNumber>=d.rounds.length-1?m(d):r(d.rounds[+t.target.dataset.roundNumber+1].questions[0]);break;case"goHome":g()}}))})()})();