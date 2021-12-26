import { FC } from "react";
import { Colors } from "../../types/types";
import { MainTree } from "../MainTree/MainTree";

import { ReactComponent as SnowIcon } from "../../assets/svg/snow.svg";

import "./MainTreeContainer.css";
interface MainTreeContainerProps {
  backgroundUrl: string;
  treeUrl: string;
  lights: Colors[];
  isSnow: boolean;
}
export const MainTreeContainer: FC<MainTreeContainerProps> = (props) => {
  const { backgroundUrl, treeUrl, lights, isSnow } = props;
  // console.log(backgroundUrl);
  const flakesCount = 30;
  const snow = [];
  for (let i = 0; i < flakesCount; i++) {
    snow.push(
      <SnowIcon
        style={{
          left: Math.random() * 100 + "%",
          animationDelay: Math.random() * 5 + "s",
        }}
        className="snowflake"
      />
    );
  }
  // const snow = Array(30).fill(

  // );
  // snow.forEach((el) => {
  //   console.log(el);
  //   el.
  // });
  console.log(snow);
  return (
    <div
      className="main-tree__container"
      style={{ backgroundImage: `url(${backgroundUrl}` }}
    >
      {isSnow && <div className="snowflakes-container">{snow}</div>}
      <MainTree treeUrl={treeUrl} lights={lights}></MainTree>
    </div>
  );
};
