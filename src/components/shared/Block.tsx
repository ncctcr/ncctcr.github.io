import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
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
  return (
    <Wrapper>
      {title && <Title>{title}{brackets && <Brackets>({brackets})</Brackets>}</Title>}
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Block;