import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import TextScaled from '../Common/TextScaled';
import RecipeCard from '../HomeScreen/InspirationTab/RecipeCard';

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

const SearchHistorySection = () => {
    return (
        <View 
            style={{
                paddingHorizontal: getScaleFactor() * 16,
                paddingTop: getScaleFactor() * 16,
            }}
            className='flex-col'
        >
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
                className='flex-row justify-between items-center w-full'
            >
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
    );
};

export default SearchHistorySection;
