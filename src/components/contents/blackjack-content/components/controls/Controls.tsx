import React, { useState } from 'react';
import styles from './Controls.module.css';
import { Box, Button, Typography } from '@mui/material';
import PanToolIcon from '@mui/icons-material/PanTool';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Chip } from '../chip/Chip';

type ControlsProps = {
  balance: number,
  gameState: number,
  buttonState: any,
  betEvent: any,
  hitEvent: any,
  standEvent: any,
  resetEvent: any
};

const CHIP_VALUES = [1, 5, 10, 20, 50] as const;

const Controls: React.FC<ControlsProps> = ({ balance, gameState, buttonState, betEvent, hitEvent, standEvent, resetEvent }) => {
  const [chips, setChips] = useState([10]);
  const total = chips.reduce((a, b) => a + b, 0);

  const onBetClick = () => {
    if (total && total < balance) {
      betEvent(total);
    }
  }

  const getControls = () => {
    if (gameState === 0) {
      return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'} gap={2} height={'100%'}>
          <Box display={'flex'} flexDirection={'column'} textAlign={'center'} onClick={() => setChips([0])} gap={1} width={'100%'}>
            <Typography fontWeight={600} variant={'h4'}>Your bet</Typography>
            <Typography variant={'h4'}>${total}</Typography>
          </Box>

          <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} gap={1} width={'70%'}>
            {CHIP_VALUES.map(value => (
              <Chip
                key={value}
                value={value}
                onCLick={(value) => setChips([...chips, value])}
                disable={balance < total + value}
              />
            ))}
          </Box>

          <Button
            variant={'contained'}
            onClick={() => onBetClick()}
            size={'large'}
            style={{
              borderRadius: '50%',
              height: 77
            }}
          >
            <Typography fontWeight={600}>Bet</Typography>
          </Button>
        </Box>
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