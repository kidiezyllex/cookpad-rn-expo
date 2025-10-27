import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useRoute } from '@react-navigation/native';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackHeader from '../Common/BackHeader';
import FoodGrid from '../Common/FoodGrid';
import TextScaled from '../Common/TextScaled';

const dietaryFilterData = [
    { id: '1', name: 'Ăn chay', isSelected: false },
    { id: '2', name: 'Giàu đạm', isSelected: false },
    { id: '3', name: 'Kiêng đường', isSelected: false },
    { id: '4', name: 'Ít calo', isSelected: false },
    { id: '5', name: 'Không gluten', isSelected: false },
    { id: '6', name: 'Keto', isSelected: false },
    { id: '7', name: 'Paleo', isSelected: false },
    { id: '8', name: 'Mediterranean', isSelected: false },
];

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
const TableSelection = () => {
    const route = useRoute();
    const searchQuery = (route.params as { searchQuery?: string })?.searchQuery || 'Thịt Heo';
    const [searchText, setSearchText] = useState(searchQuery);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [isFilterSelected, setIsFilterSelected] = useState(true);

    const toggleFilter = (id: string) => {
        setSelectedFilters(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const toggleFilterIcon = () => {
        setIsFilterSelected(prev => !prev);
    };

    return (
        <SafeAreaView className="flex-1" edges={['top', 'bottom', 'left', 'right']} style={{ backgroundColor: '#F1EEE8' }}>
            <BackHeader
                headerTitle="Bảng"
                onPress={() => router.back()}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    paddingHorizontal: getScaleFactor() * 16,
                }}
            >

                <View
                    style={{
                        marginVertical: getScaleFactor() * 32,
                    }}
                    className='flex-col justify-between items-center w-full'>
                    <TextScaled
                        size="3xl"
                        className="font-bold text-black text-center"
                    >
                        Hải sản
                    </TextScaled>
                    <TextScaled
                        size="base"
                        className="font-light text-black text-center"
                    >
                        14 Ghim
                    </TextScaled>
                </View>
                {/* Search and Filter */}
                <View
                    className="flex-row items-center"
                    style={{ gap: getScaleFactor() * 4, width: '100%', marginBottom: getScaleFactor() * 16 }}
                >
                    <View
                        className="flex-row items-center bg-white rounded-lg"
                        style={{
                            flex: 1,
                            height: getScaleFactor() * 32,
                            paddingHorizontal: getScaleFactor() * 8,
                            gap: getScaleFactor() * 16,
                        }}
                    >
                        <Image
                            source={icons.searchIcon}
                            style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
                            resizeMode="contain"
                        />
                        <TextScaled size="sm" className="font-medium text-textNeutralV1">
                            Tìm kiếm
                        </TextScaled>
                    </View>
                    <Pressable>
                        <Image
                            source={icons.downUpIcon}
                            style={{ width: getScaleFactor() * 32, height: getScaleFactor() * 32 }}
                            resizeMode="contain"
                        />
                    </Pressable>
                    <Pressable>
                        <Image
                            source={icons.smallPlusIcon}
                            style={{ width: getScaleFactor() * 32, height: getScaleFactor() * 32 }}
                            resizeMode="contain"
                        />
                    </Pressable>
                </View>
                <FoodGrid featuredRecipesData={searchedDishesData} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default TableSelection;
