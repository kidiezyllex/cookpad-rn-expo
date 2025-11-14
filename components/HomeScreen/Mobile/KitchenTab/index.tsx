import PostItem from './PostItem';
import SuggestedFriendItem from './SuggestedFriendItem';

interface KitchenTabProps {
    postsData: any[];
    suggestedFriendsData: any[];
}

const KitchenTab = ({ postsData, suggestedFriendsData }: KitchenTabProps) => {
    return (
        <div className="flex flex-col items-center gap-2 mt-2">
            {/* Posts section */}
            <div className="self-stretch py-4 px-4 flex flex-col justify-center items-center gap-4 bg-white">
                <div className="w-full flex flex-col gap-4">
                    {postsData.map((item) => (
                        <PostItem key={item.id} item={item} />
                    ))}
                </div>
            </div>

            {/* Suggested friends section */}
            <div className="w-full px-4 pt-4 pb-8 flex flex-col justify-start items-start gap-4 bg-white">
                <div className="self-stretch flex flex-row justify-between items-start">
                    <span className="font-bold text-black text-base">
                        Gợi ý Bạn Bếp
                    </span>
                    <span className="text-orange-500 text-sm">
                        Xem thêm
                    </span>
                </div>
                <div className="w-full flex flex-col gap-3">
                    {suggestedFriendsData.map((item) => (
                        <SuggestedFriendItem key={item.id} item={item} />
                    ))}
                </div>
            </div>

            {/* Additional posts section */}
            <div className="self-stretch py-4 px-4 bg-white flex flex-col justify-center items-center gap-4">
                <div className="w-full flex flex-col gap-2">
                    {postsData.slice(2, 3).map((item) => (
                        <PostItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KitchenTab;
