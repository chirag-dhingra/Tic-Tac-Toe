import React, { useState } from 'react';
import Block from './components/Block';
import "./App.css";


function App() {
  const [state, setState] = useState(Array(9).fill(null)); 
  return (
    <div className="board">
      <div className="row">
        <Block value="X" />
        <Block value="X" />
        <Block value="X" />
      </div>
      <div className="row">
      <Block value="X" />
      <Block value="X" />
      <Block value="X" />
      </div>
      <div className="row">
      <Block value="X" />
      <Block value="X" />
      <Block value="X" />
      </div>

    </div>

  );
}

export default App