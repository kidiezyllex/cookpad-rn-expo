import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterSuccessScreen = () => {
    const onLoginPress = useCallback(() => {
        router.replace('/(auth)/sign-in');
    }, []);

    return (
        <SafeAreaView className='flex-1 bg-backgroundV1'>
            <ScrollView className='flex-1 bg-backgroundV1'>
                {/* Main Content */}
                <View
                    style={{
                        marginTop: getScaleFactor() * 125,
                        gap: getScaleFactor() * 55,
                        paddingHorizontal: getScaleFactor() * 16,
                    }}
                    className="flex flex-col justify-center items-center"
                >
                    <Image
                        style={{
                            width: getScaleFactor() * 200,
                            height: getScaleFactor() * 200,
                        }}
                        source={images.registerSuccess}
                        resizeMode="contain"
                    />
                    <View
                        style={{
                            gap: getScaleFactor() * 8,
                        }}
                        className="flex flex-col justify-start items-center"
                    >
                        <TextScaled
                            size="xl"
                            className="font-medium leading-loose text-center text-black"
                        >
                            Đăng ký thành công!
                        </TextScaled>
                        <TextScaled
                            size="base"
                            className="px-4 leading-normal text-center text-textNeutralV1"
                        >
                            Bạn đã đăng ký thành công, vui lòng đăng nhập với tài khoản mới của bạn.
                        </TextScaled>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RegisterSuccessScreen;
