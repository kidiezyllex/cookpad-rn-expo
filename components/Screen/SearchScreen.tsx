import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroSection from '../SearchScreen/HeroSection';
import SearchHistorySection from '../SearchScreen/SearchHistorySection';
import SuggestedTopicsSection from '../SearchScreen/SuggestedTopicsSection';

const SearchScreen = () => {
    return (
        <SafeAreaView className="flex-1" edges={['bottom', 'left', 'right']}>
            <ScrollView
                className='bg-backgroundV1'
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <HeroSection />
                <SearchHistorySection />
                <SuggestedTopicsSection />
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;
