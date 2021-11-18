import { roundsRender, roundQuestionsRender } from './roundsRender';

import questionRender from './questionRender';
import { IMAGES_PER_ROUND, SOUNDS_PATHS } from './consts';
import RoundList from './roundList';
import Sounds from './sounds';
import renderDataCard from './renderDataCard';
import roundResultsRender from './roundResultsRender';
import homeRender from './homeRender';
// import { roundList } from "..";
const sounds = new Sounds(SOUNDS_PATHS);
// sounds.muteMusic();
// console.log(sounds)
let roundList = new RoundList('picture');

export default function listener() {
  document.addEventListener('click', (evt) => {
    switch (evt.target.dataset.action) {
      case 'render':
        sounds.playClick();
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
        renderDataCard(question, result, () => {});
      }
        break;
      case 'start':
        sounds.playClick();
        if (roundList.type !== evt.target.dataset.type) {
          roundList = new RoundList(evt.target.dataset.type);
        }
        roundsRender(roundList);
        // console.log(roundList);
        break;
      case 'closeCard':
        // console.log(evt.target.dataset, roundList.rounds[+evt.target.dataset.roundNumber]);
        if (evt.target.dataset.number % IMAGES_PER_ROUND === IMAGES_PER_ROUND - 1) {
          roundResultsRender(
            +evt.target.dataset.roundNumber,
            roundList.rounds[+evt.target.dataset.roundNumber].getProgress(),
          );
          // end round, roound results render
          break;
        }
        // console.log('next question:', roundList.rounds[+evt.target.dataset.roundNumber]
        // .questions[(+evt.target.dataset.number + 1) % IMAGES_PER_ROUND]);
        questionRender(roundList.rounds[+evt.target.dataset.roundNumber]
          .questions[(+evt.target.dataset.number + 1) % IMAGES_PER_ROUND]);
        break;
      case 'nextRound':
        // console.log(evt.target.dataset);
        if (evt.target.dataset.roundNumber >= roundList.rounds.length - 1) {
          roundsRender(roundList);
        } else {
          questionRender(roundList.rounds[+evt.target.dataset.roundNumber + 1].questions[0]);
        }
        break;
      case 'goHome':
        homeRender();
        break;
      default:
        // console.error('unknown click action');
    }
  });
}
