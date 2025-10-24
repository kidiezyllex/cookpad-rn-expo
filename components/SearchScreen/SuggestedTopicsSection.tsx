import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, View } from 'react-native';
import TextScaled from '../Common/TextScaled';

const popularTopicsData = [
    { id: '1', name: 'Salad giảm cân' },
    { id: '2', name: 'Món làm từ trứng' },
    { id: '3', name: 'Đùi gà' },
    { id: '4', name: 'Nước ép từ xoài' },
    { id: '5', name: 'Món từ bí ngô' },
    { id: '6', name: 'Món từ thịt bò' },
    { id: '7', name: 'Món từ bí ngô' },
    { id: '8', name: 'Món từ thịt bò' },
    { id: '9', name: 'Món từ thịt bò' },
    { id: '10', name: 'Món từ thịt bò' },
];

const SuggestedTopicsSection = () => {
    return (
        <View
            style={{
                width: "100%",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginBottom: getScaleFactor() * 48,
                paddingHorizontal: getScaleFactor() * 16,
            }}
        >
            <TextScaled
                style={{
                    marginBottom: getScaleFactor() * 8,
                }}
                size="base"
                className="font-bold text-black"
            >
                Chủ đề được đề xuất với bạn
            </TextScaled>

            <View
                style={{
                    width: "100%",
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: getScaleFactor() * 4,
                }}
            >
                {popularTopicsData.map((item) => (
                    <View
                        key={item.id}
                        style={{
                            width: '49%',
                            height: getScaleFactor() * 80,
                            borderRadius: getScaleFactor() * 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            source={images.sampleFood1}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: getScaleFactor() * 8,
                            }}
                            resizeMode="cover"
                        />
                        {/* Layer background */}
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                borderRadius: getScaleFactor() * 8,
                            }}
                        />
                        <TextScaled
                            size="base"
                            className="font-bold text-center text-white"
                        >
                            {item.name}
                        </TextScaled>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default SuggestedTopicsSection;
