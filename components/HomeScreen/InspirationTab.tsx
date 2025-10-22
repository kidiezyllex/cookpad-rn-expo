import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, View } from 'react-native';

// Mock data for ingredients
const ingredientsData = [
    { id: '1', name: 'Tôm', isSelected: true },
    { id: '2', name: 'Bánh mỳ', isSelected: false },
    { id: '3', name: 'Cá', isSelected: false },
    { id: '4', name: 'Thịt lợn', isSelected: false },
    { id: '5', name: 'Thịt bò', isSelected: false },
    { id: '6', name: 'Trứng', isSelected: false },
];

// Mock data for diet types
const dietTypesData = [
    { id: '1', name: 'Ăn chay', isSelected: true },
    { id: '2', name: 'Giàu đạm', isSelected: false },
    { id: '3', name: 'Kiêng đường', isSelected: false },
    { id: '4', name: 'Ít calo', isSelected: false },
    { id: '5', name: 'Ăn sạch', isSelected: false },
    { id: '6', name: 'Ít đạm', isSelected: false },
    { id: '7', name: 'Diet', isSelected: false },
];

// Mock data for popular topics
const popularTopicsData = [
    { id: '1', name: 'Salad giảm cân' },
    { id: '2', name: 'Món làm từ trứng' },
    { id: '3', name: 'Đùi gà' },
    { id: '4', name: 'Nước ép từ xoài' },
    { id: '5', name: 'Món từ bí ngô' },
    { id: '6', name: 'Món từ thịt bò' },
];

// Mock data for featured recipes
const featuredRecipesData = [
    { id: '1', name: 'Tôm hoàng đế ánh kim', image: images.sampleFood1, time: '3h 30m', likes: 234, height: 60 },
    { id: '2', name: 'Tôm nướng sốt tiêu đen', image: images.sampleFood1, time: '2h 15m', likes: 189, height: 60 },
    { id: '3', name: 'Lẩu hải sản với nước sốt tôm', image: images.sampleFood1, time: '1h 45m', likes: 156, height: 40 },
    { id: '4', name: 'Sò huyết rau mùi', image: images.sampleFood1, time: '1h 20m', likes: 98, height: 40 },
    { id: '5', name: 'Tôm sốt mắm ớt', image: images.sampleFood1, time: '45m', likes: 267, height: 60 },
];

