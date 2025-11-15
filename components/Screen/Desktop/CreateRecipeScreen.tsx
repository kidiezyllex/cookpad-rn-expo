'use client';

import { useState, useRef, useEffect } from 'react';
import { icons } from '@/constants';
import { useSuccessStore } from '@/store/successStore';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BackHeader from '../../Common/BackHeader';
import CustomButton from '../../Common/CustomButton';

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
    const [portion, setPortion] = useState(2);
    const [recipeImage, setRecipeImage] = useState<string | null>(null);
    const [recipeImageFile, setRecipeImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [stepImages, setStepImages] = useState<Record<string, string>>({});
    const [stepImageFiles, setStepImageFiles] = useState<Record<string, File>>({});
    const stepFileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});
    const [recipeVideo, setRecipeVideo] = useState<string | null>(null);
    const [recipeVideoFile, setRecipeVideoFile] = useState<File | null>(null);
    const videoInputRef = useRef<HTMLInputElement>(null);

    const handleDecreasePortion = () => {
        if (portion > 1) {
            setPortion(portion - 1);
        }
    };

    const handleIncreasePortion = () => {
        setPortion(portion + 1);
    };

    const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Vui lòng chọn file ảnh hợp lệ');
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                alert('Kích thước ảnh không được vượt quá 5MB');
                return;
            }
            setRecipeImageFile(file);
            const imageUrl = URL.createObjectURL(file);
            setRecipeImage(imageUrl);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemoveImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (recipeImage) {
            URL.revokeObjectURL(recipeImage);
        }
        setRecipeImage(null);
        setRecipeImageFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleStepImageSelect = (stepId: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Vui lòng chọn file ảnh hợp lệ');
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                alert('Kích thước ảnh không được vượt quá 5MB');
                return;
            }
            if (stepImages[stepId]) {
                URL.revokeObjectURL(stepImages[stepId]);
            }
            setStepImageFiles(prev => ({ ...prev, [stepId]: file }));
            const imageUrl = URL.createObjectURL(file);
            setStepImages(prev => ({ ...prev, [stepId]: imageUrl }));
        }
    };

    const handleStepImageClick = (stepId: string) => {
        stepFileInputRefs.current[stepId]?.click();
    };

    const handleRemoveStepImage = (stepId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (stepImages[stepId]) {
            URL.revokeObjectURL(stepImages[stepId]);
        }
        setStepImages(prev => {
            const newState = { ...prev };
            delete newState[stepId];
            return newState;
        });
        setStepImageFiles(prev => {
            const newState = { ...prev };
            delete newState[stepId];
            return newState;
        });
        if (stepFileInputRefs.current[stepId]) {
            stepFileInputRefs.current[stepId]!.value = '';
        }
    };

    const handleVideoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('video/')) {
                alert('Vui lòng chọn file video hợp lệ');
                return;
            }
            if (file.size > 100 * 1024 * 1024) {
                alert('Kích thước video không được vượt quá 100MB');
                return;
            }
            setRecipeVideoFile(file);
            const videoUrl = URL.createObjectURL(file);
            setRecipeVideo(videoUrl);
        }
    };

    const handleVideoClick = () => {
        videoInputRef.current?.click();
    };

    const handleRemoveVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (recipeVideo) {
            URL.revokeObjectURL(recipeVideo);
        }
        setRecipeVideo(null);
        setRecipeVideoFile(null);
        if (videoInputRef.current) {
            videoInputRef.current.value = '';
        }
    };

    useEffect(() => {
        return () => {
            if (recipeImage) {
                URL.revokeObjectURL(recipeImage);
            }
            if (recipeVideo) {
                URL.revokeObjectURL(recipeVideo);
            }
            Object.values(stepImages).forEach(url => {
                URL.revokeObjectURL(url);
            });
        };
    }, [recipeImage, recipeVideo, stepImages]);

    const handlePublish = () => {
        setSuccess(
            'Tạo công thức thành công!',
            'Công thức của bạn đã được đăng tải và sẽ hiển thị cho mọi người.',
            '/'
        );
        router.replace('/success');
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
            <input
                type="text"
                defaultValue={item.amount}
                className="flex-1 rounded-lg bg-[#F5F5F5] px-4 py-2 text-base text-textNeutralV1 outline-none"
            />
            <Image
                src={icons.threeDotsIcon}
                alt="more"
                width={24}
                height={24}
                className="rotate-90"
            />
        </div>
    );

    const renderCookingStep = (item: typeof cookingStepsData[0]) => {
        const stepImage = stepImages[item.id];
        return (
            <div
                className="flex w-full flex-col items-start gap-2"
            >
                <div
                    className="flex w-full flex-col items-start gap-1"
                >
                    <p
                        className="font-medium text-black text-sm"
                    >
                        {item.step}
                    </p>
                    <input
                        type="text"
                        defaultValue={item.description}
                        className="w-full rounded-lg border border-[#E5E5E5] bg-[#F5F5F5] h-10 p-2 text-base text-textNeutralV1 outline-none"
                    />
                </div>
                <div
                    className="relative flex items-center justify-center rounded-lg bg-[#F5F5F5] w-20 h-20 overflow-hidden cursor-pointer border border-[#E5E5E5]"
                    onClick={() => handleStepImageClick(item.id)}
                >
                    <input
                        ref={(el) => {
                            stepFileInputRefs.current[item.id] = el;
                        }}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleStepImageSelect(item.id, e)}
                        className="hidden"
                    />
                    {stepImage ? (
                        <>
                            <img
                                src={stepImage}
                                alt={`Step ${item.id} preview`}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={(e) => handleRemoveStepImage(item.id, e)}
                                className="absolute top-1 right-1 flex items-center justify-center w-6 h-6 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-opacity z-10"
                            >
                                <span className="text-white text-xs font-bold">×</span>
                            </button>
                        </>
                    ) : (
                        <Image
                            src={icons.cameraIcon}
                            alt="camera"
                            width={24}
                            height={24}
                        />
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <div className="w-full pl-16">
                <BackHeader
                    headerTitle="Công thức món ăn"
                    onPress={() => router.back()}
                />
            </div>
            <div
                className="flex-1 overflow-y-auto bg-backgroundV1 pt-4 px-16"
            >
                {/* Main Form */}
                <div className="flex w-full flex-col items-start justify-center gap-4">
                    <div className='grid grid-cols-2 gap-4 w-full items-stretch pb-4'>
                        <div
                            className="flex w-full flex-col items-start justify-start gap-1 h-full"
                        >
                            <p
                                className="font-bold text-black text-base"
                            >
                                Ảnh món ăn
                            </p>
                            {/* Image Upload */}
                            <div
                                className="relative flex flex-1 h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white border border-[#E5E5E5] cursor-pointer"
                                onClick={handleImageClick}
                            >
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageSelect}
                                    className="hidden"
                                />
                                {recipeImage ? (
                                    <>
                                        <img
                                            src={recipeImage}
                                            alt="Recipe preview"
                                            className="w-full h-full object-cover"
                                        />
                                        <button
                                            onClick={handleRemoveImage}
                                            className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-opacity z-10"
                                        >
                                            <span className="text-white text-xl font-bold">×</span>
                                        </button>
                                    </>
                                ) : (
                                    <div
                                        className="absolute flex flex-row items-center justify-center top-1/2 left-1/2 -translate-x-[100px] -translate-y-[10px] gap-2"
                                    >
                                        <Image
                                            src={icons.cameraIcon}
                                            alt="camera"
                                            width={24}
                                            height={24}
                                        />
                                        <p
                                            className="font-medium text-textNeutralV1 cursor-pointer text-sm"
                                        >
                                            Đăng hình đại diện món ăn
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 h-full'>
                            {/* Recipe Name */}
                            <div
                                className="flex w-full flex-col items-start justify-center gap-1"
                            >
                                <p
                                    className="font-bold text-black text-base"
                                >
                                    Tên món ăn
                                </p>
                                <input
                                    type="text"
                                    placeholder="Tên món ngon nhất nhà mình"
                                    className="w-full focus:ring-2 focus:ring-customPrimary flex-1 rounded-lg border-none text-base text-[#979797] bg-white h-10 min-h-10 outline-none font-light p-2"
                                />
                            </div>
                            {/* Recipe Description */}
                            <div
                                className="flex w-full flex-col items-start justify-center gap-1"
                            >
                                <p
                                    className="font-bold text-black text-base"
                                >
                                    Giới thiệu món ăn
                                </p>
                                <textarea
                                    rows={4}
                                    placeholder="Hãy chia sẻ với mọi người về món này của bạn nhé. Ai hay điều gì đã truyền cảm hứng cho bạn nấu nó? Tại sao nó đặc biệt? Bạn thích thưởng thức nó theo cách nào?"
                                    className="w-full focus:ring-2 focus:ring-customPrimary flex-1 rounded-lg border-none text-base text-[#979797] bg-white outline-none font-light p-2 resize-none"
                                />
                            </div>
                            {/* Portion and Time */}
                            <div
                                className="flex w-full flex-row items-start justify-center gap-3.5"
                            >
                                {/* Portion */}
                                <div
                                    className="flex flex-1 flex-col items-start justify-center gap-1"
                                >
                                    <p
                                        className="font-bold text-black text-base"
                                    >
                                        Khẩu phần
                                    </p>
                                    <div
                                        className="flex w-full flex-row items-center justify-between rounded-lg border border-[#E5E5E5] bg-white h-10 min-h-10 px-2 gap-2"
                                    >
                                        <button
                                            onClick={handleDecreasePortion}
                                            className="flex items-center justify-center rounded bg-[#F5F5F5] w-6 h-6"
                                        >
                                            <IoChevronBack size={16} color="#000000" />
                                        </button>
                                        <p
                                            className="text-center text-textNeutralV1 text-base"
                                        >
                                            {portion}
                                        </p>
                                        <button
                                            onClick={handleIncreasePortion}
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
                                    <p
                                        className="font-bold text-black text-base"
                                    >
                                        Thời gian
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Giờ/Phút"
                                        className="w-full focus:ring-2 focus:ring-customPrimary flex-1 rounded-lg border-none text-base text-[#979797] bg-white h-10 min-h-10 outline-none font-light p-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Ingredients Section */}
                <div
                    className="flex w-full flex-col gap-2"
                >
                    {/* Phần Nguyên liệu */}
                    <div
                        className="flex w-full flex-col items-start justify-center rounded-lg bg-white px-2 py-4 gap-4"
                    >
                        <p
                            className="font-bold text-black text-base"
                        >
                            Nguyên liệu
                        </p>
                        <div
                            className="flex w-full flex-col items-start justify-center gap-2"
                        >
                            <div
                                className="flex w-full flex-col items-start justify-center gap-1"
                            >
                                <p
                                    className="font-medium text-black text-sm"
                                >
                                    Thành phần 1
                                </p>
                                <input
                                    type="text"
                                    defaultValue="Thành phần 1"
                                    className="w-full rounded-lg border border-[#E5E5E5] bg-[#F5F5F5] h-10 p-2 text-base text-textNeutralV1 outline-none"
                                />
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
                            className="w-full grid grid-cols-2 gap-4"
                        >
                            <button
                                className="flex flex-row text-black hover:bg-orange-50 hover:text-customPrimary items-center justify-center gap-2 p-1 rounded-lg transition-all duration-100"
                            >
                                <Image
                                    src={icons.plusIcon}
                                    alt="plus"
                                    width={24}
                                    height={24}
                                />
                                <span className="font-bold text-sm">
                                    Nguyên liệu
                                </span>
                            </button>
                            <button
                                className="flex flex-row items-center text-black hover:bg-orange-50 hover:text-customPrimary justify-center gap-2 p-1"
                            >
                                <Image
                                    src={icons.plusIcon}
                                    alt="plus"
                                    width={24}
                                    height={24}
                                />
                                <span className="font-bold text-sm">
                                    Phần
                                </span>
                            </button>
                        </div>
                    </div>
                    {/* Phần cách làm */}
                    <div
                        className="flex w-full flex-col items-start justify-center rounded-lg bg-white p-4 gap-4"
                    >
                        <p
                            className="font-bold text-black text-base"
                        >
                            Cách làm
                        </p>

                        {/* Video Upload */}
                        <div
                            className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg bg-[#EEEEEE] cursor-pointer"
                            onClick={handleVideoClick}
                        >
                            <input
                                ref={videoInputRef}
                                type="file"
                                accept="video/*"
                                onChange={handleVideoSelect}
                                className="hidden"
                            />
                            {recipeVideo ? (
                                <>
                                    <video
                                        src={recipeVideo}
                                        className="w-full h-full object-cover"
                                        controls
                                    />
                                    <button
                                        onClick={handleRemoveVideo}
                                        className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-opacity z-10"
                                    >
                                        <span className="text-white text-xl font-bold">×</span>
                                    </button>
                                </>
                            ) : (
                                <div
                                    className="absolute flex flex-row items-center justify-center top-1/2 left-1/2 -translate-x-[100px] -translate-y-[10px] gap-2"
                                >
                                    <Image
                                        src={icons.videoIcon}
                                        alt="video"
                                        width={24}
                                        height={24}
                                    />
                                    <p
                                        className="font-medium text-textNeutralV1 cursor-pointer text-sm"
                                    >
                                        Thêm video nấu món ăn
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Cooking Steps */}
                        <div
                            className="grid grid-cols-3 w-full items-start justify-center gap-2"
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
                                <p
                                    className="font-bold text-black text-sm"
                                >
                                    Thêm bước
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full grid grid-cols-2 bg-white p-4 rounded-lg gap-4 mt-4"
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
            </div>
        </div>
    );
};

export default CreateRecipeScreen;
