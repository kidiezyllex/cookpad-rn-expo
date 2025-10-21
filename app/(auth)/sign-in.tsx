import CustomButton from '@/components/Common/CustomButton';
import InputField from '@/components/Common/InputField';
import OAuth from '@/components/Common/OAuth';
import { icons, images } from '@/constants';
import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignInPress = useCallback(async () => {
    Alert.alert("Thông báo", "Chức năng đăng nhập đang được phát triển");
  }, [form.email, form.password]);

  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex-1 bg-white'>
        <View className="relative w-full h-[300px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" resizeMode='contain' />
          <Text className='absolute bottom-5 left-5 text-2xl text black font-JakartaSemiBold'>Đăng Nhập 🚘</Text>
        </View>
        <View className='p-4'>
          <InputField
            label="Email"
            placeholder="Nhập email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })} />

          <InputField
            label="Mật khẩu"
            placeholder="Nhập mật khẩu"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })} />

          <CustomButton title='Đăng Nhập' onPress={onSignInPress} className='mt-6' />

          <OAuth />
          <Link
            href="/sign-up"
            className="mt-4 text-lg text-center text-general-200"
          >
            Chưa có tài khoản?{" "}
            <Text className="text-primary-500">Đăng kí ngay</Text>
          </Link>
        </View>

      </View>
    </ScrollView>
  );
};

export default SignIn;