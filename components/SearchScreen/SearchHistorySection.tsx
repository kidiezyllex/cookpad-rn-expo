import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import { Image, View } from 'react-native';
import RecipeCarousel from '../Common/RecipeCarousel';
import TextScaled from '../Common/TextScaled';

const SearchHistorySection = () => {
    return (
        <View 
            style={{
                paddingHorizontal: getScaleFactor() * 16,
                paddingTop: getScaleFactor() * 16,
            }}
            className='flex-col'
        >
            <TextScaled
                size="base"
                className="font-bold text-black"
                style={{
                    marginBottom: getScaleFactor() * 8,
                }}
            >
                Lịch sử tìm kiếm
            </TextScaled>
            <View 
                style={{
                    marginBottom: getScaleFactor() * 8,
                }}
                className='flex-row justify-between items-center w-full'
            >
                <TextScaled
                    size="sm"
                    className="font-light text-textNeutralV1"
                >
                    Món bạn đã xem gần đây
                </TextScaled>
                <Image
                    source={icons.forwardArrow}
                    style={{
                        width: 20,
                        height: 20,
                    }}
                    resizeMode="contain"
                />
            </View>
            <RecipeCarousel />
        </View>
    );
};

export default SearchHistorySection;
