import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useNavigation } from '@react-navigation/native';
import { Image, TextInput, View } from 'react-native';
import TextScaled from '../Common/TextScaled';

const HeroSection = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                height: getScaleFactor() * 256,
                backgroundColor: '#E36137',
                position: 'relative',
            }}
        >
            {/* Hero section */}
            <Image
                style={{
                    width: 200,
                    height: 200,
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                }}
                source={images.searchHero}
                resizeMode="contain"
            />

            <View
                style={{
                    position: 'absolute',
                    width: getScaleFactor() * 170,
                    height: getScaleFactor() * 137,
                    left: getScaleFactor() * 25,
                    bottom: getScaleFactor() * 48,
                }}
                className='justify-center items-center'
            >
                <Image
                    source={images.messageBubble2}
                    resizeMode="contain"
                    style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain",
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        right: 0,
                        top: 0,
                    }}
                />
                <TextScaled
                    size="xs"
                    style={{
                        maxWidth: getScaleFactor() * 110,
                    }}
                    className="font-light text-customSecondary"
                >
                    Nhập tên món ăn nếu bạn đã lựa chọn được món muốn nấu hoặc nhập tên nguyên liệu để xem gợi ý nhé!
                </TextScaled>
            </View>

            {/* Search Field */}
            <View
                style={{
                    paddingHorizontal: getScaleFactor() * 16,
                    paddingTop: getScaleFactor() * 16,
                    height: getScaleFactor() * 40,
                    position: 'relative',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: getScaleFactor() * 4,
                    borderRadius: getScaleFactor() * 8,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        height: getScaleFactor() * 40,
                        paddingHorizontal: getScaleFactor() * 8,
                        borderRadius: getScaleFactor() * 8,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        source={icons.searchIcon}
                        style={{
                            width: getScaleFactor() * 24,
                            height: getScaleFactor() * 24,
                            marginRight: getScaleFactor() * 16,
                        }}
                        resizeMode="contain"
                    />
                    <View
                        style={{
                            paddingHorizontal: getScaleFactor() * 4,
                            paddingVertical: getScaleFactor() * 2,
                            backgroundColor: 'rgba(239, 68, 68, 0.2)',
                            borderRadius: getScaleFactor() * 4,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: getScaleFactor() * 2,
                            marginRight: getScaleFactor() * 8,
                        }}
                    >
                        <Image
                            source={icons.fireIcon}
                            style={{
                                width: getScaleFactor() * 16,
                                height: getScaleFactor() * 16
                            }}
                            resizeMode="contain"
                        />
                        <TextScaled
                            size="sm"
                            className="font-medium text-red-500"
                        >
                            Hot
                        </TextScaled>
                    </View>
                    <TextInput
                        placeholder="Mì tôm thanh long"
                        style={{
                            flex: 1,
                            fontSize: getScaleFactor() * 14,
                            fontWeight: '500',
                            color: 'black',
                            paddingVertical: 0,
                        }}
                        onFocus={() => {
                            (navigation as any).navigate('search-bar');
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default HeroSection;
