# Hướng Dẫn Sử Dụng Project CookPad React Native

---

## A. 📁 Cấu Trúc Project

### A.1. Sơ Đồ Cấu Trúc Project

```
cookpad-rn-expo/
│
├── app/                         # Expo Router - định tuyến route/path theo file
│   ├── _layout.tsx              # Layout gốc (font, splash, stacks)
│   ├── index.tsx                # Trang đầu vào của ứng dụng --> Trang index
│   ├── +not-found.tsx           # Trang 404
│   │
│   ├── (auth)/                  # Nhóm màn hình xác thực, welcome, đổi mật khẩu, quên mật khẩu, chọn topic
│   │   ├── _layout.tsx
│   │   ├── onboarding.tsx
│   │   ├── ...
│   │   └── favorite-topic.tsx
│   │
│   ├── (root)/                  # Nhóm màn hình chính
│   │   ├── _layout.tsx
│   │   ├── tabs/                # Màn hình tab navigation
│   │   │   ├── _layout.tsx
│   │   │   ├── index.tsx        # Tab Home
│   │   │   ├── search.tsx       # Tab Search
│   │   │   ├── create.tsx       # Tab Tạo công thức 
│   │   │   ├── notification.tsx # Tab Thông báo
│   │   │   └── profile.tsx      # Tab Profile
│   │   ├── create-recipe.tsx    # Các màn khác (mà không có Bottom Navigator), define để nó nằm trong Stack Screen
│   │   ├── ...                  # Các màn khác (mà không có Bottom Navigator), define để nó nằm trong Stack Screen
│   │   └── table-selection.tsx  # Các màn khác (mà không có Bottom Navigator), define để nó nằm trong Stack Screen
│   │
│   └── (api)/                   # API routes
│
├── assets/                      # Tài nguyên tĩnh
│   ├── fonts/                   # Font PlusJakartaSans
│   │   ├── PlusJakartaSans-Regular.ttf
│   │   ├── PlusJakartaSans-Bold.ttf
│   │   ├── PlusJakartaSans-SemiBold.ttf
│   │   └── ... (các variant khác)
│   │
│   ├── icons/                   # Icon PNG
│   │   ├── active-*.png         # Icon trạng thái active
│   │   ├── back-arrow.png
│   │   ├── bell-icon.png
│   │   ├── heart-icon.png
│   │   └── ... (các icon khác)
│   │
│   ├── images/                  # Hình ảnh
│   │   ├── FeaturedFood/         
│   │   │   ├── featuredFood1.jpg
│   │   │   └── ... (các hình khác)
│   │   ├── home-hero.png
│   │   ├── logo.png
│   │   ├── sample-avatar.png
│   │   ├── sample-food1-3.jpg
│   │   └── ... (các hình khác)
│   │
│   └── videos/                  # Video
│       └── tutorial.mp4
│
├── components/                  # Component tái sử dụng
│   ├── Common/                  # Component dùng chung
│   │   ├── TextScaled.tsx
│   │   ├── CustomButton.tsx
│   │   ├── Input.tsx
│   │   ├── TextArea.tsx
│   │   ├── BackHeader.tsx
│   │   ├── FoodGrid.tsx
│   │   ├── RecipeCarousel.tsx
│   │   ├── CustomTabTrigger.tsx
│   │   ├── CustomFilter.tsx
│   │   └── TabBarWrapper.tsx
│   │
│   ├── ... (Các component khác của các Screen)           
│   │
│   └── Screen/                  # Component screen đầy đủ
│       ├── SplashScreen.tsx
│       ├── OnboardingScreen.tsx
│       ├── HomeScreen.tsx
│       ├── ProfileScreen.tsx
│       └── ... (các screen khác)
│
├── constants/                   # Define các const và cấu hình
│   └── index.ts                 # Export images, icons, videos, data
│
├── lib/                         # Hàm tiện ích (util)
│   ├── scaling.ts               # Tính toán scale factor và kích thước màn hình
│   ├── textScaling.ts           # Scale font size và line height
│   ├── utils.ts                 # Format thời gian, ngày tháng
│   ├── fetch.ts                 # Xử lý API calls
│   └── auth.ts                  # Lưu trữ token (SecureStore)
│
├── store/                       # Quản lý state (Zustand)
│   ├── forgotPasswordStore.ts   # State flow quên mật khẩu
│   └── successStore.ts          # State màn hình thành công
│
├── types/                       # Định nghĩa TypeScript
│   ├── type.d.ts                # ButtonProps và các type chung
│   └── image.d.ts               # Type cho hình ảnh
│
├── package.json                 # Dependencies và scripts
├── app.json                     # Cấu hình Expo, cấu hình logo app,...
├── tsconfig.json                # Cấu hình TypeScript
├── tailwind.config.js           # Cấu hình TailwindCSS, define màu sắc,...
├── metro.config.js              # Cấu hình Metro bundler
├── babel.config.js              # Cấu hình Babel
├── global.css                   # Style toàn cục
```

