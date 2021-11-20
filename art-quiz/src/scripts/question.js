import images from './images';

// const IMAGES_PATH = 'https://github.com/komalapa/image-data/raw/master/full/';
import {
  IMAGES_PATH,
  IMAGES_PATH_SMALL,
  IMAGES_PER_ROUND,
  // IMAGES_LIST_PATH,
} from './consts';
import Settings from './settings';
// import questionRender from './questionRender';

const settings = new Settings();
// console.log(images[5].year)

// let images = [];

// async function getImageInfo(path) {
//   const response = await fetch(path);
//   if (response.ok) {
//     console.log(response)
//     images = await response.json();
//     console.log(images)
//   } else {
//     console.error("Ошибка HTTP: " + response.status);
//   }
// }
// getImageInfo(IMAGES_LIST_PATH);

export default class Question {
  constructor(qnumber, type = 'picture', answersNumber = 4) { //  types: picture, author
    // if (!images || images.length === 0) getImageInfo(IMAGES_LIST_PATH);
    let number = qnumber;
    if (number >= images.length) {
      // console.error(`ERROR: no question #${number}, #0 will be used`);
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
    this.isSolved = false;
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
    authors.push(this.author);

    for (let i = 0; i < this.answersNumber - 1; i += 1) {
      const answerIndex = Math.floor(Math.random() * (images.length));
      let answer;
      if (this.type === 'author') {
        answer = `${IMAGES_PATH_SMALL}${images[answerIndex].imageNum}.jpg`;
      } else if (this.type === 'picture') {
        answer = images[answerIndex].author;
      }
      if (authors.indexOf(images[answerIndex].author) >= 0) {
        // console.log('double');
        i -= 1;
      } else {
        // console.log('add answer')
        this.answers.push(answer);
        authors.push(images[answerIndex].author);
      }
    }
    if (this.type === 'author') this.answers.push(this.imagePath);
    if (this.type === 'picture') this.answers.push(this.author);
    this.answers = this.answers.sort(() => (0.5 - Math.random()));
    return this.answers;
  }

  isAnswer(ind) {
    this.isAnswered = true;
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
        if (!this.isAnswered) {
          if (counter < 3) timerEl.classList.add('question-timer-ending');
          if (counter > 0) {
            this.timer = secTimer();
          } else {
            callback();
          }
        }
      }, 1000);
    };
    this.timer = secTimer();
    container.prepend(timerEl);
  }

  denyTimer() {
    clearTimeout(this.timer);
  }
}
