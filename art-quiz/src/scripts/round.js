import { IMAGES_PER_ROUND } from './consts';
import Question from './question';

export default class Round {
  constructor(number, type = 'picture', numberOfAnswers = 4) {
    // console.log('new round', number)
    this.questions = [];
    for (let i = (number) * IMAGES_PER_ROUND; i < (number + 1) * IMAGES_PER_ROUND; i += 1) {
      // console.log(i)
      this.questions.push(new Question(i, type, numberOfAnswers));
    }
    this.type = type;
    this.numberOfAnswers = numberOfAnswers;
    this.number = number;
  }

  getProgress() {
    let counter = 0;
    this.questions.forEach((q) => { if (q.isSolved) counter += 1; });
    return counter / IMAGES_PER_ROUND;
  }
}