**Ghi chú về cấu trúc:**
- `app/` sử dụng Expo Router với file-based routing, các thư mục có dấu `()` là route groups
- `assets/` chứa tất cả tài nguyên tĩnh được import vào `constants/index.ts`
- `components/` được tổ chức theo màn hình/chức năng, `Common/` là các component dùng chung
- `lib/` chứa các utility functions và helpers
- `store/` sử dụng Zustand cho state management
- Các file config ở root level cho cấu hình dự án

---

### A.2. Thư Mục `app/` - Định Tuyến và Màn Hình

Thư mục này chứa tất cả các màn hình (screens) của ứng dụng, sử dụng file-based routing của Expo Router.

#### `app/_layout.tsx`
- **Chức năng**: Layout gốc của ứng dụng, nơi định cấu hình fonts, splash screen, và các stack navigation chính
- **Nhiệm vụ chính**:
  - Load fonts PlusJakartaSans
  - Quản lý splash screen tùy chỉnh
  - Định nghĩa các Stack.Screen chính: `index`, `(auth)`, `(root)`, `+not-found`

#### `app/index.tsx`
- **Chức năng**: Màn hình entry point của ứng dụng, xử lý routing ban đầu

#### `app/(auth)/` - Nhóm Màn Hình Xác Thực
Thư mục này chứa tất cả các màn hình liên quan đến đăng nhập, đăng ký, và xác thực:

- **`_layout.tsx`**: Layout riêng cho các màn hình auth
- **`onboarding.tsx`**: Màn hình giới thiệu ứng dụng khi lần đầu sử dụng
- **`sign-in.tsx`**: Màn hình đăng nhập
- **`sign-up.tsx`**: Màn hình đăng ký
- **`forgot-password.tsx`**: Màn hình quên mật khẩu
- **`otp.tsx`**: Màn hình nhập mã OTP để xác thực
- **`register-success.tsx`**: Màn hình thông báo đăng ký thành công
- **`change-password.tsx`**: Màn hình đổi mật khẩu
- **`favorite-topic.tsx`**: Màn hình chọn chủ đề yêu thích khi đăng ký

#### `app/(root)/` - Nhóm Màn Hình Chính
Thư mục này chứa các màn hình chính của ứng dụng sau khi đăng nhập:

- **`_layout.tsx`**: Layout cho các màn hình chính, định nghĩa các Stack.Screen
- **`tabs/`**: Chứa các màn hình tab (Home, Search, Create, Notification, Profile)
  - `_layout.tsx`: Layout cho tab navigation
  - Các file tab khác: `index.tsx`, `search.tsx`, `create.tsx`, `notification.tsx`, `profile.tsx`
- **`create-recipe.tsx`**: Màn hình tạo công thức mới
- **`edit-profile.tsx`**: Màn hình chỉnh sửa hồ sơ
- **`food-detail.tsx`**: Màn hình chi tiết món ăn
- **`food-materials.tsx`**: Màn hình hiển thị nguyên liệu
- **`personal-chest.tsx`**: Màn hình rương cá nhân (lưu công thức)
- **`premium.tsx`**: Màn hình nâng cấp lên premium
- **`search-bar.tsx`**: Màn hình thanh tìm kiếm
- **`search-results.tsx`**: Màn hình kết quả tìm kiếm
- **`security.tsx`**: Màn hình bảo mật tài khoản
- **`setting.tsx`**: Màn hình cài đặt
- **`table-selection.tsx`**: Màn hình chọn bảng (có thể để chọn chế độ ăn)

#### `app/(api)/`
- Thư mục dành cho các API routes (nếu có)

#### `app/+not-found.tsx`
- Màn hình hiển thị khi route không tồn tại

---

### A.3. Thư Mục `assets/` - Tài Nguyên Tĩnh

Chứa tất cả các file tài nguyên như hình ảnh, icon, font, video.

#### `assets/fonts/`
- Chứa các file font PlusJakartaSans với các variant: Regular, Bold, SemiBold, Medium, Light, ExtraLight, ExtraBold và các biến thể Italic

#### `assets/icons/`
- Chứa các icon PNG được sử dụng trong ứng dụng:
  - Icon active/inactive cho các tab: `active-bell-icon.png`, `active-house-icon.png`, `bell-icon.png`, `house-icon.png`
  - Icon chức năng: `back-arrow.png`, `camera-icon.png`, `check-icon.png`, `heart-icon.png`, `search-icon.png`
  - Icon khác: `chef碎con.png`, `clock-icon.png`, `lock-icon.png`, `timer-icon.png`, v.v.

#### `assets/images/`
- Hình ảnh màn hình: `home-hero.png`, `search-hero.png`, `splash.png`, `onboarding1-3.png`
- Hình ảnh mẫu: `sample-avatar.png`, `sample-food1-3.jpg`
- Thư mục `FeaturedFood/`: Chứa 8 hình ảnh món ăn nổi bật (`featuredFood1-8.jpg`)
- Hình ảnh khác: `logo.png`, `register-success.png`, `personal-chest-banner.png`, `table.png`, v.v.

