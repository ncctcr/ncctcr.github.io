import React, { ReactNode, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CalendarWidget from '../widgets/components/CalendarWidget';
import TimeWidget from '../widgets/components/TimeWidget';
import SkillIcon from '../../assets/icons/dock/skills.png';
import styled from 'styled-components';
import ExperienceIcon from '../../assets/icons/dock/experience.png';
import EducatitonIcon from '../../assets/icons/dock/education.png';
import LicenceIcon from '../../assets/icons/dock/licence.png';
import ContactIcon from '../../assets/icons/dock/contact.png';
import PuzzleIcon from '../../assets/icons/dock/2048.png';
import SkillsContent from '../contents/skills-content/SkillsContent';
import SelectedView from './SelectedView';
import ExperienceContent from '../contents/experience-content/ExperienceContent';
import EducationContent from '../contents/EducationContent';
import LicensesContent from '../contents/LicensesContent';
import ContactsContent from '../contents/ContactsContent';
import PuzzleGameContent from '../contents/puzzle-game-content/PuzzleGameContent';
import ContactsWidget from '../widgets/components/ContactsWidget';

const Icon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
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

const MainView = (props: {onClick: (view: number) => void}) => (
  <Box padding={3}>
    <Grid container spacing={SPACING}>
      <Grid size={6}>
        <TimeWidget />
      </Grid>
      <Grid size={6}>
        <Grid container spacing={SPACING}>
          <Grid size={6} onClick={() => props.onClick(1)}>
            <Application name={'Skills'} icon={SkillIcon}/>
          </Grid>
          <Grid size={6} onClick={() => props.onClick(2)}>
            <Application name={'Experience'} icon={ExperienceIcon}/>
          </Grid>
          <Grid size={6} onClick={() => props.onClick(3)}>
            <Application name={'Education'} icon={EducatitonIcon}/>
          </Grid>
          <Grid size={6} onClick={() => props.onClick(4)}>
            <Application name={'Licenses'} icon={LicenceIcon}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={6}>
        <Grid container spacing={SPACING}>
          <Grid size={6} onClick={() => props.onClick(5)}>
            <Application name={'Contacts'} icon={ContactIcon}/>
          </Grid>
          <Grid size={6} onClick={() => props.onClick(6)}>
            <Application name={'2048'} icon={PuzzleIcon}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={6}>
        <CalendarWidget />
      </Grid>
      {/*<Grid size={12}>*/}
      {/*  <ContactsWidget />*/}
      {/*</Grid>*/}
    </Grid>
  </Box>
)

const MobileView = () => {
  const [view, setView] = useState(0);

  const VIEWS: {[key: number]: ReactNode} = {
    0: <MainView onClick={setView} />,
    1: <SelectedView onBack={() => setView(0)}><SkillsContent/></SelectedView>,
    2: <SelectedView onBack={() => setView(0)}><ExperienceContent/></SelectedView>,
    3: <SelectedView onBack={() => setView(0)}><EducationContent/></SelectedView>,
    4: <SelectedView onBack={() => setView(0)}><LicensesContent/></SelectedView>,
    5: <SelectedView onBack={() => setView(0)}><ContactsContent/></SelectedView>,
    6: <SelectedView onBack={() => setView(0)}><PuzzleGameContent/></SelectedView>,
  };

  return (
    <>{VIEWS[view]}</>
  );
};

export default MobileView;