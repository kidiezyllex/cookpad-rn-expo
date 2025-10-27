import BackHeader from '@/components/Common/BackHeader';
import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, Image, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChangePasswordScreen = () => {
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSignUpPress = useCallback(async () => {
    if (form.password !== form.confirmPassword) {
      Alert.alert("Lỗi", "Mật khẩu xác nhận không khớp");
      return;
    }
    router.push('/(auth)/otp');
  }, [form.password, form.confirmPassword]);

  const onBackPress = useCallback(() => {
    router.back();
  }, []);

  return (
    <SafeAreaView className='flex-1 bg-backgroundV1'>
      <ScrollView className='flex-1 bg-backgroundV1'>
        <BackHeader 
          headerTitle="Đổi mật khẩu" 
          onPress={onBackPress} 
        />

        {/* Main Content */}
        <View
          style={{
            paddingHorizontal: getScaleFactor() * 16,
            paddingVertical: getScaleFactor() * 32,
            gap: getScaleFactor() * 32,
          }}
          className="flex flex-col justify-start items-center"
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

          {/* Form */}
          <View
            style={{
              gap: getScaleFactor() * 16,
            }}
            className="flex flex-col justify-start items-end w-full"
          >
            {/* Password Input */}
            <View
              style={{
                gap: getScaleFactor() * 4,
              }}
              className="flex flex-col justify-start items-start w-full"
            >
              <View
                style={{
                  gap: getScaleFactor() * 4,
                }}
                className="justify-start items-center"
              >
                <TextScaled
                  size="base"
                  className="justify-start font-bold"
                >
                  Mật khẩu mới
                </TextScaled>
              </View>
              <View style={{ position: 'relative', width: '100%' }}>
                <TextInput
                  placeholder="Mật khẩu"
                  secureTextEntry={!showPassword}
                  value={form.password}
                  onChangeText={(value) => setForm({ ...form, password: value })}
                  style={{
                    width: '100%',
                    padding: getScaleFactor() * 8,
                    paddingRight: getScaleFactor() * 40, // Make space for the icon
                    height: getScaleFactor() * 40,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    fontSize: getScaleFactor() * 16,
                  }}
                  placeholderTextColor="#AAAAAA"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
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
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={getScaleFactor() * 24}
                    color={showPassword ? '#666666' : '#AAAAAA'}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password Input */}
            <View
              style={{
                gap: getScaleFactor() * 4,
              }}
              className="flex flex-col justify-start items-start w-full"
            >
              <View
                style={{
                  gap: getScaleFactor() * 4,
                }}
                className="justify-start items-center"
              >
                <TextScaled
                  size="base"
                  className="justify-start font-bold"
                >
                  Nhập lại mật khẩu mới
                </TextScaled>
              </View>
              <View style={{ position: 'relative', width: '100%' }}>
                <TextInput
                  placeholder="Nhập lại mật khẩu"
                  secureTextEntry={!showConfirmPassword}
                  value={form.confirmPassword}
                  onChangeText={(value) => setForm({ ...form, confirmPassword: value })}
                  style={{
                    width: '100%',
                    padding: getScaleFactor() * 8,
                    paddingRight: getScaleFactor() * 40,
                    height: getScaleFactor() * 40,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    fontSize: getScaleFactor() * 16,
                  }}
                  placeholderTextColor="#AAAAAA"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
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
                    name={showConfirmPassword ? 'eye-off' : 'eye'}
                    size={getScaleFactor() * 24}
                    color={showConfirmPassword ? '#666666' : '#AAAAAA'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Confirm Button */}
          <CustomButton
            title="Xác nhận"
            onPress={onSignUpPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