#### `assets/videos/`
- Chứa video hướng dẫn: `tutorial.mp4`

---

### A.4. Thư Mục `components/` - Các Component Tái Sử Dụng

#### `components/Common/` - Component Dùng Chung
Các component này được sử dụng xuyên suốt ứng dụng:

- **`TextScaled.tsx`**: Component text tự động scale theo kích thước màn hình
  - Sử dụng font sizes: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`
  - Hỗ trợ `numberOfLines`, `ellipsizeMode`

- **`CustomButton.tsx`**: Component button tùy chỉnh với nhiều variant
  - `bgVariant`: `primary`, `secondary`, `danger`, `outline`, `success`, `transparent`, `ghost`
  - `textVariant`: `primary`, `default`, `secondary`, `danger`, `success`, `transparent`, `outline`, `ghost`
  - Hỗ trợ icon bên trái/phải

- **`Input.tsx`**: Component input text cơ bản với scaling tự động
  - Hỗ trợ multiline, numberOfLines
  - Tự động scale padding và font size

- **`BackHeader.tsx`**: Component header với nút back
  - Props: `headerTitle`, `onPress`, `isDark` (để đổi màu text/icon)

- **`FoodGrid.tsx`**: Component hiển thị lưới món ăn dạng Pinterest (2 cột, chiều cao khác nhau)
  - Nhận `featuredRecipesData` (optional)
  - Tự động layout 2 cột với chiều cao động

- **`RecipeCarousel.tsx`**: Component carousel ngang hiển thị các công thức
  - Sử dụng `SwiperFlatList`
  - Có pagination dots
  - Nhận `data` (optional, mặc định dùng `featuredRecipesData` từ constants)

- **`CustomTabTrigger.tsx`**: Component trigger cho custom tabs
  - Hiển thị icon active/inactive
  - Dùng cho tab navigation tùy chỉnh

- **`CustomFilter.tsx`**: Component filter chips có thể scroll ngang
  - Hiển thị các filter dạng chip
  - Có thể thêm icon filter
  - Hỗ trợ custom render item

- **`TextArea.tsx`**: Component textarea cho input nhiều dòng

- **`TabBarWrapper.tsx`**: Wrapper cho custom tab bar

#### `components/HomeScreen/` - Component Màn Hình Home
- **`HeroSection.tsx`**: Section hero của màn hình home
- **`InspirationTab/`**: Các component cho tab Inspiration
- **`KitchenTab/`**: Các component cho tab Kitchen
- **`mockData.ts`**: Mock data cho màn hình home

#### `components/ProfileScreen/` - Component Màn Hình Profile
- **`RecipeCard.tsx`**: Card hiển thị công thức
- **`RecipeListItem.tsx`**: List item hiển thị công thức dạng danh sách
- **`mockData.ts`**: Mock data cho profile screen

#### `components/RecipeScreen/` - Component Màn Hình Công Thức
- **`CookingStepMasterTab.tsx`**: Tab master cho các bước nấu ăn
- **`CookingStepTab.tsx`**: Tab hiển thị từng bước nấu ăn
- **`MaterialTab.tsx`**: Tab hiển thị nguyên liệu

#### `components/BellScreen/` - Component Màn Hình Thông Báo
- **`NotificationTab/`**: Tab thông báo
- **`MessagesTab/index.tsx`**: Tab tin nhắn
- **`mockData.ts`**: Mock data cho notification và messages

#### `components/SearchScreen/` - Component Màn Hình Tìm Kiếm
- Các component cho search screen
- `SearchSuggestionItem.tsx`: Item gợi ý tìm kiếm
- `SuggestedTopicsSection.tsx`: Section chủ đề đề xuất
- `SearchHistorySection.tsx`: Section lịch sử tìm kiếm
- `HeroSection.tsx`: Hero section của search

#### `components/Screen/` - Các Screen Component
Chứa các component screen lớn:
- `SplashScreen.tsx`, `OnboardingScreen.tsx`, `LogInScreen.tsx`, `SignUpScreen.tsx`
- `HomeScreen.tsx`, `ProfileScreen.tsx`, `SearchScreen.tsx`, `NotificationScreen.tsx`
- `FoodDetailScreen.tsx`, `CreateRecipeScreen.tsx`, `SettingScreen.tsx`, v.v.

---

### A.5. Thư Mục `constants/` - Hằng Số

#### `constants/index.ts`
File này export tất cả các constants được sử dụng trong app:

- **`images`**: Object chứa tất cả hình ảnh (splash, logo, sample images, featured foods, v.v.)
- **`icons`**: Object chứa tất cả icon
- **`videos`**: Object chứa video
- **`onboarding`**: Array chứa data cho onboarding screens
- **`featuredRecipesData`**: Array chứa data món ăn nổi bật (được sử dụng ở nhiều nơi)

---

### A.6. Thư Mục `lib/` - Hàm Tiện Ích

Chứa các utility functions và helpers.

#### `lib/scaling.ts`
- **`getScaleFactor()`**: Tính toán scale factor dựa trên width của màn hình (base width: 375px)
- **`BASE_VIEWPORT`**: Viewport base (375x812 - kích thước thiết kế Figma)
- **`getDeviceDimensions()`**: Lấy width và height của thiết bị

#### `lib/textScaling.ts`
- **`BASE_FONT_SIZES`**: Định nghĩa các font size base (xs: 12, sm: 14, base: 16, lg: 18, xl: 20, 2xl: 24, 3xl: 30, 4xl: 36, 5xl: 48, 6xl: 60)
- **`BASE_LINE_HEIGHTS`**: Định nghĩa line height cho từng font size
- **`getScaledFontSize()`**: Tính font size đã scale
- **`getScaledLineHeight()`**: Tính line height đã scale
- **`getScaledFontStyle()`**: Trả về object style với fontSize và lineHeight đã scale

#### `lib/utils.ts`
Các hàm tiện ích:
- **`formatTime(minutes)`**: Format thời gian (phút) thành chuỗi "X phút" hoặc "Xh Ym"
- **`formatDate(dateString)`**: Format date thành "DD Month YYYY" (tiếng Anh)
- **`formatDateVN(dateString)`**: Format date thành "DD/MM/YYYY" (tiếng Việt)
- **`formatTimeVN(minutes)`**: Format thời gian thành "HH:mm"
- **`getVietnamTime()`**: Lấy thời gian Việt Nam (UTC+7) dạng ISO string
- **`getVietnamTimeFormatted()`**: Lấy thời gian Việt Nam dạng formatted string
- **`getVietnamTimeAsUTC()`**: Lấy thời gian Việt Nam dạng UTC ISO string

#### `lib/fetch.ts`
- **`fetchAPI(url, options)`**: Hàm wrapper cho fetch API với error handling
- **`useFetch<T>(url, options)`**: React hook để fetch data với state loading, error, data và refetch

#### `lib/auth.ts`
- **`tokenCache`**: Object chứa các hàm để lưu/đọc token từ SecureStore
  - `getToken(key)`: Lấy token từ SecureStore
  - `saveToken(key, value)`: Lưu token vào SecureStore

---

### A.7. Thư Mục `store/` - State Management

Sử dụng **Zustand** để quản lý state.

#### `store/forgotPasswordStore.ts`
Store quản lý trạng thái quên mật khẩu:
- **State**:
  - `isForgotPassword: boolean` - Trạng thái có đang trong flow quên mật khẩu không
- **Actions**:
  - `setIsForgotPassword(value: boolean)`: Set trạng thái
  - `resetIsForgotPassword()`: Reset về false

**Cách sử dụng**:
```typescript
import { useForgotPasswordStore } from '@/store/forgotPasswordStore';

