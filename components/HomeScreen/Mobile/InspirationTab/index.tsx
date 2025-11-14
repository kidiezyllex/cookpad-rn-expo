import DietBasedDishes from './DietBasedDishes';
import FeaturedRecipesSection from './FeaturedRecipesSection';
import IngredientsSection from './IngredientsSection';
import PopularTopicsSection from './PopularTopicsSection';

const InspirationTab = () => {
    return (
        <div className="flex flex-col items-center mt-2 py-4">
            <IngredientsSection />
            <DietBasedDishes />
            <PopularTopicsSection />
            <FeaturedRecipesSection />
        </div>
    );
};

export default InspirationTab;