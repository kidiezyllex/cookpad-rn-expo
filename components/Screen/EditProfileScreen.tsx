'use client';

import BackHeader from "@/components/Common/BackHeader";
import Input from "@/components/Common/Input";
import TextArea from "@/components/Common/TextArea";
import TextScaled from "@/components/Common/TextScaled";
import { icons, images } from "@/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';

const EditProfileScreen = () => {
  const [form, setForm] = useState({
    name: 'Hòa Simp',
    bio: '',
    email: 'hoasimp123@gmail.com',
  });

  const router = useRouter();
  return (
    <div className="flex-1 bg-backgroundV1">
      <BackHeader
        headerTitle="Chỉnh sửa hồ sơ"
        onPress={() => router.back()}
      />

      <div
        className="flex-1 pb-[120px] px-4 flex flex-col items-center gap-9"
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
            <TextScaled size="base" className="font-bold text-black">
              Tên
            </TextScaled>
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
            <TextScaled size="base" className="font-bold text-black">
              Giới thiệu
            </TextScaled>
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
            <TextScaled size="base" className="font-bold text-black">
              Email
            </TextScaled>
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
