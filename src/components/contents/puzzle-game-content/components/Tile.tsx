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
  const containerWidth = true ? containerWidthDesktop : containerWidthMobile;

  const [scale, setScale] = useState(1);
  const previousValue = usePreviousProps<number>(value);
  const hasChanged = previousValue !== value;

  const positionToPixels = (position: number) =>
    (position / tileCountPerDimension) * containerWidth;

  useEffect(() => {
    if (hasChanged) {
      setScale(1.1);
      setTimeout(() => setScale(1), MERGE_ANIMATION_DURATION);
    }
  }, [hasChanged]);

  const style = {
    left: positionToPixels(position[0]),
    top: positionToPixels(position[1]),
    transform: `scale(${scale})`,
    zIndex: value,
  };

  return (
    <div className={`${styles.tile} ${styles[`tile${value}`]}`} style={style}>
      {value}
    </div>
  );
}