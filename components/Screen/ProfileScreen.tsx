import CustomButton from "@/components/Common/CustomButton";
import TextScaled from "@/components/Common/TextScaled";
import RecipeCard from "@/components/ProfileScreen/RecipeCard";
import { icons, images } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FoodGrid from "../Common/FoodGrid";
import { mockRecipes } from "../ProfileScreen/mockData";

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = React.useState('Bảng');

  const tabs = ['Bảng', 'Yêu thích', 'Công thức'];

  return (
    <SafeAreaView className="flex-1" edges={['bottom', 'left', 'right']}>
      <ScrollView
      className="flex-1 bg-backgroundV1"
      contentContainerStyle={{ paddingBottom: getScaleFactor() * 120 }}
    >
      {/* Profile Header */}
      <View
        className="flex-col justify-center items-center"
        style={{ marginTop: getScaleFactor() * 40 }}
      >
        <View className="flex-col justify-center items-center" style={{ gap: getScaleFactor() * 8 }}>
          <Image
            source={images.sampleAvatar}
            style={{
              width: getScaleFactor() * 80,
              height: getScaleFactor() * 80,
              borderRadius: 100,
            }}
            resizeMode="contain"
          />
          <TextScaled size="xl" className="font-bold text-black">
            Hòa Simp
          </TextScaled>
        </View>
        <View
          className="flex-row items-center"
          style={{ gap: getScaleFactor() * 8, marginBottom: getScaleFactor() * 24 }}
        >
          <TextScaled size="xs" className="text-textNeutralV1">
            12 Bạn bếp
          </TextScaled>
          <TextScaled size="sm" className="font-bold text-black">
            .
          </TextScaled>
          <TextScaled size="xs" className="text-textNeutralV1">
            22 Công thức
          </TextScaled>
        </View>
        <CustomButton
          title="Chỉnh sửa cài đặt"
          onPress={() => router.push('/setting')}
          style={{
            width: 'auto',
            height: getScaleFactor() * 40,
            marginBottom: getScaleFactor() * 24,
            paddingHorizontal: getScaleFactor() * 24,
            paddingVertical: getScaleFactor() * 8,
          }}
        />
      </View>

      {/* Tabs and Search */}
      <View
        className="flex-col justify-center items-center"
        style={{ gap: getScaleFactor() * 16 }}
      >
        {/* Tab Navigation */}
        <View className="flex-row">
          {tabs.map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={{
                borderBottomWidth: activeTab === tab ? getScaleFactor() * 2 : 0,
                borderBottomColor: activeTab === tab ? '#000' : 'transparent',
                paddingHorizontal: getScaleFactor() * 16,
                paddingBottom: getScaleFactor() * 8,
              }}
            >
              <TextScaled
                size="base"
                className={`font-bold ${activeTab === tab ? 'text-black' : 'text-textNeutralV1'
                  }`}
              >
                {tab}
              </TextScaled>
            </Pressable>
          ))}
        </View>

        {/* Search and Filter */}
        <View
          className="flex-row items-center"
          style={{ gap: getScaleFactor() * 4, width: '100%', paddingHorizontal: getScaleFactor() * 16, marginBottom: getScaleFactor() * 16 }}
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
      </View>

      {/* Tab Content */}
      {activeTab === 'Bảng' && (
        <View
          className="flex-col justify-center items-center"
          style={{ gap: getScaleFactor() * 24 }}
        >
          <FlatList
            data={mockRecipes}
            renderItem={({ item }) => <RecipeCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            style={{
              width: '100%',
              paddingHorizontal: getScaleFactor() * 16,
              paddingBottom: getScaleFactor() * 4,
            }}
            contentContainerStyle={{
              gap: getScaleFactor() * 16,
            }}
            columnWrapperStyle={{
              gap: getScaleFactor() * 8,
            }}
          />
        </View>
      )}

      {activeTab === 'Yêu thích' && (
        <View style={{ paddingHorizontal: getScaleFactor() * 16 }}>
          <FoodGrid />
        </View>
      )}

      {activeTab === 'Công thức' && (
        <View
          className="flex-col justify-center items-center"
          style={{ gap: getScaleFactor() * 24 }}
        >
          <FlatList
            data={mockRecipes}
            renderItem={({ item }) => <RecipeCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            style={{
              width: '100%',
              paddingHorizontal: getScaleFactor() * 16,
              paddingBottom: getScaleFactor() * 4,
            }}
            contentContainerStyle={{
              gap: getScaleFactor() * 16,
            }}
            columnWrapperStyle={{
              gap: getScaleFactor() * 8,
            }}
          />
        </View>
      )}
    </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
