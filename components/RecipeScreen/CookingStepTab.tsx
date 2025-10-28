import { Image, Pressable, ScrollView, View } from 'react-native';

import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: getScaleFactor() * 16, paddingBottom: getScaleFactor() * 120 }}
    >
      <View style={{ paddingTop: getScaleFactor() * 16, gap: getScaleFactor() * 24 }}>
        {/* Master Chef Banner */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: getScaleFactor() * 8,
            padding: getScaleFactor() * 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: getScaleFactor() * 3 },
            shadowOpacity: 0.1,
            shadowRadius: getScaleFactor() * 12,
            elevation: 3,
            gap: getScaleFactor() * 8,
          }}
        >
          <Image
            source={images.onboarding1}
            style={{
              width: '100%',
              height: getScaleFactor() * 138,
            }}
            resizeMode="contain"
          />
          <View style={{ gap: getScaleFactor() * 8 }}>
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
              style={{
                height: getScaleFactor() * 40,
              }}
            />
          </View>
          <Pressable
            style={{
              position: 'absolute',
              top: getScaleFactor() * 8,
              right: getScaleFactor() * 8,
              width: getScaleFactor() * 24,
              height: getScaleFactor() * 24,
              borderRadius: getScaleFactor() * 12,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={icons.closeIcon}
              style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        {/* Cooking Steps */}
        <View style={{ gap: getScaleFactor() * 8 }}>
          {mockSteps.map((step, index) => (
            <View key={step.id} style={{ flexDirection: 'row', gap: getScaleFactor() * 16 }}>
              {/* Step Number with Line */}
              <View style={{ alignItems: 'center', gap: getScaleFactor() * 4, paddingBottom: getScaleFactor() * 4 }}>
                <View
                  style={{
                    width: getScaleFactor() * 24,
                    height: getScaleFactor() * 24,
                    borderRadius: getScaleFactor() * 12,
                    backgroundColor: step.isCompleted ? '#E36137' : '#D9D9DB',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {step.isCompleted ? (
                    <Image
                      source={icons.check2Icon}
                      style={{ width: getScaleFactor() * 16, height: getScaleFactor() * 16, tintColor: '#FFFFFF'}}
                      resizeMode="contain"
                    />
                  ) : (
                    <TextScaled size="sm" style={{ color: step.isCompleted ? '#FFFFFF' : '#FFFFFF' }}>
                      {step.stepNumber}
                    </TextScaled>
                  )}
                </View>
                {step.showLine && index < mockSteps.length - 1 && (
                  <View
                    style={{
                      width: getScaleFactor() * 2,
                      flex: 1,
                      backgroundColor: step.isCompleted ? '#E36137' : '#E5E7EB',
                    }}
                  />
                )}
              </View>

              {/* Step Content */}
              <View style={{ flex: 1, gap: getScaleFactor() * 8, paddingBottom: getScaleFactor() * 16 }}>
                <View style={{ gap: getScaleFactor() * 4 }}>
                  <TextScaled size="base" className={step.isCompleted ? 'font-bold text-customPrimary' : 'font-bold text-black'}>
                    {step.title}
                  </TextScaled>
                  <TextScaled size="base" style={{ color: step.isCompleted ? '#000000' : '#666666' }}>
                    {step.description}
                  </TextScaled>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CookingStepTab;
