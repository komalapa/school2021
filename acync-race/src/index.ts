import image from "./images/lazy.png";
import { addCar, deleteCar, getCar, getCars } from "./api/garage";
import { carDrive, carStart } from "./api/car";

const createImage = (src: string) =>
  new Promise<HTMLImageElement>((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });

async function render() {
  const subHeader = document.createElement("h2");
  subHeader.innerHTML = "This elements was created by js";
  const myImage = await createImage(image);
  document.body.appendChild(subHeader);
  document.body.appendChild(myImage);
  // console.log(await getCars(1));
  // console.log(await getCar(1));
  // console.log(await addCar("lada", "#ffffff"));
  // console.log(await getCars(1));
  // console.log(await deleteCar(6));
  console.log(await carStart(2));
  // console.log(
  carDrive(2)
    .then(() => console.log("OK"))
    .catch((e) => console.log("Ooops", e));
  // console.log(await getCars(1));
}

render();
