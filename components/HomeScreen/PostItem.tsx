import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, View } from 'react-native';

interface PostItemProps {
    item: {
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
            image: any;
        };
        comments: Array<{
            user: string;
            text: string;
        }>;
    };
}

const PostItem = ({ item }: PostItemProps) => {
    return (
        <View
            style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: getScaleFactor() * 4,
                borderRadius: getScaleFactor() * 8,
            }}
        >
            {/* Phần header của post */}
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: getScaleFactor() * 8,
                    }}
                >
                    <Image
                        style={{
                            width: getScaleFactor() * 32,
                            height: getScaleFactor() * 32,
                            borderRadius: 1000
                        }}
                        source={images.sampleAvatar}
                        resizeMode="contain"
                    />
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start'
                        }}
                    >
                        <TextScaled
                            size="sm"
                            className="font-medium text-black"
                        >
                            {item.user.name}
                        </TextScaled>
                        <TextScaled
                            size="xs"
                            className="text-textNeutralV1"
                        >
                            {item.user.timeAgo}
                        </TextScaled>
                    </View>
                </View>
                <Image
                        style={{
                            width: getScaleFactor() * 24,
                            height: getScaleFactor() * 24,
                        }}
                        source={icons.threeDotsIcon}
                        resizeMode="contain"
                    />
            </View>

            <View
                style={{
                    width: '100%',
                    paddingBottom: getScaleFactor() * 16,
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderColor: '#E5E7EB',
                    borderRadius: getScaleFactor() * 8,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: getScaleFactor() * 4
                }}
            >
                {/* Phần Food Image  */}
                <Image
                    style={{
                        width: '100%',
                        height: getScaleFactor() * 200,
                        borderTopLeftRadius: getScaleFactor() * 8,
                        borderTopRightRadius: getScaleFactor() * 8,
                        overflow: 'hidden'
                    }}
                    source={images.sampleFood1}
                    resizeMode="cover"
                />
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 8,
                        paddingHorizontal: getScaleFactor() * 12,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            width: '100%',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 12
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
                                <Image
                                    style={{
                                        width: getScaleFactor() * 20,
                                        height: getScaleFactor() * 20,
                                    }}
                                    source={icons.heartIcon}
                                    resizeMode="contain"
                                />
                                <TextScaled
                                    size="sm"
                                    className="font-medium text-black"
                                >
                                    {item.content.likes}
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
                                <Image
                                    style={{
                                        width: getScaleFactor() * 20,
                                        height: getScaleFactor() * 20,
                                    }}
                                    source={icons.chatIcon}
                                    resizeMode="contain"
                                />
                                <TextScaled
                                    size="sm"
                                    className="font-medium text-black"
                                >
                                    {item.content.comments}
                                </TextScaled>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: getScaleFactor() * 4
                            }}
                        >
                            <Image
                                style={{
                                    width: getScaleFactor() * 20,
                                    height: getScaleFactor() * 20,
                                }}
                                source={icons.saveIcon}
                                resizeMode="contain"
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            paddingBottom: getScaleFactor() * 8,
                            borderBottomWidth: 1,
                            borderBottomColor: '#6B7280',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start'
                        }}
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            {item.content.title}
                        </TextScaled>
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 4
                            }}
                        >
                            <TextScaled
                                size="xs"
                                className="text-black"
                            >
                                {item.content.description}
                            </TextScaled>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 8
                                }}
                            >
                                {item.content.hashtags.map((tag: string, index: number) => (
                                    <View
                                        key={index}
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start'
                                        }}
                                    >
                                        <TextScaled
                                            size="xs"
                                            className="text-blue-400"
                                        >
                                            #
                                        </TextScaled>
                                        <TextScaled
                                            size="xs"
                                            className="text-blue-400"
                                        >
                                            {tag}
                                        </TextScaled>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 4
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start'
                            }}
                        >
                            {item.comments.slice(0, 2).map((comment: any, index: number) => (
                                <View
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: getScaleFactor() * 8
                                    }}
                                >
                                    <TextScaled
                                        size="xs"
                                        className="font-semibold text-black"
                                    >
                                        {comment.user}
                                    </TextScaled>
                                    <TextScaled
                                        size="xs"
                                        className="text-black"
                                    >
                                        {comment.text}
                                    </TextScaled>
                                </View>
                            ))}
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: getScaleFactor() * 8
                            }}
                        >
                            <TextScaled
                                size="xs"
                                className="text-textNeutralV1"
                            >
                                Xem thêm bình luận
                            </TextScaled>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PostItem;
