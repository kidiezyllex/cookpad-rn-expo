import TextScaled from '@/components/Common/TextScaled';
import PostItem from './PostItem';
import SuggestedFriendItem from './SuggestedFriendItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PostData {
    id: string;
    user: {
        name: string;
        timeAgo: string;
    };
    content: {
        title: string;
        description: string;
        hashtags: string[];
        likes: number;
        comments: number;
        image: unknown;
    };
    comments: Array<{
        user: string;
        text: string;
    }>;
}

interface SuggestedFriendData {
    id: string;
    name: string;
    commonFriends: number;
    hashtag: string;
}

interface KitchenTabProps {
    postsData: PostData[];
    suggestedFriendsData: SuggestedFriendData[];
}

const KitchenTab = ({ postsData, suggestedFriendsData }: KitchenTabProps) => {
    return (
        <div className="items-center mt-2 bg-white py-4 space-y-8"
        >
            {/* Posts section */}
            <div className="w-full relative px-16 mx-auto">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={4}
                    spaceBetween={16}
                    grabCursor={true}
                    navigation={{
                        nextEl: '.swiper-button-next-posts',
                        prevEl: '.swiper-button-prev-posts',
                    }}
                    pagination={{
                        el: '.swiper-pagination-posts',
                        clickable: true,
                    }}
                    className="posts-swiper"
                >
                    {postsData.map((item) => (
                        <SwiperSlide key={item.id} className="h-full mb-1">
                            <PostItem item={item as any} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation buttons */}
                <button 
                    type="button"
                    className="swiper-button-prev-posts absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-customPrimary rounded-full shadow-md flex items-center justify-center hover:bg-customPrimary/80 transition-colors"
                    aria-label="Previous slide"
                >
                    <ArrowLeft2 size={20} color="#fff" variant="Outline" />
                </button>
                <button 
                    type="button"
                    className="swiper-button-next-posts absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-customPrimary rounded-full shadow-md flex items-center justify-center hover:bg-customPrimary/80 transition-colors"
                    aria-label="Next slide"
                >
                    <ArrowRight2 size={20} color="#fff" variant="Outline" />
                </button>
                {/* Pagination */}
                <div className="swiper-pagination-posts flex justify-center mt-4 gap-2"></div>
            </div>

            {/* Suggested friends section */}
            <div className='py-2 bg-[#F1EEE8]'>
            <div className="flex flex-col items-start justify-start bg-white pt-4 px-16 pb-8 gap-4">
                <div className="flex w-full flex-row items-start justify-between">
                    <TextScaled
                        size="base"
                        className="font-bold text-black"
                    >
                        Gợi ý Bạn Bếp
                    </TextScaled>
                    <button
                        className="text-orange-500 text-sm cursor-pointer"
                    >
                        Xem thêm
                    </button>
                </div>
                <div className="w-full grid grid-cols-4 gap-4">
                    {suggestedFriendsData.map((item) => (
                        <SuggestedFriendItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            </div>

            {/* Additional posts section */}
            <div className="w-full relative px-16 mx-auto">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={4}
                    spaceBetween={16}
                    grabCursor={true}
                    navigation={{
                        nextEl: '.swiper-button-next-posts',
                        prevEl: '.swiper-button-prev-posts',
                    }}
                    pagination={{
                        el: '.swiper-pagination-posts',
                        clickable: true,
                    }}
                    className="posts-swiper"
                >
                    {postsData.map((item) => (
                        <SwiperSlide key={item.id} className="h-full mb-1">
                            <PostItem item={item as any} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation buttons */}
                <button 
                    type="button"
                    className="swiper-button-prev-posts absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-customPrimary rounded-full shadow-md flex items-center justify-center hover:bg-customPrimary/80 transition-colors"
                    aria-label="Previous slide"
                >
                    <ArrowLeft2 size={20} color="#fff" variant="Outline" />
                </button>
                <button 
                    type="button"
                    className="swiper-button-next-posts absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-customPrimary rounded-full shadow-md flex items-center justify-center hover:bg-customPrimary/80 transition-colors"
                    aria-label="Next slide"
                >
                    <ArrowRight2 size={20} color="#fff" variant="Outline" />
                </button>
                {/* Pagination */}
                <div className="swiper-pagination-posts flex justify-center mt-4 gap-2"></div>
            </div>
        </div>
    );
};

export default KitchenTab;
