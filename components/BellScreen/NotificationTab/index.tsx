import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { FlatList, View } from 'react-native';
import NotificationItem from './NotificationItem';

interface NotificationItem {
    id: string;
    avatarUrl: string;
    userName: string;
    content: string;
    timestamp: string;
}

interface NotificationSectionData {
    id: string;
    title: string;
    notifications: NotificationItem[];
}

const notificationsData: NotificationSectionData[] = [
    {
        id: '1',
        title: 'Hôm nay',
        notifications: [
            {
                id: '1',
                avatarUrl: images.sampleAvatar,
                userName: 'Otaku Lê',
                content: 'đã thêm một công thức mới',
                timestamp: '14:30 - 05/09/2023',
            },
            {
                id: '2',
                avatarUrl: images.sampleAvatar,
                userName: 'Nobita',
                content: 'đã bình luận vào công thức của Bạn "Nấu món này lâu vcl"',
                timestamp: '7:30 - 04/09/2023',
            },
            {
                id: '3',
                avatarUrl: images.sampleAvatar,
                userName: 'Nobita',
                content: 'đã yêu thích công thức của Bạn',
                timestamp: '14:30 - 03/09/2023',
            },
        ],
    },
    {
        id: '2',
        title: 'Trước đó',
        notifications: [
            {
                id: '4',
                avatarUrl: images.sampleAvatar,
                userName: 'Wibu Chúa',
                content: 'đã yêu thích bình luận của Bạn',
                timestamp: '14:30 - 05/08/2023',
            },
            {
                id: '5',
                avatarUrl: images.sampleAvatar,
                userName: 'Wibu Chúa',
                content: 'đã trả lời bình luận của Bạn "MDark dark burh burh lmao"',
                timestamp: '14:30 - 05/08/2023',
            },
            {
                id: '6',
                avatarUrl: images.sampleAvatar,
                userName: 'Nobita',
                content: 'đã thêm một công thức mới',
                timestamp: '7:30 - 04/09/2023',
            },
            {
                id: '7',
                avatarUrl: images.sampleAvatar,
                userName: 'Mun Ngáo',
                content: 'đã thêm một bí quyết mới',
                timestamp: '14:30 - 03/09/2023',
            },
            {
                id: '8',
                avatarUrl: images.sampleAvatar,
                userName: 'Otaku Lê và Nobita',
                content: 'đã bình luận vào công thức của Bạn',
                timestamp: '14:30 - 05/09/2023',
            },
            {
                id: '9',
                avatarUrl: images.sampleAvatar,
                userName: 'Mun Ngáo',
                content: 'đã thêm một bí quyết mới',
                timestamp: '14:30 - 03/09/2023',
            },
            {
                id: '10',
                avatarUrl: images.sampleAvatar,
                userName: 'Mun Ngáo',
                content: 'đã thêm một bí quyết mới',
                timestamp: '14:30 - 03/09/2023',
            },
            {
                id: '11',
                avatarUrl: images.sampleAvatar,
                userName: 'Mun Ngáo',
                content: 'đã thêm một bí quyết mới',
                timestamp: '14:30 - 03/09/2023',
            },
        ],
    },
];

const NotificationTab = () => {
    return (
        <FlatList
            data={notificationsData}
            renderItem={({ item }) => (
                <View
                    style={{
                        backgroundColor: 'white',
                        marginTop: getScaleFactor() * 8,
                    }}
                >
                    {/* Notifications List */}
                    <View style={{ paddingHorizontal: getScaleFactor() * 16, paddingVertical: getScaleFactor() * 8 }}>
                        <TextScaled size="base" className="text-black font-bold">
                            {item.title}
                        </TextScaled>
                        {item.notifications.map((notification, index) => (
                            <View key={notification.id}>
                                <NotificationItem item={notification} />
                                {index < item.notifications.length - 1 && (
                                    <View
                                        style={{
                                            height: 1,
                                            backgroundColor: '#F3F4F6',
                                            marginLeft: getScaleFactor() * 68,
                                        }}
                                    />
                                )}
                            </View>
                        ))}
                    </View>
                </View>
            )}
            keyExtractor={(item) => item.id}
            style={{ flex: 1, backgroundColor: '#F1EEE8' }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default NotificationTab;
