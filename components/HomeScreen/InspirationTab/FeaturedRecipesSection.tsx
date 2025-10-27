import FoodGrid from '@/components/Common/FoodGrid';
import TextScaled from '@/components/Common/TextScaled';
import { getScaleFactor } from '@/lib/scaling';
import { View } from 'react-native';

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

            <FoodGrid />
        </View>
    );
};

export default FeaturedRecipesSection;
