import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import TextScaled from '../Common/TextScaled';

interface SearchSuggestionItemProps {
    item: {
        id: string;
        name: string;
        searched: boolean;
    };
}

const SearchSuggestionItem = ({ item }: SearchSuggestionItemProps) => {
    const navigation = useNavigation();

    const handlePress = () => {
        (navigation as any).navigate('search-results', { searchQuery: item.name });
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: getScaleFactor() * 8,
            }}
        >
            <Image
                source={item.searched ? icons.timerIcon : icons.searchIcon}
                style={{
                    width: getScaleFactor() * 24,
                    height: getScaleFactor() * 24
                }}
                resizeMode="contain"
            />
            <TextScaled
                size="sm"
                className="text-textNeutralV1"
                style={{
                    flex: 1,
                    paddingVertical: getScaleFactor() * 8,
                }}
            >
                {item.name}
            </TextScaled>
            {item.searched && (
                <View
                    style={{
                        width: getScaleFactor() * 24,
                        height: getScaleFactor() * 24,
                        padding: getScaleFactor() * 8,
                        borderRadius: 100,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: getScaleFactor() * 8,
                    }}
                >
                    <Image
                        source={icons.closeIcon}
                        style={{
                            width: getScaleFactor() * 24,
                            height: getScaleFactor() * 24
                        }}
                        resizeMode="contain"
                    />
                </View>
            )}
        </TouchableOpacity>
    );
};

export default SearchSuggestionItem;
