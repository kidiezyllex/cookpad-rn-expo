import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Pressable, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextScaled from '../Common/TextScaled';
import SearchSuggestionItem from '../SearchScreen/SearchSuggestionItem';
import { searchSuggestionsData } from '../SearchScreen/mockData';

const SearchBarScreen = () => {
    const [searchText, setSearchText] = useState('');

    const getFilteredData = () => {
        if (searchText.trim() === '') {
            return searchSuggestionsData.filter(item => item.searched === true);
        } else {
            return searchSuggestionsData.filter(item =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }
    };

    const renderSearchSuggestion = ({ item }: { item: typeof searchSuggestionsData[0] }) => (
        <SearchSuggestionItem item={item} />
    );

    return (
        <SafeAreaView className="flex-1" edges={['top', 'bottom', 'left', 'right']} style={{ backgroundColor: '#F1EEE8' }}>
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    paddingHorizontal: getScaleFactor() * 16,
                    paddingTop: getScaleFactor() * 16,
                    backgroundColor: '#F1EEE8',
                }}
            >
                {/* Status Bar and Search Iput */}
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: getScaleFactor() * 8,
                    }}
                >

                    <Pressable onPress={() => router.back()}>
                        <Image
                            source={icons.caretLeftIcon}
                            style={{
                                width: getScaleFactor() * 24,
                                height: getScaleFactor() * 24
                            }}
                            resizeMode="contain"
                        />
                    </Pressable>
                    <View
                        style={{
                            flex: 1,
                            height: getScaleFactor() * 40,
                            paddingHorizontal: getScaleFactor() * 8,
                            backgroundColor: 'white',
                            borderRadius: getScaleFactor() * 8,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: getScaleFactor() * 16,
                        }}
                    >
                        <TextInput
                            value={searchText}
                            onChangeText={setSearchText}
                            placeholder="Tìm kiếm..."
                            style={{
                                flex: 1,
                                fontSize: getScaleFactor() * 14,
                                fontWeight: '500',
                                color: 'black',
                                paddingVertical: 0,
                            }}
                        />
                    </View>
                </View>

                {/* Search Suggestions */}
                <FlatList
                    data={getFilteredData()}
                    renderItem={renderSearchSuggestion}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    style={{ width: '100%' }}
                    contentContainerStyle={{
                        paddingVertical: getScaleFactor() * 8,
                    }}
                />
                <TextScaled
                    size="sm"
                    className="w-full text-center text-customPrimary"
                    style={{ marginTop: getScaleFactor() * 1 }}
                >
                    Xem tất cả
                </TextScaled>
            </View>
        </SafeAreaView>
    );
};

export default SearchBarScreen;
