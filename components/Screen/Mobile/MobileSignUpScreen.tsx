import BackHeader from '@/components/Common/BackHeader';
import CustomButton from '@/components/Common/CustomButton';
import { images } from '@/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Input from '@/components/Common/Input';

const MobileSignUpScreen = () => {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const onSignUpPress = useCallback(async () => {
    // Validate form
    if (!form.email || !form.phone || !form.password || !form.confirmPassword) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }

    // Navigate to OTP screen
    router.push('/auth/otp');
  }, [form.email, form.phone, form.password, form.confirmPassword, router]);

  const onBackPress = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className='flex flex-col min-h-screen bg-backgroundV1'>
      <div className='flex flex-col min-h-screen bg-backgroundV1'>
        <BackHeader
          headerTitle="Đăng ký"
          onPress={onBackPress}
        />

        {/* Main Content */}
        <div className="px-4 py-8 gap-8 flex flex-col justify-start items-center">
          {/* Logo */}
          <Image
            src={images.logo}
            alt="Logo"
            width={100}
            height={100}
            quality={100}
            draggable={false}
            className="object-contain h-20 w-auto"
          />

          {/* Form */}
          <div className="gap-4 flex flex-col justify-start items-end w-full">
            {/* Email/Phone Input */}
            <div className="gap-1 flex flex-col justify-start items-start w-full">
              <span className="justify-start font-bold text-base text-Neutral-900">
                Tài khoản
              </span>
              <Input
                placeholder="Email hoặc số điện thoại"
                value={form.email}
                onChangeText={(value) => setForm({ ...form, email: value })}
              />
            </div>

            {/* Phone Number Input */}
            <div className="gap-1 flex flex-col justify-start items-start w-full">
              <span className="justify-start font-bold text-base text-Neutral-900">
                Số điện thoại
              </span>
              <Input
                placeholder="Nhập số điện thoại"
                value={form.phone}
                onChangeText={(value) => setForm({ ...form, phone: value })}
                inputMode="numeric"
              />
            </div>

            {/* Password Input */}
            <div className="gap-1 flex flex-col justify-start items-start w-full">
              <div className="flex flex-col gap-1 justify-start items-center">
                <span className="justify-start font-bold text-base">
                  Mật khẩu
                </span>
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full p-2 pr-10 h-10 bg-white rounded-lg text-base placeholder-gray-400"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 w-6 h-6 flex justify-center items-center"
                >
                  <span className={`${showPassword ? 'text-gray-600' : 'text-gray-400'}`}>
                    {showPassword ? '🙈' : '👁️'}
                  </span>
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="flex flex-col gap-1 justify-start items-start w-full">
              <div className="flex flex-col gap-1 justify-start items-center">
                <span className="justify-start font-bold text-base">
                  Nhập lại mật khẩu
                </span>
              </div>
              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Nhập lại mật khẩu"
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  className="w-full p-2 pr-10 h-10 bg-white rounded-lg text-base placeholder-gray-400"
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-2 w-6 h-6 flex justify-center items-center"
                >
                  <span className={`${showConfirmPassword ? 'text-gray-600' : 'text-gray-400'}`}>
                    {showConfirmPassword ? '🙈' : '👁️'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <CustomButton
            title="Xác nhận"
            onPress={onSignUpPress}
          />

          {/* Sign In Link */}
          <div className="flex flex-row justify-start items-start gap-1">
            <span className="justify-start text-black text-sm">
              Đã có tài khoản?
            </span>
            <Link href="/auth/sign-in">
              <span className="justify-start font-semibold text-black text-sm">
                Đăng nhập
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSignUpScreen;
