'use client';

import CustomButton from '@/components/Common/CustomButton';
import TextScaled from '@/components/Common/TextScaled';
import { icons, images } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RecipeCarousel from '../Common/RecipeCarousel';

const mockFoodDetail = {
    id: 1,
    title: 'Gà nướng tiêu đen',
    author: {
        name: 'Otaku Lê',
        avatar: images.sampleAvatar,
        kitchenFriends: 28,
        hashtag: 'Gà',
        hashtagCount: 15,
    },
    description:
        "Create a 1/7 scale commercialized figurine of the characters in the picture. The figurine wears an extremely glossy suit in a realistic style, in a real environment. The figurine is placed on a computer desk. The figurine features a round, transparent acrylic base with no text. The image depict a freaking garbage bin on the faceground. I don't know exactly",
    hashtags: ['Gà nướng', 'Tiêu Đen', 'NCKD'],
    comments: 16,
    saves: 34,
    image: images.sampleFood1,
};

const mockComments = [
    {
        id: 1,
        user: 'Nobita',
        avatar: images.sampleAvatar2,
        date: '23/11/2022',
        content: 'Mở file → chọn khung text → phần Font bên phải sẽ hiển thị danh sách font của máy.',
        likes: 16,
        replies: 2,
    },
    {
        id: 2,
        user: 'Mun Ngáo',
        avatar: images.sampleAvatar,
        date: '25/01/2023',
        content: 'Mở file → chọn khung text → phần Font bên phải sẽ hiển thị danh sách font của máy.',
        likes: 16,
        replies: 2,
    },
];

const FoodDetailScreen = () => {
    const router = useRouter();

    return (
        <div className="flex-1 bg-white min-h-dvh relative">
            <div className="overflow-y-auto pb-[120px]">
                <div className="relative w-full h-[375px]">
                    <Image src={mockFoodDetail.image} alt={mockFoodDetail.title} fill className="object-cover" priority />
                    <div
                        className="absolute top-4 left-4 right-4 flex flex-row justify-between items-center text-white"
                    >
                        <button type="button" onClick={() => router.back()} className="flex items-center justify-center">
                            <Image src={icons.backArrow} alt="back" width={24} height={24} />
                        </button>
                        <TextScaled size="base" className="font-bold text-white">
                            Món ăn
                        </TextScaled>
                        <button type="button" className="flex items-center justify-center">
                            <Image src={icons.threeDotsIcon} alt="menu" width={24} height={24} />
                        </button>
                    </div>
                </div>

                <div className="bg-backgroundV1 p-4 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 pb-4 border-b border-[#979797]">
                        <TextScaled size="2xl" className="font-medium text-black">
                            {mockFoodDetail.title}
                        </TextScaled>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-2 items-center">
                                <Image
                                    src={mockFoodDetail.author.avatar}
                                    alt={mockFoodDetail.author.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full border border-[#E36137] object-cover"
                                />
                                <div className="flex-1 flex flex-col gap-1">
                                    <TextScaled size="sm" className="font-medium text-black">
                                        {mockFoodDetail.author.name}
                                    </TextScaled>
                                    <div className="flex flex-row gap-2">
                                        <div className="flex flex-row gap-1 items-center">
                                            <TextScaled size="xs" className="font-medium text-black">
                                                {mockFoodDetail.author.kitchenFriends}
                                            </TextScaled>
                                            <TextScaled size="xs" className="text-textNeutralV1">
                                                Bạn bếp chung
                                            </TextScaled>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <TextScaled size="xs" className="font-medium text-textNeutralV1">
                                                {mockFoodDetail.author.hashtagCount}
                                            </TextScaled>
                                            <TextScaled size="xs" className="text-[#00ACED]">
                                                #{mockFoodDetail.author.hashtag}
                                            </TextScaled>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="bg-[#FFEFE9] px-3.5 py-1 rounded-lg flex flex-row items-center gap-2"
                                >
                                    <Image src={icons.check2Icon} alt="friend" width={20} height={20} />
                                    <TextScaled size="xs" className="font-semibold text-customPrimary">
                                        Bạn bếp
                                    </TextScaled>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <TextScaled size="base" className="text-black">
                                {mockFoodDetail.description}
                            </TextScaled>
                            <div className="flex flex-row gap-2 flex-wrap">
                                {mockFoodDetail.hashtags.map((tag) => (
                                    <div key={tag} className="flex flex-row items-center">
                                        <TextScaled size="sm" className="text-[#00ACED]">#</TextScaled>
                                        <TextScaled size="sm" className="text-[#00ACED]">{tag}</TextScaled>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row gap-1 items-center">
                                    <Image src={icons.heartIcon} alt="likes" width={20} height={20} />
                                    <TextScaled size="sm" className="font-medium text-black">
                                        {mockFoodDetail.comments}
                                    </TextScaled>
                                </div>
                                <div className="flex flex-row gap-1 items-center">
                                    <Image src={icons.chatIcon} alt="comments" width={20} height={20} />
                                    <TextScaled size="sm" className="font-medium text-black">
                                        {mockFoodDetail.saves}
                                    </TextScaled>
                                </div>
                            </div>
                            <button type="button" className="flex items-center justify-center">
                                <Image src={icons.saveIcon} alt="save" width={20} height={20} />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between items-center">
                            <TextScaled size="base" className="font-bold text-black">
                                Bình luận
                            </TextScaled>
                            <TextScaled size="sm" className="text-customPrimary">
                                Xem thêm
                            </TextScaled>
                        </div>

                        <div className="flex flex-col gap-2">
                            {mockComments.map((comment) => (
                                <div key={comment.id} className="flex flex-row gap-1.5">
                                    <Image
                                        src={comment.avatar}
                                        alt={comment.user}
                                        width={32}
                                        height={32}
                                        className="rounded-full object-cover"
                                    />
                                    <div className="flex-1 flex flex-col gap-1.5">
                                        <div
                                            className="bg-white p-2 rounded-lg flex flex-row gap-1.5"
                                        >
                                            <div className="flex-1 flex flex-col gap-1">
                                                <div className="flex flex-row gap-2 items-center">
                                                    <TextScaled size="sm" className="font-semibold text-black">
                                                        {comment.user}
                                                    </TextScaled>
                                                    <TextScaled size="xs" className="text-textNeutralV1">
                                                        {comment.date}
                                                    </TextScaled>
                                                </div>
                                                <TextScaled size="sm" className="text-black">
                                                    {comment.content}
                                                </TextScaled>
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <Image src={icons.heartIcon} alt="like" width={16} height={16} />
                                                <TextScaled size="xs" className="text-black">
                                                    {comment.likes}
                                                </TextScaled>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <div className="w-4 h-px bg-[#9CA3AF]" />
                                            <TextScaled size="xs" className="text-textNeutralV1">
                                                Xem thêm {comment.replies} phản hồi
                                            </TextScaled>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                            <TextScaled size="base" className="font-bold text-black">
                                Món ăn kèm nổi bật
                            </TextScaled>
                            <TextScaled size="sm" className="text-customPrimary">
                                Xem thêm
                            </TextScaled>
                        </div>

                        <RecipeCarousel />
                    </div>
                </div>
            </div>

            <div
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl px-4 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]"
            >
                <CustomButton
                    title="Xem công thức"
                    onPress={() => router.push('/food-materials')}
                    bgVariant="primary"
                    textVariant="primary"
                    IconLeft={<Image src={icons.eyeIcon} alt="view" width={24} height={24} />}
                />
            </div>
        </div>
    );
};

export default FoodDetailScreen;

