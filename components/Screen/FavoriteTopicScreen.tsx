import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { getScaleFactor } from '@/lib/scaling';
import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: screenWidth } = Dimensions.get('window');

const cookingSkillLevels = [
  "Không có kinh nghiệm",
  "Cơ bản", 
  "Bình thường",
  "Thành thạo",
  "Chuyên nghiệp"
];

const FavoriteTopicScreen = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const handleSkip = () => {
    // Navigate to main app after skipping
    router.replace("/(root)/tabs/home");
  };

  const handleContinue = () => {
    // Navigate to main app after selection
    router.replace("/(root)/tabs/home");
  };

  return (
    <SafeAreaView 
      className="flex justify-between items-center h-full bg-backgroundV1"
      style={{ paddingHorizontal: getScaleFactor() * 16 }}
    >
      {/* Progress bar */}
      <View 
        className="bg-gray-200 rounded-full"
        style={{
          width: getScaleFactor() * 288,
          height: getScaleFactor() * 4,
          marginTop: getScaleFactor() * 67,
          marginBottom: getScaleFactor() * 57,
        }}
      >
        <View 
          className="rounded-full bg-customPrimary"
          style={{
            width: getScaleFactor() * 96,
            height: getScaleFactor() * 4,
          }}
        />
      </View>

      {/* Main content */}
      <View className="flex flex-col gap-8 justify-center items-center">
        {/* Title */}
        <View 
          className="flex justify-center items-center bg-red-500"
        >
          <TextScaled
            size="xl"
            className="font-bold text-center text-black"
          >
            Kĩ thuật nấu nướng của bạn hiện tại?
          </TextScaled>
        </View>

        {/* Skill level options */}
        <View className="flex flex-col gap-2 justify-start items-center">
          {cookingSkillLevels.map((level, index) => (
            <CustomButton
              key={index}
              title={level}
              onPress={() => setSelectedLevel(level)}
              className="w-full"
              style={{
                paddingHorizontal: getScaleFactor() * 32,
                paddingVertical: getScaleFactor() * 12,
                shadowColor: 'rgba(0,0,0,0.10)',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 12,
                elevation: 3,
                backgroundColor: selectedLevel === level ? 'red' : 'white',
              }}
            />
          ))}
        </View>
      </View>

      {/* Bottom section */}
      <View 
        className="flex flex-col gap-2 justify-center items-center"
        style={{ marginBottom: getScaleFactor() * 40 }}
      >
        {/* Note text */}
        <View 
          className="flex justify-center items-center"
          style={{ width: getScaleFactor() * 384 }}
        >
          <TextScaled
            size="xs"
            className="text-center text-black"
          >
            * Chọn đáp án về chủ đề món ăn bạn ưa thích để nhận được các đề xuất phù hợp với bạn.
          </TextScaled>
        </View>

        {/* Skip button */}
        <CustomButton
          title="Bỏ qua"
          onPress={handleSkip}
          bgVariant="transparent"
          textVariant="transparent"
          className="w-auto"
          style={{
            width: getScaleFactor() * 48,
            paddingVertical: getScaleFactor() * 12,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteTopicScreen;
