import React, { FC, useEffect, useState } from "react";
import { ReactComponent as CarIcon } from "../../assets/iconmonstr-car-1.svg";
import EditCarForm from "../editCarForm/editCarForm";

import "./carView.css";

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

  return (
    <div className="car">
      <CarIcon className="car-icon" style={{ fill: color }} />
      <span className="car-name">{name}</span>
      <label className="car-edit-button">
        <input
          type="checkbox"
          checked={inEdit}
          onChange={() => setInEdit(!inEdit)}
        />
      </label>
      {inEdit && (
        <EditCarForm {...{ id, name, color }} onCarInput={handleEdit} />
      )}
    </div>
  );
};

export default CarView;
