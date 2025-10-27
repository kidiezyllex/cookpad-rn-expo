import BackHeader from "@/components/Common/BackHeader";
import TextScaled from "@/components/Common/TextScaled";
import { icons } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../Common/CustomButton";

const settingsSections = [
  {
    id: 1,
    mainTitle: "Tài khoản",
    items: [
      { id: 1, title: "Chỉnh sửa hồ sơ", icon: "arrow" },
      { id: 2, title: "Quản lý tài khoản", icon: "arrow" },
      { id: 3, title: "Chế độ hiển thị", icon: "arrow" },
      { id: 4, title: "Quyền và hoạt động Bạn Bếp", icon: "arrow" },
    ]
  },
  {
    id: 2,
    mainTitle: "Đăng nhập",
    items: [
      { id: 5, title: "Premium", icon: "arrow" },
      { id: 6, title: "Bảo mật", icon: "arrow" },
    ],
    showLogout: true
  },
  {
    id: 3,
    mainTitle: "Hỗ trợ",
    items: [
      { id: 7, title: "Trợ giúp", icon: "external" },
      { id: 8, title: "Xem điều khoản dịch vụ", icon: "external" },
      { id: 9, title: "Xem chính sách quyền riêng tư", icon: "external" },
    ]
  }
];

const SettingItem = ({ item, section, onPress }: { item: any, section: any, onPress?: () => void }) => (
  <Pressable
    onPress={onPress}
    className="flex-row justify-between items-center"
    style={{ minHeight: getScaleFactor() * 40, gap: getScaleFactor() * 8, paddingVertical: getScaleFactor() * 8 }}
  >
    <TextScaled size="base" className="flex-1 font-bold text-black">
      {item.title}
    </TextScaled>
    {section.mainTitle === "Hỗ trợ" ? (
      <Image
        source={icons.upRightIcon}
        style={{
          width: getScaleFactor() * 24,
          height: getScaleFactor() * 24,
        }}
        resizeMode="contain"
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

const SettingsSection = ({ section, onItemPress }: { section: typeof settingsSections[0], onItemPress: (item: any) => void }) => (
  <View
    className="w-full flex-col justify-start items-start"
    style={{ gap: getScaleFactor() * 8 }}
  >
    <TextScaled size="sm" className="font-light text-textNeutralV1">
      {section.mainTitle}
    </TextScaled>
    <View className="w-full">
      {section.items.map((item) => (
        <SettingItem key={item.id} item={item} section={section} onPress={() => onItemPress(item)} />
      ))}
    </View>
    {section.showLogout && (
      <View className="w-full px-0">
        <CustomButton 
        title="Đăng xuất"
        bgVariant="ghost"
        textVariant="ghost"
        IconRight={<Image source={icons.signOutIcon} style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }} resizeMode="contain" />}
        onPress={() => {}}
      />
      </View>
    )}
  </View>
);

const SettingScreen = () => {
  const router = useRouter();

  const handleItemPress = (item: any) => {
    switch (item.title) {
      case "Chỉnh sửa hồ sơ":
        router.push("/(root)/edit-profile");
        break;
      case "Premium":
        router.push("/(root)/premium");
        break;
      case "Bảo mật":
        router.push("/(root)/security");
        break;
      default:
        // Handle other items as needed
        break;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-backgroundV1">
      <BackHeader 
        headerTitle="Cài đặt" 
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
        <View
          className="flex-col justify-start items-start w-full"
          style={{ gap: getScaleFactor() * 32 }}
        >
          {settingsSections.map((section) => (
            <SettingsSection key={section.id} section={section} onItemPress={handleItemPress} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
