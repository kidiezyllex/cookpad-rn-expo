'use client';

import { images } from '@/constants';
import TextScaled from '../Common/TextScaled';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const actionCardsData = [
    {
        id: '1',
        title: 'Tạo công thức',
        icon: images.menu,
        iconColor: 'red',
        iconSize: 44
    },
    {
        id: '2',
        title: 'Tạo bảng',
        icon: images.table,
        iconColor: 'blue',
        iconSize: 56
    },
];

const PersonalChestScreen = () => {
    const router = useRouter();
    const renderActionCard = ({ item }: { item: typeof actionCardsData[0] }) => (
        <div
            className="flex flex-col items-center justify-start gap-2"
        >
            <div
                className="bg-white w-[100px] h-[100px] rounded-lg relative overflow-hidden"
            >
                <div className="flex h-full w-full items-center justify-center">
                    <Image
                        src={item.icon}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="object-contain"
                    />
                </div>
            </div>
            <TextScaled
                size="sm"
                className="font-bold text-black"
            >
                {item.title}
            </TextScaled>
        </div>
    );

    return (
        <div className="flex-1 bg-[#F5F5F5]">
            <div
                className="w-full h-full relative bg-[#F5F5F5] overflow-hidden"
            >
                {/* Background Images */}
                <div className="absolute left-0 top-0 w-[384px] h-[883.22px]">
                    <Image src={images.personalChestBg} alt="bg" fill className="object-cover" />
                </div>
                <div className="absolute top-[82px] left-1/2 w-[200px] h-[200px] -translate-x-[100px]">
                    <Image src={images.personalChestBanner} alt="banner" fill className="object-contain" />
                </div>
                {/* Main Content */}
                <div
                    className="absolute flex flex-col items-center justify-start px-4 w-full top-[320px]"
                >
                    <TextScaled
                        className="font-medium text-center text-black mb-2"
                        size="xl"
                    >
                        Rương cá nhân
                    </TextScaled>
                    <TextScaled
                        className="font-light text-center text-textNeutralV1 mb-6 px-2"
                        size="base"
                    >
                        Bắt đầu lưu giữ tất cả công thức của bạn với tính năng đăng công thức cá nhân và tạo bảng để lưu trữ các công thức bạn yêu thích
                    </TextScaled>

                    {/* Action Cards */}
                    <div
                        className="flex flex-row items-center justify-center gap-4 overflow-x-auto"
                    >
                        {actionCardsData.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    if (item.id === '1') {
                                        router.push('/create-recipe');
                                    }
                                }}
                            >
                                {renderActionCard({ item })}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalChestScreen;
