import React from "react";

const GameOver = ({ gameOver, winner, playAgain }) => {
  return (
    <>
      {gameOver && (
        <div>
          <h2>Game over</h2>
          {winner === "DRAW" ? (
            <h2>It's a draw</h2>
          ) : (
            <h2>
              Winner is player: <b>{winner}</b>
            </h2>
          )}
          <button onClick={playAgain}>Play again?</button>
        </div>
      )}
    </>
  );
};

export default GameOver;
