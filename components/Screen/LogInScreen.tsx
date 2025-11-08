'use client';

import { images } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

const LogInScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSignInPress = useCallback(() => {
    if (email === 'H' && password === '1') {
      router.replace('/(root)/tabs/home');
    } else {
      router.replace('/(auth)/favorite-topic');
    }
  }, [email, password, router]);

  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-md px-4 py-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-center">
          <h1 className="text-base font-bold">Đăng nhập</h1>
        </div>

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image alt="CookPad" src={images.logo} width={80} height={80} />
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-900">Tài khoản</label>
            <input
              type="text"
              placeholder="Email hoặc số điện thoại"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-gray-300"
            />
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
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link href="/forgot-password" className="text-sm font-semibold text-gray-900">
              Quên mật khẩu?
            </Link>
          </div>

          <button
            type="button"
            onClick={onSignInPress}
            className="w-full rounded-lg bg-customPrimary px-6 py-2 text-center text-base font-bold text-white shadow-md shadow-neutral-400/70 hover:opacity-90"
          >
            Xác nhận
          </button>

          <div className="flex items-center gap-2 text-sm">
            <span>Bạn chưa có tài khoản?</span>
            <Link href="/(auth)/sign-up" className="font-semibold text-gray-900">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInScreen;
