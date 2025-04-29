import React from 'react';
import styled from 'styled-components';
import Description from '../../shared/Description';
import PuzzleIcon from '../../../assets/icons/dock/2048.png';
import Board from './components/Board';
import GameProvider from './context/GameContext';

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

const PuzzleGameContent = () => {
  return (
    <Wrapper>
      <Description title={'2048'} icon={PuzzleIcon}>
        The objective of the game is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.
        The implementation has been taken from <Link href={'https://github.com/mateuszsokola/2048-in-react'} target={'_blank'}>here</Link>
      </Description>
      <GameProvider>
        {/*<Score />*/}
        <Board />
      </GameProvider>
    </Wrapper>
  );
};

export default PuzzleGameContent;
