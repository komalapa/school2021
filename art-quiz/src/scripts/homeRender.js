import { APP_CONTAINER } from './consts';

import logo from '../images/rs_school_js.svg';

export default function homeRender() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-wrp');
  const homeHeader = document.createElement('h1');
  homeHeader.classList.add('home-header');
  homeHeader.innerText = 'Art-Quiz';
  homeContainer.append(homeHeader);

  const byAuthorElement = document.createElement('button');
  byAuthorElement.classList.add('home-button');
  byAuthorElement.innerText = 'Авторы';
  byAuthorElement.dataset.action = 'start';
  byAuthorElement.dataset.type = 'author';

  const byPictureElement = document.createElement('button');
  byPictureElement.classList.add('home-button');
  byPictureElement.innerText = 'Картины';
  byPictureElement.dataset.action = 'start';
  byPictureElement.dataset.type = 'picture';

  const networkGameElement = document.createElement('button');
  networkGameElement.classList.add('home-button');
  networkGameElement.innerText = 'Игра с другом';
  networkGameElement.dataset.action = 'network';
  // networkGameElement.dataset.type = 'network';

  const fastGameElement = document.createElement('button');
  fastGameElement.classList.add('home-button');
  fastGameElement.innerText = 'Быстрая игра';
  fastGameElement.dataset.action = 'fast-game';
  // fastGameElement.dataset.type = 'fast';

  const settingsElement = document.createElement('button');
  settingsElement.classList.add('home-button', 'settings-button');
  settingsElement.innerText = 'Настройки';
  settingsElement.dataset.action = 'settings';

  const footerElement = document.createElement('footer');
  footerElement.classList.add('home-footer');
  const courseLinkElement = document.createElement('a');
  courseLinkElement.classList.add('home-footer-course-link');
  courseLinkElement.href = 'https://rs.school/js/';
  courseLinkElement.title = 'Курс «JavaScript/Front-end»';
  const courseLinkImg = document.createElement('img');
  courseLinkImg.classList.add('home-footer-course-img');
  courseLinkImg.alt = 'RS school logo';
  courseLinkImg.src = logo;
  courseLinkElement.append(courseLinkImg);
  const gitLink = document.createElement('a');
  gitLink.classList.add('home-footer-git-link');
  gitLink.innerText = 'github: komalapa';
  gitLink.href = 'https://github.com/komalapa';
  footerElement.append(courseLinkElement, gitLink);

  homeContainer.append(
    byAuthorElement,
    byPictureElement,
    networkGameElement,
    fastGameElement,
    settingsElement,
    footerElement,
  );
  APP_CONTAINER.innerHTML = '';
  APP_CONTAINER.append(homeContainer);
  // console.log('rounds-info',roundsInfo);
}
