// import Round from "./round";
// import questionRender from "./questionRender";
import { APP_CONTAINER } from './consts';

export function roundsRender(roundList) {
  const roundsContainer = document.createElement('div');
  roundsContainer.classList.add('rounds-wrp');
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
    roundOpener.innerText = i + 1;
    roundOpener.dataset.action = 'render';
    roundOpener.dataset.object = 'roundQuestions';
    roundOpener.dataset.roundNumber = i;
    roundsContainer.append(roundOpener);
  }
  APP_CONTAINER.innerHTML = '';
  APP_CONTAINER.append(roundsContainer);
  // console.log('rounds-info',roundsInfo);
}

export function roundQuestionsRender(round) {
  const roundContainer = document.createElement('div');
  roundContainer.classList.add('round-wrp');
  const roundHeader = document.createElement('h2');
  roundHeader.classList.add('rounds-header');
  roundHeader.innerText = `Раунд № ${round.number}`;
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
