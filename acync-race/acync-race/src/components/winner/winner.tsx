import React, { FC } from "react";
import { WinnerAlertProps } from "../../types/props";

import "./winner.css";

const WinnerAlert: FC<WinnerAlertProps> = ({ car, time }) => (
  <div className="winner-alert" style={{ borderColor: car.color }}>
    <span className="winner-alert-header">WIN!</span>
    <span className="winner-alert-name">{car.name}</span>
    <span className="winner-alert-time">{time.toFixed(0)}</span>
  </div>
);

export default WinnerAlert;
