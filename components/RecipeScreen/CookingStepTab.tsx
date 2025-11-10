import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import Image from 'next/image';

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
    <div className="px-16">
      <div className="flex flex-col pt-4 gap-4">
        {/* Master Chef Banner */}
        <div
          className="bg-white rounded-lg p-4 gap-2 relative"
        >
          <div className="relative w-full h-[138px]">
            <Image src={images.onboarding1} alt="onboarding" fill className="object-contain" />
          </div>
          <div className="flex flex-col gap-2">
            <TextScaled size="sm" className="text-black">
              Xem công thức món ăn cùng ảnh và video hướng dẫn chi tiết với tính năng của{' '}
              <TextScaled size="sm" className="text-customPrimary">
                Master Chef
              </TextScaled>
            </TextScaled>
            <CustomButton
              title="Đăng ký Master Chef"
              onPress={onMasterChefPress || (() => {})}
              bgVariant="primary"
              textVariant="primary"
              className='!w-fit !mx-auto'
            />
          </div>
          <button
            className="absolute top-2 right-2 w-6 h-6 rounded-xl bg-white/90 flex items-center justify-center"
          >
            <Image
              src={icons.closeIcon}
              alt="close"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Cooking Steps */}
        <div className="flex flex-col gap-2">
          {mockSteps.map((step, index) => (
            <div key={step.id} className="flex flex-row gap-4">
              {/* Step Number with Line */}
              <div className="flex flex-col items-center gap-1 pb-1">
                <div
                  className={`w-6 h-6 rounded-xl flex items-center justify-center ${
                    step.isCompleted ? 'bg-[#E36137]' : 'bg-[#D9D9DB]'
                  }`}
                >
                  {step.isCompleted ? (
                    <Image
                      src={icons.check2Icon}
                      alt="check"
                      width={16}
                      height={16}
                      className="brightness-0 invert"
                    />
                  ) : (
                    <TextScaled size="sm" className="text-white">
                      {step.stepNumber}
                    </TextScaled>
                  )}
                </div>
                {step.showLine && index < mockSteps.length - 1 && (
                  <div
                    className={`w-0.5 flex-1 ${
                      step.isCompleted ? 'bg-[#E36137]' : 'bg-[#E5E7EB]'
                    }`}
                  />
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1 flex flex-col gap-2 pb-4">
                <div className="flex flex-col gap-1">
                  <TextScaled size="base" className={step.isCompleted ? 'font-bold text-customPrimary' : 'font-bold text-black'}>
                    {step.title}
                  </TextScaled>
                  <TextScaled size="base" className={step.isCompleted ? 'text-black' : 'text-[#666666]'}>
                    {step.description}
                  </TextScaled>
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
