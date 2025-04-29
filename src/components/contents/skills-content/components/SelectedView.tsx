import React, { FC } from 'react';
import styled from 'styled-components';
import Description from '../../../shared/Description';
import { Box, Typography } from '@mui/material';
import Block from '../../../shared/Block';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  margin-bottom: 40px;
`

const Meme = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 500px;
	border-radius: 8px;
`

type TypeProps = {
  view: { name: string, icon: string, description: string, experience: string[], meme?: string } | null;
}

const SelectedView: FC<TypeProps> = ({ view }) => {
  if (!view) return null

  return (
    <Wrapper>
      <Description title={view.name} icon={view.icon} backgroundIcon>
        {view.description}
      </Description>
      <Block title={'Experience'}>
        <Box display={'flex'} flexDirection={'column'} p={2} gap={2}>
          {view.experience.map((item) => (
            <Typography fontSize={13}>{item}</Typography>
          ))}
        </Box>
      </Block>
      {view.meme && (
        <Block>
          <Box display={'flex'} justifyContent={'center'} p={2}>
            <Meme src={view.meme} alt={view.name}/>
          </Box>
        </Block>
      )}
    </Wrapper>
  );
};

export default SelectedView;