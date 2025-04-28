import React from 'react';
import './App.css';
import Windows from './components/windows/Windows';
import Widgets from './components/widgets/Widgets';
import Dock from './components/dock/Dock';

function App() {
  return (
    <div>
      <Widgets />
      <Windows />
      <Dock />
    </div>
  );
}

export default App;
