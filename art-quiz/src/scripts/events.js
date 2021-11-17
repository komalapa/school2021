import { roundsRender, roundQuestionsRender } from './roundsRender';

import questionRender from './questionRender';
import { IMAGES_PER_ROUND, SOUNDS_PATHS } from './consts';
import RoundList from './roundList';
import Sounds from './sounds';
import renderDataCard from './renderDataCard';
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
        roundList = new RoundList(evt.target.dataset.type);
        roundsRender(roundList);
        break;
      default:
        // console.error('unknown click action');
    }
  });
}
