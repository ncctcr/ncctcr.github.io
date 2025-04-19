import { useContext } from "react";
import { GameContext } from '../context/GameContext';
import styles from '../styles/splash.module.css';

export default function Splash({ heading = "You won!", type = "" }) {
  const { startGame } = useContext(GameContext);

  return (
    <div className={`${styles.splash} ${type === "won" && styles.win}`}>
      <div>
        <h1>{heading}</h1>
        <button className={styles.button} onClick={startGame}>
          Play again
        </button>
      </div>
    </div>
  );
}