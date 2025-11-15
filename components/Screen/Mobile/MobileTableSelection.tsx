import { icons } from '@/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BackHeader from '@/components/Common/BackHeader';
import MobileFoodGrid from '@/components/Common/Mobile/FoodGrid';

const MobileTableSelection = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen bg-[#F1EEE8]">
            <BackHeader
                headerTitle="Bảng"
                onPress={() => router.back()}
            />
            <div className="flex-1 overflow-y-auto px-4">
                <div className="my-8 flex-col justify-between items-center w-full">
                    <span className="font-bold text-black text-center text-3xl">
                        Hải sản
                    </span>
                    <span className="font-light text-black text-center text-base">
                        14 Ghim
                    </span>
                </div>
                {/* Search and Filter */}
                <div className="flex-row items-center gap-1 w-full mb-4">
                    <div className="flex-row items-center bg-white rounded-lg flex-1 h-8 px-2 gap-4">
                        <Image
                            src={icons.searchIcon}
                            alt="Search"
                            width={100}
                            height={100}
                            quality={100}
                            draggable={false}
                            className="object-contain h-6 w-auto"
                        />
                        <span className="font-medium text-textNeutralV1 text-sm">
                            Tìm kiếm
                        </span>
                    </div>
                    <button className="bg-transparent border-none p-0 cursor-pointer">
                        <Image
                            src={icons.downUpIcon}
                            alt="Filter"
                            width={100}
                            height={100}
                            quality={100}
                            draggable={false}
                            className="object-contain h-8 w-auto"
                        />
                    </button>
                    <button className="bg-transparent border-none p-0 cursor-pointer">
                        <Image
                            src={icons.smallPlusIcon}
                            alt="Add"
                            width={100}
                            height={100}
                            quality={100}
                            draggable={false}
                            className="object-contain h-8 w-auto"
                        />
                    </button>
                </div>
                <MobileFoodGrid />
            </div>
        </div>
    );
};

export default MobileTableSelection;
