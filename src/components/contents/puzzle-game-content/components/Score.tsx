import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import styles from '../styles/score.module.css';

const Score = () => {
  const { score } = useContext(GameContext);

  return (
    <div className={styles.score}>
      Score
      <div>{score}</div>
    </div>
  );
}

export default Score