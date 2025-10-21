import CustomButton from '@/components/Common/CustomButton';
import { onboarding } from '@/constants';
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
        <SafeAreaView className='flex justify-between items-center p-4 h-full bg-white'>
            <SwiperFlatList 
                ref={swiperRef}
                autoplay={false}
                autoplayDelay={2}
                index={activeIndex}
                showPagination={true}
                paginationStyle={{
                    position: 'absolute',
                    bottom: 150,
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
                    <View key={item.id} className='flex justify-center items-center p-5' style={{ width: screenWidth }}>
                        <Image source={item.image}
                            style={{ 
                                width: 200, 
                                height: 200,
                                maxHeight: 200
                            }}
                            resizeMode='contain' />
                        <View className='flex flex-row justify-center items-center mt-10 w-full'>
                            <Text className='mx-10 text-3xl font-bold text-center text-black'>{item.title}</Text>
                        </View>
                        <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                            {item.description}
                        </Text>
                    </View>
                )}
            />
            <View className='px-4 my-10 w-full'>  
                <CustomButton
                title={isLastSlide ? "Bắt Đầu Thôi" : "Tiếp tục"}
                onPress={() =>
                    isLastSlide
                        ? router.replace("/(auth)/sign-up")
                        : swiperRef.current?.scrollToIndex({ index: activeIndex + 1 })
                }
                className='w-full' /></View>
        </SafeAreaView>
    );
};

export default OnboardingScreen;
