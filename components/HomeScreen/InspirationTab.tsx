import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useState } from 'react';
import { Image, Pressable, View } from 'react-native';

const ingredientsData = [
    { id: '1', name: 'Tôm', isSelected: true },
    { id: '2', name: 'Bánh mỳ', isSelected: false },
    { id: '3', name: 'Cá', isSelected: false },
    { id: '4', name: 'Thịt lợn', isSelected: false },
    { id: '5', name: 'Thịt bò', isSelected: false },
    { id: '6', name: 'Trứng', isSelected: false },
];

const dietTypesData = [
    { id: '1', name: 'Ăn chay', isSelected: true },
    { id: '2', name: 'Giàu đạm', isSelected: false },
    { id: '3', name: 'Kiêng đường', isSelected: false },
    { id: '4', name: 'Ít calo', isSelected: false },
    { id: '5', name: 'Ăn sạch', isSelected: false },
    { id: '6', name: 'Ít đạm', isSelected: false },
    { id: '7', name: 'Diet', isSelected: false },
];

const popularTopicsData = [
    { id: '1', name: 'Salad giảm cân' },
    { id: '2', name: 'Món làm từ trứng' },
    { id: '3', name: 'Đùi gà' },
    { id: '4', name: 'Nước ép từ xoài' },
    { id: '5', name: 'Món từ bí ngô' },
    { id: '6', name: 'Món từ thịt bò' },
];

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
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: getScaleFactor() * 8,
                padding: getScaleFactor() * 16,
            }}
        >
            {/* Ingredients section */}
            <View
                style={{
                    width: "100%",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginBottom: getScaleFactor() * 24,
                }}
            >
                <TextScaled
                    style={{
                        marginBottom: getScaleFactor() * 16,
                    }}
                    size="xl"
                    className="font-bold text-black"
                >
                    Trong tủ lạnh nhà bạn có gì?
                </TextScaled>
                <View
                    style={{
                        flexDirection: 'row',
                        gap: getScaleFactor() * 4,
                        backgroundColor: 'red',
                        marginBottom: getScaleFactor() * 8,
                    }}
                >
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
                    {ingredientsData.map(renderIngredientChip)}
                </View>
                {/* Featured recipes horizontal scroll */}
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: getScaleFactor() * 8,
                        marginBottom: getScaleFactor() * 16,
                    }}
                >
                    {featuredRecipesData.slice(0, 3).map((item) => (
                        <View
                            key={item.id}
                            style={{
                                width: '31.5%',
                                backgroundColor: 'white',
                                borderRadius: getScaleFactor() * 8,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: getScaleFactor() * 3 },
                                shadowOpacity: 0.1,
                                shadowRadius: getScaleFactor() * 12,
                                elevation: 3,
                                paddingBottom: getScaleFactor() * 4,
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    height: getScaleFactor() * 112,
                                    position: 'relative',
                                    borderTopLeftRadius: getScaleFactor() * 8,
                                    borderTopRightRadius: getScaleFactor() * 8,
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                    }}
                                    source={item.image}
                                    resizeMode="cover"
                                />
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: getScaleFactor() * 24,
                                        paddingHorizontal: getScaleFactor() * 4,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: getScaleFactor() * 2,
                                        }}
                                    >
                                        <Image source={icons.clockIcon} style={{ width: getScaleFactor() * 10, height: getScaleFactor() * 10 }} resizeMode="contain" />
                                        <TextScaled
                                            size="xs"
                                            className="text-white"
                                        >
                                            {item.time}
                                        </TextScaled>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: getScaleFactor() * 2,
                                        }}
                                    >
                                        <Image source={icons.save2Icon} style={{ width: getScaleFactor() * 10, height: getScaleFactor() * 10 }} resizeMode="contain" />
                                        <TextScaled
                                            size="xs"
                                            className="text-white"
                                        >
                                            {item.likes}
                                        </TextScaled>
                                    </View>
                                </View>
                            </View>
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
                                    className="flex-1 font-medium text-black"
                                    numberOfLines={2}
                                    ellipsizeMode="tail"
                                >
                                    {item.name}
                                </TextScaled>
                                <Image source={icons.threeDotsIcon} style={{ width: getScaleFactor() * 16, height: getScaleFactor() * 16 }} />
                            </View>
                        </View>
                    ))}
                </View>

                <CustomButton
                    title="Tìm kiếm theo nguyên liệu"
                    onPress={() => { }}
                    IconLeft={<Image source={icons.searchIcon} style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24, tintColor: 'white' }} resizeMode="contain" />}
                />
            </View>

            {/* Chủ đề phổ biến hôm nay section */}
            <View
                style={{
                    width: "100%",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                <TextScaled
                    style={{
                        marginBottom: getScaleFactor() * 8,
                    }}
                    size="base"
                    className="font-bold text-black"
                >
                    Chủ đề phổ biến hôm nay
                </TextScaled>

                <View
                    style={{
                        width: "100%",
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 4,
                    }}
                >
                    {popularTopicsData.map((item) => (
                        <View
                            key={item.id}
                            style={{
                                height: getScaleFactor() * 80,
                                padding: getScaleFactor() * 10,
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                borderRadius: getScaleFactor() * 8,
                                justifyContent: 'flex-end',
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
                            <TextScaled
                                size="base"
                                className="font-bold text-center text-white"
                                style={{
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                {item.name}
                            </TextScaled>
                        </View>
                    ))}
                </View>
            </View>

            {/* Những món ăn nổi bật section */}
            <View
                style={{
                    width: "100%",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: getScaleFactor() * 8,
                }}
            >
                <View
                    style={{
                        width: "48%",
                        flexDirection: 'column',
                        justifyContent: 'center',
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
                </View>

                <View
                    style={{
                        width: getScaleFactor() * 320,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 8,
                    }}
                >
                    <View
                        style={{
                            width: getScaleFactor() * 320,
                            paddingBottom: getScaleFactor() * 112,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 8,
                        }}
                    >
                        {/* Left column */}
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 16,
                            }}
                        >
                            {featuredRecipesData.slice(0, 4).map((item, index) => (
                                <View
                                    key={item.id}
                                    style={{
                                        width: getScaleFactor() * 160,
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
                                            width: getScaleFactor() * 160,
                                            flex: 1,
                                            borderTopLeftRadius: getScaleFactor() * 8,
                                            borderTopRightRadius: getScaleFactor() * 8,
                                        }}
                                        source={item.image}
                                        resizeMode="cover"
                                    />
                                    <View
                                        style={{
                                            width: getScaleFactor() * 160,
                                            paddingHorizontal: getScaleFactor() * 8,
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
                            ))}
                        </View>

                        {/* Right column */}
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 16,
                            }}
                        >
                            {featuredRecipesData.slice(4, 8).map((item, index) => (
                                <View
                                    key={item.id}
                                    style={{
                                        width: getScaleFactor() * 160,
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
                                            width: getScaleFactor() * 160,
                                            flex: 1,
                                            borderTopLeftRadius: getScaleFactor() * 8,
                                            borderTopRightRadius: getScaleFactor() * 8,
                                        }}
                                        source={item.image}
                                        resizeMode="cover"
                                    />
                                    <View
                                        style={{
                                            width: getScaleFactor() * 160,
                                            paddingHorizontal: getScaleFactor() * 8,
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
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default InspirationTab;