import TextScaled from "@/components/Common/TextScaled";
import { icons, images } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfileScreen = () => {
  const [form, setForm] = useState({
    name: 'Hòa Simp',
    bio: '',
    email: 'hoasimp123@gmail.com',
  });

  return (
    <SafeAreaView className="flex-1 bg-backgroundV1">
      {/* Header with back button */}
      <View 
        className="flex-row items-center px-4 py-2"
        style={{ gap: getScaleFactor() * 16 }}
      >
        <Pressable
          onPress={() => router.back()}
          className="p-2"
        >
          <Image
            source={icons.backArrow}
            style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
            resizeMode="contain"
          />
        </Pressable>
        <TextScaled size="lg" className="font-bold text-black">
          Chỉnh sửa hồ sơ
        </TextScaled>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ 
          paddingBottom: getScaleFactor() * 120,
          paddingHorizontal: getScaleFactor() * 16,
          alignItems: 'center',
          gap: getScaleFactor() * 36,
        }}
      >
        {/* Avatar Section */}
        <View 
          className="relative"
          style={{ 
            height: getScaleFactor() * 96,
          }}
        >
          <Image
            source={images.sampleAvatar}
            style={{
              width: getScaleFactor() * 96,
              height: getScaleFactor() * 96,
              borderRadius: getScaleFactor() * 99,
            }}
            resizeMode="cover"
          />
          <Pressable
            className="p-1 bg-customPrimary rounded-3xl"
            style={{
              position: 'absolute',
              left: getScaleFactor() * 68,
              top: getScaleFactor() * 68,
              borderRadius: getScaleFactor() * 24,
            }}
          >
            <Image
              source={icons.clockIcon}
              style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
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
            <View 
              className="h-10 p-2 bg-white rounded-lg"
              style={{
                width: '100%',
              }}
            >
              <TextInput
                value={form.name}
                onChangeText={(value) => setForm({ ...form, name: value })}
                style={{
                  fontSize: getScaleFactor() * 16,
                  color: 'black',
                }}
              />
            </View>
          </View>

          {/* Bio Input */}
          <View 
            className="flex-col justify-start items-start w-full"
            style={{ gap: getScaleFactor() * 4 }}
          >
            <TextScaled size="base" className="font-bold text-black">
              Giới thiệu
            </TextScaled>
            <View 
              className="p-2 bg-white rounded-lg border border-gray-300"
              style={{
                width: '100%',
                minHeight: getScaleFactor() * 160,
              }}
            >
              <TextInput
                value={form.bio}
                onChangeText={(value) => setForm({ ...form, bio: value })}
                placeholder="Kể câu chuyện của bạn"
                placeholderTextColor="#AAAAAA"
                multiline
                numberOfLines={4}
                style={{
                  fontSize: getScaleFactor() * 16,
                  color: 'black',
                  textAlignVertical: 'top',
                }}
              />
            </View>
          </View>

          {/* Email Input */}
          <View 
            className="flex-col justify-start items-start w-full"
            style={{ gap: getScaleFactor() * 4 }}
          >
            <TextScaled size="base" className="font-bold text-black">
              Email
            </TextScaled>
            <View 
              className="h-10 p-2 bg-white rounded-lg"
              style={{
                width: '100%',
              }}
            >
              <TextInput
                value={form.email}
                onChangeText={(value) => setForm({ ...form, email: value })}
                style={{
                  fontSize: getScaleFactor() * 16,
                  color: 'black',
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
