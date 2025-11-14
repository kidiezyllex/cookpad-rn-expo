import { icons, images, videos } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useFocusEffect } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useMemo } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwiperFlatList from 'react-native-swiper-flatlist';

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
  const player = useVideoPlayer(videos.videoTutorial, (player) => {
    player.loop = true;
    player.muted = false;
  });

  const scaleFactor = useMemo(() => getScaleFactor(), []);

  // Khóa landscape ngay khi màn hình được focus (trước khi render)
  useFocusEffect(
    useMemo(() => () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      return () => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      };
    }, [])
  );

  const renderStepItem = ({ item, index }: { item: typeof mockSteps[0]; index: number }) => {
    return (
      <View 
        style={{ 
          flexDirection: 'row', 
          gap: scaleFactor * 24,
          paddingHorizontal: scaleFactor * 12,
          paddingTop: index === 0 ? scaleFactor * 24 : 0,
          paddingBottom: index === mockSteps.length - 1 ? scaleFactor * 16 : scaleFactor * 8,
        }}
      >
        {/* Step Number with Line */}
        <View style={{ alignItems: 'center', gap: scaleFactor * 4 }}>
          <View
            style={{
              width: scaleFactor * 24,
              height: scaleFactor * 24,
              borderRadius: scaleFactor * 24,
              backgroundColor: item.isCompleted ? '#E36137' : '#9CA3AF',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {item.isCompleted ? (
              <Image
                source={icons.check2Icon}
                style={{ 
                  width: scaleFactor * 16, 
                  height: scaleFactor * 16, 
                  tintColor: '#EEEEEE'
                }}
                resizeMode="contain"
              />
            ) : (
              <Text style={{ color: '#EEEEEE', fontSize: scaleFactor * 14 }}>
                {item.stepNumber}
              </Text>
            )}
          </View>
          {item.showLine && index < mockSteps.length - 1 && (
            <View
              style={{
                width: scaleFactor * 1,
                flex: 1,
                backgroundColor: item.isCompleted ? '#E36137' : '#9CA3AF',
              }}
            />
          )}
        </View>

        {/* Step Content */}
        <View style={{ flex: 1, gap: scaleFactor * 16 }}>
          <View style={{ gap: scaleFactor * 8 }}>
            <Text 
              style={{ 
                color: item.isCompleted ? '#E36137' : '#9CA3AF',
                fontSize: scaleFactor * 14
              }}
            >
              {item.title}
            </Text>
            <Text 
              style={{ 
                color: item.isCompleted ? '#EEEEEE' : '#595959',
                fontSize: scaleFactor * 14
              }}
            >
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView 
      className="flex-1 bg-backgroundV1" 
      edges={['top', 'bottom', 'left', 'right']} 
      mode="padding"
    >
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {/* Video Section */}
        <View style={{
          flex: 2,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
          <View style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <VideoView
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
              }}
              player={player}
              allowsFullscreen={true}
              allowsPictureInPicture={false}
              contentFit="contain"
              nativeControls={true}
            />
          </View>
        </View>

        {/* Steps List */}
        <View 
          style={{
            flex: 1,
            backgroundColor: '#2D2D2D',
          }}
        >
          <SwiperFlatList
            data={mockSteps}
            renderItem={renderStepItem}
            keyExtractor={(item) => item.id.toString()}
            vertical={true}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showPagination={false}
          
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewVideoScreen;

