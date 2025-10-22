import { getScaleFactor } from '@/lib/scaling';
import { Image, Pressable, View } from 'react-native';

interface CustomTabTriggerProps {
  isActive: boolean;
  onPress: () => void;
  icon: any;
  activeIcon: any;
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
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        height: getScaleFactor() * 40,
        flexShrink: 0,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        paddingHorizontal: 0,
      }}
    >
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image
          source={isActive ? activeIcon : icon}
          style={{
            width: iconSize,
            height: iconSize,
          }}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );
}
