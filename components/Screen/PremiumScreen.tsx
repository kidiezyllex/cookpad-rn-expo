import CustomButton from "@/components/Common/CustomButton";
import TextScaled from "@/components/Common/TextScaled";
import { icons, images } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PremiumScreen = () => {
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
          Premium
        </TextScaled>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ 
          paddingBottom: getScaleFactor() * 120,
          paddingHorizontal: getScaleFactor() * 16,
          alignItems: 'flex-start',
          gap: getScaleFactor() * 80,
        }}
      >
        {/* Title Section */}
        <View 
          className="flex-col justify-start items-start"
          style={{ width: '100%' }}
        >
          <View 
            className="px-4"
            style={{ width: '100%' }}
          >
            <TextScaled size="xl" className="font-bold text-white">
              Chuyển đổi sang gói Premium để trở thành{' '}
              <TextScaled size="xl" className="font-bold text-customPrimary">
                Vua Đầu Bếp
              </TextScaled>
            </TextScaled>
          </View>
          <View 
            className="px-4"
            style={{ width: '100%', marginTop: getScaleFactor() * 4 }}
          >
            <TextScaled size="xs" className="text-white">
              Hoàn thiện các công thức nấu ăn của bạn bằng công cụ phân tích gu ăn uống, hiển thị công thức hoàn chỉnh và video các bước thực hành món.
            </TextScaled>
          </View>
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
              className="h-11 flex-row justify-start items-center"
              style={{ gap: getScaleFactor() * 10 }}
            >
              <Image
                source={icons.clockIcon}
                style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
                resizeMode="contain"
              />
            </View>

            {/* Premium User Avatar with Crown */}
            <View 
              className="relative"
              style={{
                width: getScaleFactor() * 56,
                height: getScaleFactor() * 64,
              }}
            >
              <Image
                source={images.sampleAvatar}
                style={{
                  width: getScaleFactor() * 44,
                  height: getScaleFactor() * 44,
                  borderRadius: getScaleFactor() * 99,
                  borderWidth: 2,
                  borderColor: '#E36137',
                  position: 'absolute',
                  left: 0,
                  top: getScaleFactor() * 21,
                }}
                resizeMode="cover"
              />
              {/* Crown Icon */}
              <Image
                source={icons.clockIcon}
                style={{
                  width: getScaleFactor() * 24,
                  height: getScaleFactor() * 20,
                  position: 'absolute',
                  left: getScaleFactor() * 32,
                  top: 0,
                  transform: [{ rotate: '30deg' }],
                }}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Premium Button */}
          <CustomButton
            title="Chuyển đổi thành Premium"
            onPress={() => {
              // Handle premium upgrade
              console.log('Premium upgrade clicked');
            }}
            className="px-6 py-2"
            style={{
              width: 'auto',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PremiumScreen;
