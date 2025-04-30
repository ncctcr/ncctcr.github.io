import React, { useState, useEffect } from 'react';
import styles from './Controls.module.css';
import { Button } from '@mui/material';

type ControlsProps = {
  balance: number,
  gameState: number,
  buttonState: any,
  betEvent: any,
  hitEvent: any,
  standEvent: any,
  resetEvent: any
};

const Controls: React.FC<ControlsProps> = ({ balance, gameState, buttonState, betEvent, hitEvent, standEvent, resetEvent }) => {
  const [amount, setAmount] = useState(10);
  const [inputStyle, setInputStyle] = useState(styles.input);

  useEffect(() => {
    validation();
  }, [amount, balance]);

  const validation = () => {
    if (amount > balance) {
      setInputStyle(styles.inputError);
      return false;
    }
    if (amount < 0.01) {
      setInputStyle(styles.inputError);
      return false;
    }
    setInputStyle(styles.input);
    return true;
  }

  const amountChange = (e: any) => {
    setAmount(e.target.value);
  }

  const onBetClick = () => {
    if (validation()) {
      betEvent(Math.round(amount * 100) / 100);
    }
  }

  const getControls = () => {
    if (gameState === 0) {
      return (
        <div className={styles.controlsContainer}>
          <div className={styles.betContainer}>
            <h4>Amount:</h4>
            <input autoFocus type='number' value={amount} onChange={amountChange} className={inputStyle} />
          </div>
          <Button variant={'contained'} onClick={() => onBetClick()} className={styles.button}>Bet</Button>
        </div>
      );
    }
    else {
      return (
        <div className={styles.controlsContainer}>
          <Button variant={'contained'} onClick={() => hitEvent()} disabled={buttonState.hitDisabled} className={styles.button}>Hit</Button>
          <Button variant={'contained'} onClick={() => standEvent()} disabled={buttonState.standDisabled} className={styles.button}>Stand</Button>
          <Button variant={'contained'} onClick={() => resetEvent()} disabled={buttonState.resetDisabled} className={styles.button}>Reset</Button>
        </div>
      );
    }
  }

  return (
    <>
      {getControls()}
    </>
  );
}

export default Controls;