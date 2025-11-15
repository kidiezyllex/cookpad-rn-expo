import { useRouter } from 'next/navigation';
import Image from 'next/image';

import CustomButton from '@/components/Common/CustomButton';
import { icons, images } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';
import RecipeCarousel from '@/components/Common/RecipeCarousel';

// Mock data for the food detail
const mockFoodDetail = {
    id: 1,
    title: "Gà nướng tiêu đen",
    author: {
        name: "Otaku Lê",
        avatar: images.sampleAvatar,
        kitchenFriends: 28,
        hashtag: "Gà",
        hashtagCount: 15,
    },
    description: "Create a 1/7 scale commercialized figurine of the characters in the picture. The figurine wears an extremely glossy suit in a realistic style, in a real environment. The figurine is placed on a computer desk. The figurine features a round, transparent acrylic base with no text. The image depict a freaking garbage bin on the faceground. I don't know exactly",
    hashtags: ["Gà nướng", "Tiêu Đen", "NCKD"],
    comments: 16,
    saves: 34,
    image: images.sampleFood1,
};

const mockComments = [
    {
        id: 1,
        user: "Nobita",
        avatar: images.sampleAvatar2,
        date: "23/11/2022",
        content: "Mở file → chọn khung text → phần Font bên phải sẽ hiển thị danh sách font của máy.",
        likes: 16,
        replies: 2,
    },
    {
        id: 2,
        user: "Mun Ngáo",
        avatar: images.sampleAvatar,
        date: "25/01/2023",
        content: "Mở file → chọn khung text → phần Font bên phải sẽ hiển thị danh sách font của máy.",
        likes: 16,
        replies: 2,
    },
];

const mockRelatedFoods = [
    {
        id: 1,
        title: "Tôm hoàng đế ánh kim",
        image: images.sampleFood2,
        time: "3h 30m",
        saves: 234,
    },
    {
        id: 2,
        title: "Tôm hoàng đế ánh kim",
        image: images.sampleFood3,
        time: "3h 30m",
        saves: 234,
    },
    {
        id: 3,
        title: "Tôm hoàng đế ánh kim",
        image: images.sampleFood1,
        time: "3h 30m",
        saves: 234,
    },
];

