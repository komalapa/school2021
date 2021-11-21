export default function crumpsRender(container, home = true, round = false, question = false) {
  // console.log(container, home, round, question);
  const crumps = document.createElement('div');
  crumps.classList.add('crumps');
  if (home !== false) {
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
    crumpsQuestion.dataset.action = 'render';
    crumpsQuestion.dataset.object = 'roundQuestions';
    crumpsQuestion.dataset.roundNumber = round;
    crumps.append(crumpsQuestion);
  }
  container.append(crumps);
}
