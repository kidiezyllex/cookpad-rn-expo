import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, Pressable, View } from 'react-native';

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
        <View
            style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: getScaleFactor() * 24
            }}
        >
            <Image
                style={{
                    width: getScaleFactor() * 64,
                    height: getScaleFactor() * 64,
                    borderRadius: 1000
                }}
                source={images.sampleAvatar2}
                resizeMode="contain"
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: getScaleFactor() * 4,
                }}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start'
                    }}
                >
                    <TextScaled
                        size="base"
                        className="font-bold text-black"
                    >
                        {item.name}
                    </TextScaled>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 8
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: getScaleFactor() * 4
                            }}
                        >
                            <TextScaled
                                size="xs"
                                className="font-semibold text-black"
                            >
                                {item.commonFriends}
                            </TextScaled>
                            <TextScaled
                                size="xs"
                                className="font-light text-black"
                            >
                                Bạn bếp chung
                            </TextScaled>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: getScaleFactor() * 4
                            }}
                        >
                            <TextScaled
                                size="xs"
                                className="font-semibold text-textNeutralV1"
                            >
                                15
                            </TextScaled>
                            <TextScaled
                                size="xs"
                                className="text-blue-400"
                            >
                                #{item.hashtag}
                            </TextScaled>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        gap: getScaleFactor() * 8,
                    }}
                >
                    <Pressable
                        onPress={() => { }}
                        style={{
                            flex: 1,
                            paddingVertical: getScaleFactor() * 4,
                            paddingHorizontal: getScaleFactor() * 16,
                            height: getScaleFactor() * 32,
                            backgroundColor: '#E36137',
                            borderRadius: getScaleFactor() * 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: 1,
                        }}
                    >
                        <TextScaled
                            size="sm"
                            className="font-semibold text-white"
                        >
                            Thêm Bạn bếp
                        </TextScaled>
                    </Pressable>
                    <Pressable
                        onPress={() => { }}
                        style={{
                            maxWidth: getScaleFactor() * 52,
                            paddingVertical: getScaleFactor() * 4,
                            paddingHorizontal: getScaleFactor() * 16,
                            height: getScaleFactor() * 32,
                            backgroundColor: '#FFEFE9',
                            borderRadius: getScaleFactor() * 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <TextScaled
                            size="sm"
                            className="font-semibold text-customPrimary"
                        >
                            Gỡ
                        </TextScaled>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default SuggestedFriendItem;
