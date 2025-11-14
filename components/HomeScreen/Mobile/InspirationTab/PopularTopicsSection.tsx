import { images } from '@/constants';
import Image from 'next/image';

const popularTopicsData = [
    { id: '1', name: 'Salad giảm cân' },
    { id: '2', name: 'Món làm từ trứng' },
    { id: '3', name: 'Đùi gà' },
    { id: '4', name: 'Nước ép từ xoài' },
    { id: '5', name: 'Món từ bí ngô' },
    { id: '6', name: 'Món từ thịt bò' },
];

const PopularTopicsSection = () => {
    return (
        <div className="w-full flex flex-col justify-center items-start mb-6 px-4">
            <span className="mb-2 font-bold text-black text-base">
                Chủ đề phổ biến hôm nay
            </span>

            <div className="w-full flex flex-row flex-wrap gap-1">
                {popularTopicsData.map((item) => (
                    <div
                        key={item.id}
                        className="w-[49%] h-20 rounded-lg flex justify-center items-center relative overflow-hidden"
                    >
                        <Image
                            src={images.sampleFood1}
                            alt={item.name}
                            fill
                            className="rounded-lg object-cover"
                        />
                        {/* Layer background */}
                        <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-lg" />
                        <span className="font-bold text-center text-white text-base relative z-20">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularTopicsSection;
