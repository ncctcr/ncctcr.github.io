import React, { Fragment, ReactNode, useState } from 'react';
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


export const Container = styled.div`
  position: relative;
  &:hover .delete-button {
    opacity: 1;
  }
`;


export const DeleteButton = styled.button`
  opacity: 0;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff4444;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 1000;
  padding: 0;
  line-height: 1;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: #ff0000;
  }
`;

const Widgets = () => {
  const [data, setData] = useState<{size: number; widget: ReactNode}[]>([
    {size: 6, widget: <TimeWidget />},
    {size: 6, widget: <CalendarWidget />},
    {size: 12, widget: <VideoWidget />},
    {size: 12, widget: <ContactsWidget />},
    {size: 6, widget: <Fragment />},
    {size: 6, widget: <UnitedWidget />},
  ]);

  const handleDelete = (index: number) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  return (
    <Wrapper>
      <Box display={'flex'} justifyContent={'end'}>
        <Box maxWidth={370} padding={2}>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid size={item.size} key={index}>
                <Container>
                  {item.widget}
                  {item.widget && (
                    <DeleteButton
                      className="delete-button"
                      onClick={() => handleDelete(index)}
                    >
                      ×
                    </DeleteButton>
                  )}
                </Container>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Widgets;
