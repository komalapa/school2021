// import Round from "./round";
// import questionRender from "./questionRender";
import { APP_CONTAINER } from './consts';
import crumpsRender from './crumpsRender';

export function roundsRender(roundList) {
  const roundsContainer = document.createElement('div');
  roundsContainer.classList.add('rounds-wrp');

  // const crumps = document.createElement('div');
  // crumps.classList.add('crumps');
  // const crumpsHome = document.createElement('span');
  // crumpsHome.innerText = 'ArtQuiz';
  // crumpsHome.dataset.action = 'goHome';
  // crumps.append(crumpsHome);
  // roundsContainer.append(crumps);

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

    const progress = roundList.rounds[i].getProgress();
    const result = document.createElement('span');
    result.innerText = `${Math.round(progress * 100)}%`;
    result.classList.add('rounds-opener-result');
    result.dataset.roundNumber = i;
    if (progress > 0) result.dataset.action = 'roundResult';

    roundOpener.append(roundNumber, result);
    roundOpener.dataset.action = 'render';
    roundOpener.dataset.object = 'roundQuestions';
    roundOpener.dataset.roundNumber = i;

    if (progress < 0.3) roundOpener.classList.add('rounds-opener-not-solved');

    roundsContainer.append(roundOpener);
  }
  APP_CONTAINER.innerHTML = '';
  APP_CONTAINER.append(roundsContainer);
  // console.log('rounds-info',roundsInfo);
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
    // console.log('create question', i);
    const questionOpener = document.createElement('div');
    questionOpener.classList.add('rounds-opener');
    questionOpener.innerText = i + 1;
    // questionOpener.addEventListener('click', () =>  questionRender(round.questions[i]))
    questionOpener.dataset.action = 'render';
    questionOpener.dataset.object = 'questions';
    questionOpener.dataset.roundNumber = round.number;
    questionOpener.dataset.questionNumber = i;

    roundContainer.append(questionOpener);
  }
  APP_CONTAINER.innerHTML = '';
  APP_CONTAINER.append(roundContainer);
}
