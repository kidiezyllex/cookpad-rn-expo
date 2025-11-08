import { images } from "@/constants";

export const postsData = [
    {
        id: '1',
        user: {
            name: 'Otaku Lê',
            timeAgo: '5 giờ'
        },
        content: {
            title: 'Gà nướng tiêu đen',
            description: 'Món tao chế trong lúc đi nvqs, Lorum lmao ipsum, florentino alpapad',
            hashtags: ['Gà nướng', 'Tiêu Đen', 'NCKD'],
            likes: 16,
            comments: 34,
            image: images.sampleFood1
        },
        comments: [
            { user: 'Nobita', text: 'Vippro quá mày' },
            { user: 'Nobita', text: 'Mày cho tao đớp với để tao đỡ phải nấu chi cho mệt' }
        ]
    },
    {
        id: '2',
        user: {
            name: 'Nobita',
            timeAgo: '1 ngày'
        },
        content: {
            title: 'Sốt sò điệp với tôm',
            description: 'Món này mình ăn được một lần ở Quảng Ninh ngon quá nên tán a đầu bếp để có công thức cho mọi người này',
            hashtags: ['Sò điệp', 'Tôm', 'Bánh mì gạo lứt', 'Hải sản'],
            likes: 16,
            comments: 34,
            image: images.sampleFood1
        },
        comments: [
            { user: 'Otaku Lê', text: 'Nsfdggdgdgdgergsgrsg' },
            { user: 'Bruh Lmao', text: 'njbhfbhfvdhvvbhbhfnnnjnnnnnbhbbbh' }
        ]
    },
    {
        id: '3',
        user: {
            name: 'Wibu Chúa',
            timeAgo: '2 ngày'
        },
        content: {
            title: 'Salad trứng gà',
            description: 'Ai muốn làm rau sạch trên đĩa của tao tối nay nào',
            hashtags: ['Món chay', 'Trứng', 'Bơ'],
            likes: 134,
            comments: 233,
            image: images.sampleFood1
        },
        comments: [
            { user: 'Mun Ngáo', text: 'Trứng dở vcl đéo thèm ăn, công thức như ' },
            { user: 'Nobita', text: 'Nói tiếng người đi má' }
        ]
    }
];

// Mock data for suggested friends
export const suggestedFriendsData = [
    {
        id: '1',
        name: 'Dũng Lại Lập Trình',
        commonFriends: 28,
        hashtag: 'Gà'
    },
    {
        id: '2',
        name: 'Chó Kem',
        commonFriends: 28,
        hashtag: 'Món chay'
    },
    {
        id: '3',
        name: 'Lilikama',
        commonFriends: 54,
        hashtag: 'Trứng'
    }
];

export const ingredientsData = [
    { id: '1', name: 'Tôm', isSelected: true },
    { id: '2', name: 'Bánh mỳ', isSelected: false },
    { id: '3', name: 'Cá', isSelected: false },
    { id: '4', name: 'Thịt lợn', isSelected: false },
    { id: '5', name: 'Thịt bò', isSelected: false },
    { id: '6', name: 'Trứng', isSelected: false },
    { id: '7', name: 'Gà', isSelected: false },
    { id: '8', name: 'Rau xanh', isSelected: false },
    { id: '9', name: 'Cà chua', isSelected: false },
    { id: '10', name: 'Hành tây', isSelected: false },
    { id: '11', name: 'Tỏi', isSelected: false },
    { id: '12', name: 'Gừng', isSelected: false },
];

export const featuredRecipesData = [
    { id: '1', name: 'Tôm hoàng đế ánh kim', image: images.featuredFood1, time: '3h 30m', likes: 234 },
    { id: '2', name: 'Tôm nướng sốt tiêu đen', image: images.featuredFood2, time: '2h 15m', likes: 189 },
    { id: '3', name: 'Lẩu hải sản với nước sốt tôm', image: images.featuredFood3, time: '1h 45m', likes: 156 },
    { id: '4', name: 'Sò huyết rau mùi', image: images.featuredFood4, time: '1h 20m', likes: 98 },
    { id: '5', name: 'Tôm sốt mắm ớt', image: images.featuredFood5, time: '45m', likes: 267 },
    { id: '6', name: 'Cá nướng lá chuối', image: images.featuredFood6, time: '1h 15m', likes: 189 },
    { id: '7', name: 'Thịt bò xào rau củ', image: images.featuredFood7, time: '30m', likes: 156 },
    { id: '8', name: 'Trứng chiên thịt bằm', image: images.featuredFood8, time: '20m', likes: 123 },
];