import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import Image from 'next/image';

interface NotificationItemProps {
    id: string;
    avatarUrl: string;
    userName: string;
    content: string;
    timestamp: string;
}

const NotificationItem = ({ item }: { item: NotificationItemProps }) => {
    return (
        <button
            className="flex flex-row items-start justify-start pt-2 pb-2 w-full"
        >
            <div className="w-10 h-10">
                <Image
                    src={images.sampleAvatar}
                    alt={item.userName}
                    className="w-10 h-10 rounded-full border-2 border-[#E36137] object-cover"
                />
            </div>

            <div
                className="flex flex-1 flex-col items-start justify-start ml-3"
            >
                <div
                    className="flex w-full flex-row flex-wrap items-start mb-1"
                >
                    <TextScaled size="sm" className="font-semibold text-black">
                        {item.userName}{' '}
                    </TextScaled>
                    <TextScaled size="sm" className="text-textNeutralV1">
                        {item.content}
                    </TextScaled>
                </div>

                <TextScaled
                    size="xs"
                    className="text-textNeutralV1 text-xs line-height-4"
                >
                    {item.timestamp}
                </TextScaled>
            </div>
        </button>
    );
};

export default NotificationItem;
