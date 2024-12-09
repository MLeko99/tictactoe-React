import React from "react";

const Board = ({ handleFieldClick, gameOver, boardValues }) => {
  return (
    <div className="board">
      {boardValues.map((value, index) => (
        <div
          key={index}
          className="field"
          onClick={() => handleFieldClick(index)}
          disabled={gameOver}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Board;