const { isForgotPassword, setIsForgotPassword, resetIsForgotPassword } = useForgotPasswordStore();
```

#### `store/successStore.ts`
Store quản lý thông tin màn hình success:
- **State**:
  - `successTitle: string` - Tiêu đề màn hình success
  - `successDesc: string` - Mô tả màn hình success
  - `successRedirect: string` - Route redirect sau khi success (mặc định: `'/(auth)/sign-in'`)
- **Actions**:
  - `setSuccess(title, desc, redirect?)`: Set thông tin success
  - `setSuccessRedirect(redirect)`: Chỉ set redirect route
  - `resetSuccess()`: Reset tất cả về giá trị mặc định

**Cách sử dụng**:
```typescript
import { useSuccessStore } from '@/store/successStore';

const { successTitle, successDesc, successRedirect, setSuccess, resetSuccess } = useSuccessStore();

// Khi cần hiển thị màn hình success
setSuccess('Đăng ký thành công!', 'Tài khoản của bạn đã được tạo thành công.', '/(root)/tabs');
```

---

### A.8. Thư Mục `types/` - Type Definitions

#### `types/type.d.ts`
Định nghĩa các interface/type dùng chung:
- **`ButtonProps`**: Props cho CustomButton component, extends `TouchableOpacityProps`
  - `title: string`
  - `bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success" | "transparent" | "ghost"`
  - `textVariant?: "primary" | "default" | "secondary" | "danger" | "success" | "transparent" | "outline" | "ghost"`
  - `IconLeft?`, `IconRight?`
  - `className?`

#### `types/image.d.ts`
Định nghĩa type cho hình ảnh (nếu có)

---

### A.9. Các File Cấu Hình

#### `package.json`
- **Framework**: Expo 54.0.7, React Native 0.81.4, React 19.1.0
- **Routing**: expo-router 6.0.5
- **Styling**: NativeWind 4.1.23 (TailwindCSS cho React Native)
- **State Management**: Zustand 5.0.8
- **UI Libraries**: 
  - @gorhom/bottom-sheet
  - react-native-swiper-flatlist
  - react-native-modal
  - react-native-otp-entry
- **Storage**: expo-secure-store (lưu token an toàn)

