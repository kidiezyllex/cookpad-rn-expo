'use client';

import { icons } from '@/constants';
import { useSuccessStore } from '@/store/successStore';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BackHeader from '../Common/BackHeader';
import CustomButton from '../Common/CustomButton';
import Input from '../Common/Input';
import TextScaled from '../Common/TextScaled';

const ingredientsData = [
    { id: '1', name: 'Thành phần 1', amount: '250g bột' },
    { id: '2', name: 'Thành phần 2', amount: '250g bột' },
];

const cookingStepsData = [
    { id: '1', step: 'Bước 1', description: 'Miêu tả bước 1' },
    { id: '2', step: 'Bước 2', description: 'Miêu tả bước 2' },
];

const CreateRecipeScreen = () => {
    const router = useRouter();
    const setSuccess = useSuccessStore((state) => state.setSuccess);

    const handlePublish = () => {
        setSuccess(
            'Tạo công thức thành công!',
            'Công thức của bạn đã được đăng tải và sẽ hiển thị cho mọi người.',
            '/(root)/tabs/home'
        );
        router.replace('/(root)/success');
    };

    const renderIngredientItem = (item: typeof ingredientsData[0]) => (
        <div
            className="flex w-full flex-row items-center justify-center gap-2"
        >
            <Image
                src={icons.activeFunnelIcon}
                alt="ingredient"
                width={24}
                height={24}
                className="brightness-[0.2]"
            />
            <div
                className="flex flex-1 items-center justify-center rounded-lg bg-[#F5F5F5] px-4 py-2 gap-2.5"
            >
                <TextScaled
                    size="base"
                    className="text-textNeutralV1"
                >
                    {item.amount}
                </TextScaled>
            </div>
            <Image
                src={icons.threeDotsIcon}
                alt="more"
                width={24}
                height={24}
                className="rotate-90"
            />
        </div>
    );

    const renderCookingStep = (item: typeof cookingStepsData[0]) => (
        <div
            className="flex w-full flex-col items-start gap-2"
        >
            <div
                className="flex w-full flex-col items-start gap-1"
            >
                <TextScaled
                    size="sm"
                    className="font-medium text-black"
                >
                    {item.step}
                </TextScaled>
                <div
                    className="flex w-full items-center rounded-lg border border-[#E5E5E5] bg-[#F5F5F5] h-10 p-2 gap-2"
                >
                    <TextScaled
                        size="base"
                        className="text-textNeutralV1"
                    >
                        {item.description}
                    </TextScaled>
                </div>
            </div>
            <div
                className="relative flex items-center justify-center rounded-lg bg-[#F5F5F5] w-20 h-20"
            >
                <Image
                    src={icons.cameraIcon}
                    alt="camera"
                    width={24}
                    height={24}
                />
            </div>
        </div>
    );

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <BackHeader
                headerTitle="Công thức món ăn"
                onPress={() => router.back()}
            />

            <div
                className="flex-1 overflow-y-auto bg-[#F1EEE8] pt-2 pb-[100px]"
            >
                {/* Main Form */}
                <div
                    className="flex w-full flex-col items-start justify-center p-4 gap-4"
                >
                    {/* Image Upload */}
                    <div
                        className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg bg-white"
                    >
                        <div
                            className="absolute flex flex-row items-center justify-center top-1/2 left-1/2 -translate-x-[100px] -translate-y-[10px] gap-2"
                        >
                            <Image
                                src={icons.cameraIcon}
                                alt="camera"
                                width={24}
                                height={24}
                            />
                            <TextScaled
                                size="sm"
                                className="font-medium text-textNeutralV1"
                            >
                                Đăng hình đại diện món ăn
                            </TextScaled>
                        </div>
                    </div>

                    {/* Recipe Name */}
                    <div
                        className="flex w-full flex-col items-start justify-center gap-1"
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            Tên món ăn
                        </TextScaled>
                        <Input
                            placeholder="Tên món ngon nhất nhà mình"
                            value=""
                            onChangeText={(_text) => {
                            }}
                        />
                    </div>

                    {/* Recipe Description */}
                    <div
                        className="flex w-full flex-col items-start justify-center h-[160px] gap-1"
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            Giới thiệu món ăn
                        </TextScaled>
                        <div
                            className="flex flex-1 flex-row items-start justify-center rounded-lg bg-white w-full p-2 pb-7 gap-2"
                        >
                            <TextScaled
                                size="base"
                                className="font-light text-textNeutralV1"
                            >
                                Hãy chia sẻ với mọi người về món này của bạn nhé. Ai hay điều gì đã truyền cảm hứng cho bạn nấu nó? Tại sao nó đặc biệt? Bạn thích thưởng thức nó theo cách nào?
                            </TextScaled>
                        </div>
                    </div>

                    {/* Portion and Time */}
                    <div
                        className="flex w-full flex-row items-start justify-center gap-3.5"
                    >
                        {/* Portion */}
                        <div
                            className="flex flex-1 flex-col items-start justify-center gap-1"
                        >
                            <TextScaled
                                size="base"
                                className="font-bold text-black"
                            >
                                Khẩu phần
                            </TextScaled>
                            <div
                                className="flex w-full flex-row items-center justify-between rounded-lg border border-[#E5E5E5] bg-white h-10 px-2 gap-2"
                            >
                                <button
                                    onClick={() => router.back()}
                                    className="flex items-center justify-center rounded bg-[#F5F5F5] w-6 h-6"
                                >
                                    <IoChevronBack size={16} color="#000000" />
                                </button>
                                <TextScaled
                                    size="base"
                                    className="text-center text-textNeutralV1"
                                >
                                    2
                                </TextScaled>
                                <button
                                    className="flex items-center justify-center rounded bg-[#F5F5F5] w-6 h-6"
                                >
                                    <IoChevronForward size={16} color="#000000" />
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        <div
                            className="relative w-px h-4"
                        />

                        {/* Time */}
                        <div
                            className="flex flex-1 flex-col items-start justify-center gap-1"
                        >
                            <TextScaled
                                size="base"
                                className="font-bold text-black"
                            >
                                Thời gian
                            </TextScaled>
                            <div
                                className="flex w-full flex-row items-center justify-start rounded-lg border border-[#E5E5E5] bg-white h-10 p-2 gap-2"
                            >
                                <TextScaled
                                    size="base"
                                    className="text-textNeutralV1"
                                >
                                    Giờ/Phút
                                </TextScaled>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ingredients Section */}
                <div
                    className="flex w-full flex-col p-2 gap-2"
                >
                    {/* Phần Nguyên liệu */}
                    <div
                        className="flex w-full flex-col items-start justify-center rounded-lg bg-white px-2 py-4 gap-4"
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            Nguyên liệu
                        </TextScaled>

                        <div
                            className="flex w-full flex-col items-start justify-center gap-2"
                        >
                            <div
                                className="flex w-full flex-col items-start justify-center gap-1"
                            >
                                <TextScaled
                                    size="sm"
                                    className="font-medium text-black"
                                >
                                    Thành phần 1
                                </TextScaled>
                                <div
                                    className="flex w-full flex-row items-center justify-start rounded-lg border border-[#E5E5E5] bg-[#F5F5F5] h-10 p-2 gap-2"
                                >
                                    <TextScaled
                                        size="base"
                                        className="text-textNeutralV1"
                                    >
                                        Thành phần 1
                                    </TextScaled>
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2">
                                {ingredientsData.map((item) => (
                                    <div key={item.id}>
                                        {renderIngredientItem(item)}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div
                            className="flex w-full flex-row items-start justify-center gap-4"
                        >
                            <button
                                className="flex w-[50%] flex-row items-center justify-center gap-2 p-1"
                            >
                                <Image
                                    src={icons.plusIcon}
                                    alt="plus"
                                    width={24}
                                    height={24}
                                    className="opacity-70"
                                />
                                <TextScaled
                                    size="sm"
                                    className="font-bold text-black"
                                >
                                    Nguyên liệu
                                </TextScaled>
                            </button>
                            <button
                                className="flex w-[50%] flex-row items-center justify-center gap-2 p-1"
                            >
                                <Image
                                    src={icons.plusIcon}
                                    alt="plus"
                                    width={24}
                                    height={24}
                                    className="opacity-70"
                                />
                                <TextScaled
                                    size="sm"
                                    className="font-bold text-black"
                                >
                                    Phần
                                </TextScaled>
                            </button>
                        </div>
                    </div>

                    {/* Phần cách làm */}
                    <div
                        className="flex w-full flex-col items-start justify-center rounded-lg bg-white p-4 gap-4"
                    >
                        <TextScaled
                            size="base"
                            className="font-bold text-black"
                        >
                            Cách làm
                        </TextScaled>

                        {/* Video Upload */}
                        <div
                            className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg bg-[#EEEEEE]"
                        >
                            <div
                                className="absolute flex flex-row items-center justify-center top-1/2 left-1/2 -translate-x-[100px] -translate-y-[10px] gap-2"
                            >
                                <Image
                                    src={icons.videoIcon}
                                    alt="video"
                                    width={24}
                                    height={24}
                                />
                                <TextScaled
                                    size="sm"
                                    className="font-medium text-textNeutralV1"
                                >
                                    Thêm video nấu món ăn
                                </TextScaled>
                            </div>
                        </div>

                        {/* Cooking Steps */}
                        <div
                            className="flex w-full flex-col items-start justify-center gap-2"
                        >
                            {cookingStepsData.map((item) => (
                                <div key={item.id}>
                                    {renderCookingStep(item)}
                                </div>
                            ))}
                        </div>

                        {/* Add Step Button */}
                        <div
                            className="flex w-full flex-row items-start justify-center gap-4"
                        >
                            <button
                                className="flex w-full flex-row items-center justify-center gap-2 p-1"
                            >
                                <Image
                                    src={icons.plusIcon}
                                    alt="plus"
                                    width={24}
                                    height={24}
                                    className="opacity-70"
                                />
                                <TextScaled
                                    size="sm"
                                    className="font-bold text-black"
                                >
                                    Thêm bước
                                </TextScaled>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-start shadow-lg"
            >
                <div
                    className="flex w-full flex-row items-start justify-center rounded-t-lg bg-white px-4 py-2 gap-2"
                >
                    <CustomButton
                        title="Lưu nháp"
                        bgVariant="ghost"
                        textVariant="ghost"
                        className="w-[48%]"
                    />
                    <CustomButton
                        title="Đăng tải"
                        bgVariant="primary"
                        textVariant="primary"
                        onPress={handlePublish}
                        className="w-[48%]"
                    />
                </div>

                {/* Home Indicator */}
                <div
                    className="relative w-full bg-white h-8"
                >
                    <div
                        className="absolute rounded-full bg-black w-[128px] h-[5px] left-[121px] top-[21px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateRecipeScreen;
