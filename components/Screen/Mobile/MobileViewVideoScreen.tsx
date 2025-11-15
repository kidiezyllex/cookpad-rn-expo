'use client';

import { icons, images, videos } from '@/constants';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

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

const MobileViewVideoScreen = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Force landscape layout by rotating container when in portrait
  useEffect(() => {
    const handleOrientation = () => {
      const isPortrait = window.innerHeight > window.innerWidth;

      if (containerRef.current) {
        if (isPortrait) {
          // Portrait mode - rotate 90deg to show landscape UI
          const width = window.innerWidth;
          const height = window.innerHeight;

          // Hide body overflow
          document.body.style.overflow = 'hidden';
          document.documentElement.style.overflow = 'hidden';

          containerRef.current.style.transform = 'rotate(90deg)';
          containerRef.current.style.transformOrigin = 'center center';
          containerRef.current.style.width = `${height}px`;
          containerRef.current.style.height = `${width}px`;
          containerRef.current.style.position = 'fixed';
          containerRef.current.style.left = '50%';
          containerRef.current.style.top = '50%';
          containerRef.current.style.marginLeft = `${-height / 2}px`;
          containerRef.current.style.marginTop = `${-width / 2}px`;
        } else {
          // Landscape mode - normal display
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';

          containerRef.current.style.transform = '';
          containerRef.current.style.width = '';
          containerRef.current.style.height = '';
          containerRef.current.style.position = '';
          containerRef.current.style.left = '';
          containerRef.current.style.top = '';
          containerRef.current.style.marginLeft = '';
          containerRef.current.style.marginTop = '';
        }
      }
    };

    // Initial check
    handleOrientation();

    // Listen for orientation changes
    window.addEventListener('resize', handleOrientation);
    window.addEventListener('orientationchange', handleOrientation);

    return () => {
      window.removeEventListener('resize', handleOrientation);
      window.removeEventListener('orientationchange', handleOrientation);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = false;
    }
  }, []);

  const renderStepItem = (item: typeof mockSteps[0], index: number) => {
    const isFirstItem = index === 0;
    const isLastItem = index === mockSteps.length - 1;

    return (
      <div
        className={`flex flex-row gap-6 px-3 ${isFirstItem ? 'pt-6' : 'pt-0'} ${isLastItem ? 'pb-4' : 'pb-2'}`}
      >
        {/* Step Number with Line */}
        <div className="flex flex-col items-center gap-1">
          <div
            className={`flex items-center justify-center rounded-full w-6 h-6 ${item.isCompleted ? 'bg-customPrimary' : 'bg-gray-400'
              }`}
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
              />
            ) : (
              <span className="text-[#EEEEEE] text-sm">
                {item.stepNumber}
              </span>
            )}
          </div>
          {item.showLine && index < mockSteps.length - 1 && (
            <div
              className={`flex-1 w-px ${item.isCompleted ? 'bg-customPrimary' : 'bg-gray-400'
                }`}
            />
          )}
        </div>

        {/* Step Content */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span
              className={`text-sm ${item.isCompleted ? 'text-customPrimary' : 'text-gray-400'
                }`}
            >
              {item.title}
            </span>
            <span
              className={`text-sm whitespace-pre-line ${item.isCompleted ? 'text-[#EEEEEE]' : 'text-[#595959]'
                }`}
            >
              {item.description}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="flex flex-row overflow-hidden h-screen">
      {/* Video Section */}
      <div className="flex-[2] flex justify-end items-end overflow-hidden">
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
      <div className="flex-1 bg-[#2D2D2D] overflow-y-auto scroll-smooth">
        <div className="h-full">
          {mockSteps.map((item, index) => (
            <div key={item.id}>
              {renderStepItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileViewVideoScreen;
