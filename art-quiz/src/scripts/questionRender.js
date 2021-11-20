// import Question from "./question";
import {
  APP_CONTAINER, IMAGES_PER_ROUND,
} from './consts';
import crumpsRender from './crumpsRender';
import renderDataCard from './dataCardRender';

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

    const mainImage = question.getImage();

    const mainPicture = document.createElement('img');
    mainPicture.classList.add('question-main-picture');

    const pr = new Promise((resolve) => {
      mainImage.onload = () => {
        // mainPicture.style.backgroundImage = `url("${mainImage.src}")`;
        mainPicture.src = mainImage.src;
        // question.setTimer(questionContainer, () => renderDataCard(question, false));
        // console.log(timerEl);
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
    // console.log('author')
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
  questionContainer.classList.add('loading');
  APP_CONTAINER.innerHTML = '';
  APP_CONTAINER.append(questionContainer);
  Promise.all(promises).then(() => {
    question.setTimer(questionContainer, () => renderDataCard(question, false));
    questionContainer.classList.remove('loading');
  });
}
