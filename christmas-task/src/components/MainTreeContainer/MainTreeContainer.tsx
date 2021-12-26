import { FC } from "react";
import { Colors } from "../../types/types";
import { MainTree } from "../MainTree/MainTree";
import "./MainTreeContainer.css";
interface MainTreeContainerProps {
  backgroundUrl: string;
  treeUrl: string;
  lights: Colors[];
}
export const MainTreeContainer: FC<MainTreeContainerProps> = (props) => {
  const { backgroundUrl, treeUrl, lights } = props;
  // console.log(backgroundUrl);
  return (
    <div
      className="main-tree__container"
      style={{ backgroundImage: `url(${backgroundUrl}` }}
    >
      <MainTree treeUrl={treeUrl} lights={lights}></MainTree>
    </div>
  );
};
