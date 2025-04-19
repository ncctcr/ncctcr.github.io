import React, { Dispatch, FC, SetStateAction } from 'react';
import { WindowsState } from '../../interfaces';
import { Rnd } from 'react-rnd';
import DefaultWindow from './types/default-window';

type TypeProps = {
  data: WindowsState;
  onSetData: Dispatch<SetStateAction<WindowsState>>
}

const Windows: FC<TypeProps> = ({
  data,
  onSetData
}) => {
  const resizeWindow = (id: number) => {
    onSetData((prev) => ({
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
  }

  const closeWindow = (id: number) => {
    onSetData((prev) => ({
      ...prev,
      windows: prev.windows.filter((window) => window.id !== id)
    }));
  }

  const bringToFront = (id: number) => {
    onSetData((prev) => ({
      highestZIndex: prev.highestZIndex + 1,
      windows: prev.windows.map((win) =>
        win.id === id ? { ...win, zIndex: prev.highestZIndex + 1 } : win
      )
    }))
  }

  return (
    <>
      {data.windows.map((i) => (
        <Rnd
          key={i.id}
          dragHandleClassName={'window-header'}
          position={{ x: i.x, y: i.y }}
          size={{ width: i.width, height: i.height }}
          style={{ zIndex: i.zIndex }}
          minHeight={i.minHeight ? i.minHeight : 200}
          minWidth={i.minWidth ? i.minWidth : 300}
          onMouseDown={() => bringToFront(i.id)}
          onDragStop={(e, d) => {
            onSetData((prev) => ({
              ...prev,
              windows: prev.windows.map((w) =>
                w.id === i.id ? { ...w, x: d.x, y: d.y } : w
              ),
            }));
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            onSetData((prev) => ({
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
            id={i.id}
            title={i.title}
            children={i.content}
            onClose={closeWindow}
            onResize={resizeWindow}
            styles={i.styles}
          />
        </Rnd>
      ))}
    </>
  );
};

export default Windows;