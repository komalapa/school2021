import React, {
  FC,
  FormEventHandler,
  MouseEventHandler,
  useState
} from "react";
// import "./carView.css";

interface CarViewProps {
  id: number;
  name: string;
  color: string;
}

const EditCarForm: FC<CarViewProps> = ({ id, name, color }) => {
  const [curColor, setCurColor] = useState<string>(color || "#333333");
  const [curName, setCurName] = useState<string>(name || "Lada Niva");
  function handleSubmit() {
    console.log(curColor, curName, id);
  }

  function handleReset() {
    setCurColor(color || "#333333");
    setCurName(name || "Lada Niva");
  }
  console.log(curColor, curName, id);
  return (
    <div className="edit-car">
      <input
        type="text"
        name="car-name"
        id="edit-car-name"
        defaultValue={curName}
      />
      <input
        type="color"
        name="car-color"
        id="edit-car-color"
        defaultValue={curColor}
      />

      <button type="submit" onClick={handleSubmit}>
        Save
      </button>
      <button type="reset" onClick={handleReset}>
        Cancel
      </button>
    </div>
  );
};

export default EditCarForm;
