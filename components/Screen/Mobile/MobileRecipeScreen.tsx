import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BackHeader from '../Common/BackHeader';
import CookingStepMasterTab from '../RecipeScreen/CookingStepMasterTab';
import CookingStepTab from '../RecipeScreen/CookingStepTab';
import MaterialTab from '../RecipeScreen/MaterialTab';

const MobileRecipeScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'materials' | 'cooking'>('materials');
  const [showMasterChef, setShowMasterChef] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className='bg-white w-full'>
        <BackHeader
          headerTitle="Công thức món ăn"
          onPress={() => router.back()}
        />
      </div>

      {/* Content */}
      <div className='flex-1 bg-backgroundV1'>
        {activeTab === 'materials' ? (
          <MaterialTab />
        ) : showMasterChef ? (
          <CookingStepMasterTab onBackPress={() => setShowMasterChef(false)} />
        ) : (
          <CookingStepTab onMasterChefPress={() => setShowMasterChef(true)} />
        )}
      </div>

      {/* Bottom Tabs */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl py-2 px-4">
        <div className="bg-[#F3F4F6] rounded-lg p-1 flex flex-row gap-2">
          <div className={`flex-1 rounded-md py-1 flex items-center ${
            activeTab === 'materials' ? 'bg-white' : 'bg-transparent'
          }`}>
            <button
              className="w-full flex items-center bg-transparent border-none p-0 cursor-pointer"
              onClick={() => setActiveTab('materials')}
            >
              <span className={`font-semibold text-base ${
                activeTab === 'materials' ? 'text-customPrimary' : 'text-textNeutralV1'
              }`}>
                Nguyên liệu
              </span>
            </button>
          </div>
          <div className={`flex-1 rounded-md py-1 flex items-center ${
            activeTab === 'cooking' ? 'bg-white' : 'bg-transparent'
          }`}>
            <button
              className="w-full flex items-center bg-transparent border-none p-0 cursor-pointer"
              onClick={() => setActiveTab('cooking')}
            >
              <span className={`font-semibold text-base ${
                activeTab === 'cooking' ? 'text-customPrimary' : 'text-textNeutralV1'
              }`}>
                Cách làm
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileRecipeScreen;
