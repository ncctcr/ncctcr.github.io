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

type TypeProps = {
  date: string;
  logo?: string;
  name: string;
  position: string;
  type: 'Full-time' | 'Part-time' | 'Freelance';
  location: 'Remote' | 'Hybrid' | 'On-Site';
  children?: ReactNode;
  skills?: { name: string, key: string }[];
  filters?: {skills: string[]};
  site?: string;
}

const Company: FC<TypeProps> = ({
  date,
  logo,
  name,
  position,
  type,
  location,
  skills,
  children,
  filters,
  site,
}) => {
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
          <Typography fontSize={12}>{date}</Typography>
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