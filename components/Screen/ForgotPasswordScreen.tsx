import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useForgotPasswordStore } from '@/store/forgotPasswordStore';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackHeader from '../Common/BackHeader';
import Input from '../Common/Input';

const ForgotPasswordScreen = () => {
    const [form, setForm] = useState({
        phone: '',
    });

    const setIsForgotPassword = useForgotPasswordStore((state) => state.setIsForgotPassword);

    const onSendOTPPress = useCallback(async () => {
        if (!form.phone.trim()) {
            Alert.alert("Lỗi", "Vui lòng nhập số điện thoại");
            return;
        }

        setIsForgotPassword(true);
        router.push('/(auth)/otp');
    }, [form.phone, setIsForgotPassword]);

    const onBackPress = useCallback(() => {
        router.back();
    }, []);

    return (
        <SafeAreaView className='flex-1 bg-backgroundV1'>
            <ScrollView className='flex-1 bg-backgroundV1'>
                <BackHeader
                    headerTitle="Quên mật khẩu"
                    onPress={onBackPress}
                />

                {/* Main Content */}
                <View
                    style={{
                        paddingHorizontal: getScaleFactor() * 16,
                        paddingVertical: getScaleFactor() * 32,
                        gap: getScaleFactor() * 32,
                    }}
                    className="flex flex-col justify-center items-center"
                >
                    {/* Logo */}
                    <Image
                        style={{
                            width: getScaleFactor() * 80,
                            height: getScaleFactor() * 80,
                        }}
                        source={images.logo}
                        resizeMode="contain"
                    />
                    {/* Instruction Text */}
                    <View
                        className="flex flex-col justify-center items-center"
                    >
                        <TextScaled
                            size="base"
                            className="text-center text-textNeutralV1"
                            style={{
                                paddingHorizontal: getScaleFactor() * 16,
                            }}
                        >
                            Mã OTP lấy lại mật khẩu sẽ được gửi tới số điện thoại của bạn. Vui lòng nhập đúng số điện thoại bạn đã dùng để đăng ký.
                        </TextScaled>
                    </View>

                    {/* Phone Number Input */}
                    <View
                        style={{
                            gap: getScaleFactor() * 4,
                        }}
                        className="flex flex-col justify-start items-start w-full"
                    >
                        <TextScaled
                            size="base"
                            className="justify-start font-bold text-Neutral-900"
                        >
                            Số điện thoại
                        </TextScaled>
                        <View style={{ position: 'relative', width: '100%' }}>
                            <Input
                                placeholder="Nhập số điện thoại"
                                value={form.phone}
                                onChangeText={(value) => setForm({ ...form, phone: value })}
                            />
                            {form.phone.length > 0 && (
                                <TouchableOpacity
                                    onPress={() => setForm({ ...form, phone: '' })}
                                    style={{
                                        position: 'absolute',
                                        right: getScaleFactor() * 8,
                                        top: getScaleFactor() * 8,
                                        width: getScaleFactor() * 24,
                                        height: getScaleFactor() * 24,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Ionicons
                                        name="close-circle"
                                        size={getScaleFactor() * 24}
                                        color="#D9D9DB"
                                    />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    {/* Send OTP Button */}
                    <CustomButton
                        title="Gửi mã OTP"
                        onPress={onSendOTPPress}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;
