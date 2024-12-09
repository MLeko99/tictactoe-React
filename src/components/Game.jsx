import React from "react";
import { useEffect, useState } from "react";
import { PLAYER } from "../constants";
import Score from "./Score";
import Board from "./Board";
import GameOver from "./GameOver";

const Game = () => {
  const [activePlayer, setActivePlayer] = useState(PLAYER.TWO);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [drawScore, setDrawScore] = useState(0);
  const [scores, setScores] = useState({
    [PLAYER.ONE]: 0,
    [PLAYER.TWO]: 0,
  });
  const [boardValues, setBoardValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleFieldClick = (position) => {
    const boardValuesCopy = [...boardValues];
    if (!boardValuesCopy[position] && !gameOver) {
      boardValuesCopy[position] = activePlayer;
      setBoardValues(boardValuesCopy);
    }
  };

  const checkIfGameOver = () => {
    // 0,1,2
    // 3,4,5
    // 6,7,8
    // 0,3,6
    // 1,4,7
    // 2,5,8
    // 0,4,8
    // 2,4,6

    const filledFields = boardValues.filter((value) => value !== "");

    if (
      (boardValues[0] &&
        boardValues[1] &&
        boardValues[2] &&
        boardValues[0] === boardValues[1] &&
        boardValues[0] === boardValues[2]) ||
      (boardValues[3] &&
        boardValues[4] &&
        boardValues[5] &&
        boardValues[3] === boardValues[4] &&
        boardValues[3] === boardValues[5]) ||
      (boardValues[6] &&
        boardValues[7] &&
        boardValues[8] &&
        boardValues[6] === boardValues[7] &&
        boardValues[6] === boardValues[8]) ||
      (boardValues[0] &&
        boardValues[3] &&
        boardValues[6] &&
        boardValues[0] === boardValues[3] &&
        boardValues[0] === boardValues[6]) ||
      (boardValues[1] &&
        boardValues[4] &&
        boardValues[7] &&
        boardValues[1] === boardValues[4] &&
        boardValues[1] === boardValues[7]) ||
      (boardValues[2] &&
        boardValues[5] &&
        boardValues[8] &&
        boardValues[2] === boardValues[5] &&
        boardValues[2] === boardValues[8]) ||
      (boardValues[0] &&
        boardValues[4] &&
        boardValues[8] &&
        boardValues[0] === boardValues[4] &&
        boardValues[0] === boardValues[8]) ||
      (boardValues[2] &&
        boardValues[4] &&
        boardValues[6] &&
        boardValues[2] === boardValues[4] &&
        boardValues[2] === boardValues[6])
    ) {
      setGameOver(true);
      setWinner(activePlayer);
      const scoresCopy = { ...scores };

      scoresCopy[activePlayer] += 1;

      setScores(scoresCopy);
    } else if (filledFields.length === 9) {
      setGameOver(true);
      setWinner("DRAW");
      setDrawScore((prevState) => (prevState += 1));
    } else {
      setActivePlayer((prevState) =>
        prevState === PLAYER.ONE ? PLAYER.TWO : PLAYER.ONE
      );
    }
  };

  useEffect(() => {
    checkIfGameOver();
  }, [boardValues]);

  const playAgain = () => {
    setBoardValues(["", "", "", "", "", "", "", "", ""]);
    setActivePlayer(PLAYER.TWO);
    setGameOver(false);
    setWinner("");
  };

  return (
    <div>
      <Score scores={scores} drawScore={drawScore} />
      <h1>Tic Tac Toe</h1>
      <Board
        handleFieldClick={handleFieldClick}
        gameOver={gameOver}
        boardValues={boardValues}
      />
      <GameOver gameOver={gameOver} winner={winner} playAgain={playAgain} />
    </div>
  );
};

export default Game;
