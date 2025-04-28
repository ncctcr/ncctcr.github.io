import React from 'react';
import { Rnd } from 'react-rnd';
import DefaultWindow from './types/default-window';
import { useWindows } from '../../contexts/WindowContext';

const Windows = () => {
  const { state, setState, bringToFrontById, handleClose, handleResize } = useWindows();

  return (
    <>
      {state.windows.map((i) => (
        <Rnd
          key={i.id}
          dragHandleClassName={'window-header'}
          position={{ x: i.x || 0, y: i.y || 0 }}
          size={{ width: i.width || 450, height: i.height || 600 }}
          style={{ zIndex: i.zIndex }}
          minHeight={i.minHeight ? i.minHeight : 200}
          minWidth={i.minWidth ? i.minWidth : 300}
          onMouseDown={() => bringToFrontById(i.id)}
          onDragStop={(e, d) => {
            setState((prev) => ({
              ...prev,
              windows: prev.windows.map((w) =>
                w.id === i.id ? { ...w, x: d.x, y: d.y } : w
              ),
            }));
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setState((prev) => ({
              ...prev,
              windows: prev.windows.map((w) =>
                w.id === i.id
                  ? {
                    ...w,
                    width: parseInt(ref.style.width, 10),
                    height: parseInt(ref.style.height, 10),
                    x: position.x,
                    y: position.y,
                  }
                  : w
              ),
            }));
          }}
        >
          <DefaultWindow
            id={i.id || 123}
            title={i.title}
            children={i.content}
            onClose={handleClose}
            onResize={handleResize}
            styles={i.styles}
          />
        </Rnd>
      ))}
    </>
  );
};

export default Windows;