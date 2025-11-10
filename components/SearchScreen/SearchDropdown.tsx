'use client';

import { icons } from '@/constants';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import TextScaled from '../Common/TextScaled';
import SearchSuggestionItem from './SearchSuggestionItem';
import { searchSuggestionsData } from './mockData';

interface SearchDropdownProps {
    searchText: string;
    isOpen: boolean;
    onClose: () => void;
}

const SearchDropdown = ({ searchText, isOpen, onClose }: SearchDropdownProps) => {
    const router = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const getFilteredData = () => {
        if (searchText.trim() === '') {
            return searchSuggestionsData.filter(item => item.searched === true);
        } else {
            return searchSuggestionsData.filter(item =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 z-50 bg-white mt-2 rounded-lg shadow-lg max-h-[400px] overflow-y-auto"
        >
            <div className="flex flex-col py-2 px-4">
                {getFilteredData().map((item) => (
                    <div key={item.id} onClick={onClose}>
                        <SearchSuggestionItem item={item} />
                    </div>
                ))}
            </div>
            <button
                onClick={() => {
                    router.push('/search-bar');
                    onClose();
                }}
                className="w-full text-center py-2 px-4"
            >
                <TextScaled
                    size="sm"
                    className="text-customPrimary cursor-pointer"
                >
                    Xem tất cả
                </TextScaled>
            </button>
        </div>
    );
};

export default SearchDropdown;

