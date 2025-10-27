import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useRoute } from '@react-navigation/native';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackHeader from '../Common/BackHeader';
import FoodGrid from '../Common/FoodGrid';
import TextScaled from '../Common/TextScaled';

const TableSelection = () => {
    const route = useRoute();
    return (
        <SafeAreaView className="flex-1" edges={['top', 'bottom', 'left', 'right']} style={{ backgroundColor: '#F1EEE8' }}>
            <BackHeader
                headerTitle="Bảng"
                onPress={() => router.back()}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    paddingHorizontal: getScaleFactor() * 16,
                }}
            >

                <View
                    style={{
                        marginVertical: getScaleFactor() * 32,
                    }}
                    className='flex-col justify-between items-center w-full'>
                    <TextScaled
                        size="3xl"
                        className="font-bold text-black text-center"
                    >
                        Hải sản
                    </TextScaled>
                    <TextScaled
                        size="base"
                        className="font-light text-black text-center"
                    >
                        14 Ghim
                    </TextScaled>
                </View>
                {/* Search and Filter */}
                <View
                    className="flex-row items-center"
                    style={{ gap: getScaleFactor() * 4, width: '100%', marginBottom: getScaleFactor() * 16 }}
                >
                    <View
                        className="flex-row items-center bg-white rounded-lg"
                        style={{
                            flex: 1,
                            height: getScaleFactor() * 32,
                            paddingHorizontal: getScaleFactor() * 8,
                            gap: getScaleFactor() * 16,
                        }}
                    >
                        <Image
                            source={icons.searchIcon}
                            style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
                            resizeMode="contain"
                        />
                        <TextScaled size="sm" className="font-medium text-textNeutralV1">
                            Tìm kiếm
                        </TextScaled>
                    </View>
                    <Pressable>
                        <Image
                            source={icons.downUpIcon}
                            style={{ width: getScaleFactor() * 32, height: getScaleFactor() * 32 }}
                            resizeMode="contain"
                        />
                    </Pressable>
                    <Pressable>
                        <Image
                            source={icons.smallPlusIcon}
                            style={{ width: getScaleFactor() * 32, height: getScaleFactor() * 32 }}
                            resizeMode="contain"
                        />
                    </Pressable>
                </View>
                <FoodGrid />
            </ScrollView>
        </SafeAreaView>
    );
};

export default TableSelection;
