import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { usePathname, useRouter } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTabTrigger from './CustomTabTrigger';

const navigationTabs = [
  {
    id: "home",
    icon: icons.homeIcon,
    activeIcon: icons.activeHomeIcon,
    route: "/(root)/tabs/home",
    size: getScaleFactor() * 24
  },
  {
    id: "search",
    icon: icons.searchIcon,
    activeIcon: icons.activeSearchIcon,
    route: "/(root)/tabs/search",
    size: getScaleFactor() * 24
  },
  {
    id: "plus",
    icon: icons.plusIcon,
    activeIcon: icons.activePlusIcon,
    route: "/(root)/tabs/plus",
    size: getScaleFactor() * 24
  },
  {
    id: "bell",
    icon: icons.bellIcon,
    activeIcon: icons.activeBellIcon,
    route: "/(root)/tabs/bell",
    size: getScaleFactor() * 24
  },
  {
    id: "profile",
    icon: icons.userIcon,
    activeIcon: icons.activeUserIcon,
    route: "/(root)/tabs/profile",
    size: getScaleFactor() * 24
  }
];

export default function TabBarWrapper() {
  const pathname = usePathname();
  const router = useRouter();
  const getActiveTab = () => {
    // Normalize pathname and handle different path formats
    const normalizedPath = pathname.replace(/\/$/, '') || '/';
    
    // Check for exact matches first
    if (normalizedPath === "/(root)/tabs/home" || normalizedPath === "/(root)/tabs" || normalizedPath === "/") return "home";
    if (normalizedPath === "/(root)/tabs/search") return "search";
    if (normalizedPath === "/(root)/tabs/plus") return "plus";
    if (normalizedPath === "/(root)/tabs/bell") return "bell";
    if (normalizedPath === "/(root)/tabs/profile") return "profile";
    
    // Check for partial matches (in case pathname format is different)
    if (normalizedPath.includes('/home')) return "home";
    if (normalizedPath.includes('/search')) return "search";
    if (normalizedPath.includes('/plus')) return "plus";
    if (normalizedPath.includes('/bell')) return "bell";
    if (normalizedPath.includes('/profile')) return "profile";
    
    return "home";
  };

  const activeTab = getActiveTab();
  
  const handleTabPress = (route: string) => {
    router.push(route as any);
  };

  return (
    <SafeAreaView 
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      }}
      edges={['bottom']}
    >
      <View style={{
        backgroundColor: 'white',
        height: getScaleFactor() * 56,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        margin: 0,
        padding: 0,
        paddingHorizontal: getScaleFactor() * 8,
      }}>
        {navigationTabs.map((tab) => {
          const isTabActive = activeTab === tab.id;
          return (
            <CustomTabTrigger
              key={tab.id}
              isActive={isTabActive}
              onPress={() => handleTabPress(tab.route)}
              icon={tab.icon}
              activeIcon={tab.activeIcon}
              iconSize={tab.size}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}
