import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Description from '../shared/Description';
import ExperienceIcon from '../../assets/icons/dock/experience.png';
import Company from '../shared/Company';
import PowerPlayLogo from '../../assets/images/companies/powerplay.png';
import HandiscoverLogo from '../../assets/images/companies/haccess.png';
import EpamLogo from '../../assets/images/companies/epam.png';
import MultiSelect from '../shared/MultiSelect';
import { TECHNOLOGIES } from '../../constants';
import { Grid } from '@mui/material';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 20px;
`

const getSkills = (skills: string[]) => {
  return TECHNOLOGIES.filter((i) => skills.includes(i.key))
}

const ExperienceContent = () => {
  const [filters, setFilters] = useState<{skills: string[]}>({
    skills: []
  })

  const handleSelect = (values: string[]) => {
    setFilters((prev) => ({
      ...prev,
      skills: values
    }))
  }

  return (
    <Wrapper>
      <Description title={'Experience'} icon={ExperienceIcon}>
        This view describes the experience of working in different companies
      </Description>
      <Grid container spacing={2}>
        <Grid size={6}>
          <MultiSelect label={'Skills'} data={TECHNOLOGIES} onSelect={handleSelect}/>
        </Grid>
        <Grid size={6}/>
      </Grid>
      <Company
        date={'Jun 2024 - Present'}
        logo={PowerPlayLogo}
        position={'Frontend Developer'}
        site={'https://powerplay.com/'}
        name={'PowerPlay'}
        type={'Full-time'}
        location={'Remote'}
        filters={filters}
        skills={getSkills([
          'reactjs',
          'nextjs',
          'typescript',
          'javascript',
          'html5',
          'css',
          'git',
          'react_hooks',
          'functional_programming',
          'rest_api',
          'json',
          'graphql',
        ])}
      />
      <Company
        date={'May 2022 - Jun 2024 (2y 2m)'}
        logo={HandiscoverLogo}
        name={'Handiscover'}
        site={'https://www.haccess.io/'}
        position={'Frontend Developer'}
        type={'Full-time'}
        location={'Remote'}
        filters={filters}
        skills={getSkills([
          'reactjs',
          'javascript',
          'typescript',
          'css',
          'react_hooks',
          'rest_api',
          'functional_programming',
          'git',
          'redux',
          'html5',
          'json',
        ])}
      >
        <ul>
          <li>Consistently met my short and long-term targets.</li>
          <li>Proactively participated in meetings and helped create new practices.</li>
          <li>Pitched ideas on how to improve performance and efficiency.</li>
          <li>Helped management to identify workflow issues and find solutions.</li>
          <li>Development of several related projects where the first project is an admin panel and the second project
            is a client-side application.
          </li>
          <li>Development of pages/modules based on Figma mockups.</li>
          <li>Development of adaptive pages/modules.</li>
          <li>Implementation of new features into old code, refactoring, debugging, and bug fixing.</li>
          <li>Use/customization of the MaterialUI library for future pages.</li>
        </ul>
      </Company>
      <Company
        date={'Jan 2022 - May 2022 (5m)'}
        logo={EpamLogo}
        name={'EPAM'}
        site={'https://www.epam.com/'}
        position={'Frontend Developer'}
        type={'Full-time'}
        location={'Remote'}
        filters={filters}
        skills={getSkills([
          'reactjs',
          'javascript',
          'typescript',
          'css',
          'react_hooks',
          'rest_api',
          'functional_programming',
          'git',
          'redux',
          'html5',
          'json',
        ])}
      >
        <ul>
          <li>Сode debugging/refactoring to improve readability and efficiency.</li>
          <li>Developing new features and redesigning existing features to improve user experience.</li>
          <li>Writing quality tests and actively participating in the code review process.</li>
          <li>Applied agile development principles to ensure effective teamwork and timely delivery of results.</li>
          <li>Used Git and Redux version control system to effectively manage the state of the application</li>
        </ul>
      </Company>
      <Company
        date={'Apr 2021 - Dec 2021 (9m)'}
        name={'Forex Tester Software'}
        site={'https://forextester.com/'}
        position={'Frontend Developer'}
        type={'Full-time'}
        location={'Hybrid'}
        filters={filters}
        skills={getSkills([
          'rest_api',
          'javascript',
          'functional_programming',
          'css',
          'html5',
          'agile_development',
          'react_hooks',
          'git',
          'redux',
          'reactjs',
          'html',
          'json',
          'oop',
          'jquery',
          'typescript',
          'tdd',
        ])}
      >
        <ul>
          <li>Implemented an online chat assistant for websites using an iframe.</li>
          <li>Development of pages/modules based on Figma mockups.</li>
          <li>Development of adaptive pages/modules.</li>
          <li>Сode reviews</li>
          <li>Implementation of new features into old code, refactoring, and debugging.</li>
        </ul>
      </Company>
      <Company
        date={'May 2019 - Mar 2021 (1y 11m)'}
        name={'BeHealthy.AI'}
        position={'Frontend & Backend Developer'}
        type={'Full-time'}
        location={'On-Site'}
        filters={filters}
        skills={getSkills([
          'rest_api',
          'django',
          'javascript',
          'functional_programming',
          'css',
          'html5',
          'celery',
          'agile_development',
          'react_hooks',
          'git',
          'redux',
          'vuejs',
          'json',
          'oop',
          'jquery',
          'rabbitmq',
          'python',
          'typescript',
          'angular',
          'tdd',
        ])}
      >
        <ul>
          <li>Developed a questionnaire page with dynamically pulling up new next questions from the BE side.</li>
          <li>Development of pages/modules based on Figma mockups.</li>
          <li>Development of adaptive pages/modules.</li>
          <li>Implementation of new features into old code, refactoring, and debugging.</li>
          <li>Development of endpoints on Django, development of components on VueJS.</li>
          <li>Сode reviews</li>
          <li>Writing tests</li>
        </ul>
      </Company>
    </Wrapper>
  );
};

export default ExperienceContent;