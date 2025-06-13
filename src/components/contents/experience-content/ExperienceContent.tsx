import React, { useState } from 'react';
import Description from '../../shared/Description';
import ExperienceIcon from '../../../assets/icons/dock/experience.png';
import Company from '../../shared/Company';
import MultiSelect from '../../shared/MultiSelect';
import { TECHNOLOGIES } from '../../../constants';
import { Grid } from '@mui/material';
import { COMPANIES } from './constants';
import Wrapper from '../../shared/Wrapper';

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

      {COMPANIES.map((item, index) => (
        <Company
          key={index}
          startDate={item.startDate}
          endDate={item.endDate}
          logo={item.logo}
          position={item.position}
          site={item.site}
          name={item.name}
          type={item.type}
          location={item.location}
          filters={filters}
          skills={getSkills(item.skills)}
          list={item.list}
        />
      ))}
    </Wrapper>
  );
};

export default ExperienceContent;