import { icons } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import TextScaled from '../Common/TextScaled';

interface SearchSuggestionItemProps {
    item: {
        id: string;
        name: string;
        searched: boolean;
    };
}

const SearchSuggestionItem = ({ item }: SearchSuggestionItemProps) => {
    const router = useRouter();

    const handlePress = () => {
        router.push(`/search/result?query=${encodeURIComponent(item.name)}`);
    };

    return (
        <button
            onClick={handlePress}
            className="flex flex-row items-center justify-start bg-transparent w-full gap-2 px-0"
        >
            <Image
                src={item.searched ? icons.timerIcon : icons.searchIcon}
                alt={item.name}
                width={24}
                height={24}
            />
            <TextScaled
                size="sm"
                className="text-textNeutralV1 flex-1 py-2 text-start"
            >
                {item.name}
            </TextScaled>
            {item.searched && (
                <span
                    className="flex items-center justify-center w-6 h-6"
                >
                    <Image
                        src={icons.closeIcon}
                        alt="remove"
                        width={24}
                        height={24}
                    />
                </span>
            )}
        </button>
    );
};

export default SearchSuggestionItem;
