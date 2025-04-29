import React from 'react';
import Widgets from '../widgets/Widgets';
import Windows from '../windows/Windows';
import Dock from '../dock/Dock';

const DesktopView = () => {
  return (
    <div>
      <Widgets />
      <Windows />
      <Dock />
    </div>
  );
};

export default DesktopView;