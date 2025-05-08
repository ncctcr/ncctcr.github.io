import React, { ReactNode } from 'react';
import styled from 'styled-components';
import SkillIcon from '../../assets/icons/dock/skills.png';
import ExperienceIcon from '../../assets/icons/dock/experience.png';
import EducatitonIcon from '../../assets/icons/dock/education.png';
import LicenceIcon from '../../assets/icons/dock/licence.png';
import ContactIcon from '../../assets/icons/dock/contact.png';
import AboutMeIcon from '../../assets/icons/dock/about-me.png';
import SettingsIcon from '../../assets/icons/dock/settings.png';
import GamesIcon from '../../assets/icons/dock/games.png';
import { Fade, Tooltip } from '@mui/material';
import { useWindows } from '../../contexts/WindowContext';
import SkillsContent from '../contents/skills-content/SkillsContent';
import ExperienceContent from '../contents/experience-content/ExperienceContent';
import EducationContent from '../contents/EducationContent';
import LicensesContent from '../contents/LicensesContent';
import ContactsContent from '../contents/ContactsContent';
import { TypeWindowSettings, TypeWindowStyles } from '../../interfaces';
import AboutMeContent from '../contents/AboutMeContent';
import SettingsContent from '../contents/settings-content/SettingsContent';
import GamesContent from '../contents/games-content/GamesContent';

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


// export const WINDOW_NAMES: {[key: string]: string} = {
//   skills: 'Skills',
//   experience: 'Experience',
//   education: 'Education',
//   licenses: 'Licenses & Certification',
//   contacts: 'Contacts',
//   2048: '2048',
//   blackjack: 'Blackjack',
//   about_me: 'About Me',
// }

const APPLICATIONS: TypeApplication[] = [
  {
    name: 'Skills',
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
    name: 'Experience',
    key: 'experience',
    icon: ExperienceIcon,
    content: <ExperienceContent />,
  },
  {
    name: 'Education',
    key: 'education',
    icon: EducatitonIcon,
    content: <EducationContent />,
  },
  {
    name: 'Licenses & Certification',
    key: 'licenses',
    icon: LicenceIcon,
    content: <LicensesContent />,
  },
  {
    name: 'Contacts',
    key: 'contacts',
    icon: ContactIcon,
    content: <ContactsContent />,
  },
  {
    name:'About me',
    key: 'about_me',
    icon: AboutMeIcon,
    content: <AboutMeContent />,
    styles: {
      header: {
        background: 'transparent'
      }
    }
  },
  {
    name: 'Games',
    key: 'games',
    icon: GamesIcon,
    content: <GamesContent />,
  },
  {
    name: '',
    key: 'settings',
    icon: SettingsIcon,
    content: <SettingsContent />,
    styles: {
      header: {
        background: 'transparent',
      },
      body: {
        background: '#1e1e1ed9',
        backdropFilter: 'blur(20px)'
      }
    },
    settings: {
      width: 800,
    }
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