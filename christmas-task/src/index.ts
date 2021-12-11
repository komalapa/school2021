import image from './images/lazy.png';
import data from './data'
import { Toy } from './toys/toy';
// import { Shapes } from './types/types';


const createImage = (src: string) => new Promise<HTMLImageElement>((res, rej) => {
  const img = new Image();
  img.onload = () => res(img);
  img.onerror = rej;
  img.src = src;
});

async function render() {
  const subHeader = document.createElement('h2');
  subHeader.innerHTML = 'This elements was created by js';
  const myImage = await createImage(image);
  document.body.appendChild(subHeader);
  document.body.appendChild(myImage);
}
// const set = new Set();
// data.forEach(e => set.add(e.size))
// console.log(set)

// console.log(Shapes['шар'])
render();

// enum Colors {
//   RED = "RED COLOR",
//   BLUE = "BLUE COLOR",
//   GREEN = "GREEN COLOR"
// }
// console.log(Object.keys(Colors).filter(key => Colors[key] === "RED COLOR"))
 console.log (new Toy(data[0]))