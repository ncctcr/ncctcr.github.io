import React, { useState } from 'react';
import './App.css';
import Windows from './components/windows/Windows';
import Widgets from './components/widgets/Widgets';
import Dock from './components/dock/Dock';
import { WINDOW_NAMES } from './constants';
import SkillsContent from './components/contents/skills-content/SkillsContent';
import ExperienceContent from './components/contents/ExperienceContent';
import EducationContent from './components/contents/EducationContent';
import LicensesContent from './components/contents/LicensesContent';
import ContactsContent from './components/contents/ContactsContent';
import { WindowsState } from './interfaces';
import StickerContent from './components/contents/StickerContent';
import PuzzleGameContent from './components/contents/puzzle-game-content/PuzzleGameContent';

const CONTENTS: {[key: string]: React.ReactNode} = {
  skills: <SkillsContent />,
  experience: <ExperienceContent />,
  education: <EducationContent />,
  licenses: <LicensesContent />,
  contacts: <ContactsContent />,
  sticker: <StickerContent />,
  2048: <PuzzleGameContent />
}

function App() {
  const [state, setState] = useState<WindowsState>({
    highestZIndex: 1,
    windows: [
      {
        id: Date.now(),
        x: 20,
        y: 20,
        width: 300,
        height: 240,
        title: '',
        zIndex: 1,
        key: 'sticker',
        type: 'sticker',
        content: CONTENTS['sticker'],
        styles: {
          header: {
            background: 'transparent',
            hideResizeButton: true,
            hideHideButton: true
          },
          body: {
            background: '#fdf49c',
            color: '#000000',
            borderRadius: '0',
          }
        }
      }
    ]
  })

  const handleOpen = (key: string) => {
    if (state.windows.some((i) => i.key === key)) {
      setState((prev) => ({
        highestZIndex: prev.highestZIndex + 1,
        windows: prev.windows.map((win) =>
          win.key === key ? { ...win, zIndex: prev.highestZIndex + 1 } : win
        )
      }))
    } else {
      const offset = state.windows.length * 20 + 100
      const newId = Date.now()
      setState((prev) => ({
        highestZIndex: prev.highestZIndex + 1,
        windows: [
          ...prev.windows,
          {
            x: offset,
            y: offset,
            width: 450,
            height: 600,
            minWidth: 400,
            minHeight: 400,
            id: newId,
            title: WINDOW_NAMES[key],
            zIndex: prev.highestZIndex + 1,
            key: key,
            type: 'window',
            content: CONTENTS[key] ? CONTENTS[key] : '',
          },
        ]
      }));
    }
  }

  return (
    <div>
      <Windows data={state} onSetData={setState} />
      <Widgets />
      <Dock onClick={handleOpen} />
    </div>
  );
}

export default App;
