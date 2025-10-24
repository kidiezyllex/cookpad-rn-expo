import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, ScrollView, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwiperFlatList from 'react-native-swiper-flatlist';
import TextScaled from '../Common/TextScaled';
import RecipeCard from '../HomeScreen/InspirationTab/RecipeCard';

const popularTopicsData = [
    { id: '1', name: 'Salad giảm cân' },
    { id: '2', name: 'Món làm từ trứng' },
    { id: '3', name: 'Đùi gà' },
    { id: '4', name: 'Nước ép từ xoài' },
    { id: '5', name: 'Món từ bí ngô' },
    { id: '6', name: 'Món từ thịt bò' },
    { id: '7', name: 'Món từ bí ngô' },
    { id: '8', name: 'Món từ thịt bò' },
    { id: '9', name: 'Món từ thịt bò' },
    { id: '10', name: 'Món từ thịt bò' },
];
const featuredRecipesData = [
    { id: '1', name: 'Tôm hoàng đế ánh kim', image: images.featuredFood1, time: '3h 30m', likes: 234 },
    { id: '2', name: 'Tôm nướng sốt tiêu đen', image: images.featuredFood2, time: '2h 15m', likes: 189 },
    { id: '3', name: 'Lẩu hải sản với nước sốt tôm', image: images.featuredFood3, time: '1h 45m', likes: 156 },
    { id: '4', name: 'Sò huyết rau mùi', image: images.featuredFood4, time: '1h 20m', likes: 98 },
    { id: '5', name: 'Tôm sốt mắm ớt', image: images.featuredFood5, time: '45m', likes: 267 },
    { id: '6', name: 'Cá nướng lá chuối', image: images.featuredFood6, time: '1h 15m', likes: 189 },
    { id: '7', name: 'Thịt bò xào rau củ', image: images.featuredFood7, time: '30m', likes: 156 },
    { id: '8', name: 'Trứng chiên thịt bằm', image: images.featuredFood8, time: '20m', likes: 123 },
];

