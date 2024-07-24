import React from 'react';
import Cell from './Cell';
import styles from '../styles/Board.module.css';

interface BoardProps {
  board: string[];
  onCellClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onCellClick }) => {
  return (
    <div className={styles.board}>
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
};

export default Board;