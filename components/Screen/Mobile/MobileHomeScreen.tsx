import { useState } from 'react';
import { postsData, suggestedFriendsData } from '@/components/HomeScreen/mockData';
import KitchenTab from '@/components/HomeScreen/Mobile/KitchenTab';
import HeroSection from '@/components/HomeScreen/Mobile/HeroSection';
import InspirationTab from '@/components/HomeScreen/Mobile/InspirationTab';

const MobileHomeScreen = () => {
    const [activeTab, setActiveTab] = useState<'ban-bep' | 'cam-hung'>('ban-bep');

    return (
        <div
            className='bg-backgroundV1 w-full max-w-screen overflow-hidden'
        >
            {/* Hero and Tab Navigator*/}
            <HeroSection
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            {/* Bàn bếp tab content */}
            {activeTab === 'ban-bep' && (
                <KitchenTab
                    postsData={postsData}
                    suggestedFriendsData={suggestedFriendsData}
                />
            )}

            {/* Cảm hứng tab content */}
            {activeTab === 'cam-hung' && <InspirationTab />}
        </div>
    );
};

export default MobileHomeScreen;