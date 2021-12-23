import { FC, useEffect, useState } from "react";
import { Toy } from "../../types/toys/toy";

interface TreeAppProps {
  favorites: Toy[];
}
const TreeApp: FC<TreeAppProps> = (props) => {
  const { favorites } = props;
  const [toys, setToys] = useState([]);
  useEffect(() => {
    setToys(favorites);
  },[favorites]);
  
  return <>{toys.toString()}</>;
};
export default TreeApp;
