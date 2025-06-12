import React, { CSSProperties, FC, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const Wrapper = styled.div<{ $clickX: number; $clickY: number; $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
	color: #dddddd;
	background: #1e1e1e;
	height: 100dvh;
	width: 100dvw;
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	transform-origin: ${props => props.$clickX}px ${props => props.$clickY}px;
	animation: ${props => props.$isOpen ? 'scaleUp' : 'scaleDown'} 0.3s ease forwards;
  z-index: 10;

	@keyframes scaleUp {
		from {
			transform: scale(0);
			border-radius: 80px;
			opacity: 0;
		}
		to {
			transform: scale(1);
			border-radius: 0;
			opacity: 1;
		}
	}

	@keyframes scaleDown {
		from {
			transform: scale(1);
			border-radius: 0;
			opacity: 1;
		}
		to {
			transform: scale(0);
			border-radius: 80px;
			opacity: 0;
		}
	}
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  position: relative;
  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  button {
    color: gray;
  }
`

const Body = styled.div`
  overflow-y: auto;
  flex: 1;
`

type TypeProps = {
  title?: string;
  onBack: () => void;
  children: ReactNode;
  styles?: {
    body?: CSSProperties;
    header?: CSSProperties;
  }
  clickPosition: { x: number; y: number };
}

const SelectedView: FC<TypeProps> = ({ title, onBack, children, styles, clickPosition }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onBack, 300);
  };

  return (
    <Wrapper
      style={styles?.body}
      $clickX={clickPosition.x}
      $clickY={clickPosition.y}
      $isOpen={isOpen}
    >
      <Header style={styles?.header}>
        {title && <span>{title}</span>}
        <IconButton onClick={handleClose}><ClearIcon/></IconButton>
      </Header>
      <Body>
        {children}
      </Body>
    </Wrapper>
  );
};

export default SelectedView;