import React from 'react';
import styled from 'styled-components';
import UnitedImg from '../../../assets/images/united24.png';

const Wrapper = styled.div`
	width: 100%;
  height: 100%;
	background: #2e2e2e;
	border-radius: 17px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  a {
    height: 100%
  }
  img {
		border-radius: 17px;
    height: 100%;
    width: 100%;
  }
`;


const UnitedWidget = () => {
  return (
    <Wrapper>
      <a href={'https://u24.gov.ua/'} target={'_blank'} rel={'noreferrer'}>
        <img src={UnitedImg} alt={'United24'}/>
      </a>
    </Wrapper>
  );
};

export default UnitedWidget;