import React from 'react';
import styled from 'styled-components';
import { Box, Grid, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background: rgb(46, 46, 46);
	backdrop-filter: blur(10px);
	border-radius: 17px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 22px 12px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	color: #d4d4d4
`;

const Item = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
`

const Circle = styled(Box)`
  display: flex;
	border: 6px solid rgba(113, 113, 113, 0.44);
	border-radius: 50%;
	justify-content: center;
	align-items: center;
  transition: all 0.3s ease-in-out;
  width: 80%;
	aspect-ratio: 1 / 1;
	&:hover {
		border: 6px solid #31ce57;
	}
	a {
		color: #d4d4d4;
	}
`

const ContactsWidget = () => {
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid size={3}>
          <Item>
            <Circle>
              <Link href={'mailto:n.ncctcr@gmail.com'} target='_blank' display={'flex'}>
                <EmailIcon fontSize={'medium'}/>
              </Link>
            </Circle>
            <Typography fontSize={14}>Gmail</Typography>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <Circle>
              <Link href={'https://www.linkedin.com/in/ncctcr/'} target='_blank' display={'flex'}>
                <LinkedInIcon fontSize={'medium'}/>
              </Link>
            </Circle>
            <Typography fontSize={14}>LinkedIn</Typography>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <Circle>
              <Link href={'https://t.me/ncctcr'} target='_blank' display={'flex'}>
                <TelegramIcon fontSize={'medium'}/>
              </Link>
            </Circle>
            <Typography fontSize={14}>Telegram</Typography>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <Circle>
              <Link href={'https://www.instagram.com/ncctcr'} target='_blank' display={'flex'}>
                <InstagramIcon fontSize={'medium'}/>
              </Link>
            </Circle>
            <Typography fontSize={14}>Instagram</Typography>
          </Item>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ContactsWidget;