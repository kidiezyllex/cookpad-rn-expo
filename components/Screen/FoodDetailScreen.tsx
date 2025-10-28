import { router } from 'expo-router';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Ionicons } from '@expo/vector-icons';
import RecipeCarousel from '../Common/RecipeCarousel';

// Mock data for the food detail
const mockFoodDetail = {
    id: 1,
    title: "Gà nướng tiêu đen",
    author: {
        name: "Otaku Lê",
        avatar: images.sampleAvatar,
        kitchenFriends: 28,
        hashtag: "Gà",
        hashtagCount: 15,
    },
    description: "Create a 1/7 scale commercialized figurine of the characters in the picture. The figurine wears an extremely glossy suit in a realistic style, in a real environment. The figurine is placed on a computer desk. The figurine features a round, transparent acrylic base with no text. The image depict a freaking garbage bin on the faceground. I don't know exactly",
    hashtags: ["Gà nướng", "Tiêu Đen", "NCKD"],
    comments: 16,
    saves: 34,
    image: images.sampleFood1,
};

const mockComments = [
    {
        id: 1,
        user: "Nobita",
        avatar: images.sampleAvatar2,
        date: "23/11/2022",
        content: "Mở file → chọn khung text → phần Font bên phải sẽ hiển thị danh sách font của máy.",
        likes: 16,
        replies: 2,
    },
    {
        id: 2,
        user: "Mun Ngáo",
        avatar: images.sampleAvatar,
        date: "25/01/2023",
        content: "Mở file → chọn khung text → phần Font bên phải sẽ hiển thị danh sách font của máy.",
        likes: 16,
        replies: 2,
    },
];

const mockRelatedFoods = [
    {
        id: 1,
        title: "Tôm hoàng đế ánh kim",
        image: images.sampleFood2,
        time: "3h 30m",
        saves: 234,
    },
    {
        id: 2,
        title: "Tôm hoàng đế ánh kim",
        image: images.sampleFood3,
        time: "3h 30m",
        saves: 234,
    },
    {
        id: 3,
        title: "Tôm hoàng đế ánh kim",
        image: images.sampleFood1,
        time: "3h 30m",
        saves: 234,
    },
];

