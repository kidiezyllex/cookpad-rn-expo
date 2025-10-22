import { getScaledFontStyle } from '@/lib/textScaling';
import React from 'react';
import { Text, TextProps } from 'react-native';

type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

interface TextScaledProps extends TextProps {
  size?: FontSize;
  children: React.ReactNode;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

const TextScaled: React.FC<TextScaledProps> = ({ 
  size = 'base', 
  style, 
  children, 
  numberOfLines,
  ellipsizeMode,
  ...props 
}) => {
  const scaledStyle = getScaledFontStyle(size);
  
  return (
    <Text 
      style={[scaledStyle, style]} 
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TextScaled;
