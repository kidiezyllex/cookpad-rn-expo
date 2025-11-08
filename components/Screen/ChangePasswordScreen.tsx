'use client';

import BackHeader from '@/components/Common/BackHeader';
import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { useSuccessStore } from '@/store/successStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

const ChangePasswordScreen = () => {
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const setSuccess = useSuccessStore((state) => state.setSuccess);
  const router = useRouter();

  const handlePress = useCallback(() => {
    if (form.password !== form.confirmPassword) {
      window.alert('Mật khẩu xác nhận không khớp');
      return;
    }
    setSuccess(
      'Đổi mật khẩu thành công!',
      'Bạn đã thay đổi mật khẩu thành công, vui lòng đăng nhập với mật khẩu mới của bạn.',
      '/(auth)/sign-in'
    );
    router.replace('/(auth)/register-success');
  }, [form.password, form.confirmPassword, setSuccess, router]);

  const onBackPress = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className='flex-1 bg-backgroundV1 min-h-dvh'>
      <BackHeader 
        headerTitle="Đổi mật khẩu" 
        onPress={onBackPress} 
      />

      {/* Main Content */}
      <div
        className="flex flex-col items-center justify-start px-4 pt-8 pb-8 gap-8"
      >
        {/* Logo */}
        <Image
          className="w-20 h-20"
          src={images.logo}
          alt="logo"
        />

        {/* Form */}
        <div
          className="flex w-full flex-col items-end justify-start gap-4"
        >
          {/* Password Input */}
          <div
            className="flex w-full flex-col items-start justify-start gap-1"
          >
            <div
              className="items-center justify-start gap-1"
            >
              <TextScaled size="base" className="font-bold">
                Mật khẩu mới
              </TextScaled>
            </div>
            <div className="relative w-full">
              <input
                placeholder="Mật khẩu"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="h-10 w-full rounded-md bg-white px-3 pr-12 text-gray-900 outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-customPrimary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-2 text-xs text-gray-500 absolute right-2 top-2 h-6"
              >
                {showPassword ? 'Ẩn' : 'Hiện'}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div
            className="flex w-full flex-col items-start justify-start gap-1"
          >
            <div
              className="items-center justify-start gap-1"
            >
              <TextScaled size="base" className="font-bold">
                Nhập lại mật khẩu mới
              </TextScaled>
            </div>
            <div className="relative w-full">
              <input
                placeholder="Nhập lại mật khẩu"
                type={showConfirmPassword ? 'text' : 'password'}
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                className="h-10 w-full rounded-md bg-white px-3 pr-12 text-gray-900 outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-customPrimary"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="px-2 text-xs text-gray-500 absolute right-2 top-2 h-6"
              >
                {showConfirmPassword ? 'Ẩn' : 'Hiện'}
              </button>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <CustomButton
          title="Xác nhận"
          onPress={handlePress}
        />
      </div>
    </div>
  );
};

export default ChangePasswordScreen;
