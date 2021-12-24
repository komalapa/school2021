import { FC } from "react";
import "./MainTreeContainer.css";
interface MainTreeContainerProps {
  backgroundUrl: string;
  treeUrl: string;
}
export const MainTreeContainer: FC<MainTreeContainerProps> = (props) => {
  const { backgroundUrl } = props;
  console.log(backgroundUrl);
  return (
    <div
      className="main-tree__container"
      style={{ backgroundImage: `url(${backgroundUrl}` }}
    ></div>
  );
};
