import MessagesTab from '@/components/BellScreen/MessagesTab';
import NotificationTab from '@/components/BellScreen/NotificationTab';
import TextScaled from '@/components/Common/TextScaled';
import { getScaleFactor } from '@/lib/scaling';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationScreen = () => {
    const [activeTab, setActiveTab] = useState<'thong-bao' | 'tin-nhan'>('thong-bao');

    const handleTabChange = (tab: 'thong-bao' | 'tin-nhan') => {
        setActiveTab(tab);
    };

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['bottom', 'left', 'right']}>
            {/* Tab Navigator section */}
            <View style={{ paddingBottom: getScaleFactor() * 8 }} className='flex-row items-center'>
                <Pressable
                    style={{
                        minHeight: getScaleFactor() * 38,
                        height: getScaleFactor() * 38,
                        borderBottomWidth: getScaleFactor() * 2,
                        borderBottomColor: activeTab === 'thong-bao' ? '#E36137' : 'transparent',
                    }}
                    className="w-[50%] justify-center items-center"
                    onPress={() => handleTabChange('thong-bao')}
                >
                    <TextScaled
                        size="base"
                        style={{
                            color: activeTab === 'thong-bao' ? '#E36137' : '#979797',
                        }}
                        className="font-medium"
                    >
                        Thông báo
                    </TextScaled>
                </Pressable>
                <Pressable
                    style={{
                        minHeight: getScaleFactor() * 38,
                        height: getScaleFactor() * 38,
                        borderBottomWidth: getScaleFactor() * 2,
                        borderBottomColor: activeTab === 'tin-nhan' ? '#E36137' : 'transparent',
                    }}
                    className="w-[50%] justify-center items-center"
                    onPress={() => handleTabChange('tin-nhan')}
                >
                    <TextScaled
                        size="base"
                        style={{
                            color: activeTab === 'tin-nhan' ? '#E36137' : '#979797',
                        }}
                        className="font-medium"
                    >
                        Tin nhắn
                    </TextScaled>
                </Pressable>
            </View>

            {/* Content của Thông báo */}
            <View style={{ flex: 1, backgroundColor: '#EFECE6', marginBottom: getScaleFactor() * 24 }}>
            {activeTab === 'thong-bao' && <NotificationTab />}
            {activeTab === 'tin-nhan' && <MessagesTab />}
            </View>
        </SafeAreaView>
    );
};

export default NotificationScreen;