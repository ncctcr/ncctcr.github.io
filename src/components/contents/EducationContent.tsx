import React from 'react';
import styled from 'styled-components';
import Block from '../shared/Block';
import { Box, Grid, Typography } from '@mui/material';
import Description from '../shared/Description';
import ExperienceIcon from '../../assets/icons/dock/experience.png';
import EducatitonIcon from '../../assets/icons/dock/education.png';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 20px;
	margin-bottom: 40px;
`

const Row = (props: {name: string, value: string}) => {
  return (
    <>
      <Grid size={6}>
          <Typography fontSize={14}>{props.name}</Typography>
      </Grid>
      <Grid size={6}>
          <Typography fontSize={14}>{props.value}</Typography>
      </Grid>
    </>
  )
}

const EducationContent = () => {
  return (
    <Wrapper>
      <Description title={'Education'} icon={EducatitonIcon}>
        Here you can see my diplomas. On personal request I can send the originals to your e-mail address
      </Description>
      <Block title={'Bachelor\'s Diploma'} brackets={'B20 184726'}>
        <Box p={2}>
          <Grid container spacing={2}>
            <Row name={'Fullname'} value={'Nesterchuk Mykola'} />
            <Row name={'Date of birth'} value={'19.12.1996'} />
            <Row name={'Educational Institution'} value={'Kherson State University'} />
            <Row name={'Degree'} value={'Bachelor\'s'} />
            <Row name={'Date of issue'} value={'30.06.2020'} />
            <Row name={'Date of graduation'} value={'30.06.2020'} />
            <Row name={'Programme Subject Area'} value={'Software engineering'} />
            <Row name={'Educational Programme'} value={'Software engineering'} />
            <Row name={'Rector'} value={'Oleksandr Spivakovskiy'} />
            <Row name={'Name of awarding institution'} value={'Kherson State University'} />
          </Grid>
        </Box>
      </Block>

      <Block title={'Junior Specialist Diploma'} brackets={'E16 041280'}>
        <Box p={2}>
          <Grid container spacing={2}>
            <Row name={'Fullname'} value={'Nesterchuk Mykola'} />
            <Row name={'Date of birth'} value={'19.12.1996'} />
            <Row name={'Educational Institution'} value={'Novokakhovsʹkyy College of Instrument Engineering'} />
            <Row name={'Date of issue'} value={'01.07.2016'} />
            <Row name={'Date of graduation'} value={'01.07.2016'} />
            <Row name={'Programme Subject Area'} value={'Design, production and maintenance of radio-technical devices'} />
            <Row name={'Professional Qualification'} value={'Junior specialist radio engineering technician'} />
            <Row name={'Director'} value={'Glazunova Larysa Ivanivna'} />
            <Row name={'Name of awarding institution'} value={'Novokakhovsʹkyy College of Instrument Engineering'} />
          </Grid>
        </Box>
      </Block>

    </Wrapper>
  );
};

export default EducationContent;