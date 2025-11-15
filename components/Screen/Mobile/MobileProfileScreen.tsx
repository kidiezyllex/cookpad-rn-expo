"use client";

import CustomButton from "@/components/Common/CustomButton";
import RecipeCard from "@/components/ProfileScreen/RecipeCard";
import RecipeListItem from "@/components/ProfileScreen/RecipeListItem";
import { icons, images } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { mockRecipeList, mockRecipes } from "@/components/ProfileScreen/mockData";
import MobileFoodGrid from "@/components/Common/Mobile/FoodGrid";
import BottomNavigator from "@/components/Common/BottomNavigator";
import SearchInput from "@/components/ui/SearchInput";

const MobileProfileScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState('Bảng');
  const scaleFactor = getScaleFactor();

  const tabs = ['Bảng', 'Yêu thích', 'Công thức'];

  return (
    <div className="flex flex-col min-h-screen bg-backgroundV1 pb-14">
      {/* Avatar and Name, Chỉnh sửa cài đặt*/}
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="relative w-20 h-20">
            <Image
              src={images.sampleAvatar}
              alt="Avatar"
              fill
              className="object-contain rounded-full"
              quality={100}
              draggable={false}
            />
          </div>
          <span className="font-bold text-black text-xl">
            Hòa Simp
          </span>
        </div>
        <div className="flex flex-row items-center gap-2 mb-6">
          <span className="text-textNeutralV1 text-xs">
            12 Bạn bếp
          </span>
          <span className="font-bold text-black text-sm">
            .
          </span>
          <span className="text-textNeutralV1 text-xs">
            22 Công thức
          </span>
        </div>
        <CustomButton
          title="Chỉnh sửa cài đặt"
          onPress={() => router.push('/setting')}
          className="!w-fit h-10 px-6 py-2 mb-6 pb-2"
        />
      </div>

      {/* Tabs and Search */}
      <div
        className="flex flex-col justify-center items-center gap-4"
      >
        {/* Tab Navigation */}
        <div className="flex flex-row">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="bg-transparent p-0 cursor-pointer"
              style={{
                borderBottomWidth: activeTab === tab ? scaleFactor * 2 : 0,
                borderBottomColor: activeTab === tab ? '#000' : 'transparent',
                borderBottomStyle: 'solid',
                paddingLeft: scaleFactor * 16,
                paddingRight: scaleFactor * 16,
                paddingBottom: scaleFactor * 8,
              }}
            >
              <span
                className={`font-bold text-base ${activeTab === tab ? 'text-black' : 'text-textNeutralV1'
                  }`}
              >
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        <div
          className="flex flex-row items-center w-full px-4 mb-4 gap-1"
        >
          <SearchInput placeholder="Tìm kiếm" />
          <button className="bg-transparent border-none p-0 cursor-pointer">
            <Image
              src={icons.downUpIcon}
              alt="Filter"
              width={100}
              height={100}
              quality={100}
              draggable={false}
              className="object-contain h-8 w-auto"
            />
          </button>
          <button className="bg-transparent border-none p-0 cursor-pointer">
            <Image
              src={icons.smallPlusIcon}
              alt="Add"
              width={100}
              height={100}
              quality={100}
              draggable={false}
              className="object-contain h-8 w-auto"
            />
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'Bảng' && (
        <div
          className="flex flex-col justify-center items-center gap-6"
        >
          <div
            className="w-full grid grid-cols-2 px-4 pb-1 gap-4"
          >
            {mockRecipes.map((item: any) => (
              <RecipeCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Yêu thích' && (
        <div className="px-4">
          <MobileFoodGrid />
        </div>
      )}

      {activeTab === 'Công thức' && (
        <div
          className="flex flex-col px-4 pb-4 gap-2"
        >
          {mockRecipeList.map((item: any) => (
            <RecipeListItem key={item.id} item={item} />
          ))}
        </div>
      )}
      <BottomNavigator />
    </div>
  );
};

export default MobileProfileScreen;
