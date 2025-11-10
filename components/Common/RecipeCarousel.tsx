"use client";

import { featuredRecipesData } from '@/constants';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecipeCard from '../HomeScreen/InspirationTab/RecipeCard';
import { StaticImageData } from 'next/image';

interface RecipeItem {
    id: string;
    name: string;
    image: StaticImageData | string;
    time: string;
    likes: number;
}

interface RecipeCarouselProps {
    data?: RecipeItem[];
}

const RecipeCarousel = ({ data = featuredRecipesData }: RecipeCarouselProps) => {
    return (
        <div
            className="mb-4 pb-1"
        >
            <Swiper
                slidesPerView="auto"
                spaceBetween={8}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} style={{ width: 'auto' }} className="w-auto">
                        <RecipeCard
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            time={item.time}
                            likes={item.likes}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RecipeCarousel;
