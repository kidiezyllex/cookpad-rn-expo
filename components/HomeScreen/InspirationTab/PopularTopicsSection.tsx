import TextScaled from '@/components/Common/TextScaled';
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
        <div
            className="w-full mb-6 px-4 flex flex-col items-start justify-center"
        >
            <TextScaled
                className="font-bold text-black mb-2"
                size="base"
            >
                Chủ đề phổ biến hôm nay
            </TextScaled>

            <div
                className="w-full gap-1 flex flex-row flex-wrap"
            >
                {popularTopicsData.map((item) => (
                    <div
                        key={item.id}
                        className="w-[49%] h-20 rounded-lg overflow-hidden relative flex items-center justify-center"
                    >
                        <Image
                            src={images.sampleFood1}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                        />
                        {/* Layer background */}
                        <div
                            className="absolute inset-0 bg-black/40 rounded-lg"
                        />
                        <TextScaled
                            size="base"
                            className="text-center font-bold text-white"
                        >
                            {item.name}
                        </TextScaled>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularTopicsSection;
