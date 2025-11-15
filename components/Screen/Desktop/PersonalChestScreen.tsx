'use client';

import { images } from '@/constants';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
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
                className="bg-white hover:scale-95 transition-all duration-200 ease-in-out w-[100px] h-[100px] rounded-lg shadow-md relative overflow-hidden"
            >
                <div className="flex h-full w-full items-center justify-center">
                    <Image
                        src={item.icon}
                        alt={item.title}
                        width={200}
                        height={200}
                        className="object-contain h-[60px] w-[60px]"
                        quality={100}
                    />
                </div>
            </div>
            <p
                className="font-bold text-black text-sm"
            >
                {item.title}
            </p>
        </div>
    );
    const backgroundImageUrl = typeof images.personalChestBg === 'string'
        ? images.personalChestBg
        : (images.personalChestBg as StaticImageData)?.src || images.personalChestBg;
    return (
        <div
            className="flex items-center justify-center w-full h-[calc(100vh)] overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto 150vh',
                backgroundPosition: '0 0',
            }}
        >
            <div
                className="w-full mt-12 h-fit relative overflow-hidden flex flex-col items-center justify-center"
            >
                <div className='flex flex-col justify-center items-center gap-9 max-w-2xl'>
                    <div className="w-[200px] h-[200px]">
                        <div className="relative w-full h-full">
                            <Image src={images.personalChestBanner} draggable={false} alt="banner" fill className="object-contain" />
                        </div>
                    </div>
                    {/* Main Content */}
                    <div
                        className="flex flex-col items-center justify-start px-4 w-full"
                    >
                        <p
                            className="font-medium text-center text-black mb-2 text-xl"
                        >
                            Rương cá nhân
                        </p>
                        <p
                            className="font-light text-center text-textNeutralV1 mb-6 px-2 text-base"
                        >
                            Bắt đầu lưu giữ tất cả công thức của bạn với tính năng đăng công thức cá nhân và tạo bảng để lưu trữ các công thức bạn yêu thích
                        </p>
                        {/* Action Cards */}
                        <div
                            className="flex flex-row items-center justify-center gap-4 overflow-x-auto"
                        >
                            {actionCardsData.map((item) => (
                                <Link
                                    href={item.id === '1' ? '/create/recipe' : ''}
                                    key={item.id}
                                    onClick={() => {
                                        if (item.id === '1') {
                                            router.push('/create/recipe');
                                        }
                                    }}
                                >
                                    {renderActionCard({ item })}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalChestScreen;
