import { APP_CONTAINER, IMAGES_PER_ROUND } from './consts';
import crumpsRender from './crumpsRender';

export function roundsRender(roundList) {
  const roundsContainer = document.createElement('div');
  roundsContainer.classList.add('rounds-wrp');

  crumpsRender(roundsContainer);

  const roundsHeader = document.createElement('h2');
  roundsHeader.classList.add('rounds-header');
  if (roundList.type === 'picture') {
    roundsHeader.innerText = 'Найди автора';
  } else if (roundList.type === 'author') {
    roundsHeader.innerText = 'Найди картину';
  } else {
    roundsHeader.innerText = 'Смешаный режим';
  }
  roundsContainer.append(roundsHeader);
  for (let i = 0; i < roundList.rounds.length; i += 1) {
    const roundOpener = document.createElement('div');
    roundOpener.classList.add('rounds-opener');
    if (roundList.type === 'picture') roundOpener.classList.add('rounds-opener-picture');

    const roundNumber = document.createElement('span');
    roundNumber.innerText = i + 1;

    roundOpener.append(roundNumber);
    const progress = roundList.rounds[i].getProgress();

    if (progress > 0) {
      const result = document.createElement('span');
      result.innerText = `${progress}/${IMAGES_PER_ROUND}`;
      result.classList.add('rounds-opener-result');
      result.dataset.roundNumber = i;
      result.dataset.action = 'roundResult';
      roundOpener.append(result);
    }

    roundOpener.dataset.action = 'render';

    // for round autostart
    roundOpener.dataset.object = 'questions';
    roundOpener.dataset.roundNumber = i;
    roundOpener.dataset.questionNumber = roundList.rounds[i].questions[0].number % IMAGES_PER_ROUND;
    roundOpener.dataset.clear = true;
    if (progress / IMAGES_PER_ROUND > 0.3) roundOpener.classList.add('rounds-opener-solved');

    roundsContainer.append(roundOpener);
  }
  APP_CONTAINER.innerHTML = '';
  APP_CONTAINER.append(roundsContainer);
}

export function roundQuestionsRender(round) {
  const roundContainer = document.createElement('div');
  roundContainer.classList.add('round-wrp');

  crumpsRender(roundContainer, true, round.number);

  const roundHeader = document.createElement('h2');
  roundHeader.classList.add('rounds-header');
  roundHeader.innerText = `Раунд № ${round.number + 1}`;
  roundContainer.append(roundHeader);
  for (let i = 0; i < round.questions.length; i += 1) {
    const questionOpener = document.createElement('div');
    questionOpener.classList.add('rounds-opener');
    questionOpener.innerText = i + 1;
    questionOpener.dataset.action = 'render';
    questionOpener.dataset.object = 'questions';
    questionOpener.dataset.roundNumber = round.number;
    questionOpener.dataset.questionNumber = i;

    roundContainer.append(questionOpener);
  }
  APP_CONTAINER.innerHTML = '';
  APP_CONTAINER.append(roundContainer);
}
