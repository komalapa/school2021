import React, { useState } from 'react';
import './App.css';
import Garage from './components/garage/garage';
import Winners from './components/winners/winners';

function App() {
  const [showWinners, setShowWinners] = useState<boolean>(false);
  return (
    <div className="App">
      <header>
        <h1>AsyncRace</h1>
        <label htmlFor="show-winners" className="winners-btn">
          {showWinners ? 'Garage' : 'Winners'}

          <input
            type="checkbox"
            name="show-winners"
            id="show-winners"
            onInput={(e) => setShowWinners(e.currentTarget.checked)}
          />
        </label>
      </header>

      <Garage hidden={!showWinners} />
      {showWinners && <Winners />}
    </div>
  );
}

export default App;
