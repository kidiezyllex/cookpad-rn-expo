import TextScaled from '@/components/Common/TextScaled';
import PostItem from './PostItem';
import SuggestedFriendItem from './SuggestedFriendItem';
import PostsSwiper from './PostsSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs';
import { useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
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
    const paginationRef1 = useRef<HTMLDivElement>(null);
    const swiperRef1 = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (swiperRef1.current && paginationRef1.current) {
            swiperRef1.current.pagination.el = paginationRef1.current;
            swiperRef1.current.pagination.init();
            swiperRef1.current.pagination.render();
            swiperRef1.current.pagination.update();
        }
    }, [postsData]);

    return (
        <div className="items-center mt-2 bg-white py-4 space-y-8"
        >
            {/* Posts section */}
            <PostsSwiper />

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
            <PostsSwiper />
        </div>
    );
};

export default KitchenTab;
