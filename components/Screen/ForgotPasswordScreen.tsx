'use client';

import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { images } from '@/constants';
import { useForgotPasswordStore } from '@/store/forgotPasswordStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import BackHeader from '../Common/BackHeader';
import Input from '../Common/Input';

const ForgotPasswordScreen = () => {
	const [form, setForm] = useState({
		phone: '',
	});

	const setIsForgotPassword = useForgotPasswordStore((state) => state.setIsForgotPassword);
	const router = useRouter();

	const onSendOTPPress = useCallback(() => {
		if (!form.phone.trim()) {
			window.alert('Vui lòng nhập số điện thoại');
			return;
		}

		setIsForgotPassword(true);
		router.push('/(auth)/otp');
	}, [form.phone, setIsForgotPassword, router]);

	const onBackPress = useCallback(() => {
		router.back();
	}, [router]);

	return (
		<div className='flex-1 bg-backgroundV1 min-h-dvh'>
			<BackHeader headerTitle="Quên mật khẩu" onPress={onBackPress} />

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
				{/* Instruction Text */}
				<div className="flex flex-col items-center justify-center">
					<TextScaled
						size="base"
						className="text-center text-textNeutralV1 px-4"
					>
						Mã OTP lấy lại mật khẩu sẽ được gửi tới số điện thoại của bạn. Vui lòng nhập đúng số điện thoại bạn đã dùng để đăng ký.
					</TextScaled>
				</div>

				{/* Phone Number Input */}
				<div
					className="flex w-full flex-col items-start justify-start gap-1"
				>
					<TextScaled size="base" className="font-bold text-Neutral-900">
						Số điện thoại
					</TextScaled>
					<div className="relative w-full">
						<Input
							placeholder="Nhập số điện thoại"
							value={form.phone}
							onChangeText={(value) => setForm({ ...form, phone: value })}
							inputMode="tel"
						/>
						{form.phone.length > 0 && (
							<button
								type="button"
								onClick={() => setForm({ ...form, phone: '' })}
								className="px-2 text-xs text-gray-400 absolute right-2 top-2 h-6"
							>
								X
							</button>
						)}
					</div>
				</div>

				{/* Send OTP Button */}
				<CustomButton title="Gửi mã OTP" onPress={onSendOTPPress} />
			</div>
		</div>
	);
};

export default ForgotPasswordScreen;
