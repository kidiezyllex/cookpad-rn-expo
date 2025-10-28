import { Image, ScrollView, View } from 'react-native';

import TextScaled from '@/components/Common/TextScaled';
import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';

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
    <ScrollView
      className='bg-backgroundV1'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: getScaleFactor() * 16, paddingBottom: getScaleFactor() * 120 }}
    >
      <View style={{ paddingTop: getScaleFactor() * 16, gap: getScaleFactor() * 16 }}>
        {mockMaterials.map((material) => (
          <View
            key={material.id}
            style={{
              backgroundColor: 'white',
              borderRadius: getScaleFactor() * 8,
              paddingHorizontal: getScaleFactor() * 8,
              paddingBottom: getScaleFactor() * 16,
            }}
          >
            {/* Material Header */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: getScaleFactor() * 8,
                borderBottomWidth: 1,
                borderBottomColor: 'black',
              }}
            >
              <View style={{ flexDirection: 'row', gap: getScaleFactor() * 2, alignItems: 'center' }}>
                <TextScaled size="sm" className="text-textNeutralV1">
                  {material.title}
                </TextScaled>
              </View>
              <Image
                source={icons.forwardArrow}
                style={{ width: getScaleFactor() * 20, height: getScaleFactor() * 20, tintColor: "#595959" }}
                resizeMode="contain"
              />
            </View>

            {/* Material Items */}
            <View style={{ gap: getScaleFactor() * 4, paddingTop: getScaleFactor() * 8 }}>
              {material.items.map((item, index) => (
                <View key={index} style={{ flexDirection: 'row', gap: getScaleFactor() * 4, alignItems: 'center' }}>
                  <TextScaled size="base" className="font-bold text-black">
                    {item.quantity}
                  </TextScaled>
                  <TextScaled size="base" className="text-black" numberOfLines={1}>
                    {item.name}
                  </TextScaled>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MaterialTab;
