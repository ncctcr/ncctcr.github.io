import React, { useState, useEffect } from 'react';
import styles from './Controls.module.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import PanToolIcon from '@mui/icons-material/PanTool';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';

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
          <TextField
            label="Amount"
            variant="outlined"
            value={amount}
            onChange={amountChange}
            fullWidth
            autoFocus
          />
          <Button
            variant={'contained'}
            onClick={() => onBetClick()}
            className={styles.button}
          >
            <Typography fontWeight={600}>Bet</Typography>
          </Button>
        </div>
      );
    }
    else {
      return (
        <div className={styles.controlsContainer} style={{
          position: 'fixed',
          bottom: 20,
          width: 'calc(100% - 32px)',
        }}>
          <Button
            color={'success'}
            variant={'contained'}
            onClick={() => hitEvent()}
            disabled={buttonState.hitDisabled}
            className={styles.button}
          >
            <Box display={'flex'} gap={1} p={1}>
              <AddBoxIcon/>
              <Typography fontWeight={600}>Hit</Typography>
            </Box>
          </Button>
          <Button
            color={'error'}
            variant={'contained'}
            onClick={() => standEvent()}
            disabled={buttonState.standDisabled}
            className={styles.button}
          >
            <Box display={'flex'} gap={1} p={1}>
              <PanToolIcon />
              <Typography fontWeight={600}>Stand</Typography>
            </Box>
          </Button>
          <Button
            variant={'contained'}
            onClick={() => resetEvent()}
            disabled={buttonState.resetDisabled}
            className={styles.button}>
            <Box display={'flex'} gap={1} p={1}>
              <RestartAltIcon/>
              <Typography fontWeight={600}>Reset</Typography>
            </Box>
          </Button>
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