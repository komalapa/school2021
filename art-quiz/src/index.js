import Question from './scripts/question';
import questionRender from './scripts/questionRender';
import RoundList from './scripts/roundList';
import { roundsRender } from './scripts/roundsRender';
import listener from './scripts/events';
// import roundsRender from './scripts/roundsRender';
//styles
import "./styles/vars.scss"
import "./styles/question.scss"
import "./styles/rounds.scss"


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

// const q = new Question(1, 'picture', 4);
// console.log(q, q.getAnswers().toString(), q.testAnswer(3), q.testAnswer(0))

// questionRender(q)
// roundsRender('author')

// const round = new RoundList('picture',4)
// console.log(round)

export const roundList = new RoundList('picture');
roundsRender(roundList)

listener()