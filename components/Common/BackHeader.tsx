import { getScaleFactor } from '@/lib/scaling';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import TextScaled from './TextScaled';

interface BackHeaderProps {
  headerTitle: string;
  onPress: () => void;
}

const BackHeader: React.FC<BackHeaderProps> = ({ headerTitle, onPress }) => {
  return (
    <View
      style={{
        height: getScaleFactor() * 44,
        minHeight: getScaleFactor() * 44,
      }}
      className="relative flex-row justify-center items-center w-full"
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          position: 'absolute',
          left: getScaleFactor() * 16,
          width: getScaleFactor() * 24,
          height: getScaleFactor() * 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Ionicons
          name="chevron-back"
          size={getScaleFactor() * 24}
          color="#000000"
        />
      </TouchableOpacity>
      <TextScaled
        size="base"
        className="justify-start font-bold text-center"
      >
        {headerTitle}
      </TextScaled>
    </View>
  );
};

export default BackHeader;
