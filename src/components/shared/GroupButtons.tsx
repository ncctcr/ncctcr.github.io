import React, { FC } from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Wrapper = styled.div`
  
`

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`

const List = styled.div`
	border: 1px solid rgba(113, 113, 113, 0.44);
	border-radius: 8px;
	& > *:not(:first-child) {
		border-top: 1px solid rgba(113, 113, 113, 0.44);
	}
`

const Item = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	font-weight: 500;
	font-size: 13px;
	min-height: 40px;
  cursor: pointer;
  
	.group {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.icon {
		height: 23px;
		width: 23px;
		background: white;
		object-fit: contain;
		border-radius: 7px;
		padding: 2px;
	}

	.arrow {
		height: 12px;
		width: 12px;
		color: rgba(255, 255, 255, 0.27)
	}
`

type TypeProps = {
  title?: string;
  links: Array<{name: string, icon?: string, bg?: string, key: string}>
  onClick?: (key: string) => void;
}

const GroupButtons: FC<TypeProps> = ({ title, links, onClick }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <List>
        {links.map((i, index) => (
          <Item key={index} onClick={() => onClick && onClick(i.key)}>
            <div className={'group'}>
              {i.icon && (
                <img
                  className={'icon'}
                  src={i.icon}
                  alt={`${i.name} icon`}
                  style={i.bg ? {background: i.bg} : {}}
                />
              )}
              {i.name}
            </div>
            <ArrowForwardIosIcon className={'arrow'}/>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default GroupButtons;