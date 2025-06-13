import React, { FC } from 'react';
import styled from 'styled-components';
import { useMediaQuery, useTheme } from '@mui/material';

const Container = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: ${({ isMobile }) => isMobile ? '15px' : '20px'};
`

type TypeProps = {
  children: React.ReactNode;
}

const Wrapper: FC<TypeProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px

  return (
    <Container isMobile={isMobile}>
      {children}
    </Container>
  );
};

export default Wrapper;