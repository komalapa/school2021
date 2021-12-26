import { FC } from "react";
import { Colors } from "../../types/types";
import { Lights } from "../Lights/Lights";
import "./MainTree.css";
interface MainTreeProps {
  treeUrl: string;
  lights: Colors[];
  onTakeToy: CallableFunction;
}
export const MainTree: FC<MainTreeProps> = (props) => {
  const { treeUrl, lights, onTakeToy } = props;

  function handleDragStart(e) {
    console.log(e);
    e.dataTransfer.setData("toyId", e.target.id);
    e.dataTransfer.setData("toySrc", e.target.src);
    console.log(e.target.getAttribute("data-id"));
    e.dataTransfer.setData("id", e.target.getAttribute("data-id"));
    onTakeToy(+e.target.getAttribute("data-id"), false);
    // e.target.onDragEnd = (e) => {
    //   const target = e.target as HTMLElement;
    //   target.parentNode.removeChild(target);
    // };
  }

  function handleOverDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type !== "drop") {
      return;
    }
    // console.log(e.dataTransfer.getData("toyId"));
    const toyId = e.dataTransfer.getData("toyId");
    const toyImg = document.getElementById(toyId);
    const toy = document.createElement("img");
    console.log(toyId);
    toy.className = toyImg.className;
    toy.id = toyId + "-" + e.dataTransfer.getData("count");
    toy.src = e.dataTransfer.getData("toySrc");
    toy.style.position = "absolute";
    toy.style.top = e.nativeEvent.layerY + "px";
    toy.style.left = e.nativeEvent.layerX - 25 + "px";
    toy.setAttribute("data-id", e.dataTransfer.getData("id"));
    const parent = toyImg.parentNode as HTMLElement;
    console.log("parent", parent.className);
    //if (toyImg.parentNode === e.target) toyImg.parentNode.removeChild(toyImg);
    if (parent.className === "lights") toyImg.parentNode.removeChild(toyImg);

    e.target.appendChild(toy);
    // toy.draggable = false;
    toy.ondragstart = handleDragStart;
    console.log(e);
    if (e.dataTransfer.getData("id"))
      onTakeToy(+e.dataTransfer.getData("id"), true);
  }

  return (
    <div
      className="main-tree__wrp"
      onDrop={handleOverDrop}
      onDragOver={handleOverDrop}
    >
      <img className="main-tree" src={treeUrl} alt="main tree" />
      <Lights colors={lights}></Lights>
    </div>
  );
};
