import React from "react";

const Modal = ({restartGame}) => {

  return (
    <div className="overlay">
      <div className="modal-box">
        <div className="modal-container">
          <p>Maladzec, u veri gud - nav plej egen pljiz!</p>
          <div className="modal-inner">
            <button onClick={() => restartGame()}>
              plej egen
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
};

export default Modal;
