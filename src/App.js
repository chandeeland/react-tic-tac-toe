import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe
      </header>
      <Board />
      <hr />
      <Board />

    </div>
  );
}

export default App;
