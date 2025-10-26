import TextScaled from "@/components/Common/TextScaled";
import { icons } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { router } from "expo-router";
import { FlatList, Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock data for settings sections
const settingsSections = [
  {
    id: 1,
    title: "Tài khoản",
    items: [
      { id: 1, title: "Chỉnh sửa hồ sơ", icon: "arrow" },
      { id: 2, title: "Quản lý tài khoản", icon: "arrow" },
      { id: 3, title: "Chế độ hiển thị", icon: "arrow" },
      { id: 4, title: "Quyền và hoạt động Bạn Bếp", icon: "arrow" },
    ]
  },
  {
    id: 2,
    title: "Đăng nhập",
    items: [
      { id: 5, title: "Premium", icon: "arrow" },
      { id: 6, title: "Bảo mật", icon: "arrow" },
    ],
    showLogout: true
  },
  {
    id: 3,
    title: "Hỗ trợ",
    items: [
      { id: 7, title: "Trợ giúp", icon: "external" },
      { id: 8, title: "Xem điều khoản dịch vụ", icon: "external" },
      { id: 9, title: "Xem chính sách quyền riêng tư", icon: "external" },
    ]
  }
];

const SettingItem = ({ item, onPress }: { item: any, onPress?: () => void }) => (
  <Pressable
    onPress={onPress}
    className="px-4 py-2 rounded-lg flex-row justify-start items-center"
    style={{ gap: getScaleFactor() * 8 }}
  >
    <TextScaled size="base" className="flex-1 justify-start font-bold text-black">
      {item.title}
    </TextScaled>
    <Image
      source={icons.clockIcon}
      style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
      resizeMode="contain"
    />
  </Pressable>
);

const LogoutButton = () => (
  <Pressable
    className="h-8 py-1 rounded-lg opacity-25 flex-row justify-center items-center"
    style={{ gap: getScaleFactor() * 8 }}
    disabled
  >
    <TextScaled size="sm" className="font-bold text-textNeutralV1">
      Đăng xuất
    </TextScaled>
    <Image
      source={icons.clockIcon}
      style={{ width: getScaleFactor() * 16, height: getScaleFactor() * 16 }}
      resizeMode="contain"
    />
  </Pressable>
);

const SettingsSection = ({ section }: { section: typeof settingsSections[0] }) => (
  <View 
    className="w-full flex-col justify-start items-start"
    style={{ gap: getScaleFactor() * 8 }}
  >
    <View 
      className="px-4 flex-row justify-start items-start"
      style={{ gap: getScaleFactor() * 10 }}
    >
      <TextScaled size="xs" className="justify-start text-black">
        {section.title}
      </TextScaled>
    </View>
    <View className="flex-col justify-start items-start">
      <FlatList
        data={section.items}
        renderItem={({ item }) => <SettingItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />
    </View>
    {section.showLogout && (
      <View style={{ paddingLeft: getScaleFactor() * 16 }}>
        <LogoutButton />
      </View>
    )}
  </View>
);

const SettingScreen = () => {
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
          Cài đặt
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
          className="flex-col justify-start items-start"
          style={{ gap: getScaleFactor() * 32 }}
        >
          <FlatList
            data={settingsSections}
            renderItem={({ item }) => <SettingsSection section={item} />}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
