'use client';

import CustomFilter from '@/components/Common/CustomFilter';
import { icons } from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import FoodGrid from '../../Common/Desktop/FoodGrid';

const dietaryFilterData = [
    { id: '1', name: 'Ăn chay', isSelected: false },
    { id: '2', name: 'Giàu đạm', isSelected: false },
    { id: '3', name: 'Kiêng đường', isSelected: false },
    { id: '4', name: 'Ít calo', isSelected: false },
    { id: '5', name: 'Không gluten', isSelected: false },
    { id: '6', name: 'Keto', isSelected: false },
    { id: '7', name: 'Paleo', isSelected: false },
    { id: '8', name: 'Mediterranean', isSelected: false },
];

const SearchResultsScreen = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchQuery = searchParams?.get('query') || 'Thịt Heo';
    const [searchText, setSearchText] = useState(searchQuery);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [isFilterSelected, setIsFilterSelected] = useState(true);

    const toggleFilter = (id: string) => {
        setSelectedFilters(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const toggleFilterIcon = () => {
        setIsFilterSelected(prev => !prev);
    };

    return (
        <div
            className="flex-1 overflow-y-auto px-16 pt-4"
        >
            {/* Status Bar and Search Input */}
            <div
                className="mb-2 flex w-full flex-row items-center justify-start gap-2"
            >
                <button onClick={() => router.back()}>
                    <Image
                        src={icons.caretLeftIcon}
                        alt="back"
                        width={24}
                        height={24}
                    />
                </button>
                <div
                    className="flex flex-1 flex-row items-center justify-start rounded-lg bg-white h-10 px-2 gap-4"
                >
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Tìm kiếm..."
                        className="flex-1 border-none bg-transparent outline-none text-sm font-medium text-black py-0"
                    />
                </div>
            </div>

            {/* Filter section */}
            <CustomFilter
                data={dietaryFilterData}
                selectedItems={selectedFilters}
                onToggleItem={toggleFilter}
                showFilterIcon={true}
                isFilterSelected={isFilterSelected}
                onToggleFilter={toggleFilterIcon}
            />
            <FoodGrid />
        </div>
    );
};

export default SearchResultsScreen;
