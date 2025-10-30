import TextScaled from '@/components/Common/TextScaled';
import { getScaleFactor } from '@/lib/scaling';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwiperFlatList, { SwiperFlatList as SwiperFlatListType } from 'react-native-swiper-flatlist';

const { width: screenWidth } = Dimensions.get('window');

const slides = [
  {
    title: "Kĩ thuật nấu nướng của bạn hiện tại?",
    options: [
      "Không có kinh nghiệm",
      "Cơ bản",
      "Bình thường",
      "Thành thạo",
      "Chuyên nghiệp"
    ]
  },
  {
    title: "Các chế độ ăn mà bạn quan tâm?",
    options: [
      "Ăn lỏng", "Ít calo", "Giàu calo", "Ăn chay", "Giàu Protein", "Ăn thô", "Không ăn theo chế độ", "Khác"
    ]
  },
  {
    title: "Bạn muốn trải nghiệm văn hóa ẩm thực khu vực nào?",
    options: [
      "Châu Á", "Châu Âu", "Châu Mĩ", "Châu Phi", "Châu Đại Dương", "Châu Nam Cực"
    ]
  }
];

const progressWidths = [
  33.33,
  66.66,
  100,
];

const FavoriteTopicScreen = () => {
  const swiperRef = useRef<SwiperFlatListType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selections, setSelections] = useState<(string | null)[]>([null, null, null]);

  const handleSelectOption = (slideIdx: number, value: string) => {
    const updated = [...selections];
    updated[slideIdx] = value;
    setSelections(updated);
  };

  const handleSkip = () => {
    router.replace("/(root)/tabs/home");
  };

  return (
    <SafeAreaView
      className="flex h-full bg-backgroundV1"
      style={{ paddingHorizontal: getScaleFactor() * 16 }}
    >
      <View className="flex-1">
        {/* Progress bar */}
        <View
          className="rounded-full"
          style={{
            width: screenWidth - 32,
            height: getScaleFactor() * 4,
            marginTop: getScaleFactor() * 23,
            marginBottom: getScaleFactor() * 53,
            backgroundColor: '#FFEFE9',
          }}
        >
          <View
            className="rounded-full bg-customPrimary"
            style={{
              width: `${progressWidths[activeIndex]}%`,
              height: getScaleFactor() * 4,
            }}
          />
        </View>
        <SwiperFlatList
          ref={swiperRef}
          index={activeIndex}
          showPagination={false}
          onChangeIndex={({ index }) => setActiveIndex(index)}
          data={slides}
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={{ width: screenWidth - 34 }}
            >
              <TextScaled
                className="font-bold text-start text-black"
                style={{minHeight: getScaleFactor() * 60, marginBottom: getScaleFactor() * 32, fontSize: getScaleFactor() * 22}}
              >
                {item.title}
              </TextScaled>
              <View
                style={{
                  gap: getScaleFactor() * 8,
                  width: '100%',
                }}
              >
                {item.options.map((option: string) => (
                  <Pressable
                    key={option}
                    className="w-full"
                    onPress={() => handleSelectOption(index, option)}
                    style={{
                      width: '100%',
                      paddingHorizontal: getScaleFactor() * 32,
                      paddingVertical: getScaleFactor() * 12,
                      shadowColor: 'rgba(0,0,0,0.10)',
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 1,
                      shadowRadius: 12,
                      borderRadius: getScaleFactor() * 8,
                      elevation: 3,
                      backgroundColor: selections[index] === option ? '#E36137' : 'white',
                    }}
                  >
                    <TextScaled
                      size="base"
                      className={`font-bold text-start ${selections[index] === option ? 'text-white' : 'text-customPrimary'}`}
                    >
                      {option}
                    </TextScaled>
                  </Pressable>
                ))}
              </View>
            </View>
          )}
        />
      </View>
      {/* Bottom helper */}
      <View style={{ width: '100%', marginBottom: getScaleFactor() * 16 }}>
        <TextScaled
          style={{ marginBottom: getScaleFactor() * 8 }}
          size="sm"
          className="text-center font-light text-black"
        >
          * Chọn đáp án về chủ đề món ăn bạn ưa thích để nhận được các đề xuất phù hợp với bạn.
        </TextScaled>
        <Pressable
          style={{
            minHeight: getScaleFactor() * 48,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          onPress={handleSkip}
        >
          <TextScaled
            size="base"
            className="text-center font-bold text-black"
          >
            Bỏ qua
          </TextScaled>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default FavoriteTopicScreen;
