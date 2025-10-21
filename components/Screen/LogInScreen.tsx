import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, Image, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LogInScreen = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSignInPress = useCallback(async () => {
    Alert.alert("Thông báo", "Chức năng đăng nhập đang được phát triển");
  }, [form.email, form.password]);

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
          <TextScaled
            size="base"
            className="justify-start font-bold text-center"
          >
            Đăng nhập
          </TextScaled>
        </View>

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
            {/* Email/Phone Input */}
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
                Tài khoản
              </TextScaled>
              <TextInput
                placeholder="Email hoặc số điện thoại"
                value={form.email}
                onChangeText={(value) => setForm({ ...form, email: value })}
                style={{
                  width: '100%',
                  padding: getScaleFactor() * 8,
                  height: getScaleFactor() * 40,
                  backgroundColor: 'white',
                  borderRadius: 8,
                  fontSize: getScaleFactor() * 16,
                }}
                placeholderTextColor="#AAAAAA"
              />
            </View>

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
                  Mật khẩu
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

            {/* Forgot Password */}
            <TouchableOpacity
              onPress={() => router.push('/forgot-password')}
            >
              <TextScaled
                size="sm"
                className="justify-start font-semibold text-black"
              >
                Quên mật khẩu?
              </TextScaled>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <CustomButton
            title="Xác nhận"
            onPress={onSignInPress}
          />

          {/* Sign Up Link */}
          <View
            style={{
              gap: getScaleFactor() * 4,
            }}
            className="flex-row justify-start items-start"
          >
            <TextScaled
              size="sm"
              className="justify-start text-black"
            >
              Bạn chưa có tài khoản?
            </TextScaled>
            <Link href="/(auth)/sign-up">
              <TextScaled
                size="sm"
                className="justify-start font-semibold text-black"
              >
                Đăng ký
              </TextScaled>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
