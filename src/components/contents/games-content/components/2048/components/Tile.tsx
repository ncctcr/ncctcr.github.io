import { useEffect, useState } from "react";
import {
  containerWidthDesktop,
  containerWidthMobile,
  MERGE_ANIMATION_DURATION,
  tileCountPerDimension
} from '../constants/constants';
import usePreviousProps from '../hooks/usePrevProps';
import styles from '../styles/tile.module.css';

type TileProps = {
  position: [number, number];
  value: number;
}

export default function Tile({ position, value }: TileProps) {
  const [scale, setScale] = useState(1);
  const previousValue = usePreviousProps<number>(value);
  const hasChanged = previousValue !== value;

  const positionToPercent = (position: number) =>
    `calc(${(position / tileCountPerDimension) * 100}%`;

  useEffect(() => {
    if (hasChanged) {
      setScale(1.1);
      setTimeout(() => setScale(1), MERGE_ANIMATION_DURATION);
    }
  }, [hasChanged]);

  const style = {
    left: positionToPercent(position[0]),
    top: positionToPercent(position[1]),
    transform: `scale(${scale})`,
    zIndex: value,
  };

  return (
    <div className={`${styles.tile} ${styles[`tile${value}`]}`} style={style}>
      {value}
    </div>
  );
}