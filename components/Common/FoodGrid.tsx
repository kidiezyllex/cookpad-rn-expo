import TextScaled from '@/components/Common/TextScaled';
import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, View } from 'react-native';

interface FoodItem {
    id: string;
    name: string;
    image: any;
    time: string;
    likes: number;
}

interface FoodGridProps {
    featuredRecipesData: FoodItem[];
}

const FoodGrid = ({ featuredRecipesData }: FoodGridProps) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: getScaleFactor() * 8,
            }}
        >
            <View
                style={{
                    paddingBottom: getScaleFactor() * 112,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                {/* Left column */}
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 16,
                        width: "50%",
                        paddingRight: getScaleFactor() * 4,
                    }}
                >
                    {featuredRecipesData.slice(0, 4).map((item, index) => (
                        <View
                            key={item.id}
                            style={{
                                width: "100%",
                                height: getScaleFactor() * (index === 0 || index === 1 ? 240 : 160),
                                backgroundColor: 'white',
                                borderRadius: getScaleFactor() * 8,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: getScaleFactor() * 3 },
                                shadowOpacity: 0.1,
                                shadowRadius: getScaleFactor() * 12,
                                elevation: 3,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 4,
                            }}
                        >
                            <Image
                                style={{
                                    width: "100%",
                                    flex: 1,
                                    borderTopLeftRadius: getScaleFactor() * 8,
                                    borderTopRightRadius: getScaleFactor() * 8,
                                }}
                                source={item.image}
                                resizeMode="cover"
                            />
                            <View
                                style={{
                                    width: "100%",
                                    paddingHorizontal: getScaleFactor() * 8,
                                    paddingRight: getScaleFactor() * 6,
                                    paddingBottom: getScaleFactor() * 8,
                                    borderRadius: getScaleFactor() * 8,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 4,
                                }}
                            >
                                <TextScaled
                                    size="xs"
                                    className="flex-1 font-semibold text-black"
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {item.name}
                                </TextScaled>
                                <Image source={icons.threeDotsIcon} style={{ width: getScaleFactor() * 16, height: getScaleFactor() * 16 }} />
                            </View>
                        </View>
                    ))}
                </View>

                {/* Right column */}
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: getScaleFactor() * 16,
                        width: "50%",
                        paddingLeft: getScaleFactor() * 4,
                    }}
                >
                    {featuredRecipesData.slice(4, 8).map((item, index) => (
                        <View
                            key={item.id}
                            style={{
                                width: "100%",
                                height: getScaleFactor() * (index === 0 ? 144 : index === 1 ? 224 : index === 2 ? 256 : 240),
                                backgroundColor: 'white',
                                borderRadius: getScaleFactor() * 8,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: getScaleFactor() * 3 },
                                shadowOpacity: 0.1,
                                shadowRadius: getScaleFactor() * 12,
                                elevation: 3,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: getScaleFactor() * 4,
                            }}
                        >
                            <Image
                                style={{
                                    width: "100%",
                                    flex: 1,
                                    borderTopLeftRadius: getScaleFactor() * 8,
                                    borderTopRightRadius: getScaleFactor() * 8,
                                }}
                                source={item.image}
                                resizeMode="cover"
                            />
                            <View
                                style={{
                                    width: "100%",
                                    paddingHorizontal: getScaleFactor() * 8,
                                    paddingBottom: getScaleFactor() * 8,
                                    paddingRight: getScaleFactor() * 6,
                                    borderRadius: getScaleFactor() * 8,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: getScaleFactor() * 4,
                                }}
                            >
                                <TextScaled
                                    size="xs"
                                    className="flex-1 font-semibold text-black"
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {item.name}
                                </TextScaled>
                                <Image source={icons.threeDotsIcon} style={{ width: getScaleFactor() * 16, height: getScaleFactor() * 16 }} />
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default FoodGrid;
