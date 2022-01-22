import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Garage from "./components/garage/garage";
import { WinnersContext } from "./context/winners-context";
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
      <Winners visible={showWinners} />
    </div>
  );
}

export default App;
