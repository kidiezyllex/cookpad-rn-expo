'use client';

import { icons, images, videos } from '@/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

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

interface CookingStepMasterTabProps {
  onBackPress?: () => void;
}

const CookingStepMasterTab = ({ onBackPress }: CookingStepMasterTabProps) => {
  const router = useRouter();

  return (
    <div className="overflow-y-auto pb-30">
      {/* Xem video hướng dẫn */}
      <div className="px-4 pt-2 pb-4 bg-[#2D2D2D] mt-4">
        <div className="flex flex-row items-center gap-2 mb-2">
          <Image
            src={icons.chefIcon}
            alt="Chef icon"
            width={100}
            height={100}
            quality={100}
            draggable={false}
            className="object-contain h-6 w-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(47%) sepia(68%) saturate(1815%) hue-rotate(343deg) brightness(94%) contrast(87%)' }}
          />
          <span className="text-customPrimary font-bold text-base">
            Xem video hướng dẫn
          </span>
        </div>

        <div className="w-full flex justify-center items-center relative h-48">
          <Link
            href="/view-video"
            className="bg-backgroundV1 rounded-full flex justify-center items-center absolute z-10 w-[60px] h-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src={icons.playIcon}
              alt="Play icon"
              width={100}
              height={100}
              quality={100}
              draggable={false}
              className="object-contain h-10 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(47%) sepia(68%) saturate(1815%) hue-rotate(343deg) brightness(94%) contrast(87%)' }}
            />
          </Link>
          <video
            className="absolute w-full h-full rounded-lg bg-black/40"
            src={videos.videoTutorial}
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <div className="pt-4 px-4 gap-6">
        {/* Cooking Steps */}
        <div className="flex flex-col gap-2">
          {mockSteps.map((step, index) => (
            <div key={step.id} className="flex flex-row gap-4">
              {/* Step Number with Line */}
              <div className="items-center gap-1 pb-1">
                <div
                  className="rounded-full flex items-center justify-center w-6 h-6"
                  style={{
                    backgroundColor: step.isCompleted ? '#E36137' : '#D9D9DB',
                  }}
                >
                  {step.isCompleted ? (
                    <Image
                      src={icons.check2Icon}
                      alt="Check icon"
                      width={100}
                      height={100}
                      quality={100}
                      draggable={false}
                      className="object-contain h-4 w-auto brightness-0 invert"
                    />
                  ) : (
                    <span className="text-white text-sm">
                      {step.stepNumber}
                    </span>
                  )}
                </div>
                {step.showLine && index < mockSteps.length - 1 && (
                  <div
                    className="flex-1 w-0.5"
                    style={{
                      backgroundColor: step.isCompleted ? '#E36137' : '#E5E7EB',
                    }}
                  />
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1 gap-2 pb-4">
                <div className="flex flex-col gap-1">
                  <span className={`text-base ${step.isCompleted ? 'font-bold text-customPrimary' : 'font-bold text-black'}`}>
                    {step.title}
                  </span>
                  <span className={`text-base ${step.isCompleted ? 'text-black' : 'text-textNeutralV1'}`}>
                    {step.description}
                  </span>
                </div>

                {/* Images Content */}
                {step.images && step.images.length > 0 && (
                  <div className="flex flex-row gap-2">
                    {step.images.map((image, imageIndex) => (
                      <Image
                        key={imageIndex}
                        src={image}
                        alt={`Step ${step.id} image ${imageIndex + 1}`}
                        width={80}
                        height={80}
                        quality={100}
                        draggable={false}
                        className="rounded-lg object-cover w-20 h-20"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookingStepMasterTab;
