import React from 'react';
import styles from './Chip.module.css';
import OneChip from '../../../../../../../assets/chips/1.png';
import FiveChip from '../../../../../../../assets/chips/5.png';
import TenChip from '../../../../../../../assets/chips/10.png';
import TwentyChip from '../../../../../../../assets/chips/20.png';
import FiftyChip from '../../../../../../../assets/chips/50.png';

interface ChipProps {
  value: number;
  onCLick: (value: number) => void;
  disable?: boolean;
}

const chipImages = {
  1: OneChip,
  5: FiveChip,
  10: TenChip,
  20: TwentyChip,
  50: FiftyChip,
} as const;

export const Chip: React.FC<ChipProps> = ({ value, onCLick, disable }) => {
  return (
    <div
      className={styles.chip}
      style={{
        backgroundImage: `url(${chipImages[value as keyof typeof chipImages]})`,
        cursor: disable ? 'not-allowed' : 'pointer',
        filter: disable ? 'grayscale(100%)' : 'grayscale(0%)',
        opacity: disable ? 0.5 : 1,
      }}
      onClick={() => !disable && onCLick(value)}
    >
      <span>{value}</span>
    </div>
  );
};