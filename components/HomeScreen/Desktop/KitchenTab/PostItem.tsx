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
            className="flex flex-col items-start justify-start w-full h-full rounded-lg gap-1 min-w-[290px]"
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
                        <p
                            className="font-medium text-black text-nowrap text-sm"
                        >
                            {item.user.name}
                        </p>
                        <p
                            className="text-textNeutralV1 text-xs"
                        >
                            {item.user.timeAgo}
                        </p>
                    </div>
                </div>
                <Image
                    src={icons.threeDotsIcon}
                    className='w-6 h-6 object-contain'
                    alt="more"
                />
            </div>

            <div
                className="w-full pb-4 border-t gap-1 rounded-lg flex flex-col items-center justify-start bg-white shadow-md flex-1 border-[1px] border-gray-300"
            >
                {/* Phần Food Image  */}
                <div className="relative w-full h-[200px]">
                    <Image
                        src={item.content.image}
                        alt={item.content.title}
                        fill
                        className='rounded-t-lg object-cover'
                    />
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-2 px-3"
                >
                    <div
                        className="flex flex-row items-start justify-between mt-2 w-full"
                    >
                        <div className="flex flex-row items-start justify-start gap-3">
                            <div className="flex flex-row items-center justify-start gap-1">
                                <Image src={icons.heartIcon} alt="likes" className="object-contain h-5 w-auto" />
                                <span className="font-medium text-black text-sm">
                                    {item.content.likes}
                                </span>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-1">
                                <Image src={icons.chatIcon} alt="comments" className="object-contain h-5 w-auto" />
                                <span className="font-medium text-black text-sm">
                                    {item.content.comments}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-1">
                            <Image src={icons.saveIcon} alt="save" className="object-contain h-5 w-auto" />
                        </div>
                    </div>

                    <div
                        className="flex flex-col items-start justify-start pb-2 border-b border-[#6B7280]"
                    >
                        <p
                            className="font-bold text-black text-base"
                        >
                            {item.content.title}
                        </p>
                        <div
                            className="flex flex-col items-start justify-center gap-1"
                        >
                            <p
                                className="text-black text-sm"
                            >
                                {item.content.description}
                            </p>
                            <div
                                className="flex flex-row items-center justify-start gap-2"
                            >
                                {item.content.hashtags.map((tag: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex flex-row items-start justify-start"
                                    >
                                        <span
                                            className="text-blue-400 text-xs"
                                        >
                                            #
                                        </span>
                                        <span
                                            className="text-blue-400 text-xs"
                                        >
                                            {tag}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-col items-start justify-start gap-1 flex-1"
                    >
                        <div className="flex flex-col items-start justify-start">
                            {item.comments.slice(0, 2).map((comment, index: number) => (
                                <p
                                    key={index}
                                >
                                    <span
                                        className="font-semibold text-sm text-black text-nowrap"
                                    >
                                        {comment.user}
                                    </span>
                                    <span
                                        className="text-black text-sm ml-1"
                                    >
                                        {comment.text}
                                    </span>
                                </p>
                            ))}
                        </div>
                        <div
                            className="flex flex-row items-center justify-start gap-2"
                        >
                            <button
                                className="text-textNeutralV1 text-xs cursor-pointer"
                            >
                                Xem thêm bình luận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
