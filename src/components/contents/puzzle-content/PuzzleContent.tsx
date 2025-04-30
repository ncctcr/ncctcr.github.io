import React from 'react';
import styled from 'styled-components';
import Description from '../../shared/Description';
import PuzzleIcon from '../../../assets/icons/dock/2048.png';
import Board from './components/Board';
import GameProvider from './context/GameContext';
import { Alert, Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
	gap: 30px;
	padding: 20px;
	margin-bottom: 40px;
`

const Link = styled.a`
	color: #5289ff;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`

const Info = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border-radius: 8px;
  background-color: #b59d87;
  color: #fff;
`


const PuzzleContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
  const helperText = isMobile ? 'Use swipes to move cells around' : 'Use the arrow keys for move cells';

  return (
    <Wrapper>
      <Description title={'2048'} icon={PuzzleIcon} styles={{
        wrapper: {background: '#b59d87', border: 'unset'},
        title: {color: '#fff'},
        body: {color: '#fff'},
      }}>
        The objective of the game is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.
        The implementation has been taken from <Link href={'https://github.com/mateuszsokola/2048-in-react'} target={'_blank'}>here</Link>
      </Description>
        {/*<Score />*/}
        <Box width={'100%'}>
          <GameProvider>
            <Board />
            <Info mt={2}>
              <Typography fontSize={14}>{helperText}</Typography>
            </Info>
          </GameProvider>
        </Box>
    </Wrapper>
  );
};

export default PuzzleContent;
