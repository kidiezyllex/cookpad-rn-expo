import SuggestedFriendItem from './SuggestedFriendItem';
import PostsSwiper from './PostsSwiper';

interface SuggestedFriendData {
    id: string;
    name: string;
    commonFriends: number;
    hashtag: string;
}

interface KitchenTabProps {
    suggestedFriendsData: SuggestedFriendData[];
}

const KitchenTab = ({ suggestedFriendsData }: KitchenTabProps) => {

    return (
        <div className="items-center bg-white py-4 space-y-8"
        >
            {/* Posts section */}
            <PostsSwiper />

            {/* Suggested friends section */}
            <div className='py-2 bg-[#F1EEE8]'>
                <div className="flex flex-col items-start justify-start bg-white pt-4 px-16 pb-8 gap-4">
                    <div className="flex w-full flex-row items-start justify-between">
                        <p
                            className="font-bold text-black text-base"
                        >
                            Gợi ý Bạn Bếp
                        </p>
                        <button
                            className="text-orange-500 text-sm cursor-pointer"
                        >
                            Xem thêm
                        </button>
                    </div>
                    <div className="w-full grid grid-cols-4 gap-4">
                        {suggestedFriendsData.map((item) => (
                            <SuggestedFriendItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional posts section */}
            <PostsSwiper />
        </div>
    );
};

export default KitchenTab;
