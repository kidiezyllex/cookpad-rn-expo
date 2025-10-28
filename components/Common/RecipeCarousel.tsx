import { featuredRecipesData } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import RecipeCard from '../HomeScreen/InspirationTab/RecipeCard';

interface RecipeItem {
    id: string;
    name: string;
    image: any;
    time: string;
    likes: number;
}

interface RecipeCarouselProps {
    data?: RecipeItem[];
}

const RecipeCarousel = ({ data = featuredRecipesData }: RecipeCarouselProps) => {
    return (
        <View
            style={{
                height: getScaleFactor() * 158,
                marginBottom: getScaleFactor() * 16,
            }}
        >
            <SwiperFlatList
                data={data}
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
    );
};

export default RecipeCarousel;
