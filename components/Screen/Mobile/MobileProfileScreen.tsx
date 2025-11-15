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

const MobileProfileScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState('Bảng');
  const scaleFactor = getScaleFactor();

  const tabs = ['Bảng', 'Yêu thích', 'Công thức'];

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex flex-col bg-backgroundV1"
        style={{ paddingBottom: scaleFactor * 120 }}
      >
        {/* Avatar and Name, Chỉnh sửa cài đặt*/}
        <div
          className="flex flex-col justify-center items-center"
          style={{ marginTop: scaleFactor * 40 }}
        >
          <div className="flex flex-col justify-center items-center" style={{ gap: scaleFactor * 8 }}>
            <div className="relative" style={{ width: scaleFactor * 80, height: scaleFactor * 80 }}>
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
          <div
            className="flex flex-row items-center"
            style={{ gap: scaleFactor * 8, marginBottom: scaleFactor * 24 }}
          >
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
            style={{
              width: 'auto',
              height: scaleFactor * 40,
              marginBottom: scaleFactor * 24,
              paddingLeft: scaleFactor * 24,
              paddingRight: scaleFactor * 24,
              paddingTop: scaleFactor * 8,
              paddingBottom: scaleFactor * 8,
            }}
          />
        </div>

        {/* Tabs and Search */}
        <div
          className="flex flex-col justify-center items-center"
          style={{ gap: scaleFactor * 16 }}
        >
          {/* Tab Navigation */}
          <div className="flex flex-row">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="bg-transparent border-none p-0 cursor-pointer"
                style={{
                  borderBottomWidth: activeTab === tab ? scaleFactor * 2 : 0,
                  borderBottomColor: activeTab === tab ? '#000' : 'transparent',
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
            className="flex flex-row items-center w-full"
            style={{ gap: scaleFactor * 4, paddingLeft: scaleFactor * 16, paddingRight: scaleFactor * 16, marginBottom: scaleFactor * 16 }}
          >
            <div
              className="flex flex-row items-center bg-white rounded-lg flex-1"
              style={{
                height: scaleFactor * 32,
                paddingLeft: scaleFactor * 8,
                paddingRight: scaleFactor * 8,
                gap: scaleFactor * 16,
              }}
            >
              <Image
                src={icons.searchIcon}
                alt="Search"
                width={100}
                height={100}
                quality={100}
                draggable={false}
                className="object-contain h-6 w-auto"
              />
              <span className="font-medium text-textNeutralV1 text-sm">
                Tìm kiếm
              </span>
            </div>
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
            className="flex flex-col justify-center items-center"
            style={{ gap: scaleFactor * 24 }}
          >
            <div
              className="w-full grid grid-cols-2"
              style={{
                paddingLeft: scaleFactor * 16,
                paddingRight: scaleFactor * 16,
                paddingBottom: scaleFactor * 4,
                gap: scaleFactor * 16,
              }}
            >
              {mockRecipes.map((item: any) => (
                <RecipeCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Yêu thích' && (
          <div style={{ paddingLeft: scaleFactor * 16, paddingRight: scaleFactor * 16 }}>
            <MobileFoodGrid />
          </div>
        )}

        {activeTab === 'Công thức' && (
          <div
            className="flex flex-col"
            style={{
              gap: scaleFactor * 8,
              paddingLeft: scaleFactor * 16,
              paddingRight: scaleFactor * 16,
              paddingBottom: scaleFactor * 16,
            }}
          >
            {mockRecipeList.map((item: any) => (
              <RecipeListItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileProfileScreen;
