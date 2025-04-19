import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid rgba(113, 113, 113, 0.44);
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
  font-size: 12px;
  color: #cdcdcd;
`

type TypeProps = {
  title: string;
  children: ReactNode
  icon?: string;
  backgroundIcon?: boolean;
}

const Description: FC<TypeProps> = ({
  title,
  children,
  icon,
  backgroundIcon = false,
}) => {
  return (
    <Wrapper>
      {icon && <img src={icon} alt={`${icon} icon`} style={backgroundIcon ? {background: '#000'} : {}}/>}
      <Content>
        <Title><span>{title}</span></Title>
        <Body><span>{children}</span></Body>
      </Content>
    </Wrapper>
  );
};

export default Description;