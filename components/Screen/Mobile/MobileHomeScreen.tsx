import { useState } from 'react';
import { postsData, suggestedFriendsData } from '@/components/HomeScreen/mockData';
import KitchenTab from '@/components/HomeScreen/Mobile/KitchenTab';
import HeroSection from '@/components/HomeScreen/Mobile/HeroSection';
import InspirationTab from '@/components/HomeScreen/Mobile/InspirationTab';
import BottomNavigator from '@/components/Common/BottomNavigator';

const MobileHomeScreen = () => {
    const [activeTab, setActiveTab] = useState<'ban-bep' | 'cam-hung'>('ban-bep');
    return (
        <div className='bg-backgroundV1 w-full max-w-screen overflow-hidden pb-14'>
            <HeroSection
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            {activeTab === 'ban-bep' && (
                <KitchenTab
                    postsData={postsData}
                    suggestedFriendsData={suggestedFriendsData}
                />
            )}
            {activeTab === 'cam-hung' && <InspirationTab />}
            <BottomNavigator />
        </div>
    );
};

export default MobileHomeScreen;