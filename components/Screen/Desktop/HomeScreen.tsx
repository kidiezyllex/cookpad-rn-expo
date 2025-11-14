'use client';

import { useState } from 'react';
import InspirationTab from '../../HomeScreen/Desktop/InspirationTab';
import KitchenTab from '../../HomeScreen/Desktop/KitchenTab';
import { suggestedFriendsData } from '../../HomeScreen/mockData';
import { images, onboarding } from '@/constants';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HeroSection from '../../HomeScreen/Desktop/HeroSection';

const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState<'ban-bep' | 'cam-hung'>('ban-bep');

    // Tạo mảng dữ liệu kết hợp banner và onboarding
    const bannerData = [
        { banner: images.banner1, ...onboarding[0] },
        { banner: images.banner2, ...onboarding[1] },
        { banner: images.banner3, ...onboarding[2] },
    ];

    return (
        <div className="flex-1 bg-transparent">
            <div className='bg-backgroundV1'>
                {/* Banner Section - Swiper */}
                <div className="relative w-full min-h-[80vh]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination-banner',
                            dynamicBullets: false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        loopAdditionalSlides={2}
                        grabCursor={true}
                        className="w-full h-full banner-swiper"
                    >
                        {bannerData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-full min-h-[90vh] relative'>
                                    <div className='absolute inset-0 bg-black/40 z-10'></div>
                                    <Image src={item.banner} alt="banner" fill className="object-cover object-center banner-image-animated" />
                                    <div className='absolute inset-0 z-20 flex flex-col items-center justify-center'>
                                        <div className={`flex justify-center items-center px-4 w-[500px]`}>
                                            <Image draggable={false} quality={100} src={item.image} alt={item.title} className={`object-contain w-full onboarding-image-pulse`} />
                                        </div>
                                        <p
                                            className='text-xl font-medium text-center text-white mt-8'>
                                            {item.title}
                                        </p>
                                        <p
                                            className="text-lg max-w-3xl text-center text-[#eee] mt-2 px-4">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Banner Pagination */}
                    <div className="swiper-pagination-banner absolute bottom-8 left-1/2 -translate-x-1/2 z-50"></div>
                </div>
                {/* Hero and Tab Navigator*/}
                <HeroSection
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                {/* Bàn bếp tab content */}
                {activeTab === 'ban-bep' && (
                    <KitchenTab
                        suggestedFriendsData={suggestedFriendsData}
                    />
                )}

                {/* Cảm hứng tab content */}
                {activeTab === 'cam-hung' && <InspirationTab />}
            </div>
        </div>
    );
};

export default HomeScreen;
