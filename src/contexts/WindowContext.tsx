import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TypeWindow, WindowsState } from '../interfaces';
import StickerContent from '../components/contents/StickerContent';

const INIT_STATE = {
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
    }
  ]
}

interface WindowsContextType {
  state: WindowsState;
  setState: React.Dispatch<React.SetStateAction<WindowsState>>;
  createWindow: (window: TypeWindow) => void;
  handleClose: (id: number) => void;
  handleResize: (id: number) => void;
  bringToFrontById: (id: number | undefined) => void;
  bringToFrontByKey: (id: string | undefined) => void;
  updateWindowPosition: (id: number, x: number, y: number) => void;
  updateWindowSize: (id: number, width: number, height: number, x: number, y: number) => void;
}

const WindowsContext = createContext<WindowsContextType | undefined>(undefined);

export const WindowsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<WindowsState>(INIT_STATE);

  const createWindow = (window: TypeWindow) => {
    const offset = state.windows.length * 20 + 100;
    const newId = Date.now();
    setState((prev) => ({
      highestZIndex: prev.highestZIndex + 1,
      windows: [
        ...prev.windows,
        {
          ...window,
          id: newId,
          x: offset,
          y: offset,
          width: window.width || 450,
          height: window.height || 600,
          zIndex: prev.highestZIndex + 1,
        },
      ]
    }));
  }

  const handleClose = (id: number) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.filter((window) => window.id !== id)
    }));
  };

  const handleResize = (id: number) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.map((w) =>
        w.id === id
          ? {
            ...w,
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight - 80,
          }
          : w
      )
    }));
  };

  const bringToFrontById = (id: number | undefined) => {
    if (!id) return;
    setState((prev) => ({
      highestZIndex: prev.highestZIndex + 1,
      windows: prev.windows.map((win) =>
        win.id === id ? { ...win, zIndex: prev.highestZIndex + 1 } : win
      )
    }));
  };


  const bringToFrontByKey = (key: string | undefined) => {
    if (!key) return;
    setState((prev) => ({
      highestZIndex: prev.highestZIndex + 1,
      windows: prev.windows.map((win) =>
        win.key === key ? { ...win, zIndex: prev.highestZIndex + 1 } : win
      )
    }));
  };

  const updateWindowPosition = (id: number, x: number, y: number) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.map((w) =>
        w.id === id ? { ...w, x, y } : w
      ),
    }));
  };

  const updateWindowSize = (id: number, width: number, height: number, x: number, y: number) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.map((w) =>
        w.id === id
          ? {
            ...w,
            width,
            height,
            x,
            y,
          }
          : w
      ),
    }));
  };

  const value = {
    state,
    setState,
    createWindow,
    handleClose,
    handleResize,
    bringToFrontById,
    bringToFrontByKey,
    updateWindowPosition,
    updateWindowSize
  };

  return (
    <WindowsContext.Provider value={value}>
      {children}
    </WindowsContext.Provider>
  );
};

export const useWindows = () => {
  const context = useContext(WindowsContext);
  if (context === undefined) {
    throw new Error('useWindows must be used within a WindowsProvider');
  }
  return context;
};