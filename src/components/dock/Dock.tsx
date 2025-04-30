import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import SkillIcon from '../../assets/icons/dock/skills.png';
import ExperienceIcon from '../../assets/icons/dock/experience.png';
import EducatitonIcon from '../../assets/icons/dock/education.png';
import LicenceIcon from '../../assets/icons/dock/licence.png';
import ContactIcon from '../../assets/icons/dock/contact.png';
import PuzzleIcon from '../../assets/icons/dock/2048.png';
import BlackjackIcon from '../../assets/icons/dock/blackjack.png';
import { Fade, Tooltip } from '@mui/material';
import { WINDOW_NAMES } from '../../constants';
import { useWindows } from '../../contexts/WindowContext';
import SkillsContent from '../contents/skills-content/SkillsContent';
import ExperienceContent from '../contents/experience-content/ExperienceContent';
import EducationContent from '../contents/EducationContent';
import LicensesContent from '../contents/LicensesContent';
import ContactsContent from '../contents/ContactsContent';
import PuzzleContent from '../contents/puzzle-content/PuzzleContent';
import { TypeWindowSettings, TypeWindowStyles } from '../../interfaces';
import BlackjackContent from '../contents/blackjack-content/BlackjackContent';

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
  padding: 10px 4px 5px;
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
    aspect-ratio: 1 / 1;
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
	bottom: -2px;
`

type TypeApplication = {
  name: string;
  key: string;
  icon: string;
  content: ReactNode;
  styles?: TypeWindowStyles;
  settings?: TypeWindowSettings;
}

const APPLICATIONS: TypeApplication[] = [
  {
    name: WINDOW_NAMES['skills'],
    key: 'skills',
    icon: SkillIcon,
    content: <SkillsContent />,
    styles: {
      header: {
        height: '3rem'
      }
    }
  },
  {
    name: WINDOW_NAMES['experience'],
    key: 'experience',
    icon: ExperienceIcon,
    content: <ExperienceContent />,
  },
  {
    name: WINDOW_NAMES['education'],
    key: 'education',
    icon: EducatitonIcon,
    content: <EducationContent />,
  },
  {
    name: WINDOW_NAMES['licenses'],
    key: 'licenses',
    icon: LicenceIcon,
    content: <LicensesContent />,
  },
  {
    name: WINDOW_NAMES['contacts'],
    key: 'contacts',
    icon: ContactIcon,
    content: <ContactsContent />,
  },
  {
    name: WINDOW_NAMES['2048'],
    key: '2048',
    icon: PuzzleIcon,
    content: <PuzzleContent />,
    settings: {
      width: 400,
      minWidth: 400,
      height: 650,
      minHeight: 650
    }
  },
  {
    name: WINDOW_NAMES['blackjack'],
    key: 'blackjack',
    icon: BlackjackIcon,
    content: <BlackjackContent />,
  },
]

const Dock = () => {
  const { state, createWindow, bringToFrontByKey } = useWindows();

  const handleOpen = (data: TypeApplication) => {
    if (state.windows.some((i) => i.key === data.key)) {
      bringToFrontByKey(data.key);
    } else {
      createWindow({
        key: data.key,
        title: data.name,
        content: data.content,
        styles: data.styles ? data.styles : {},
        width: data.settings?.width || 450,
        height: data.settings?.height || 600,
        minWidth: data.settings?.minWidth || 450,
        minHeight: data.settings?.minHeight || 600,
      })
    }
  }

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
                onClick={() => handleOpen(i)}
              />
              {state.windows.some((item) => item.key === i.key) && (
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