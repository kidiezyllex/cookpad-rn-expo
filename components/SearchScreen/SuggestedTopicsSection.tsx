import { images } from '@/constants';
import Image from 'next/image';

const popularTopicsData = [
    { id: '1', name: 'Salad giảm cân', image: images.sampleFood1 },
    { id: '2', name: 'Món làm từ trứng', image: images.sampleFood2 },
    { id: '3', name: 'Đùi gà', image: images.sampleFood3 },
    { id: '4', name: 'Nước ép từ xoài', image: images.sampleFood1 },
    { id: '5', name: 'Món từ bí ngô', image: images.sampleFood2 },
    { id: '6', name: 'Món từ thịt bò', image: images.sampleFood3 },
    { id: '7', name: 'Món từ bí ngô', image: images.sampleFood1 },
    { id: '8', name: 'Món từ thịt bò', image: images.sampleFood2 },
    { id: '9', name: 'Món từ thịt bò', image: images.sampleFood3 },
    { id: '10', name: 'Món từ thịt bò', image: images.sampleFood1 },
];

const SuggestedTopicsSection = () => {
    return (
        <div
            className="w-full flex flex-col items-start justify-center"
        >
            <p className="mb-2 font-bold text-black text-base">
                Chủ đề được đề xuất với bạn
            </p>

            <div
                className="w-full gap-4 grid grid-cols-6"
            >
                {popularTopicsData.map((item) => (
                    <div
                        key={item.id}
                        className="h-20 cursor-pointer rounded-lg overflow-hidden relative flex items-center justify-center"
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                        />
                        {/* Layer background */}
                        <div
                            className="absolute inset-0 bg-black/40 rounded-lg"
                        />
                        <p
                            className="text-center text-nowrap font-bold text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-base"
                        >
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuggestedTopicsSection;
