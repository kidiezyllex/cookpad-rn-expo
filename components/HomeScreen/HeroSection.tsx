import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, Pressable, View } from 'react-native';

interface HeroSectionProps {
    activeTab: 'ban-bep' | 'cam-hung';
    onTabChange: (tab: 'ban-bep' | 'cam-hung') => void;
}

const HeroSection = ({ activeTab, onTabChange }: HeroSectionProps) => {
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
                    left: 0,
                    bottom: 0,
                }}
                source={images.homeHero}
                resizeMode="contain"
            />
            
            <View
                style={{
                    position: 'absolute',
                    right: getScaleFactor() * 19,
                    top: getScaleFactor() * 50,
                    width: getScaleFactor() * 186,
                    height: getScaleFactor() * 98,
                }}
                 className='justify-center items-center'
            >
                <Image
                source={images.messageBubble}
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
                    size="sm"
                    style={{
                        maxWidth: getScaleFactor() * 141,
                    }}
                    className="font-medium text-customSecondary"
                >
                    Chào ngày mới, <TextScaled size="base" className="font-bold text-blue-900">Hòa</TextScaled>
                </TextScaled>
                <TextScaled
                    style={{
                        maxWidth: getScaleFactor() * 141,
                    }}
                    size="xs"
                    className="font-light text-customSecondary"
                >
                    Cùng vào xem các công thức mới của Bạn Bếp nào!
                </TextScaled>
            </View>

            {/* Tab Navigator section */}
            <View className='flex-row items-center'>
                <Pressable
                    style={{
                        minHeight: getScaleFactor() * 38,
                        height: getScaleFactor() * 38,
                    }}
                    className={`border-b-2 ${activeTab === 'ban-bep' ? 'border-b-white' : 'border-b-transparent'} w-[50%] justify-center items-center`}
                    onPress={() => onTabChange('ban-bep')}
                >
                    <TextScaled
                        size="base"
                        className={`font-medium ${activeTab === 'ban-bep' ? 'text-white' : 'text-white/50'}`}
                    >
                        Bạn Bếp
                    </TextScaled>
                </Pressable>
                <Pressable
                    style={{
                        minHeight: getScaleFactor() * 38,
                        height: getScaleFactor() * 38,
                    }}
                    className={`border-b-2 ${activeTab === 'cam-hung' ? 'border-b-white' : 'border-b-transparent'} w-[50%] justify-center items-center`}
                    onPress={() => onTabChange('cam-hung')}
                >
                    <TextScaled
                        size="base"
                        className={`font-medium ${activeTab === 'cam-hung' ? 'text-white' : 'text-white/50'}`}
                    >
                        Cảm hứng
                    </TextScaled>
                </Pressable>
            </View>
        </View>
    );
};

export default HeroSection;
