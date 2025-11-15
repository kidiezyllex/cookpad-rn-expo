import { icons, images, videos } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

const mockSteps = [
  {
    id: 1,
    stepNumber: '✓',
    title: 'Chuẩn bị gà',
    description: 'Đặt gà vào một tô lớn, rồi thoa đều dầu ăn, muối và tiêu đen lên mỗi miếng gà. Massage nhẹ nhàng để gia vị thấm đều. Để gà ủ trong tủ lạnh ít nhất 1 giờ hoặc qua đêm cho gia vị ngấm vào thịt.',
    isCompleted: true,
    showLine: true,
    images: [images.sampleFood1, images.sampleFood2, images.sampleFood3],
  },
  {
    id: 2,
    stepNumber: '2',
    title: 'Chuẩn bị sốt tiêu đen',
    description: 'Trong một chảo nhỏ, đun nóng dầu ăn, sau đó thêm tỏi băm vào và chiên cho đến khi thơm.\n\nTiếp theo, thêm nước mắm, đường nâu, nước cốt chanh, và tiêu đen xay vào chảo. Đảo đều các thành phần cho đến khi đường tan hết và sốt sệt lại. Sau đó, tắt bếp và để sốt nguội.',
    isCompleted: false,
    showLine: true,
    images: [images.sampleFood1, images.sampleFood2],
  },
  {
    id: 3,
    stepNumber: '3',
    title: 'Nướng gà',
    description: 'Trước khi nướng, hâm nóng lò nướng ở nhiệt độ 180-200 độ C.\n\nĐặt miếng gà đã ủ trên khay nướng, nướng trong lò khoảng 30-40 phút hoặc cho đến khi gà chín và vàng đều hai mặt. Trong quá trình nướng, có thể lật gà một lần để đảm bảo nướng đều.',
    isCompleted: false,
    showLine: true,
    images: [images.sampleFood1],
  },
  {
    id: 4,
    stepNumber: '4',
    title: 'Hoàn thành',
    description: 'Khi gà đã chín vàng đều, đặt lên dĩa và rưới sốt tiêu đen lên trên. Bạn cũng có thể dùng sốt để tráng gà trước khi nướng cuối cùng khoảng 5-10 phút.\n\nThưởng thức gà nướng tiêu đen nóng hổi cùng với cơm trắng, salad hoặc một loại rau sống theo sở thích.\n',
    isCompleted: false,
    showLine: false,
    images: [images.sampleFood1, images.sampleFood2],
  },
];

const ViewVideoScreen = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scaleFactor = useMemo(() => getScaleFactor(), []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = false;
    }
  }, []);

  const renderStepItem = (item: typeof mockSteps[0], index: number) => {
    return (
      <div
        className="flex flex-row"
        style={{
          gap: scaleFactor * 24,
          paddingLeft: scaleFactor * 12,
          paddingRight: scaleFactor * 12,
          paddingTop: index === 0 ? scaleFactor * 24 : 0,
          paddingBottom: index === mockSteps.length - 1 ? scaleFactor * 16 : scaleFactor * 8,
        }}
      >
        {/* Step Number with Line */}
        <div className="flex flex-col items-center" style={{ gap: scaleFactor * 4 }}>
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: scaleFactor * 24,
              height: scaleFactor * 24,
              backgroundColor: item.isCompleted ? '#E36137' : '#9CA3AF',
            }}
          >
            {item.isCompleted ? (
              <Image
                src={icons.check2Icon}
                alt="Completed"
                width={100}
                height={100}
                quality={100}
                draggable={false}
                className="object-contain h-4 w-auto brightness-0 invert"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            ) : (
              <span className="text-[#EEEEEE]" style={{ fontSize: scaleFactor * 14 }}>
                {item.stepNumber}
              </span>
            )}
          </div>
          {item.showLine && index < mockSteps.length - 1 && (
            <div
              className="flex-1"
              style={{
                width: scaleFactor * 1,
                backgroundColor: item.isCompleted ? '#E36137' : '#9CA3AF',
              }}
            />
          )}
        </div>

        {/* Step Content */}
        <div className="flex-1 flex flex-col" style={{ gap: scaleFactor * 16 }}>
          <div className="flex flex-col" style={{ gap: scaleFactor * 8 }}>
            <span
              className="text-sm"
              style={{
                color: item.isCompleted ? '#E36137' : '#9CA3AF',
                fontSize: scaleFactor * 14
              }}
            >
              {item.title}
            </span>
            <span
              className="text-sm whitespace-pre-line"
              style={{
                color: item.isCompleted ? '#EEEEEE' : '#595959',
                fontSize: scaleFactor * 14
              }}
            >
              {item.description}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-backgroundV1">
      <div className="flex flex-row h-screen">
        {/* Video Section */}
        <div className="flex-[2] flex justify-end items-end">
          <div className="relative w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full bg-black object-contain"
              controls
              playsInline
            >
              <source src={videos.videoTutorial} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Steps List */}
        <div
          className="flex-1 bg-[#2D2D2D] overflow-y-auto"
        >
          <Swiper
            direction="vertical"
            slidesPerView="auto"
            freeMode={true}
            modules={[FreeMode]}
            className="h-full"
            style={{ height: '100%' }}
          >
            {mockSteps.map((item, index) => (
              <SwiperSlide key={item.id} style={{ height: 'auto' }}>
                {renderStepItem(item, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ViewVideoScreen;