const SearchScreen = () => {
    return (
        <SafeAreaView className="flex-1" edges={['bottom', 'left', 'right']}>
            <ScrollView
                className='bg-backgroundV1'
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                {/* Hero and Search Field*/}
                <View
                    style={{
                        height: getScaleFactor() * 256,
                        backgroundColor: '#E36137',
                        position: 'relative',
                    }}
                >
                    {/* Hero section */}
                    <Image
                        style={{
                            width: getScaleFactor() * 200,
                            height: getScaleFactor() * 200,
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                        }}
                        source={images.searchHero}
                        resizeMode="contain"
                    />

                    <View
                        style={{
                            position: 'absolute',
                            width: getScaleFactor() * 170,
                            height: getScaleFactor() * 137,
                            left: getScaleFactor() * 25,
                            bottom: getScaleFactor() * 48,
                        }}
                        className='justify-center items-center'
                    >
                        <Image
                            source={images.messageBubble2}
                            resizeMode="contain"
                            style={{
                                width: "100%",
                                height: "100%",
                                resizeMode: "contain",
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                right: 0,
                                top: 0,
                            }}
                        />
                        <TextScaled
                            size="xs"
                            style={{
                                maxWidth: getScaleFactor() * 110,
                            }}
                            className="font-light text-customSecondary"
                        >
                            Nhập tên món ăn nếu bạn đã lựa chọn được món muốn nấu hoặc nhập tên nguyên liệu để xem gợi ý nhé!
                        </TextScaled>
                    </View>

                    {/* Search Field */}
                    <View
                        style={{
                            paddingHorizontal: getScaleFactor() * 16,
                            paddingTop: getScaleFactor() * 16,
                            height: getScaleFactor() * 40,
                            position: 'relative',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: getScaleFactor() * 4,
                            borderRadius: getScaleFactor() * 8,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                height: getScaleFactor() * 40,
                                paddingHorizontal: getScaleFactor() * 8,
                                borderRadius: getScaleFactor() * 8,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                source={icons.searchIcon}
                                style={{
                                    width: getScaleFactor() * 24,
                                    height: getScaleFactor() * 24,
                                    marginRight: getScaleFactor() * 16,
                                }}
                                resizeMode="contain"
                            />
                            <View
                                style={{
                                    paddingHorizontal: getScaleFactor() * 4,
                                    paddingVertical: getScaleFactor() * 2,
                                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                                    borderRadius: getScaleFactor() * 4,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 2,
                                    marginRight: getScaleFactor() * 8,
                                }}
                            >
                                <Image
                                    source={icons.fireIcon}
                                    style={{
                                        width: getScaleFactor() * 16,
                                        height: getScaleFactor() * 16
                                    }}
                                    resizeMode="contain"
                                />
                                <TextScaled
                                    size="sm"
                                    className="font-medium text-red-500"
                                >
                                    Hot
                                </TextScaled>
                            </View>
                            <TextInput
                                placeholder="Tìm kiếm món ăn..."
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
                </View>

                {/* Lịch sử tìm kiếm */}
                <View 
                style={{
                    paddingHorizontal: getScaleFactor() * 16,
                    paddingTop: getScaleFactor() * 16,
                }}
                className='flex-col'>
                     <TextScaled
                                size="base"
                                className="font-bold text-black"
                                style={{
                                    marginBottom: getScaleFactor() * 8,
                                }}
                            >
                                Lịch sử tìm kiếm
                            </TextScaled>
                            <View 
                            style={{
                                marginBottom: getScaleFactor() * 8,
                            }}
                            className='flex-row justify-between items-center w-full'>
                                <TextScaled
                                    size="sm"
                                    className="font-light text-textNeutralV1"
                                >
                                   Món bạn đã xem gần đây
                                </TextScaled>
                                <Image
                                    source={icons.forwardArrow}
                                    style={{
                                        width: getScaleFactor() * 20,
                                        height: getScaleFactor() * 20,
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                <View
                    style={{
                        height: getScaleFactor() * 158,
                        marginBottom: getScaleFactor() * 16,
                    }}
                >
                    <SwiperFlatList
                        data={featuredRecipesData}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    marginRight: getScaleFactor() * 8,
                                }}
                            >
                                <RecipeCard
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    time={item.time}
                                    likes={item.likes}
                                />
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: 0,
                        }}
                        paginationStyle={{
                            marginBottom: getScaleFactor() * -20,
                        }}
                        paginationStyleItem={{
                            width: getScaleFactor() * 6,
                            height: getScaleFactor() * 6,
                            marginHorizontal: getScaleFactor() * 2,
                        }}
                        paginationStyleItemActive={{
                            backgroundColor: '#E36137',
                        }}
                        paginationStyleItemInactive={{
                            backgroundColor: '#E0E0E0',
                        }}
                    />
                </View>
                </View>
                
                {/* Chủ đề được đề xuất với bạn */}
                <View
                    style={{
                        width: "100%",
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginBottom: getScaleFactor() * 48,
                        paddingHorizontal: getScaleFactor() * 16,
                    }}
                >
                    <TextScaled
                        style={{
                            marginBottom: getScaleFactor() * 8,
                        }}
                        size="base"
                        className="font-bold text-black"
                    >
                        Chủ đề được đề xuất với bạn
                    </TextScaled>

                    <View
                        style={{
                            width: "100%",
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: getScaleFactor() * 4,
                        }}
                    >
                        {popularTopicsData.map((item) => (
                            <View
                                key={item.id}
                                style={{
                                    width: '49%',
                                    height: getScaleFactor() * 80,
                                    borderRadius: getScaleFactor() * 8,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    source={images.sampleFood1}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: getScaleFactor() * 8,
                                    }}
                                    resizeMode="cover"
                                />
                                {/* Layer background */}
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.4)',
                                        borderRadius: getScaleFactor() * 8,
                                    }}
                                />
                                <TextScaled
                                    size="base"
                                    className="font-bold text-center text-white"
                                >
                                    {item.name}
                                </TextScaled>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;
