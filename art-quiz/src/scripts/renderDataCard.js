import { APP_CONTAINER } from "./consts";

export default function renderDataCard(question, isSolved = true){//, callback){
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-wrp');
  if (!isSolved) cardContainer.classList.add('card-wrp-wrong');
  
  const image = document.createElement('img');
  image.src = question.imagePath;
  image.classList.add('card-img')
  
  const name = document.createElement('span');
  name.classList.add('card-name');
  name.innerText = question.name;

  const year = document.createElement('span');
  year.classList.add('card-year');
  year.innerText = question.year;

  const author = document.createElement('span');
  author.classList.add('card-author');
  author.innerText = question.author;
 
  const okBtn =  document.createElement('button');
  okBtn.classList.add('card-button');
  okBtn.innerText = 'Далее';
  okBtn.dataset.action = 'closeCard';
  okBtn.dataset.number = question.number;
  
  image.onload = function(){
    cardContainer.append(image, year, name, author, okBtn);
    APP_CONTAINER.append(cardContainer);
  }

  console.log(question.imagePath);
}