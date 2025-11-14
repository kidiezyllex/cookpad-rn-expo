'use client';

import CustomButton from "@/components/Common/CustomButton";
import RecipeCard from "@/components/ProfileScreen/RecipeCard";
import RecipeListItem from "@/components/ProfileScreen/RecipeListItem";
import { icons, images } from "@/constants";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import FoodGrid from "../../Common/Desktop/FoodGrid";
import { mockRecipeList, mockRecipes } from "../../ProfileScreen/mockData";

const ProfileScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState('Bảng');

  const tabs = ['Bảng', 'Yêu thích', 'Công thức'];

  return (
    <div className="flex min-h-screen flex-col bg-backgroundV1">
      <div
        className="flex-1 overflow-y-auto px-16"
      >
        {/* Avatar and Name, Chỉnh sửa cài đặt*/}
        <div
          className="flex flex-col items-center justify-center mt-10"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={images.sampleAvatar}
              alt="avatar"
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="font-bold text-black text-xl">
              Hòa Simp
            </p>
          </div>
          <div
            className="flex flex-row items-center gap-2 mb-6"
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
            className="!w-fit h-10 mb-6 px-6 py-2"
          />
        </div>

        {/* Tabs and Search */}
        <div
          className="flex flex-col items-center justify-center gap-4"
        >
          {/* Tab Navigation */}
          <div className="flex flex-row">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 pb-2 ${activeTab === tab ? 'border-b-2 border-black' : 'border-b-2 border-transparent'
                  }`}
              >
                <p
                  className={`font-bold text-base ${activeTab === tab ? 'text-black' : 'text-textNeutralV1'
                    }`}
                >
                  {tab}
                </p>
              </button>
            ))}
          </div>

          {/* Search and Filter */}
          <div
            className="flex w-full flex-row items-center gap-1 mb-4"
          >
            <div
              className="flex flex-1 flex-row items-center rounded-lg bg-white h-9 px-2 gap-4"
            >
              <Image
                src={icons.searchIcon}
                alt="search"
                width={24}
                height={24}
              />
              <input
                placeholder="Tìm kiếm"
                className="flex-1 bg-transparent outline-none text-sm font-medium text-textNeutralV1"
              />
            </div>
            <button className="flex items-center justify-center">
              <Image
                src={icons.downUpIcon}
                alt="sort"
                width={32}
                height={32}
              />
            </button>
            <button className="flex items-center justify-center">
              <Image
                src={icons.smallPlusIcon}
                alt="add"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'Bảng' && (
          <div
            className="flex flex-col items-center justify-center gap-4"
          >
            <div
              className="grid grid-cols-6 gap-4 w-full pb-1"
            >
              {mockRecipes.map((item) => (
                <RecipeCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Yêu thích' && (
          <FoodGrid />
        )}

        {activeTab === 'Công thức' && (
          <div
            className="grid grid-cols-4 gap-4 pb-4"
          >
            {mockRecipeList.map((item) => (
              <RecipeListItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;
