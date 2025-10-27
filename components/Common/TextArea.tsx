import { getScaleFactor } from '@/lib/scaling';
import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

interface TextAreaProps extends TextInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    containerStyle?: any;
    inputStyle?: any;
    multiline?: boolean;
    numberOfLines?: number;
    placeholderText?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
    placeholder,
    value,
    onChangeText,
    containerStyle,
    inputStyle,
    multiline = true,
    numberOfLines = 4,
    placeholderText,
    ...props
}) => {
    return (
        <View
            style={[
                {
                    alignSelf: 'stretch',
                    flex: 1,
                    backgroundColor: '#FFFFFF',
                    borderRadius: getScaleFactor() * 8,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: getScaleFactor() * 8,
                },
                containerStyle
            ]}
        >
            <TextInput
                style={[
                    {
                        flex: 1,
                        fontSize: getScaleFactor() * 16,
                        color: 'black',
                        textAlignVertical: 'top',
                        minHeight: getScaleFactor() * 132,
                        paddingHorizontal: getScaleFactor() * 8,
                    },
                    inputStyle
                ]}
                placeholder={placeholder || placeholderText}
                placeholderTextColor="#9CA3AF"
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                numberOfLines={numberOfLines}
                scrollEnabled={true}
                {...props}
            />
        </View>
    );
};

export default TextArea;
