import { icons } from '@/constants';
import Image from 'next/image';

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
    <div
      className='bg-backgroundV1 px-16'
    >
      <div className="flex flex-col pt-4 gap-4">
        {mockMaterials.map((material) => (
          <div
            key={material.id}
            className="bg-white rounded-lg px-2 pb-4"
          >
            {/* Material Header */}
            <div
              className="flex flex-row items-center justify-between py-2 border-b border-black"
            >
              <div className="flex flex-row items-center gap-0.5">
                <span className="text-textNeutralV1 text-sm">
                  {material.title}
                </span>
              </div>
              <Image
                src={icons.forwardArrow}
                alt="forward"
                width={20}
                height={20}
                className="grayscale brightness-[0.35]"
              />
            </div>

            {/* Material Items */}
            <div className="flex flex-col gap-1 pt-2">
              {material.items.map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-1">
                  <p className="font-bold text-black text-base">
                    {item.quantity}
                  </p>
                  <p className="text-black text-base">
                    {item.name}
                  </p>
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
