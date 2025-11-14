import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import Image from 'next/image';
import Link from 'next/link';

interface FoodItem {
    id: string;
    name: string;
    image: any;
    time: string;
    likes: number;
}

interface FoodGridProps {
    featuredRecipesData?: FoodItem[];
}

const MobileFoodGrid = ({ featuredRecipesData }: FoodGridProps) => {
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

    // Generate random heights for masonry effect
    const getRandomHeight = (index: number) => {
        const heights = [200, 240, 280, 320, 180, 260, 300, 220];
        return getScaleFactor() * heights[index % heights.length];
    };

    return (
        <div
            className="masonry-grid pb-28"
            style={{
                columnCount: 2,
                columnGap: '8px',
                columnFill: 'balance'
            }}
        >
            {data.map((item, index) => (
                <Link
                    key={item.id}
                    href="/food-detail"
                    className="w-full bg-white flex flex-col justify-start items-start shadow-lg hover:shadow-xl transition-shadow rounded-lg mb-2 break-inside-avoid"
                    style={{
                        display: 'inline-block',
                        width: '100%'
                    }}
                >
                    <div
                        className="w-full relative overflow-hidden rounded-t-lg"
                        style={{
                            height: getRandomHeight(index) - 60 // Subtract space for text content
                        }}
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                            quality={100}
                            draggable={false}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full flex flex-row justify-center items-center pl-2 pr-1.5 py-2 rounded-b-lg gap-1">
                        <span className="flex-1 font-semibold text-black text-xs truncate">
                            {item.name}
                        </span>
                        <Image
                            src={icons.threeDotsIcon}
                            alt="More options"
                            width={100}
                            height={100}
                            quality={100}
                            draggable={false}
                            className="object-contain w-auto h-4"
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MobileFoodGrid;