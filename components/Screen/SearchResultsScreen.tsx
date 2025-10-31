import CustomFilter from '@/components/Common/CustomFilter';
import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { useRoute } from '@react-navigation/native';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FoodGrid from '../Common/FoodGrid';

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
    const route = useRoute();
    const searchQuery = (route.params as { searchQuery?: string })?.searchQuery || 'Thịt Heo';
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
        <SafeAreaView className="flex-1" edges={['top', 'bottom', 'left', 'right']} style={{ backgroundColor: '#F1EEE8' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    paddingHorizontal: getScaleFactor() * 16,
                    paddingTop: getScaleFactor() * 16,
                }}
            >
                {/* Status Bar and Search Input */}
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: getScaleFactor() * 8,
                        marginBottom: getScaleFactor() * 8,
                    }}
                >
                    <Pressable onPress={() => router.back()}>
                        <Image
                            source={icons.caretLeftIcon}
                            style={{
                                width: getScaleFactor() * 24,
                                height: getScaleFactor() * 24
                            }}
                            resizeMode="contain"
                        />
                    </Pressable>
                    <View
                        style={{
                            flex: 1,
                            height: getScaleFactor() * 40,
                            paddingHorizontal: getScaleFactor() * 8,
                            backgroundColor: 'white',
                            borderRadius: getScaleFactor() * 8,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: getScaleFactor() * 16,
                        }}
                    >
                        <TextInput
                            value={searchText}
                            onChangeText={setSearchText}
                            placeholder="Tìm kiếm..."
                            style={{
                                flex: 1,
                                fontSize: getScaleFactor() * 14,
                                fontWeight: '500',
                                color: 'black',
                                paddingVertical: 0,
                            }}
                        />
                    </View>
                </View>

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
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchResultsScreen;
