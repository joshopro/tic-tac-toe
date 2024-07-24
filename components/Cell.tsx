import React from 'react';
import styles from '../styles/Cell.module.css';

interface CellProps {
  value: string;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <div className={styles.cell} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;