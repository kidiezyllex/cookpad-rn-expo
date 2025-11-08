'use client';

import BackHeader from "@/components/Common/BackHeader";
import TextScaled from "@/components/Common/TextScaled";
import { icons } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

type SettingItemData = {
  id: number;
  title: string;
  icon: string;
};

type SettingsSectionData = {
  id: number;
  mainTitle: string;
  items: SettingItemData[];
  showLogout?: boolean;
};

const SettingItem = ({ item, section, onClick }: { item: SettingItemData; section: SettingsSectionData; onClick?: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full flex-row items-center justify-between min-h-[40px] gap-2 pt-2 pb-2"
  >
    <TextScaled size="base" className="flex-1 font-bold text-black">
      {item.title}
    </TextScaled>
    <Image
      src={section.mainTitle === "Hỗ trợ" ? icons.upRightIcon : icons.forwardArrow}
      alt={section.mainTitle === "Hỗ trợ" ? "external" : "next"}
      width={24}
      height={24}
    />
  </button>
);

const SettingsSection = ({ section, onItemPress }: { section: SettingsSectionData; onItemPress: (item: SettingItemData | { title: string }) => void }) => (
  <div
    className="flex w-full flex-col items-start justify-start gap-2"
  >
    <TextScaled size="sm" className="font-light text-textNeutralV1">
      {section.mainTitle}
    </TextScaled>
    <div className="w-full">
      {section.items.map((item) => (
        <SettingItem key={item.id} item={item} section={section} onClick={() => onItemPress(item)} />
      ))}
    </div>
    {section.showLogout && (
      <div className="w-full px-0">
        <CustomButton
          title="Đăng xuất"
          bgVariant="ghost"
          textVariant="ghost"
          IconRight={<Image src={icons.signOutIcon} alt="sign out" width={24} height={24} />}
          onPress={() => onItemPress({ title: "Đăng xuất" })}
        />
      </div>
    )}
  </div>
);

const SettingScreen = () => {
  const router = useRouter();

  const handleItemPress = (item: SettingItemData | { title: string }) => {
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
      case "Đăng xuất":
        router.replace('/sign-in');
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex-1 bg-backgroundV1">
      <BackHeader
        headerTitle="Cài đặt"
        onPress={() => router.back()}
      />

      <div
        className="flex-1 overflow-y-auto pb-[120px] px-4 pt-8"
      >
        <div
          className="flex w-full flex-col items-start justify-start gap-8"
        >
          {settingsSections.map((section) => (
            <SettingsSection key={section.id} section={section} onItemPress={handleItemPress} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingScreen;
