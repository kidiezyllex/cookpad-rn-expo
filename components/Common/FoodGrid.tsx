import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { router } from 'expo-router';
import { Image, Pressable, View } from 'react-native';

interface FoodItem {
    id: string;
    name: string;
    image: any;
    time: string;
    likes: number;
}

interface FoodGridProps {
    featuredRecipesData?: FoodItem[];
}

const FoodGrid = ({ featuredRecipesData }: FoodGridProps) => {
    const searchedDishesData = [
        { id: '1', name: 'Tôm hoàng đế ánh kim', image: images.featuredFood1, time: '3h 30m', likes: 234 },
        { id: '2', name: 'Tôm nướng sốt tiêu đen', image: images.featuredFood2, time: '2h 15m', likes: 189 },
        { id: '3', name: 'Lẩu hải sản với nước sốt tôm', image: images.featuredFood3, time: '1h 45m', likes: 156 },
        { id: '4', name: 'Sò huyết rau mùi', image: images.featuredFood4, time: '1h 20m', likes: 98 },
        { id: '5', name: 'Tôm sốt mắm ớt', image: images.featuredFood5, time: '45m', likes: 267 },
        { id: '6', name: 'Tôm sốt mắm ớt', image: images.featuredFood6, time: '45m', likes: 267 },
        { id: '7', name: 'Tôm sốt mắm ớt', image: images.featuredFood7, time: '45m', likes: 267 },
        { id: '8', name: 'Tôm sốt mắm ớt', image: images.featuredFood8, time: '45m', likes: 267 },
    ];

    const data = featuredRecipesData || searchedDishesData;
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: getScaleFactor() * 8,
            }}
        >
            <View
                style={{
                    paddingBottom: getScaleFactor() * 112,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                {/* Left column */}
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 16,
                        width: "50%",
                        paddingRight: getScaleFactor() * 4,
                    }}
                >
                    {data.slice(0, 4).map((item, index) => (
                        <Pressable
                            key={item.id}
                            onPress={() => router.push('/food-detail')}
                            style={{
                                width: "100%",
                                height: getScaleFactor() * (index === 0 || index === 1 ? 240 : 160),
                                backgroundColor: 'white',
                                borderRadius: getScaleFactor() * 8,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: getScaleFactor() * 3 },
                                shadowOpacity: 0.1,
                                shadowRadius: getScaleFactor() * 12,
                                elevation: 3,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 4,
                            }}
                        >
                            <Image
                                style={{
                                    width: "100%",
                                    flex: 1,
                                    borderTopLeftRadius: getScaleFactor() * 8,
                                    borderTopRightRadius: getScaleFactor() * 8,
                                }}
                                source={item.image}
                                resizeMode="cover"
                            />
                            <View
                                style={{
                                    width: "100%",
                                    paddingHorizontal: getScaleFactor() * 8,
                                    paddingRight: getScaleFactor() * 6,
                                    paddingBottom: getScaleFactor() * 8,
                                    borderRadius: getScaleFactor() * 8,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 4,
                                }}
                            >
                                <TextScaled
                                    size="xs"
                                    className="flex-1 font-semibold text-black"
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {item.name}
                                </TextScaled>
                                <Image source={icons.threeDotsIcon} style={{ width: getScaleFactor() * 16, height: getScaleFactor() * 16 }} />
                            </View>
                        </Pressable>
                    ))}
                </View>

                {/* Right column */}
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 16,
                        width: "50%",
                        paddingLeft: getScaleFactor() * 4,
                    }}
                >
                    {data.slice(4, 8).map((item, index) => (
                        <Pressable
                            key={item.id}
                            onPress={() => router.push('/food-detail')}
                            style={{
                                width: "100%",
                                height: getScaleFactor() * (index === 0 ? 144 : index === 1 ? 224 : index === 2 ? 256 : 240),
                                backgroundColor: 'white',
                                borderRadius: getScaleFactor() * 8,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: getScaleFactor() * 3 },
                                shadowOpacity: 0.1,
                                shadowRadius: getScaleFactor() * 12,
                                elevation: 3,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 4,
                            }}
                        >
                            <Image
                                style={{
                                    width: "100%",
                                    flex: 1,
                                    borderTopLeftRadius: getScaleFactor() * 8,
                                    borderTopRightRadius: getScaleFactor() * 8,
                                }}
                                source={item.image}
                                resizeMode="cover"
                            />
                            <View
                                style={{
                                    width: "100%",
                                    paddingHorizontal: getScaleFactor() * 8,
                                    paddingBottom: getScaleFactor() * 8,
                                    paddingRight: getScaleFactor() * 6,
                                    borderRadius: getScaleFactor() * 8,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 4,
                                }}
                            >
                                <TextScaled
                                    size="xs"
                                    className="flex-1 font-semibold text-black"
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {item.name}
                                </TextScaled>
                                <Image source={icons.threeDotsIcon} style={{ width: getScaleFactor() * 16, height: getScaleFactor() * 16 }} />
                            </View>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default FoodGrid;
