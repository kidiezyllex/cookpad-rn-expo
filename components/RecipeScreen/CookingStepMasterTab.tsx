import React from 'react';
import TextScaled from '@/components/Common/TextScaled';
import { icons, images, videos } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const mockSteps = [
  {
    id: 1,
    stepNumber: '✓',
    title: 'Chuẩn bị gà',
    description:
      'Đặt gà vào một tô lớn, rồi thoa đều dầu ăn, muối và tiêu đen lên mỗi miếng gà. Massage nhẹ nhàng để gia vị thấm đều. Để gà ủ trong tủ lạnh ít nhất 1 giờ hoặc qua đêm cho gia vị ngấm vào thịt.',
    isCompleted: true,
    showLine: true,
    images: [images.sampleFood1, images.sampleFood2, images.sampleFood3],
  },
  {
    id: 2,
    stepNumber: '2',
    title: 'Chuẩn bị sốt tiêu đen',
    description:
      'Trong một chảo nhỏ, đun nóng dầu ăn, sau đó thêm tỏi băm vào và chiên cho đến khi thơm.\n\nTiếp theo, thêm nước mắm, đường nâu, nước cốt chanh, và tiêu đen xay vào chảo. Đảo đều các thành phần cho đến khi đường tan hết và sốt sệt lại. Sau đó, tắt bếp và để sốt nguội.',
    isCompleted: false,
    showLine: true,
    images: [images.sampleFood1, images.sampleFood2],
  },
  {
    id: 3,
    stepNumber: '3',
    title: 'Nướng gà',
    description:
      'Trước khi nướng, hâm nóng lò nướng ở nhiệt độ 180-200 độ C.\n\nĐặt miếng gà đã ủ trên khay nướng, nướng trong lò khoảng 30-40 phút hoặc cho đến khi gà chín và vàng đều hai mặt. Trong quá trình nướng, có thể lật gà một lần để đảm bảo nướng đều.',
    isCompleted: false,
    showLine: true,
    images: [images.sampleFood1],
  },
  {
    id: 4,
    stepNumber: '4',
    title: 'Hoàn thành',
    description:
      'Khi gà đã chín vàng đều, đặt lên dĩa và rưới sốt tiêu đen lên trên. Bạn cũng có thể dùng sốt để tráng gà trước khi nướng cuối cùng khoảng 5-10 phút.\n\nThưởng thức gà nướng tiêu đen nóng hổi cùng với cơm trắng, salad hoặc một loại rau sống theo sở thích.\n',
    isCompleted: false,
    showLine: false,
    images: [images.sampleFood1, images.sampleFood2],
  },
];

interface CookingStepMasterTabProps {
  onBackPress?: () => void;
}

const CookingStepMasterTab: React.FC<CookingStepMasterTabProps> = () => {
  const router = useRouter();

  return (
    <div className="h-full overflow-y-auto pb-32">
      {/* Xem video hướng dẫn */}
      <div className="px-4 pt-2 bg-gray-800 pb-4 mt-4">
        <div className="flex items-center gap-2 mb-2">
          <Image src={icons.chefIcon} alt="chef" width={24} height={24} className="w-6 h-6" />
          <TextScaled size="base" className="font-bold text-orange-500">
            Xem video hướng dẫn
          </TextScaled>
        </div>

        <div className="relative w-full h-48 bg-black/40 rounded-lg flex items-center justify-center">
          <button
            type="button"
            className="absolute z-10 top-1/2 left-1/2 -mt-7 -ml-7 w-14 h-14 rounded-full bg-[#F1EEE8] flex items-center justify-center shadow"
            onClick={() => router.push('/view-video')}
          >
            <Image src={icons.playIcon} alt="play" width={40} height={40} className="w-10 h-10" />
          </button>

          <video
            className="absolute inset-0 w-full h-full rounded-lg object-cover"
            src={videos.videoTutorial as unknown as string}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        </div>
      </div>

      <div className="pt-4 px-4 space-y-4">
        {/* Cooking Steps */}
        <div className="space-y-2">
          {mockSteps.map((step, index) => (
            <div key={step.id} className="flex gap-4">
              {/* Step Number with Line */}
              <div className="flex flex-col items-center pb-1 gap-1">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    step.isCompleted ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                >
                  {step.isCompleted ? (
                    <Image src={icons.check2Icon} alt="done" width={16} height={16} className="w-4 h-4" />
                  ) : (
                    <TextScaled size="sm" className="text-white">
                      {step.stepNumber}
                    </TextScaled>
                  )}
                </div>
                {step.showLine && index < mockSteps.length - 1 && (
                  <div className={`w-0.5 flex-1 ${step.isCompleted ? 'bg-orange-500' : 'bg-gray-200'}`} />
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1 space-y-2 pb-4">
                <div className="space-y-1">
                  <TextScaled size="base" className={`font-bold ${step.isCompleted ? 'text-orange-500' : 'text-black'}`}>
                    {step.title}
                  </TextScaled>
                  <TextScaled size="base" className={`${step.isCompleted ? 'text-black' : 'text-gray-600'}`}>
                    {step.description}
                  </TextScaled>
                </div>

                {/* Images Content */}
                {step.images && step.images.length > 0 && (
                  <div className="flex flex-row gap-2">
                    {step.images.map((imgSrc, imageIndex) => (
                      <Image
                        key={imageIndex}
                        src={imgSrc}
                        alt={`step-${step.id}-img-${imageIndex}`}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-lg object-cover"
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
