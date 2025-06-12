import React, { Fragment } from 'react';
import styled from 'styled-components';
import CalendarWidget from './components/CalendarWidget';
import VideoWidget from './components/VideoWidget';
import { Box, Grid } from '@mui/material';
import ContactsWidget from './components/ContactsWidget';
import UnitedWidget from './components/UnitedWidget';
import AnalogTimeWidget from './components/analog-time-widget/AnalogTimeWidget';

const Wrapper = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, "San Francisco", Helvetica, Arial, sans-serif;
	position: absolute;
  top: 0;
	width: 100%;
`;

const WIDGETS = [
  {size: 6, widget: <AnalogTimeWidget />},
  {size: 6, widget: <CalendarWidget />},
  {size: 12, widget: <VideoWidget />},
  {size: 12, widget: <ContactsWidget />},
  {size: 6, widget: <Fragment />},
  {size: 6, widget: <UnitedWidget />},
]

const Widgets = () => {
  return (
    <Wrapper>
      <Box display={'flex'} justifyContent={'end'}>
        <Box maxWidth={370} padding={2}>
          <Grid container spacing={2}>
            {WIDGETS.map((item, index) => (
              <Grid size={item.size} key={index}>
                {item.widget}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Widgets;
