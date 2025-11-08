'use client';

import { images } from '@/constants';
import { CloseCircle } from 'iconsax-reactjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useForgotPasswordStore } from '@/store/forgotPasswordStore';
import BackHeader from '../Common/BackHeader';
import { StaticImageData } from 'next/image';

const ForgotPasswordScreen = () => {
	const [phone, setPhone] = useState('');

	const setIsForgotPassword = useForgotPasswordStore((state) => state.setIsForgotPassword);
	const router = useRouter();

	const onSendOTPPress = useCallback(() => {
		if (!phone.trim()) {
			window.alert('Vui lòng nhập số điện thoại');
			return;
		}

		setIsForgotPassword(true);
		router.push('/auth/otp');
	}, [phone, setIsForgotPassword, router]);

	const backgroundImageUrl = typeof images.personalChestBg === 'string'
		? images.personalChestBg
		: (images.personalChestBg as StaticImageData)?.src || images.personalChestBg;

	const onBackPress = useCallback(() => {
		router.back();
	}, [router]);
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
			<div className="mx-auto max-w-[400px] w-[400px] p-4 pb-8 shadow-md rounded-lg bg-white/90 overflow-hidden backdrop-blur-sm">
				{/* Header */}
				<BackHeader headerTitle="Quên mật khẩu" onPress={onBackPress} />

				{/* Logo */}
				<div className="mb-8 flex justify-center">
					<Image alt="CookPad" src={images.logo} width={80} height={80} />
				</div>

				{/* Form */}
				<div className="space-y-6">
					{/* Instruction Text */}
					<div className="mb-4">
						<p className="text-sm text-center text-gray-600 px-4">
							Mã OTP lấy lại mật khẩu sẽ được gửi tới số điện thoại của bạn. Vui lòng nhập đúng số điện thoại bạn đã dùng để đăng ký.
						</p>
					</div>

					{/* Phone Number Input */}
					<div className="space-y-2">
						<label className="block text-sm font-bold text-gray-900">Số điện thoại</label>
						<div className="relative">
							<input
								type="tel"
								placeholder="Nhập số điện thoại"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-gray-300"
							/>
							{phone.length > 0 && (
								<button
									type="button"
									onClick={() => setPhone('')}
									className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 hover:bg-gray-50"
									aria-label="Xóa"
								>
									<CloseCircle
										size="20"
										color="#D9D9DB"
										variant="Bold"
									/>
								</button>
							)}
						</div>
					</div>

					{/* Send OTP Button */}
					<button
						type="button"
						onClick={onSendOTPPress}
						className="w-full rounded-lg bg-customPrimary px-6 py-2 text-center text-base font-bold text-white shadow-neutral-400/70 hover:opacity-90"
					>
						Gửi mã OTP
					</button>

					{/* Back to Login */}
					<div className="flex items-center gap-2 text-sm justify-center w-full">
						<span>Nhớ mật khẩu?</span>
						<button
							type="button"
							onClick={() => router.back()}
							className="font-semibold text-gray-900 hover:underline"
						>
							Đăng nhập
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPasswordScreen;
