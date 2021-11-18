import {
  APP_MAIN_MENU,
  MAX_TIME,
  MIN_TIME,
  STEP_TIME,
} from './consts';

// import notes from '../images/music.svg';

export default function addMenu() {
  // burger
  const burgerBtn = document.createElement('button');
  burgerBtn.classList.add('burger-toggle');

  const burgerContainer = document.createElement('div');
  burgerContainer.classList.add('burger-menu-wrp');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-toggle-open');
    burgerContainer.classList.toggle('burger-menu-open');
  });

  const mutesContainer = document.createElement('div');
  mutesContainer.classList.add('burger-menu-mutes');
  // music mute
  const musicMute = document.createElement('input');
  musicMute.type = 'checkbox';
  musicMute.classList.add('burger-menu-music-mute', 'burger-menu-checkbox');
  musicMute.id = 'music-mute';
  musicMute.checked = true;

  const musicMuteLbl = document.createElement('label');
  musicMuteLbl.classList.add('burger-menu-music-mute-lbl', 'burger-menu-lbl');
  musicMuteLbl.innerText = 'Музыка';
  musicMuteLbl.htmlFor = 'music-mute';

  // sounds mute

  const soundMute = document.createElement('input');
  soundMute.type = 'checkbox';
  soundMute.classList.add('burger-menu-music-mute', 'burger-menu-checkbox');
  soundMute.id = 'sound-mute';
  soundMute.checked = true;

  const soundMuteLbl = document.createElement('label');
  soundMuteLbl.classList.add('burger-menu-music-mute-lbl', 'burger-menu-lbl');
  soundMuteLbl.innerText = 'Звуки';
  soundMuteLbl.htmlFor = 'sound-mute';
  mutesContainer.append(musicMute, musicMuteLbl, soundMute, soundMuteLbl);

  // volume
  const volumeContainer = document.createElement('div');
  volumeContainer.classList.add('burger-menu-volume-wrp');
  const volumeBar = document.createElement('input');
  volumeBar.type = 'range';
  volumeBar.classList.add('burger-menu-volume');
  volumeBar.id = 'volume-bar';

  const volumeBarLbl = document.createElement('label');
  // volumeBarLbl.style.background = notes;
  volumeBarLbl.classList.add('burger-menu-volume-lbl');
  volumeBarLbl.htmlFor = 'volume-bar';
  volumeContainer.append(volumeBarLbl, volumeBar);

  // answers number
  const answersContainer = document.createElement('div');
  answersContainer.classList.add('burger-menu-answers-wrp');
  const answersHeader = document.createElement('h4');
  answersHeader.innerText = 'Количество вариантов ответа';

  const answers2 = document.createElement('input');
  answers2.type = 'radio';
  answers2.classList.add('burger-menu-answers', 'burger-menu-radio');
  answers2.value = '2';
  answers2.name = 'answers-radio';
  answers2.id = 'answers-radio-2';
  const answers2Lbl = document.createElement('label');
  answers2Lbl.classList.add('burger-menu-answers-lbl', 'burger-menu-lbl');
  answers2Lbl.innerText = '2';
  answers2Lbl.htmlFor = 'answers-radio-2';
  // answers2Lbl.append(answers2);

  const answers4 = document.createElement('input');
  answers4.type = 'radio';
  answers4.checked = true;
  answers4.classList.add('burger-menu-answers', 'burger-menu-radio');
  answers4.value = '4';
  answers4.id = 'answers-radio-4';
  answers4.name = 'answers-radio';
  const answers4Lbl = document.createElement('label');
  answers4Lbl.classList.add('burger-menu-answers-lbl', 'burger-menu-lbl');
  answers4Lbl.innerText = '4';
  answers4Lbl.htmlFor = 'answers-radio-4';
  // answers4Lbl.append(answers4);

  const answers6 = document.createElement('input');
  answers6.type = 'radio';
  answers6.classList.add('burger-menu-answers', 'burger-menu-radio');
  answers6.value = '6';
  answers6.id = 'answers-radio-6';
  answers6.name = 'answers-radio';
  const answers6Lbl = document.createElement('label');
  answers6Lbl.classList.add('burger-menu-answers-lbl', 'burger-menu-lbl');
  answers6Lbl.innerText = '6';
  answers6Lbl.htmlFor = 'answers-radio-6';
  // answers6Lbl.append(answers6);

  answersContainer.append(
    answersHeader,
    answers2,
    answers2Lbl,
    answers4,
    answers4Lbl,
    answers6,
    answers6Lbl,
  );

  // timer
  const timerContainer = document.createElement('div');
  const timerHeader = document.createElement('h4');
  timerHeader.innerText = 'Игра на время';

  const timer = document.createElement('select');
  timer.classList.add('burger-menu-select');

  const noneOption = document.createElement('Option');
  noneOption.selected = true;
  noneOption.value = false;
  noneOption.innerText = '∞';
  timer.append(noneOption);

  for (let i = MIN_TIME; i <= MAX_TIME; i += STEP_TIME) {
    const option = document.createElement('Option');
    option.value = i;
    option.innerText = `${i}сек.`;
    timer.append(option);
  }

  timerContainer.append(timerHeader, timer);

  burgerContainer.append(
    mutesContainer,
    volumeContainer,
    answersContainer,
    timerContainer,
  );

  APP_MAIN_MENU.append(burgerBtn, burgerContainer);
}
