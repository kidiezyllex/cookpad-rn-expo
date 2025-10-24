import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextScaled from '../Common/TextScaled';

// Mock data for bottom navigation
const bottomNavData = [
    { id: '1', icon: icons.clockIcon, status: 'default' },
    { id: '2', icon: icons.clockIcon, status: 'default' },
    { id: '3', icon: icons.clockIcon, status: 'active' },
    { id: '4', icon: icons.clockIcon, status: 'default' },
    { id: '5', icon: icons.clockIcon, status: 'default' },
];

// Mock data for action cards
const actionCardsData = [
    { 
        id: '1', 
        title: 'Tạo công thức', 
        icon: icons.clockIcon,
        iconColor: 'red',
        iconSize: 44
    },
    { 
        id: '2', 
        title: 'Tạo bảng', 
        icon: icons.clockIcon,
        iconColor: 'blue',
        iconSize: 56
    },
];

const PersonalChestScreen = () => {
    const renderBottomNavItem = ({ item }: { item: typeof bottomNavData[0] }) => (
        <View 
            style={{
                width: getScaleFactor() * 56,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: getScaleFactor() * 8,
            }}
        >
            <Image 
                source={item.icon} 
                style={{ 
                    width: getScaleFactor() * 24, 
                    height: getScaleFactor() * 24,
                    tintColor: item.status === 'active' ? '#E36137' : '#6B7280'
                }} 
                resizeMode="contain" 
            />
        </View>
    );

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
                    width: getScaleFactor() * 96,
                    height: getScaleFactor() * 96,
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
                        width: getScaleFactor() * item.iconSize, 
                        height: getScaleFactor() * item.iconSize,
                        tintColor: item.iconColor === 'red' ? '#EF4444' : '#3B82F6'
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
        <SafeAreaView className="flex-1" edges={['bottom', 'left', 'right']}>
            <View 
                style={{
                    width: getScaleFactor() * 384,
                    height: getScaleFactor() * 812,
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
                        top: getScaleFactor() * 44,
                    }}
                    source={images.homeHero}
                    resizeMode="cover"
                />
                <Image
                    style={{
                        width: getScaleFactor() * 192,
                        height: getScaleFactor() * 208,
                        position: 'absolute',
                        left: getScaleFactor() * 88,
                        top: getScaleFactor() * 126,
                    }}
                    source={images.sampleFood1}
                    resizeMode="cover"
                />

                {/* Status Bar */}
                <View 
                    style={{
                        width: getScaleFactor() * 384,
                        height: getScaleFactor() * 44,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        overflow: 'hidden',
                    }}
                >
                    {/* Battery indicator */}
                    <View 
                        style={{
                            width: getScaleFactor() * 20,
                            height: getScaleFactor() * 12,
                            right: getScaleFactor() * 43,
                            top: getScaleFactor() * 17.33,
                            position: 'absolute',
                            opacity: 0.3,
                            borderRadius: getScaleFactor() * 3,
                            borderWidth: getScaleFactor() * 1,
                            borderColor: 'black',
                        }}
                    />
                    <View 
                        style={{
                            width: getScaleFactor() * 1.33,
                            height: getScaleFactor() * 4,
                            right: getScaleFactor() * 20,
                            top: getScaleFactor() * 21,
                            position: 'absolute',
                            opacity: 0.4,
                            backgroundColor: 'black',
                        }}
                    />
                    <View 
                        style={{
                            width: getScaleFactor() * 16,
                            height: getScaleFactor() * 8,
                            right: getScaleFactor() * 41,
                            top: getScaleFactor() * 19.33,
                            position: 'absolute',
                            backgroundColor: 'black',
                            borderRadius: getScaleFactor() * 1.10,
                        }}
                    />
                    <View 
                        style={{
                            width: getScaleFactor() * 16,
                            height: getScaleFactor() * 10,
                            right: getScaleFactor() * 63.31,
                            top: getScaleFactor() * 17.33,
                            position: 'absolute',
                            backgroundColor: 'black',
                        }}
                    />
                    <View 
                        style={{
                            width: getScaleFactor() * 16,
                            height: getScaleFactor() * 10,
                            right: getScaleFactor() * 85.33,
                            top: getScaleFactor() * 17.67,
                            position: 'absolute',
                            backgroundColor: 'black',
                        }}
                    />
                    {/* Time */}
                    <View 
                        style={{
                            width: getScaleFactor() * 56,
                            height: getScaleFactor() * 20,
                            left: getScaleFactor() * 24,
                            top: getScaleFactor() * 12,
                            position: 'absolute',
                            borderRadius: getScaleFactor() * 12,
                        }}
                    >
                        <TextScaled
                            size="base"
                            className="font-semibold text-center text-black"
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: getScaleFactor() * 1,
                            }}
                        >
                            9:41
                        </TextScaled>
                    </View>
                </View>

                {/* Main Content */}
                <View 
                    style={{
                        left: getScaleFactor() * 16,
                        top: getScaleFactor() * 364,
                        position: 'absolute',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: getScaleFactor() * 24,
                    }}
                >
                    {/* Title Section */}
                    <View 
                        style={{
                            width: getScaleFactor() * 320,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: getScaleFactor() * 8,
                        }}
                    >
                        <TextScaled
                            size="xl"
                            className="font-medium text-center text-black"
                        >
                            Rương cá nhân
                        </TextScaled>
                        <TextScaled
                            size="base"
                            className="text-center text-stone-500"
                        >
                            Bắt đầu lưu giữ tất cả công thức của bạn với tính năng đăng công thức cá nhân và tạo bảng để lưu trữ các công thức bạn yêu thích
                        </TextScaled>
                    </View>

                    {/* Action Cards */}
                    <View 
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 16,
                        }}
                    >
                        {actionCardsData.map((item) => (
                            <View key={item.id}>
                                {renderActionCard({ item })}
                            </View>
                        ))}
                    </View>
                </View>

                {/* Bottom Navigation */}
                <View 
                    style={{
                        left: 0,
                        top: getScaleFactor() * 722,
                        position: 'absolute',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.1,
                        shadowRadius: 12,
                        elevation: 3,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}
                >
                    <View 
                        style={{
                            backgroundColor: 'white',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.1,
                            shadowRadius: 12,
                            elevation: 3,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <View 
                            style={{
                                alignSelf: 'stretch',
                                paddingVertical: getScaleFactor() * 16,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            {bottomNavData.map((item) => (
                                <View key={item.id}>
                                    {renderBottomNavItem({ item })}
                                </View>
                            ))}
                        </View>
                        
                        {/* Home Indicator */}
                        <View 
                            style={{
                                width: getScaleFactor() * 384,
                                height: getScaleFactor() * 32,
                                position: 'relative',
                            }}
                        >
                            <View 
                                style={{
                                    width: getScaleFactor() * 128,
                                    height: getScaleFactor() * 5,
                                    left: getScaleFactor() * 121,
                                    top: getScaleFactor() * 21,
                                    position: 'absolute',
                                    backgroundColor: 'black',
                                    borderRadius: getScaleFactor() * 100,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PersonalChestScreen;
