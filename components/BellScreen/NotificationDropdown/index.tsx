'use client';

import MessagesTab from '@/components/BellScreen/MessagesTab';
import NotificationTab from '@/components/BellScreen/NotificationTab';
import TextScaled from '@/components/Common/TextScaled';
import { useState } from 'react';

const NotificationDropdown = () => {
    const [activeTab, setActiveTab] = useState<'thong-bao' | 'tin-nhan'>('thong-bao');

    const handleTabChange = (tab: 'thong-bao' | 'tin-nhan') => {
        setActiveTab(tab);
    };

    return (
        <div className="flex min-h-dvh flex-1 bg-backgroundV1 w-[400px] max-w-[400px] overflow-y-auto overflow-x-hidden">
            <div className="w-full">
                {/* Tab Navigator section */}
                <div className='flex flex-row items-center pb-2 bg-white'>
                    <button
                        className={`w-1/2 items-center justify-center min-h-[40px] h-[40px] border-b-2 ${
                            activeTab === 'thong-bao' ? 'border-[#E36137]' : 'border-transparent'
                        }`}
                        onClick={() => handleTabChange('thong-bao')}
                    >
                        <TextScaled
                            size="base"
                            className={`font-medium ${
                                activeTab === 'thong-bao' ? 'text-[#E36137]' : 'text-[#979797]'
                            }`}
                        >
                            Thông báo
                        </TextScaled>
                    </button>
                    <button
                        className={`w-1/2 items-center justify-center min-h-[40px] h-[40px] border-b-2 ${
                            activeTab === 'tin-nhan' ? 'border-[#E36137]' : 'border-transparent'
                        }`}
                        onClick={() => handleTabChange('tin-nhan')}
                    >
                        <TextScaled
                            size="base"
                            className={`font-medium ${
                                activeTab === 'tin-nhan' ? 'text-[#E36137]' : 'text-[#979797]'
                            }`}
                        >
                            Tin nhắn
                        </TextScaled>
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#EFECE6]">
                    {activeTab === 'thong-bao' && <NotificationTab />}
                    {activeTab === 'tin-nhan' && <MessagesTab />}
                </div>
            </div>
        </div>
    );
};

export default NotificationDropdown;