#### `app.json`
- Cấu hình Expo app: name, slug, icon, splash screen, scheme
- Cấu hình iOS, Android, Web
- Plugins: expo-router, expo-splash-screen, expo-video

#### `tsconfig.json`
- TypeScript config với strict mode
- Path alias: `@/*` trỏ về root directory

#### `tailwind.config.js`
- Cấu hình TailwindCSS cho NativeWind

#### `metro.config.js`
- Cấu hình Metro bundler cho Expo

#### `babel.config.js`
- Cấu hình Babel

---

## B. 📊 Models/Interfaces từ Mock Data

Dựa trên các file mock data, đây là các model/interface được sử dụng trong project:

### B.1. Message & Notification Models

#### `Message` (từ `components/BellScreen/mockData.ts`)
```typescript
interface Message {
  id: string;
  userName: string;
  message: string;
  unreadCount?: number;  // Số tin nhắn chưa đọc
  hasNotificationDot?: boolean;  // Có dấu chấm thông báo không
}
```

#### `MessageGroup`
```typescript
interface MessageGroup {
  id: string;
  title: string;  // Ví dụ: "Bạn bếp", "Người lạ"
  messages: Message[];
}
```

#### `Notification`
```typescript
interface Notification {
  id: string;
  avatarUrl: any;  // Image source
  userName: string;
  content: string;  // Nội dung thông báo
  timestamp: string;  // Format: "HH:mm - DD/MM/YYYY"
}
```

#### `NotificationGroup`
```typescript
interface NotificationGroup {
  id: string;
  title: string;  // Ví dụ: "Hôm nay", "Trước đó"
  notifications: Notification[];
}
```

---

### B.2. Recipe & Food Models

#### `Post` (từ `components/HomeScreen/mockData.ts`)
```typescript
interface Post {
  id: string;
  user: {
    name: string;
    timeAgo: string;  // Ví dụ: "5 giờ", "1 ngày"
  };
  content: {
    title: string;
    description: string;
    hashtags: string[];
    likes: number;
    comments: number;
    image: any;  // Image source
  };
  comments: {
    user: string;
    text: string;
  }[];
}
```

#### `SuggestedFriend`
```typescript
interface SuggestedFriend {
  id: string;
  name: string;
  commonFriends: number;  // Số bạn chung
  hashtag: string;  // Chủ đề chung
}
```

#### `Ingredient`
```typescript
interface Ingredient {
  id: string;
  name: string;
  isSelected: boolean;
}
```

#### `FeaturedRecipe` / `FoodItem`
```typescript
interface FeaturedRecipe {
  id: string;
  name: string;
  image: any;  // Image source
  time: string;  // Ví dụ: "3h 30m", "45m"
  likes: number;
}
```

#### `Recipe` (từ `components/ProfileScreen/mockData.ts`)
```typescript
interface Recipe {
  id: number;
  title: string;
  views: number;
  time: string;  // Ví dụ: "12 giờ", "5 ngày"
  images: any[];  // Array of image sources (nhiều ảnh)
}
```

#### `RecipeListItem`
```typescript
interface RecipeListItem {
  id: number;
  title: string;
  description: string;
  image: any;  // Image source
  comments: number;
  saves: number;
  views: number;
}
```

---

### B.3. Search Models

#### `SearchSuggestionItem` (từ `components/SearchScreen/SearchSuggestionItem.tsx`)
```typescript
interface SearchSuggestionItem {
  id: string;
  name: string;
  searched?: boolean;  // Có phải lịch sử tìm kiếm không
}
```

#### `PopularTopic` (từ `components/SearchScreen/SuggestedTopicsSection.tsx`)
```typescript
interface PopularTopic {
  id: string;
  name: string;
}
```

---

#### `FilterItem` (từ `components/Common/CustomFilter.tsx`)
```typescript
interface FilterItem {
  id: string;
  name: string;
  isSelected?: boolean;
}
```

---

## C. 🎨 Hướng Dẫn Sử Dụng Components Common

### C.1. TextScaled

Component text tự động scale theo kích thước màn hình.

**Import**:
```typescript
import TextScaled from '@/components/Common/TextScaled';
```

**Props**:
- `size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'` (mặc định: `'base'`)
- `children: React.ReactNode` - Nội dung text
- `numberOfLines?: number` - Giới hạn số dòng
- `ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'` - Cách hiển thị khi text quá dài
- Tất cả props của React Native `Text` component

**Ví dụ**:
```tsx
<TextScaled
  size="lg"
  className="font-bold text-black"
  numberOfLines={2}
  ellipsizeMode="tail"
>
  Tiêu đề công thức nấu ăn
</TextScaled>
```

---

### C.2. CustomButton

Component button tùy chỉnh với nhiều variant.

**Import**:
```typescript
import CustomButton from '@/components/Common/CustomButton';
```

