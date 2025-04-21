import React from 'react';
import styled from 'styled-components';
import Description from '../shared/Description';
import ContactIcon from '../../assets/icons/dock/contact.png';
import { Box, Grid, Link } from '@mui/material';
import Block from '../shared/Block';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 20px;
	margin-bottom: 40px;
`

const ContactsContent = () => {
  return (
    <Wrapper>
      <Description title={'Contacts'} icon={ContactIcon}>
        If you have any interest in contacting me for any suggestions, or just browsing through my social media, or you're just browsing this tab, then I'll just leave my links here.
      </Description>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Block>
            <Box display={'flex'} alignItems={'center'} p={1} gap={1}>
              <EmailIcon fontSize={'large'}/>
              <Link href={'mailto:n.ncctcr@gmail.com'}>n.ncctcr</Link>
            </Box>
        </Block>
      </Grid>
        <Grid size={6}>
          <Block>
            <Box display={'flex'} alignItems={'center'} p={1} gap={1}>
              <LinkedInIcon fontSize={'large'}/>
              <Link href={'https://www.linkedin.com/in/ncctcr/'} target={'_blank'}>@ncctcr</Link>
            </Box>
          </Block>
        </Grid>
        <Grid size={6}>
          <Block>
            <Box display={'flex'} alignItems={'center'} p={1} gap={1}>
              <TelegramIcon fontSize={'large'}/>
              <Link href={'https://t.me/ncctcr'} target={'_blank'}>@ncctcr</Link>
            </Box>
          </Block>
        </Grid>
        <Grid size={6}>
          <Block>
            <Box display={'flex'} alignItems={'center'} p={1} gap={1}>
              <InstagramIcon fontSize={'large'}/>
              <Link href={'https://www.instagram.com/ncctcr'} target={'_blank'}>@ncctcr</Link>
            </Box>
          </Block>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ContactsContent;