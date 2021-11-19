import { IMAGES_PER_ROUND, IMAGES_AMOUNT } from './consts';
import Round from './round';
import Settings from './settings';

const settings = new Settings();

export default class RoundList {
  constructor(type = 'picture', numberOfAnswers = settings.answers) {
    // console.log('new round list', number)
    this.rounds = [];
    for (let i = 0; i < Math.floor(IMAGES_AMOUNT / IMAGES_PER_ROUND); i += 1) {
      this.rounds.push(new Round(i, type, numberOfAnswers));
    }
    this.type = type;
    this.numberOfAnswers = numberOfAnswers;
  }
}
