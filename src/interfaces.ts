import { CSSProperties, ReactNode } from 'react';

export type TypeWindowSettings = {
  x?: number,
  y?: number,
  width?: number,
  height?: number,
  minHeight?: number,
  minWidth?: number,
}

export type TypeWindowStyles = {
  header?: CSSProperties & {
    hideCloseButton?: boolean;
    hideHideButton?: boolean;
    hideResizeButton?: boolean;
  }
  body?: CSSProperties
}

export type TypeWindow = {
  x: number,
  y: number,
  width: number,
  height: number,
  minHeight?: number,
  minWidth?: number,
  id: number,
  title: string,
  content: ReactNode
  key: string;
  zIndex: number;
  type: 'window' | 'sticker';
  styles?: TypeWindowStyles;
}

export interface WindowsState {
  highestZIndex: number,
  windows: TypeWindow[]
}