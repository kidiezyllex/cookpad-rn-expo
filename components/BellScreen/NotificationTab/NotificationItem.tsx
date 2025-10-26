import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, Pressable, View } from 'react-native';

interface NotificationItemProps {
    id: string;
    avatarUrl: string;
    userName: string;
    content: string;
    timestamp: string;
}

const NotificationItem = ({ item }: { item: NotificationItemProps }) => {
    return (
        <Pressable
            style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingVertical: getScaleFactor() * 8,
            }}
        >
            <View style={{ width: getScaleFactor() * 40, height: getScaleFactor() * 40 }}>
                <Image
                    source={images.sampleAvatar}
                    style={{
                        width: getScaleFactor() * 40,
                        height: getScaleFactor() * 40,
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: '#E36137',
                    }}
                    resizeMode="cover"
                />
            </View>

            <View
                style={{
                    flex: 1,
                    marginLeft: getScaleFactor() * 12,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}
            >
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        marginBottom: getScaleFactor() * 4,
                    }}
                >
                    <TextScaled size="sm" className="text-black font-semibold">
                        {item.userName}{' '}
                    </TextScaled>
                    <TextScaled size="sm" className="text-textNeutralV1">
                        {item.content}
                    </TextScaled>
                </View>

                <TextScaled
                    size="xs"
                    className="text-textNeutralV1"
                    style={{
                        fontSize: getScaleFactor() * 11,
                        lineHeight: getScaleFactor() * 14,
                    }}
                >
                    {item.timestamp}
                </TextScaled>
            </View>
        </Pressable>
    );
};

export default NotificationItem;
