import { FC, useEffect, useState } from "react";
import { Toy } from "../../types/toys/toy";

interface TreeAppProps {
  favorites: Toy[];
}
const TreeApp: FC<TreeAppProps> = (props) => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    setToys(favorites);
  });
  const { favorites } = props;
  return <></>;
};
export default TreeApp;
