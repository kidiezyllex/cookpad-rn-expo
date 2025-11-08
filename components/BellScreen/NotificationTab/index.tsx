import TextScaled from '@/components/Common/TextScaled';
import { notificationsData } from '../mockData';
import NotificationItem from './NotificationItem';

const NotificationTab = () => {
    return (
        <div className="flex-1 bg-[#F1EEE8]">
            {notificationsData.map((item) => (
                <div
                    key={item.id}
                    className="mt-2 bg-white"
                >
                    <div className="px-4 pt-2 pb-2">
                        <TextScaled size="base" className="font-bold text-black">
                            {item.title}
                        </TextScaled>
                        {item.notifications.map((notification, index) => (
                            <div key={notification.id}>
                                <NotificationItem item={notification} />
                                {index < item.notifications.length - 1 && (
                                    <div
                                        className="ml-[68px] h-px bg-[#F3F4F6]"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NotificationTab;
