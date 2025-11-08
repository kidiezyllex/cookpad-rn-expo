import TextScaled from "@/components/Common/TextScaled";
import { icons } from "@/constants";
import { useRouter } from "next/navigation";
import Image from 'next/image';

import { StaticImageData } from 'next/image';

// Type definition for recipe item
export interface RecipeItem {
  id: number;
  title: string;
  views: number;
  time: string;
  images: (StaticImageData | string)[];
}

interface RecipeCardProps {
  item: RecipeItem;
}

const RecipeCard = ({ item }: RecipeCardProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/table-selection')}
      className="rounded-lg bg-white shadow-sm"
    >
      <div className="flex flex-row">
        <Image
          src={item.images[0]}
          alt={item.title}
          width={112}
          height={112}
          className="rounded-tl-lg border-r border-white object-cover"
        />
        <div>
          <Image
            src={item.images[1]}
            alt={item.title}
            width={56}
            height={56}
            className="rounded-tr-lg object-cover"
          />
          <Image
            src={item.images[2]}
            alt={item.title}
            width={56}
            height={56}
            className="object-cover"
          />
        </div>
      </div>
      <div className="px-2 py-2">
        <TextScaled size="sm" className="font-medium text-black mb-1">
          {item.title}
        </TextScaled>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row items-center gap-1">
            <Image
              src={icons.saveIcon}
              alt="save"
              width={16}
              height={16}
            />
            <TextScaled size="xs" className="text-textNeutralV1">
              {item.views}
            </TextScaled>
          </div>
          <TextScaled size="xs" className="text-textNeutralV1">
            {item.time}
          </TextScaled>
        </div>
      </div>
    </button>
  );
};

export default RecipeCard;
