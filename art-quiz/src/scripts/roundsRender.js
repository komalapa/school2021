import Round from "./round";
import questionRender from "./questionRender";
import { IMAGES_PER_ROUND, IMAGES_AMOUNT, APP_CONTAINER, roundsInfo } from "./consts";

export default function roundsRender(type){
  const roundsContainer = document.createElement('div');
  roundsContainer.classList.add('rounds-wrp');
  const roundsHeader = document.createElement('h2');
  roundsHeader.classList.add('rounds-header');
  if (type === 'picture'){
    roundsHeader.innerText = "Найди автора"  
  } else if (type === 'author'){
    roundsHeader.innerText = "Найди картину"  
  }  else {
    roundsHeader.innerText = "Смешаный режим"
  }
  roundsContainer.append(roundsHeader)
  if (roundsInfo.length == 0) roundsInfo = new Array(Math.floor(IMAGES_AMOUNT/IMAGES_PER_ROUND));
  for (let i=0; i<roundsInfo.length; i++){
    console.log('create round', i)
    roundsInfo[i] = new Round(i, type);
    const roundOpener = document.createElement('div');
    roundOpener.classList.add('rounds-opener');
    roundOpener.innerText = i;
    roundOpener.addEventListener('click', () => roundQuestionsRender(rounds[i], i, type)) ;
    roundsContainer.append(roundOpener);
  }
  APP_CONTAINER.innerHTML = '';
  APP_CONTAINER.append(roundsContainer);
  console.log('rounds-info',roundsInfo);
}

function roundQuestionsRender(round, number, type){
  const roundContainer = document.createElement('div');
  roundContainer.classList.add('round-wrp');
  const roundHeader = document.createElement('h2');
  roundHeader.classList.add('rounds-header');
    roundHeader.innerText = `Раунд № ${number}`;  
  roundContainer.append(roundHeader)
  for (let i=0; i<round.state.length; i++){
    console.log('create question', i)
    const questionOpener = document.createElement('div');
    questionOpener.classList.add('rounds-opener');
    questionOpener.innerText = i;
    questionOpener.addEventListener('click', () =>  questionRender(number*IMAGES_PER_ROUND+i, type))
    roundContainer.append(questionOpener);
  }
  APP_CONTAINER.innerHTML = '';
  APP_CONTAINER.append(roundContainer);
  console.log(roundsInfo)
}