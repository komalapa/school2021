// import Question from "./question";
import {
  APP_CONTAINER, IMAGES_PER_ROUND,
} from './consts';
import crumpsRender from './crumpsRender';
import renderDataCard from './dataCardRender';
import Settings from './settings';
import State from './state';

const settings = new Settings();
const state = new State();
export default function questionRender(question) {
  // console.log(question);
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-wrp');
  crumpsRender(questionContainer, true, question.roundNumber, question.number % IMAGES_PER_ROUND);
  const questionText = document.createElement('span');
  questionText.classList.add('question-text');
  questionContainer.append(questionText);

  const answersContainer = document.createElement('div');
  answersContainer.classList.add('question-answers-wrp');
  // let timerEl;
  // console.log('render', question);
  const promises = [];
  if (question.type === 'picture') {
    // console.log('picture')
    questionText.innerText = ('Выберите автора картины:');

    // const mainImage = question.getImage();

    const mainPicture = document.createElement('img');
    mainPicture.classList.add('question-main-picture');
    mainPicture.src = question.imagePath;
    const pr = new Promise((resolve) => {
      mainPicture.onload = () => {
        resolve();
      };
    });
    promises.push(pr);
    const answersArr = question.getAnswers();
    answersArr.forEach((answer, ind) => {
      const answerElement = document.createElement('div');
      answerElement.classList.add('question-answers', 'question-answers-author');
      answerElement.innerText = answer;
      answersContainer.append(answerElement);
      questionContainer.append(mainPicture, answersContainer);
      // answerElement.addEventListener('click', ()=>console.log(question, question.isAnswer(ind)))
      answerElement.dataset.action = 'answer';
      answerElement.dataset.questionNumber = question.number;
      answerElement.dataset.index = ind;
    });
  } else if (question.type === 'author') {
    answersContainer.classList.add('question-answers-pictures');
    questionText.innerText = (`${question.author} написал:`);

    // const mainPicture = document.createElement('div');
    // mainPicture.classList.add('question-main-picture');

    const answersArr = question.getAnswers();
    answersArr.forEach((answer, ind) => {
      const answerElement = document.createElement('img');
      answerElement.src = answer;
      answerElement.classList.add('question-answers', 'question-answers-picture');
      const pr = new Promise((resolve) => {
        answerElement.onload = () => {
          answersContainer.append(answerElement);
          // answerElement.addEventListener('click', ()=>console.log(question.isAnswer(ind)))
          answerElement.dataset.action = 'answer';
          answerElement.dataset.questionNumber = question.number;
          answerElement.dataset.index = ind;
          resolve();
        };
      });
      promises.push(pr);
    });
  }
  questionContainer.append(answersContainer);

  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('result-dots-wrp');
  let i = question.roundNumber * IMAGES_PER_ROUND;
  for (i; i < (question.roundNumber + 1) * IMAGES_PER_ROUND; i += 1) {
    const dot = document.createElement('div');
    // console.log(i, Boolean(state[question.type][i]));
    dot.classList.add((state[question.type][i] ? 'result-dots-good' : 'result-dots-bad'));
    resultsContainer.append(dot);
  }
  questionContainer.append(resultsContainer);
  questionContainer.classList.add('loading');
  APP_CONTAINER.innerHTML = '';
  APP_CONTAINER.append(questionContainer);
  Promise.all(promises).then(() => {
    // console.log('promise');
    if (settings.timer !== null) {
      question.setTimer(questionContainer, () => renderDataCard(question, false));
    }
    questionContainer.classList.remove('loading');
  });
}
