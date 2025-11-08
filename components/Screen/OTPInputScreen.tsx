'use client';

import BackHeader from '@/components/Common/BackHeader';
import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { useForgotPasswordStore } from '@/store/forgotPasswordStore';
import { useSuccessStore } from '@/store/successStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

const OTPInputScreen = () => {
  const [otp, setOtp] = useState('');
  const setSuccess = useSuccessStore((state) => state.setSuccess);
  const isForgotPassword = useForgotPasswordStore((state) => state.isForgotPassword);
  const router = useRouter();

  const handlePress = useCallback(() => {
    if (otp.length !== 4) {
      window.alert('Vui lòng nhập đầy đủ 4 số OTP');
      return;
    }
    if (isForgotPassword) {
      router.replace('/(auth)/change-password');
      return;
    }
    setSuccess(
      'Đăng ký thành công!',
      'Bạn đã đăng ký thành công, vui lòng đăng nhập với tài khoản mới của bạn.',
      '/(auth)/sign-in'
    );
    router.replace('/(auth)/register-success');
  }, [otp, isForgotPassword, setSuccess, router]);

  const onBackPress = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className='flex-1 bg-backgroundV1 min-h-dvh'>
      <BackHeader 
        headerTitle="Nhập OTP" 
        onPress={onBackPress} 
      /> 

      {/* Main Content */}
      <div
        className="flex flex-col items-center justify-center px-4 pt-8 pb-8 gap-8"
      >
        {/* Logo */}
        <Image
          className="w-20 h-20"
          src={images.logo}
          alt="logo"
        />

        {/* OTP Input Section */}
        <div className="w-full">
          {/* Instruction Text */}
          <div
            className="flex flex-col items-center justify-center gap-2 w-full"
          >
            <TextScaled size="base" className="text-center text-textNeutralV1">
              Nhập mã OTP vừa được gửi tới số điện thoại 0123456789
            </TextScaled>
          </div>

          {/* OTP Input - single input */}
          <div className="mt-8 flex w-full justify-center">
            <input
              inputMode="numeric"
              maxLength={4}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              className="h-16 w-40 rounded-md border-b-2 border-zinc-800 bg-transparent text-center text-4xl font-bold text-black outline-none"
              placeholder="••••"
            />
          </div>

          {/* Resend OTP Link */}
          <div
            className="flex flex-row justify-center gap-1 mt-8"
          >   
            <TextScaled size="sm" className="text-black">
              Bạn không nhận được mã?
            </TextScaled>
            <button
              type="button"
              onClick={() => window.alert('Mã OTP mới đã được gửi')}
            >
              <TextScaled size="sm" className="font-semibold text-black">
                Gửi lại mã xác thực
              </TextScaled>
            </button>
          </div>
        </div>

        {/* Verify Button */}
        <CustomButton
          title="Xác nhận"
          onPress={handlePress}
        />
      </div>
    </div>
  );
};

export default OTPInputScreen;
