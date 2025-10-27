import TextScaled from "@/components/Common/TextScaled";
import { icons } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";

// Type definition for recipe item
export interface RecipeItem {
  id: number;
  title: string;
  views: number;
  time: string;
  images: any[];
}

interface RecipeCardProps {
  item: RecipeItem;
}

const RecipeCard = ({ item }: RecipeCardProps) => (
  <Pressable
    onPress={() => router.push('/table-selection')}
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
  </Pressable>
);

export default RecipeCard;
