import { roundsRender, roundQuestionsRender } from './roundsRender';

import questionRender from './questionRender';
import { IMAGES_PER_ROUND, SOUNDS_PATHS } from './consts';
import RoundList from './roundList';
import Sounds from './sounds';
import renderDataCard from './dataCardRender';
import roundResultsRender from './roundResultsRender';
import homeRender from './homeRender';
import Settings from './settings';
import State from './state';

const sounds = new Sounds(SOUNDS_PATHS);
const settings = new Settings();
const state = new State();

export default function listener() {
  let roundList = new RoundList('picture');
  document.addEventListener('click', (evt) => {
    switch (evt.target.dataset.action) {
      case 'render':
        sounds.playClick();
        state.stopTimer();
        if (evt.target.dataset.object === 'roundQuestions') {
          roundQuestionsRender(roundList.rounds[+evt.target.dataset.roundNumber]);
          break;
        }
        if (evt.target.dataset.object === 'questions') {
          if (evt.target.dataset.clear === 'true') {
            roundList.rounds[+evt.target.dataset.roundNumber].questions.forEach((q) => {
              q.unSolve();
            });
          }
          questionRender(roundList.rounds[+evt.target.dataset.roundNumber]
            .questions[+evt.target.dataset.questionNumber]);
          break;
        }
        break;
      case 'answer': {
        state.stopTimer();
        const answers = document.getElementsByClassName('question-answers');
        Array.from(answers).forEach((answ) => answ.classList.add('no-pointer-events'));
        const roundNumber = Math.floor(evt.target.dataset.questionNumber / IMAGES_PER_ROUND);
        const questionNumber = evt.target.dataset.questionNumber % IMAGES_PER_ROUND;
        const question = roundList.rounds[roundNumber].questions[questionNumber];
        const result = (question.isAnswer(evt.target.dataset.index));
        state[roundList.type][evt.target.dataset.questionNumber] = result;
        if (result) {
          sounds.playClick();
        } else sounds.playWrong();
        renderDataCard(question, result);
      }
        break;
      case 'start':
        sounds.playClick();
        state.stopTimer();
        if (!evt.target.dataset.type) {
          roundList = new RoundList(roundList.type);
        } else {
          roundList = new RoundList(evt.target.dataset.type);
        }
        roundsRender(roundList);
        break;
      case 'closeCard':
        if (evt.target.dataset.number % IMAGES_PER_ROUND === IMAGES_PER_ROUND - 1) {
          roundResultsRender(roundList.rounds[+evt.target.dataset.roundNumber]);
          state.saveState();
          break;
        }
        questionRender(roundList.rounds[+evt.target.dataset.roundNumber]
          .questions[(+evt.target.dataset.number + 1) % IMAGES_PER_ROUND]);
        break;
      case 'removeCard':
        {
          const card = document.getElementsByClassName('card-wrp');
          Array.from(card).forEach((c) => {
            c.remove();
          });
        }
        break;
      case 'removeResult':
        {
          const card = document.getElementsByClassName('results-container');
          Array.from(card).forEach((c) => {
            c.remove();
          });
        }
        break;
      case 'nextRound':
        if (evt.target.dataset.roundNumber >= roundList.rounds.length - 1) {
          roundsRender(roundList);
        } else {
          questionRender(roundList.rounds[+evt.target.dataset.roundNumber + 1].questions[0]);
        }
        break;
      case 'info':
        {
          const question = roundList
            .rounds[+evt.target.dataset.roundNumber]
            .questions[+evt.target.dataset.questionNumber % IMAGES_PER_ROUND];

          renderDataCard(question, true, false);
        }
        break;
      case 'roundResult':
        roundResultsRender(roundList.rounds[+evt.target.dataset.roundNumber], false);
        break;
      case 'goHome':
        homeRender();
        state.stopTimer();
        break;
      case 'settings':
        sounds.playClick();
        state.stopTimer();
        if (evt.target.dataset.prop === 'answers') {
          settings.setAnswers(+evt.target.dataset.value);
          roundList = new RoundList(roundList.type);
          homeRender();
        }
        break;
      case 'muteAll':
        sounds.muteMusic();
        sounds.muteSounds();
        document.getElementById('greeting').remove();
        break;
      case 'closeGreeting':
        sounds.main.autoplay = true;
        if (settings.music) sounds.main.play();
        document.getElementById('greeting').remove();
        break;
      default:
        break;
    }
  });
}
