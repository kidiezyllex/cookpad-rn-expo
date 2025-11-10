import CustomButton from '@/components/Common/CustomButton';
import CustomFilter from '@/components/Common/CustomFilter';
import RecipeCarousel from '@/components/Common/RecipeCarousel';
import { icons } from '@/constants';
import { useState } from 'react';
import { ingredientsData } from '../mockData';
import Image from 'next/image';

const IngredientsSection = () => {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['1']);
    const [isFilterSelected, setIsFilterSelected] = useState(true);

    const toggleIngredient = (id: string) => {
        setSelectedIngredients(prev =>
            (prev.indexOf(id) !== -1)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const toggleFilterIcon = () => {
        setIsFilterSelected(prev => !prev);
    };


    return (
        <div
            className="w-full mb-6 px-16 flex flex-col items-start justify-center"
        >
            <p
                className="font-bold text-black mb-4 text-xl"
            >
                Trong tủ lạnh nhà bạn có gì?
            </p>
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
                className='w-fit mx-auto'
                IconLeft={<Image src={icons.searchIcon} alt="search" width={24} height={24} className="brightness-0 invert" />}
            />
        </div>
    );
};

export default IngredientsSection;
