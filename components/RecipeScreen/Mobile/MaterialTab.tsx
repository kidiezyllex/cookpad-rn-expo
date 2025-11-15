'use client';

import Image from 'next/image';
import { icons } from '@/constants';

// Mock data for materials
const mockMaterials = [
  {
    id: 1,
    title: "Cho việc nướng gà",
    items: [
      { quantity: "2-3 muỗng canh", name: "dầu ăn" },
      { quantity: "Khoảng 1,5-2 kg", name: "gà tươi, làm sạch" },
      { quantity: "1 muỗng cà phê", name: "muối và tiêu xay nhuyễn" },
    ],
  },
  {
    id: 2,
    title: "Cho sốt tiêu đen",
    items: [
      { quantity: "2-3 tép", name: "tỏi, băm nhỏ" },
      { quantity: "2 muỗng canh", name: "dầu ăn" },
      { quantity: "1/4 cốc", name: "nước mắm" },
      { quantity: "2-3 muỗng canh", name: "đường nâu" },
      { quantity: "2-3 muỗng canh", name: "nước cốt chanh tươi" },
      { quantity: "2-3 muỗng canh", name: "tiêu đen xay nhuyễn" },
    ],
  },
];

const MaterialTab = () => {
  return (
    <div className="bg-backgroundV1 overflow-y-auto px-4 pb-30">
      <div className="flex flex-col pt-4 gap-4">
        {mockMaterials.map((material) => (
          <div
            key={material.id}
            className="bg-white rounded-lg px-2 pb-4 shadow-md"
          >
            {/* Material Header */}
            <div className="flex flex-row justify-between items-center py-2 border-b border-black">
              <div className="flex flex-row gap-0.5 items-center">
                <span className="text-sm text-textNeutralV1">
                  {material.title}
                </span>
              </div>
              <Image
                src={icons.forwardArrow}
                alt="Forward arrow"
                width={100}
                height={100}
                quality={100}
                draggable={false}
                className="object-contain h-5 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(92%)' }}
              />
            </div>

            <div className="flex flex-col gap-1 pt-2">
              {material.items.map((item, index) => (
                <div key={index} className="flex flex-row gap-1 items-center">
                  <span className="text-base font-bold text-black">
                    {item.quantity}
                  </span>
                  <span className="text-base text-black truncate">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialTab;
