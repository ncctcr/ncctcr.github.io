import { useWindows } from '../../../contexts/WindowContext';
import PuzzleIcon from '../../../assets/icons/games/2048.png';
import Puzzle from './games/2048/Puzzle';
import BlackjackIcon from '../../../assets/icons/games/blackjack.png';
import DoomIcon from '../../../assets/icons/games/doom.png';
import DiggerIcon from '../../../assets/icons/games/digger.png';
import Blackjack from './games/blackjack/Blackjack';
import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import Doom from './games/doom/Doom';
import Digger from './games/digger/Digger';

const Game = styled(Box)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 5px;
  img {
    height: 70px;
    width: 70px;
    border-radius: 15px;
  }
`

const GAMES = [
  {
    name: '2048',
    key: '2048',
    icon: PuzzleIcon,
    content: <Puzzle />,
    styles: {
      body: {
        background: '#cebda6',
      },
      header: {
        background: '#7a6a5b'
      }
    },
    settings: {
      width: 400,
      minWidth: 400,
      height: 650,
      minHeight: 650
    }
  },
  {
    name: 'Blackjack',
    key: 'blackjack',
    icon: BlackjackIcon,
    content: <Blackjack />,
    styles: {
      header: {
        background: '#001a08',
      },
      body: {
        background: 'radial-gradient(circle,rgba(0, 84, 28, 1) 0%, rgba(0, 48, 15, 1) 100%)',
      }
    }
  },
  {
    name: 'DOOM',
    key: 'doom',
    icon: DoomIcon,
    content: <Doom />,
    settings: {
      width: 900,
    }
  },
  {
    name: 'Digger 1983',
    key: 'digger',
    icon: DiggerIcon,
    content: <Digger />,
    settings: {
      width: 900,
    }
  },
]

const GamesContent = () => {
  const {state, createWindow, bringToFrontByKey} = useWindows();

  const handleOpen = (data: any) => {
    if (state.windows.some((i) => i.key === data.key)) {
      bringToFrontByKey(data.name);
    } else {
      createWindow({
        key: data.key,
        title: data.name,
        content: data.content,
        styles: data.styles ? data.styles : {},
        width: data.settings?.width || 450,
        height: data.settings?.height || 600,
        minWidth: data.settings?.minWidth || 450,
        minHeight: data.settings?.minHeight || 600,
      })
    }
  }

  return (
    <Box display={'flex'} gap={2} p={2}>
      {GAMES.map((i) => (
        <Game key={i.key} onClick={() => handleOpen(i)}>
          <img src={i.icon} alt={i.name} />
          <Typography fontSize={12}>{i.name}</Typography>
        </Game>
      ))}
    </Box>
  )
};

export default GamesContent;