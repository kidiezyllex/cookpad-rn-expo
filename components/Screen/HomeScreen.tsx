import { images } from '@/constants';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroSection from '../HomeScreen/HeroSection';
import InspirationTab from '../HomeScreen/InspirationTab';
import KitchenTab from '../HomeScreen/KitchenTab';

// Mock data for posts
const postsData = [
    {
        id: '1',
        user: {
            name: 'Otaku Lê',
            timeAgo: '5 giờ'
        },
        content: {
            title: 'Gà nướng tiêu đen',
            description: 'Món tao chế trong lúc đi nvqs, Lorum lmao ipsum, florentino alpapad',
            hashtags: ['Gà nướng', 'Tiêu Đen', 'NCKD'],
            likes: 16,
            comments: 34,
            image: images.placeholder200
        },
        comments: [
            { user: 'Nobita', text: 'Vippro quá mày' },
            { user: 'Nobita', text: 'Mày cho tao đớp với để tao đỡ phải nấu chi cho mệt' }
        ]
    },
    {
        id: '2',
        user: {
            name: 'Nobita',
            timeAgo: '1 ngày'
        },
        content: {
            title: 'Sốt sò điệp với tôm',
            description: 'Món này mình ăn được một lần ở Quảng Ninh ngon quá nên tán a đầu bếp để có công thức cho mọi người này',
            hashtags: ['Sò điệp', 'Tôm', 'Bánh mì gạo lứt', 'Hải sản'],
            likes: 16,
            comments: 34,
            image: images.placeholder200
        },
        comments: [
            { user: 'Otaku Lê', text: 'Nsfdggdgdgdgergsgrsg' },
            { user: 'Bruh Lmao', text: 'njbhfbhfvdhvvbhbhfnnnjnnnnnbhbbbh' }
        ]
    },
    {
        id: '3',
        user: {
            name: 'Wibu Chúa',
            timeAgo: '2 ngày'
        },
        content: {
            title: 'Salad trứng gà',
            description: 'Ai muốn làm rau sạch trên đĩa của tao tối nay nào',
            hashtags: ['Món chay', 'Trứng', 'Bơ'],
            likes: 134,
            comments: 233,
            image: images.placeholder200
        },
        comments: [
            { user: 'Mun Ngáo', text: 'Trứng dở vcl đéo thèm ăn, công thức như ' },
            { user: 'Nobita', text: 'Nói tiếng người đi má' }
        ]
    }
];

// Mock data for suggested friends
const suggestedFriendsData = [
    {
        id: '1',
        name: 'Dũng Lại Lập Trình',
        commonFriends: 28,
        hashtag: 'Gà'
    },
    {
        id: '2',
        name: 'Chó Kem',
        commonFriends: 28,
        hashtag: 'Món chay'
    },
    {
        id: '3',
        name: 'Lilikama',
        commonFriends: 54,
        hashtag: 'Trứng'
    }
];

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
