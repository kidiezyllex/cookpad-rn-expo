import CustomButton from '@/components/Common/CustomButton';
import CustomFilter from '@/components/Common/CustomFilter';
import RecipeCarousel from '@/components/Common/RecipeCarousel';
import { icons } from '@/constants';
import { useState } from 'react';
import Image from 'next/image';
import { ingredientsData } from '../../mockData';

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
        <div className="w-full flex flex-col justify-center items-start mb-6 px-4">
            <span className="mb-4 font-bold text-black text-xl">
                Trong tủ lạnh nhà bạn có gì?
            </span>
            <CustomFilter
                data={ingredientsData}
                selectedItems={selectedIngredients}
                onToggleItem={toggleIngredient}
                showFilterIcon={true}
                isFilterSelected={isFilterSelected}
                onToggleFilter={toggleFilterIcon}
            />

            <RecipeCarousel />

            <CustomButton
                title="Tìm kiếm theo nguyên liệu"
                onPress={() => { }}
                IconLeft={<Image src={icons.searchIcon} alt="Search" width={24} height={24} className="brightness-0 invert" />}
            />
        </div>
    );
};

export default IngredientsSection;
