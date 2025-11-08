import TextScaled from '@/components/Common/TextScaled';
import { icons } from '@/constants';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface RecipeCardProps {
    id: string;
    name: string;
    image: StaticImageData | string;
    time: string;
    likes: number;
    showOverlay?: boolean;
}

const RecipeCard = ({ 
    id: _id, 
    name, 
    image, 
    time, 
    likes, 
    showOverlay = true 
}: RecipeCardProps) => {
    return (
        <div
            className="flex flex-col items-start bg-white w-[120px] rounded-lg border border-[#E5E7EB]"
        >
            <div
                className="relative w-full h-[110px] rounded-t-lg overflow-hidden"
            >
                <Image src={image} alt={name} fill className="object-cover" />
                {showOverlay && (
                    <div
                        className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-between h-6 px-1"
                    >
                        <div className="flex flex-row items-center gap-0.5">
                            <Image src={icons.clockIcon} alt="time" width={10} height={10} />
                            <TextScaled size="xs" className="text-white">
                                {time}
                            </TextScaled>
                        </div>
                        <div className="flex flex-row items-center gap-0.5">
                            <Image src={icons.save2Icon} alt="likes" width={10} height={10} />
                            <TextScaled size="xs" className="text-white">
                                {likes}
                            </TextScaled>
                        </div>
                    </div>
                )}
            </div>
            <div
                className="w-full px-2 py-1.5 gap-1 flex flex-row items-center justify-center"
            >
                <TextScaled size="xs" className="flex-1 font-semibold text-black">
                    {name}
                </TextScaled>
                <Image src={icons.threeDotsIcon} alt="more" width={16} height={16} />
            </div>
        </div>
    );
};

export default RecipeCard;
