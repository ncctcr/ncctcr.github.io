import React from 'react';
import styled from 'styled-components';
import CalendarWidget from './components/CalendarWidget';
import TimeWidget from './components/TimeWidget';
import VideoWidget from './components/VideoWidget';
import { Box, Grid } from '@mui/material';
import ContactsWidget from './components/ContactsWidget';
import UnitedWidget from './components/UnitedWidget';

const Wrapper = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, "San Francisco", Helvetica, Arial, sans-serif;
	position: absolute;
  top: 0;
	width: 100%;
`;

const Widgets = () => {
  return (
    <Wrapper>
      <Box display={'flex'} justifyContent={'end'}>
        <Box maxWidth={370} padding={2}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TimeWidget />
            </Grid>
            <Grid size={6}>
              <CalendarWidget />
            </Grid>
            <Grid size={12}>
              <VideoWidget />
            </Grid>
            <Grid size={12}>
              <ContactsWidget />
            </Grid>
            <Grid size={6}></Grid>
            <Grid size={6}>
              <UnitedWidget />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Widgets;