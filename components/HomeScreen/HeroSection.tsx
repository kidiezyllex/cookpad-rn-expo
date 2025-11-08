import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import Image from 'next/image';

interface HeroSectionProps {
    activeTab: 'ban-bep' | 'cam-hung';
    onTabChange: (tab: 'ban-bep' | 'cam-hung') => void;
}

const HeroSection = ({ activeTab, onTabChange }: HeroSectionProps) => {
    return (
        <div
            className="relative bg-[#E36137] h-[256px]"
        >
            {/* Hero section */}
            <div className="absolute left-0 bottom-0 w-[200px] h-[200px]">
                <Image src={images.homeHero} alt="home-hero" width={200} height={200} />
            </div>

            <div
                className='absolute justify-center items-center right-[19px] top-[50px] w-[186px] h-[98px]'
            >
                <div className="absolute inset-0">
                    <Image src={images.messageBubble} alt="message-bubble" fill className="object-contain" />
                </div>
                <TextScaled
                    size="sm"
                    className="font-medium text-customSecondary max-w-[141px]"
                >
                    Chào ngày mới, <TextScaled size="base" className="font-bold text-blue-900">Hòa</TextScaled>
                </TextScaled>
                <TextScaled
                    className="font-light text-customSecondary max-w-[141px]"
                    size="xs"
                >
                    Cùng vào xem các công thức mới của Bạn Bếp nào!
                </TextScaled>
            </div>

            {/* Tab Navigator section */}
            <div className='flex flex-row items-center'>
                <button
                    className={`${activeTab === 'ban-bep' ? 'border-b-white' : 'border-b-transparent'} w-[50%] items-center justify-center border-b-2 min-h-[38px] h-[38px]`}
                    onClick={() => onTabChange('ban-bep')}
                >
                    <TextScaled
                        size="base"
                        className={`font-medium ${activeTab === 'ban-bep' ? 'text-white' : 'text-white/50'}`}
                    >
                        Bạn Bếp
                    </TextScaled>
                </button>
                <button
                    className={`${activeTab === 'cam-hung' ? 'border-b-white' : 'border-b-transparent'} w-[50%] items-center justify-center border-b-2 min-h-[38px] h-[38px]`}
                    onClick={() => onTabChange('cam-hung')}
                >
                    <TextScaled
                        size="base"
                        className={`font-medium ${activeTab === 'cam-hung' ? 'text-white' : 'text-white/50'}`}
                    >
                        Cảm hứng
                    </TextScaled>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
