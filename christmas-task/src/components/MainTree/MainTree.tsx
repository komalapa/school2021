import { FC } from "react";
import { Colors } from "../../types/types";
import { Lights } from "../Lights/Lights";
import "./MainTree.css";
interface MainTreeProps {
  treeUrl: string;
  lights: Colors[];
}
export const MainTree: FC<MainTreeProps> = (props) => {
  const { treeUrl, lights } = props;
  return (
    <div className="main-tree__wrp">
      <img className="main-tree" src={treeUrl} alt="main tree" />
      <Lights colors={lights}></Lights>
    </div>
  );
};
