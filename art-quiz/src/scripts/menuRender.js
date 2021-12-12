import {
  APP_MAIN_MENU,
  MAX_TIME,
  MIN_TIME,
  STEP_TIME,
} from './constants';
import Settings from './settings';
import Sounds from './sounds';

const settings = new Settings();
const sounds = new Sounds();
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
  musicMute.checked = settings.music;
  sounds.muteMusic(!musicMute.checked); // sync sounds with visible state

  const musicMuteLbl = document.createElement('label');
  musicMuteLbl.classList.add('burger-menu-music-mute-lbl', 'burger-menu-lbl');
  musicMuteLbl.innerText = 'Музыка';
  musicMuteLbl.htmlFor = 'music-mute';
  musicMuteLbl.dataset.action = 'settings';
  musicMuteLbl.dataset.prop = 'music';
  musicMute.addEventListener('input', () => {
    sounds.muteMusic(!musicMute.checked);
    settings.toggleMusic();
  });

  // sounds mute

  const soundMute = document.createElement('input');
  soundMute.type = 'checkbox';
  soundMute.classList.add('burger-menu-music-mute', 'burger-menu-checkbox');
  soundMute.id = 'sound-mute';
  soundMute.checked = settings.sounds;
  sounds.muteSounds(!soundMute.checked);// sync sounds with visible state

  const soundMuteLbl = document.createElement('label');
  soundMuteLbl.classList.add('burger-menu-music-mute-lbl', 'burger-menu-lbl');
  soundMuteLbl.innerText = 'Звуки';
  soundMuteLbl.htmlFor = 'sound-mute';
  mutesContainer.append(musicMute, musicMuteLbl, soundMute, soundMuteLbl);
  soundMuteLbl.dataset.action = 'settings';
  soundMuteLbl.dataset.prop = 'sounds';
  soundMute.addEventListener('input', () => {
    sounds.muteSounds(!soundMute.checked);
    settings.toggleSounds();
  });

  // volume
  const volumeContainer = document.createElement('div');
  volumeContainer.classList.add('burger-menu-volume-wrp');
  const volumeBar = document.createElement('input');
  volumeBar.type = 'range';
  volumeBar.classList.add('burger-menu-volume');
  volumeBar.id = 'volume-bar';
  volumeBar.value = settings.volume * 100;

  const volumeBarLbl = document.createElement('label');
  volumeBarLbl.classList.add('burger-menu-volume-lbl');
  volumeBarLbl.htmlFor = 'volume-bar';
  volumeContainer.append(volumeBarLbl, volumeBar);

  volumeBar.addEventListener('input', () => {
    sounds.setVolume(volumeBar.value / 100);
    settings.setVolume(volumeBar.value / 100);
  });

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
  answers2Lbl.dataset.action = 'settings';
  answers2Lbl.dataset.prop = 'answers';
  answers2Lbl.dataset.value = '2';

  const answers4 = document.createElement('input');
  answers4.type = 'radio';
  answers4.classList.add('burger-menu-answers', 'burger-menu-radio');
  answers4.value = '4';
  answers4.id = 'answers-radio-4';
  answers4.name = 'answers-radio';
  const answers4Lbl = document.createElement('label');
  answers4Lbl.classList.add('burger-menu-answers-lbl', 'burger-menu-lbl');
  answers4Lbl.innerText = '4';
  answers4Lbl.htmlFor = 'answers-radio-4';
  answers4Lbl.dataset.action = 'settings';
  answers4Lbl.dataset.prop = 'answers';
  answers4Lbl.dataset.value = '4';

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
  answers6Lbl.dataset.action = 'settings';
  answers6Lbl.dataset.prop = 'answers';
  answers6Lbl.dataset.value = '6';

  answersContainer.append(
    answersHeader,
    answers2,
    answers2Lbl,
    answers4,
    answers4Lbl,
    answers6,
    answers6Lbl,
  );
  answersContainer.querySelector(`input[name="answers-radio"][value="${settings.answers}"]`).checked = true;
  // timer
  const timerContainer = document.createElement('div');
  const timerHeader = document.createElement('h4');
  timerHeader.innerText = 'Игра на время';

  const timer = document.createElement('select');
  timer.classList.add('burger-menu-select');

  const noneOption = document.createElement('Option');
  timer.dataset.action = 'settings';
  timer.addEventListener('change', () => {
    settings.setTimer(timer.options[timer.selectedIndex].value === 'null' ? null : timer.options[timer.selectedIndex].value);
  });
  noneOption.value = null;
  noneOption.innerText = '∞';
  if (settings.timer === null) noneOption.selected = true;
  timer.append(noneOption);

  for (let i = MIN_TIME; i <= MAX_TIME; i += STEP_TIME) {
    const option = document.createElement('Option');
    option.value = i;
    if (settings.timer === i) option.selected = true;

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
