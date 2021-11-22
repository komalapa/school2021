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
// import Question from './question';
// import { roundList } from "..";
const sounds = new Sounds(SOUNDS_PATHS);
const settings = new Settings();
const state = new State();
// sounds.muteMusic();
// console.log(sounds)
let roundList = new RoundList('picture');

export default function listener() {
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
          questionRender(roundList.rounds[+evt.target.dataset.roundNumber]
            .questions[+evt.target.dataset.questionNumber]);
          break;
        }
        break;
      case 'answer': {
        const roundNumber = Math.floor(evt.target.dataset.questionNumber / IMAGES_PER_ROUND);
        const questionNumber = evt.target.dataset.questionNumber % IMAGES_PER_ROUND;
        const question = roundList.rounds[roundNumber].questions[questionNumber];
        const result = (question.isAnswer(evt.target.dataset.index));
        if (result) {
          sounds.playClick();
        } else sounds.playWrong();
        renderDataCard(question, result);
      }
        break;
      case 'start':
        sounds.playClick();
        state.stopTimer();
        if (roundList.type !== evt.target.dataset.type) {
          roundList = new RoundList(evt.target.dataset.type);
        }
        roundsRender(roundList);
        break;
      case 'closeCard':
        if (evt.target.dataset.number % IMAGES_PER_ROUND === IMAGES_PER_ROUND - 1) {
          roundResultsRender(roundList.rounds[+evt.target.dataset.roundNumber]);
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
        // console.log(evt.target.dataset);
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
        // console.error('unknown click action');
    }
  });
}
