import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroSection from '../HomeScreen/HeroSection';
import InspirationTab from '../HomeScreen/InspirationTab';
import KitchenTab from '../HomeScreen/KitchenTab';
import { postsData, suggestedFriendsData } from '../HomeScreen/mockData';

const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState<'ban-bep' | 'cam-hung'>('ban-bep');

    return (
        <SafeAreaView className="flex-1" edges={['bottom', 'left', 'right']}>
            <ScrollView
                className='bg-backgroundV1'
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
