import { roundsRender } from "./roundsRender";
import { roundQuestionsRender } from "./roundsRender";
import questionRender from "./questionRender";
import { IMAGES_PER_ROUND, SOUNDS_PATHS } from "./consts";
import RoundList from "./roundList";
import Sounds from "./sounds";
// import { roundList } from "..";
const sounds = new Sounds(SOUNDS_PATHS);
let roundList = new RoundList('picture');

export default function listener(){

  document.addEventListener('click',(evt)=>{
    switch(evt.target.dataset.action){
      case 'render':
        sounds.playClick();
        if (evt.target.dataset.object == 'roundQuestions'){
          roundQuestionsRender(roundList.rounds[+evt.target.dataset.roundNumber])
          break;
        }
        if (evt.target.dataset.object == 'questions'){
          console.log(roundList.rounds[+evt.target.dataset.roundNumber].questions[+evt.target.dataset.questionNumber])
          questionRender(roundList.rounds[+evt.target.dataset.roundNumber].questions[+evt.target.dataset.questionNumber])
          break;
        }
      case 'answer':
          const result = (roundList.rounds[Math.floor(evt.target.dataset.questionNumber/IMAGES_PER_ROUND)].questions[evt.target.dataset.questionNumber%IMAGES_PER_ROUND].isAnswer(evt.target.dataset.index))
          result ? sounds.playClick() : sounds.playWrong();
          // questionRender(roundList.rounds[+evt.target.dataset.roundNumber].questions[+evt.target.dataset.questionNumber])
          break;
        // break;
        case 'start':
          sounds.playClick();
          roundList = new RoundList(evt.target.dataset.type, );
          roundsRender(roundList)
    }
  })
}