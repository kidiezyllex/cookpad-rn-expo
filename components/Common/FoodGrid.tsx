import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { StaticImageData } from 'next/image';

interface FoodItem {
    id: string;
    name: string;
    image: StaticImageData | string;
}

interface FoodGridProps {
    featuredRecipesData?: FoodItem[];
}

const FoodGrid = ({ featuredRecipesData }: FoodGridProps) => {
    const router = useRouter();
    const searchedDishesData = [
        { id: '1', name: 'Tôm hoàng đế ánh kim', image: images.featuredFood1 },
        { id: '2', name: 'Tôm nướng sốt tiêu đen', image: images.featuredFood2 },
        { id: '3', name: 'Lẩu hải sản với nước sốt tôm', image: images.featuredFood3 },
        { id: '4', name: 'Sò huyết rau mùi', image: images.featuredFood4 },
        { id: '5', name: 'Tôm sốt mắm ớt', image: images.featuredFood5 },
        { id: '6', name: 'Cá nướng lá chuối', image: images.featuredFood6 },
        { id: '7', name: 'Thịt bò xào rau củ', image: images.featuredFood7 },
        { id: '8', name: 'Trứng chiên thịt bằm', image: images.featuredFood8 },
        { id: '9', name: 'Phở bò truyền thống', image: images.featuredFood1 },
        { id: '10', name: 'Bún chả Hà Nội', image: images.featuredFood2 },
        { id: '11', name: 'Bánh mì thịt nướng', image: images.featuredFood3 },
        { id: '12', name: 'Gỏi cuốn tôm thịt', image: images.featuredFood4 },
        { id: '13', name: 'Cơm tấm sườn nướng', image: images.featuredFood5 },
        { id: '14', name: 'Bánh xèo miền Tây', image: images.featuredFood6 },
        { id: '15', name: 'Chả giò nem rán', image: images.featuredFood7 },
        { id: '16', name: 'Bún bò Huế', image: images.featuredFood8 },
        { id: '17', name: 'Mì Quảng tôm thịt', image: images.featuredFood1 },
        { id: '18', name: 'Cao lầu Hội An', image: images.featuredFood2 },
        { id: '19', name: 'Bún riêu cua', image: images.featuredFood3 },
        { id: '20', name: 'Cháo lòng tiết canh', image: images.featuredFood4 },
        { id: '21', name: 'Bánh canh cua', image: images.featuredFood5 },
        { id: '22', name: 'Hủ tiếu Nam Vang', image: images.featuredFood6 },
        { id: '23', name: 'Bánh cuốn Thanh Trì', image: images.featuredFood7 },
        { id: '24', name: 'Xôi xéo Hà Nội', image: images.featuredFood8 },
        { id: '25', name: 'Bánh đúc nóng', image: images.featuredFood1 },
        { id: '26', name: 'Chè trôi nước', image: images.featuredFood2 },
        { id: '27', name: 'Bánh tráng nướng Đà Lạt', image: images.featuredFood3 },
        { id: '28', name: 'Bánh mì xíu mại', image: images.featuredFood4 },
        { id: '29', name: 'Bánh ướt thịt nướng', image: images.featuredFood5 },
        { id: '30', name: 'Bánh bèo Huế', image: images.featuredFood6 },
    ];

    const data = featuredRecipesData || searchedDishesData;
    
    // Mảng các chiều cao khác nhau cho images (đơn vị: rem)
    const imageHeights = [12, 16, 14, 18, 15, 13, 17, 12, 16, 14, 15, 13];
    
    // Chia items thành 6 cột
    const columns: (typeof data)[] = [[], [], [], [], [], []];
    data.forEach((item, index) => {
        columns[index % 6].push(item);
    });
    
    const renderItem = (item: FoodItem, index: number) => {
        const height = imageHeights[index % imageHeights.length];
        return (
            <button
                onClick={() => router.push('/food-detail')}
                className="group w-full bg-white rounded-lg gap-1 flex flex-col items-start justify-start shadow-md transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer"
            >
                <div 
                    className="relative w-full overflow-hidden rounded-t-lg"
                    style={{ height: `${height}rem` }}
                >
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                </div>
                <div
                    className="w-full p-2 pt-1 rounded-lg gap-1 flex flex-row items-center justify-between"
                >
                    <TextScaled
                        size="sm"
                        className="flex-1 font-semibold text-black text-start line-clamp-1 transition-colors duration-300 group-hover:text-orange-500"
                    >
                        {item.name}
                    </TextScaled>
                    <Image 
                        src={icons.threeDotsIcon} 
                        alt="more" 
                        className="w-5 h-5 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-80" 
                    />
                </div>
            </button>
        );
    };
    
    return (
            <div
                className="w-full flex"
                style={{ gap: '16px' }}
            >
                {columns.map((column, colIndex) => (
                    <div
                        key={colIndex}
                        className="flex-1 flex flex-col"
                        style={{ width: '0' }}
                    >
                        {column.map((item, itemIndex) => {
                            // Tính index thực tế của item trong data gốc
                            const originalIndex = colIndex + itemIndex * 6;
                            const isLastItem = itemIndex === column.length - 1;
                            return (
                                <div
                                    key={item.id}
                                    style={{ marginBottom: isLastItem ? '0' : '16px' }}
                                >
                                    {renderItem(item, originalIndex)}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
    );
};

export default FoodGrid;
