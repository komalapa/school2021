import { IMAGES_PER_ROUND } from "./consts";
import Question from "./question";
export default class Round {
  constructor(number, type='picture', numberOfAnswers){
    // console.log('new round', number)
    this.questions = [];
    for (let i = (number)*IMAGES_PER_ROUND; i < (number+1)*IMAGES_PER_ROUND; i++){
      // console.log(i)
      this.questions.push(new Question(i, type, numberOfAnswers));
    }
    this.type = type;
    this.numberOfAnswers = numberOfAnswers;
    this.number = number;
  }
  getProgress(){
    let counter = 0;
    this.questions.map(q => {if (q.isSolved) counter++});
    return counter/IMAGES_PER_ROUND;
  }
}