**Props**:
- `title: string` - Text hiển thị trên button
- `onPress: () => void` - Handler khi click
- `bgVariant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'success' | 'transparent' | 'ghost'` (mặc định: `'primary'`)
- `textVariant?: 'primary' | 'default' | 'secondary' | 'danger' | 'success' | 'transparent' | 'outline' | 'ghost'` (mặc định: `'default'`)
- `IconLeft?: React.ComponentType<any> | React.ReactElement` - Icon bên trái
- `IconRight?: React.ComponentType<any> | React.ReactElement` - Icon bên phải
- `className?: string` - Custom className
- Tất cả props của React Native `TouchableOpacity`

**Ví dụ**:
```tsx
import { Ionicons } from '@expo/vector-icons';

<CustomButton
  title="Đăng nhập"
  onPress={() => console.log('Pressed')}
  bgVariant="primary"
  textVariant="default"
  IconLeft={() => <Ionicons name="log-in-outline" size={20} color="white" />}
/>

<CustomButton
  title="Hủy"
  onPress={() => {}}
  bgVariant="outline"
  textVariant="outline"
/>

<CustomButton
  title="Xóa"
  onPress={() => {}}
  bgVariant="danger"
  textVariant="default"
/>
```

---

### C.3. Input

Component input text cơ bản.

**Import**:
```typescript
import Input from '@/components/Common/Input';
```

**Props**:
- `placeholder?: string`
- `value?: string`
- `onChangeText?: (text: string) => void`
- `containerStyle?: any` - Style cho container (không dùng trong implementation hiện tại)
- `inputStyle?: any` - Style cho input (không dùng trong implementation hiện tại)
- `multiline?: boolean` (mặc định: `false`)
- `numberOfLines?: number` (mặc định: `1`)
- Tất cả props của React Native `TextInput`

**Ví dụ**:
```tsx
const [email, setEmail] = useState('');

<Input
  placeholder="Nhập email của bạn"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
/>

<Input
  placeholder="Mô tả công thức"
  value={description}
  onChangeText={setDescription}
  multiline={true}
  numberOfLines={4}
/>
```

---

### C.4. BackHeader

Component header với nút back.

**Import**:
```typescript
import BackHeader from '@/components/Common/BackHeader';
```

**Props**:
- `headerTitle: string` - Tiêu đề hiển thị
- `onPress: () => void` - Handler khi click nút back
- `isDark?: boolean` (mặc định: `false`) - Đổi màu text/icon sang trắng nếu `true`

**Ví dụ**:
```tsx
import { router } from 'expo-router';

<BackHeader
  headerTitle="Chỉnh sửa hồ sơ"
  onPress={() => router.back()}
/>

<BackHeader
  headerTitle="Chi tiết món ăn"
  onPress={() => router.back()}
  isDark={true}
/>
```

---

### C.5. FoodGrid

Component hiển thị lưới món ăn dạng Pinterest (2 cột, chiều cao động).

**Import**:
```typescript
import FoodGrid from '@/components/Common/FoodGrid';
```

**Props**:
- `featuredRecipesData?: FoodItem[]` - Dữ liệu món ăn (optional, nếu không có sẽ dùng data mặc định)

**Type `FoodItem`**:
```typescript
interface FoodItem {
  id: string;
  name: string;
  image: any; خطر Image source
  time: string;
  likes: number;
}
```

**Ví dụ**:
```tsx
import { images } from '@/constants';

const recipes = [
  {
    id: '1',
    name: 'Tôm hoàng đế ánh kim',
    image: images.featuredFood1,
    time: '3h 30m',
    likes: 234,
  },
  // ... more items
];

<FoodGrid featuredRecipesData={recipes} />
```

---

### C.6. RecipeCarousel

Component carousel ngang hiển thị các công thức.

**Import**:
```typescript
import RecipeCarousel from '@/components/Common/RecipeCarousel';
```

**Props**:
- `data?: RecipeItem[]` - Dữ liệu công thức (optional, mặc định dùng `featuredRecipesData` từ constants)

**Type `RecipeItem`**:
```typescript
interface RecipeItem {
  id: string;
  name: string;
  image: any;
  time: string;
  likes: number;
}
```

**Ví dụ**:
```tsx
import { featuredRecipesData } from '@/constants';

// Sử dụng data mặc định
<RecipeCarousel />

// Hoặc truyền data tùy chỉnh
<RecipeCarousel data={customRecipes} />
```

---

### C.7. CustomTabTrigger

Component trigger cho custom tabs.

**Import**:
```typescript
import CustomTabTrigger from '@/components/Common/CustomTabTrigger';
```

**Props**:
- `isActive: boolean` - Tab có đang active không
- `onPress: () => void` - Handler khi click
- `icon: any` - Icon khi không active (Image source)
- `activeIcon: any` - Icon khi active (Image source)
- `iconSize: number` - Kích thước icon (đã scale)

**Ví dụ**:
```tsx
import { icons } from '@/constants';
import { getScaleFactor } from '@/lib/scaling';

<CustomTabTrigger
  isActive={activeTab === 'home'}
  onPress={() => setActiveTab('home')}
  icon={icons.homeIcon}
  activeIcon={icons.activeHomeIcon}
  iconSize={getScaleFactor() * 24}
/>
```

