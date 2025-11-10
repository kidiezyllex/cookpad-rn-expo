import { icons } from '@/constants';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface FilterItem {
    id: string;
    name: string;
    isSelected?: boolean;
    isFilter?: boolean;
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
        <button
            key={item.id}
            onClick={() => onToggleItem(item.id)}
            className={`h-8 px-4 py-1 rounded-lg flex items-center justify-center ${
                selectedItems.indexOf(item.id) !== -1 ? 'bg-[#E36137]' : 'bg-[#FFEFE9]'
            }`}
        >
            <p
                className={`font-bold ${(selectedItems.indexOf(item.id) !== -1) ? 'text-white' : 'text-customPrimary'} text-sm`}
            >
                {item.name}
            </p>
        </button>
    );

    const filterData = showFilterIcon 
        ? [{ id: 'filter', name: 'Filter', isFilter: true }, ...data]
        : data;

    return (
        <div
            className="h-10 mb-2"
        >
            <Swiper slidesPerView={'auto'} spaceBetween={4}>
                {filterData.map((item) => (
                    <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                        <div
                            className="mr-1"
                        >
                            {item.isFilter ? (
                                <button
                                    onClick={onToggleFilter}
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                        isFilterSelected ? 'bg-[#E36137]' : 'bg-[#FFEFE9]'
                                    }`}
                                >
                                    <Image 
                                        src={icons.activeFunnelIcon} 
                                        alt="filter"
                                        className={`w-6 h-6 ${
                                            isFilterSelected ? 'brightness-0 invert' : ''
                                        }`}
                                    />
                                </button>
                            ) : (
                                renderCustomItem ? renderCustomItem(item) : renderItemChip(item)
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CustomFilter;
