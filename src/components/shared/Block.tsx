import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { useMediaQuery, useTheme } from '@mui/material';

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 0 15px 5px 15px;
`

const Content = styled.div`
	border: 1px solid rgba(113, 113, 113, 0.44);
	border-radius: 8px;
`
const Brackets = styled.span`
  color: #ffffff6b;
  margin-left: 5px;
`


type TypeProps = {
  title?: string;
  brackets?: string;
  children: ReactNode;
}

const Block: FC<TypeProps> = ({ title, brackets, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px

  return (
    <div>
      {title && <Title>{title}{brackets && <Brackets>({brackets})</Brackets>}</Title>}
      <Content style={isMobile ? {background: '#1c1c1e', border: 'unset'} : {}}>
        {children}
      </Content>
    </div>
  );
};

export default Block;