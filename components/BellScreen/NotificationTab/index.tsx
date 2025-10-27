import TextScaled from '@/components/Common/TextScaled';
import { getScaleFactor } from '@/lib/scaling';
import { FlatList, View } from 'react-native';
import { notificationsData } from '../mockData';
import NotificationItem from './NotificationItem';


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
