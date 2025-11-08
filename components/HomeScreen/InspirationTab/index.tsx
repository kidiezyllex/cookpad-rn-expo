import DietBasedDishes from './DietBasedDishes';
import FeaturedRecipesSection from './FeaturedRecipesSection';
import IngredientsSection from './IngredientsSection';
import PopularTopicsSection from './PopularTopicsSection';

const InspirationTab = () => {
    return (
        <div
            className="flex flex-col items-center pt-4 pb-4"
        >
            <IngredientsSection />
            <DietBasedDishes />
            <PopularTopicsSection />
            <FeaturedRecipesSection />
        </div>
    );
};

export default InspirationTab;