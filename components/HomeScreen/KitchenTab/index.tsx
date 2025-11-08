import TextScaled from '@/components/Common/TextScaled';
import PostItem from './PostItem';
import SuggestedFriendItem from './SuggestedFriendItem';

interface PostData {
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
        image: unknown;
    };
    comments: Array<{
        user: string;
        text: string;
    }>;
}

interface SuggestedFriendData {
    id: string;
    name: string;
    commonFriends: number;
    hashtag: string;
}

interface KitchenTabProps {
    postsData: PostData[];
    suggestedFriendsData: SuggestedFriendData[];
}

const KitchenTab = ({ postsData, suggestedFriendsData }: KitchenTabProps) => {
    return (
        <div className="items-center mt-2"
        >
            {/* Posts section */}
            <div className="w-full grid grid-cols-4 gap-4"
            >
                    {postsData.map((item) => (
                        <PostItem key={item.id} item={item as any} />
                    ))}
            </div>

            {/* Suggested friends section */}
            <div className="flex w-full flex-col items-start justify-start bg-white p-4 pb-8 gap-4">
                <div className="flex w-full flex-row items-start justify-between">
                    <TextScaled
                        size="base"
                        className="font-bold text-black"
                    >
                        Gợi ý Bạn Bếp
                    </TextScaled>
                    <TextScaled
                        size="sm"
                        className="text-orange-500"
                    >
                        Xem thêm
                    </TextScaled>
                </div>
                <div className="w-full flex flex-col gap-3">
                    {suggestedFriendsData.map((item) => (
                        <SuggestedFriendItem key={item.id} item={item} />
                    ))}
                </div>
            </div>

            {/* Additional posts section */}
            <div className="flex w-full flex-col items-center justify-center bg-white p-4"
            >
                <div className="w-full flex flex-col gap-2">
                    {postsData.slice(2, 3).map((item) => (
                        <PostItem key={item.id} item={item as any} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KitchenTab;
