import { icons, images } from '@/constants';
import Image from 'next/image';

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
            image: any;
        };
        comments: Array<{
            user: string;
            text: string;
        }>;
    };
}

const PostItem = ({ item }: PostItemProps) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-1 rounded-lg">
            {/* Phần header của post */}
            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row justify-start items-center gap-2">
                    <Image
                        src={images.sampleAvatar}
                        alt={item.user.name}
                        width={32}
                        height={32}
                        className="rounded-full object-contain"
                    />
                    <div className="flex flex-col justify-start items-start">
                        <span className="font-medium text-black text-sm">
                            {item.user.name}
                        </span>
                        <span className="text-textNeutralV1 text-xs">
                            {item.user.timeAgo}
                        </span>
                    </div>
                </div>
                <Image
                    src={icons.threeDotsIcon}
                    alt="More options"
                    width={100}
                    height={100}
                    quality={100}
                    draggable={false}
                    className="object-contain h-6 w-auto"
                />
            </div>

            <div className="w-full pb-4 bg-white border border-t-0 border-[#E5E7EB] rounded-lg flex flex-col justify-center items-center gap-1">
                {/* Phần Food Image  */}
                <div className="w-full h-[200px] relative rounded-t-lg overflow-hidden">
                    <Image
                        src={images.sampleFood1}
                        alt={item.content.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2 px-3">
                    <div className="flex flex-row justify-between items-start w-full mt-1">
                        <div className="flex flex-row justify-start items-start gap-3">
                            <div className="flex flex-row justify-start items-center gap-1">
                                <Image
                                    src={icons.heartIcon}
                                    alt="Likes"
                                    width={100}
                                    height={100}
                                    quality={100}
                                    draggable={false}
                                    className="object-contain h-5 w-auto"
                                />
                                <span className="font-medium text-black text-sm">
                                    {item.content.likes}
                                </span>
                            </div>
                            <div className="flex flex-row justify-start items-center gap-1">
                                <Image
                                    src={icons.chatIcon}
                                    alt="Comments"
                                    width={100}
                                    height={100}
                                    quality={100}
                                    draggable={false}
                                    className="object-contain h-5 w-auto"
                                />
                                <span className="font-medium text-black text-sm">
                                    {item.content.comments}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-1">
                            <Image
                                src={icons.saveIcon}
                                alt="Save"
                                width={100}
                                height={100}
                                quality={100}
                                draggable={false}
                                className="object-contain h-5 w-auto"
                            />
                        </div>
                    </div>

                    <div className="pb-2 border-b border-b-[#6B7280] flex flex-col justify-start items-start">
                        <span className="font-bold text-black text-base">
                            {item.content.title}
                        </span>
                        <div className="flex flex-col justify-center items-start gap-1">
                            <span className="text-black text-xs">
                                {item.content.description}
                            </span>
                            <div className="flex flex-row justify-start items-center gap-2">
                                {item.content.hashtags.map((tag: string, index: number) => (
                                    <div key={index} className="flex flex-row justify-start items-start">
                                        <span className="text-blue-400 text-xs">#</span>
                                        <span className="text-blue-400 text-xs">{tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-1">
                        <div className="flex flex-col justify-start items-start">
                            {item.comments.slice(0, 2).map((comment: any, index: number) => (
                                <div key={index} className="flex flex-row justify-start items-center gap-2">
                                    <span className="font-semibold text-black text-xs">
                                        {comment.user}
                                    </span>
                                    <span className="text-black text-xs">
                                        {comment.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2">
                            <span className="text-textNeutralV1 text-xs">
                                Xem thêm bình luận
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
