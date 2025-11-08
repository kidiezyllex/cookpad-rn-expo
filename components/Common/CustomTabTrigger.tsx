import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CustomTabTriggerProps {
  isActive: boolean;
  onPress: () => void;
  icon: StaticImageData | string;
  activeIcon: StaticImageData | string;
  iconSize: number;
}

export default function CustomTabTrigger({
  isActive,
  onPress,
  icon,
  activeIcon,
  iconSize
}: CustomTabTriggerProps) {
  return (
    <button
      onClick={onPress}
      className="flex-1 h-10 shrink-0 bg-transparent flex items-center justify-center m-0 p-0"
      aria-pressed={isActive}
    >
      <span className="inline-flex items-center justify-center">
        <Image
          src={isActive ? activeIcon : icon}
          alt="tab"
          style={{
            width: iconSize,
            height: iconSize,
          }}
        />
      </span>
    </button>
  );
}
