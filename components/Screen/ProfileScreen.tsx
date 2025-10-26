import CustomButton from "@/components/Common/CustomButton";
import TextScaled from "@/components/Common/TextScaled";
import { icons, images } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock data for recipes
const mockRecipes = [
  {
    id: 1,
    title: "Lòng xào dưa",
    views: 234,
    time: "12 giờ",
    images: [images.sampleFood1, images.sampleFood1, images.sampleFood1]
  },
  {
    id: 2,
    title: "Hải sản",
    views: 234,
    time: "17 giờ",
    images: [images.sampleFood1, images.sampleFood1, images.sampleFood1]
  },
  {
    id: 3,
    title: "Món Healthy",
    views: 234,
    time: "5 ngày",
    images: [images.sampleFood1, images.sampleFood1, images.sampleFood1]
  },
  {
    id: 4,
    title: "Ức gà chiên",
    views: 234,
    time: "7 ngày",
    images: [images.sampleFood1, images.sampleFood1, images.sampleFood1]
  },
  {
    id: 5,
    title: "Nước ép",
    views: 234,
    time: "9 ngày",
    images: [images.sampleFood1, images.sampleFood1, images.sampleFood1]
  }
];

const RecipeCard = ({ item }: { item: typeof mockRecipes[0] }) => (
  <View 
    className="bg-white rounded-lg shadow-sm"
    style={{
      width: getScaleFactor() * 160,
      marginBottom: getScaleFactor() * 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: getScaleFactor() * 3 },
      shadowOpacity: 0.1,
      shadowRadius: getScaleFactor() * 12,
      elevation: 3,
    }}
  >
    <View className="flex-row">
      <Image
        source={item.images[0]}
        style={{
          width: getScaleFactor() * 112,
          height: getScaleFactor() * 112,
          borderTopLeftRadius: getScaleFactor() * 8,
        }}
        resizeMode="cover"
      />
      <View>
        <Image
          source={item.images[1]}
          style={{
            width: getScaleFactor() * 56,
            height: getScaleFactor() * 56,
            borderTopRightRadius: getScaleFactor() * 8,
          }}
          resizeMode="cover"
        />
        <Image
          source={item.images[2]}
          style={{
            width: getScaleFactor() * 56,
            height: getScaleFactor() * 56,
          }}
          resizeMode="cover"
        />
      </View>
    </View>
    <View className="px-2 py-2">
      <TextScaled size="sm" className="mb-1 font-medium text-black">
        {item.title}
      </TextScaled>
      <View className="flex-row gap-2 items-center">
        <View className="flex-row gap-1 items-center">
          <Image
            source={icons.clockIcon}
            style={{ width: getScaleFactor() * 16, height: getScaleFactor() * 16 }}
            resizeMode="contain"
          />
          <TextScaled size="xs" className="text-textNeutralV1">
            {item.views}
          </TextScaled>
        </View>
        <TextScaled size="xs" className="text-textNeutralV1">
          {item.time}
        </TextScaled>
      </View>
    </View>
  </View>
);

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = React.useState('Bảng');

  const tabs = ['Bảng', 'Yêu thích', 'Công thức'];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: getScaleFactor() * 120 }}
      >
        {/* Profile Header */}
        <View 
          className="flex-col justify-center items-center pt-10"
          style={{ gap: getScaleFactor() * 24 }}
        >
          <View className="flex-col justify-center items-center" style={{ gap: getScaleFactor() * 8 }}>
            <Image
              source={images.sampleAvatar}
              style={{
                width: getScaleFactor() * 80,
                height: getScaleFactor() * 80,
                borderRadius: 100,
              }}
              resizeMode="cover"
            />
            <TextScaled size="xl" className="font-bold text-black">
              Hòa Simp
            </TextScaled>
          </View>
          <View 
            className="flex-row items-center"
            style={{ gap: getScaleFactor() * 8 }}
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
            onPress={() => router.push('/profile-setting')}
            className="px-6 py-2"
            style={{
              width: 'auto',
              height: getScaleFactor() * 40,
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
                className="px-4 pb-2"
                style={{
                  borderBottomWidth: activeTab === tab ? getScaleFactor() * 2 : 0,
                  borderBottomColor: activeTab === tab ? '#000' : 'transparent',
                }}
              >
                <TextScaled 
                  size="base" 
                  className={`font-bold ${
                    activeTab === tab ? 'text-black' : 'text-textNeutralV1'
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
            style={{ gap: getScaleFactor() * 4 }}
          >
            <View 
              className="flex-row items-center bg-white rounded-lg"
              style={{
                width: getScaleFactor() * 256,
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
            <Pressable 
              className="rounded-lg"
              style={{
                width: getScaleFactor() * 32,
                height: getScaleFactor() * 32,
                padding: getScaleFactor() * 4,
              }}
            >
              <Image
                source={icons.threeDotsIcon}
                style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
                resizeMode="contain"
              />
            </Pressable>
            <Pressable 
              className="rounded-lg"
              style={{
                width: getScaleFactor() * 32,
                height: getScaleFactor() * 32,
                padding: getScaleFactor() * 4,
              }}
            >
              <Image
                source={icons.threeDotsIcon}
                style={{ width: getScaleFactor() * 24, height: getScaleFactor() * 24 }}
                resizeMode="contain"
              />
            </Pressable>
          </View>
        </View>

        {/* Recipe Grid */}
        <View 
          className="flex-col justify-center items-center px-4"
          style={{ gap: getScaleFactor() * 24 }}
        >
          <FlatList
            data={mockRecipes}
            renderItem={({ item }) => <RecipeCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={{
              gap: getScaleFactor() * 8,
            }}
            columnWrapperStyle={{
              gap: getScaleFactor() * 8,
            }}
            style={{
              width: getScaleFactor() * 320,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