const FoodDetailScreen = () => {
    const insets = useSafeAreaInsets();
    
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom', 'left', 'right']} mode="padding">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: getScaleFactor() * 48 }}
            >
                {/* Hero Image */}
                <Image
                    source={mockFoodDetail.image}
                    style={{
                        width: '100%',
                        height: getScaleFactor() * 375,
                    }}
                    resizeMode="cover"
                />

                {/* Header */}
                <View
                    className="absolute"
                    style={{
                        top: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    <View
                        className="flex-row items-center justify-between"
                        style={{
                            height: getScaleFactor() * 44,
                            paddingHorizontal: getScaleFactor() * 16,
                        }}
                    >
                        <Pressable>
                            <Ionicons
                                name="chevron-back"
                                size={getScaleFactor() * 24}
                                color="#FFFFFF"
                            />
                        </Pressable>

                        <TextScaled size="base" className="font-bold text-white">
                            Món ăn
                        </TextScaled>

                        <Pressable>
                            <Image
                                source={icons.threeDotsIcon}
                                style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24, tintColor: '#FFFFFF' }}
                                resizeMode="contain"
                            />
                        </Pressable>
                    </View>
                </View>

                {/* Content */}
                <View className='bg-backgroundV1' style={{ padding: getScaleFactor() * 16, gap: getScaleFactor() * 24 }}>
                    {/* Food Detail */}
                    <View style={{ gap: getScaleFactor() * 16, paddingBottom: getScaleFactor() * 16, borderBottomWidth: 1, borderBottomColor: '#979797' }}>
                        <TextScaled size="2xl" className="font-medium text-black">
                            {mockFoodDetail.title}
                        </TextScaled>

                        {/* Author Section */}
                        <View style={{ gap: getScaleFactor() * 8 }}>
                            <View style={{ flexDirection: 'row', gap: getScaleFactor() * 8, alignItems: 'center' }}>
                                <Image
                                    source={mockFoodDetail.author.avatar}
                                    style={{
                                        width: getScaleFactor() * 40,
                                        height: getScaleFactor() * 40,
                                        borderRadius: 100,
                                        borderWidth: 1,
                                        borderColor: '#E36137',
                                    }}
                                    resizeMode="cover"
                                />
                                <View style={{ flex: 1, gap: getScaleFactor() * 4 }}>
                                    <TextScaled size="sm" className="font-medium text-black">
                                        {mockFoodDetail.author.name}
                                    </TextScaled>
                                    <View style={{ flexDirection: 'row', gap: getScaleFactor() * 8 }}>
                                        <View style={{ flexDirection: 'row', gap: getScaleFactor() * 4, alignItems: 'center' }}>
                                            <TextScaled size="xs" className="font-medium text-black">
                                                {mockFoodDetail.author.kitchenFriends}
                                            </TextScaled>
                                            <TextScaled size="xs" className="text-textNeutralV1">
                                                Bạn bếp chung
                                            </TextScaled>
                                        </View>
                                        <View style={{ flexDirection: 'row', gap: getScaleFactor() * 4, alignItems: 'center' }}>
                                            <TextScaled size="xs" className="font-medium text-textNeutralV1">
                                                {mockFoodDetail.author.hashtagCount}
                                            </TextScaled>
                                            <TextScaled size="xs" style={{ color: '#00ACED' }}>
                                                #{mockFoodDetail.author.hashtag}
                                            </TextScaled>
                                        </View>
                                    </View>
                                </View>
                                <Pressable
                                    style={{
                                        backgroundColor: '#FFEFE9',
                                        paddingHorizontal: getScaleFactor() * 14,
                                        paddingVertical: getScaleFactor() * 4,
                                        borderRadius: getScaleFactor() * 8,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: getScaleFactor() * 8,
                                    }}
                                >
                                    <Image
                                        source={icons.check2Icon}
                                        style={{ width: getScaleFactor() * 20, height: getScaleFactor() * 20 }}
                                        resizeMode="contain"
                                    />
                                    <TextScaled size="xs" className="font-semibold text-customPrimary">
                                        Bạn bếp
                                    </TextScaled>
                                </Pressable>
                            </View>
                        </View>

                        {/* Description */}
                        <View style={{ gap: getScaleFactor() * 4 }}>
                            <TextScaled size="base" className="text-black">
                                {mockFoodDetail.description}
                            </TextScaled>
                            <View style={{ flexDirection: 'row', gap: getScaleFactor() * 8, flexWrap: 'wrap' }}>
                                {mockFoodDetail.hashtags.map((tag) => (
                                    <View key={tag} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TextScaled size="sm" style={{ color: '#00ACED' }}>#</TextScaled>
                                        <TextScaled size="sm" style={{ color: '#00ACED' }}>{tag}</TextScaled>
                                    </View>
                                ))}
                            </View>
                        </View>

                        {/* Interaction Stats */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', gap: getScaleFactor() * 12 }}>
                                <View style={{ flexDirection: 'row', gap: getScaleFactor() * 4, alignItems: 'center' }}>
                                    <Image
                                        source={icons.heartIcon}
                                        style={{ width: getScaleFactor() * 20, height: getScaleFactor() * 20 }}
                                        resizeMode="contain"
                                    />
                                    <TextScaled size="sm" className="font-medium text-black">
                                        {mockFoodDetail.comments}
                                    </TextScaled>
                                </View>
                                <View style={{ flexDirection: 'row', gap: getScaleFactor() * 4, alignItems: 'center' }}>
                                    <Image
                                        source={icons.chatIcon}
                                        style={{ width: getScaleFactor() * 20, height: getScaleFactor() * 20 }}
                                        resizeMode="contain"
                                    />
                                    <TextScaled size="sm" className="font-medium text-black">
                                        {mockFoodDetail.saves}
                                    </TextScaled>
                                </View>
                            </View>
                            <Pressable>
                                <Image
                                    source={icons.saveIcon}
                                    style={{ width: getScaleFactor() * 20, height: getScaleFactor() * 20 }}
                                    resizeMode="contain"
                                />
                            </Pressable>
                        </View>
                    </View>

                    {/* Comments Section */}
                    <View style={{ gap: getScaleFactor() * 16 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextScaled size="base" className="font-bold text-black">
                                Bình luận
                            </TextScaled>
                            <TextScaled size="sm" className="text-customPrimary">
                                Xem thêm
                            </TextScaled>
                        </View>

                        <View style={{ gap: getScaleFactor() * 8 }}>
                            {mockComments.map((comment) => (
                                <View key={comment.id} style={{ flexDirection: 'row', gap: getScaleFactor() * 6 }}>
                                    <Image
                                        source={comment.avatar}
                                        style={{
                                            width: getScaleFactor() * 32,
                                            height: getScaleFactor() * 32,
                                            borderRadius: 100,
                                        }}
                                        resizeMode="cover"
                                    />
                                    <View style={{ flex: 1, gap: getScaleFactor() * 6 }}>
                                        <View
                                            style={{
                                                backgroundColor: 'white',
                                                padding: getScaleFactor() * 8,
                                                borderRadius: getScaleFactor() * 8,
                                                flexDirection: 'row',
                                                gap: getScaleFactor() * 6,
                                            }}
                                        >
                                            <View style={{ flex: 1, gap: getScaleFactor() * 4 }}>
                                                <View style={{ gap: getScaleFactor() * 4 }}>
                                                    <View style={{ gap: getScaleFactor() * 4 }}>
                                                        <View style={{ flexDirection: 'row', gap: getScaleFactor() * 8, alignItems: 'center' }}>
                                                            <TextScaled size="sm" className="font-semibold text-black">
                                                                {comment.user}
                                                            </TextScaled>
                                                            <TextScaled size="xs" className="text-textNeutralV1">
                                                                {comment.date}
                                                            </TextScaled>
                                                        </View>
                                                    </View>
                                                    <TextScaled size="sm" className="text-black" numberOfLines={2}>
                                                        {comment.content}
                                                    </TextScaled>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'center', gap: getScaleFactor() * 4, justifyContent:'center' }}>
                                                <Image
                                                    source={icons.heartIcon}
                                                    style={{ width: getScaleFactor() * 16, height: getScaleFactor() * 16 }}
                                                    resizeMode="contain"
                                                />
                                                <TextScaled size="xs" className="text-black">
                                                    {comment.likes}
                                                </TextScaled>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', gap: getScaleFactor() * 4, alignItems: 'center' }}>
                                            <View
                                                style={{
                                                    width: getScaleFactor() * 16,
                                                    height: 1,
                                                    backgroundColor: '#9CA3AF',
                                                }}
                                            />
                                            <TextScaled size="xs" className="text-textNeutralV1">
                                                Xem thêm {comment.replies} phản hồi
                                            </TextScaled>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Related Foods Section */}
                    <View style={{ gap: getScaleFactor() * 8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextScaled size="base" className="font-bold text-black">
                                Món ăn kèm nổi bật
                            </TextScaled>
                            <TextScaled size="sm" className="text-customPrimary">
                                Xem thêm
                            </TextScaled>
                        </View>

                        <RecipeCarousel />
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Button */}
            <View
                style={{
                    position: 'absolute',
                    bottom: insets.bottom,
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    borderTopLeftRadius: getScaleFactor() * 16,
                    borderTopRightRadius: getScaleFactor() * 16,
                    paddingVertical: getScaleFactor() * 8,
                    paddingHorizontal: getScaleFactor() * 16,
                }}  
            >
                 <CustomButton
                        title="Xem công thức"
                        onPress={() => router.push('/food-materials')}
                        bgVariant="primary"
                        textVariant="primary"
                        IconLeft={() => (
                            <Image
                                source={icons.eyeIcon}
                                style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
                                resizeMode="contain"
                            />
                        )}
                    />
            </View>
        </SafeAreaView>
    );
};

export default FoodDetailScreen;

