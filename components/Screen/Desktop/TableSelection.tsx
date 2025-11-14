'use client';

import { icons } from '@/constants';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import BackHeader from '../../Common/BackHeader';
import FoodGrid from '../../Common/Desktop/FoodGrid';

const TableSelection = () => {
    const router = useRouter();
    const params = useSearchParams();
    const boardName = params?.get('name') ?? 'Hải sản';
    return (
        <div className="flex-1 bg-backgroundV1">
            <div className='w-full bg-white pl-16'>
                <BackHeader
                    headerTitle="Bảng món ăn"
                    onPress={() => router.back()}
                />
            </div>
            <div className="px-16 flex flex-col items-start justify-start">
                <div
                    className="flex w-full flex-col items-center justify-between mt-8 mb-8">
                    <p
                        className="font-bold text-black text-center text-3xl"
                    >
                        {boardName}
                    </p>
                    <p
                        className="font-light text-black text-center text-base"
                    >
                        14 Ghim
                    </p>
                </div>
                {/* Search and Filter */}
                <div
                    className="flex w-full flex-row items-center gap-1 mb-4"
                >
                    <div
                        className="flex flex-1 flex-row items-center rounded-lg bg-white h-9 px-2 gap-4"
                    >
                        <Image
                            src={icons.searchIcon}
                            alt="search"
                            width={24}
                            height={24}
                        />
                        <input
                            placeholder="Tìm kiếm"
                            className="flex-1 bg-transparent outline-none text-sm font-medium text-textNeutralV1"
                        />
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
