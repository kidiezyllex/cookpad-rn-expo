import { images } from '@/constants';
import Image from 'next/image';

interface HeroSectionProps {
    activeTab: 'ban-bep' | 'cam-hung';
    onTabChange: (tab: 'ban-bep' | 'cam-hung') => void;
}

const HeroSection = ({ activeTab, onTabChange }: HeroSectionProps) => {
    return (
        <div className="h-64 bg-[#E36137] relative w-full">
            {/* Hero section */}
            <div className="absolute left-0 bottom-0 w-[200px] h-[200px]">
                <Image
                    src={images.homeHero}
                    alt="Hero"
                    width={200}
                    height={200}
                    className="object-contain"
                />
            </div>

            <div className="absolute right-5 top-12">
                <div className="relative w-[186px] h-[98px] flex flex-col justify-center items-center">
                    <div className="absolute inset-0">
                        <Image
                            src={images.messageBubble}
                            alt="Message bubble"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-medium text-customSecondary text-sm max-w-[141px] relative z-10">
                        Chào ngày mới, <span className="font-bold text-blue-900 text-base">Hòa</span>
                    </span>
                    <span className="font-light text-customSecondary text-xs max-w-[141px] relative z-10">
                        Cùng vào xem các công thức mới của Bạn Bếp nào!
                    </span>
                </div>
            </div>

            {/* Tab Navigator section */}
            <div className="flex flex-row items-center fixed top-0 left-0 right-0 z-50 bg-[#E36137]">
                <button
                    className={`border-b-2 min-h-[38px] h-[38px] ${activeTab === 'ban-bep' ? 'border-b-white' : 'border-b-transparent'
                        } w-[50%] flex justify-center items-center`}
                    onClick={() => onTabChange('ban-bep')}
                >
                    <span className={`font-medium ${activeTab === 'ban-bep' ? 'text-white' : 'text-white/50'
                        } text-base`}>
                        Bạn Bếp
                    </span>
                </button>
                <button
                    className={`border-b-2 min-h-[38px] h-[38px] ${activeTab === 'cam-hung' ? 'border-b-white' : 'border-b-transparent'
                        } w-[50%] flex justify-center items-center`}
                    onClick={() => onTabChange('cam-hung')}
                >
                    <span className={`font-medium ${activeTab === 'cam-hung' ? 'text-white' : 'text-white/50'
                        } text-base`}>
                        Cảm hứng
                    </span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
