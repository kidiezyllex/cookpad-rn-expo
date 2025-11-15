import MessagesTab from '@/components/BellScreen/MessagesTab';
import NotificationTab from '@/components/BellScreen/NotificationTab';
import { useState } from 'react';

const MobileNotificationScreen = () => {
    const [activeTab, setActiveTab] = useState<'thong-bao' | 'tin-nhan'>('thong-bao');

    const handleTabChange = (tab: 'thong-bao' | 'tin-nhan') => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Tab Navigator section */}
            <div className="pb-2 flex-row items-center">
                <button
                    className={`w-1/2 flex justify-center items-center min-h-[38px] h-[38px] border-b-2 ${
                        activeTab === 'thong-bao' ? 'border-[#E36137]' : 'border-transparent'
                    } bg-transparent border-none p-0 cursor-pointer`}
                    onClick={() => handleTabChange('thong-bao')}
                >
                    <span
                        className={`font-medium text-base ${
                            activeTab === 'thong-bao' ? 'text-[#E36137]' : 'text-[#979797]'
                        }`}
                    >
                        Thông báo
                    </span>
                </button>
                <button
                    className={`w-1/2 flex justify-center items-center min-h-[38px] h-[38px] border-b-2 ${
                        activeTab === 'tin-nhan' ? 'border-[#E36137]' : 'border-transparent'
                    } bg-transparent border-none p-0 cursor-pointer`}
                    onClick={() => handleTabChange('tin-nhan')}
                >
                    <span
                        className={`font-medium text-base ${
                            activeTab === 'tin-nhan' ? 'text-[#E36137]' : 'text-[#979797]'
                        }`}
                    >
                        Tin nhắn
                    </span>
                </button>
            </div>

            {/* Content của Thông báo */}
            <div className="flex-1 bg-[#EFECE6] mb-6">
                {activeTab === 'thong-bao' && <NotificationTab />}
                {activeTab === 'tin-nhan' && <MessagesTab />}
            </div>
        </div>
    );
};

export default MobileNotificationScreen;
