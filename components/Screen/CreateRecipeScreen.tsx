import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { FlatList, Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
                alignSelf: 'stretch',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: getScaleFactor() * 8,
            }}
        >
            <Image 
                source={icons.clockIcon} 
                style={{ 
                    width: getScaleFactor() * 24, 
                    height: getScaleFactor() * 24 
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
                    justifyContent: 'flex-start',
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
                source={icons.clockIcon} 
                style={{ 
                    width: getScaleFactor() * 24, 
                    height: getScaleFactor() * 24 
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
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: getScaleFactor() * 8,
            }}
        >
            <View 
                style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: getScaleFactor() * 4,
                }}
            >
                <View 
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: getScaleFactor() * 4,
                    }}
                >
                    <TextScaled
                        size="sm"
                        className="font-medium text-black"
                    >
                        {item.step}
                    </TextScaled>
                </View>
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
                }}
            >
                <Image
                    source={images.featuredFood2}
                    style={{
                        width: getScaleFactor() * 80,
                        height: getScaleFactor() * 80,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    resizeMode="cover"
                />
                <View 
                    style={{
                        position: 'absolute',
                        bottom: getScaleFactor() * 4,
                        right: getScaleFactor() * 4,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        borderRadius: getScaleFactor() * 12,
                        padding: getScaleFactor() * 4,
                    }}
                >
                    <Image 
                        source={icons.clockIcon} 
                        style={{ 
                            width: getScaleFactor() * 12, 
                            height: getScaleFactor() * 12,
                        }} 
                        resizeMode="contain" 
                    />
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1" edges={['bottom', 'left', 'right']}>
            <View 
                style={{
                    width: getScaleFactor() * 384,
                    height: getScaleFactor() * 1726,
                    position: 'relative',
                    backgroundColor: '#F5F5F5',
                    overflow: 'hidden',
                }}
            >
                {/* Header */}
                <View 
                    style={{
                        left: 0,
                        top: 0,
                        position: 'absolute',
                        backgroundColor: '#FFFFFF',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    {/* Status Bar */}
                    <View 
                        style={{
                            width: getScaleFactor() * 384,
                            height: getScaleFactor() * 44,
                            position: 'relative',
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
                                backgroundColor: '#27272A',
                            }}
                        />
                        <View 
                            style={{
                                width: getScaleFactor() * 16,
                                height: getScaleFactor() * 8,
                                right: getScaleFactor() * 41,
                                top: getScaleFactor() * 19.33,
                                position: 'absolute',
                                backgroundColor: '#27272A',
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
                                backgroundColor: '#27272A',
                            }}
                        />
                        <View 
                            style={{
                                width: getScaleFactor() * 16,
                                height: getScaleFactor() * 10,
                                right: getScaleFactor() * 85.33,
                                top: getScaleFactor() * 17.67,
                                position: 'absolute',
                                backgroundColor: '#27272A',
                            }}
                        />
                        {/* Time */}
                        <View 
                            style={{
                                width: getScaleFactor() * 56,
                                height: getScaleFactor() * 20,
                                left: getScaleFactor() * 21,
                                top: getScaleFactor() * 12,
                                position: 'absolute',
                                borderRadius: getScaleFactor() * 12,
                            }}
                        >
                            <TextScaled
                                size="base"
                                className="font-semibold text-center text-zinc-800"
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

                    {/* Navigation Header */}
                    <View 
                        style={{
                            width: getScaleFactor() * 320,
                            height: getScaleFactor() * 44,
                            position: 'relative',
                        }}
                    >
                        <View 
                            style={{
                                width: getScaleFactor() * 44,
                                height: getScaleFactor() * 44,
                                left: 0,
                                top: 0,
                                position: 'absolute',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            <Image 
                                source={icons.backArrow} 
                                style={{ 
                                    width: getScaleFactor() * 24, 
                                    height: getScaleFactor() * 24 
                                }} 
                                resizeMode="contain" 
                            />
                        </View>
                        <View 
                            style={{
                                width: getScaleFactor() * 256,
                                height: getScaleFactor() * 44,
                                padding: getScaleFactor() * 8,
                                left: getScaleFactor() * 44,
                                top: 0,
                                position: 'absolute',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            <TextScaled
                                size="base"
                                className="font-bold text-center text-zinc-800"
                            >
                                Công thức món ăn
                            </TextScaled>
                        </View>
                        <View 
                            style={{
                                width: getScaleFactor() * 320,
                                height: 0,
                                left: 0,
                                top: getScaleFactor() * 44,
                                position: 'absolute',
                            }}
                        />
                    </View>
                </View>

                <ScrollView
                    style={{
                        left: 0,
                        top: getScaleFactor() * 96,
                        position: 'absolute',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: getScaleFactor() * 8,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Main Form */}
                    <View 
                        style={{
                            width: getScaleFactor() * 384,
                            padding: getScaleFactor() * 16,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 16,
                        }}
                    >
                        {/* Image Upload */}
                        <View 
                            style={{
                                width: getScaleFactor() * 320,
                                height: getScaleFactor() * 192,
                                position: 'relative',
                                backgroundColor: '#FFFFFF',
                                borderRadius: getScaleFactor() * 8,
                                overflow: 'hidden',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source={images.sampleFood1}
                                style={{
                                    width: getScaleFactor() * 320,
                                    height: getScaleFactor() * 192,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                }}
                                resizeMode="cover"
                            />
                            <View 
                                style={{
                                    position: 'absolute',
                                    bottom: getScaleFactor() * 8,
                                    right: getScaleFactor() * 8,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 8,
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    paddingHorizontal: getScaleFactor() * 12,
                                    paddingVertical: getScaleFactor() * 6,
                                    borderRadius: getScaleFactor() * 16,
                                }}
                            >
                                <Image 
                                    source={icons.clockIcon} 
                                    style={{ 
                                        width: getScaleFactor() * 16, 
                                        height: getScaleFactor() * 16 
                                    }} 
                                    resizeMode="contain" 
                                />
                                <TextScaled
                                    size="xs"
                                    className="font-medium text-white"
                                >
                                    Thay đổi ảnh
                                </TextScaled>
                            </View>
                        </View>

                        {/* Recipe Name */}
                        <View 
                            style={{
                                width: getScaleFactor() * 320,
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 4,
                            }}
                        >
                            <View 
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 4,
                                }}
                            >
                                <TextScaled
                                    size="base"
                                    className="font-bold text-black"
                                >
                                    Tên món ăn
                                </TextScaled>
                            </View>
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
                                    Tên món ngon nhất nhà mình
                                </TextScaled>
                            </View>
                        </View>

                        {/* Recipe Description */}
                        <View 
                            style={{
                                width: getScaleFactor() * 320,
                                height: getScaleFactor() * 160,
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 4,
                            }}
                        >
                            <View 
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 4,
                                }}
                            >
                                <TextScaled
                                    size="base"
                                    className="font-bold text-black"
                                >
                                    Giới thiệu món ăn
                                </TextScaled>
                            </View>
                            <View 
                                style={{
                                    alignSelf: 'stretch',
                                    flex: 1,
                                    padding: getScaleFactor() * 8,
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: getScaleFactor() * 8,
                                    borderWidth: getScaleFactor() * 1,
                                    borderColor: '#E5E5E5',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: getScaleFactor() * 8,
                                }}
                            >
                                <TextScaled
                                    size="base"
                                    className="text-textNeutralV1"
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
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 14,
                            }}
                        >
                            {/* Portion */}
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
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: getScaleFactor() * 4,
                                    }}
                                >
                                    <TextScaled
                                        size="base"
                                        className="font-bold text-black"
                                    >
                                        Khẩu phần
                                    </TextScaled>
                                </View>
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
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: getScaleFactor() * 8,
                                    }}
                                >
                                    <View 
                                        style={{
                                            width: getScaleFactor() * 24,
                                            height: getScaleFactor() * 24,
                                            backgroundColor: '#F5F5F5',
                                            borderRadius: getScaleFactor() * 4,
                                        }}
                                    >
                                        <Image 
                                            source={icons.clockIcon} 
                                            style={{ 
                                                width: getScaleFactor() * 8, 
                                                height: getScaleFactor() * 16,
                                                left: getScaleFactor() * 6.75,
                                                top: getScaleFactor() * 3.75,
                                                position: 'absolute',
                                            }} 
                                            resizeMode="contain" 
                                        />
                                    </View>
                                    <TextScaled
                                        size="base"
                                        className="text-center text-textNeutralV1"
                                    >
                                        2
                                    </TextScaled>
                                    <View 
                                        style={{
                                            width: getScaleFactor() * 24,
                                            height: getScaleFactor() * 24,
                                            backgroundColor: '#F5F5F5',
                                            borderRadius: getScaleFactor() * 4,
                                        }}
                                    >
                                        <Image 
                                            source={icons.clockIcon} 
                                            style={{ 
                                                width: getScaleFactor() * 8, 
                                                height: getScaleFactor() * 16,
                                                left: getScaleFactor() * 8.25,
                                                top: getScaleFactor() * 3.75,
                                                position: 'absolute',
                                            }} 
                                            resizeMode="contain" 
                                        />
                                    </View>
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
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: getScaleFactor() * 4,
                                }}
                            >
                                <View 
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: getScaleFactor() * 4,
                                    }}
                                >
                                    <TextScaled
                                        size="base"
                                        className="font-bold text-black"
                                    >
                                        Thời gian
                                    </TextScaled>
                                </View>
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
                    <View 
                        style={{
                            width: getScaleFactor() * 384,
                            paddingHorizontal: getScaleFactor() * 8,
                            paddingVertical: getScaleFactor() * 16,
                            backgroundColor: '#FFFFFF',
                            borderRadius: getScaleFactor() * 8,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
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
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            <View 
                                style={{
                                    alignSelf: 'stretch',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: getScaleFactor() * 4,
                                }}
                            >
                                <View 
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: getScaleFactor() * 4,
                                    }}
                                >
                                    <TextScaled
                                        size="sm"
                                        className="font-medium text-black"
                                    >
                                        Thành phần 1
                                    </TextScaled>
                                </View>
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
                                contentContainerStyle={{
                                    gap: getScaleFactor() * 8,
                                }}
                            />
                        </View>

                        {/* Action Buttons */}
                        <View 
                            style={{
                                alignSelf: 'stretch',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 16,
                            }}
                        >
                            <CustomButton
                                title="Nguyên liệu"
                                bgVariant="outline"
                                className="flex-1"
                                style={{ height: getScaleFactor() * 32 }}
                            />
                            <CustomButton
                                title="Phần"
                                bgVariant="outline"
                                className="flex-1"
                                style={{ height: getScaleFactor() * 32 }}
                            />
                        </View>
                    </View>

                    {/* Cooking Steps Section */}
                    <View 
                        style={{
                            width: getScaleFactor() * 384,
                            padding: getScaleFactor() * 16,
                            backgroundColor: '#FFFFFF',
                            borderRadius: getScaleFactor() * 8,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
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
                                alignSelf: 'stretch',
                                height: getScaleFactor() * 192,
                                position: 'relative',
                                backgroundColor: '#F5F5F5',
                                borderRadius: getScaleFactor() * 8,
                                overflow: 'hidden',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source={images.featuredFood1}
                                style={{
                                    width: '100%',
                                    height: getScaleFactor() * 192,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                }}
                                resizeMode="cover"
                            />
                            <View 
                                style={{
                                    position: 'absolute',
                                    bottom: getScaleFactor() * 8,
                                    right: getScaleFactor() * 8,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 8,
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    paddingHorizontal: getScaleFactor() * 12,
                                    paddingVertical: getScaleFactor() * 6,
                                    borderRadius: getScaleFactor() * 16,
                                }}
                            >
                                <Image 
                                    source={icons.clockIcon} 
                                    style={{ 
                                        width: getScaleFactor() * 16, 
                                        height: getScaleFactor() * 16 
                                    }} 
                                    resizeMode="contain" 
                                />
                                <TextScaled
                                    size="xs"
                                    className="font-medium text-white"
                                >
                                    Thêm video
                                </TextScaled>
                            </View>
                        </View>

                        {/* Cooking Steps */}
                        <View 
                            style={{
                                alignSelf: 'stretch',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 8,
                            }}
                        >
                            <FlatList
                                data={cookingStepsData}
                                renderItem={renderCookingStep}
                                keyExtractor={(item) => item.id}
                                scrollEnabled={false}
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
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 16,
                            }}
                        >
                            <CustomButton
                                title="Thêm bước"
                                bgVariant="outline"
                                className="flex-1"
                                style={{ height: getScaleFactor() * 32 }}
                            />
                        </View>
                    </View>
                </ScrollView>

                {/* Bottom Action Bar */}
                <View 
                    style={{
                        left: 0,
                        top: getScaleFactor() * 1635,
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
                            width: getScaleFactor() * 384,
                            paddingHorizontal: getScaleFactor() * 16,
                            paddingVertical: getScaleFactor() * 8,
                            backgroundColor: '#FFFFFF',
                            borderTopLeftRadius: getScaleFactor() * 8,
                            borderTopRightRadius: getScaleFactor() * 8,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: getScaleFactor() * 8,
                        }}
                    >
                        <CustomButton
                            title="Lưu nháp"
                            bgVariant="secondary"
                            className="flex-1"
                        />
                        <CustomButton
                            title="Đăng tải"
                            bgVariant="primary"
                            className="flex-1"
                        />
                    </View>
                    
                    {/* Home Indicator */}
                    <View 
                        style={{
                            width: getScaleFactor() * 384,
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
                                borderRadius: getScaleFactor() * 100,
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CreateRecipeScreen;