---

### C.8. CustomFilter

Component filter chips có thể scroll ngang.

**Import**:
```typescript
import CustomFilter from '@/components/Common/CustomFilter';
```

**Props**:
- `data: FilterItem[]` - Dữ liệu filter items
- `selectedItems: string[]` - Array ID các item đã chọn
- `onToggleItem: (id: string) => void` - Handler khi toggle item
- `renderCustomItem?: (item: FilterItem) => React.ReactNode` - Custom render item (optional)
- `showFilterIcon?: boolean` (mặc định: `true`) - Có hiển thị icon filter không
- `isFilterSelected?: boolean` (mặc định: `true`) - Icon filter có đang selected không
- `onToggleFilter?: () => void` - Handler khi click icon filter

**Type `FilterItem`**:
```typescript
interface FilterItem {
  id: string;
  name: string;
  isSelected?: boolean;
}
```

**Ví dụ**:
```tsx
const [selectedFilters, setSelectedFilters] = useState<string[]>(['1']);

const filterData = [
  { id: '1', name: 'Tất cả' },
  { id: '2', name: 'Món chay' },
  { id: '3', name: 'Món mặn' },
  { id: '4', name: 'Đồ ngọt' },
];

const handleToggleItem = (id: string) => {
  setSelectedFilters(prev =>
    prev.includes(id)
      ? prev.filter(item => item !== id)
      : [...prev, id]
  );
};

<CustomFilter
  data={filterData}
  selectedItems={selectedFilters}
  onToggleItem={handleToggleItem}
  showFilterIcon={true}
  isFilterSelected={isFilterOpen}
  onToggleFilter={() => setIsFilterOpen(!isFilterOpen)}
/>
```

---

### C.9. TextArea

Component textarea cho input nhiều dòng (tương tự Input nhưng tối ưu cho nhiều dòng).

**Import**:
```typescript
import TextArea from '@/components/Common/TextArea';
```

**Props**: Tương tự Input component, nhưng mặc định `multiline={true}`

---

### C.10. TabBarWrapper

Wrapper cho custom tab bar (cần xem implementation để biết chi tiết props).

---

## D. 🔄 Hướng Dẫn Sử Dụng Store/State Management

Project sử dụng **Zustand** - một state management library nhỏ gọn và dễ sử dụng.

### D.0. Tổng Quan về Zustand

Zustand cho phép tạo store với state và actions một cách đơn giản. Mỗi store là một hook có thể sử dụng trực tiếp trong component.

---

### D.1. ForgotPasswordStore

Store này quản lý trạng thái của flow quên mật khẩu.

**Import**:
```typescript
import { useForgotPasswordStore } from '@/store/forgotPasswordStore';
```

**Sử dụng trong Component**:
```tsx
import { useForgotPasswordStore } from '@/store/forgotPasswordStore';

const MyComponent = () => {
  // Lấy state và actions từ store
  const { 
    isForgotPassword, 
    setIsForgotPassword, 
    resetIsForgotPassword 
  } = useForgotPasswordStore();

  // Sử dụng state
  if (isForgotPassword) {
    // Hiển thị UI cho flow quên mật khẩu
  }

  // Set state
  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  // Reset state
  const handleReset = () => {
    resetIsForgotPassword();
  };

  return (
    // ... JSX
  );
};
```

**Use Case**: 
- Khi user click "Quên mật khẩu", set `isForgotPassword = true`
- Trong các màn hình OTP, reset password, có thể check `isForgotPassword` để biết đang trong flow nào
- Sau khi hoàn tất, reset về `false`

---

### D.2. SuccessStore

Store này quản lý thông tin màn hình success (thông báo thành công).

**Import**:
```typescript
import { useSuccessStore } from '@/store/successStore';
```

**Sử dụng trong Component**:

**Ví dụ 1: Set thông tin success từ màn hình đăng ký**
```tsx
import { useSuccessStore } from '@/store/successStore';
import { router } from 'expo-router';

const SignUpScreen = () => {
  const { setSuccess } = useSuccessStore();

  const handleSignUpSuccess = async () => {
    // Gọi API đăng ký...
    
    // Set thông tin success
    setSuccess(
      'Đăng ký thành công!',
      'Tài khoản của bạn đã được tạo thành công. Vui lòng đăng nhập.',
      '/(auth)/sign-in'  // Redirect về màn hình đăng nhập
    );

    // Navigate đến màn hình success
    router.push('/(auth)/register-success');
  };

  return (
    // ... JSX
  );
};
```

**Ví dụ 2: Hiển thị thông tin success**
```tsx
import { useSuccessStore } from '@/store/successStore';
import { router } from 'expo-router';
import { useEffect } from 'react';

const SuccessScreen = () => {
  const { successTitle, successDesc, successRedirect, resetSuccess } = useSuccessStore();

  useEffect(() => {
    // Reset store khi unmount
    return () => {
      resetSuccess();
    };
  }, []);

  const handleContinue = () => {
    resetSuccess();
    router.push(successRedirect);
  };

  return (
    <View>
      <Text>{successTitle}</Text>
      <Text>{successDesc}</Text>
      <Button title="Tiếp tục" onPress={handleContinue} />
    </View>
  );
};
```

