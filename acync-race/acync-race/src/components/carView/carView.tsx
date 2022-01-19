import React, { FC, useEffect, useState } from "react";
import { ReactComponent as CarIcon } from "../../assets/iconmonstr-car-1.svg";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import EditCarForm from "../editCarForm/editCarForm";

import "./carView.css";
import { deleteCar } from "../../api/garage";

interface CarViewProps {
  id: number;
  name: string;
  color: string;
  onCarInput: CallableFunction;
}

const CarView: FC<CarViewProps> = ({ id, name, color, onCarInput }) => {
  const [inEdit, setInEdit] = useState<boolean>(false);

  function handleEdit(isEdited: boolean) {
    onCarInput(isEdited);
    setInEdit(false);
  }

  function handleDelete() {
    deleteCar(id).then(() => onCarInput(true));
  }

  return (
    <div className="car">
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
        <button className="car-delete-button">
          <DeleteIcon
            className="car-delete-button-icon"
            onClick={handleDelete}
          />
        </button>
      </div>
    </div>
  );
};

export default CarView;
