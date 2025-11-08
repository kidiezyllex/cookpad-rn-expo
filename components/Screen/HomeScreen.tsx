'use client';

import { useState } from 'react';
import HeroSection from '../HomeScreen/HeroSection';
import InspirationTab from '../HomeScreen/InspirationTab';
import KitchenTab from '../HomeScreen/KitchenTab';
import { postsData, suggestedFriendsData } from '../HomeScreen/mockData';

const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState<'ban-bep' | 'cam-hung'>('ban-bep');

    return (
        <div className="flex-1 bg-transparent">
            <div className='bg-backgroundV1'>
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
        </div>
    );
};

export default HomeScreen;
