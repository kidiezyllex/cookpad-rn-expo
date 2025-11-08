"use client";

import { featuredRecipesData } from '@/constants';
import { useRouter } from 'next/navigation';
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
    const router = useRouter();
    return (
        <div
            className="h-[158px] mb-4"
        >
            <Swiper
                slidesPerView={2.2}
                spaceBetween={8}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <button
                            onClick={() => router.push('/(root)/food-detail')}
                            className="mr-2"
                        >
                            <RecipeCard
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                time={item.time}
                                likes={item.likes}
                            />
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RecipeCarousel;
