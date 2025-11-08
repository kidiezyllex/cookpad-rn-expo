'use client';

import { icons } from '@/constants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import TextScaled from '../Common/TextScaled';
import SearchSuggestionItem from '../SearchScreen/SearchSuggestionItem';
import { searchSuggestionsData } from '../SearchScreen/mockData';

const SearchBarScreen = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState('');

    const getFilteredData = () => {
        if (searchText.trim() === '') {
            return searchSuggestionsData.filter(item => item.searched === true);
        } else {
            return searchSuggestionsData.filter(item =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#F1EEE8]">
            <div
                className="flex flex-col items-start justify-start bg-[#F1EEE8] px-4 pt-4"
            >
                {/* Status Bar and Search Input */}
                <div
                    className="flex w-full flex-row items-center justify-start gap-2"
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

                {/* Search Suggestions */}
                <div
                    className="flex w-full flex-col py-2"
                >
                    {getFilteredData().map((item) => (
                        <SearchSuggestionItem key={item.id} item={item} />
                    ))}
                </div>
                <TextScaled
                    size="sm"
                    className="w-full text-center text-customPrimary mt-0.25"
                >
                    Xem tất cả
                </TextScaled>
            </div>
        </div>
    );
};

export default SearchBarScreen;
