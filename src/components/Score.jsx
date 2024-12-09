import React from "react";

const Score = ({ scores, drawScore }) => {
  return (
    <div>
      <h2>SCOREBOARD</h2>
      <div className="score">
        Player 1(X) {scores.X} &nbsp;- &nbsp;{scores.O} Player 2(O)
        <br />
        Draws: {drawScore}
      </div>
    </div>
  );
};

export default Score;
