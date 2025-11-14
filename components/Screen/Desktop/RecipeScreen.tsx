'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BackHeader from '../../Common/BackHeader';
import CookingStepMasterTab from '../../RecipeScreen/CookingStepMasterTab';
import CookingStepTab from '../../RecipeScreen/CookingStepTab';
import MaterialTab from '../../RecipeScreen/MaterialTab';

const RecipeScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'materials' | 'cooking'>('materials');
  const [showMasterChef, setShowMasterChef] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="w-full pl-16">
        <BackHeader
          headerTitle="Công thức món ăn"
          onPress={() => router.back()}
        />
      </div>
      <div
        className="flex flex-row gap-2 px-16 bg-transparent"
      >
        <div
          className={`flex-1 ${activeTab === 'materials' ? 'bg-white border-b-customPrimary border-b-2' : 'bg-transparent'
            }`}
        >
          <button
            className="flex w-full items-center justify-center"
            onClick={() => setActiveTab('materials')}
          >
            <p className={`font-semibold text-base ${activeTab === 'materials' ? 'text-customPrimary' : 'text-textNeutralV1'}`}>
              Nguyên liệu
            </p>
          </button>
        </div>
        <div
          className={`flex-1 py-1 ${activeTab === 'cooking' ? 'bg-white border-b-customPrimary border-b-2' : 'bg-transparent'
            }`}
        >
          <button
            className="flex w-full items-center justify-center"
            onClick={() => setActiveTab('cooking')}
          >
            <p className={`font-semibold text-base ${activeTab === 'cooking' ? 'text-customPrimary' : 'text-textNeutralV1'}`}>
              Cách làm
            </p>
          </button>
        </div>
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
    </div>
  );
};

export default RecipeScreen;
