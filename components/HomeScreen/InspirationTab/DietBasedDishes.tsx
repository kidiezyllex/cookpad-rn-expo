import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import RecipeCard from './RecipeCard';

const ingredientsData = [
    { id: '1', name: 'Tôm', isSelected: true },
    { id: '2', name: 'Bánh mỳ', isSelected: false },
    { id: '3', name: 'Cá', isSelected: false },
    { id: '4', name: 'Thịt lợn', isSelected: false },
    { id: '5', name: 'Thịt bò', isSelected: false },
    { id: '6', name: 'Trứng', isSelected: false },
    { id: '7', name: 'Gà', isSelected: false },
    { id: '8', name: 'Rau xanh', isSelected: false },
    { id: '9', name: 'Cà chua', isSelected: false },
    { id: '10', name: 'Hành tây', isSelected: false },
    { id: '11', name: 'Tỏi', isSelected: false },
    { id: '12', name: 'Gừng', isSelected: false },
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

const DietBasedDishes = () => {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['1']);

    const toggleIngredient = (id: string) => {
        setSelectedIngredients(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const renderIngredientChip = (item: any) => (
        <Pressable
            key={item.id}
            onPress={() => toggleIngredient(item.id)}
            style={{
                height: getScaleFactor() * 32,
                paddingHorizontal: getScaleFactor() * 16,
                paddingVertical: getScaleFactor() * 4,
                backgroundColor: selectedIngredients.includes(item.id) ? '#E36137' : '#FFEFE9',
                borderRadius: getScaleFactor() * 8,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TextScaled
                size="sm"
                className={`font-bold ${selectedIngredients.includes(item.id) ? 'text-white' : 'text-customPrimary'}`}
            >
                {item.name}
            </TextScaled>
        </Pressable>
    );

    return (
        <View
            style={{
                width: "100%",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginBottom: getScaleFactor() * 24,
                backgroundColor: 'white',
                paddingHorizontal: getScaleFactor() * 16,
                paddingTop: getScaleFactor() * 8,
                paddingBottom: getScaleFactor() * 24,
            }}
        >
            <View
                style={{
                    marginBottom: getScaleFactor() * 16,
                }}
                className="flex-row justify-between items-center w-full">
                <TextScaled

                    size="base"
                    className="font-bold text-black"
                >
                    Món ăn theo chế độ ăn
                </TextScaled>
                <TextScaled
                    size="sm"
                    className="font-light text-customPrimary"
                >
                    Xem thêm
                </TextScaled>
            </View>
            <View
                style={{
                    height: getScaleFactor() * 40,
                    marginBottom: getScaleFactor() * 8,
                }}
            >
                <SwiperFlatList
                    data={[
                        { id: 'filter', name: 'Filter', isFilter: true },
                        ...ingredientsData
                    ]}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                marginRight: getScaleFactor() * 4,
                            }}
                        >
                            {item.isFilter ? (
                                <Pressable
                                    style={{
                                        height: getScaleFactor() * 32,
                                        width: getScaleFactor() * 32,
                                        backgroundColor: '#FFEFE9',
                                        borderRadius: getScaleFactor() * 8,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Image source={icons.activeFunnelIcon} style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }} />
                                </Pressable>
                            ) : (
                                renderIngredientChip(item)
                            )}
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 0,
                    }}
                />
            </View>

            {/* Featured recipes horizontal scroll */}
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

export default DietBasedDishes;
