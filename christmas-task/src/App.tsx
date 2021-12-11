// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Hello } from './components/hello'
import { Toy } from './types/toys/toy'
import { data } from './data'
import { ToyCard } from './components/ToyCard/ToyCard';
import { ToysContainter } from './components/ToysContainer/ToysContainer'

const toysArray : Array<Toy> = data.map(item => new Toy(item));

function App() {
  const testToy:Toy = new Toy(data[0]);
  return (
    <div className="App">
      <ToysContainter toys={toysArray}/>
    </div>
  );
}

export default App;
