import TextScaled from '@/components/Common/TextScaled';
import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, Pressable, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

interface FilterItem {
    id: string;
    name: string;
    isSelected?: boolean;
}

interface CustomFilterProps {
    data: FilterItem[];
    selectedItems: string[];
    onToggleItem: (id: string) => void;
    renderCustomItem?: (item: FilterItem) => React.ReactNode;
    showFilterIcon?: boolean;
    isFilterSelected?: boolean;
    onToggleFilter?: () => void;
}

const CustomFilter = ({ 
    data, 
    selectedItems, 
    onToggleItem, 
    renderCustomItem,
    showFilterIcon = true,
    isFilterSelected = true,
    onToggleFilter
}: CustomFilterProps) => {
    const renderItemChip = (item: FilterItem) => (
        <Pressable
            key={item.id}
            onPress={() => onToggleItem(item.id)}
            style={{
                height: getScaleFactor() * 32,
                paddingHorizontal: getScaleFactor() * 16,
                paddingVertical: getScaleFactor() * 4,
                backgroundColor: selectedItems.includes(item.id) ? '#E36137' : '#FFEFE9',
                borderRadius: getScaleFactor() * 8,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TextScaled
                size="sm"
                className={`font-bold ${selectedItems.includes(item.id) ? 'text-white' : 'text-customPrimary'}`}
            >
                {item.name}
            </TextScaled>
        </Pressable>
    );

    const filterData = showFilterIcon 
        ? [{ id: 'filter', name: 'Filter', isFilter: true }, ...data]
        : data;

    return (
        <View
            style={{
                height: getScaleFactor() * 40,
                marginBottom: getScaleFactor() * 8,
            }}
        >
            <SwiperFlatList
                data={filterData}
                renderItem={({ item }) => (
                    <View
                        style={{
                            marginRight: getScaleFactor() * 4,
                        }}
                    >
                        {item.isFilter ? (
                            <Pressable
                                onPress={onToggleFilter}
                                style={{
                                    height: getScaleFactor() * 32,
                                    width: getScaleFactor() * 32,
                                    backgroundColor: isFilterSelected ? '#E36137' : '#FFEFE9',
                                    borderRadius: getScaleFactor() * 8,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image 
                                    source={icons.activeFunnelIcon} 
                                    style={{ 
                                        width: getScaleFactor() * 24, 
                                        height: getScaleFactor() * 24,
                                        tintColor: isFilterSelected ? 'white' : undefined
                                    }} 
                                />
                            </Pressable>
                        ) : (
                            renderCustomItem ? renderCustomItem(item) : renderItemChip(item)
                        )}
                    </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 0,
                }}
            />
        </View>
    );
};

export default CustomFilter;
