import React, { Fragment } from 'react';
import { Avatar, Box, Grid, Rating, Typography } from '@mui/material';
import AvatarImg from '../../assets/images/avatar.jpg'
import Block from '../shared/Block';
import Wrapper from '../shared/Wrapper';

const FONT_SIZE = 14;

const ABOUT_CONTENT = [
  'I am a frontend developer who specializes in ReactJS. I have a total of 5+ years of experience working with web applications and possess deep skills in creating modern web applications and user interface components using ReactJS and related technologies.',
  'I can easily develop and customize components with consideration for best practices and ensure high performance, scalability, and accessibility of web applications. Proponent of semantically correct pages.',
  'I am also proficient in using Redux to manage application state and TypeScript to provide type safety and simplify development.'
]

const JOURNEY_CONTENT = [
  'My path into the IT industry began back when I was living in Kherson. At the time, I was finishing my studies at a technical college specializing in instrumentation. I was at a crossroads: either continue developing as a radio technology specialist or try something entirely new. My brother was already working as a developer and encouraged me to build my own website. I had very little understanding of how everything worked, but to my surprise, I managed to bring my first website idea to life without much difficulty.',
  'That experience sparked my curiosity, and I went on to experiment with Java, Python, and other programming languages. I found myself genuinely enjoying the process — and more importantly, it felt natural to me. That’s when I made the decision to pursue a degree in Software Engineering.',
  'I spent four great years studying at Kherson State University. I gained a lot of foundational knowledge, but I knew it wouldn’t be enough to confidently enter the IT job market. That’s why I actively worked on personal projects in parallel with my studies.',
  'During my third year, I got my first job in tech. I still remember getting a call from my first manager during a lecture. He asked, “Hey, want to try a test task?” I said yes. It turned out to be something completely new to me, and it really made me think hard. After successfully completing it, I got my first role — and with it, my entry into the IT industry.'
]

const LANGUAGES = [
  { name: 'English', level: 4 },
  { name: 'Ukrainian', level: 5 },
  { name: 'Russian', level: 5 }
]

const AboutMeContent = () => {
  return (
    <Wrapper>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Avatar src={AvatarImg} sx={{ width: 100, height: 100 }} alt={'Avatar'}/>
        <Typography fontSize={24} fontWeight={'bold'} textAlign={'center'}>Mykola Nesterchuk</Typography>
        <Typography>n.ncctcr@gmail.com</Typography>
      </Box>
      <Block title={'About'}>
        <Box display={'flex'} flexDirection={'column'} p={2} gap={2}>
          {ABOUT_CONTENT.map((item, index) => (
            <Typography fontSize={FONT_SIZE} key={index}>{item}</Typography>
          ))}
        </Box>
      </Block>
      <Block title={'My Journey into the IT Industry'}>
        <Box display={'flex'} flexDirection={'column'} p={2} gap={2}>
          {JOURNEY_CONTENT.map((item, index) => (
            <Typography fontSize={FONT_SIZE} key={index}>{item}</Typography>
          ))}
        </Box>
      </Block>
      <Grid container spacing={2} width={'100%'}>
        <Grid size={12}>
          <Block title={'Languages'}>
            <Box p={2}>
              <Grid container spacing={2}>
                {LANGUAGES.map((item, index) => (
                  <Fragment key={index}>
                    <Grid size={6}>
                      <Typography fontSize={FONT_SIZE}>{item.name}</Typography>
                    </Grid>
                    <Grid size={6}>
                      <Rating value={item.level} readOnly />
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
            </Box>
          </Block>
        </Grid>
        <Grid size={12}>
          <Block title={'Location'}>
            <Box p={2}>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Typography fontSize={FONT_SIZE}>Country</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography fontSize={FONT_SIZE}>Bulgaria</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography fontSize={FONT_SIZE}>City</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography fontSize={FONT_SIZE}>Plovdiv</Typography>
                </Grid>
              </Grid>
            </Box>
          </Block>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AboutMeContent;