import CustomButton from "@/components/Common/CustomButton";
import TextScaled from "@/components/Common/TextScaled";
import { icons, images } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { router } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeader from "../Common/BackHeader";

const PremiumScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#2D2D2D]">
      <BackHeader
        headerTitle="Premium"
        onPress={() => router.back()}
        isDark={true}
      />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ 
          paddingBottom: getScaleFactor() * 120,
          paddingHorizontal: getScaleFactor() * 16,
          alignItems: 'flex-start',
          gap: getScaleFactor() * 80,
          marginTop: getScaleFactor() * 32,
        }}
      >
        {/* Title Section */}
        <View 
          className="flex-col justify-start items-start"
          style={{ width: '100%' }}
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
        </View>

        {/* Avatar Section */}
        <View 
          className="w-full flex-col justify-start items-center"
          style={{ gap: getScaleFactor() * 32 }}
        >
          <View 
            className="flex-row justify-center items-end"
            style={{ gap: getScaleFactor() * 24 }}
          >
            {/* Regular User Avatar */}
            <Image
              source={images.sampleAvatar}
              style={{
                width: getScaleFactor() * 44,
                height: getScaleFactor() * 44,
                borderRadius: getScaleFactor() * 99,
              }}
              resizeMode="cover"
            />
            
            {/* Arrow Icon */}
            <View 
              className="flex-row justify-start items-center"
              style={{ height: getScaleFactor() * 44 }}
            >
              <Image
                source={icons.forwardArrow}
                style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24, tintColor: '#FFFFFF' }}
                resizeMode="contain"
              />
            </View>

            {/* Premium User Avatar with Crown */}
            <View 
              className="relative"
              style={{
                width: getScaleFactor() * 53,
                height: getScaleFactor() * 65,
              }}
            >
              <Image
                source={images.sampleAvatar}
                style={{
                  width: getScaleFactor() * 44,
                  height: getScaleFactor() * 44,
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: '#E36137',
                  position: 'absolute',
                  left: 0,
                  top: getScaleFactor() * 21,
                }}
                resizeMode="cover"
              />
              {/* Chef Icon */}
              <Image
                source={icons.chefIcon}
                style={{
                  width: getScaleFactor() * 28,
                  height: getScaleFactor() * 28,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                }}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Premium Button */}
          <CustomButton
            title="Chuyển đổi thành Premium"
            style={{ maxWidth: getScaleFactor() * 265 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PremiumScreen;
