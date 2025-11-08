'use client';

import BackHeader from '@/components/Common/BackHeader';
import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Input from '../Common/Input';

const SignUpScreen = () => {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const onSignUpPress = useCallback(() => {
    if (!form.email || !form.phone || !form.password || !form.confirmPassword) {
      window.alert('Vui lòng điền đầy đủ thông tin');
      return;
    }
    if (form.password !== form.confirmPassword) {
      window.alert('Mật khẩu xác nhận không khớp');
      return;
    }
    router.push('/(auth)/otp');
  }, [form.email, form.phone, form.password, form.confirmPassword, router]);

  const onBackPress = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="flex-1 bg-backgroundV1 min-h-dvh">
      <div className="flex-1 bg-backgroundV1">
        <BackHeader headerTitle="Đăng ký" onPress={onBackPress} />

        {/* Main Content */}
        <div
          className="flex flex-col items-center px-4 pt-8 pb-8 gap-8"
        >
          {/* Logo */}
          <Image
            className="w-20 h-20"
            src={images.logo}
            alt="logo"
          />

          {/* Form */}
          <div
            className="flex w-full flex-col items-end gap-4"
          >
            {/* Email/Phone Input */}
            <div
              className="flex w-full flex-col items-start gap-1"
            >
              <TextScaled size="base" className="font-bold text-Neutral-900">
                Tài khoản
              </TextScaled>
              <Input
                placeholder="Email hoặc số điện thoại"
                value={form.email}
                onChangeText={(value) => setForm({ ...form, email: value })}
              />
            </div>

            {/* Phone Number Input */}
            <div
              className="flex w-full flex-col items-start gap-1"
            >
              <TextScaled size="base" className="font-bold text-Neutral-900">
                Số điện thoại
              </TextScaled>
              <Input
                placeholder="Nhập số điện thoại"
                value={form.phone}
                onChangeText={(value) => setForm({ ...form, phone: value })}
                inputMode="tel"
              />
            </div>

            {/* Password Input */}
            <div
              className="flex w-full flex-col items-start gap-1"
            >
              <div
                className="items-center gap-1"
              >
                <TextScaled size="base" className="font-bold">
                  Mật khẩu
                </TextScaled>
              </div>
              <div className="relative w-full">
                <Input
                  placeholder="Mật khẩu"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChangeText={(value) => setForm({ ...form, password: value })}
                  className="pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-2 text-xs text-gray-500 right-2 top-2 h-6 absolute"
                >
                  {showPassword ? 'Ẩn' : 'Hiện'}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div
              className="flex w-full flex-col items-start gap-1"
            >
              <div
                className="items-center gap-1"
              >
                <TextScaled size="base" className="font-bold">
                  Nhập lại mật khẩu
                </TextScaled>
              </div>
              <div className="relative w-full">
                <Input
                  placeholder="Nhập lại mật khẩu"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChangeText={(value) => setForm({ ...form, confirmPassword: value })}
                  className="pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="px-2 text-xs text-gray-500 right-2 top-2 h-6 absolute"
                >
                  {showConfirmPassword ? 'Ẩn' : 'Hiện'}
                </button>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <CustomButton title="Xác nhận" onPress={onSignUpPress} />

          {/* Sign In Link */}
          <div
            className="flex flex-row items-start justify-start gap-1"
          >
            <TextScaled size="sm" className="text-black">
              Đã có tài khoản?
            </TextScaled>
            <Link href="/(auth)/sign-in">
              <TextScaled size="sm" className="font-semibold text-black">
                Đăng nhập
              </TextScaled>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
