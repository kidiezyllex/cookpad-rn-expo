'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import TextScaled from '@/components/Common/TextScaled';
import BackHeader from '../Common/BackHeader';
import CookingStepMasterTab from '../RecipeScreen/CookingStepMasterTab';
import CookingStepTab from '../RecipeScreen/CookingStepTab';
import MaterialTab from '../RecipeScreen/MaterialTab';

const RecipeScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'materials' | 'cooking'>('materials');
  const [showMasterChef, setShowMasterChef] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="w-full bg-white">
        <BackHeader
          headerTitle="Công thức món ăn"
          onPress={() => router.back()}
        />
      </div>

      {/* Content */}
      <div className="flex-1 bg-backgroundV1">
        {activeTab === 'materials' ? (
          <MaterialTab />
        ) : showMasterChef ? (
          <CookingStepMasterTab onBackPress={() => setShowMasterChef(false)} />
        ) : (
          <CookingStepTab onMasterChefPress={() => setShowMasterChef(true)} />
        )}
      </div>

      {/* Bottom Tabs */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl bg-white py-2 px-4"
      >
        <div
          className="flex flex-row rounded-lg bg-[#F3F4F6] p-1 gap-2"
        >
          <div
            className={`flex-1 rounded-md py-1 ${
              activeTab === 'materials' ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <button
              className="flex w-full items-center justify-center"
              onClick={() => setActiveTab('materials')}
            >
              <TextScaled size="base" className={`font-semibold ${activeTab === 'materials' ? 'text-customPrimary' : 'text-textNeutralV1'}`}>
                Nguyên liệu
              </TextScaled>
            </button>
          </div>
          <div
            className={`flex-1 rounded-md py-1 ${
              activeTab === 'cooking' ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <button
              className="flex w-full items-center justify-center"
              onClick={() => setActiveTab('cooking')}
            >
              <TextScaled size="base" className={`font-semibold ${activeTab === 'cooking' ? 'text-customPrimary' : 'text-textNeutralV1'}`}>
                Cách làm
              </TextScaled>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeScreen;
