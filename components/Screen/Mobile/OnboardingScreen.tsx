import CustomButton from '@/components/Common/CustomButton';
import { onboarding } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwiperFlatList from 'react-native-swiper-flatlist';

const { width: screenWidth } = Dimensions.get('window');

const OnboardingScreen = () => {
    const swiperRef = useRef<SwiperFlatList>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === onboarding.length - 1;

    return (
        <SafeAreaView
            style={{
                paddingHorizontal: getScaleFactor() * 16,
            }}
            className='flex justify-between items-center h-full bg-backgroundV1'>
            <SwiperFlatList
                ref={swiperRef}
                autoplay={false}
                autoplayDelay={2}
                index={activeIndex}
                showPagination={true}
                paginationStyle={{
                    position: 'absolute',
                    bottom: 250,
                    left: 0,
                    right: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                paginationStyleItem={{
                    width: 12,
                    height: 12,
                    marginHorizontal: 4,
                    borderRadius: 6,
                }}
                paginationStyleItemActive={{
                    backgroundColor: '#E36137',
                }}
                paginationStyleItemInactive={{
                    backgroundColor: '#EDE4D2',
                }}
                onChangeIndex={({ index }) => setActiveIndex(index)}
                data={onboarding}
                renderItem={({ item, index }) => (
                    <View key={item.id} className='flex justify-center items-center' style={{ width: screenWidth - getScaleFactor() * 32, paddingHorizontal: getScaleFactor() * 16 }}>
                        <Image source={item.image}
                            style={{
                                width: screenWidth,
                                height: screenWidth * 0.6,
                            }}
                            resizeMode='contain'
                        />
                        <Text
                            style={{
                                marginTop: getScaleFactor() * 32,
                            }}
                            className='text-xl font-medium text-center text-black'>{item.title}</Text>
                        <Text
                            style={{
                                marginTop: getScaleFactor() * 8,
                                paddingHorizontal: getScaleFactor() * 16,
                            }}
                            className="text-lg text-center text-textNeutralV1">
                            {item.description}
                        </Text>
                    </View>
                )}
            />
            <View
                style={{
                    gap: getScaleFactor() * 8,
                    marginVertical: getScaleFactor() * 40
                }}
                className='flex-col justify-between items-center w-full'>
                <CustomButton
                    title={isLastSlide ? "Đăng nhập" : "Tiếp tục"}
                    onPress={() =>
                        isLastSlide
                            ? router.replace("/(auth)/sign-in")
                            : swiperRef.current?.scrollToIndex({ index: activeIndex + 1, animated: true })
                    }
                    className='w-full' />
                <CustomButton
                    bgVariant={isLastSlide ? "outline" : "transparent"}
                    textVariant={isLastSlide ? "outline" : "transparent"}
                    title={isLastSlide ? "Đăng ký" : "Bỏ qua"}
                    onPress={() =>
                        isLastSlide
                            ? router.replace("/(auth)/sign-up")
                            : router.replace("/(auth)/sign-in")
                    }
                    className='w-full' />
            </View>
        </SafeAreaView>
    );
};

export default OnboardingScreen;
