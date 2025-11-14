'use client';

import BackHeader from "@/components/Common/BackHeader";
import Input from "@/components/Common/Input";
import TextArea from "@/components/Common/TextArea";
import { icons, images } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type EditProfileScreenProps = {
  showHeader?: boolean;
  onBack?: () => void;
  className?: string;
  contentClassName?: string;
};

const EditProfileScreen = ({
  showHeader = true,
  onBack,
  className,
  contentClassName,
}: EditProfileScreenProps) => {
  const [form, setForm] = useState({
    name: 'Hòa Simp',
    bio: '',
    email: 'hoasimp123@gmail.com',
  });

  const router = useRouter();
  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    router.back();
  };

  return (
    <div
      className={cn(
        "flex flex-1 flex-col bg-backgroundV1 h-full",
        !showHeader && "rounded-xl border border-[#E7E7E7] bg-white p-6 shadow-sm",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-1 flex-col items-center gap-9 px-4 pb-[120px]",
          !showHeader && "px-0 pb-0",
          contentClassName,
        )}
      >
        {/* Avatar Section */}
        <div
          className="relative h-[100px]"
        >
          <Image
            src={images.sampleAvatar}
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <button
            className="bg-[#FFEFE9] absolute left-[68px] top-[68px] rounded-full p-1"
          >
            <Image
              src={icons.cameraIcon}
              alt="camera"
              width={24}
              height={24}
              style={{ filter: 'invert(41%) sepia(63%) saturate(1216%) hue-rotate(345deg) brightness(96%) contrast(92%)' }}
            />
          </button>
        </div>

        {/* Form Fields */}
        <div
          className="w-full flex flex-col items-start justify-start gap-3.5"
        >
          {/* Name Input */}
          <div
            className="w-full flex flex-col items-start justify-start gap-1"
          >
            <p className="font-bold text-black text-base">
              Tên
            </p>
            <Input
              value={form.name}
              onChangeText={(value) => setForm({ ...form, name: value })}
              placeholder="Nhập tên của bạn"
            />
          </div>

          {/* Bio Input */}
          <div
            className="w-full flex flex-col items-start justify-start gap-1"
          >
            <p className="font-bold text-black text-base">
              Giới thiệu
            </p>
            <TextArea
              value={form.bio}
              onChangeText={(value) => setForm({ ...form, bio: value })}
              placeholder="Kể câu chuyện của bạn"
            />
          </div>

          {/* Email Input */}
          <div
            className="w-full flex flex-col items-start justify-start gap-1"
          >
            <p className="font-bold text-black text-base">
              Email
            </p>
            <Input
              placeholder="Email"
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileScreen;
