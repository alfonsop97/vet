import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header ownerName={"Alfonso Pimentel"} petName={"Odesza"}/>
      <Counter counters={4} />
      <Home />
    </div>
  );
}

export default App;
