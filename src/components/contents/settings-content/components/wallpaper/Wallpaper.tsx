import React from 'react';
import { useBackground } from '../../../../../contexts/BackgroundContext';
import { Box, Switch, Typography } from '@mui/material';
import styled from 'styled-components';
import Block from '../../../../shared/Block';
import { WALLPAPERS } from './constants';
import { extractUrlValue, getFileNameFromUrl } from './utils';

const Header = styled(Box)`
  display: flex;
  height: 200px;
  width: 100%;
	background: #2e2e2e;
  min-height: 46px;
  padding: 0 20px;
  border-bottom: 1px solid #1d1d1d;
`

const Content = styled(Box)`
  height: calc(100% - 200px);
	width: 100%;
  background: #2e2e2e;
  overflow: auto;
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`

const Preview = styled.img`
  max-width: 150px;
  object-fit: contain;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  border: 2px solid #6e6e6e;
  padding: 2px;
`

const Group = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const HorizontalList = styled(Box)`
  display: flex;
  gap: 10px;
`

const Img = styled.img`
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
`
const Wallpaper = () => {
  const { background, setBackground } = useBackground();

  const preloadAndSetBackground = (url: string) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setBackground(`url(${url})`);
    };
  };

  return (
    <>
      <Header display={'flex'} alignItems={'center'}>
        <Box display={'flex'} flexDirection={'column'} gap={2} py={2} width={'100%'}>
          <Typography fontSize={16} fontWeight={'bold'}>Wallpaper</Typography>
          <Box display={'flex'} gap={1}>
            <Preview src={extractUrlValue(background)} alt={'Wallpaper'} />
            <Box display={'flex'} flexDirection={'column'} width={'100%'} gap={1}>
              <Block>
                <Box p={1}>
                  <Typography fontSize={14}>{getFileNameFromUrl(background)}</Typography>
                </Box>
              </Block>
              <Block>
                <Box p={1} display={'flex'} gap={1} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                  <Typography fontSize={14}>Show on all Spaces</Typography>
                  <Switch  size={'small'}/>
                </Box>
              </Block>
            </Box>
          </Box>
        </Box>
      </Header>
      <Content>
        {WALLPAPERS.map((item, index) => (
          <Group key={index}>
            <Typography fontSize={13} fontWeight={'bold'}>{item.name}</Typography>
            <HorizontalList>
              {item.images.map((image, imgIndex) => (
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} key={imgIndex}>
                  <Img
                    key={imgIndex}
                    src={image.src}
                    alt={image.name}
                    onClick={() => preloadAndSetBackground(image.src)}
                  />
                  <Typography fontSize={11} color={'#cdcdcd'}>{image.name}</Typography>
                </Box>
              ))}
            </HorizontalList>
          </Group>
        ))}
      </Content>
    </>
  )
};

export default Wallpaper;