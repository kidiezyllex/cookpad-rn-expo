import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import Image from 'next/image';

interface SuggestedFriendItemProps {
    item: {
        id: string;
        name: string;
        commonFriends: number;
        hashtag: string;
    };
}

const SuggestedFriendItem = ({ item }: SuggestedFriendItemProps) => {
    return (
        <div
            className="flex flex-row items-center justify-start gap-6 w-full"
        >
            <Image
                src={images.sampleAvatar2}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-full object-contain"
            />
            <div
                className="flex flex-1 flex-col items-start justify-start gap-1"
            >
                <div className="flex flex-col items-start justify-start">
                    <TextScaled
                        size="base"
                        className="font-bold text-black"
                    >
                        {item.name}
                    </TextScaled>
                    <div
                        className="flex flex-row items-start justify-start gap-2"
                    >
                        <div className="flex flex-row items-center justify-start gap-1">
                            <TextScaled
                                size="xs"
                                className="font-semibold text-black"
                            >
                                {item.commonFriends}
                            </TextScaled>
                            <TextScaled
                                size="xs"
                                className="font-light text-black"
                            >
                                Bạn bếp chung
                            </TextScaled>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-1">
                            <TextScaled
                                size="xs"
                                className="font-semibold text-textNeutralV1"
                            >
                                15
                            </TextScaled>
                            <TextScaled
                                size="xs"
                                className="text-blue-400"
                            >
                                #{item.hashtag}
                            </TextScaled>
                        </div>
                    </div>
                </div>
                <div
                    className="flex w-full flex-row justify-start gap-2"
                >
                    <button
                        onClick={() => { }}
                        className="flex flex-1 items-center justify-center py-1 px-4 h-8 bg-[#E36137] rounded-md shrink"
                    >
                        <TextScaled
                            size="sm"
                            className="font-semibold text-white"
                        >
                            Thêm Bạn bếp
                        </TextScaled>
                    </button>
                    <button
                        onClick={() => { }}
                        className="flex items-center justify-center py-1 px-4 h-8 max-w-[52px] bg-[#FFEFE9] rounded-md"
                    >
                        <TextScaled
                            size="sm"
                            className="font-semibold text-customPrimary"
                        >
                            Gỡ
                        </TextScaled>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuggestedFriendItem;
