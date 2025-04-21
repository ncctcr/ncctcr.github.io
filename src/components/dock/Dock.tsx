import React, { FC } from 'react';
import styled from 'styled-components';
import SkillIcon from '../../assets/icons/dock/skills.png';
import ExperienceIcon from '../../assets/icons/dock/experience.png';
import EducatitonIcon from '../../assets/icons/dock/education.png';
import LicenceIcon from '../../assets/icons/dock/licence.png';
import ContactIcon from '../../assets/icons/dock/contact.png';
import PuzzleIcon from '../../assets/icons/dock/2048.png';
import { Fade, Tooltip } from '@mui/material';
import { WINDOW_NAMES } from '../../constants';
import { TypeWindow } from '../../interfaces';

const Wrapper = styled.div`
	position: absolute;
	bottom: 10px;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Bar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
  padding: 10px 4px;
	background: rgba(55, 55, 55, 0.29);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(113, 113, 113, 0.44);
  
  .icon {
    position: relative;
		cursor: pointer;
		padding: 0 8px;
  }
	img {
    border-radius: 10px;
		max-width: 50px;
		height: 100%;
		width: 100%;
	}
`

const Dot = styled.div`
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.57);
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: -4px;
`

const APPLICATIONS = [
  {
    name: WINDOW_NAMES['skills'],
    key: 'skills',
    icon: SkillIcon
  },
  {
    name: WINDOW_NAMES['experience'],
    key: 'experience',
    icon: ExperienceIcon
  },
  {
    name: WINDOW_NAMES['education'],
    key: 'education',
    icon: EducatitonIcon
  },
  {
    name: WINDOW_NAMES['licenses'],
    key: 'licenses',
    icon: LicenceIcon
  },
  {
    name: WINDOW_NAMES['contacts'],
    key: 'contacts',
    icon: ContactIcon
  },
  {
    name: WINDOW_NAMES['2048'],
    key: '2048',
    icon: PuzzleIcon
  },
]

type TypeProps = {
  data: TypeWindow[];
  onClick?: (key: string) => void;
}

const Dock: FC<TypeProps> = ({ data, onClick }) => {
  return (
    <Wrapper>
      <Bar>
        {APPLICATIONS.map((i, index) => (
          <Tooltip
            title={i.name}
            key={index}
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 0 }}
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(55, 55, 55, 0.29)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(113, 113, 113, 0.44)',
                  padding: '5px 15px',
                  fontSize: 14,
                  '& .MuiTooltip-arrow': {
                    color: 'rgb(55, 55, 55)',
                  },
                },
              },
              popper: {
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 10],
                    },
                  },
                ],
              },
            }}
          >
            <div className={'icon'}>
              <img
                src={i.icon}
                alt={i.name}
                onClick={() => onClick && onClick(i.key)}
              />
              {data.some((item) => item.key === i.key) && (
                <Dot />
              )}
            </div>
          </Tooltip>
        ))}
      </Bar>
    </Wrapper>
  );
};

export default Dock;