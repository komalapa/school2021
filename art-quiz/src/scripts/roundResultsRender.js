import { APP_CONTAINER } from './consts';

export default function roundResultsRender(roundNumber, result) {
  const resultContainer = document.createElement('div');
  resultContainer.classList.add('results-container');

  const resultRoundName = document.createElement('h3');
  resultRoundName.innerText = `Раунд №${roundNumber} завершен!`;

  const resultEl = document.createElement('span');
  resultEl.innerText = `Ваш результат ${result * 100}%`;

  let classResult = 'result-container';
  if (result < 0.3) classResult = 'low-result';
  if (result > 0.6) classResult = 'high-result';

  resultContainer.classList.add(classResult);

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('results-home', 'results-button');
  homeBtn.dataset.action = 'goHome';
  homeBtn.innerText = 'Домой';

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('results-next-round', 'results-button');
  nextBtn.dataset.action = 'nextRound';
  nextBtn.dataset.roundNumber = roundNumber;
  nextBtn.innerText = 'Далее';

  resultContainer.append(resultRoundName, resultEl, homeBtn, nextBtn);
  APP_CONTAINER.append(resultContainer);
}
