import React, { useState } from "react";
import "./App.css";
import Garage from "./components/garage/garage";
import Winners from "./components/winners/winners";
function App() {
  const [showWinners, setShowWinners] = useState<boolean>(false);
  return (
    <div className="App">
      <label>
        {" "}
        Show winners list
        <input
          type="checkbox"
          name="show-winners"
          id="show-winners"
          onInput={(e) => setShowWinners(e.currentTarget.checked)}
        />
      </label>
      <Garage />
      {showWinners && <Winners visible={showWinners} />}
    </div>
  );
}

export default App;
