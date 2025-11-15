import CustomButton from '@/components/Common/CustomButton';
import { images } from '@/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Input from '@/components/Common/Input';
import { Eye, EyeSlash } from 'iconsax-reactjs';

const MobileLogInScreen = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSignInPress = useCallback(async () => {
    if (form.email === "H" && form.password === "1") {
      router.replace('/');
    } else {
      router.replace("/favorite-topic");
    }
  }, [form.email, form.password, router]);

  return (
    <div className='flex flex-col min-h-screen bg-backgroundV1'>
      {/* Header */}
      <div className="h-11 min-h-11 relative flex flex-row justify-center items-center w-full font-bold text-center text-base">
        Đăng nhập
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6 gap-8 flex flex-col justify-start items-center">
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

          {/* Password Input */}
          <div className="gap-1 flex flex-col justify-start items-start w-full">
            <span className="justify-start font-bold text-base">
              Mật khẩu
            </span>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full p-2 pr-10 h-10 bg-white rounded-lg text-base placeholder-gray-400 border-2 border-transparent focus:outline-none focus:border-customPrimary"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 w-6 h-6 flex justify-center items-center"
              >
                {showPassword ? (
                  <Eye
                    size="20"
                    color="#5B5B5C"
                  />
                ) : (
                  <EyeSlash
                    size="20"
                    color="#5B5B5C"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <Link
            href="/auth/forgot-password"
            className="text-left justify-start font-semibold text-black text-sm"
          >
            Quên mật khẩu?
          </Link>
        </div>

        {/* Login Button */}
        <CustomButton
          title="Xác nhận"
          onPress={onSignInPress}
        />

        {/* Sign Up Link */}
        <div className="flex gap-1 flex-row justify-start items-start">
          <span className="justify-start text-black text-sm">
            Bạn chưa có tài khoản?
          </span>
          <Link href="/auth/sign-up" className='font-semibold text-black text-sm'>
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileLogInScreen;
