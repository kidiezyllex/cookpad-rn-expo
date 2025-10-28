import RecipeCarousel from '@/components/Common/RecipeCarousel';
import TextScaled from '@/components/Common/TextScaled';
import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

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
            <RecipeCarousel />
        </View>
    );
};

export default DietBasedDishes;
