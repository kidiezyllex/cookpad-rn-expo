'use client';

import TextScaled from "@/components/Common/TextScaled";
import EditProfileScreen from "@/components/Screen/EditProfileScreen";
import PremiumScreen from "@/components/Screen/PremiumScreen";
import SecurityScreen from "@/components/Screen/SecurityScreen";
import { cn } from "@/lib/utils";
import type { Icon } from "iconsax-reactjs";
import {
  ArrowRight2,
  Crown,
  DocumentText,
  LogoutCurve,
  MessageQuestion,
  Moon,
  ProfileCircle,
  Setting2,
  ShieldSecurity,
  ShieldTick,
  UserTag,
} from "iconsax-reactjs";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

type SidebarContentKey = "edit-profile" | "premium" | "security";

type SettingAction = "logout";

type SettingItemData = {
  id: string;
  title: string;
  icon: Icon;
  contentKey?: SidebarContentKey;
  description?: string;
  href?: string;
  external?: boolean;
  action?: SettingAction;
};

type SettingsSectionData = {
  id: number;
  mainTitle: string;
  items: SettingItemData[];
};

const settingsSections: SettingsSectionData[] = [
  {
    id: 1,
    mainTitle: "Tài khoản",
    items: [
      {
        id: "edit-profile",
        title: "Chỉnh sửa hồ sơ",
        icon: ProfileCircle,
        contentKey: "edit-profile",
      },
      {
        id: "account-management",
        title: "Quản lý tài khoản",
        icon: Setting2,
      },
      {
        id: "display-mode",
        title: "Chế độ hiển thị",
        icon: Moon,
      },
      {
        id: "kitchen-permission",
        title: "Quyền và hoạt động Bạn Bếp",
        icon: UserTag,
      },
    ],
  },
  {
    id: 2,
    mainTitle: "Đăng nhập",
    items: [
      {
        id: "premium",
        title: "Premium",
        icon: Crown,
        contentKey: "premium",
        description: "Khám phá đặc quyền Premium dành riêng cho đầu bếp sáng tạo.",
      },
      {
        id: "security",
        title: "Bảo mật",
        icon: ShieldSecurity,
        contentKey: "security",
        description: "Bảo vệ tài khoản với các tuỳ chọn bảo mật nâng cao.",
      },
      {
        id: "logout",
        title: "Đăng xuất",
        icon: LogoutCurve,
        action: "logout",
      },
    ],
  },
  {
    id: 3,
    mainTitle: "Hỗ trợ",
    items: [
      {
        id: "support",
        title: "Trợ giúp",
        icon: MessageQuestion,
        description: "Tìm lời giải cho các câu hỏi thường gặp khi sử dụng CookPad.",
      },
      {
        id: "terms",
        title: "Xem điều khoản dịch vụ",
        icon: DocumentText,
        description: "Đọc chi tiết về điều khoản sử dụng và quyền lợi của bạn.",
      },
      {
        id: "privacy",
        title: "Xem chính sách quyền riêng tư",
        icon: ShieldTick,
        description: "Tìm hiểu cách CookPad bảo vệ dữ liệu cá nhân của bạn.",
      },
    ],
  },
];

const SettingItem = ({
  item,
  isActive,
  onClick,
}: {
  item: SettingItemData;
  isActive: boolean;
  onClick: () => void;
}) => {
  const LeadingIcon = item.icon;
  const isLogout = item.action === "logout";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors",
        isLogout ? "hover:bg-[#FFEDE6]" : "hover:bg-[#F5F5F5]",
        isActive && !isLogout && "bg-[#FFEDE6]",
      )}
    >
      <LeadingIcon
        size={22}
        variant="Linear"
        color={isLogout ? "#E36137" : isActive ? "#E36137" : "#7A7A7A"}
      />
      <TextScaled
        size="base"
        className={cn(
          "flex-1 font-semibold text-black transition-colors",
          isLogout && "text-[#E36137]",
          isActive && !isLogout && "text-customPrimary",
        )}
      >
        {item.title}
      </TextScaled>
      {!isLogout && (
        <ArrowRight2
          size={18}
          variant="Linear"
          color={isActive ? "#E36137" : "#B3B3B3"}
        />
      )}
    </button>
  );
};

const SettingsSection = ({
  section,
  activeItemId,
  onItemPress,
}: {
  section: SettingsSectionData;
  activeItemId: string;
  onItemPress: (item: SettingItemData) => void;
}) => (
  <div className="flex w-full flex-col gap-3">
    <TextScaled size="sm" className="font-semibold text-textNeutralV1">
      {section.mainTitle}
    </TextScaled>
    <div className="w-full space-y-1">
      {section.items.map((item) => (
        <SettingItem
          key={item.id}
          item={item}
          isActive={activeItemId === item.id}
          onClick={() => onItemPress(item)}
        />
      ))}
    </div>
  </div>
);

const PlaceholderCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-xl border border-dashed border-[#E5E5E5] bg-white px-6 py-12 text-center">
    <TextScaled size="lg" className="font-bold text-black">
      {title}
    </TextScaled>
    <TextScaled size="sm" className="mt-3 text-textNeutralV1">
      {description}
    </TextScaled>
  </div>
);

const SettingScreen = () => {
  const router = useRouter();

  const allItems = useMemo(
    () => settingsSections.flatMap((section) => section.items),
    [],
  );
  const [activeItemId, setActiveItemId] = useState<string>(
    allItems.find((item) => item.contentKey)?.id ?? allItems[0]?.id ?? "",
  );

  const sidebarContents: Record<SidebarContentKey, ReactNode> = {
    "edit-profile": (
      <EditProfileScreen
        showHeader={false}
      />
    ),
    premium: (
      <PremiumScreen
        showHeader={false}
      />
    ),
    security: (
      <SecurityScreen
        showHeader={false}
      />
    ),
  };

  const activeItem = allItems.find((item) => item.id === activeItemId);
  const activeContent =
    (activeItem?.contentKey && sidebarContents[activeItem.contentKey]) ?? (
      <PlaceholderCard
        title={activeItem?.title ?? "Cài đặt"}
        description={
          activeItem?.description ??
          "Chức năng này đang trong quá trình hoàn thiện. Vui lòng quay lại sau."
        }
      />
    );

  const handleItemPress = (item: SettingItemData) => {
    if (item.action === "logout") {
      router.replace("/sign-in");
      return;
    }

    if (item.href) {
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(item.href);
      }
      return;
    }

    setActiveItemId(item.id);
  };

  return (
    <div className="flex-1 bg-backgroundV1">
      <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-4 px-16 mt-4 items-stretch">
        <aside className="w-full border-b border-[#F0F0F0] rounded-xl bg-white p-4">
          <div className="flex flex-col gap-8">
            {settingsSections.map((section) => (
              <SettingsSection
                key={section.id}
                section={section}
                activeItemId={activeItemId}
                onItemPress={handleItemPress}
              />
            ))}
          </div>
        </aside>
        <main className="flex-1">
        {activeContent}
        </main>
      </div>
    </div>
  );
};

export default SettingScreen;
