import { icons } from '@/constants';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

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
    const router = useRouter();
    return (
        <div
            onClick={() => router.push('/food-detail')}
            className="flex flex-col cursor-pointer items-start bg-white w-[120px] rounded-lg border border-[#E5E7EB]"
        >
            <div
                className="relative w-full h-[110px] rounded-t-lg overflow-hidden bg-black"
            >
                <Image
                    src={image}
                    alt={name}
                    fill
                    quality={100}
                    draggable={false}
                    className="object-cover opacity-80"
                />
                {showOverlay && (
                    <div
                        className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-between h-6 px-1"
                    >
                        <div className="flex flex-row items-center gap-0.5">
                            <Image
                                src={icons.clockIcon}
                                alt="time"
                                width={100}
                                height={100}
                                quality={100}
                                draggable={false}
                                className='w-auto h-3 object-contain'
                            />
                            <span className="text-white text-xs">
                                {time}
                            </span>
                        </div>
                        <div className="flex flex-row items-center gap-0.5">
                            <Image
                                src={icons.save2Icon}
                                alt="likes"
                                width={100}
                                height={100}
                                quality={100}
                                draggable={false}
                                className='w-auto h-3 object-contain'
                            />
                            <span className="text-white text-xs">
                                {likes}
                            </span>
                        </div>
                    </div>
                )}
            </div>
            <div
                className="w-full px-2 py-1.5 gap-1 flex flex-row items-center justify-center"
            >
                <p className="flex-1 font-semibold text-black text-xs">
                    {name}
                </p>
                <Image
                    src={icons.threeDotsIcon}
                    alt="more"
                    width={100}
                    height={100}
                    quality={100}
                    draggable={false}
                    className='w-auto h-4 object-contain'
                />
            </div>
        </div>
    );
};

export default RecipeCard;
