import { getScaleFactor } from '@/lib/scaling';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    containerStyle?: any;
    inputStyle?: any;
    multiline?: boolean;
    numberOfLines?: number;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    onChangeText,
    containerStyle,
    inputStyle,
    multiline = false,
    numberOfLines = 1,
    ...props
}) => {
    return (
        <TextInput
            style={{
                width: '100%',
                padding: getScaleFactor() * 8,
                height: getScaleFactor() * 40,
                backgroundColor: 'white',
                borderRadius: 8,
                fontSize: getScaleFactor() * 16,
            }}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            value={value}
            onChangeText={onChangeText}
            multiline={multiline}
            numberOfLines={numberOfLines}
            scrollEnabled={false}
            keyboardType="phone-pad"
            {...props}
        />
    );
};

export default Input;
