import React, { ReactNode, useState } from 'react';
import { Avatar, Box, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import AboutMeContent from '../AboutMeContent';
import WallpaperIcon from '../../../assets/icons/wallpaper.png';
import Wallpaper from './components/wallpaper/Wallpaper';

const Wrapper = styled(Box)`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`

const Content = styled(Box)`
  height: 100%;
	width: 100%;
  background: #2e2e2e;
  overflow: auto;
`

const Sidebar = styled(Box)`
  margin-top: 40px;
  width: 290px;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Search = styled(TextField)`
  .MuiOutlinedInput-input {
		padding:  5.5px 14px !important;
    font-size: 13px !important;
  }
`

const Header = styled(Box)`
  display: flex;
  width: 100%;
	background: #2e2e2e;
  min-height: 46px;
  padding: 0 20px;
  border-bottom: 1px solid #1d1d1d;
`

const SidebarItem = styled(Box)<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  background: ${({ selected }) => selected ? '#1756bb' : 'unset'};
  border-radius: 5px;
  padding: 5px;
  gap: 5px;
`

const AboutMe = () => {
  return (
    <>
      <Header display={'flex'} alignItems={'center'}>
        <Typography fontSize={16} fontWeight={'bold'}>About me</Typography>
      </Header>
      <Content>
        <AboutMeContent />
      </Content>
    </>
  );
}

const SettingsContent = () => {
  const [selectedContent, setSelectedContent] = useState<string | null>('wallpaper');

  const getContent = (key: string | null) => {
    const CONTENT: {[key: string]: ReactNode} = {
      'about_me': <AboutMe />,
      'wallpaper': <Wallpaper />
    }

    return key ? CONTENT[key] || null : null;
  }

  return (
    <Wrapper>
      <Sidebar>
        <Box>
          <Search placeholder={'Search'} variant="outlined" size={'small'} fullWidth/>
        </Box>
        <SidebarItem selected={selectedContent === 'about_me'} onClick={() => setSelectedContent('about_me')}>
          <Avatar />
          <Box>
            <Typography fontSize={13} fontWeight={'bold'} lineHeight={1.2}>Mykola Nesterchuk</Typography>
            <Typography fontSize={11} lineHeight={1.2}>Software Engineer</Typography>
          </Box>
        </SidebarItem>
        <SidebarItem padding={0.5} selected={selectedContent === 'wallpaper'} onClick={() => setSelectedContent('wallpaper')}>
          <img src={WallpaperIcon} height={23} width={23} alt={'Wallpaper'}/>
          <Typography fontSize={13}>Wallpaper</Typography>
        </SidebarItem>
      </Sidebar>
      <Box width={'100%'} height={'100%'}>
        {getContent(selectedContent)}
      </Box>
    </Wrapper>
  );
};

export default SettingsContent;