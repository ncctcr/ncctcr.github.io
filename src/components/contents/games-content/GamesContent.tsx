import { useWindows } from '../../../contexts/WindowContext';
import PuzzleIcon from '../../../assets/icons/games/2048.png';
import Puzzle from './games/2048/Puzzle';
import BlackjackIcon from '../../../assets/icons/games/blackjack.png';
import DoomIcon from '../../../assets/icons/games/doom.png';
import DiggerIcon from '../../../assets/icons/games/digger.png';
import Duke3DIcon from '../../../assets/icons/games/duke3d.png';
import PopIcon from '../../../assets/icons/games/pop.png';
import QuakeIcon from '../../../assets/icons/games/quake.png';
import ArenaIcon from '../../../assets/icons/games/arena.png';
import Blackjack from './games/blackjack/Blackjack';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import DosEmulator from '../../shared/DosEmulator';

const Game = styled(Box)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-align: center;
  img {
    height: 70px;
    width: 70px;
    border-radius: 15px;
    aspect-ratio: 1 / 1;
    object-fit: contain;
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
    content: <DosEmulator bundleUrl={'/games/doom.jsdos'}/>,
    settings: {
      width: 900,
    }
  },
  {
    name: 'Digger 1983',
    key: 'digger',
    icon: DiggerIcon,
    content: <DosEmulator bundleUrl={'/games/digger.jsdos'}/>,
    settings: {
      width: 900,
    }
  },
  {
    name: 'DUKE NUKEM 3D',
    key: 'duke3d',
    icon: Duke3DIcon,
    content: <DosEmulator bundleUrl={'/games/duke3d.jsdos'}/>,
    settings: {
      width: 900,
    }
  },
  {
    name: 'Prince of Persia',
    key: 'pop',
    icon: PopIcon,
    content: <DosEmulator bundleUrl={'/games/pop.jsdos'}/>,
    settings: {
      width: 900,
    }
  },
  {
    name: 'QUAKE',
    key: 'quake',
    icon: QuakeIcon,
    content: <DosEmulator bundleUrl={'/games/quake.jsdos'}/>,
    settings: {
      width: 900,
    }
  },
  {
    name: 'The Elder Scrolls: Arena',
    key: 'arena',
    icon: ArenaIcon,
    content: <DosEmulator bundleUrl={'/games/arena.jsdos'}/>,
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
    <Box p={2}>
      <Grid container spacing={2}>
        {GAMES.map((i) => (
          <Grid size={3}>
            <Game key={i.key} onClick={() => handleOpen(i)}>
              <img src={i.icon} alt={i.name} />
              <Typography fontSize={12}>{i.name}</Typography>
            </Game>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
};

export default GamesContent;