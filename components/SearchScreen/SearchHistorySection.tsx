import { icons } from '@/constants';
import Image from 'next/image';
import RecipeCarousel from '../Common/RecipeCarousel';
import TextScaled from '../Common/TextScaled';

const SearchHistorySection = () => {
    return (
        <div 
            className='flex flex-col px-4 pt-4'
        >
            <TextScaled
                size="base"
                className="font-bold text-black mb-2"
            >
                Lịch sử tìm kiếm
            </TextScaled>
            <div 
                className='flex w-full flex-row items-center justify-between mb-2'
            >
                <TextScaled
                    size="sm"
                    className="font-light text-textNeutralV1"
                >
                    Món bạn đã xem gần đây
                </TextScaled>
                <Image
                    src={icons.forwardArrow}
                    alt="forward"
                    width={20}
                    height={20}
                />
            </div>
            <RecipeCarousel />
        </div>
    );
};

export default SearchHistorySection;
