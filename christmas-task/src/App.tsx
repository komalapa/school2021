// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Hello } from './components/hello'
import { Toy } from './types/toys/toy'
import { data } from './data'
import { ToyCard } from './components/ToyCard/ToyCard';
function App() {
  const testToy:Toy = new Toy(data[0]);
  return (
    <div className="App">
      <ToyCard toy={testToy}/>
    </div>
  );
}

export default App;
