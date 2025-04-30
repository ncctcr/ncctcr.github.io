import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const Wrapper = styled.div`
	color: #dddddd;
	background: #1e1e1e;
  height: 100dvh;
  overflow: hidden;
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
  height: 100%;
  overflow-y: auto;
`

type TypeProps = {
  title?: string;
  onBack: () => void;
  children: ReactNode;
  styles?: {
    body?: CSSProperties;
    header?: CSSProperties;
  }
}

const SelectedView: FC<TypeProps> = ({ title, onBack, children, styles}) => {
  return (
    <Wrapper style={styles?.body}>
      <Header style={styles?.header}>
        {title && <span>{title}</span>}
        <Button onClick={onBack}><ClearIcon/></Button>
      </Header>
      <Body>
        {children}
      </Body>
    </Wrapper>
  );
};

export default SelectedView;