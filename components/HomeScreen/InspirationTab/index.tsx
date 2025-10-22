import { getScaleFactor } from '@/lib/scaling';
import { View } from 'react-native';
import DietBasedDishes from './DietBasedDishes';
import FeaturedRecipesSection from './FeaturedRecipesSection';
import IngredientsSection from './IngredientsSection';
import PopularTopicsSection from './PopularTopicsSection';

const InspirationTab = () => {
    return (
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: getScaleFactor() * 8,
                paddingVertical: getScaleFactor() * 16,
            }}
        >
            <IngredientsSection />
            <DietBasedDishes />
            <PopularTopicsSection />
            <FeaturedRecipesSection />
        </View>
    );
};

export default InspirationTab;