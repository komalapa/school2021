import {
  IMAGES_PATH,
  IMAGES_PATH_SMALL,
  IMAGES_PER_ROUND,
} from './constants';
import Settings from './settings';
import State from './state';

const state = new State();
const settings = new Settings();

export default class Question {
  constructor(qnumber, type = 'picture', answersNumber = 4) { //  types: picture, author
    const images = state.getImages();
    let number = qnumber;
    if (number >= images.length) {
      number = 0;
    }
    this.answersNumber = answersNumber;
    this.number = number;
    this.roundNumber = Math.floor(number / IMAGES_PER_ROUND);
    this.name = images[number].name;
    this.author = images[number].author;
    this.year = images[number].year;
    this.imageNum = images[number].imageNum;
    this.imagePath = `${IMAGES_PATH}${this.imageNum}full.jpg`;
    this.answers = [];
    this.type = type;
    this.genAnswers = this.genAnswers.bind(this);
    this.genAnswers();
    this.isSolved = Boolean(state[type][number]);
    this.timeOut = null;
  }

  getImage() {
    const image = new Image();
    image.src = this.imagePath;

    return image;
  }

  getAuthor() {
    return this.author;
  }

  getAnswers() {
    return this.answers;
  }

  genAnswers() {
    const authors = [];
    authors.push(this.author.toLowerCase());

    for (let i = 0; i < this.answersNumber - 1; i += 1) {
      const images = state.getImages();
      const answerIndex = Math.floor(Math.random() * (images.length));
      let answer;
      if (this.type === 'author') {
        answer = `${IMAGES_PATH_SMALL}${images[answerIndex].imageNum}.jpg`;
      } else if (this.type === 'picture') {
        answer = images[answerIndex].author;
      }
      if (authors.indexOf(images[answerIndex].author.toLowerCase()) >= 0) {
        i -= 1;
      } else {
        this.answers.push(answer);
        authors.push(images[answerIndex].author.toLowerCase());
      }
    }
    if (this.type === 'author') this.answers.push(this.imagePath);
    if (this.type === 'picture') this.answers.push(this.author);
    this.answers = this.answers.sort(() => (0.5 - Math.random()));
    return this.answers;
  }

  isAnswer(ind) {
    this.denyTimer();
    if (this.type === 'author' && this.answers[ind] === this.imagePath) {
      this.isSolved = true;
      return true;
    }
    if (this.type === 'picture' && this.answers[ind] === this.author) {
      this.isSolved = true;
      return true;
    }
    return false;
  }

  unSolve() {
    this.isSolved = false;
    this.isAnswered = false;
    state[this.type][this.number] = null;
  }

  setTimer(container, callback) {
    this.isAnswered = false;
    let counter = +settings.timer;
    const timerEl = document.createElement('div');
    timerEl.classList.add('question-timer');
    timerEl.innerHTML = counter;
    const secTimer = () => {
      setTimeout(() => {
        counter -= 1;
        timerEl.innerText = counter;
        if (state.timer !== null) {
          if (counter < 3) timerEl.classList.add('question-timer-ending');
          if (counter > 0) {
            state.timer = secTimer();
          } else {
            callback();
          }
        }
      }, 1000);
    };
    state.timer = secTimer();
    container.prepend(timerEl);
  }

  denyTimer() {
    clearTimeout(this.timer);
    clearTimeout(state.timer);
    state.timer = null;
    this.isAnswered = true;
  }
}
