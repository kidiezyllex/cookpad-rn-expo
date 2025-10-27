import TextScaled from "@/components/Common/TextScaled";
import { icons } from "@/constants";
import { getScaleFactor } from "@/lib/scaling";
import { Image, View } from "react-native";

// Type definition for recipe list item
export interface RecipeListItem {
  id: number;
  title: string;
  description: string;
  image: any;
  comments: number;
  saves: number;
  views: number;
}

interface RecipeListItemProps {
  item: RecipeListItem;
}

const RecipeListItem = ({ item }: RecipeListItemProps) => (
  <View
    className="bg-white rounded-lg flex-row"
    style={{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: getScaleFactor() * 3 },
      shadowOpacity: 0.1,
      shadowRadius: getScaleFactor() * 12,
      elevation: 3,
      marginBottom: getScaleFactor() * 8,
    }}
  >
    <Image
      source={item.image}
      style={{
        width: getScaleFactor() * 100,
        height: "100%",
        borderTopLeftRadius: getScaleFactor() * 8,
        borderBottomLeftRadius: getScaleFactor() * 8,
      }}
      resizeMode="cover"
    />
    <View
      style={{
        flex: 1,
        paddingHorizontal: getScaleFactor() * 12,
        paddingVertical: getScaleFactor() * 8,
        gap: getScaleFactor() * 8,
      }}
    >
      <View>
        <TextScaled size="sm" className="font-semibold text-black">
          {item.title}
        </TextScaled>
        <TextScaled
          size="xs"
          numberOfLines={3}
          className="text-black"
          style={{ lineHeight: getScaleFactor() * 15 }}
        >
          {item.description}
        </TextScaled>
      </View>
      <View
        className="flex-row"
        style={{ gap: getScaleFactor() * 8 }}
      >
        <View className="flex-row items-center" style={{ gap: getScaleFactor() * 4 }}>
          <Image
            source={icons.heartIcon}
            style={{ width: getScaleFactor() * 20, height: getScaleFactor() * 20 }}
            resizeMode="contain"
          />
          <TextScaled size="sm" className="font-medium text-black">
            {item.comments}
          </TextScaled>
        </View>
        <View className="flex-row items-center" style={{ gap: getScaleFactor() * 4 }}>
          <Image
            source={icons.chatIcon}
            style={{ width: getScaleFactor() * 20, height: getScaleFactor() * 20 }}
            resizeMode="contain"
          />
          <TextScaled size="sm" className="font-medium text-black">
            {item.saves}
          </TextScaled>
        </View>
        <View className="flex-row items-center" style={{ gap: getScaleFactor() * 4 }}>
          <Image
            source={icons.saveIcon}
            style={{ width: getScaleFactor() * 20, height: getScaleFactor() * 20 }}
            resizeMode="contain"
          />
          <TextScaled size="sm" className="font-medium text-black">
            {item.views}
          </TextScaled>
        </View>
      </View>
    </View>
  </View>
);

export default RecipeListItem;
