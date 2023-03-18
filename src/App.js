import './App.css';
import { useState, useEffect } from "react";
import { GiCrossedBones, GiFangsCircle } from "react-icons/gi"
import Game from "./components/Game";
import Modal from "./components/Modal";

function App() {
  const [gameEnd, setGameEnd] = useState(false);
  const initialFields = [
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
  ];

  const [fields, setFields] = useState([
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
    { clicked: false, player: null },
  ]);

  const restartGame = () => {
    setFields(initialFields); 
    setGameEnd(false);
  };


  return (
    <div>
      <Game gameEnd={gameEnd} setGameEnd={setGameEnd} restartGame={restartGame} setFields={setFields} fields={fields}/>
      {gameEnd ? <Modal restartGame={restartGame}/> : ""}
    </div>
    
  );
}

export default App;
