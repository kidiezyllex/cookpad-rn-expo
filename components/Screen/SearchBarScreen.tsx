import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { FlatList, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextScaled from '../Common/TextScaled';

// Mock data for search suggestions
const searchSuggestionsData = [
    { id: '1', name: 'Thịt heo xào cải thìa', showIcon: true },
    { id: '2', name: 'Thịt heo nướng sả cháy tỏi ớt', showIcon: false },
    { id: '3', name: 'Thịt heo nướng sả cháy tỏi ớt', showIcon: false },
    { id: '4', name: 'Thịt heo nướng sả cháy tỏi ớt', showIcon: false },
    { id: '5', name: 'Thịt heo nướng sả cháy tỏi ớt', showIcon: false },
    { id: '6', name: 'Thịt heo nướng sả cháy tỏi ớt', showIcon: false },
    { id: '7', name: 'Thịt heo nướng sả cháy tỏi ớt', showIcon: false },
    { id: '8', name: 'Thịt heo nướng sả cháy tỏi ớt', showIcon: false },
    { id: '9', name: 'Thịt heo nướng sả cháy tỏi ớt', showIcon: false },
    { id: '10', name: 'Thịt lợn luộc với sả gừng', showIcon: false },
];

const SearchBarScreen = () => {
    const renderSearchSuggestion = ({ item }: { item: typeof searchSuggestionsData[0] }) => (
        <View 
            style={{
                width: getScaleFactor() * 384,
                paddingHorizontal: getScaleFactor() * 16,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: getScaleFactor() * 8,
            }}
        >
            <Image 
                source={icons.clockIcon} 
                style={{ 
                    width: getScaleFactor() * 24, 
                    height: getScaleFactor() * 24 
                }} 
                resizeMode="contain" 
            />
            <View 
                style={{
                    flex: 1,
                    paddingVertical: getScaleFactor() * 8,
                    borderRadius: getScaleFactor() * 8,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: getScaleFactor() * 10,
                }}
            >
                <TextScaled
                    size="xs"
                    className="text-gray-600"
                >
                    {item.name}
                </TextScaled>
            </View>
            {item.showIcon && (
                <View 
                    style={{
                        width: getScaleFactor() * 24,
                        height: getScaleFactor() * 24,
                        padding: getScaleFactor() * 8,
                        borderRadius: getScaleFactor() * 99,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: getScaleFactor() * 8,
                    }}
                >
                    <Image 
                        source={icons.clockIcon} 
                        style={{ 
                            width: getScaleFactor() * 20, 
                            height: getScaleFactor() * 20 
                        }} 
                        resizeMode="contain" 
                    />
                </View>
            )}
        </View>
    );

    return (
        <SafeAreaView className="flex-1" edges={['bottom', 'left', 'right']}>
            <View 
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}
            >
                {/* Status Bar and Search Input */}
                <View 
                    style={{
                        paddingBottom: getScaleFactor() * 8,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    {/* Status Bar */}
                    <View 
                        style={{
                            width: getScaleFactor() * 384,
                            height: getScaleFactor() * 44,
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Battery indicator */}
                        <View 
                            style={{
                                width: getScaleFactor() * 20,
                                height: getScaleFactor() * 12,
                                right: getScaleFactor() * 43,
                                top: getScaleFactor() * 17.33,
                                position: 'absolute',
                                opacity: 0.3,
                                borderRadius: getScaleFactor() * 3,
                                borderWidth: getScaleFactor() * 1,
                                borderColor: 'black',
                            }}
                        />
                        <View 
                            style={{
                                width: getScaleFactor() * 1.33,
                                height: getScaleFactor() * 4,
                                right: getScaleFactor() * 20,
                                top: getScaleFactor() * 21,
                                position: 'absolute',
                                opacity: 0.4,
                                backgroundColor: 'black',
                            }}
                        />
                        <View 
                            style={{
                                width: getScaleFactor() * 16,
                                height: getScaleFactor() * 8,
                                right: getScaleFactor() * 41,
                                top: getScaleFactor() * 19.33,
                                position: 'absolute',
                                backgroundColor: 'black',
                                borderRadius: getScaleFactor() * 1.10,
                            }}
                        />
                        <View 
                            style={{
                                width: getScaleFactor() * 16,
                                height: getScaleFactor() * 10,
                                right: getScaleFactor() * 63.31,
                                top: getScaleFactor() * 17.33,
                                position: 'absolute',
                                backgroundColor: 'black',
                            }}
                        />
                        <View 
                            style={{
                                width: getScaleFactor() * 16,
                                height: getScaleFactor() * 10,
                                right: getScaleFactor() * 85.33,
                                top: getScaleFactor() * 17.67,
                                position: 'absolute',
                                backgroundColor: 'black',
                            }}
                        />
                        {/* Time */}
                        <View 
                            style={{
                                width: getScaleFactor() * 56,
                                height: getScaleFactor() * 20,
                                left: getScaleFactor() * 24,
                                top: getScaleFactor() * 12,
                                position: 'absolute',
                                borderRadius: getScaleFactor() * 12,
                            }}
                        >
                            <TextScaled
                                size="base"
                                className="font-semibold text-center text-black"
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: getScaleFactor() * 1,
                                }}
                            >
                                9:41
                            </TextScaled>
                        </View>
                    </View>

                    {/* Search Input */}
                    <View 
                        style={{
                            width: getScaleFactor() * 320,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: getScaleFactor() * 8,
                        }}
                    >
                        <Image 
                            source={icons.backArrow} 
                            style={{ 
                                width: getScaleFactor() * 24, 
                                height: getScaleFactor() * 24 
                            }} 
                            resizeMode="contain" 
                        />
                        <View 
                            style={{
                                width: getScaleFactor() * 320,
                                height: getScaleFactor() * 40,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        >
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
                                <TextScaled
                                    size="sm"
                                    className="font-medium text-black"
                                >
                                    Thịt Heo
                                </TextScaled>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Search Suggestions */}
                <View 
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: getScaleFactor() * 4,
                    }}
                >
                    <FlatList
                        data={searchSuggestionsData}
                        renderItem={renderSearchSuggestion}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingVertical: getScaleFactor() * 8,
                        }}
                    />
                    
                    {/* View All Button */}
                    <View 
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: getScaleFactor() * 1,
                        }}
                    >
                        <View 
                            style={{
                                width: getScaleFactor() * 384,
                                paddingHorizontal: getScaleFactor() * 16,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            <Image 
                                source={icons.clockIcon} 
                                style={{ 
                                    width: getScaleFactor() * 24, 
                                    height: getScaleFactor() * 24 
                                }} 
                                resizeMode="contain" 
                            />
                            <View 
                                style={{
                                    flex: 1,
                                    paddingVertical: getScaleFactor() * 8,
                                    borderRadius: getScaleFactor() * 8,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 10,
                                }}
                            >
                                <TextScaled
                                    size="xs"
                                    className="text-gray-600"
                                >
                                    Thịt lợn luộc với sả gừng
                                </TextScaled>
                            </View>
                        </View>
                        <TextScaled
                            size="xs"
                            className="text-center text-blue-600"
                        >
                            Xem tất cả
                        </TextScaled>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SearchBarScreen;
