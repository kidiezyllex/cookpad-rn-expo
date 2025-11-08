import { icons } from '@/constants';
import Image from 'next/image';
import React from 'react';
import TextScaled from './TextScaled';

interface BackHeaderProps {
  headerTitle: string;
  onPress: () => void;
  isDark?: boolean;
}

const BackHeader: React.FC<BackHeaderProps> = ({ headerTitle, onPress, isDark = false }) => {
  return (
    <div
      className="relative flex w-full items-center justify-center h-11 min-h-11"
    >
      <button
        onClick={onPress}
        className="absolute left-4 w-6 h-6 flex items-center justify-center"
        aria-label="Quay lại"
      >
        <Image
          src={icons.caretLeftIcon}
          alt="back"
          className={`w-6 h-6 ${isDark ? 'invert' : ''}`}
        />
      </button>
      <TextScaled
        size="base"
        className={`justify-start text-center font-bold ${isDark ? 'text-white' : 'text-black'}`}
      >
        {headerTitle}
      </TextScaled>
    </div>
  );
};

export default BackHeader;
