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
    images: [images.sampleFood1, images.sampleFood2, images.sampleFood3]
  },
  {
    id: 2,
    title: "Hải sản",
    views: 234,
    time: "17 giờ",
    images: [images.sampleFood1, images.sampleFood2, images.sampleFood3]
  },
  {
    id: 3,
    title: "Món Healthy",
    views: 234,
    time: "5 ngày",
    images: [images.sampleFood1, images.sampleFood2, images.sampleFood3]
  },
  {
    id: 4,
    title: "Ức gà chiên",
    views: 234,
    time: "7 ngày",
    images: [images.sampleFood1, images.sampleFood2, images.sampleFood3]
  },
  {
    id: 5,
    title: "Nước ép",
    views: 234,
    time: "9 ngày",
    images: [images.sampleFood1, images.sampleFood2, images.sampleFood3]
  }
];

const RecipeCard = ({ item }: { item: typeof mockRecipes[0] }) => (
  <View
    className="bg-white rounded-lg shadow-sm"
    style={{
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
          borderRightWidth: 1,
          borderColor: 'white',
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
    <View style={{ paddingHorizontal: getScaleFactor() * 8, paddingVertical: getScaleFactor() * 8 }}>
      <TextScaled style={{ marginBottom: getScaleFactor() * 4 }} size="sm" className="font-medium text-black">
        {item.title}
      </TextScaled>
      <View style={{ gap: getScaleFactor() * 8 }} className="flex-row items-center">
        <View style={{ gap: getScaleFactor() * 4 }} className="flex-row items-center">
          <Image
            source={icons.saveIcon}
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

      {/* Recipe Grid */}
      <View
        className="flex-col justify-center items-center"
        style={{ gap: getScaleFactor() * 24, }}
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
    </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
