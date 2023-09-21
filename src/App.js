import './App.css';
import React, {useState} from 'react';
import Daily from './Daily.js';
import Weekly from './Weekly.js';
import Monthly from './Monthly.js';


function App() {

  const [view, setView] = useState("D");

  const handleClickD = (e) => {
    setView("D");
  }

  const handleClickW = (e) => {
    setView("W");
  }

  const handleClickM = (e) => {
    setView("M");
  }

  return (
    <div>
      <div className="title">
        <ul className="project">
          <h1>Planner Project</h1>
          <h2>By Jason Lin</h2>
        </ul>
        <ul className="view">
          <button onClick={handleClickD}>D</button>
          <button onClick={handleClickW}>W</button>
          <button onClick={handleClickM}>M</button>          
        </ul>
      </div>
      <header>
        {/*Goole API goes here*/}

        {view === "D" && <Daily/>}
        {view === "W" && <Weekly/>}
        {view === "M" && <Monthly/>}
      </header>
    </div>
  );
}

export default App;
