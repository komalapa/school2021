import React, { FC, useContext, useEffect, useState } from "react";
import { ReactComponent as CarIcon } from "../../assets/iconmonstr-car-1.svg";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import EditCarForm from "../editCarForm/editCarForm";

import "./carView.css";
import { deleteCar } from "../../api/garage";
import { carDrive, carStart, carStop } from "../../api/car";
import { WinnersContext } from "../../context/winners-context";
import { getWinner } from "../../api/winners";

interface CarViewProps {
  id: number;
  name: string;
  color: string;
  onCarInput: CallableFunction;
  isRaceStarted: boolean;
  onFinish: CallableFunction;
}
let GOAL = 90;
const CarView: FC<CarViewProps> = ({
  id,
  name,
  color,
  onCarInput,
  isRaceStarted,
  onFinish
}) => {
  const [inEdit, setInEdit] = useState<boolean>(false);
  const [inDrive, setInDrive] = useState<boolean>(false);
  const [wins, setWins] = useState<number>(0);
  const left = React.useRef(0);
  const time = React.useRef(0);

  const carEl = document.querySelector<HTMLElement>(`#car-${id}`);

  let animation = 0;

  const driveAnimation = (time: number): void => {
    if (carEl) {
      if (left.current < GOAL) {
        left.current = left.current + 1000 / time;
        carEl.style.left = `${left.current}%`;
        animation = requestAnimationFrame(driveAnimation);
      } else {
        onFinish({ id, name, color }, time);
      }
    }
  };

  function handleEdit(isEdited: boolean) {
    onCarInput(isEdited);
    setInEdit(false);
  }

  function handleDelete() {
    deleteCar(id).then(() => onCarInput(true));
  }

  function handleStart() {
    GOAL = 90;
    carStart(id).then((data) => {
      time.current = data.distance / data.velocity;
      if (time.current > 0) {
        driveAnimation(time.current);
        setInDrive(true);
      }
      carDrive(id)
        .then(() => {})
        .catch(() => {
          cancelAnimationFrame(animation);
        });
    });
  }

  function handleStop() {
    GOAL = 0;
    setInDrive(false);
    carStop(id);
    cancelAnimationFrame(animation);
    left.current = 0;
    if (carEl) {
      carEl.style.left = `${left.current}%`;
      cancelAnimationFrame(animation);
    }
  }
  useEffect(() => {
    // getWinner(id).then(winner => setWins(winner.wins)).catch(() => setWins(0))
    if (isRaceStarted) {
      handleStart();
    } else handleStop();
  }, [isRaceStarted]);

  useEffect(() => () => cancelAnimationFrame(animation), []);

  // const { winners } = useContext(WinnersContext);
  // console.log(winners);

  return (
    <div className="track">
      <div
        className="car"
        id={`car-${id}`}
        style={{ left: `${left.current}%` }}
      >
        <CarIcon className="car-icon" style={{ fill: color }} />
        <span className="car-name">{name}</span>
        <div className="car-controls">
          <div className="car-edit-button">
            <label>
              {inEdit ? (
                <CloseIcon className="car-edit-button-icon" />
              ) : (
                <EditIcon className="car-edit-button-icon" />
              )}
              <input
                type="checkbox"
                checked={inEdit}
                onChange={() => setInEdit(!inEdit)}
                className="car-edit-checkbox"
              />
            </label>
            {inEdit && (
              <EditCarForm
                className="car-edit-form"
                {...{ id, name, color }}
                onCarInput={handleEdit}
              />
            )}
          </div>
          {inDrive ? (
            <span className="car-stop-button-icon" onClick={handleStop} />
          ) : (
            <span className="car-start-button-icon" onClick={handleStart} />
          )}
          <button className="car-delete-button" onClick={handleDelete}>
            <DeleteIcon className="car-delete-button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarView;
