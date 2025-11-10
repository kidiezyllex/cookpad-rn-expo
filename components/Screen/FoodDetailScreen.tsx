'use client';

import CustomButton from '@/components/Common/CustomButton';
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
        <div className="flex-1 min-h-dvh relative">
            <div className="overflow-y-auto">
                <div className="relative w-full h-[375px]">
                    <Image src={mockFoodDetail.image} alt={mockFoodDetail.title} fill className="object-cover" priority />
                    <div
                        className="absolute top-4 left-4 right-4 flex flex-row justify-between items-center text-white"
                    >
                        <button type="button" onClick={() => router.back()} className="flex items-center justify-center">
                            <Image src={icons.backArrow} alt="back" width={24} height={24} />
                        </button>
                        <p className="font-bold text-white text-base">
                            Món ăn
                        </p>
                        <button type="button" className="flex items-center justify-center">
                            <Image src={icons.threeDotsIcon} alt="menu" width={24} height={24} />
                        </button>
                    </div>
                </div>
                <div className="bg-backgroundV1 p-4 px-16 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4 pb-4 border-b border-[#979797]">
                        <p className="font-medium text-black text-2xl">
                            {mockFoodDetail.title}
                        </p>

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
                                    <p className="font-medium text-black text-sm">
                                        {mockFoodDetail.author.name}
                                    </p>
                                    <div className="flex flex-row gap-2">
                                        <div className="flex flex-row gap-1 items-center">
                                            <span className="font-medium text-black text-xs">
                                                {mockFoodDetail.author.kitchenFriends}
                                            </span>
                                            <span className="text-textNeutralV1 text-xs">
                                                Bạn bếp chung
                                            </span>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <span className="font-medium text-textNeutralV1 text-xs">
                                                {mockFoodDetail.author.hashtagCount}
                                            </span>
                                            <span className="text-[#00ACED] text-xs">
                                                #{mockFoodDetail.author.hashtag}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="bg-[#FFEFE9] px-3.5 py-1 rounded-lg flex flex-row items-center gap-2"
                                >
                                    <Image src={icons.check2Icon} alt="friend" width={20} height={20} />
                                    <span className="font-semibold text-customPrimary text-xs">
                                        Bạn bếp
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-black text-base">
                                {mockFoodDetail.description}
                            </p>
                            <div className="flex flex-row gap-2 flex-wrap">
                                {mockFoodDetail.hashtags.map((tag) => (
                                    <div key={tag} className="flex flex-row items-center">
                                        <span className="text-[#00ACED] text-sm">#</span>
                                        <span className="text-[#00ACED] text-sm">{tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row gap-1 items-center">
                                    <Image src={icons.heartIcon} alt="likes" width={50} height={50} quality={100} className='h-4 w-auto object-contain' />
                                    <span className="font-medium text-black text-sm">
                                        {mockFoodDetail.comments}
                                    </span>
                                </div>
                                <div className="flex flex-row gap-1 items-center">
                                    <Image src={icons.chatIcon} alt="comments" width={50} height={50} quality={100} className='h-4 w-auto object-contain' />
                                    <span className="font-medium text-black text-sm">
                                        {mockFoodDetail.saves}
                                    </span>
                                </div>
                            </div>
                            <button type="button" className="flex items-center justify-center">
                                <Image src={icons.saveIcon} alt="save" width={50} height={50} quality={100} className='h-4 w-auto object-contain' />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-bold text-black text-base">
                                Bình luận
                            </p>
                            <button className="text-customPrimary text-sm cursor-pointer">
                                Xem thêm
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            {mockComments.map((comment) => (
                                <div key={comment.id} className="flex flex-row gap-1.5">
                                    <Image
                                        src={comment.avatar}
                                        alt={comment.user}
                                        width={100}
                                        height={100}
                                        quality={100}
                                        draggable={false}
                                        className="rounded-full object-cover w-8 h-8 flex-shrink-0"
                                    />
                                    <div className="flex-1 flex flex-col gap-1.5">
                                        <div
                                            className="bg-white p-2 rounded-lg flex flex-row gap-1.5"
                                        >
                                            <div className="flex-1 flex flex-col gap-1">
                                                <div className="flex flex-row gap-2 items-center">
                                                    <span className="font-semibold text-black text-sm">
                                                        {comment.user}
                                                    </span>
                                                    <span className="text-textNeutralV1 text-xs">
                                                        {comment.date}
                                                    </span>
                                                </div>
                                                <p className="text-black text-sm">
                                                    {comment.content}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <Image src={icons.heartIcon} alt="like" width={50} height={50} quality={100} className='h-4 w-auto object-contain' />
                                                <span className="text-black text-xs">
                                                    {comment.likes}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <div className="w-4 h-px bg-[#9CA3AF]" />
                                            <button className="text-textNeutralV1 text-xs cursor-pointer">
                                                Xem thêm {comment.replies} phản hồi
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 px-16">
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-bold text-black text-base">
                                Món ăn kèm nổi bật
                            </p>
                            <button className="text-customPrimary text-sm cursor-pointer">
                                Xem thêm
                            </button>
                        </div>

                        <RecipeCarousel />
                    </div>
                <div className='w-full flex justify-center'>
                    <CustomButton
                        title="Xem công thức"
                        onPress={() => router.push('/food-detail/materials')}
                        bgVariant="primary"
                        textVariant="primary"
                        className='!w-fit !mx-auto'
                        IconLeft={<Image src={icons.eyeIcon} alt="view" width={24} height={24} />}
                    />
                </div>
            </div>
        </div>
    );
};

export default FoodDetailScreen;

