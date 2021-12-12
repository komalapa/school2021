export default function crumpsRender(container, isHome = true, round = false, question = false) {
  const crumps = document.createElement('div');
  crumps.classList.add('crumps');
  if (isHome) {
    const crumpsHome = document.createElement('span');
    crumpsHome.innerText = 'ArtQuiz';
    crumpsHome.classList.add('crumps-logo');
    crumpsHome.dataset.action = 'goHome';
    crumps.append(crumpsHome);
  }
  if (round !== false) {
    const crumpsRound = document.createElement('span');
    crumpsRound.innerText = `Раунд №${round + 1}`;
    crumpsRound.dataset.action = 'start';
    crumps.append(crumpsRound);
  }
  if (question !== false) {
    const crumpsQuestion = document.createElement('span');
    crumpsQuestion.innerText = `Вопрос №${question + 1}`;
    crumps.append(crumpsQuestion);
  }
  container.append(crumps);
}
