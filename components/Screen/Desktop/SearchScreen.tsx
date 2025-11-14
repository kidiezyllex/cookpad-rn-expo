'use client';

import HeroSection from '../../SearchScreen/Desktop/HeroSection';
import SearchHistorySection from '../../SearchScreen/Desktop/SearchHistorySection';
import SuggestedTopicsSection from '../../SearchScreen/Desktop/SuggestedTopicsSection';

const SearchScreen = () => {
    return (
        <div className="flex-1 bg-backgroundV1 px-16">
            <div className='py-4 bg-backgroundV1'>
                <HeroSection />
            </div>
            <SearchHistorySection />
            <SuggestedTopicsSection />
        </div>
    );
};

export default SearchScreen;
