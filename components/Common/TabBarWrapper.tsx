import { icons } from '@/constants';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const navigationTabs = [
  {
    id: "home",
    icon: icons.homeIcon,
    activeIcon: icons.activeHomeIcon,
    route: "/(root)/tabs/home",
  },
  {
    id: "search",
    icon: icons.searchIcon,
    activeIcon: icons.activeSearchIcon,
    route: "/search",
  },
  {
    id: "plus",
    icon: icons.plusIcon,
    activeIcon: icons.activePlusIcon,
    route: "/create",
  },
  {
    id: "bell",
    icon: icons.bellIcon,
    activeIcon: icons.activeBellIcon,
    route: "/(root)/tabs/bell",
  },
  {
    id: "profile",
    icon: icons.userIcon,
    activeIcon: icons.activeUserIcon,
    route: "/(root)/tabs/profile",
  }
];

export default function TabBarWrapper() {
  const pathname = usePathname();
  const router = useRouter();
  const getActiveTab = () => {
    const normalizedPath = pathname.replace(/\/$/, '') || '/';
    if (normalizedPath === "/(root)/tabs/home" || normalizedPath === "/(root)/tabs" || normalizedPath === "/") return "home";
    if (normalizedPath === "/search") return "search";
    if (normalizedPath === "/create") return "plus";
    if (normalizedPath === "/(root)/tabs/bell") return "bell";
    if (normalizedPath === "/(root)/tabs/profile") return "profile";
    if (normalizedPath.includes('/home')) return "home";
    if (normalizedPath.includes('/search')) return "search";
    if (normalizedPath.includes('/plus')) return "plus";
    if (normalizedPath.includes('/bell')) return "bell";
    if (normalizedPath.includes('/profile')) return "profile";
    
    return "home";
  };

  const activeTab = getActiveTab();
  
  const handleTabPress = (route: string) => {
    router.push(route);
  };

  return (
    <div
      className="border-t border-gray-200 bg-white fixed bottom-0 left-0 right-0"
    >
      <div
        className="mx-auto flex w-full max-w-3xl items-center gap-1 px-2 h-14"
      >
        {navigationTabs.map((tab) => {
          const isTabActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabPress(tab.route)}
              className="flex flex-1 items-center justify-center"
              aria-label={tab.id}
            >
              <Image
                src={isTabActive ? tab.activeIcon : tab.icon}
                alt={tab.id}
                className="w-6 h-6"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
