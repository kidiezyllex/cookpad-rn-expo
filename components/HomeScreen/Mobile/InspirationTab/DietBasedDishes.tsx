import RecipeCarousel from '@/components/Common/RecipeCarousel';
import { icons } from '@/constants';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

const ingredientsData = [
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
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const renderIngredientChip = (item: any) => (
        <button
            key={item.id}
            onClick={() => toggleIngredient(item.id)}
            className={`h-8 px-4 py-1 rounded-lg flex justify-center items-center font-bold text-sm ${selectedIngredients.includes(item.id)
                ? 'bg-[#E36137] text-white'
                : 'bg-[#FFEFE9] text-customPrimary'
                }`}
        >
            {item.name}
        </button>
    );

    return (
        <div className="w-full flex flex-col justify-center items-start mb-6 bg-white px-4 pt-2 pb-6">
            <div className="mb-4 flex flex-row justify-between items-center w-full">
                <span className="font-bold text-black text-base">
                    Món ăn theo chế độ ăn
                </span>
                <span className="font-light text-customPrimary text-sm">
                    Xem thêm
                </span>
            </div>
            <div className="h-10 mb-2">
                <Swiper
                    spaceBetween={4}
                    slidesPerView="auto"
                    className="!px-0"
                >
                    <SwiperSlide className="!w-auto mr-1">
                        <button
                            className="h-8 w-8 bg-[#FFEFE9] rounded-lg flex justify-center items-center"
                        >
                            <Image
                                src={icons.activeFunnelIcon}
                                alt="Filter"
                                width={24}
                                height={24}
                            />
                        </button>
                    </SwiperSlide>
                    {ingredientsData.map((item) => (
                        <SwiperSlide key={item.id} className="!w-auto mr-1">
                            {renderIngredientChip(item)}
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
