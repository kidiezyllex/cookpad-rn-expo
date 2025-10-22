import TextScaled from '@/components/Common/TextScaled';
import { getScaleFactor } from '@/lib/scaling';
import { FlatList, View } from 'react-native';
import PostItem from './PostItem';
import SuggestedFriendItem from './SuggestedFriendItem';

interface KitchenTabProps {
    postsData: any[];
    suggestedFriendsData: any[];
}

const KitchenTab = ({ postsData, suggestedFriendsData }: KitchenTabProps) => {
    return (
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                gap: getScaleFactor() * 8,
                marginTop: getScaleFactor() * 8,
            }}
        >
            {/* Posts section */}
            <View
                style={{
                    alignSelf: 'stretch',
                    paddingVertical: getScaleFactor() * 16,
                    paddingHorizontal: getScaleFactor() * 16,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: getScaleFactor() * 16,
                    backgroundColor: 'white',
                }}
            >
                <FlatList
                    data={postsData}
                    renderItem={({ item }) => <PostItem item={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    style={{
                        width: '100%'
                    }}
                    contentContainerStyle={{
                        gap: getScaleFactor() * 16,
                    }}
                />
            </View>

            {/* Suggested friends section */}
            <View
                style={{
                    width: '100%',
                    paddingHorizontal: getScaleFactor() * 16,
                    paddingTop: getScaleFactor() * 16,
                    paddingBottom: getScaleFactor() * 32,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: getScaleFactor() * 16,
                    backgroundColor: 'white',
                }}
            >
                <View
                    style={{
                        alignSelf: 'stretch',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                    }}
                >
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
                </View>
                <FlatList
                    data={suggestedFriendsData}
                    renderItem={({ item }) => <SuggestedFriendItem item={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    style={{
                        width: '100%'
                    }}
                    contentContainerStyle={{
                        gap: getScaleFactor() * 12
                    }}
                />
            </View>

            {/* Additional posts section */}
            <View
                style={{
                    alignSelf: 'stretch',
                    paddingVertical: getScaleFactor() * 16,
                    paddingHorizontal: getScaleFactor() * 16,
                    backgroundColor: 'white',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: getScaleFactor() * 16
                }}
            >
                <FlatList
                    data={postsData.slice(2, 3)}
                    renderItem={({ item }) => <PostItem item={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    contentContainerStyle={{
                        gap: getScaleFactor() * 8
                    }}
                />
            </View>
        </View>
    );
};

export default KitchenTab;
