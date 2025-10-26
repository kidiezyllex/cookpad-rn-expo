import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { FlatList, Image, TextInput, TouchableOpacity, View } from 'react-native';

interface MessageItem {
  id: string;
  userName: string;
  message: string;
  unreadCount?: number;
  hasNotificationDot?: boolean;
}

interface MessageSection {
  id: string;
  title: string;
  messages: MessageItem[];
}

const messagesData: MessageSection[] = [
  {
    id: '1',
    title: 'Bạn bếp',
    messages: [
      {
        id: '1',
        userName: 'Otaku Lê',
        message: 'Bạn ơi rep ib mình với',
        unreadCount: 2,
        
      },
      {
        id: '2',
        userName: 'Nobita',
        message: 'M chế ra món đell gì vậy?',
        unreadCount: 99,
        
      },
      {
        id: '3',
        userName: 'Wibu Chúa',
        message: 'Lô cc',
        unreadCount: 3,
        
      },
      {
        id: '4',
        userName: 'Mun Ngáo',
        message: 'Hello my dinner',
        unreadCount: 5,
        
      },
      {
        id: '5',
        userName: 'Bạn bếp 1',
        message: 'Hello my dinner',
        unreadCount: 12,
        
      },
      {
        id: '6',
        userName: 'Bạn bếp 2',
        message: 'Hello my dinner',
        unreadCount: 15,
        
      },
      {
        id: '7',
        userName: 'Bạn bếp 3',
        message: 'Hello my dinner',
        unreadCount: 1,
        
      },
    ],
  },
  {
    id: '2',
    title: 'Người lạ',
    messages: [
      {
        id: '8',
        userName: 'Bạn lạ 1',
        message: 'Bạn ơi rep ib mình với',
        hasNotificationDot: true,
        
      },
      {
        id: '9',
        userName: 'Bạn lạ 2',
        message: 'Bạn ơi rep ib mình với',
        hasNotificationDot: true,
        
      },
      {
        id: '10',
        userName: 'Bạn lạ 3',
        message: 'Bạn ơi rep ib mình với',
        hasNotificationDot: true,
        
      },
    ],
  },
];

const MessageItem = ({ item }: { item: MessageItem }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: getScaleFactor() * 40,
      }}
    >
      <View style={{ width: getScaleFactor() * 40, height: getScaleFactor() * 40, marginRight: getScaleFactor() * 12 }}>
        <Image
          source={images.sampleAvatar}
          style={{
            width: getScaleFactor() * 40,
            height: getScaleFactor() * 40,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: '#E36137',
          }}
          resizeMode="cover"
        />
      </View>
      
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flex: 1, gap: getScaleFactor() * 4 }}>
          <TextScaled size="sm" className="text-black font-medium">
            {item.userName}
          </TextScaled>
          <TextScaled
            size="xs"
            className="text-gray-600"
            numberOfLines={1}
            style={{
              fontSize: getScaleFactor() * 12,
              lineHeight: getScaleFactor() * 16,
            }}
          >
            {item.message}
          </TextScaled>
        </View>
        
        {item.unreadCount ? (
          <View
            style={{
              minWidth: getScaleFactor() * 20,
              height: getScaleFactor() * 20,
              backgroundColor: '#E36137',
              borderRadius: getScaleFactor() * 10,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: getScaleFactor() * 8,
            }}
          >
            <TextScaled size="xs" className="text-white font-semibold">
              {item.unreadCount > 99 ? '99+' : item.unreadCount}
            </TextScaled>
          </View>
        ) : item.hasNotificationDot ? (
          <View
            style={{
              width: getScaleFactor() * 12,
              height: getScaleFactor() * 12,
              backgroundColor: '#E36137',
              borderRadius: 100,
            }}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const MessagesTab = () => {
  const renderMessageSection = ({ item }: { item: MessageSection }) => (
    <View
      style={{
        paddingHorizontal: getScaleFactor() * 16,
        paddingVertical: getScaleFactor() * 16,
        marginTop: getScaleFactor() * 8,
        backgroundColor: 'white',
      }}
    >
      <TextScaled size="base" className="text-black font-bold">
        {item.title}
      </TextScaled>
      <View style={{ marginTop: getScaleFactor() * 12 }}>
        {item.messages.map((messageItem, index) => (
          <View key={messageItem.id} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: getScaleFactor() * 8 }}>
            <MessageItem item={messageItem} />
            {index < item.messages.length - 1 && (
              <View
                style={{
                  height: getScaleFactor() * 1,
                  backgroundColor: '#F3F4F6',
                  marginLeft: getScaleFactor() * 56,
                }}
              />
            )}
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Search Bar */}
      <View
        style={{
          paddingHorizontal: getScaleFactor() * 16,
          paddingVertical: getScaleFactor() * 8,
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            height: getScaleFactor() * 40,
            paddingHorizontal: getScaleFactor() * 12,
            backgroundColor: '#F3F4F6',
            borderRadius: getScaleFactor() * 8,
            flexDirection: 'row',
            alignItems: 'center',
            gap: getScaleFactor() * 12,
          }}
        >
          <Image
            source={icons.searchIcon}
            style={{
              width: getScaleFactor() * 20,
              height: getScaleFactor() * 20,
              tintColor: '#6B7280',
            }}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Tìm kiếm"
            placeholderTextColor="#6B7280"
            style={{
              flex: 1,
              fontSize: getScaleFactor() * 14,
              color: '#1F2937',
              paddingVertical: 0,
            }}
          />
        </View>
      </View>
      
      {/* Messages Content */}
      <FlatList
        data={messagesData}
        renderItem={renderMessageSection}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: '#F1EEE8',
        }}
      />
    </View>
  );
};

export default MessagesTab;
