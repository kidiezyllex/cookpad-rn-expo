import TextScaled from '@/components/Common/TextScaled';
import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, View } from 'react-native';

interface RecipeCardProps {
    id: string;
    name: string;
    image: any;
    time: string;
    likes: number;
    showOverlay?: boolean;
}

const RecipeCard = ({ 
    id, 
    name, 
    image, 
    time, 
    likes, 
    showOverlay = true 
}: RecipeCardProps) => {
    return (
        <View
            style={{
                width: getScaleFactor() * 120,
                backgroundColor: 'white',
                borderRadius: getScaleFactor() * 8,
                flexDirection: 'column',
                alignItems: 'flex-start',
                borderWidth: 1,
                borderColor: '#E5E7EB',
            }}
        >
            <View
                style={{
                    width: '100%',
                    height: getScaleFactor() * 110,
                    position: 'relative',
                    borderTopLeftRadius: getScaleFactor() * 8,
                    borderTopRightRadius: getScaleFactor() * 8,
                    overflow: 'hidden',
                }}
            >
                <Image
                    style={{
                        width: '100%',
                        height: getScaleFactor() * 110,
                        position: 'absolute',
                    }}
                    source={image}
                    resizeMode="cover"
                />
                {showOverlay && (
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: getScaleFactor() * 24,
                            paddingHorizontal: getScaleFactor() * 4,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: getScaleFactor() * 2,
                            }}
                        >
                            <Image source={icons.clockIcon} style={{ width: getScaleFactor() * 10, height: getScaleFactor() * 10 }} resizeMode="contain" />
                            <TextScaled
                                size="xs"
                                className="text-white"
                            >
                                {time}
                            </TextScaled>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: getScaleFactor() * 2,
                            }}
                        >
                            <Image source={icons.save2Icon} style={{ width: getScaleFactor() * 10, height: getScaleFactor() * 10 }} resizeMode="contain" />
                            <TextScaled
                                size="xs"
                                className="text-white"
                            >
                                {likes}
                            </TextScaled>
                        </View>
                    </View>
                )}
            </View>
            <View
                style={{
                    width: '100%',
                    paddingHorizontal: getScaleFactor() * 8,
                    paddingVertical: getScaleFactor() * 6,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: getScaleFactor() * 4,
                }}
            >
                <TextScaled
                    size="xs"
                    className="flex-1 font-semibold text-black"
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {name}
                </TextScaled>
                <Image source={icons.threeDotsIcon} style={{ width: getScaleFactor() * 16, height: getScaleFactor() * 16 }} />
            </View>
        </View>
    );
};

export default RecipeCard;
