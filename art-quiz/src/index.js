import Question from './scripts/question';
import questionRender from './scripts/questionRender';

//styles
import "./styles/question.scss"

// import image from './images/lazy.png';

// const createImage = (src) => new Promise((res, rej) => {
//   const img = new Image();
//   img.onload = () => res(img);
//   img.onerror = rej;
//   img.src = src;
// });

// async function render() {
//   const subHeader = document.createElement('h2');
//   subHeader.innerHTML = 'This elements was created by js';
//   const myImage = await createImage(image);
//   document.body.appendChild(subHeader);
//   document.body.appendChild(myImage);
// }

// render();

// const q = new Question(1, 'author', 4);
// console.log(q, q.getAnswers().toString(), q.testAnswer(3), q.testAnswer(0))

questionRender(1)