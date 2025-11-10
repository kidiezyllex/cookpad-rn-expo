'use client';

import TextScaled from '@/components/Common/TextScaled';
import { useSuccessStore } from '@/store/successStore';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper/types';
import 'swiper/css';

const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

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

const progressWidths = [33.33, 66.66, 100];

const FavoriteTopicScreen = () => {
  const router = useRouter();
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selections, setSelections] = useState<(string | null)[]>([null, null, null]);
  const { setSuccess } = useSuccessStore();

  const handleSelectOption = (slideIndex: number, value: string) => {
    const updated = [...selections];
    updated[slideIndex] = value;
    setSelections(updated);

    const isLastSlide = slideIndex === slides.length - 1;
    if (isLastSlide) {
      setSuccess(
        'Bạn đã hoàn thành các câu hỏi!',
        'Tuyệt vời! Lựa chọn của bạn đã được ghi nhận. Chúng tôi sẽ cá nhân hoá gợi ý món ăn phù hợp nhất với khẩu vị của bạn.',
        '/(root)/tabs/home'
      );
      router.replace('/auth/register-success');
    } else {
      const nextIndex = slideIndex + 1;

      setActiveIndex(nextIndex);
      swiperRef.current?.slideTo(nextIndex);
    }
  };

  const handleSkip = () => {
    router.replace("/(root)/tabs/home");
  };

  return (
    <div
      className="flex min-h-dvh bg-backgroundV1 px-4"
    >
      <div className="flex-1">
        {/* Progress bar */}
        <div
          className={`rounded-full bg-[#FFEFE9] h-1 mt-6 mb-12 w-[${screenWidth - 32}px]`}
        >
          <div
            className={`rounded-full bg-customPrimary h-1 w-[${progressWidths[activeIndex]}%]`}
          />
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(s: SwiperInstance) => (swiperRef.current = s)}
          onSlideChange={(s: SwiperInstance) => setActiveIndex(s.activeIndex)}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
                <div className={`w-[${screenWidth - 34}px]`}>
                  <TextScaled
                  className="font-bold text-start text-black min-h-[60px] mb-8 text-[22px]"
                >
                  {item.title}
                </TextScaled>

                <div
                  className="flex flex-col gap-2 w-full"
                >
                  {item.options.map((option: string) => (
                    <button
                      key={option}
                      className={`w-full px-8 py-3 rounded-lg shadow-[0px_3px_12px_rgba(0,0,0,0.10)] text-left ${
                        selections[index] === option ? 'bg-[#E36137]' : 'bg-white'
                      }`}
                      onClick={() => handleSelectOption(index, option)}
                    >
                      <TextScaled
                        size="base"
                        className={`font-bold text-start ${
                          selections[index] === option ? 'text-white' : 'text-customPrimary'
                        }`}
                      >
                        {option}
                      </TextScaled>
                    </button>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom helper */}
      <div className="w-full mb-4">
        <TextScaled
          className="mb-2 text-center font-light text-black"
          size="sm"
        >
          * Chọn đáp án về chủ đề món ăn bạn ưa thích để nhận được các đề xuất phù hợp với bạn.
        </TextScaled>
        <button
          className="min-h-[48px] flex items-center justify-center w-full"
          onClick={handleSkip}
        >
          <TextScaled
            size="base"
            className="text-center font-bold text-black"
          >
            Bỏ qua
          </TextScaled>
        </button>
      </div>
    </div>
  );
};

export default FavoriteTopicScreen;