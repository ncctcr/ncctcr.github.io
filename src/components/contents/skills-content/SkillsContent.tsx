import React, { useState } from 'react';
import MainView from './components/MainView';
import SelectedView from './components/SelectedView';
import { SKILL_VIEWS } from './constants/views';

const SkillsContent = () => {
  const [selectedView, setSelectedView] = useState<string | null>(null);

  const handleGoBack = () => {
    setSelectedView(null);
  }

  return (
    <>
      {selectedView ? (
        <SelectedView view={selectedView ? SKILL_VIEWS[selectedView] : null}/>
      ) : (
        <MainView onClick={setSelectedView} />
      )}
    </>
  );
};

export default SkillsContent;