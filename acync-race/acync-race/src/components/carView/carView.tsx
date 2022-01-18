import React, { FC } from "react";
import { ReactComponent as CarIcon } from "../../assets/iconmonstr-car-1.svg";

import "./carView.css";

interface CarViewProps {
  id: number;
  name: string;
  color: string;
}

const CarView: FC<CarViewProps> = ({ id, name, color }) => {
  return (
    <div className="car">
      <CarIcon className="car-icon" style={{ fill: color }} />
      <span className="car-name">{name}</span>
    </div>
  );
};

export default CarView;
