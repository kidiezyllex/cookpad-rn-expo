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
        <div className="w-full flex flex-row justify-start items-center gap-6">
            <Image
                src={images.sampleAvatar2}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-full object-contain"
            />
            <div className="flex-1 flex flex-col justify-start items-start gap-1">
                <div className="flex flex-col justify-start items-start">
                    <span className="font-bold text-black text-base">
                        {item.name}
                    </span>
                    <div className="flex flex-row justify-start items-start gap-2">
                        <div className="flex flex-row justify-start items-center gap-1">
                            <span className="font-semibold text-black text-xs">
                                {item.commonFriends}
                            </span>
                            <span className="font-light text-black text-xs">
                                Bạn bếp chung
                            </span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-1">
                            <span className="font-semibold text-textNeutralV1 text-xs">
                                15
                            </span>
                            <span className="text-blue-400 text-xs">
                                #{item.hashtag}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-start gap-2">
                    <button
                        onClick={() => { }}
                        className="flex-1 py-1 px-4 h-8 bg-[#E36137] rounded-md flex justify-center items-center flex-shrink"
                    >
                        <span className="font-semibold text-white text-sm">
                            Thêm Bạn bếp
                        </span>
                    </button>
                    <button
                        onClick={() => { }}
                        className="max-w-[52px] py-1 px-4 h-8 bg-[#FFEFE9] rounded-md flex justify-center items-center"
                    >
                        <span className="font-semibold text-customPrimary text-sm">
                            Gỡ
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuggestedFriendItem;
