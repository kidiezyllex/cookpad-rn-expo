import PostItem from './PostItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs';
import { useId } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { postsData } from '../mockData';

const PostsSwiper = () => {
    const uniqueId = useId().replace(/:/g, '-');

    return (
        <div className="w-full relative px-16 mx-auto">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={4}
                spaceBetween={16}
                grabCursor={true}
                navigation={{
                    nextEl: `.swiper-button-next-posts-${uniqueId}`,
                    prevEl: `.swiper-button-prev-posts-${uniqueId}`,
                }}
                pagination={{
                    el: `.swiper-pagination-posts-${uniqueId}`,
                    clickable: true,
                    type: 'bullets',
                }}
                className="posts-swiper"
            >
                {postsData.map((item) => (
                    <SwiperSlide key={item.id} className="h-full">
                        <PostItem item={item as any} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Navigation buttons */}
            <button 
                type="button"
                className={`swiper-button-prev-posts-${uniqueId} absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-customPrimary rounded-full shadow-lg flex items-center justify-center hover:bg-[#E36137]/90 transition-all duration-300 hover:shadow-xl`}
                aria-label="Previous slide"
            >
                <ArrowLeft2 size={20} color="#fff" variant="Outline" />
            </button>
            <button 
                type="button"
                className={`swiper-button-next-posts-${uniqueId} absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-customPrimary rounded-full shadow-lg flex items-center justify-center hover:bg-[#E36137]/90 transition-all duration-300 hover:shadow-xl`}
                aria-label="Next slide"
            >
                <ArrowRight2 size={20} color="#fff" variant="Outline" />
            </button>
            {/* Pagination */}
            <div className={`swiper-pagination-posts-${uniqueId} flex justify-center mt-4 gap-2`}></div>
        </div>
    );
};

export default PostsSwiper;

