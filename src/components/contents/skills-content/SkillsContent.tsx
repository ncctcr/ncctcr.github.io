import React, { useState } from 'react';
import MainView from './components/MainView';
import SelectedView from './components/SelectedView';
import { SKILL_VIEWS } from './constants/views';
import styled from 'styled-components';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Buttons = styled.div`
  position: absolute;
  top: 6px;
  left: 75px;
  z-index: 3;
  display: flex;
  gap: 5px;
  button {
    min-width: unset;
    padding: 5px;
    color: gray;
  }
`

const SkillsContent = () => {
  const [selectedView, setSelectedView] = useState<string | null>(null);

  const handleGoBack = () => {
    setSelectedView(null);
  }

  return (
    <>
      <Buttons>
        <Button disabled={selectedView === null} onClick={handleGoBack}>
          <ArrowBackIosNewIcon />
        </Button>
        <Button disabled>
          <ArrowForwardIosIcon />
        </Button>
      </Buttons>
      {selectedView ? (
        <SelectedView view={selectedView ? SKILL_VIEWS[selectedView] : null}/>
      ) : (
        <MainView onClick={setSelectedView} />
      )}
    </>
  );
};

export default SkillsContent;