import { roundsRender, roundQuestionsRender } from './roundsRender';

import questionRender from './questionRender';
import { IMAGES_PER_ROUND, SOUNDS_PATHS } from './constants';
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

const renderObjects = { questions: 'questions', roundQuestions: 'roundQuestions' };

const GameActions = {
  render: 'render',
  answer: 'answer',
  start: 'start',
  closeCard: 'closeCard',
  removeCardView: 'removeCardView',
  removeResultView: 'removeResultView',
  nextRound: 'nextRound',
  info: 'info',
  roundResult: 'roundResult',
  goHome: 'goHome',
  settings: 'settings',
  muteAll: 'muteAll',
  closeGreeting: 'closeGreeting',
};

export default function listener() {
  let roundList = new RoundList('picture');
  document.addEventListener('click', (evt) => {
    switch (evt.target.dataset.action) {
      case GameActions.render: {
        const round = roundList.rounds[+evt.target.dataset.roundNumber];
        sounds.playClick();
        state.stopTimer();
        if (evt.target.dataset.object === renderObjects.roundQuestions) {
          roundQuestionsRender(round);
          break;
        }
        if (evt.target.dataset.object === renderObjects.questions) {
          if (evt.target.dataset.clear === 'true') {
            round.questions.forEach((q) => {
              q.unSolve();
            });
          }
          questionRender(round.questions[+evt.target.dataset.questionNumber]);
          break;
        }
        break;
      }
      case GameActions.answer: {
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
      case GameActions.start:
        sounds.playClick();
        state.stopTimer();
        if (!evt.target.dataset.type) {
          roundList = new RoundList(roundList.type);
        } else {
          roundList = new RoundList(evt.target.dataset.type);
        }
        roundsRender(roundList);
        break;
      case GameActions.closeCard: {
        sounds.playClick();
        const round = roundList.rounds[+evt.target.dataset.roundNumber];

        if (evt.target.dataset.number % IMAGES_PER_ROUND === IMAGES_PER_ROUND - 1) {
          roundResultsRender(round);
          state.saveState();
          break;
        }
        questionRender(round.questions[(+evt.target.dataset.number + 1) % IMAGES_PER_ROUND]);
        break;
      }
      case GameActions.removeCardView:
        {
          const card = document.getElementsByClassName('card-wrp');
          Array.from(card).forEach((c) => {
            c.remove();
          });
        }
        break;
      case GameActions.removeResultView:
        {
          const card = document.getElementsByClassName('results-container');
          Array.from(card).forEach((c) => {
            c.remove();
          });
        }
        break;
      case GameActions.nextRound:
        if (evt.target.dataset.roundNumber >= roundList.rounds.length - 1) {
          roundsRender(roundList);
        } else {
          questionRender(roundList.rounds[+evt.target.dataset.roundNumber + 1].questions[0]);
        }
        break;
      case GameActions.info:
        {
          const question = roundList
            .rounds[+evt.target.dataset.roundNumber]
            .questions[+evt.target.dataset.questionNumber % IMAGES_PER_ROUND];

          renderDataCard(question, true, false);
        }
        break;
      case GameActions.roundResult:
        roundResultsRender(roundList.rounds[+evt.target.dataset.roundNumber], false);
        break;
      case GameActions.goHome:
        sounds.playClick();
        homeRender();
        state.stopTimer();
        break;
      case GameActions.settings:
        sounds.playClick();
        state.stopTimer();
        if (evt.target.dataset.prop === 'answers') {
          settings.setAnswers(+evt.target.dataset.value);
          roundList = new RoundList(roundList.type);
          homeRender();
        }
        break;
      case GameActions.muteAll:
        sounds.muteMusic();
        sounds.muteSounds();
        document.getElementById('greeting').remove();
        break;
      case GameActions.closeGreeting:
        sounds.main.autoplay = true;
        if (settings.music) sounds.main.play();
        document.getElementById('greeting').remove();
        break;
      default:
        break;
    }
  });
}
