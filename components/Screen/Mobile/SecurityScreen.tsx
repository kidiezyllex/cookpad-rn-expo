import TextScaled from "@/components/Common/TextScaled";
import { icons } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Switch } from "react-native-switch";
import BackHeader from "../Common/BackHeader";

const securityOptions = [
  {
    id: 1,
    title: "Đổi mật khẩu",
    icon: icons.lockIcon,
    hasToggle: false,
    onPress: () => router.push('/(auth)/change-password'),
  },
  {
    id: 2,
    title: "Đồng bộ Face /Touch ID",
    icon: icons.faceIcon,
    hasToggle: true,
    onPress: () => {},
  },
];

const SecurityOption = ({ option }: { option: typeof securityOptions[0] }) => {
  const [isEnabled, setIsEnabled] = useState(option.id === 2);

  return (
    <Pressable
      onPress={option.hasToggle ? undefined : option.onPress}
      className="flex-row justify-between items-center"
      style={{ 
        minHeight: getScaleFactor() * 40, 
        gap: getScaleFactor() * 8, 
        paddingVertical: getScaleFactor() * 8 
      }}
    >
      <Image
        source={option.icon}
        style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
        resizeMode="contain"
      />
      <TextScaled size="base" className="flex-1 font-bold text-black">
        {option.title}
      </TextScaled>
      {option.hasToggle ? (
        <Switch
          value={isEnabled}
          onValueChange={setIsEnabled}
          disabled={false}
          activeText={''}
          inActiveText={''}
          circleSize={getScaleFactor() * 20}
          barHeight={getScaleFactor() * 24}
          circleBorderWidth={0}
          backgroundActive={'#E36137'}
          backgroundInactive={'#E5E5E5'}
          circleActiveColor={'#ffffff'}
          circleInActiveColor={'#f4f3f4'}
          changeValueImmediately={true}
          renderActiveText={false}
          renderInActiveText={false}
          switchLeftPx={2}
          switchRightPx={2}
          switchWidthMultiplier={2.2}
          switchBorderRadius={getScaleFactor() * 12}
        />
      ) : (
        <Ionicons
          name="chevron-forward"
          size={getScaleFactor() * 24}
          color="#2D2D2D"
        />
      )}
    </Pressable>
  );
};

const SecurityScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-backgroundV1">
      <BackHeader
        headerTitle="Bảo mật"
        onPress={() => router.back()}
      />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingBottom: getScaleFactor() * 120,
          paddingHorizontal: getScaleFactor() * 16,
          paddingTop: getScaleFactor() * 32,
        }}
      >
        <View className="w-full">
            {securityOptions.map((option) => (
              <SecurityOption key={option.id} option={option} />
            ))}
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecurityScreen;
