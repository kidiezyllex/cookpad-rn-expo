import TabBarWrapper from '@/components/Common/TabBarWrapper';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' }, 
        }}
        tabBar={() => null}
      >
        <Tabs.Screen 
          name="home" 
          options={{
            title: 'Trang chủ',
          }}
        />
        <Tabs.Screen 
          name="search" 
          options={{
            title: 'Tìm kiếm',
          }}
        />
        <Tabs.Screen 
          name="plus" 
          options={{
            title: 'Thêm',
          }}
        />
        <Tabs.Screen 
          name="bell" 
          options={{
            title: 'Thông báo',
          }}
        />
        <Tabs.Screen 
          name="profile" 
          options={{
            title: 'Cá nhân',
          }}
        />
      </Tabs>
      <TabBarWrapper />
    </SafeAreaView>
  );
}