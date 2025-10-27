import CustomButton from '@/components/Common/CustomButton';
import CustomFilter from '@/components/Common/CustomFilter';
import TextScaled from '@/components/Common/TextScaled';
import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useState } from 'react';
import { Image, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { featuredRecipesData, ingredientsData } from '../mockData';
import RecipeCard from './RecipeCard';

const IngredientsSection = () => {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['1']);
    const [isFilterSelected, setIsFilterSelected] = useState(true);

    const toggleIngredient = (id: string) => {
        setSelectedIngredients(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const toggleFilterIcon = () => {
        setIsFilterSelected(prev => !prev);
    };


    return (
        <View
            style={{
                width: "100%",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginBottom: getScaleFactor() * 24,
                paddingHorizontal: getScaleFactor() * 16,
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
            <CustomFilter
                data={ingredientsData}
                selectedItems={selectedIngredients}
                onToggleItem={toggleIngredient}
                showFilterIcon={true}
                isFilterSelected={isFilterSelected}
                onToggleFilter={toggleFilterIcon}
            />
            
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

            <CustomButton
                title="Tìm kiếm theo nguyên liệu"
                onPress={() => { }}
                IconLeft={<Image source={icons.searchIcon} style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24, tintColor: 'white' }} resizeMode="contain" />}
            />
        </View>
    );
};

export default IngredientsSection;
