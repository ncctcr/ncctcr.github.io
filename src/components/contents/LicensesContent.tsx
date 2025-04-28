import React from 'react';
import styled from 'styled-components';
import Description from '../shared/Description';
import LicenceIcon from '../../assets/icons/dock/licence.png';
import HackathonImg from '../../assets/images/certificates/covid-challenge-hackathon.png';
import LearningImg from '../../assets/images/certificates/learning-typescript.png';
import ReactImg from '../../assets/images/certificates/react-using-typescript.png';
import { shortenText } from '../../functions';
import { Box } from '@mui/material';
import { useWindows } from '../../contexts/WindowContext';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 20px;
	margin-bottom: 40px;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px 0;
    border-radius: 4px;
  }
  img {
    width: 80px;
    object-fit: contain;
  }
  p { 
    margin: 0;
    text-align: center;
  }
  span {
    font-size: 12px;
    padding: 5px;
		border-radius: 4px;
  }
`

const IMAGES = [
  {
    src: HackathonImg,
    name: 'covid-challenge-hackathon.png'
  },
  {
    src: LearningImg,
    name: 'learning-typescript.png'
  },
  {
    src: ReactImg,
    name: 'react-using-typescript.png'
  },
]

const LicensesContent = () => {
  const {state, createWindow, bringToFrontByKey} = useWindows();

  const handleOpen = (item: any) => {
    if (state.windows.some((i) => i.key === item.name)) {
      bringToFrontByKey(item.name);
    } else {
      createWindow({
        key: item.name,
        title: item.name,
        content: <img src={item.src} alt={item.name} style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}/>,
        height: 550,
        width: 700
      })
    }
  }


  return (
    <Wrapper>
      <Description title={'Licenses & Сertification'} icon={LicenceIcon}>
        It may be important for someone to look at my certificates, but remember, the number of certificates doesn't define the skills and expertise of a developer. 😅 Practical experience, problem-solving abilities, and continuous learning are equally important factors contributing to one's proficiency as a developer.
      </Description>
      <Box display={'flex'} gap={2}>
        {IMAGES.map((image, index) => (
          <Item key={index} onClick={() => handleOpen(image)}>
            <div>
              <img src={image.src} alt="Hackathon"/>
            </div>
            <p>
              <span>{shortenText(image.name)}</span>
            </p>
          </Item>
        ))}
      </Box>
    </Wrapper>
  );
};

export default LicensesContent;