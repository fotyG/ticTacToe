import React from "react";
import { useState } from "react";
import { GiCrossedBones, GiFangsCircle } from "react-icons/gi";

const Game = ({gameEnd, setGameEnd, restartGame, fields, setFields}) => {
  const [currentPlayer, setCurrentPlayer] = useState('player1');

  const clickHandler = (index) => {
    if(fields[index].clicked === false && !gameEnd) {
      const updatedFields = [...fields];
      updatedFields[index].clicked = true;
      updatedFields[index].player = currentPlayer;
      setFields(updatedFields);
      setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
      checkWin();
    } else {
      return;
    }
  };

  const checkWin = () => {
    if (fields[0].player === fields[1].player && fields[0].player === fields[2].player && fields[0].player != null) {
      setGameEnd(true);
      return console.log('congratz dzibil, u win!')
    }
    else if (fields[3].player === fields[4].player && fields[3].player === fields[5].player && fields[3].player != null) {
      setGameEnd(true);
      return console.log('gratz pidr 2')
    }
    else if (fields[6].player === fields[7].player && fields[6].player === fields[8].player && fields[6].player != null) {
      setGameEnd(true);
      return console.log('gratz pidr 3')
    }
    else if (fields[0].player === fields[3].player && fields[0].player === fields[6].player && fields[0].player != null) {
      setGameEnd(true);
      return console.log('gratz pidr 4')
    }
    else if (fields[1].player === fields[4].player && fields[1].player === fields[7].player && fields[1].player != null) {
      setGameEnd(true);
      return console.log('gratz pidr 5')
    }
    else if (fields[2].player === fields[5].player && fields[2].player === fields[8].player && fields[2].player != null) {
      setGameEnd(true);
      return console.log('gratz pidr 6')
    }
    else if (fields[0].player === fields[4].player && fields[0].player === fields[8].player && fields[0].player != null) {
      setGameEnd(true);
      return console.log('gratz pidr 7')
    }
    else if (fields[2].player === fields[4].player && fields[2].player === fields[6].player && fields[2].player != null) {
      setGameEnd(true);
      return console.log('gratz pidr 8')
    }
  };

  //  Winning conditions:     1.) fields[0], fields[1], fields[2]   4.) fields[0], fields[3], fields[6]   7.) fields[0], fields[4], fields[8]
  //                          2.) fields[3], fields[4], fields[5]   5.) fields[1], fields[4], fields[7]   8.) fields[2], fields[4], fields[6]
  //                          3.) fields[6], fields[7], fields[8]   6.) fields[2], fields[5], fields[8]
  return (
    <div>
    <div className="container">
      <div className="board">

        <div className="row">
          <div className="field-container">
            <div className="cell" onClick={() => clickHandler(0)}>
              {fields[0].clicked && <i className="icon">{fields[0].player === 'player1' ? <GiCrossedBones /> : <GiFangsCircle />}</i>}
            </div>
            <div className="cell" onClick={() => clickHandler(1)}>
              {fields[1].clicked && <i className="icon">{fields[1].player === 'player1' ? <GiCrossedBones /> : <GiFangsCircle />}</i>}
            </div>
            <div className="cell" onClick={() => clickHandler(2)}>
              {fields[2].clicked && <i className="icon">{fields[2].player === 'player1' ? <GiCrossedBones /> : <GiFangsCircle />}</i>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="field-container">
            <div className="cell" onClick={() => clickHandler(3)}>
              {fields[3].clicked && <i className="icon">{fields[3].player === 'player1' ? <GiCrossedBones /> : <GiFangsCircle />}</i>}
            </div>
            <div className="cell" onClick={() => clickHandler(4)}>
              {fields[4].clicked && <i className="icon">{fields[4].player === 'player1' ? <GiCrossedBones /> : <GiFangsCircle />}</i>}
            </div>
            <div className="cell" onClick={() => clickHandler(5)}>
              {fields[5].clicked && <i className="icon">{fields[5].player === 'player1' ? <GiCrossedBones /> : <GiFangsCircle />}</i>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="field-container">
            <div className="cell" onClick={() => clickHandler(6)}>
              {fields[6].clicked && <i className="icon">{fields[6].player === 'player1' ? <GiCrossedBones /> : <GiFangsCircle />}</i>}
            </div>
            <div className="cell" onClick={() => clickHandler(7)}>
              {fields[7].clicked && <i className="icon">{fields[7].player === 'player1' ? <GiCrossedBones /> : <GiFangsCircle />}</i>}
            </div>
            <div className="cell" onClick={() => clickHandler(8)}>
              {fields[8].clicked && <i className="icon">{fields[8].player === 'player1' ? <GiCrossedBones /> : <GiFangsCircle />}</i>}
            </div>
          </div>
        </div>


      </div>
      </div>
        <div className="button">
          <button onClick={() => restartGame()}>Restart the game</button>
        </div>
    </div>
  );
};

export default Game;
