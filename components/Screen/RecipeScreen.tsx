import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import TextScaled from '@/components/Common/TextScaled';
import { getScaleFactor } from '@/lib/scaling';
import BackHeader from '../Common/BackHeader';
import CookingStepMasterTab from '../RecipeScreen/CookingStepMasterTab';
import CookingStepTab from '../RecipeScreen/CookingStepTab';
import MaterialTab from '../RecipeScreen/MaterialTab';

const RecipeScreen = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<'materials' | 'cooking'>('materials');
  const [showMasterChef, setShowMasterChef] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom', 'left', 'right']} mode="padding">
      <View className='bg-white w-full'>
        <BackHeader
          headerTitle="Công thức món ăn"
          onPress={() => router.back()}
        />
      </View>

      {/* Content */}
      <View className='flex-1 bg-backgroundV1'>
        {activeTab === 'materials' ? (
          <MaterialTab />
        ) : showMasterChef ? (
          <CookingStepMasterTab onBackPress={() => setShowMasterChef(false)} />
        ) : (
          <CookingStepTab onMasterChefPress={() => setShowMasterChef(true)} />
        )}
      </View>

      {/* Bottom Tabs */}
      <View
         style={{
          position: 'absolute',
          bottom: insets.bottom,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderTopLeftRadius: getScaleFactor() * 16,
          borderTopRightRadius: getScaleFactor() * 16,
          paddingVertical: getScaleFactor() * 8,
          paddingHorizontal: getScaleFactor() * 16,
      }}
      >
        <View
          style={{
            backgroundColor: '#F3F4F6',
            borderRadius: getScaleFactor() * 8,
            padding: getScaleFactor() * 4,
            flexDirection: 'row',
            gap: getScaleFactor() * 8,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: activeTab === 'materials' ? 'white' : 'transparent',
              borderRadius: getScaleFactor() * 6,
              paddingVertical: getScaleFactor() * 4,
              alignItems: 'center',
            }}
          >
            <Pressable
              style={{ width: '100%', alignItems: 'center' }}
              onPress={() => setActiveTab('materials')}
            >
              <TextScaled size="base" className={`font-semibold ${activeTab === 'materials' ? 'text-customPrimary' : 'text-textNeutralV1'}`}>
                Nguyên liệu
              </TextScaled>
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: activeTab === 'cooking' ? 'white' : 'transparent',
              borderRadius: getScaleFactor() * 6,
              paddingVertical: getScaleFactor() * 4,
              alignItems: 'center',
            }}
          >
            <Pressable
              style={{ width: '100%', alignItems: 'center' }}
              onPress={() => setActiveTab('cooking')}
            >
              <TextScaled size="base" className={`font-semibold ${activeTab === 'cooking' ? 'text-customPrimary' : 'text-textNeutralV1'}`}>
                Cách làm
              </TextScaled>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecipeScreen;

