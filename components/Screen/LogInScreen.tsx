'use client';

import { images } from '@/constants';
import { CloseCircle, Eye, EyeSlash } from 'iconsax-reactjs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { StaticImageData } from 'next/image';

const LogInScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSignInPress = useCallback(() => {
    if (email === 'H' && password === '1') {
      router.replace('/');
    } else {
      router.replace('/auth/favorite-topic');
    }
  }, [email, password, router]);

  const backgroundImageUrl = typeof images.personalChestBg === 'string'
    ? images.personalChestBg
    : (images.personalChestBg as StaticImageData)?.src || images.personalChestBg;

  return (
    <div
      className="h-screen flex items-center justify-center w-full"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto 200vh',
        backgroundPosition: '0 0',
      }}
    >
      <div className="mx-auto w-[400px] max-w-[400px] p-4 min-h-[90vh] shadow-md rounded-lg bg-white/90 overflow-hidden backdrop-blur-sm">
        {/* Header */}
        <div
          className="relative flex w-full items-center justify-center h-10"
        >
          <p
            className="justify-start text-center font-bold text-black text-base"
          >
            Đăng nhập
          </p>
        </div>

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image alt="CookPad" src={images.logo} width={80} height={80} />
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-900">Tài khoản</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Email hoặc số điện thoại"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-gray-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 hover:bg-gray-50"
                aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              >
                {email.length > 0 && <CloseCircle
                  onClick={() => setEmail('')}
                  size="20"
                  color="#D9D9DB"
                  variant="Bold"
                />
                }
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-900">Mật khẩu</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 pr-10 text-sm outline-none ring-0 focus:border-gray-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 hover:bg-gray-50"
                aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              >
                {showPassword ? <Eye
                  size="20"
                  color="#5B5B5C"
                /> : <EyeSlash
                  size="20"
                  color="#5B5B5C"
                />}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link href="/auth/forgot-password" className="text-sm font-semibold text-gray-900">
              Quên mật khẩu?
            </Link>
          </div>

          <button
            type="button"
            onClick={onSignInPress}
            className="w-full rounded-lg bg-customPrimary px-6 py-2 text-center text-base font-bold text-white shadow-neutral-400/70 hover:opacity-90"
          >
            Xác nhận
          </button>

          <div className="flex items-center gap-2 text-sm justify-center w-full">
            <span>Bạn chưa có tài khoản?</span>
            <Link href="/auth/sign-up" className="font-semibold text-gray-900">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInScreen;
