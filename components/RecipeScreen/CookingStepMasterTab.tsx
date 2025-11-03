import TextScaled from '@/components/Common/TextScaled';
import { icons, images, videos } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { router } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Image, Pressable, ScrollView, View } from 'react-native';

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
  const player = useVideoPlayer(videos.videoTutorial, (player) => {
    player.loop = true;
    player.muted = true; // Tắt âm thanh
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: getScaleFactor() * 120 }}
    >
      {/* Xem video hướng dẫn */}
      <View style={{ 
        paddingHorizontal: getScaleFactor() * 16, 
        paddingTop: getScaleFactor() * 8, 
        backgroundColor: '#1F2937',
        paddingBottom: getScaleFactor() * 16,
        marginTop: getScaleFactor() * 16,
      }}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          gap: getScaleFactor() * 8, 
          marginBottom: getScaleFactor() * 8
        }}>
          <Image
            source={icons.chefIcon}
            style={{ 
              width: getScaleFactor() * 24, 
              height: getScaleFactor() * 24,
              tintColor: '#E36137'
            }}
            resizeMode="contain"
          />
          <TextScaled size="base" style={{ color: '#E36137', fontWeight: 'bold' }}>
            Xem video hướng dẫn
          </TextScaled>
        </View>
        
        <View style={{
          width: '100%',
          height: getScaleFactor() * 192,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderRadius: getScaleFactor() * 8,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <Pressable
            style={{
              width: getScaleFactor() * 60,
              height: getScaleFactor() * 60,
              backgroundColor: '#F1EEE8',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              zIndex: 1,
              top: '50%',
              left: '50%',
              marginTop: getScaleFactor() * -30,
              marginLeft: getScaleFactor() * -30,
            }}
            onPress={async () => {
              await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
              router.push('/view-video' as any);
            }}
          >
            <Image
              source={icons.playIcon}
              style={{ 
                width: getScaleFactor() * 40, 
                height: getScaleFactor() * 40,
                tintColor: '#E36137',
              }}
              resizeMode="contain"
            />
          </Pressable>
          <VideoView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: getScaleFactor() * 8,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
            player={player}
            allowsFullscreen={false}
            allowsPictureInPicture={false}
            contentFit="cover"
            nativeControls={false}
          />
        </View>
      </View>
      <View style={{ paddingTop: getScaleFactor() * 16, paddingHorizontal: getScaleFactor() * 16, gap: getScaleFactor() * 24 }}>
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
                
                {/* Images Content */}
                {step.images && step.images.length > 0 && (
                  <View style={{ 
                    flexDirection: 'row', 
                    gap: getScaleFactor() * 8, 
                  }}>
                    {step.images.map((image, imageIndex) => (
                      <Image
                        key={imageIndex}
                        source={image}
                        style={{
                          width: getScaleFactor() * 80,
                          height: getScaleFactor() * 80,
                          borderRadius: getScaleFactor() * 8,
                        }}
                        resizeMode="cover"
                      />
                    ))}
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CookingStepMasterTab;