const InspirationTab = () => {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['1']);
    const [selectedDietTypes, setSelectedDietTypes] = useState<string[]>(['1']);

    const toggleIngredient = (id: string) => {
        setSelectedIngredients(prev => 
            prev.includes(id) 
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const toggleDietType = (id: string) => {
        setSelectedDietTypes(prev => 
            prev.includes(id) 
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const renderIngredientChip = ({ item }: { item: any }) => (
        <Pressable
            onPress={() => toggleIngredient(item.id)}
            style={{
                height: getScaleFactor() * 32,
                paddingHorizontal: getScaleFactor() * 16,
                paddingVertical: getScaleFactor() * 4,
                backgroundColor: selectedIngredients.includes(item.id) ? '#E36137' : '#F3F4F6',
                borderRadius: getScaleFactor() * 8,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TextScaled
                size="sm"
                className={`font-bold ${selectedIngredients.includes(item.id) ? 'text-white' : 'text-black'}`}
            >
                {item.name}
            </TextScaled>
        </Pressable>
    );

    const renderDietTypeChip = ({ item }: { item: any }) => (
        <Pressable
            onPress={() => toggleDietType(item.id)}
            style={{
                height: getScaleFactor() * 32,
                paddingHorizontal: getScaleFactor() * 16,
                paddingVertical: getScaleFactor() * 4,
                backgroundColor: selectedDietTypes.includes(item.id) ? '#E36137' : '#F3F4F6',
                borderRadius: getScaleFactor() * 8,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TextScaled
                size="sm"
                className={`font-bold ${selectedDietTypes.includes(item.id) ? 'text-white' : 'text-black'}`}
            >
                {item.name}
            </TextScaled>
        </Pressable>
    );

    const renderRecipeCard = ({ item }: { item: any }) => (
        <View
            style={{
                width: getScaleFactor() * 160,
                height: getScaleFactor() * item.height,
                backgroundColor: 'white',
                borderRadius: getScaleFactor() * 8,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: getScaleFactor() * 3 },
                shadowOpacity: 0.1,
                shadowRadius: getScaleFactor() * 12,
                elevation: 3,
                marginBottom: getScaleFactor() * 16,
            }}
        >
            <Image
                style={{
                    width: '100%',
                    flex: 1,
                    borderTopLeftRadius: getScaleFactor() * 8,
                    borderTopRightRadius: getScaleFactor() * 8,
                }}
                source={item.image}
                resizeMode="cover"
            />
            <View
                style={{
                    paddingHorizontal: getScaleFactor() * 8,
                    paddingVertical: getScaleFactor() * 6,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <TextScaled
                    size="xs"
                    className="flex-1 font-semibold text-black"
                >
                    {item.name}
                </TextScaled>
                <View
                    style={{
                        width: getScaleFactor() * 16,
                        height: getScaleFactor() * 16,
                    }}
                >
                    <View
                        style={{
                            width: getScaleFactor() * 10,
                            height: getScaleFactor() * 1.5,
                            backgroundColor: '#374151',
                            marginTop: getScaleFactor() * 7.25,
                            marginLeft: getScaleFactor() * 3,
                        }}
                    />
                </View>
            </View>
        </View>
    );

    const renderPopularTopic = ({ item }: { item: any }) => (
        <View
            style={{
                width: getScaleFactor() * 160,
                height: getScaleFactor() * 80,
                padding: getScaleFactor() * 10,
                backgroundColor: 'rgba(0,0,0,0.4)',
                borderRadius: getScaleFactor() * 8,
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}
        >
            <TextScaled
                size="base"
                className="font-bold text-center text-orange-500"
            >
                {item.name}
            </TextScaled>
        </View>
    );

    const renderFeaturedRecipe = ({ item }: { item: any }) => (
        <View
            style={{
                width: getScaleFactor() * 160,
                height: getScaleFactor() * item.height,
                backgroundColor: 'white',
                borderRadius: getScaleFactor() * 8,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: getScaleFactor() * 3 },
                shadowOpacity: 0.1,
                shadowRadius: getScaleFactor() * 12,
                elevation: 3,
            }}
        >
            <Image
                style={{
                    width: '100%',
                    flex: 1,
                    borderTopLeftRadius: getScaleFactor() * 8,
                    borderTopRightRadius: getScaleFactor() * 8,
                }}
                source={item.image}
                resizeMode="cover"
            />
            <View
                style={{
                    paddingHorizontal: getScaleFactor() * 8,
                    paddingVertical: getScaleFactor() * 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <TextScaled
                    size="xs"
                    className="flex-1 font-semibold text-black"
                >
                    {item.name}
                </TextScaled>
                <View
                    style={{
                        width: getScaleFactor() * 16,
                        height: getScaleFactor() * 16,
                    }}
                >
                    <View
                        style={{
                            width: getScaleFactor() * 10,
                            height: getScaleFactor() * 1.5,
                            backgroundColor: '#374151',
                            marginTop: getScaleFactor() * 7.25,
                            marginLeft: getScaleFactor() * 3,
                        }}
                    />
                </View>
            </View>
        </View>
    );

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: '#F3F4F6',
            }}
            showsVerticalScrollIndicator={false}
        >
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: getScaleFactor() * 24,
                    paddingLeft: getScaleFactor() * 16,
                }}
            >
                {/* Ingredients section */}
                <View
                    style={{
                        width: getScaleFactor() * 384,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 16,
                    }}
                >
                    <TextScaled
                        size="lg"
                        className="font-bold text-black"
                    >
                        Trong tủ lạnh nhà bạn có gì?
                    </TextScaled>
                    
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 8,
                        }}
                    >
                        <FlatList
                            data={ingredientsData}
                            renderItem={renderIngredientChip}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                gap: getScaleFactor() * 4,
                            }}
                        />
                        
                        <FlatList
                            data={featuredRecipesData.slice(0, 3)}
                            renderItem={renderRecipeCard}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                gap: getScaleFactor() * 8,
                            }}
                        />
                    </View>
                    
                    <CustomButton
                        title="Tìm kiếm theo nguyên liệu"
                        style={{
                            width: getScaleFactor() * 320,
                            height: getScaleFactor() * 40,
                        }}
                        onPress={() => {}}
                    />
                </View>

                {/* Diet types section */}
                <View
                    style={{
                        width: getScaleFactor() * 384,
                        paddingTop: getScaleFactor() * 8,
                        paddingBottom: getScaleFactor() * 24,
                        backgroundColor: '#E36137',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 8,
                    }}
                >
                    <View
                        style={{
                            width: getScaleFactor() * 320,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                        }}
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            Món ăn theo chế độ ăn
                        </TextScaled>
                        <TextScaled
                            size="xs"
                            className="text-orange-500"
                        >
                            Xem thêm
                        </TextScaled>
                    </View>
                    
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 16,
                        }}
                    >
                        <FlatList
                            data={dietTypesData}
                            renderItem={renderDietTypeChip}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                gap: getScaleFactor() * 4,
                            }}
                        />
                        
                        <FlatList
                            data={featuredRecipesData.slice(0, 3)}
                            renderItem={renderRecipeCard}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                gap: getScaleFactor() * 8,
                            }}
                        />
                    </View>
                </View>

                {/* Popular topics section */}
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 8,
                    }}
                >
                    <TextScaled
                        size="base"
                        className="font-bold text-black"
                    >
                        Chủ đề phổ biến hôm nay
                    </TextScaled>
                    <FlatList
                        data={popularTopicsData}
                        renderItem={renderPopularTopic}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            gap: getScaleFactor() * 4,
                        }}
                        columnWrapperStyle={{
                            gap: getScaleFactor() * 4,
                        }}
                    />
                </View>

                {/* Featured recipes section */}
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 16,
                    }}
                >
                    <View
                        style={{
                            width: getScaleFactor() * 320,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 16,
                        }}
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            Những món ăn nổi bật
                        </TextScaled>
                        
                        <FlatList
                            data={featuredRecipesData}
                            renderItem={renderFeaturedRecipe}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                gap: getScaleFactor() * 8,
                            }}
                            columnWrapperStyle={{
                                gap: getScaleFactor() * 8,
                            }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default InspirationTab;
