import TextScaled from "@/components/Common/TextScaled";
import { icons } from "@/constants";
import Image from 'next/image';
import { StaticImageData } from 'next/image';

// Type definition for recipe list item
export interface RecipeListItem {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  comments: number;
  saves: number;
  views: number;
}

interface RecipeListItemProps {
  item: RecipeListItem;
}

const RecipeListItem = ({ item }: RecipeListItemProps) => (
  <div
    className="flex flex-row rounded-lg bg-white mb-2"
  >
    <Image
      src={item.image}
      alt={item.title}
      width={100}
      height={100}
      className="rounded-tl-lg rounded-bl-lg object-cover"
    />
    <div
      className="px-3 py-2 gap-2 flex-1 flex flex-col"
    >
      <div>
        <TextScaled size="sm" className="font-semibold text-black">
          {item.title}
        </TextScaled>
        <TextScaled
          size="xs"
          className="text-black line-clamp-3 leading-5"
        >
          {item.description}
        </TextScaled>
      </div>
      <div
        className="flex flex-row gap-2"
      >
        <div className="flex flex-row items-center gap-1">
          <Image
            src={icons.heartIcon}
            alt="heart"
            width={20}
            height={20}
          />
          <TextScaled size="sm" className="font-medium text-black">
            {item.comments}
          </TextScaled>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Image
            src={icons.chatIcon}
            alt="chat"
            width={20}
            height={20}
          />
          <TextScaled size="sm" className="font-medium text-black">
            {item.saves}
          </TextScaled>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Image
            src={icons.saveIcon}
            alt="save"
            width={20}
            height={20}
          />
          <TextScaled size="sm" className="font-medium text-black">
            {item.views}
          </TextScaled>
        </div>
      </div>
    </div>
  </div>
);

export default RecipeListItem;
