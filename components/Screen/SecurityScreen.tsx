import TextScaled from "@/components/Common/TextScaled";
import { icons } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, ScrollView, Switch, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock data for security options
const securityOptions = [
  {
    id: 1,
    title: "Đổi mật khẩu",
    icon: "lock",
    hasToggle: false,
    onPress: () => router.push('/change-password'),
  },
  {
    id: 2,
    title: "Đồng bộ Face /Touch ID",
    icon: "face",
    hasToggle: true,
    onPress: () => {},
  },
];

const SecurityOption = ({ option }: { option: typeof securityOptions[0] }) => {
  const [isEnabled, setIsEnabled] = useState(option.id === 2);

  return (
    <Pressable
      onPress={option.hasToggle ? undefined : option.onPress}
      className="px-4 py-2 rounded-lg flex-row justify-start items-center"
      style={{ gap: getScaleFactor() * 8 }}
    >
      <Image
        source={icons.clockIcon}
        style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
        resizeMode="contain"
      />
      <TextScaled size="base" className="flex-1 justify-start font-bold text-black">
        {option.title}
      </TextScaled>
      {option.hasToggle ? (
        <Switch
          trackColor={{ false: '#E5E5E5', true: '#E36137' }}
          thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
          ios_backgroundColor="#E5E5E5"
          onValueChange={setIsEnabled}
          value={isEnabled}
        />
      ) : (
        <Image
          source={icons.clockIcon}
          style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
          resizeMode="contain"
        />
      )}
    </Pressable>
  );
};

const SecurityScreen = () => {
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
          Bảo mật
        </TextScaled>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ 
          paddingBottom: getScaleFactor() * 120,
          paddingHorizontal: getScaleFactor() * 16,
        }}
      >
        <View 
          className="w-full flex-col justify-start items-start"
          style={{ gap: getScaleFactor() * 8 }}
        >
          <FlatList
            data={securityOptions}
            renderItem={({ item }) => <SecurityOption option={item} />}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecurityScreen;
