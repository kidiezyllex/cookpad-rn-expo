import BackHeader from "@/components/Common/BackHeader";
import Input from "@/components/Common/Input";
import TextArea from "@/components/Common/TextArea";
import TextScaled from "@/components/Common/TextScaled";
import { icons, images } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfileScreen = () => {
  const [form, setForm] = useState({
    name: 'Hòa Simp',
    bio: '',
    email: 'hoasimp123@gmail.com',
  });

  return (
    <SafeAreaView className="flex-1 bg-backgroundV1">
      <BackHeader
        headerTitle="Chỉnh sửa hồ sơ"
        onPress={() => router.back()}
      />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingBottom: getScaleFactor() * 120,
          paddingHorizontal: getScaleFactor() * 16,
          alignItems: 'center',
          gap: getScaleFactor() * 36,
        }}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={false}
        scrollEnabled={true}
      >
        {/* Avatar Section */}
        <View
          className="relative"
          style={{
            height: getScaleFactor() * 100,
          }}
        >
          <Image
            source={images.sampleAvatar}
            style={{
              width: getScaleFactor() * 100,
              height: getScaleFactor() * 100,
              borderRadius: 100,
            }}
            resizeMode="cover"
          />
          <Pressable
            className="bg-[#FFEFE9] rounded-3xl"
            style={{
              position: 'absolute',
              left: getScaleFactor() * 68,
              top: getScaleFactor() * 68,
              borderRadius: getScaleFactor() * 24,
              padding: getScaleFactor() * 4,
            }}
          >
            <Image
              source={icons.cameraIcon}
              style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24, tintColor: "#E36137" }}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        {/* Form Fields */}
        <View
          className="flex-col justify-start items-start w-full"
          style={{ gap: getScaleFactor() * 14 }}
        >
          {/* Name Input */}
          <View
            className="flex-col justify-start items-start w-full"
            style={{ gap: getScaleFactor() * 4 }}
          >
            <TextScaled size="base" className="font-bold text-black">
              Tên
            </TextScaled>
            <Input
              value={form.name}
              onChangeText={(value) => setForm({ ...form, name: value })}
              placeholder="Nhập tên của bạn"
            />
          </View>

          {/* Bio Input */}
          <View
            className="flex-col justify-start items-start w-full"
            style={{ gap: getScaleFactor() * 4 }}
          >
            <TextScaled size="base" className="font-bold text-black">
              Giới thiệu
            </TextScaled>
            <TextArea
              value={form.bio}
              onChangeText={(value) => setForm({ ...form, bio: value })}
              placeholder="Kể câu chuyện của bạn"
            />
          </View>

          {/* Email Input */}
          <View
            className="flex-col justify-start items-start w-full"
            style={{ gap: getScaleFactor() * 4 }}
          >
            <TextScaled size="base" className="font-bold text-black">
              Email
            </TextScaled>
            <Input
              placeholder="Email"
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
