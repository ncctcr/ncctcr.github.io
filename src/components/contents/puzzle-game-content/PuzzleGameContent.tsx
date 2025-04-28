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

const PuzzleGameContent = () => {
  return (
    <Wrapper>
      <Description title={'2048'} icon={PuzzleIcon}>
        2048 is a cool game, and it's not hard to implement it in React + TypeScript, especially with hooks and a clean architecture. Here's my implementation
      </Description>
      <GameProvider>
        <Board />
      </GameProvider>
    </Wrapper>
  );
};

export default PuzzleGameContent;
