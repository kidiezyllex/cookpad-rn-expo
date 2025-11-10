import RecipeCarousel from '@/components/Common/RecipeCarousel';
import { icons } from '@/constants';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

interface IngredientItem {
    id: string;
    name: string;
    isSelected?: boolean;
    isFilter?: boolean;
}

const ingredientsData: IngredientItem[] = [
    { id: '1', name: 'Tôm', isSelected: true },
    { id: '2', name: 'Bánh mỳ', isSelected: false },
    { id: '3', name: 'Cá', isSelected: false },
    { id: '4', name: 'Thịt lợn', isSelected: false },
    { id: '5', name: 'Thịt bò', isSelected: false },
    { id: '6', name: 'Trứng', isSelected: false },
    { id: '7', name: 'Gà', isSelected: false },
    { id: '8', name: 'Rau xanh', isSelected: false },
    { id: '9', name: 'Cà chua', isSelected: false },
    { id: '10', name: 'Hành tây', isSelected: false },
    { id: '11', name: 'Tỏi', isSelected: false },
    { id: '12', name: 'Gừng', isSelected: false },
];

const DietBasedDishes = () => {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['1']);

    const toggleIngredient = (id: string) => {
        setSelectedIngredients(prev =>
            (prev.indexOf(id) !== -1)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const renderIngredientChip = (item: IngredientItem) => (
        <button
            key={item.id}
            onClick={() => toggleIngredient(item.id)}
            className={`h-8 px-4 py-1 rounded-lg flex items-center justify-center ${
                selectedIngredients.indexOf(item.id) !== -1 ? 'bg-[#E36137]' : 'bg-[#FFEFE9]'
            }`}
        >
            <p
                className={`font-bold ${selectedIngredients.indexOf(item.id) !== -1 ? 'text-white' : 'text-customPrimary'} text-sm`}
            >
                {item.name}
            </p>
        </button>
    );

    return (
        <div
            className="w-full flex flex-col justify-center items-start mb-6 bg-white px-16 pt-2 pb-6"
        >
            <div
                className="flex justify-between items-center w-full mb-4"
            >
                <p
                    className="font-bold text-black text-base"
                >
                    Món ăn theo chế độ ăn
                </p>
                <button
                    className="text-customPrimary text-sm cursor-pointer"
                >
                    Xem thêm
                </button>
            </div>
            <div
                className="h-10 mb-2 w-full"
            >
                <Swiper slidesPerView={'auto'} spaceBetween={4}>
                    {[{ id: 'filter', name: 'Filter', isFilter: true }, ...ingredientsData].map((item: IngredientItem) => (
                        <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                            <div
                                className="mr-1"
                            >
                                {item.isFilter ? (
                                    <div
                                        className="h-8 w-8 bg-[#FFEFE9] rounded-lg flex items-center justify-center"
                                    >
                                        <Image src={icons.activeFunnelIcon} alt="filter" className="w-6 h-6" />
                                    </div>
                                ) : (
                                    renderIngredientChip(item)
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Featured recipes horizontal scroll */}
            <RecipeCarousel />
        </div>
    );
};

export default DietBasedDishes;
