import React, { FC } from "react";
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

  function handleDragStart(e: DragEvent) {
    const data = e.dataTransfer as DataTransfer;
    const target = e.target as HTMLImageElement;
    data.setData("toyId", target.id);
    data.setData("toySrc", target.src);
    const imgId = target.getAttribute("data-id") as string;
    data.setData("id", imgId);
    onTakeToy(+imgId, false);
  }

  function handleOverDrop(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type !== "drop") {
      return;
    }
    const data = e.dataTransfer as DataTransfer;
    const toyId = data.getData("toyId");
    const toyImg = document.getElementById(toyId) as HTMLElement;
    const toy = document.createElement("img");
    toy.className = toyImg.className;
    toy.id = toyId + "-" + data.getData("count");
    toy.src = data.getData("toySrc");
    toy.style.position = "absolute";

    toy.style.top = e.nativeEvent.offsetY + "px"; //need layerX
    toy.style.left = e.nativeEvent.offsetX - 25 + "px";
    toy.setAttribute("data-id", data.getData("id"));
    const parent = toyImg.parentNode as HTMLElement;
    if (parent.className === "toys-area") parent.removeChild(toyImg);
    const newParent = document.querySelector(".toys-area") as HTMLElement;
    newParent.appendChild(toy);
    toy.ondragstart = handleDragStart;
    toy.ondrop = handleDenyOverDrop;
    toy.ondragover = handleDenyOverDrop;
    if (data.getData("id")) onTakeToy(+data.getData("id"), true);
  }

  function handleDenyOverDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type !== "drop") {
      return;
    }
    console.log("drop");
    const data = e.dataTransfer as DataTransfer;
    const toyId = data.getData("toyId");
    const toyImg = document.getElementById(toyId) as HTMLElement;
    const parent = toyImg.parentNode as HTMLElement;
    if (parent.className === "toys-area") parent.removeChild(toyImg);
  }

  return (
    <div className="main-tree__wrp">
      <map
        name="map"
        onDrop={handleOverDrop}
        onDragOver={handleOverDrop}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <area
          target="_self"
          alt="map"
          title="map"
          href=""
          coords="247,2,5,568,9,662,472,668,494,581"
          shape="poly"
          className="toys-area"
        />
      </map>
      <img className="main-tree" src={treeUrl} alt="main tree" useMap="#map" />
      <Lights colors={lights}></Lights>
    </div>
  );
};