const MobileFoodDetailScreen = () => {
    const router = useRouter();
    const scaleFactor = getScaleFactor();

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="overflow-y-auto pb-12">
                {/* Hero Image */}
                <div className="relative w-full h-[375px]">
                    <Image
                        src={mockFoodDetail.image}
                        alt={mockFoodDetail.title}
                        fill
                        className="object-cover"
                        quality={100}
                        draggable={false}
                    />
                </div>

                {/* Header */}
                <div className="absolute top-0 left-0 right-0">
                    <div className="flex flex-row justify-between items-center h-11 px-4">
                        <button onClick={() => router.back()} className="bg-transparent border-none p-0 cursor-pointer">
                            <svg width={scaleFactor * 24} height={scaleFactor * 24} viewBox="0 0 24 24" fill="none">
                                <path d="M15 18l-6-6 6-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <span className="font-bold text-white text-base">
                            Món ăn
                        </span>

                        <button className="bg-transparent border-none p-0 cursor-pointer">
                            <Image
                                src={icons.threeDotsIcon}
                                alt="More options"
                                width={100}
                                height={100}
                                quality={100}
                                draggable={false}
                                className="object-contain h-6 w-auto brightness-0 invert"
                            />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className='bg-backgroundV1 p-4 space-y-6'>
                    {/* Food Detail */}
                    <div className="flex flex-col gap-4 pb-4 border-b border-[#979797]">
                        <span className="font-medium text-black text-2xl">
                            {mockFoodDetail.title}
                        </span>

                        {/* Author Section */}
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-2">
                                <div className="relative w-10 h-10">
                                    <Image
                                        src={mockFoodDetail.author.avatar}
                                        alt={mockFoodDetail.author.name}
                                        fill
                                        className="object-cover rounded-full border border-[#E36137]"
                                        quality={100}
                                        draggable={false}
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <span className="font-medium text-black text-sm">
                                        {mockFoodDetail.author.name}
                                    </span>
                                    <div className="flex flex-row gap-2">
                                        <div className="flex flex-row items-center gap-1">
                                            <span className="font-medium text-black text-xs">
                                                {mockFoodDetail.author.kitchenFriends}
                                            </span>
                                            <span className="text-textNeutralV1 text-xs">
                                                Bạn bếp chung
                                            </span>
                                        </div>
                                        <div className="flex flex-row items-center gap-1">
                                            <span className="font-medium text-textNeutralV1 text-xs">
                                                {mockFoodDetail.author.hashtagCount}
                                            </span>
                                            <span className="text-xs text-[#00ACED]">
                                                #{mockFoodDetail.author.hashtag}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex flex-row items-center bg-[#FFEFE9] px-3.5 py-1 rounded-lg gap-2">
                                    <Image
                                        src={icons.check2Icon}
                                        alt="Check"
                                        width={100}
                                        height={100}
                                        quality={100}
                                        draggable={false}
                                        className="object-contain h-5 w-auto"
                                    />
                                    <span className="font-semibold text-customPrimary text-xs">
                                        Bạn bếp
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-1">
                            <span className="text-black text-base">
                                {mockFoodDetail.description}
                            </span>
                            <div className="flex flex-row flex-wrap gap-2">
                                {mockFoodDetail.hashtags.map((tag) => (
                                    <div key={tag} className="flex flex-row items-center">
                                        <span className="text-sm text-[#00ACED]">#</span>
                                        <span className="text-sm text-[#00ACED]">{tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interaction Stats */}
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row items-center gap-1">
                                    <Image
                                        src={icons.heartIcon}
                                        alt="Likes"
                                        width={100}
                                        height={100}
                                        quality={100}
                                        draggable={false}
                                        className="object-contain h-5 w-auto"
                                    />
                                    <span className="font-medium text-black text-sm">
                                        {mockFoodDetail.comments}
                                    </span>
                                </div>
                                <div className="flex flex-row items-center gap-1">
                                    <Image
                                        src={icons.chatIcon}
                                        alt="Comments"
                                        width={100}
                                        height={100}
                                        quality={100}
                                        draggable={false}
                                        className="object-contain h-5 w-auto"
                                    />
                                    <span className="font-medium text-black text-sm">
                                        {mockFoodDetail.saves}
                                    </span>
                                </div>
                            </div>
                            <button className="bg-transparent border-none p-0 cursor-pointer">
                                <Image
                                    src={icons.saveIcon}
                                    alt="Save"
                                    width={100}
                                    height={100}
                                    quality={100}
                                    draggable={false}
                                    className="object-contain h-5 w-auto"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between items-center">
                            <span className="font-bold text-black text-base">
                                Bình luận
                            </span>
                            <span className="text-customPrimary text-sm">
                                Xem thêm
                            </span>
                        </div>

                        <div className="flex flex-col gap-2">
                            {mockComments.map((comment) => (
                                <div key={comment.id} className="flex flex-row gap-1.5">
                                    <div className="relative w-8 h-8">
                                        <Image
                                            src={comment.avatar}
                                            alt={comment.user}
                                            fill
                                            className="object-cover rounded-full"
                                            quality={100}
                                            draggable={false}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1.5">
                                        <div className="flex flex-row bg-white rounded-lg p-2 gap-1.5">
                                            <div className="flex-1 flex flex-col gap-1">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex flex-row items-center gap-2">
                                                            <span className="font-semibold text-black text-sm">
                                                                {comment.user}
                                                            </span>
                                                            <span className="text-textNeutralV1 text-xs">
                                                                {comment.date}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-black text-sm line-clamp-2">
                                                        {comment.content}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-1">
                                                <Image
                                                    src={icons.heartIcon}
                                                    alt="Like"
                                                    width={100}
                                                    height={100}
                                                    quality={100}
                                                    draggable={false}
                                                    className="object-contain h-4 w-auto"
                                                />
                                                <span className="text-black text-xs">
                                                    {comment.likes}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-1">
                                            <div className="bg-[#9CA3AF] w-4 h-px" />
                                            <span className="text-textNeutralV1 text-xs">
                                                Xem thêm {comment.replies} phản hồi
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Related Foods Section */}
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                            <span className="font-bold text-black text-base">
                                Món ăn kèm nổi bật
                            </span>
                            <span className="text-customPrimary text-sm">
                                Xem thêm
                            </span>
                        </div>

                        <RecipeCarousel />
                    </div>
                </div>
            </div>

            {/* Bottom Button */}
            <div className="fixed bottom-0 z-50 left-0 right-0 bg-white rounded-t-2xl py-2 px-4">
                <CustomButton
                    title="Xem công thức"
                    onPress={() => router.push('/food-detail/materials')}
                    bgVariant="primary"
                    textVariant="primary"
                    IconLeft={() => (
                        <Image
                            src={icons.eyeIcon}
                            alt="View recipe"
                            width={100}
                            height={100}
                            quality={100}
                            draggable={false}
                            className="object-contain h-6 w-auto"
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default MobileFoodDetailScreen;
