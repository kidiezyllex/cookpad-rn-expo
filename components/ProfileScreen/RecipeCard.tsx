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
          className="rounded-tl-lg border-r border-white object-cover h-[110px] w-[67%]"
        />
        <div className="h-[110px] w-[33%] rounded-tr-lg ">
          <Image
            src={item.images[1]}
            alt={item.title}
            className="rounded-tr-lg object-cover h-[50%]"
          />
          <Image
            src={item.images[2]}
            alt={item.title}
            className="object-cover h-[50%]"
          />
        </div>
      </div>
      <div className="px-2 py-2 w-full">
        <p className="w-full font-medium text-start text-black mb-1 justify-start text-sm">
          {item.title}
        </p>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row items-center gap-1">
            <Image
              src={icons.saveIcon}
              alt="save"
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
            />
            <span className="text-textNeutralV1 text-start text-xs">
              {item.views}
            </span>
          </div>
          <span className="text-textNeutralV1 text-xs">
            {item.time}
          </span>
        </div>
      </div>
    </button>
  );
};

export default RecipeCard;
