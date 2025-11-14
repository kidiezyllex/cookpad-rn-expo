"use client";

import { featuredRecipesData } from '@/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import RecipeCard from '../HomeScreen/Desktop/InspirationTab/RecipeCard';
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

const RecipeCarousel = ({ data }: RecipeCarouselProps) => {
    const baseRecipes = Array.isArray(data) && data.length > 0 ? data : featuredRecipesData;

    if (!baseRecipes.length) {
        return null;
    }

    const recipes = [...baseRecipes, ...baseRecipes, ...baseRecipes];

    return (
        <div className="mb-4 pb-1">
            <Swiper
                slidesPerView={1.2}
                spaceBetween={16}
                grabCursor={true}
                freeMode={true}
                loop={true}
                observer={true}
                observeParents={true}
                breakpoints={{
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 8,
                    },
                    640: {
                        slidesPerView: 1.8,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 2.2,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 3.2,
                        spaceBetween: 16,
                    },
                    1440: {
                        slidesPerView: 4.2,
                        spaceBetween: 16,
                    },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper !px-1"
            >
                {recipes.map((item) => (
                    <SwiperSlide key={item.id} className="!w-auto !h-auto">
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