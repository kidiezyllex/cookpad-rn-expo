'use client';

import CustomButton from "@/components/Common/CustomButton";
import TextScaled from "@/components/Common/TextScaled";
import { icons, images } from "@/constants";
import BackHeader from "../Common/BackHeader";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PremiumScreen = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-dvh flex-1 bg-[#2D2D2D]">
      <div className="w-full">
        <BackHeader
          headerTitle="Premium"
          onPress={() => router.back()}
          isDark={true}
        />

        <div
          className="flex-1 flex flex-col items-start pb-[120px] px-4 gap-[80px] mt-8"
        >
          {/* Title Section */}
          <div 
            className="flex w-full flex-col items-start justify-start"
          >
              <TextScaled size="xl" className="font-bold text-white">
                Chuyển đổi sang gói Premium để trở thành{' '}
                <TextScaled size="xl" className="font-bold text-customPrimary">
                  Vua Đầu Bếp
                </TextScaled>
              </TextScaled>
              <TextScaled size="sm" className="text-white">
                Hoàn thiện các công thức nấu ăn của bạn bằng công cụ phân tích gu ăn uống, hiển thị công thức hoàn chỉnh và video các bước thực hành món.
              </TextScaled>
          </div>

          {/* Avatar Section */}
          <div 
            className="flex w-full flex-col items-center justify-start gap-8"
          >
            <div 
              className="flex flex-row items-end justify-center gap-6"
            >
              {/* Regular User Avatar */}
              <Image
                src={images.sampleAvatar}
                alt="user"
                className="w-11 h-11 rounded-full"
              />
              
              {/* Arrow Icon */}
              <div 
                className="flex flex-row items-center justify-start h-11"
              >
                <Image
                  src={icons.forwardArrow}
                  alt="arrow"
                  className="w-6 h-6 invert"
                />
              </div>

              {/* Premium User Avatar with Crown */}
              <div 
                className="relative w-[53px] h-[65px]"
              >
                <Image
                  src={images.sampleAvatar}
                  alt="premium-user"
                  className="w-11 h-11 rounded-full border-2 border-[#E36137] absolute left-0 top-[21px]"
                />
                {/* Chef Icon */}
                <Image
                  src={icons.chefIcon}
                  alt="chef"
                  className="w-7 h-7 absolute right-0 top-0"
                />
              </div>
            </div>

            {/* Premium Button */}
            <div className="w-full flex justify-center">
              <CustomButton
                title="Chuyển đổi thành Premium"
                className="max-w-[265px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumScreen;
