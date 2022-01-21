import React, { FC, FormEvent, useState } from "react";
import { addCar, updateCar } from "../../api/garage";

import getBrand from "../../data/brands-cars";
import getModel from "../../data/models-cars";
import { Car } from "../../types/api-response";

import "./winner.css";

interface WinnerAlertProps {
  car: Car;
  time: number;
}

const WinnerAlert: FC<WinnerAlertProps> = ({ car, time }) => (
  <div className="winner-alert" style={{ borderColor: car.color }}>
    <span className="winner-alert-header">WIN!</span>
    <span className="winner-alert-name">{car.name}</span>
    <span className="winner-alert-time">{time.toFixed(0)}</span>
  </div>
);

export default WinnerAlert;
