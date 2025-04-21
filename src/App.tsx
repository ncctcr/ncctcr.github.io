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
import { TypeWindowSettings, TypeWindowStyles, WindowsState } from './interfaces';
import StickerContent from './components/contents/StickerContent';
import PuzzleGameContent from './components/contents/puzzle-game-content/PuzzleGameContent';

type TypeView = {
  [key: string]: {
    content: React.ReactNode
    styles?: TypeWindowStyles,
    settings?: TypeWindowSettings
  }
}

const VIEWS: TypeView = {
  skills: {
    content: <SkillsContent />,
    styles: {
      header: {
        height: '3rem'
      }
    }
  },
  experience: {
    content: <ExperienceContent />
  },
  education: {
    content: <EducationContent />
  },
  licenses: {
    content: <LicensesContent />
  },
  contacts: {
    content: <ContactsContent />
  },
  sticker: {
    content: <StickerContent />,
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
    },
  },
  2048: {
    content: <PuzzleGameContent />,
    settings: {
      minHeight: 671,
      minWidth: 523
    }
  }
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
        content: VIEWS['sticker'].content,
        styles: VIEWS['sticker'].styles,
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
            minWidth: VIEWS[key]?.settings?.minWidth || 450,
            minHeight: VIEWS[key]?.settings?.minHeight || 600,
            id: newId,
            title: WINDOW_NAMES[key],
            zIndex: prev.highestZIndex + 1,
            key: key,
            type: 'window',
            content: VIEWS[key] ? VIEWS[key].content : '',
            styles: VIEWS[key]?.styles,
          },
        ]
      }));
    }
  }

  return (
    <div>
      <Widgets />
      <Windows data={state} onSetData={setState} />
      <Dock data={state.windows} onClick={handleOpen} />
    </div>
  );
}

export default App;
