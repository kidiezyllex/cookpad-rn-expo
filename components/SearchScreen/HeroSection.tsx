import { icons, images } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import TextScaled from '../Common/TextScaled';

const HeroSection = () => {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    return (
        <div
            className="relative bg-[#E36137] h-[256px]"
        >
            {/* Hero section */}
            <div className="absolute right-0 bottom-0 w-[200px] h-[200px]">
                <Image src={images.searchHero} alt="search hero" fill className="object-contain" />
            </div>

            <div
                className='absolute flex items-center justify-center w-[170px] h-[137px] left-[25px] bottom-[48px]'
            >
                <div className="absolute inset-0">
                    <Image src={images.messageBubble2} alt="bubble" fill className="object-contain" />
                </div>
                <TextScaled
                    size="xs"
                    className="font-light text-customSecondary max-w-[110px]"
                >
                    Nhập tên món ăn nếu bạn đã lựa chọn được món muốn nấu hoặc nhập tên nguyên liệu để xem gợi ý nhé!
                </TextScaled>
            </div>

            {/* Search Field */}
            <div
                className="flex flex-row items-center justify-start px-4 pt-4"
            >
                <div
                    className="flex w-full flex-row items-center justify-start rounded-lg bg-white h-10 px-2 gap-4"
                >
                    <Image
                        src={icons.searchIcon}
                        alt="search"
                        width={24}
                        height={24}
                        className="mr-4"
                    />
                    <div
                        className="flex flex-row items-center justify-start rounded bg-[rgba(239,68,68,0.2)] px-1 py-0.5 gap-0.5"
                    >
                        <Image
                            src={icons.fireIcon}
                            alt="hot"
                            width={16}
                            height={16}
                        />
                        <TextScaled
                            size="sm"
                            className="font-medium text-red-500"
                        >
                            Hot
                        </TextScaled>
                    </div>
                    <input
                        placeholder="Mì tôm thanh long"
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        onFocus={() => router.push('/search-bar')}
                        className="text-sm font-medium text-black border-none outline-none flex-1 bg-transparent"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
