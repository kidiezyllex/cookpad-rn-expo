import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { SafeAreaView } from 'react-native-safe-area-context';

const OTPInputScreen = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onVerifyPress = useCallback(async () => {
    if (otp.length !== 4) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ 4 số OTP");
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/(auth)/register-success');
    }, 2000);
  }, [otp]);

  const onBackPress = useCallback(() => {
    router.back();
  }, []);

  return (
    <SafeAreaView className='flex-1 bg-backgroundV1'>
      <ScrollView className='flex-1 bg-backgroundV1'>
        {/* Header */}
        <View
          style={{
            height: getScaleFactor() * 44,
            minHeight: getScaleFactor() * 44,
          }}
          className="relative flex-row justify-center items-center w-full">
          <TouchableOpacity
            onPress={onBackPress}
            style={{
              position: 'absolute',
              left: getScaleFactor() * 16,
              width: getScaleFactor() * 24,
              height: getScaleFactor() * 24,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Ionicons
              name="chevron-back"
              size={getScaleFactor() * 24}
              color="#000000"
            />
          </TouchableOpacity>
          <TextScaled
            size="base"
            className="justify-start font-bold text-center"
          >
            Nhập OTP
          </TextScaled>
        </View> 

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
              width: getScaleFactor() * 320,
            }}
          >
            {/* Instruction Text */}
            <View
              style={{
                width: getScaleFactor() * 320,
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
                   containerStyle: {
                     gap: getScaleFactor() * 22,
                   },
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
            onPress={onVerifyPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPInputScreen;
