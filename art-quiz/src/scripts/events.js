import { roundsRender } from "./roundsRender";
import { roundQuestionsRender } from "./roundsRender";
import questionRender from "./questionRender";
import { IMAGES_PER_ROUND } from "./consts";
import RoundList from "./roundList";
// import { roundList } from "..";

let roundList = new RoundList('picture');

export default function listener(){

  document.addEventListener('click',(evt)=>{
    switch(evt.target.dataset.action){
      case 'render':
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
          console.log(roundList.rounds[Math.floor(evt.target.dataset.questionNumber/IMAGES_PER_ROUND)].questions[evt.target.dataset.questionNumber%IMAGES_PER_ROUND].isAnswer(evt.target.dataset.index))
          // questionRender(roundList.rounds[+evt.target.dataset.roundNumber].questions[+evt.target.dataset.questionNumber])
          break;
        // break;
        case 'answer':
          console.log(roundList.rounds[Math.floor(evt.target.dataset.questionNumber/IMAGES_PER_ROUND)].questions[evt.target.dataset.questionNumber%IMAGES_PER_ROUND].isAnswer(evt.target.dataset.index))
          // questionRender(roundList.rounds[+evt.target.dataset.roundNumber].questions[+evt.target.dataset.questionNumber])
          break;
        // break;
        case 'start':
          roundList = new RoundList(evt.target.dataset.type, );
          roundsRender(roundList)
    }
  })
}