**Ví dụ 3: Chỉ set redirect route**
```tsx
const { setSuccessRedirect } = useSuccessStore();

// Chỉ thay đổi redirect route, không thay đổi title và desc
setSuccessRedirect('/(root)/tabs');
```

**Use Cases**:
- Sau khi đăng ký thành công → hiển thị màn hình success → redirect về sign-in
- Sau khi reset password thành công → hiển thị màn hình success → redirect về sign-in
- Sau khi cập nhật profile → hiển thị màn hình success → redirect về profile screen

---

### D.3. Tạo Store Mới

Nếu cần tạo store mới, bạn có thể tham khảo cấu trúc của các store hiện có:

**Ví dụ: Tạo UserStore**
```typescript
// store/userStore.ts
import { create } from 'zustand';

interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  setUser: (user: UserState['user']) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
```

**Sử dụng**:
```tsx
import { useUserStore } from '@/store/userStore';

const MyComponent = () => {
  const { user, setUser, clearUser } = useUserStore();

  // ...
};
```

---

### Lưu Ý Khi Sử Dụng Zustand

1. **Không cần Provider**: Zustand không cần Provider như Redux, có thể dùng trực tiếp
2. **Selective Re-render**: Chỉ component sử dụng state đã thay đổi mới re-render
3. **Persistence**: Có thể thêm persistence với middleware nếu cần lưu state vào AsyncStorage
4. **DevTools**: Có thể tích hợp Redux DevTools nếu cần

---

## E. 📝 Lưu Ý Quan Trọng Khi Phát Triển

Dựa trên file `note.txt`, đây là các quy tắc cần tuân thủ khi code:

### E.1. Scaling
- **Luôn sử dụng `getScaleFactor()`** cho các số đo TailwindCSS: `height`, `max-height`, `width`, `max-width`, `padding`, `gap`, `padding-x`, `padding-y`
- Ví dụ: `h-10` → `height: getScaleFactor() * 40`

### E.2. Text Component
- **Luôn sử dụng `TextScaled`** thay vì `Text` thông thường
- Ví dụ:
```tsx
<TextScaled
  size="xs"
  className="justify-start text-black font-Jakarta"
>
  Bạn chưa có tài khoản?
</TextScaled>
```

### E.3. Button Component
- **Luôn sử dụng `CustomButton`** thay vì button thông thường
- Tham khảo file `CustomButton.tsx` để biết cách sử dụng

### E.4. Image Component
- Chuyển `<img>` thành `<Image>` từ React Native
- Ví dụ:
```tsx
<Image
  style={{
    width: getScaleFactor() * 80,
    height: getScaleFactor() * 80,
  }}
  source={images.logo}
  resizeMode="contain"
/>
```

### E.5. Constants
- Định nghĩa hình ảnh/logo trong `constants/index.ts` với tên hợp lý

### E.6. Positioning
- Các `left-[apx]` nếu số quá lớn (>375/2) thì chuyển sang `right-[375-a]px`, sau đó nhân với `getScaleFactor()`
- Ví dụ: `left-[332px]` → `right-[43px]` → `right: getScaleFactor() * 43`

### E.7. View Component
- Bỏ các `inline-flex` khi sử dụng `<View>`

### E.8. Styling
- `text-Neutral-900` → `text-black`
- `bg-Tertiary-100` → `bg-backgroundV1`
- `justifyContent: 'flex-start'` → `justifyContent: 'center'`
- Bỏ `className font-family` (font được quản lý trong TextScaled)

### E.9. Routing
- Khi tạo Screen mới, nhớ thêm vào `_layout.tsx` trong `Stack.Screen`

### E.10. Data & Rendering
- Sử dụng mock-data và render thay vì hard-code
- Sử dụng `FlatList` để render thay cho `.map()`

### E.11. Code Structure
- Viết trong 1 file khi chưa cần tách component
- Hạn chế View chỉ có 1 View con bọc nhau (gộp lại cho gọn)

### E.12. Icons
- Các `div` có size `w-6 h-6` hoặc `w-4 h-4` thường là icon
- Chuyển thành `<Image>` với `icons.xxxIcon` (sẽ cập nhật sau)

### E.13. Width
- `width: getScaleFactor() * 320` → `width: "100%"`

---

## 🚀 Kết Luận

Tài liệu này cung cấp cái nhìn tổng quan về cấu trúc project, các models, components, và cách sử dụng state management. Khi phát triển tính năng mới, hãy tham khảo các ví dụ và quy tắc trên để đảm bảo code nhất quán và dễ bảo trì.

Nếu có thắc mắc hoặc cần làm rõ thêm, hãy xem implementation của các component/ store tương tự trong project để hiểu rõ hơn cách sử dụng.

