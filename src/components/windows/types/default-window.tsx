import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../../../assets/icons/close.svg';
import HideIcon from '../../../assets/icons/hide.svg';
import ReziseIcon from '../../../assets/icons/resize.svg';
import { TypeWindowStyles } from '../../../interfaces';

const Wrapper = styled('div')`
	border: 0.05rem solid #777777;
  color: #dddddd;
	background: #1e1e1e;
	width: 100%;
  height: 100%;
	box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);
	border-radius: 0.5rem;
	position: relative;
	overflow: hidden;
	z-index: 2;
`

const Header = styled.div<{ isDragging: boolean }>`
	height: 2rem;
	line-height: 2rem;
	background: #363636;
	color: #444;
	width: 100%;
	z-index: 2;
	border-top-left-radius: 0.4rem;
	border-top-right-radius: 0.4rem;
	background-clip: padding-box;
	font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, "Apple Color Emoji";
	text-align: center;
	cursor: ${({ isDragging }) => (isDragging ? 'grabbing' : 'grab')};
	user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Body = styled.div`
  overflow: auto;
  height: 100%;
`

const Buttons = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  z-index: 2;
  display: flex;
  gap: 8px;
  
  button {
    height: 12px;
    width: 12px;
    border: unset;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
    &:nth-child(1) {
			background: #f85955;
    }
		&:nth-child(2) {
			background: #fbbe3f;
		}
		&:nth-child(3) {
			background: #45cc4b;
		}

		img {
			display: none;
			width: 12px;
			height: 12px;
		}

		&:hover img {
			display: block;
		}
  }
`

const Title = styled.span`
  color: #fefdff;
  font-weight: bold;
  font-size: 14px;
`

type TypeProps = {
  id: number;
  title?: string;
  children?: ReactNode
  onClose?: (id: number) => void;
  onHide?: () => void;
  onResize?: (id: number) => void;
  styles?: TypeWindowStyles
}

const DefaultStyles = {
  header: {
    background: '#363636',
    hideCloseButton: false,
    hideResizeButton: false,
    hideHideButton: false,
  },
  body: {
    background: '#1e1e1e',
    color: '#dddddd',
    borderRadius: '0.5rem'
  }
}

const DefaultWindow: FC<TypeProps> = ({
  id,
  title,
  children,
  onClose,
  onHide ,
  onResize,
  styles = DefaultStyles
}) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Wrapper style={styles.body}>
      <Header
        style={styles.header}
        className={'window-header'}
        isDragging={isDragging}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {title && <Title>{title}</Title>}
        <Buttons>
          <button
            style={{ display: styles.header?.hideCloseButton ? 'none' : 'block'}}
            aria-label='Close window'
            title='Close window'
            onClick={() => onClose && onClose(id)}
          >
            <img src={CloseIcon} alt='Close icon'/>
          </button>
          <button
            style={{ display: styles.header?.hideHideButton ? 'none' : 'block'}}
            aria-label='Hide window'
            title='Hide window'
            onClick={onHide}>
            <img src={HideIcon} alt='Hide icon'/>
          </button>
          <button
            style={{ display: styles.header?.hideResizeButton ? 'none' : 'block'}}
            aria-label='Resize window'
            title='Resize window'
            onClick={() => onResize && onResize(id)}
          >
            <img src={ReziseIcon} alt='Resize icon'/>
          </button>
        </Buttons>
      </Header>
      <Body>
        {children}
      </Body>
    </Wrapper>
  );
};

export default DefaultWindow;
