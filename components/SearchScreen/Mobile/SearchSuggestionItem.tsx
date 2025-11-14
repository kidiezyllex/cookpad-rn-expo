import { icons } from '@/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
        router.push(`/search/result?searchQuery=${encodeURIComponent(item.name)}`);
    };

    return (
        <button
            onClick={handlePress}
            className="w-full flex flex-row justify-start items-center gap-2"
        >
            <Image
                src={item.searched ? icons.timerIcon : icons.searchIcon}
                alt={item.searched ? "Timer icon" : "Search icon"}
                width={100}
                height={100}
                quality={100}
                draggable={false}
                className="object-contain h-6 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(35%) contrast(100%)' }}
            />
            <span className="text-textNeutralV1 text-sm flex-1 py-2 text-start">
                {item.name}
            </span>
            {item.searched && (
                <Image
                    src={icons.closeIcon}
                    alt="Close icon"
                    width={100}
                    height={100}
                    quality={100}
                    draggable={false}
                    className="object-contain h-6 w-auto"
                    style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(35%) contrast(100%)' }}
                />
            )}
        </button>
    );
};

export default SearchSuggestionItem;
