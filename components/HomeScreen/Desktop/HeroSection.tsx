import { images } from '@/constants';
import Image from 'next/image';

interface HeroSectionProps {
    activeTab: 'ban-bep' | 'cam-hung';
    onTabChange: (tab: 'ban-bep' | 'cam-hung') => void;
}

const HeroSection = ({ activeTab, onTabChange }: HeroSectionProps) => {
    return (
        <div
            className=" h-[256px] mx-16 my-4 rounded-b-xl"
        >
            {/* Tab Navigator section */}
            <div className='flex flex-row items-center'>
                <button
                    className={`${activeTab === 'ban-bep' ? 'border-b-white bg-customPrimary' : 'bg-[#F1EEE8] border-b-transparent'} w-[50%] items-center justify-center rounded-t-xl border-b-2 min-h-[40px] h-[40px] `}
                    onClick={() => onTabChange('ban-bep')}
                >
                    <p
                        className={`font-medium ${activeTab === 'ban-bep' ? 'text-white' : 'text-customPrimary'} text-base`}
                    >
                        Bạn Bếp
                    </p>
                </button>
                <button
                    className={`${activeTab === 'cam-hung' ? 'border-b-white bg-customPrimary' : 'bg-[#F1EEE8] border-b-transparent'} w-[50%] items-center justify-center rounded-t-xl border-b-2 min-h-[40px] h-[40px]`}
                    onClick={() => onTabChange('cam-hung')}
                >
                    <p
                        className={`font-medium ${activeTab === 'cam-hung' ? 'text-white' : 'text-customPrimary'} text-base`}
                    >
                        Cảm hứng
                    </p>
                </button>
            </div>
            {/* Hero section */}
            <div className={`relative bg-customPrimary h-[216px] w-full rounded-b-xl ${activeTab === 'cam-hung' ? 'rounded-tl-xl' : 'rounded-tr-xl'}`}>
                <div className="absolute left-0 bottom-0 w-[200px] h-[200px]">
                    <Image src={images.homeHero} alt="home-hero" width={200} height={200} />
                </div>

                <div className='absolute flex flex-col justify-center items-center right-[19px] top-[50px] w-[186px] h-[98px]'
                >
                    <Image src={images.messageBubble} alt="message-bubble" fill className="object-contain z-0 absolute inset-0" />
                    <p
                        className="font-medium text-customSecondary max-w-[141px] z-10 relative text-sm"
                    >
                        Chào ngày mới, <span className="font-bold text-blue-900 text-base">Hòa</span>
                    </p>
                    <p
                        className="font-light text-customSecondary max-w-[141px] z-10 relative text-xs"
                    >
                        Cùng vào xem các công thức mới của Bạn Bếp nào!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
