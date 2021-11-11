import images from "./images";

const IMAGES_PATH = 'https://github.com/komalapa/image-data/blob/master/img/';

// console.log(images[5].year)

export default class Question{
  constructor(number, type = 'picture', answersNumber = 4){//types: picture, author
    if (number >= images.length) {
      console.error (`ERROR: no question #${number}, #0 will be used`);
      number = 0;
    }
    this.answersNumber = answersNumber;
    this.number = number;
    this.name = images[number].name;
    this.author = images[number].author;
    this.year = images[number].year;
    this.imageNum = images[number].imageNum;
    this.imagePath = IMAGES_PATH + this.imageNum +'.jpg?raw=true'
    this.answers = [];
    this.type = type;
  }
  getImage(){
    const image = new Image();
    image.src = this.imagePath;

    return image;
  };
  getAuthor(){
    return this.author;
  }
  getAnswers(){
    for (let i=0; i<this.answersNumber-1; i++){
      const answerIndex = Math.floor(Math.random() * (images.length));
      if (answerIndex === this.number){
        i--;
      } else {
        if (this.type === 'picture') this.answers.push(IMAGES_PATH + images[answerIndex].imageNum +'.jpg?raw=true');
        if (this.type === 'author') this.answers.push(images[answerIndex].author);
      }
    }
    if (this.type === 'picture') this.answers.push (this.imagePath);
    if (this.type === 'author') this.answers.push (this.author);
    return this.answers;
  }
  testAnswer(ind){
    if (this.type === 'picture' && this.answers[ind] === this.imagePath) return true;
    if (this.type === 'author' && this.answers[ind] === this.author) return true;
    return false
  }
}