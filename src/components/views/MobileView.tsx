import React, { ReactNode, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CalendarWidget from '../widgets/components/CalendarWidget';
import SkillIcon from '../../assets/icons/dock/skills.png';
import styled from 'styled-components';
import ExperienceIcon from '../../assets/icons/dock/experience.png';
import EducatitonIcon from '../../assets/icons/dock/education.png';
import LicenceIcon from '../../assets/icons/dock/licence.png';
import ContactIcon from '../../assets/icons/dock/contact.png';
import PuzzleIcon from '../../assets/icons/games/2048.png';
import BlackjackIcon from '../../assets/icons/games/blackjack.png';
import AboutMeIcon from '../../assets/icons/dock/about-me.png';
import SkillsContent from '../contents/skills-content/SkillsContent';
import SelectedView from './SelectedView';
import ExperienceContent from '../contents/experience-content/ExperienceContent';
import EducationContent from '../contents/EducationContent';
import LicensesContent from '../contents/LicensesContent';
import ContactsContent from '../contents/ContactsContent';
import Puzzle from '../contents/games-content/games/2048/Puzzle';
import Blackjack from '../contents/games-content/games/blackjack/Blackjack';
import AboutMeContent from '../contents/AboutMeContent';
import UnitedWidget from '../widgets/components/UnitedWidget';
import AnalogTimeWidget from '../widgets/components/analog-time-widget/AnalogTimeWidget';

const Icon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: #1a1a1a;
  aspect-ratio: 1 / 1;
`

const Application = (props: {name: string, icon: string}) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      position={'relative'}
      gap={0.5}
    >
      <Icon src={props.icon} alt={props.name}/>
      <Box position={'absolute'} bottom={-20}>
        <Typography color={'#FFF'} fontSize={12}>{props.name}</Typography>
      </Box>
    </Box>
  )
}

const SPACING = 4;

const MainView = (props: {onClick: (view: number, event: React.MouseEvent) => void, children: ReactNode}) => (
  <Box padding={3}>
    <Grid container spacing={SPACING}>
      <Grid size={6}>
        <AnalogTimeWidget />
      </Grid>
      <Grid size={6}>
        <Grid container spacing={SPACING}>
          <Grid size={6} onClick={(e) => props.onClick(1, e)}>
            <Application name={'Skills'} icon={SkillIcon}/>
          </Grid>
          <Grid size={6} onClick={(e) => props.onClick(2, e)}>
            <Application name={'Experience'} icon={ExperienceIcon}/>
          </Grid>
          <Grid size={6} onClick={(e) => props.onClick(3, e)}>
            <Application name={'Education'} icon={EducatitonIcon}/>
          </Grid>
          <Grid size={6} onClick={(e) => props.onClick(4, e)}>
            <Application name={'Licenses'} icon={LicenceIcon}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={6}>
        <Grid container spacing={SPACING}>
          <Grid size={6} onClick={(e) => props.onClick(5, e)}>
            <Application name={'Contacts'} icon={ContactIcon}/>
          </Grid>
          <Grid size={6} onClick={(e) => props.onClick(8, e)}>
            <Application name={'About Me'} icon={AboutMeIcon}/>
          </Grid>
          <Grid size={6} onClick={(e) => props.onClick(6, e)}>
            <Application name={'2048'} icon={PuzzleIcon}/>
          </Grid>
          <Grid size={6} onClick={(e) => props.onClick(7, e)}>
            <Application name={'Blackjack'} icon={BlackjackIcon}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={6}>
        <CalendarWidget />
      </Grid>
      <Grid size={6}>
        <UnitedWidget/>
      </Grid>
    </Grid>
    {props.children}
  </Box>
)

const MobileView = () => {
  const [view, setView] = useState(0);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleViewChange = (newView: number, event: React.MouseEvent) => {
    setClickPosition({
      x: event.clientX,
      y: event.clientY
    });
    setView(newView);
  };

  const handleBack = () => {
    setView(0)
  }

  const VIEWS: {[key: number]: ReactNode} = {
    1: <SelectedView clickPosition={clickPosition} onBack={handleBack} title={'Skills'}><SkillsContent/></SelectedView>,
    2: <SelectedView clickPosition={clickPosition} onBack={handleBack} title={'Experience'}><ExperienceContent/></SelectedView>,
    3: <SelectedView clickPosition={clickPosition} onBack={handleBack} title={'Education'}><EducationContent/></SelectedView>,
    4: <SelectedView clickPosition={clickPosition} onBack={handleBack} title={'Licenses'}><LicensesContent/></SelectedView>,
    5: <SelectedView clickPosition={clickPosition} onBack={handleBack} title={'Contacts'}><ContactsContent/></SelectedView>,
    6: <SelectedView clickPosition={clickPosition} styles={{body: {background: '#cebda6'}}} onBack={handleBack}><Puzzle/></SelectedView>,
    7: <SelectedView clickPosition={clickPosition} styles={{body: {background: 'radial-gradient(circle,rgba(0, 84, 28, 1) 0%, rgba(0, 48, 15, 1) 100%)'}}} onBack={handleBack}><Blackjack/></SelectedView>,
    8: <SelectedView clickPosition={clickPosition} onBack={handleBack}><AboutMeContent/></SelectedView>,
  };

  return (
    <MainView onClick={handleViewChange}>
      {VIEWS[view]}
    </MainView>
  );
};

export default MobileView;