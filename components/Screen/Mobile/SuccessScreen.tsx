import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useSuccessStore } from '@/store/successStore';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SuccessScreen = () => {
    const { successTitle, successDesc, resetSuccess, successRedirect } = useSuccessStore();
    const hasRedirectedRef = useRef(false);
    const timerRef = useRef<number | null>(null);

    const handleRedirect = () => {
        if (!hasRedirectedRef.current) {
            hasRedirectedRef.current = true;
            resetSuccess();
            router.replace(successRedirect as any);
        }
    };

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            handleRedirect();
        }, 4000);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [successRedirect]);

    return (
        <Pressable style={{ flex: 1 }} onPress={handleRedirect}>
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
                                width: 200,
                                height: 200,
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
                                {successTitle || 'Đăng ký thành công!'}
                            </TextScaled>
                            <TextScaled
                                style={{
                                    paddingHorizontal: getScaleFactor() * 16,
                                }}
                                size="base"
                                className="leading-normal text-center text-textNeutralV1"
                            >
                                {successDesc || 'Bạn đã đăng ký thành công, vui lòng đăng nhập với tài khoản mới của bạn.'}
                            </TextScaled>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Pressable>
    );
};

export default SuccessScreen;
