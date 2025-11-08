'use client';

import { icons } from '@/constants';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import BackHeader from '../Common/BackHeader';
import FoodGrid from '../Common/FoodGrid';
import TextScaled from '../Common/TextScaled';

const TableSelection = () => {
    const router = useRouter();
    const params = useSearchParams();
    const boardName = params?.get('name') ?? 'Hải sản';
    return (
        <div className="flex-1 bg-[#F1EEE8]">
            <BackHeader
                headerTitle="Bảng"
                onPress={() => router.back()}
            />
            <div
                className="px-4 flex flex-col items-start justify-start"
            >

                <div
                    className="flex w-full flex-col items-center justify-between mt-8 mb-8">
                    <TextScaled
                        size="3xl"
                        className="font-bold text-black text-center"
                    >
                        {boardName}
                    </TextScaled>
                    <TextScaled
                        size="base"
                        className="font-light text-black text-center"
                    >
                        14 Ghim
                    </TextScaled>
                </div>
                {/* Search and Filter */}
                <div
                    className="flex w-full flex-row items-center gap-1 mb-4"
                >
                    <div
                        className="flex flex-1 flex-row items-center rounded-lg bg-white h-8 px-2 gap-4"
                    >
                        <Image
                            src={icons.searchIcon}
                            alt="search"
                            width={24}
                            height={24}
                        />
                        <TextScaled size="sm" className="font-medium text-textNeutralV1">
                            Tìm kiếm
                        </TextScaled>
                    </div>
                    <button className="flex items-center justify-center">
                        <Image
                            src={icons.downUpIcon}
                            alt="sort"
                            width={32}
                            height={32}
                        />
                    </button>
                    <button className="flex items-center justify-center">
                        <Image
                            src={icons.smallPlusIcon}
                            alt="add"
                            width={32}
                            height={32}
                        />
                    </button>
                </div>
                <FoodGrid />
            </div>
        </div>
    );
};

export default TableSelection;
