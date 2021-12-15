// import React from 'react';
// import logo from './logo.svg';
import "./App.css";
// import { Hello } from './components/hello'
import { Toy } from "./types/toys/toy";
import { data } from "./data";
import { ToyCard } from "./components/ToyCard/ToyCard";
import { ToysContainter } from "./components/ToysContainer/ToysContainer";
import { SpanInput } from "./components/SpanInput/SpanInput";

const toysArray: Array<Toy> = data.map((item) => new Toy(item));

function App() {
  const testToy: Toy = new Toy(data[0]);
  return (
    <div className="App">
      <ToysContainter toys={toysArray} />

      <SpanInput max={10} min={0} step={1} />
    </div>
  );
}

export default App;
