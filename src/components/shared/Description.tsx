import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { useMediaQuery, useTheme } from '@mui/material';

const Wrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  width: 100%;
  border: ${({ isMobile }) => isMobile ? 'unset' : '1px solid rgba(113, 113, 113, 0.44)'};
  background: ${({ isMobile }) => isMobile ? '#1c1c1e' : 'unset'};
  border-radius: 8px;
  padding: 10px;
  gap: 10px;
  
  img {
    width: 30px;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
    aspect-ratio: 1 / 1;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: 500;
`

const Body = styled.div`
  font-size: 13px;
  color: #cdcdcd;
`

type TypeProps = {
  title: string;
  children: ReactNode
  icon?: string;
  backgroundIcon?: boolean;
  styles?: {
    wrapper?: CSSProperties;
    content?: CSSProperties;
    title?: CSSProperties;
    body?: CSSProperties;
  };
}

const Description: FC<TypeProps> = ({
  title,
  children,
  icon,
  backgroundIcon = false,
  styles
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px

  return (
    <Wrapper style={styles?.wrapper} isMobile={isMobile}>
      {icon && <img src={icon} alt={`${icon} icon`} style={backgroundIcon ? {background: '#000'} : {}}/>}
      <Content style={styles?.content}>
        <Title style={styles?.title}><span>{title}</span></Title>
        <Body style={styles?.body}><span>{children}</span></Body>
      </Content>
    </Wrapper>
  );
};

export default Description;