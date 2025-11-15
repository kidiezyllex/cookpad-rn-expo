'use client';

import { icons, images } from '@/constants';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import NotificationDropdown from '../BellScreen/Desktop/NotificationDropdown';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const navigationTabs = [
    {
      id: 'plus',
      icon: icons.plusIcon,
      activeIcon: icons.activePlusIcon,
      route: '/create',
      label: 'Tạo công thức',
    },
    {
      id: 'bell',
      icon: icons.bellIcon,
      activeIcon: icons.activeBellIcon,
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
    if (normalizedPath === '/create') return 'plus';
    if (normalizedPath === '/notification') return 'bell';
    if (normalizedPath === '/profile') return 'profile';
    if (normalizedPath.includes('/home')) return 'home';
    if (normalizedPath.includes('/search')) return 'search';
    if (normalizedPath.includes('/plus')) return 'plus';
    if (normalizedPath.includes('/notification')) return 'bell';
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
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={images.logo}
            alt="CookPad Logo"
            className="object-contain h-10 w-10 cursor-pointer"
            quality={100}
            draggable={false}
          />
          <p className="text-2xl cursor-pointer font-bold text-gray-600">Cook<span className='text-customPrimary'>Pad</span></p>
        </Link>
        {/* Search Field */}
        <Link href="/search" className="relative flex flex-col items-start justify-start">
          <div
            className="flex border w-96 border-gray-300 flex-row items-center justify-start rounded-lg bg-gray-50 h-10 px-2 gap-4 relative z-10"
          >
            <Image
              src={icons.searchIcon}
              alt="search"
              width={24}
              height={24}
            />
            <div
              className="flex flex-row items-center justify-start rounded bg-[rgba(239,68,68,0.2)] px-1 py-0.5 gap-0.5"
            >
              <Image
                src={icons.fireIcon}
                alt="hot"
                width={16}
                height={16}
              />
              <span
                className="font-medium text-red-500 text-sm"
              >
                Hot
              </span>
            </div>
            <input
              placeholder="Tìm kiếm..."
              className="text-sm font-medium text-black border-none outline-none flex-1 bg-transparent"
            />
          </div>
        </Link>
        {/* Navigation menu bên phải */}
        {/* <nav className="flex items-center gap-2">
          {navigationTabs.map((tab) => {
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabPress(tab.route)}
                className={`flex items-center justify-center gap-1 px-2 py-1 rounded-md transition-colors ${isTabActive ? 'bg-orange-50' : 'hover:bg-gray-50'
                  }`}
                aria-label={tab.label}
              >
                <Image
                  src={isTabActive ? tab.activeIcon : tab.icon}
                  alt={tab.label}
                  className="w-6 h-6"
                />
                <span
                  className={`font-medium text-base ${isTabActive ? 'text-orange-600' : 'text-gray-600'
                    }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav> */}

        {/* Navigation menu bên phải sau khi đăng nhập */}
        <nav className="flex items-center gap-2">
          {navigationTabs.map((tab) => {
            const isTabActive = activeTab === tab.id;
            return (
              tab.id === 'bell' ? (
                <DropdownMenu key={tab.id}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center h-8 w-8 justify-center rounded-md transition-colors bg-orange-50`}
                      aria-label={tab.label}
                    >
                      <Image
                        src={isTabActive ? tab.activeIcon : tab.icon}
                        alt={tab.label}
                        className="w-5 h-5 filter"
                        style={{ filter: 'invert(41%) sepia(63%) saturate(1216%) hue-rotate(345deg) brightness(96%) contrast(92%)' }}
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[400px] p-0 overflow-y-auto">
                    <NotificationDropdown />
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  key={tab.id}
                  onClick={() => handleTabPress(tab.route || '')}
                  className={`flex items-center h-8 w-8 justify-center rounded-md transition-colors bg-orange-50`}
                  aria-label={tab.label}
                >
                  <Image
                    src={isTabActive ? tab.activeIcon : tab.icon}
                    alt={tab.label}
                    className="w-5 h-5 filter"
                    style={{ filter: 'invert(41%) sepia(63%) saturate(1216%) hue-rotate(345deg) brightness(96%) contrast(92%)' }}
                  />
                </button>
              )
            );
          })}
        </nav>
      </div>
    </header>
  );
}
