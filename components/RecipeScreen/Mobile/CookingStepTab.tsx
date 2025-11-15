'use client';

import Image from 'next/image';
import CustomButton from '@/components/Common/CustomButton';
import { icons, images } from '@/constants';

// Mock data for cooking steps
const mockSteps = [
  {
    id: 1,
    stepNumber: '✓',
    title: 'Chuẩn bị gà',
    description: 'Đặt gà vào một tô lớn, rồi thoa đều dầu ăn, muối và tiêu đen lên mỗi miếng gà. Massage nhẹ nhàng để gia vị thấm đều. Để gà ủ trong tủ lạnh ít nhất 1 giờ hoặc qua đêm cho gia vị ngấm vào thịt.',
    isCompleted: true,
    showLine: true,
  },
  {
    id: 2,
    stepNumber: '2',
    title: 'Chuẩn bị sốt tiêu đen',
    description: 'Trong một chảo nhỏ, đun nóng dầu ăn, sau đó thêm tỏi băm vào và chiên cho đến khi thơm.\n\nTiếp theo, thêm nước mắm, đường nâu, nước cốt chanh, và tiêu đen xay vào chảo. Đảo đều các thành phần cho đến khi đường tan hết và sốt sệt lại. Sau đó, tắt bếp và để sốt nguội.',
    isCompleted: false,
    showLine: true,
  },
  {
    id: 3,
    stepNumber: '3',
    title: 'Nướng gà',
    description: 'Trước khi nướng, hâm nóng lò nướng ở nhiệt độ 180-200 độ C.\n\nĐặt miếng gà đã ủ trên khay nướng, nướng trong lò khoảng 30-40 phút hoặc cho đến khi gà chín và vàng đều hai mặt. Trong quá trình nướng, có thể lật gà một lần để đảm bảo nướng đều.',
    isCompleted: false,
    showLine: true,
  },
  {
    id: 4,
    stepNumber: '4',
    title: 'Hoàn thành',
    description: 'Khi gà đã chín vàng đều, đặt lên dĩa và rưới sốt tiêu đen lên trên. Bạn cũng có thể dùng sốt để tráng gà trước khi nướng cuối cùng khoảng 5-10 phút.\n\nThưởng thức gà nướng tiêu đen nóng hổi cùng với cơm trắng, salad hoặc một loại rau sống theo sở thích.\n',
    isCompleted: false,
    showLine: false,
  },
];

interface CookingStepTabProps {
  onMasterChefPress?: () => void;
}

const CookingStepTab = ({ onMasterChefPress }: CookingStepTabProps) => {
  return (
    <div className="overflow-y-auto px-4 pb-30">
      <div className="flex flex-col pt-4 gap-6">
        {/* Master Chef Banner */}
        <div className="bg-white rounded-lg p-4 gap-2 relative shadow-md">
          <Image
            src={images.onboarding1}
            alt="Onboarding"
            width={500} // Assuming a larger width for the banner
            height={138}
            quality={100}
            draggable={false}
            className="w-full h-auto object-contain"
          />
          <div className="flex flex-col gap-2">
            <span className="text-sm text-black">
              Xem công thức món ăn cùng ảnh và video hướng dẫn chi tiết với tính năng của{' '}
              <span className="text-sm text-customPrimary">
                Master Chef
              </span>
            </span>
            <CustomButton
              title="Đăng ký Master Chef"
              onClick={onMasterChefPress || (() => { })}
              bgVariant="primary"
              textVariant="primary"
              className="h-10"
            />
          </div>
          <button
            className="absolute top-2 right-2 rounded-full items-center justify-center w-6 h-6 bg-white/90"
          >
            <Image
              src={icons.closeIcon}
              alt="Close icon"
              width={100}
              height={100}
              quality={100}
              draggable={false}
              className="object-contain h-6 w-auto"
            />
          </button>
        </div>

        {/* Cooking Steps */}
        <div className="flex flex-col gap-2">
          {mockSteps.map((step, index) => (
            <div key={step.id} className="flex flex-row gap-4">
              {/* Step Number with Line */}
              <div className="items-center gap-1 pb-1">
                <div
                  className="rounded-full flex items-center justify-center w-6 h-6"
                  style={{ backgroundColor: step.isCompleted ? '#E36137' : '#D9D9DB' }}
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
                    <span className="text-sm text-white">
                      {step.stepNumber}
                    </span>
                  )}
                </div>
                {step.showLine && index < mockSteps.length - 1 && (
                  <div
                    className="flex-1 w-0.5"
                    style={{ backgroundColor: step.isCompleted ? '#E36137' : '#E5E7EB' }}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookingStepTab;
