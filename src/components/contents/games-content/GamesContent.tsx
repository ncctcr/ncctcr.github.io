import { useWindows } from '../../../contexts/WindowContext';
import PuzzleIcon from '../../../assets/icons/dock/2048.png';
import Puzzle from './components/2048/Puzzle';
import BlackjackIcon from '../../../assets/icons/dock/blackjack.png';
import Blackjack from './components/blackjack/Blackjack';
import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const Game = styled(Box)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  img {
    height: 80px;
    width: 80px;
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
]

const GamesContent = () => {
  const {state, createWindow, bringToFrontByKey} = useWindows();

  const handleOpen = (data: any) => {
    if (state.windows.some((i) => i.key === data.name)) {
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
          <Typography fontSize={14}>{i.name}</Typography>
        </Game>
      ))}
    </Box>
  )
};

export default GamesContent;