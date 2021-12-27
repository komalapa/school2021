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
    e.dataTransfer.setData("toyId", e.target.id);
    e.dataTransfer.setData("toySrc", e.target.src);
    e.dataTransfer.setData("id", e.target.getAttribute("data-id"));
    onTakeToy(+e.target.getAttribute("data-id"), false);
  }

  function handleOverDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type !== "drop") {
      return;
    }
    const toyId = e.dataTransfer.getData("toyId");
    const toyImg = document.getElementById(toyId);
    const toy = document.createElement("img");
    toy.className = toyImg.className;
    toy.id = toyId + "-" + e.dataTransfer.getData("count");
    toy.src = e.dataTransfer.getData("toySrc");
    toy.style.position = "absolute";
    toy.style.top = e.nativeEvent.layerY + "px";
    toy.style.left = e.nativeEvent.layerX - 25 + "px";
    toy.setAttribute("data-id", e.dataTransfer.getData("id"));
    const parent = toyImg.parentNode as HTMLElement;
    if (parent.className === "toys-area") toyImg.parentNode.removeChild(toyImg);
    document.querySelector(".toys-area").appendChild(toy);
    toy.ondragstart = handleDragStart;
    if (e.dataTransfer.getData("id"))
      onTakeToy(+e.dataTransfer.getData("id"), true);
  }

  return (
    <div className="main-tree__wrp">
      <map name="map" onDrop={handleOverDrop} onDragOver={handleOverDrop}>
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
