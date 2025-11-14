import BackHeader from '@/components/Common/BackHeader';
import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useForgotPasswordStore } from '@/store/forgotPasswordStore';
import { useSuccessStore } from '@/store/successStore';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { SafeAreaView } from 'react-native-safe-area-context';

const OTPInputScreen = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const setSuccess = useSuccessStore((state) => state.setSuccess);
  const isForgotPassword = useForgotPasswordStore((state) => state.isForgotPassword);

  const handlePress = useCallback(async () => {
    if (otp.length !== 4) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ 4 số OTP");
      return;
    }
    if (isForgotPassword) {
      router.replace('/(auth)/change-password'); // điều hướng sang màn ChangePasswordScreen
      return;
    }
    // Đăng ký bình thường
    setIsLoading(true);
    setSuccess('Đăng ký thành công!', 'Bạn đã đăng ký thành công, vui lòng đăng nhập với tài khoản mới của bạn.', '/(auth)/sign-in');
    router.replace('/(auth)/register-success');
  }, [otp, isForgotPassword, setSuccess]);

  const onBackPress = useCallback(() => {
    router.back();
  }, []);

  return (
    <SafeAreaView className='flex-1 bg-backgroundV1'>
      <ScrollView className='flex-1 bg-backgroundV1'>
        <BackHeader 
          headerTitle="Nhập OTP" 
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

          {/* OTP Input Section */}
          <View
            style={{
              width: "100%",
            }}
          >
            {/* Instruction Text */}
            <View
              style={{
                width: "100%",
                gap: getScaleFactor() * 8,
              }}
              className="flex flex-col justify-center items-center"
            >
              <TextScaled
                size="base"
                className="text-center text-textNeutralV1"
              >
                Nhập mã OTP vừa được gửi tới số điện thoại 0123456789
              </TextScaled>
            </View>

            {/* OTP Input using react-native-otp-entry */}
            <View
              style={{
                marginTop: getScaleFactor() * 32,
                alignItems: 'center',
              }}
            >
              <OtpInput
                numberOfDigits={4}
                onTextChange={setOtp}
                onFilled={(text) => {
                  console.log('OTP filled:', text);
                }}
                autoFocus={true}
                focusColor="#27272A"
                focusStickBlinkingDuration={500}
                textInputProps={{
                  keyboardType: 'numeric',
                }}
                 theme={{
                   pinCodeContainerStyle: {
                     width: getScaleFactor() * 64,
                     height: getScaleFactor() * 70,
                     borderBottomWidth: getScaleFactor() * 2,
                     borderBottomColor: '#27272A',
                     borderRadius: 0,
                     borderTopWidth: 0,
                     borderLeftWidth: 0,
                     borderRightWidth: 0,
                   },
                   pinCodeTextStyle: {
                     fontSize: getScaleFactor() * 48,
                     fontWeight: 'bold',
                     color: '#000000',
                   },
                   focusStickStyle: {
                     width: getScaleFactor() * 2,
                     height: getScaleFactor() * 2,
                     backgroundColor: '#27272A',
                   },
                   focusedPinCodeContainerStyle: {
                     borderBottomColor: '#27272A',
                     borderRadius: 0,
                   },
                 }}
              />
            </View>

            {/* Resend OTP Link */}
            <View
              style={{
                gap: getScaleFactor() * 4,
                marginTop: getScaleFactor() * 32,
              }}
              className="flex flex-row justify-center"
            >   
              <TextScaled
                size="sm"
                className="text-black"
              >
                Bạn không nhận được mã?
              </TextScaled>
              <TouchableOpacity
                onPress={() => Alert.alert("Thông báo", "Mã OTP mới đã được gửi")}
              >
                <TextScaled
                  size="sm"
                  className="font-semibold text-black"
                >
                  Gửi lại mã xác thực
                </TextScaled>
              </TouchableOpacity>
            </View>
          </View>

          {/* Verify Button */}
          <CustomButton
            title="Xác nhận"
            onPress={handlePress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPInputScreen;
