'use client';

import { icons, images } from '@/constants';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  
  const navigationTabs = [
    {
      id: 'home',
      icon: icons.homeIcon,
      activeIcon: icons.activeHomeIcon,
      route: '/',
      label: 'Trang chủ',
    },
    {
      id: 'search',
      icon: icons.searchIcon,
      activeIcon: icons.activeSearchIcon,
      route: '/search',
      label: 'Tìm kiếm',
    },
    {
      id: 'plus',
      icon: icons.plusIcon,
      activeIcon: icons.activePlusIcon,
      route: '/create',
      label: 'Thêm',
    },
    {
      id: 'bell',
      icon: icons.bellIcon,
      activeIcon: icons.activeBellIcon,
      route: '/(root)/tabs/bell',
      label: 'Thông báo',
    },
    {
      id: 'profile',
      icon: icons.userIcon,
      activeIcon: icons.activeUserIcon,
      route: '/auth/sign-in',
      label: 'Đăng nhập',
    }
  ];
  
  const getActiveTab = () => {
    const normalizedPath = pathname.replace(/\/$/, '') || '/';
    if (normalizedPath === '/' || normalizedPath === '/(root)/tabs/home' || normalizedPath === '/(root)/tabs') return 'home';
    if (normalizedPath === '/search') return 'search';
    if (normalizedPath === '/create') return 'plus';
    if (normalizedPath === '/(root)/tabs/bell') return 'bell';
    if (normalizedPath === '/(root)/tabs/profile') return 'profile';
    if (normalizedPath.includes('/home')) return 'home';
    if (normalizedPath.includes('/search')) return 'search';
    if (normalizedPath.includes('/plus')) return 'plus';
    if (normalizedPath.includes('/bell')) return 'bell';
    if (normalizedPath.includes('/profile')) return 'profile';
    
    return 'home';
  };

  const activeTab = getActiveTab();
  
  const handleTabPress = (route: string) => {
    router.push(route);
  };

  return (
    <header
      className="border-b border-gray-200 bg-white fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="mx-auto flex w-full items-center justify-between px-4 h-16"
      >
        {/* Logo bên trái */}
        <div className="flex items-center gap-2">
          <Image
            src={images.logo}
            alt="CookPad Logo"
            className="object-contain h-10 w-10 cursor-pointer"
            quality={100}
            draggable={false}
          />
          <p className="text-2xl cursor-pointer font-bold text-gray-600">Cook<span className='text-customPrimary'>Pad</span></p>
        </div>

        {/* Navigation menu bên phải */}
        <nav className="flex items-center gap-2">
          {navigationTabs.map((tab) => {
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabPress(tab.route)}
                className={`flex items-center justify-center gap-1 px-2 py-1 rounded-md transition-colors ${
                  isTabActive ? 'bg-orange-50' : 'hover:bg-gray-50'
                }`}
                aria-label={tab.label}
              >
                <Image
                  src={isTabActive ? tab.activeIcon : tab.icon}
                  alt={tab.label}
                  className="w-6 h-6"
                />
                <span
                  className={`font-medium text-base ${
                    isTabActive ? 'text-orange-600' : 'text-gray-600'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
