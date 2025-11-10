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
            className="flex flex-row items-center justify-start gap-4 w-full"
        >
            <Image
                src={images.sampleAvatar2}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-full object-contain"
            />
            <div
                className="flex flex-1 flex-col items-start self-start justify-start gap-1"
            >
                <div className="flex flex-col items-start justify-start">
                    <TextScaled
                        size="base"
                        className="font-bold text-black"
                    >
                        {item.name}
                    </TextScaled>
                        <p className='space-x-1'>
                            <span className="font-semibold text-black test-base">{item.commonFriends}</span>
                            <span className="font-light text-black text-nowrap text-sm">Bạn bếp chung</span>
                            <span className="font-semibold text-textNeutralV1 text-sm leading-none">15</span>
                            <span className="text-blue-400 text-nowrap text-sm"> #{item.hashtag}</span>
                        </p>
                </div>
                <div
                    className="flex w-full flex-row justify-start gap-2"
                >
                    <button
                        onClick={() => { }}
                        className="flex flex-1 items-center justify-center py-1 px-4 h-8 bg-customPrimary hover:bg-customPrimary/80 transition-colors rounded-md shrink"
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
