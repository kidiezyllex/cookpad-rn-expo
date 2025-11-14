import { icons, images } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';
import SearchDropdown from './SearchDropdown';

const HeroSection = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleFocus = () => {
        setIsDropdownOpen(true);
    };

    const handleClose = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div
            className="relative bg-[#E36137] h-56 grid grid-cols-2 rounded-xl"
        >
            {/* Search Field */}
            <div className="relative flex flex-col items-start justify-start px-4 pt-4">
                <div className="relative w-full">
                    <div
                        className="flex w-full flex-row items-center justify-start rounded-lg bg-white h-10 px-2 gap-4 relative z-10"
                    >
                        <Image
                            src={icons.searchIcon}
                            alt="search"
                            width={24}
                            height={24}
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
                            <span
                                className="font-medium text-red-500 text-sm"
                            >
                                Hot
                            </span>
                        </div>
                        <input
                            placeholder="Mì tôm thanh long"
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                            onFocus={handleFocus}
                            className="text-sm font-medium text-black border-none outline-none flex-1 bg-transparent"
                        />
                    </div>
                    <SearchDropdown
                        searchText={searchValue}
                        isOpen={isDropdownOpen}
                        onClose={handleClose}
                    />
                </div>
            </div>
            {/* Hero section */}
            <div className='relative'>
                <div className="absolute right-0 bottom-0 w-[200px] h-[200px]">
                    <Image src={images.searchHero} alt="search hero" fill className="object-contain" />
                </div>

                <div
                    className='absolute flex items-center justify-center w-[170px] h-[137px] right-[200px] bottom-[48px]'
                >
                    <div className="absolute inset-0">
                        <Image src={images.messageBubble2} alt="bubble" fill className="object-contain" />
                    </div>
                    <span
                        className="text-[13px] font-light text-customSecondary max-w-[120px] relative z-10"
                    >
                        Nhập tên món ăn nếu bạn đã lựa chọn được món muốn nấu hoặc nhập tên nguyên liệu để xem gợi ý nhé!
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
