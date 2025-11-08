'use client';

import HeroSection from '../SearchScreen/HeroSection';
import SearchHistorySection from '../SearchScreen/SearchHistorySection';
import SuggestedTopicsSection from '../SearchScreen/SuggestedTopicsSection';

const SearchScreen = () => {
    return (
        <div className="flex-1 bg-backgroundV1">
            <HeroSection />
            <SearchHistorySection />
            <SuggestedTopicsSection />
        </div>
    );
};

export default SearchScreen;
