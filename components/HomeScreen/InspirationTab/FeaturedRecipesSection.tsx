import FoodGrid from '@/components/Common/FoodGrid';
import TextScaled from '@/components/Common/TextScaled';

const FeaturedRecipesSection = () => {
    return (
        <div
            className="w-full px-16 flex flex-col items-start justify-center"
        >
            <TextScaled
                className="font-bold text-black mb-2"
                size="base"
            >
                Những món ăn nổi bật
            </TextScaled>

            <FoodGrid />
        </div>
    );
};

export default FeaturedRecipesSection;
