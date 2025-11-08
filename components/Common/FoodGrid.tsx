import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { StaticImageData } from 'next/image';

interface FoodItem {
    id: string;
    name: string;
    image: StaticImageData | string;
    time: string;
    likes: number;
}

interface FoodGridProps {
    featuredRecipesData?: FoodItem[];
}

const FoodGrid = ({ featuredRecipesData }: FoodGridProps) => {
    const router = useRouter();
    const searchedDishesData = [
        { id: '1', name: 'Tôm hoàng đế ánh kim', image: images.featuredFood1, time: '3h 30m', likes: 234 },
        { id: '2', name: 'Tôm nướng sốt tiêu đen', image: images.featuredFood2, time: '2h 15m', likes: 189 },
        { id: '3', name: 'Lẩu hải sản với nước sốt tôm', image: images.featuredFood3, time: '1h 45m', likes: 156 },
        { id: '4', name: 'Sò huyết rau mùi', image: images.featuredFood4, time: '1h 20m', likes: 98 },
        { id: '5', name: 'Tôm sốt mắm ớt', image: images.featuredFood5, time: '45m', likes: 267 },
        { id: '6', name: 'Tôm sốt mắm ớt', image: images.featuredFood6, time: '45m', likes: 267 },
        { id: '7', name: 'Tôm sốt mắm ớt', image: images.featuredFood7, time: '45m', likes: 267 },
        { id: '8', name: 'Tôm sốt mắm ớt', image: images.featuredFood8, time: '45m', likes: 267 },
    ];

    const data = featuredRecipesData || searchedDishesData;
    return (
        <div
            className="flex flex-row items-start justify-center gap-2"
        >
            <div
                className="flex flex-row items-start justify-center pb-[112px]"
            >
                {/* Left column */}
                <div
                    className="flex w-1/2 flex-col items-start justify-center gap-4 pr-1"
                >
                    {data.slice(0, 4).map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => router.push('/food-detail')}
                            style={{
                                height: (index === 0 || index === 1 ? 240 : 160) * 0.25,
                            }}
                            className="w-full bg-white rounded-lg gap-1 flex flex-col items-start justify-center shadow-md"
                        >
                            <div className="relative h-full w-full overflow-hidden rounded-t-lg">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div
                                className="w-full px-2 pb-2 rounded-lg gap-1 flex flex-row items-center justify-center"
                            >
                                <TextScaled
                                    size="xs"
                                    className="flex-1 font-semibold text-black"
                                >
                                    {item.name}
                                </TextScaled>
                                <Image src={icons.threeDotsIcon} alt="more" className="w-4 h-4" />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Right column */}
                <div
                    className="flex w-1/2 flex-col items-start justify-center gap-4 pl-1"
                >
                    {data.slice(4, 8).map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => router.push('/food-detail')}
                            style={{
                                height: (index === 0 ? 144 : index === 1 ? 224 : index === 2 ? 256 : 240) * 0.25,
                            }}
                            className="w-full bg-white rounded-lg gap-1 flex flex-col items-start justify-center shadow-md"
                        >
                            <div className="relative h-full w-full overflow-hidden rounded-t-lg">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div
                                className="w-full px-2 pb-2 rounded-lg gap-1 flex flex-row items-center justify-center"
                            >
                                <TextScaled
                                    size="xs"
                                    className="flex-1 font-semibold text-black"
                                >
                                    {item.name}
                                </TextScaled>
                                <Image src={icons.threeDotsIcon} alt="more" className="w-4 h-4" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoodGrid;
