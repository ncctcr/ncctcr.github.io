import React, { FC, ReactNode } from 'react';
import Block from './Block';
import { Avatar, Box, Chip, Divider as MuiDivider, Typography } from '@mui/material';
import EmptyLogo from '../../assets/images/companies/empty.png';
import styled from 'styled-components';

const Divider = styled(MuiDivider)`
  border-color: rgba(113, 113, 113, 0.44) !important;
`

const Body = styled(Box)`
  font-size: 14px;
`

const formatDate = (dateStr: string): string => {
  if (dateStr === 'Present') return 'Present';

  const date = new Date(dateStr);
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
};

const calculateExperience = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);

  const months = (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years}y ${remainingMonths}m`;
  } else if (years > 0) {
    return `${years}y`;
  } else {
    return `${remainingMonths}m`;
  }
};


type TypeProps = {
  startDate: string;
  endDate: string;
  logo?: string;
  name: string;
  position: string;
  type: string;
  location: string;
  list?: string[];
  children?: string | ReactNode;
  skills?: { name: string, key: string }[];
  filters?: {skills: string[]};
  site?: string;
}

const Company: FC<TypeProps> = ({
  startDate,
  endDate,
  logo,
  name,
  position,
  type,
  location,
  skills,
  children,
  filters,
  site,
  list
}) => {
  const experienceDuration = calculateExperience(startDate, endDate);
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);
  const displayDate = `${formattedStartDate} - ${formattedEndDate} (${experienceDuration})`;

  return (
    <Block>
      <Box display={'flex'} gap={1} padding={1}>
        <Box>
          <Avatar src={logo ? logo : EmptyLogo} alt={name}/>
        </Box>
        <Box>
          <Typography fontSize={14} fontWeight={'bold'}>{position}</Typography>
          <Box display={'flex'} gap={0.5}>
            <Typography
              fontSize={12}
              fontWeight={'bold'}
              component={site ? 'a' : 'p'}
              href={site}
              color={'#dddddd'}
            >{name}</Typography>
            <Typography fontSize={12} fontWeight={'bold'}>-</Typography>
            <Typography fontSize={12} fontWeight={'bold'}>{type}</Typography>
          </Box>
          <Typography fontSize={12}>{displayDate}</Typography>
          <Typography fontSize={12}>{location}</Typography>
        </Box>
      </Box>
      {skills && (
        <>
          <Divider/>
          <Box padding={1}>
            {skills.map((skill) => (
              <Chip
                label={skill.name}
                variant={filters && filters.skills.includes(skill.key) ? 'filled' : 'outlined'}
                sx={{mr: 0.5, mb: 0.5}}
              />
            ))}
          </Box>
        </>
      )}

      {list && (
        <>
          <Divider/>
          <Body padding={1}>
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Body>
        </>
      )}

      {children && (
        <>
          <Divider/>
          <Body padding={1}>
            {children}
          </Body>
        </>
      )}
    </Block>
  );
};

export default Company;