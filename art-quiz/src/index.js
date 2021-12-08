import listener from './scripts/events';
import homeRender from './scripts/homeRender';
import addMenu from './scripts/menuRender';
import log from './scripts/consoleDoc';

import './styles/main.scss';
import './styles/menu.scss';
import './styles/home.scss';
import './styles/vars.scss';
import './styles/question.scss';
import './styles/rounds.scss';
import './styles/dataCard.scss';
import './styles/roundResults.scss';
import './styles/crumps.scss';
import './styles/greeting.scss';
import { IMAGES_LIST_PATH } from './scripts/consts';
import State from './scripts/state';

// let images = [];
const state = new State();
async function getImageInfo(path) {
  let images = [];
  const response = await fetch(path);
  if (response.ok) {
    images = await response.json();
    return images;
  }
  return [];
}

function startGame(imgs) {
  state.setImages(imgs);
  addMenu();
  homeRender();
  listener();
  log();
}

getImageInfo(IMAGES_LIST_PATH)
  .then((imgs) => {
    startGame(imgs);
  });
