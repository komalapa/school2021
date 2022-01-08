(()=>{"use strict";var e={845:(e,t,n)=>{e.exports=n.p+"images/rs_school_js.svg"}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{const e="https://github.com/komalapa/image-data/raw/master/img/",t=10,s=document.getElementById("art-quiz-app"),a=document.getElementById("art-quiz-main-menu");function r(e,t=!0,n=!1,s=!1){const a=document.createElement("div");if(a.classList.add("crumps"),t){const e=document.createElement("span");e.innerText="ArtQuiz",e.classList.add("crumps-logo"),e.dataset.action="goHome",a.append(e)}if(!1!==n){const e=document.createElement("span");e.innerText=`Раунд №${n+1}`,e.dataset.action="start",a.append(e)}if(!1!==s){const e=document.createElement("span");e.innerText=`Вопрос №${s+1}`,a.append(e)}e.append(a)}function o(e){const n=document.createElement("div");n.classList.add("rounds-wrp"),r(n);const a=document.createElement("h2");a.classList.add("rounds-header"),"picture"===e.type?a.innerText="Найди автора":"author"===e.type?a.innerText="Найди картину":a.innerText="Смешаный режим",n.append(a);for(let s=0;s<e.rounds.length;s+=1){const a=document.createElement("div");a.classList.add("rounds-opener"),"picture"===e.type&&a.classList.add("rounds-opener-picture");const r=document.createElement("span");r.innerText=s+1,a.append(r);const o=e.rounds[s].getProgress();if(o>0){const e=document.createElement("span");e.innerText=`${o}/10`,e.classList.add("rounds-opener-result"),e.dataset.roundNumber=s,e.dataset.action="roundResult",a.append(e)}a.dataset.action="render",a.dataset.object="questions",a.dataset.roundNumber=s,a.dataset.questionNumber=e.rounds[s].questions[0].number%t,a.dataset.clear=!0,o/t>.3&&a.classList.add("rounds-opener-solved"),n.append(a)}s.innerHTML="",s.append(n)}function c(e,t=!0,n=!0){const a=document.createElement("div");a.classList.add("card-wrp"),t||a.classList.add("card-wrp-wrong");const r=document.createElement("img");r.src=e.imagePath,r.classList.add("card-img");const o=document.createElement("span");o.classList.add("card-name"),o.innerText=e.name;const c=document.createElement("span");c.classList.add("card-year"),c.innerText=e.year;const i=document.createElement("span");if(i.classList.add("card-author"),i.innerText=e.author,a.append(r,c,o,i),n){const t=document.createElement("button");t.classList.add("card-button"),t.innerText="Далее",t.dataset.action="closeCard",t.dataset.number=e.number,t.dataset.roundNumber=e.roundNumber,a.append(t)}else{const e=document.createElement("button");e.classList.add("card-button"),e.innerText="Закрыть",e.dataset.action="removeCardView",a.append(e)}a.classList.add("loading"),s.append(a),r.onload=()=>{a.classList.remove("loading")}}const i=function(){let e;return function(){return void 0===e&&(e={},e.music=!localStorage.getItem("komaAQmusic")||JSON.parse(localStorage.getItem("komaAQmusic")),e.sounds=!localStorage.getItem("komaAQsounds")||JSON.parse(localStorage.getItem("komaAQsounds")),e.volume=localStorage.getItem("komaAQvolume")||.5,e.answers=localStorage.getItem("komaAQanswers")||2,e.timer=localStorage.getItem("komaAQtimer")?JSON.parse(localStorage.getItem("komaAQtimer")):null,e.toggleMusic=()=>{e.music=!e.music,localStorage.setItem("komaAQmusic",e.music)},e.toggleSounds=()=>{e.sounds=!e.sounds,localStorage.setItem("komaAQsounds",e.sounds)},e.setVolume=t=>{e.volume=t,localStorage.setItem("komaAQvolume",t)},e.setAnswers=t=>{e.answers=t,localStorage.setItem("komaAQanswers",t)},e.setTimer=t=>{e.timer=t,localStorage.setItem("komaAQtimer",t)}),e}}(),u=function(){let e;return function(){if(void 0===e){e={};const t=localStorage.getItem("komalapaAQstate");t?e=JSON.parse(t):(e.picture=new Array(240),e.author=new Array(240),e.timer=null),e.setImages=e=>{this.images=e},e.getImages=()=>this.images,e.stopTimer=()=>{clearTimeout(e.timer),e.timer=null},e.saveState=()=>localStorage.setItem("komalapaAQstate",JSON.stringify(e))}return e}}(),d=new i,m=new u;function l(e){const n=document.createElement("div");n.classList.add("question-wrp"),r(n,!0,e.roundNumber,e.number%t);const a=document.createElement("span");a.classList.add("question-text"),n.append(a);const o=document.createElement("div");o.classList.add("question-answers-wrp");const i=[];if("picture"===e.type){a.innerText="Выберите автора картины:";const t=document.createElement("img");t.classList.add("question-main-picture"),t.src=e.imagePath;const s=new Promise((e=>{t.onload=()=>{e()}}));i.push(s),e.getAnswers().forEach(((s,a)=>{const r=document.createElement("div");r.classList.add("question-answers","question-answers-author"),r.innerText=s,o.append(r),n.append(t,o),r.dataset.action="answer",r.dataset.questionNumber=e.number,r.dataset.index=a}))}else"author"===e.type&&(o.classList.add("question-answers-pictures"),a.innerText=`${e.author} написал:`,e.getAnswers().forEach(((t,n)=>{const s=document.createElement("img");s.src=t,s.classList.add("question-answers","question-answers-picture");const a=new Promise((t=>{s.onload=()=>{o.append(s),s.dataset.action="answer",s.dataset.questionNumber=e.number,s.dataset.index=n,t()}}));i.push(a)})));n.append(o);const u=document.createElement("div");u.classList.add("result-dots-wrp");let l=e.roundNumber*t;for(;l<(e.roundNumber+1)*t;l+=1){const t=document.createElement("div");t.classList.add(m[e.type][l]?"result-dots-good":"result-dots-bad"),u.append(t)}n.append(u),n.classList.add("loading"),s.innerHTML="",s.append(n),Promise.all(i).then((()=>{null!==d.timer&&e.setTimer(n,(()=>c(e,!1))),n.classList.remove("loading")}))}const p=new u,g=new i;class h{constructor(e,n="picture",s=4){const a=p.getImages();let r=e;r>=a.length&&(r=0),this.answersNumber=s,this.number=r,this.roundNumber=Math.floor(r/t),this.name=a[r].name,this.author=a[r].author,this.year=a[r].year,this.imageNum=a[r].imageNum,this.imagePath=`https://github.com/komalapa/image-data/raw/master/full/${this.imageNum}full.jpg`,this.answers=[],this.type=n,this.genAnswers=this.genAnswers.bind(this),this.genAnswers(),this.isSolved=Boolean(p[n][r]),this.timeOut=null}getImage(){const e=new Image;return e.src=this.imagePath,e}getAuthor(){return this.author}getAnswers(){return this.answers}genAnswers(){const t=[];t.push(this.author.toLowerCase());for(let n=0;n<this.answersNumber-1;n+=1){const s=p.getImages(),a=Math.floor(Math.random()*s.length);let r;"author"===this.type?r=`${e}${s[a].imageNum}.jpg`:"picture"===this.type&&(r=s[a].author),t.indexOf(s[a].author.toLowerCase())>=0?n-=1:(this.answers.push(r),t.push(s[a].author.toLowerCase()))}return"author"===this.type&&this.answers.push(this.imagePath),"picture"===this.type&&this.answers.push(this.author),this.answers=this.answers.sort((()=>.5-Math.random())),this.answers}isAnswer(e){return this.denyTimer(),("author"===this.type&&this.answers[e]===this.imagePath||"picture"===this.type&&this.answers[e]===this.author)&&(this.isSolved=!0,!0)}unSolve(){this.isSolved=!1,this.isAnswered=!1,p[this.type][this.number]=null}setTimer(e,t){this.isAnswered=!1;let n=+g.timer;const s=document.createElement("div");s.classList.add("question-timer"),s.innerHTML=n;const a=()=>{setTimeout((()=>{n-=1,s.innerText=n,null!==p.timer&&(n<3&&s.classList.add("question-timer-ending"),n>0?p.timer=a():t())}),1e3)};p.timer=a(),e.prepend(s)}denyTimer(){clearTimeout(this.timer),clearTimeout(p.timer),p.timer=null,this.isAnswered=!0}}class b{constructor(e,n="picture",s=4){this.questions=[];for(let a=e*t;a<(e+1)*t;a+=1)this.questions.push(new h(a,n,s));this.type=n,this.numberOfAnswers=s,this.number=e}getProgress(){let e=0;return this.questions.forEach((t=>{t.isSolved&&(e+=1)})),e}}const w=new i;class E{constructor(e="picture",t=w.answers){this.rounds=[];for(let n=0;n<Math.floor(24);n+=1)this.rounds.push(new b(n,e,t));this.type=e,this.numberOfAnswers=t}}const v=function(){let e;return function(t){return void 0===e&&(e={},e.paths={...t},e.sounds=[],e.container=document.createElement("div"),e.container.id="audios",Object.keys(e.paths).forEach((t=>{const n=document.createElement("audio");n.id=`audio-${t}`,n.src=e.paths[t],n.loop=!1,n.autoplay=!1,n.muted=!1,e.container.append(n),"main"===t?e.main=n:e.sounds.push(n)})),document.documentElement.append(e.container),e.isMusicOn=!0,e.main.loop=!0,e.isMusicOn&&function(){const e=document.createElement("div");e.classList.add("greeting-wrp"),e.id="greeting";const t=document.createElement("h2");t.innerText="Добро пожаловать в Art Quiz";const n=document.createElement("span");n.innerText="Приложение содержит звуки и музыку. Вы можете включить и выключить их в меню.";const s=document.createElement("span");s.innerText="Так же в меню можно изменить количество вариантов ответа";const a=document.createElement("span");a.innerText="И включить игру на время.";const r=document.createElement("span");r.innerText="Приятной игры!";const o=document.createElement("button");o.classList.add("greeting-btn"),o.dataset.action="closeGreeting",o.innerText="Продолжить",e.append(t,n,s,a,r,o),document.documentElement.append(e)}(),e.playClick=()=>{e.container.querySelector("#audio-click").play()},e.playWrong=()=>{e.container.querySelector("#audio-wrong").play()},e.muteAll=()=>{e.muteMusic(),e.muteSounds()},e.muteMusic=t=>{e.main.muted=t,t||e.main.play()},e.muteSounds=t=>{e.sounds=e.sounds.map((e=>{const n=e;return n.muted=t,n}))},e.setVolume=t=>{e.sounds=e.sounds.map((e=>{const n=e;return n.volume=t,n})),e.main.volume=t}),e}}(),L=v;function f(n,a=!0){const r=document.createElement("div");r.classList.add("results-container");const o=document.createElement("h3");o.innerText=`Раунд №${n.number+1} завершен!`;const c=n.getProgress(),i=document.createElement("span");i.innerText=`Ваш результат ${c}/10`;const u=document.createElement("span");u.classList.add("results-phrase");let d="result-container";c/t<.3?(d="low-result",u.innerText="Следующий раз будет лучше!"):c/t>.6?(d="high-result",u.innerText="Вы знаток живописи!"):u.innerText="Не плохо!",r.classList.add(d),r.append(u);const m=document.createElement("div");m.classList.add("results-btn-wrp");const l=document.createElement("button");if(l.classList.add("results-home","results-button"),l.dataset.action="goHome",l.innerText="Домой",m.append(l),a){const e=document.createElement("button");e.classList.add("results-next-round","results-button"),e.dataset.action="nextRound",e.dataset.roundNumber=n.number,e.innerText="Далее",m.append(e);const t=document.createElement("button");t.classList.add("results-rounds","results-button"),t.dataset.action="start",t.dataset.type=n.type,t.innerText="К раундам",m.append(t)}else{const e=document.createElement("button");e.classList.add("results-rounds","results-button"),e.dataset.action="removeResultView",e.innerText="Закрыть",m.append(e)}const p=document.createElement("div");p.classList.add("results-questions");const g=[];n.questions.forEach((t=>{const s=new Promise((s=>{const a=document.createElement("div");a.classList.add("results-questions-marker");const r=new Image;r.src=`${e}${t.number}.jpg`,t.isSolved||a.classList.add("results-questions-marker-wrong"),a.dataset.action="info",a.dataset.number=t.number,a.dataset.action="info",a.dataset.roundNumber=n.number,a.dataset.questionNumber=t.number,p.append(a),a.style.backgroundImage=`url(${r.src})`,r.onload=()=>{s()}}));g.push(s)})),r.append(o,i,p,m),r.classList.add("loading"),s.append(r),Promise.all(g).then((()=>r.classList.remove("loading")))}var y=n(845);function T(){const e=document.createElement("div");e.classList.add("home-wrp");const t=document.createElement("h1");t.classList.add("home-header"),t.innerText="Art-Quiz",e.append(t);const n=document.createElement("button");n.classList.add("home-button"),n.innerText="Авторы",n.dataset.action="start",n.dataset.type="author";const a=document.createElement("button");a.classList.add("home-button"),a.innerText="Картины",a.dataset.action="start",a.dataset.type="picture";const r=document.createElement("footer");r.classList.add("home-footer");const o=document.createElement("a");o.classList.add("home-footer-course-link"),o.href="https://rs.school/js/",o.title="Курс «JavaScript/Front-end»";const c=document.createElement("img");c.classList.add("home-footer-course-img"),c.alt="RS school logo",c.src=y,o.append(c);const i=document.createElement("a");i.classList.add("home-footer-git-link"),i.innerText="github: komalapa",i.href="https://github.com/komalapa",r.append(o,i),e.append(n,a,r),s.innerHTML="",s.append(e)}const k=new L({click:"audio/zipclick.flac",wrong:"audio/MetalClick.wav",main:"audio/main.mp3"}),x=new i,q=new u;const S=new i,A=new L,N=new u;function I(e){N.setImages(e),function(){const e=document.createElement("button");e.classList.add("burger-toggle");const t=document.createElement("div");t.classList.add("burger-menu-wrp"),e.addEventListener("click",(()=>{e.classList.toggle("burger-toggle-open"),t.classList.toggle("burger-menu-open")}));const n=document.createElement("div");n.classList.add("burger-menu-mutes");const s=document.createElement("input");s.type="checkbox",s.classList.add("burger-menu-music-mute","burger-menu-checkbox"),s.id="music-mute",s.checked=S.music,A.muteMusic(!s.checked);const r=document.createElement("label");r.classList.add("burger-menu-music-mute-lbl","burger-menu-lbl"),r.innerText="Музыка",r.htmlFor="music-mute",r.dataset.action="settings",r.dataset.prop="music",s.addEventListener("input",(()=>{A.muteMusic(!s.checked),S.toggleMusic()}));const o=document.createElement("input");o.type="checkbox",o.classList.add("burger-menu-music-mute","burger-menu-checkbox"),o.id="sound-mute",o.checked=S.sounds,A.muteSounds(!o.checked);const c=document.createElement("label");c.classList.add("burger-menu-music-mute-lbl","burger-menu-lbl"),c.innerText="Звуки",c.htmlFor="sound-mute",n.append(s,r,o,c),c.dataset.action="settings",c.dataset.prop="sounds",o.addEventListener("input",(()=>{A.muteSounds(!o.checked),S.toggleSounds()}));const i=document.createElement("div");i.classList.add("burger-menu-volume-wrp");const u=document.createElement("input");u.type="range",u.classList.add("burger-menu-volume"),u.id="volume-bar",u.value=100*S.volume;const d=document.createElement("label");d.classList.add("burger-menu-volume-lbl"),d.htmlFor="volume-bar",i.append(d,u),u.addEventListener("input",(()=>{A.setVolume(u.value/100),S.setVolume(u.value/100)}));const m=document.createElement("div");m.classList.add("burger-menu-answers-wrp");const l=document.createElement("h4");l.innerText="Количество вариантов ответа";const p=document.createElement("input");p.type="radio",p.classList.add("burger-menu-answers","burger-menu-radio"),p.value="2",p.name="answers-radio",p.id="answers-radio-2";const g=document.createElement("label");g.classList.add("burger-menu-answers-lbl","burger-menu-lbl"),g.innerText="2",g.htmlFor="answers-radio-2",g.dataset.action="settings",g.dataset.prop="answers",g.dataset.value="2";const h=document.createElement("input");h.type="radio",h.classList.add("burger-menu-answers","burger-menu-radio"),h.value="4",h.id="answers-radio-4",h.name="answers-radio";const b=document.createElement("label");b.classList.add("burger-menu-answers-lbl","burger-menu-lbl"),b.innerText="4",b.htmlFor="answers-radio-4",b.dataset.action="settings",b.dataset.prop="answers",b.dataset.value="4";const w=document.createElement("input");w.type="radio",w.classList.add("burger-menu-answers","burger-menu-radio"),w.value="6",w.id="answers-radio-6",w.name="answers-radio";const E=document.createElement("label");E.classList.add("burger-menu-answers-lbl","burger-menu-lbl"),E.innerText="6",E.htmlFor="answers-radio-6",E.dataset.action="settings",E.dataset.prop="answers",E.dataset.value="6",m.append(l,p,g,h,b,w,E),m.querySelector(`input[name="answers-radio"][value="${S.answers}"]`).checked=!0;const v=document.createElement("div"),L=document.createElement("h4");L.innerText="Игра на время";const f=document.createElement("select");f.classList.add("burger-menu-select");const y=document.createElement("Option");f.dataset.action="settings",f.addEventListener("change",(()=>{S.setTimer("null"===f.options[f.selectedIndex].value?null:f.options[f.selectedIndex].value)})),y.value=null,y.innerText="∞",null===S.timer&&(y.selected=!0),f.append(y);for(let e=5;e<=30;e+=5){const t=document.createElement("Option");t.value=e,S.timer===e&&(t.selected=!0),t.innerText=`${e}сек.`,f.append(t)}v.append(L,f),t.append(n,i,m,v),a.append(e,t)}(),T(),function(){let e=new E("picture");document.addEventListener("click",(n=>{switch(n.target.dataset.action){case"render":{const t=e.rounds[+n.target.dataset.roundNumber];if(k.playClick(),q.stopTimer(),"roundQuestions"===n.target.dataset.object){!function(e){const t=document.createElement("div");t.classList.add("round-wrp"),r(t,!0,e.number);const n=document.createElement("h2");n.classList.add("rounds-header"),n.innerText=`Раунд № ${e.number+1}`,t.append(n);for(let n=0;n<e.questions.length;n+=1){const s=document.createElement("div");s.classList.add("rounds-opener"),s.innerText=n+1,s.dataset.action="render",s.dataset.object="questions",s.dataset.roundNumber=e.number,s.dataset.questionNumber=n,t.append(s)}s.innerHTML="",s.append(t)}(t);break}if("questions"===n.target.dataset.object){"true"===n.target.dataset.clear&&t.questions.forEach((e=>{e.unSolve()})),l(t.questions[+n.target.dataset.questionNumber]);break}break}case"answer":{q.stopTimer();const s=document.getElementsByClassName("question-answers");Array.from(s).forEach((e=>e.classList.add("no-pointer-events")));const a=Math.floor(n.target.dataset.questionNumber/t),r=n.target.dataset.questionNumber%t,o=e.rounds[a].questions[r],i=o.isAnswer(n.target.dataset.index);q[e.type][n.target.dataset.questionNumber]=i,i?k.playClick():k.playWrong(),c(o,i)}break;case"start":k.playClick(),q.stopTimer(),e=n.target.dataset.type?new E(n.target.dataset.type):new E(e.type),o(e);break;case"closeCard":{k.playClick();const s=e.rounds[+n.target.dataset.roundNumber];if(n.target.dataset.number%t==9){f(s),q.saveState();break}l(s.questions[(+n.target.dataset.number+1)%t]);break}case"removeCardView":{const e=document.getElementsByClassName("card-wrp");Array.from(e).forEach((e=>{e.remove()}))}break;case"removeResultView":{const e=document.getElementsByClassName("results-container");Array.from(e).forEach((e=>{e.remove()}))}break;case"nextRound":n.target.dataset.roundNumber>=e.rounds.length-1?o(e):l(e.rounds[+n.target.dataset.roundNumber+1].questions[0]);break;case"info":c(e.rounds[+n.target.dataset.roundNumber].questions[+n.target.dataset.questionNumber%t],!0,!1);break;case"roundResult":f(e.rounds[+n.target.dataset.roundNumber],!1);break;case"goHome":k.playClick(),T(),q.stopTimer();break;case"settings":k.playClick(),q.stopTimer(),"answers"===n.target.dataset.prop&&(x.setAnswers(+n.target.dataset.value),e=new E(e.type),T());break;case"muteAll":k.muteMusic(),k.muteSounds(),document.getElementById("greeting").remove();break;case"closeGreeting":k.main.autoplay=!0,x.music&&k.main.play(),document.getElementById("greeting").remove()}}))}(),console.log('\n  Баллы по форме получилось 233.\nПодробно: https://rolling-scopes-school.github.io/komalapa-JSFE2021Q3/art-quiz/readme.html\n\nКоротко:\n\nАнимации:\n1 - таймер качается "звенит" последние 3 секунды\n2 - Иконка бургер меню css анимация и градиенты\n3 - Лоадер между вопросами\n4 - Подсветка красным карточки после неверного ответа\n\nДоп. функции:\n- фоновая музыка с отключением +2\n- смена цветовой схемы в зависимости от настроек браузера +2\n- можно выбрать 2, 4 или 6 вариантов ответа   +5\n- тень окна результатов зависит от результата +2\n- Фраза зависит от результата раунда +2\n\n213/220\n\n1. **Стартовая страница и навигация +20**\nИзменила:\n  При выборе картины клик по самой картине, а не по варианту ответа как в макете\n  Картины не обрезаются относительно меньших изображений\n  Доступ к настройкам звука не только с главной страницы\n  Т.к. раунды не отличаются друг от друга по смыслу не добавляла картину в фон т.к. это подсказка правильного ответа в одном из вопросов_\n\nНавигация реализована как "хлебные крошки"\n**2. Настройки +40** \n**3. Страница категорий +30**  \n\n- карточка сыгранной категории внешне отличается от карточки категории, которая ещё не игралась\n  Выделяются цветом карточки где набрано больше 30%\n  Если есть хотябы один правильный ответ - есть результат. По клику на него карточка результатов\n\n**4. Страница с вопросами +50**\n- после окончания раунда выводится уведомление об окончании раунда и его результат - количество вопросов, на которые был дан правильный ответ. Есть кнопка "Продолжить" при клике по которой пользователь перенаправляется на страницу категорий данного типа вопросов +10\n   \'Далее\' для непрерывной игры. Можно решать следующий раунд не выходя в меню. Есть кнопка \'К раундам\' и \'Домой\'\n  \n5. Страница с результатами +50\n6. Плавная смена изображений; Появляется через transform:scale +10\n\n**7. Реализована анимация отдельных деталей интерфейса, также анимированы переходы и взаимодействия, чтобы работа с приложением шла плавным и непрерывным потоком +20**  \n1 - таймер качается "звенит" последние 3 секунды\n2 - Иконка бургер меню css анимация и градиенты\n3 - Лоадер между вопросами\n4 - Подсветка красным карточки после неверного ответа\n8. Дополнительный функционал на выбор +20\n- фоновая музыка с отключением +2\n- смена цветовой схемы в зависимости от настроек браузера +2\n- можно выбрать 2, 4 или 6 вариантов ответа   +5\n- тень окна результатов зависит от результата +2\n- Фраза зависит от результата раунда +2\n **+13**\n\n213/220\n\n')}(async function(e){let t=[];const n=await fetch("./images/images.json");return n.ok&&(t=await n.json()),t})().then((e=>{I(e)}))})()})();