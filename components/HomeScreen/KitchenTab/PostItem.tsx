import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface PostItemProps {
    item: {
        id: string;
        user: {
            name: string;
            timeAgo: string;
        };
        content: {
            title: string;
            description: string;
            hashtags: string[];
            likes: number;
            comments: number;
            image: StaticImageData | string;
        };
        comments: Array<{
            user: string;
            text: string;
        }>;
    };
}

const PostItem = ({ item }: PostItemProps) => {
    return (
        <div
            className="flex flex-col items-center justify-center w-full rounded-lg gap-1"
        >
            <div
                className="flex flex-row items-center justify-between w-full"
            >
                <div
                    className="flex flex-row items-center justify-start gap-2"
                >
                    <Image
                        src={images.sampleAvatar}
                        alt={item.user.name}
                        className='w-8 h-8 rounded-full object-contain'
                    />
                    <div
                        className="flex flex-col items-start justify-start"
                    >
                        <TextScaled
                            size="sm"
                            className="font-medium text-black"
                        >
                            {item.user.name}
                        </TextScaled>
                        <TextScaled
                            size="xs"
                            className="text-textNeutralV1"
                        >
                            {item.user.timeAgo}
                        </TextScaled>
                    </div>
                </div>
                <Image
                    src={icons.threeDotsIcon}
                    className='w-6 h-6 object-contain'
                    alt="more"
                />
            </div>

            <div
                className="w-full pb-4 border-t border-[#E5E7EB] gap-1 rounded-lg flex flex-col items-center justify-center bg-white"
            >
                {/* Phần Food Image  */}
                <div className="relative w-full h-[200px]">
                    <Image
                        src={images.sampleFood1}
                        alt={item.content.title}
                        fill
                        className='rounded-t-lg object-cover'
                    />
                </div>
                <div
                    className="flex flex-col items-start justify-start w-full gap-2 px-3"
                >
                    <div
                        className="flex flex-row items-start justify-between mt-1 w-full"
                    >
                        <div className="flex flex-row items-start justify-start gap-3">
                            <div className="flex flex-row items-center justify-start gap-1">
                                <Image src={icons.heartIcon} alt="likes" width={20} height={20} className="object-contain" />
                                <TextScaled size="sm" className="font-medium text-black">
                                    {item.content.likes}
                                </TextScaled>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-1">
                                <Image src={icons.chatIcon} alt="comments" width={20} height={20} className="object-contain" />
                                <TextScaled size="sm" className="font-medium text-black">
                                    {item.content.comments}
                                </TextScaled>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-1">
                            <Image src={icons.saveIcon} alt="save" width={20} height={20} className="object-contain" />
                        </div>
                    </div>

                    <div
                        className="flex flex-col items-start justify-start pb-2 border-b border-[#6B7280]"
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            {item.content.title}
                        </TextScaled>
                        <div
                            className="flex flex-col items-start justify-center gap-1"
                        >
                            <TextScaled
                                size="xs"
                                className="text-black"
                            >
                                {item.content.description}
                            </TextScaled>
                            <div
                                className="flex flex-row items-center justify-start gap-2"
                            >
                                {item.content.hashtags.map((tag: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex flex-row items-start justify-start"
                                    >
                                        <TextScaled
                                            size="xs"
                                            className="text-blue-400"
                                        >
                                            #
                                        </TextScaled>
                                        <TextScaled
                                            size="xs"
                                            className="text-blue-400"
                                        >
                                            {tag}
                                        </TextScaled>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-col items-start justify-start gap-1"
                    >
                        <div className="flex flex-col items-start justify-start">
                            {item.comments.slice(0, 2).map((comment, index: number) => (
                                <div
                                    key={index}
                                    className="flex flex-row items-center justify-start gap-2"
                                >
                                    <TextScaled
                                        size="xs"
                                        className="font-semibold text-black"
                                    >
                                        {comment.user}
                                    </TextScaled>
                                    <TextScaled
                                        size="xs"
                                        className="text-black"
                                    >
                                        {comment.text}
                                    </TextScaled>
                                </div>
                            ))}
                        </div>
                        <div
                            className="flex flex-row items-center justify-start gap-2"
                        >
                            <TextScaled
                                size="xs"
                                className="text-textNeutralV1"
                            >
                                Xem thêm bình luận
                            </TextScaled>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
