import React, { FC, ReactNode } from 'react';
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
  border-bottom: 1px solid #2e2e2e;
  button {
    color: gray;
  }
`

const Body = styled.div`
  height: 100%;
  overflow-y: auto;
`

type TypeProps = {
  onBack: () => void;
  children: ReactNode;
}

const SelectedView: FC<TypeProps> = ({ onBack, children }) => {
  return (
    <Wrapper>
      <Header>
        <Button onClick={onBack}><ClearIcon/></Button>
      </Header>
      <Body>
        {children}
      </Body>
    </Wrapper>
  );
};

export default SelectedView;