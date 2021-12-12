import {
  APP_CONTAINER,
  IMAGES_PATH_SMALL,
  IMAGES_PER_ROUND,
} from './constants';

export default function roundResultsRender(round, isAfterRound = true) {
  const resultContainer = document.createElement('div');
  resultContainer.classList.add('results-container');

  const resultRoundName = document.createElement('h3');
  resultRoundName.innerText = `Раунд №${round.number + 1} завершен!`;

  const result = round.getProgress();

  const resultEl = document.createElement('span');
  resultEl.innerText = `Ваш результат ${result}/${IMAGES_PER_ROUND}`;

  const resultPhrase = document.createElement('span');
  resultPhrase.classList.add('results-phrase');
  let classResult = 'result-container';
  if (result / IMAGES_PER_ROUND < 0.3) {
    classResult = 'low-result';
    resultPhrase.innerText = 'Следующий раз будет лучше!';
  } else if (result / IMAGES_PER_ROUND > 0.6) {
    classResult = 'high-result';
    resultPhrase.innerText = 'Вы знаток живописи!';
  } else {
    resultPhrase.innerText = 'Не плохо!';
  }

  resultContainer.classList.add(classResult);
  resultContainer.append(resultPhrase);

  const resultsBtnContainer = document.createElement('div');
  resultsBtnContainer.classList.add('results-btn-wrp');
  const homeBtn = document.createElement('button');
  homeBtn.classList.add('results-home', 'results-button');
  homeBtn.dataset.action = 'goHome';
  homeBtn.innerText = 'Домой';
  resultsBtnContainer.append(homeBtn);

  if (isAfterRound) {
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('results-next-round', 'results-button');
    nextBtn.dataset.action = 'nextRound';
    nextBtn.dataset.roundNumber = round.number;
    nextBtn.innerText = 'Далее';
    resultsBtnContainer.append(nextBtn);

    const roundsBtn = document.createElement('button');
    roundsBtn.classList.add('results-rounds', 'results-button');
    roundsBtn.dataset.action = 'start';
    roundsBtn.dataset.type = round.type;
    roundsBtn.innerText = 'К раундам';
    resultsBtnContainer.append(roundsBtn);
  } else {
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('results-rounds', 'results-button');
    closeBtn.dataset.action = 'removeResultView';
    closeBtn.innerText = 'Закрыть';
    resultsBtnContainer.append(closeBtn);
  }

  const questionMarkers = document.createElement('div');
  questionMarkers.classList.add('results-questions');
  const promises = [];
  round.questions.forEach((q) => {
    const promise = new Promise((resolve) => {
      const marker = document.createElement('div');
      marker.classList.add('results-questions-marker');
      const img = new Image();
      img.src = `${IMAGES_PATH_SMALL}${q.number}.jpg`;
      if (!q.isSolved) marker.classList.add('results-questions-marker-wrong');
      marker.dataset.action = 'info';
      marker.dataset.number = q.number;
      marker.dataset.action = 'info';
      marker.dataset.roundNumber = round.number;
      marker.dataset.questionNumber = q.number;
      questionMarkers.append(marker);
      marker.style.backgroundImage = `url(${img.src})`;
      img.onload = () => {
        resolve();
      };
    });
    promises.push(promise);
  });
  resultContainer.append(resultRoundName, resultEl, questionMarkers, resultsBtnContainer);
  resultContainer.classList.add('loading');
  APP_CONTAINER.append(resultContainer);
  Promise.all(promises).then(() => resultContainer.classList.remove('loading'));
}
