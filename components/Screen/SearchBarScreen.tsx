import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useState } from 'react';
import { FlatList, Image, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextScaled from '../Common/TextScaled';
import SearchSuggestionItem from '../SearchScreen/SearchSuggestionItem';

const searchSuggestionsData = [
    { id: '1', name: 'Thịt heo xào cải thìa', searched: true },
    { id: '2', name: 'Thịt heo nướng sả cháy tỏi ớt', searched: true },
    { id: '3', name: 'Thịt heo nướng sả cháy tỏi ớt', searched: false },
    { id: '4', name: 'Thịt heo nướng sả cháy tỏi ớt', searched: false },
    { id: '5', name: 'Thịt heo nướng sả cháy tỏi ớt', searched: false },
    { id: '6', name: 'Thịt heo nướng sả cháy tỏi ớt', searched: false },
    { id: '7', name: 'Thịt heo nướng sả cháy tỏi ớt', searched: false },
    { id: '8', name: 'Thịt heo nướng sả cháy tỏi ớt', searched: false },
    { id: '9', name: 'Thịt heo nướng sả cháy tỏi ớt', searched: false },
    { id: '10', name: 'Cá kho tộ', searched: true },
    { id: '11', name: 'Gà nướng mật ong', searched: false },
    { id: '12', name: 'Bún bò Huế', searched: false },
    { id: '13', name: 'Phở bò', searched: true },
    { id: '14', name: 'Bánh mì thịt nướng', searched: false },
    { id: '15', name: 'Chả cá Lã Vọng', searched: false },
    { id: '16', name: 'Bún chả Hà Nội', searched: true },
    { id: '17', name: 'Cơm tấm Sài Gòn', searched: false },
    { id: '18', name: 'Bánh xèo miền Tây', searched: false },
    { id: '19', name: 'Lẩu thái', searched: false },
    { id: '20', name: 'Nem nướng Nha Trang', searched: true },
];

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
                {/* Status Bar and Search Input */}
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: getScaleFactor() * 8,
                    }}
                >
                    <Image
                        source={icons.caretLeftIcon}
                        style={{
                            width: getScaleFactor() * 24,
                            height: getScaleFactor() * 24
                        }}
                        resizeMode="contain"
                    />
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
