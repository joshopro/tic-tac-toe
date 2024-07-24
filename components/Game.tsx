'use client';

import React, { useState, useEffect } from 'react';
import Board from './Board';
import styles from '../styles/Game.module.css';

const initialState = Array(9).fill('');

const Game: React.FC = () => {
  const [board, setBoard] = useState(initialState);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  };

  const checkWinner = (board: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (board.every(cell => cell)) {
      setWinner('Draw');
    }
  };

  const handleReset = () => {
    setBoard(initialState);
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className={styles.game}>
      <Board board={board} onCellClick={handleClick} />
      {winner && <div className={styles.message}>{winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`}</div>}
      <button className={styles.resetButton} onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Game;
