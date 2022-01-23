import React, { FC, useEffect, useState } from 'react';
import { ReactComponent as CarIcon } from '../../assets/iconmonstr-car-1.svg';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import EditCarForm from '../editCarForm/editCarForm';

import './carView.css';
import { deleteCar } from '../../api/garage';
import { carDrive, carStart, carStop } from '../../api/car';
import { deleteWinner } from '../../api/winners';
import { CarViewProps } from '../../types/props';

let GOAL = 90;
// eslint-disable-next-line react/function-component-definition
const CarView: FC<CarViewProps> = ({
  id,
  name,
  color,
  onCarInput,
  isRaceStarted,
  onFinish,
}) => {
  const [inEdit, setInEdit] = useState<boolean>(false);
  const [inDrive, setInDrive] = useState<boolean>(false);
  const left = React.useRef(0);
  const time = React.useRef(0);

  const carEl = document.querySelector<HTMLElement>(`#car-${id}`);

  let animation = 0;

  const driveAnimation = (animationTime: number): void => {
    if (carEl) {
      if (left.current < GOAL) {
        left.current += 1000 / animationTime;
        carEl.style.left = `${left.current}%`;
        animation = requestAnimationFrame(driveAnimation);
      } else if (isRaceStarted) onFinish({ id, name, color }, animationTime);
    }
  };

  function handleEdit(isEdited: boolean): void {
    onCarInput(isEdited);
    setInEdit(false);
  }

  function handleDelete(): void {
    deleteCar(id).then(() => onCarInput(true));
    deleteWinner(id);
  }

  function handleStart(): void {
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

  function handleStop(): void {
    if (!isRaceStarted) GOAL = 0;
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
    if (isRaceStarted) {
      handleStart();
    } else handleStop();
  }, [isRaceStarted]);

  useEffect(() => () => cancelAnimationFrame(animation), [animation]);

  return (
    <div className="track">
      <div className="car-controls">
        <div className="car-edit-button">
          <label htmlFor="car-edit-checkbox">
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
              id="car-edit-checkbox"
            />
          </label>
          {inEdit && (
            <EditCarForm
              className="car-edit-form"
              {...{ id, name, color }}
              onCarInput={() => handleEdit(inEdit)} // TODO check after refactor
            />
          )}
        </div>
        {!isRaceStarted
          && (inDrive ? (
            // eslint-disable-next-line
            <span //TODO replace with btn
              className="car-stop-button-icon"
              onClick={() => handleStop()}
            />
          ) : (
            // eslint-disable-next-line
            <span //TODO replace with btn
              className="car-start-button-icon"
              onClick={() => handleStart()}
            />
          ))}
        <button
          type="button"
          className="car-delete-button"
          onClick={() => handleDelete()}
        >
          <DeleteIcon className="car-delete-button-icon" />
        </button>
      </div>
      <div
        className="car"
        id={`car-${id}`}
        style={{ left: `${left.current}%` }}
      >
        <CarIcon className="car-icon" style={{ fill: color }} />
        <span className="car-name">{name}</span>
      </div>
    </div>
  );
};

export default CarView;
