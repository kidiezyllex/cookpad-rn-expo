import FoodGrid from '@/components/Common/FoodGrid';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { View } from 'react-native';

const featuredRecipesData = [
    { id: '1', name: 'Tôm hoàng đế ánh kim', image: images.featuredFood1, time: '3h 30m', likes: 234 },
    { id: '2', name: 'Tôm nướng sốt tiêu đen', image: images.featuredFood2, time: '2h 15m', likes: 189 },
    { id: '3', name: 'Lẩu hải sản với nước sốt tôm', image: images.featuredFood3, time: '1h 45m', likes: 156 },
    { id: '4', name: 'Sò huyết rau mùi', image: images.featuredFood4, time: '1h 20m', likes: 98 },
    { id: '5', name: 'Tôm sốt mắm ớt', image: images.featuredFood5, time: '45m', likes: 267 },
    { id: '6', name: 'Tôm sốt mắm ớt', image: images.featuredFood6, time: '45m', likes: 267 },
    { id: '7', name: 'Tôm sốt mắm ớt', image: images.featuredFood7, time: '45m', likes: 267 },
    { id: '8', name: 'Tôm sốt mắm ớt', image: images.featuredFood8, time: '45m', likes: 267 },
];

const FeaturedRecipesSection = () => {
    return (
        <View
            style={{
                width: "100%",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
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
                Những món ăn nổi bật
            </TextScaled>

            <FoodGrid featuredRecipesData={featuredRecipesData} />
        </View>
    );
};

export default FeaturedRecipesSection;
