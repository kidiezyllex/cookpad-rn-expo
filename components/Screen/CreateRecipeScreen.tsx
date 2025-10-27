import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FlatList, Image, Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackHeader from '../Common/BackHeader';
import CustomButton from '../Common/CustomButton';
import TextScaled from '../Common/TextScaled';

// Mock data for ingredients
const ingredientsData = [
    { id: '1', name: 'Thành phần 1', amount: '250g bột' },
    { id: '2', name: 'Thành phần 2', amount: '250g bột' },
];

// Mock data for cooking steps
const cookingStepsData = [
    { id: '1', step: 'Bước 1', description: 'Miêu tả bước 1' },
    { id: '2', step: 'Bước 2', description: 'Miêu tả bước 2' },
];

const CreateRecipeScreen = () => {
    const renderIngredientItem = ({ item }: { item: typeof ingredientsData[0] }) => (
        <View
            style={{
                width: '100%',
                alignSelf: 'stretch',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: getScaleFactor() * 8,
            }}
        >
            <Image
                source={icons.activeFunnelIcon}
                style={{
                    width: getScaleFactor() * 24,
                    height: getScaleFactor() * 24,
                    tintColor: '#2D2D2D',
                }}
                resizeMode="contain"
            />
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: getScaleFactor() * 16,
                    paddingVertical: getScaleFactor() * 8,
                    backgroundColor: '#F5F5F5',
                    borderRadius: getScaleFactor() * 8,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: getScaleFactor() * 10,
                }}
            >
                <TextScaled
                    size="base"
                    className="text-textNeutralV1"
                >
                    {item.amount}
                </TextScaled>
            </View>
            <Image
                source={icons.threeDotsIcon}
                style={{
                    width: getScaleFactor() * 24,
                    height: getScaleFactor() * 24,
                    transform: [{ rotate: '90deg' }],
                }}
                resizeMode="contain"
            />
        </View>
    );

    const renderCookingStep = ({ item }: { item: typeof cookingStepsData[0] }) => (
        <View
            style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: getScaleFactor() * 8,
            }}
        >
            <View
                style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: getScaleFactor() * 4,
                }}
            >
                 <TextScaled
                        size="sm"
                        className="font-medium text-black"
                    >
                        {item.step}
                    </TextScaled>
                <View
                    style={{
                        width: '100%',
                        alignSelf: 'stretch',
                        height: getScaleFactor() * 40,
                        padding: getScaleFactor() * 8,
                        backgroundColor: '#F5F5F5',
                        borderRadius: getScaleFactor() * 8,
                        borderWidth: getScaleFactor() * 1,
                        borderColor: '#E5E5E5',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: getScaleFactor() * 8,
                    }}
                >
                    <TextScaled
                        size="base"
                        className="text-textNeutralV1"
                    >
                        {item.description}
                    </TextScaled>
                </View>
            </View>
            <View
                style={{
                    width: getScaleFactor() * 80,
                    height: getScaleFactor() * 80,
                    position: 'relative',
                    backgroundColor: '#F5F5F5',
                    borderRadius: getScaleFactor() * 8,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* camera icon */}
                <Image
                    source={icons.cameraIcon}
                    style={{
                        width: getScaleFactor() * 24,
                        height: getScaleFactor() * 24,
                    }}
                    resizeMode="contain"
                />
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1" edges={['top', 'bottom', 'left', 'right']} style={{ backgroundColor: 'white' }}>
            <BackHeader 
                headerTitle="Công thức món ăn" 
                onPress={() => router.back()} 
            />

            <ScrollView
                className="flex-1"
                contentContainerStyle={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: getScaleFactor() * 8,
                    paddingTop: getScaleFactor() * 8,
                    paddingBottom: getScaleFactor() * 100,
                    backgroundColor: '#F1EEE8',
                }}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                {/* Main Form */}
                <View
                    style={{
                        width: '100%',
                        padding: getScaleFactor() * 16,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 16,
                    }}
                >
                    {/* Image Upload */}
                    <View
                        style={{
                            width: '100%',
                            height: 200,
                            position: 'relative',
                            backgroundColor: '#FFFFFF',
                            borderRadius: getScaleFactor() * 8,
                            overflow: 'hidden',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: [{ translateX: -getScaleFactor() * 100 }, { translateY: -getScaleFactor() * 10 }], // 10 là heiht của View này, chính là 50% height
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            <Image
                                source={icons.cameraIcon}
                                style={{
                                    width: getScaleFactor() * 24,
                                    height: getScaleFactor() * 24
                                }}
                                resizeMode="contain"
                            />
                            <TextScaled
                                size="sm"
                                className="font-medium text-textNeutralV1"
                            >
                                Đăng hình đại diện món ăn
                            </TextScaled>
                        </View>
                    </View>

                    {/* Recipe Name */}
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 4,
                        }}
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            Tên món ăn
                        </TextScaled>
                        <View
                            style={{
                                alignSelf: 'stretch',
                                height: getScaleFactor() * 40,
                                padding: getScaleFactor() * 8,
                                backgroundColor: '#FFFFFF',
                                borderRadius: getScaleFactor() * 8,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            <TextScaled
                                size="base"
                                className="text-textNeutralV1 font-light"
                            >
                                Tên món ngon nhất nhà mình
                            </TextScaled>
                        </View>
                    </View>

                    {/* Recipe Description */}
                    <View
                        style={{
                            width: '100%',
                            height: getScaleFactor() * 160,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 4,
                        }}
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            Giới thiệu món ăn
                        </TextScaled>
                        <View
                            style={{
                                alignSelf: 'stretch',
                                flex: 1,
                                padding: getScaleFactor() * 8,
                                paddingBottom: getScaleFactor() * 28,
                                backgroundColor: '#FFFFFF',
                                borderRadius: getScaleFactor() * 8,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            <TextScaled
                                size="base"
                                className="text-textNeutralV1 font-light"
                            >
                                Hãy chia sẻ với mọi người về món này của bạn nhé. Ai hay điều gì đã truyền cảm hứng cho bạn nấu nó? Tại sao nó đặc biệt? Bạn thích thưởng thức nó theo cách nào?
                            </TextScaled>
                        </View>
                    </View>

                    {/* Portion and Time */}
                    <View
                        style={{
                            alignSelf: 'stretch',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 14,
                        }}
                    >
                        {/* Portion */}
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 4,
                            }}
                        >
                            <TextScaled
                                size="base"
                                className="font-bold text-black"
                            >
                                Khẩu phần
                            </TextScaled>
                            <View
                                style={{
                                    alignSelf: 'stretch',
                                    height: getScaleFactor() * 40,
                                    paddingHorizontal: getScaleFactor() * 8,
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: getScaleFactor() * 8,
                                    borderWidth: getScaleFactor() * 1,
                                    borderColor: '#E5E5E5',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 8,
                                }}
                            >
                                <Pressable
                                    style={{
                                        width: getScaleFactor() * 24,
                                        height: getScaleFactor() * 24,
                                        backgroundColor: '#F5F5F5',
                                        borderRadius: getScaleFactor() * 4,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Ionicons
                                        name="chevron-back"
                                        size={100}
                                        color="#000000"
                                    />
                                </Pressable>
                                <TextScaled
                                    size="base"
                                    className="text-center text-textNeutralV1"
                                >
                                    2
                                </TextScaled>
                                <Pressable
                                    style={{
                                        width: getScaleFactor() * 24,
                                        height: getScaleFactor() * 24,
                                        backgroundColor: '#F5F5F5',
                                        borderRadius: getScaleFactor() * 4,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Ionicons
                                        name="chevron-forward"
                                        size={100}
                                        color="#000000"
                                    />
                                </Pressable>
                            </View>
                        </View>

                        {/* Divider */}
                        <View
                            style={{
                                width: getScaleFactor() * 1,
                                height: getScaleFactor() * 16,
                                position: 'relative',
                            }}
                        />

                        {/* Time */}
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 4,
                            }}
                        >
                            <TextScaled
                                size="base"
                                className="font-bold text-black"
                            >
                                Thời gian
                            </TextScaled>
                            <View
                                style={{
                                    alignSelf: 'stretch',
                                    height: getScaleFactor() * 40,
                                    padding: getScaleFactor() * 8,
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: getScaleFactor() * 8,
                                    borderWidth: getScaleFactor() * 1,
                                    borderColor: '#E5E5E5',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 8,
                                }}
                            >
                                <TextScaled
                                    size="base"
                                    className="text-textNeutralV1"
                                >
                                    Giờ/Phút
                                </TextScaled>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Ingredients Section */}
                <View style={{
                    width: '100%',
                    padding: getScaleFactor() * 8,
                    flexDirection: 'column',
                    gap: getScaleFactor() * 8,
                }}>
                    {/* Phần Nguyên liệu */}
                    <View
                        style={{
                            width: '100%',
                            paddingHorizontal: getScaleFactor() * 8,
                            paddingVertical: getScaleFactor() * 16,
                            backgroundColor: '#FFFFFF',
                            borderRadius: getScaleFactor() * 8,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 16,
                        }}
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            Nguyên liệu
                        </TextScaled>

                        <View
                            style={{
                                alignSelf: 'stretch',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            <View
                                style={{
                                    alignSelf: 'stretch',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    gap: getScaleFactor() * 4,
                                }}
                            >
                                <TextScaled
                                    size="sm"
                                    className="font-medium text-black"
                                >
                                    Thành phần 1
                                </TextScaled>
                                <View
                                    style={{
                                        alignSelf: 'stretch',
                                        height: getScaleFactor() * 40,
                                        padding: getScaleFactor() * 8,
                                        backgroundColor: '#F5F5F5',
                                        borderRadius: getScaleFactor() * 8,
                                        borderWidth: getScaleFactor() * 1,
                                        borderColor: '#E5E5E5',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: getScaleFactor() * 8,
                                    }}
                                >
                                    <TextScaled
                                        size="base"
                                        className="text-textNeutralV1"
                                    >
                                        Thành phần 1
                                    </TextScaled>
                                </View>
                            </View>

                            <FlatList
                                data={ingredientsData}
                                renderItem={renderIngredientItem}
                                keyExtractor={(item) => item.id}
                                scrollEnabled={false}
                                style={{ width: '100%' }}
                                contentContainerStyle={{
                                    gap: getScaleFactor() * 8,
                                    width: '100%',
                                }}
                            />
                        </View>

                        {/* Action Buttons */}
                        <View
                            style={{
                                alignSelf: 'stretch',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 16,
                            }}
                        >
                            <Pressable
                                style={{
                                    width: "50%",
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 8,
                                    padding: getScaleFactor() * 4,
                                }}
                            >
                                <Image
                                    source={icons.plusIcon}
                                    style={{
                                        width: getScaleFactor() * 24,
                                        height: getScaleFactor() * 24,
                                        tintColor: '#2D2D2D',
                                    }}
                                    resizeMode="contain"
                                />
                                <TextScaled
                                    size="sm"
                                    className="font-bold text-black"
                                >
                                    Nguyên liệu
                                </TextScaled>
                            </Pressable>
                            <Pressable
                                style={{
                                    width: "50%",
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 8,
                                    padding: getScaleFactor() * 4,
                                }}
                            >
                                <Image
                                    source={icons.plusIcon}
                                    style={{
                                        width: getScaleFactor() * 24,
                                        height: getScaleFactor() * 24,
                                        tintColor: '#2D2D2D',
                                    }}
                                    resizeMode="contain"
                                />
                                <TextScaled
                                    size="sm"
                                    className="font-bold text-black"
                                >
                                    Phần
                                </TextScaled>
                            </Pressable>
                        </View>
                    </View>
                    {/* Phần cách làm */}
                    <View
                    style={{
                        width: '100%',
                        padding: getScaleFactor() * 16,
                        backgroundColor: '#FFFFFF',
                        borderRadius: getScaleFactor() * 8,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 16,
                    }}
                >
                    <TextScaled
                        size="base"
                        className="font-bold text-black"
                    >
                        Cách làm
                    </TextScaled>

                    {/* Video Upload */}
                    <View
                        style={{
                            width: '100%',
                            height: 200,
                            position: 'relative',
                            backgroundColor: '#EEEEEE',
                            borderRadius: getScaleFactor() * 8,
                            overflow: 'hidden',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: [{ translateX: -getScaleFactor() * 100 }, { translateY: -getScaleFactor() * 10 }], // 10 là heiht của View này, chính là 50% height
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            <Image
                                source={icons.videoIcon}
                                style={{
                                    width: getScaleFactor() * 24,
                                    height: getScaleFactor() * 24
                                }}
                                resizeMode="contain"
                            />
                            <TextScaled
                                size="sm"
                                className="font-medium text-textNeutralV1"
                            >
                                Thêm video nấu món ăn
                            </TextScaled>
                        </View>
                    </View>

                    {/* Cooking Steps */}
                    <View
                        style={{
                            alignSelf: 'stretch',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 8,
                        }}
                    >
                        <FlatList
                            data={cookingStepsData}
                            renderItem={renderCookingStep}
                            keyExtractor={(item) => item.id}
                            scrollEnabled={false}
                            style={{ width: '100%' }}
                            contentContainerStyle={{
                                gap: getScaleFactor() * 8,
                            }}
                        />
                    </View>

                    {/* Add Step Button */}
                    <View
                        style={{
                            alignSelf: 'stretch',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 16,
                        }}
                    >
                         <Pressable
                                style={{
                                    width: "100%",
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 8,
                                    padding: getScaleFactor() * 4,
                                }}
                            >
                                <Image
                                    source={icons.plusIcon}
                                    style={{
                                        width: getScaleFactor() * 24,
                                        height: getScaleFactor() * 24,
                                        tintColor: '#2D2D2D',
                                    }}
                                    resizeMode="contain"
                                />
                                <TextScaled
                                    size="sm"
                                    className="font-bold text-black"
                                >
                                    Thêm bước
                                </TextScaled>
                            </Pressable>
                    </View>
                </View>
                </View>
            </ScrollView>

            {/* Bottom Action Bar */}
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.1,
                    shadowRadius: 12,
                    elevation: 3,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                <View
                    style={{
                        width: '100%',
                        paddingHorizontal: getScaleFactor() * 16,
                        paddingVertical: getScaleFactor() * 8,
                        backgroundColor: '#FFFFFF',
                        borderTopLeftRadius: getScaleFactor() * 8,
                        borderTopRightRadius: getScaleFactor() * 8,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 8,
                    }}
                >
                    <CustomButton
                        title="Lưu nháp"
                        bgVariant="ghost"
                        className="flex-1"
                        textVariant="ghost"
                    />
                    <CustomButton
                        title="Đăng tải"
                        bgVariant="primary"
                        className="flex-1"
                        textVariant="primary"
                    />
                </View>

                {/* Home Indicator */}
                <View
                    style={{
                        width: '100%',
                        height: getScaleFactor() * 32,
                        position: 'relative',
                        backgroundColor: '#FFFFFF',
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
                            borderRadius: 100,
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CreateRecipeScreen;
