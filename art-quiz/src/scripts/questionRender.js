import Question from "./question";

export default function questionRender(index, type = 'picture', answersNumber = 4) {
  const question = new Question(index, type, answersNumber);

  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-wrp');
  const questionText = document.createElement('span');
  questionText.classList.add('question-text');
  questionContainer.append(questionText)

  const answersContainer = document.createElement('div');
  answersContainer.classList.add('question-answers-wrp');

  if (type === 'picture') {
    console.log('picture')
    questionText.innerText = ('Выберите автора картины:');

    const mainImage = question.getImage();
    
    const mainPicture = document.createElement('img');
    mainPicture.classList.add('question-main-picture');

    
    mainImage.onload = function () {
      // mainPicture.style.backgroundImage = `url("${mainImage.src}")`;
      mainPicture.src = mainImage.src;

    };

    const answersArr = question.getAnswers();
    answersArr.forEach((answer, ind) => {
      const answerElement = document.createElement('div');
      answerElement.classList.add('question-answers', 'question-answers-author');
      answerElement.innerText = answer;
      answersContainer.append(answerElement)
      questionContainer.append(mainPicture, answersContainer);
      answerElement.addEventListener('click', ()=>console.log(question.isAnswer(ind)))
    })
  } else if (type === 'author') {
    console.log('author')
    questionText.innerText = (`${question.author} написал:`);

    const mainPicture = document.createElement('div');
    mainPicture.classList.add('question-main-picture');

    
    const answersArr = question.getAnswers();
    answersArr.forEach((answer) => {
      const answerElement = document.createElement('div');
      
      

      
      answerElement.classList.add('question-answers', 'question-answers-picture');
      answerElement.innerText = answer;
      answersContainer.append(answerElement)
      questionContainer.append(mainPicture, answersContainer);
    })
  }



  document.getElementById('app').append(questionContainer);


}