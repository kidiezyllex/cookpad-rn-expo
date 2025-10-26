import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { router } from 'expo-router';
import { FlatList, Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextScaled from '../Common/TextScaled';

const actionCardsData = [
    {
        id: '1',
        title: 'Tạo công thức',
        icon: images.menu,
        iconColor: 'red',
        iconSize: 44
    },
    {
        id: '2',
        title: 'Tạo bảng',
        icon: images.table,
        iconColor: 'blue',
        iconSize: 56
    },
];

const PersonalChestScreen = () => {
    const renderActionCard = ({ item }: { item: typeof actionCardsData[0] }) => (
        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: getScaleFactor() * 8,
            }}
        >
            <View
                style={{
                    width: getScaleFactor() * 100,
                    height: getScaleFactor() * 100,
                    backgroundColor: 'white',
                    borderRadius: getScaleFactor() * 8,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.1,
                    shadowRadius: 12,
                    elevation: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    source={item.icon}
                    style={{
                        height: getScaleFactor() * 60,
                    }}
                    resizeMode="contain"
                />
            </View>
            <TextScaled
                size="sm"
                className="font-bold text-black"
            >
                {item.title}
            </TextScaled>
        </View>
    );

    return (
        <SafeAreaView 
            style={{ flex: 1, backgroundColor: '#F5F5F5' }}
            edges={['top', 'bottom', 'left', 'right']}
            mode="padding"
        >
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    backgroundColor: '#F5F5F5',
                    overflow: 'hidden',
                }}
            >
                {/* Background Images */}
                <Image
                    style={{
                        width: getScaleFactor() * 384,
                        height: getScaleFactor() * 883.22,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                    }}
                    source={images.personalChestBg}
                    resizeMode="cover"
                />
                <Image
                    style={{
                        width: 200,
                        height: 200,
                        position: 'absolute',
                        top: getScaleFactor() * 82,
                        left: '50%',
                        transform: [{ translateX: -getScaleFactor() * 100 }],
                    }}
                    source={images.personalChestBanner}
                    resizeMode="contain"
                />
                {/* Main Content */}
                <View
                    style={{
                        width: '100%',
                        paddingHorizontal: getScaleFactor() * 16,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        position: 'absolute',
                        top: getScaleFactor() * 320,
                    }}
                >
                    <TextScaled
                        style={{
                            marginBottom: getScaleFactor() * 8,
                        }}
                        size="xl"
                        className="font-medium text-center text-black"
                    >
                        Rương cá nhân
                    </TextScaled>
                    <TextScaled
                     style={{
                        marginBottom: getScaleFactor() * 24,
                        paddingHorizontal: getScaleFactor() * 8,
                    }}
                        size="base"
                        className="text-center text-textNeutralV1 font-light"
                    >
                        Bắt đầu lưu giữ tất cả công thức của bạn với tính năng đăng công thức cá nhân và tạo bảng để lưu trữ các công thức bạn yêu thích
                    </TextScaled>

                    {/* Action Cards */}
                    <FlatList
                        data={actionCardsData}
                        renderItem={({ item }) => (
                            <Pressable 
                                key={item.id}
                                onPress={() => {
                                    if (item.id === '1') {
                                        router.push('/create-recipe');
                                    }
                                }}
                            >
                                {renderActionCard({ item })}
                            </Pressable>
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: getScaleFactor() * 16,
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PersonalChestScreen;
