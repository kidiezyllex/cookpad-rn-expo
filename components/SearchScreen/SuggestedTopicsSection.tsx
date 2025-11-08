import { images } from '@/constants';
import Image from 'next/image';
import TextScaled from '../Common/TextScaled';

const popularTopicsData = [
    { id: '1', name: 'Salad giảm cân' },
    { id: '2', name: 'Món làm từ trứng' },
    { id: '3', name: 'Đùi gà' },
    { id: '4', name: 'Nước ép từ xoài' },
    { id: '5', name: 'Món từ bí ngô' },
    { id: '6', name: 'Món từ thịt bò' },
    { id: '7', name: 'Món từ bí ngô' },
    { id: '8', name: 'Món từ thịt bò' },
    { id: '9', name: 'Món từ thịt bò' },
    { id: '10', name: 'Món từ thịt bò' },
];

const SuggestedTopicsSection = () => {
    return (
        <div
            className="w-full mb-12 px-4 flex flex-col items-start justify-center"
        >
            <TextScaled
                className="mb-2 font-bold text-black"
                size="base"
            >
                Chủ đề được đề xuất với bạn
            </TextScaled>

            <div
                className="w-full gap-1 flex flex-row flex-wrap"
            >
                {popularTopicsData.map((item) => (
                    <div
                        key={item.id}
                        className="w-[49%] h-20 rounded-lg flex items-center justify-center relative overflow-hidden"
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
                            className="font-bold text-center text-white"
                        >
                            {item.name}
                        </TextScaled>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuggestedTopicsSection;
