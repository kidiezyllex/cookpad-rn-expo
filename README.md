# Hướng Dẫn Sử Dụng Project CookPad React Native

---

## 📑 Mục Lục

### [A. 📁 Cấu Trúc Project](#a--cấu-trúc-project)
- [A.1. Sơ Đồ Cấu Trúc Project](#a1-sơ-đồ-cấu-trúc-project)
- [A.2. Thư Mục `app/` - Định Tuyến và Màn Hình](#a2-thư-mục-app---định-tuyến-và-màn-hình)
- [A.3. Thư Mục `lib/` - Hàm Tiện Ích](#a3-thư-mục-lib---hàm-tiện-ích)
- [A.4. Thư Mục `store/` - State Management](#a4-thư-mục-store---state-management)
- [A.5. Các File Cấu Hình](#a5-các-file-cấu-hình)

### [B. 📊 Models/Interfaces từ Mock Data](#b--modelsinterfaces-từ-mock-data)
- [B.1. Message & Notification Models](#b1-message--notification-models)
- [B.2. Recipe & Food Models](#b2-recipe--food-models)
- [B.3. Search Models](#b3-search-models)

### [C. 🎨 Hướng Dẫn Sử Dụng Components Common](#c--hướng-dẫn-sử-dụng-components-common)
- [C.1. TextScaled](#c1-textscaled)
- [C.2. CustomButton](#c2-custombutton)
- [C.3. Input](#c3-input)
- [C.4. BackHeader](#c4-backheader)
- [C.5. FoodGrid](#c5-foodgrid)
- [C.6. RecipeCarousel](#c6-recipecarousel)
- [C.7. CustomTabTrigger](#c7-customtabtrigger)
- [C.8. CustomFilter](#c8-customfilter)
- [C.9. TextArea](#c9-textarea)
- [C.10. TabBarWrapper](#c10-tabbarwrapper)

### [D. 🔄 Hướng Dẫn Sử Dụng Store/State Management](#d--hướng-dẫn-sử-dụng-storestate-management)
- [D.1. ForgotPasswordStore](#d1-forgotpasswordstore)
- [D.2. SuccessStore](#d2-successstore)

### [F. 📡 Hướng Dẫn Set-up Call API](#f--hướng-dẫn-set-up-call-api)
- [F.1. Tổng Quan](#f1-tổng-quan)
- [F.2. File Axios (lib/api/axios.ts)](#f2-file-axios-libapiaxiosts)
- [F.3. Interface Request/Response](#f3-interface-requestresponse)
- [F.4. Các File API](#f4-các-file-api)
- [F.5. Hooks với React Query](#f5-hooks-với-react-query)
- [F.6. Sử Dụng trong Component](#f6-sử-dụng-trong-component)

---

## A. 📁 Cấu Trúc Project

### A.1. Sơ Đồ Cấu Trúc Project

```
cookpad-rn-expo/
│
├── app/                         # Expo Router - định tuyến route/path theo file
│   ├── _layout.tsx              # Layout gốc của ứng dụng, cấu hình fonts, splash screen, các stack navigation
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

### A.3. Thư Mục `lib/` - Hàm Tiện Ích

Chứa các utility functions và helpers.

#### `lib/scaling.ts`
- **`getScaleFactor()`**: Tính toán scale factor dựa trên width của màn hình (base width: 375px, theo thiết kế Figma)
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
---

### A.4. Thư Mục `store/` - State Management

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

### A.5. Các File Cấu Hình
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
  image: any;  // Image source
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

## F. 📡 Hướng Dẫn Set-up Call API

Phần này hướng dẫn cách thiết lập và sử dụng API calls trong React Native với Axios và React Query (@tanstack/react-query).

### F.1. Tổng Quan

Cấu trúc thư mục cho API:

```
lib/
├── api/
│   ├── axios.ts          # Cấu hình Axios instance
│   ├── recipe.ts         # API endpoints cho Recipe
│   └── ...
interface/
├── request/
│   ├── recipe.ts         # Request types
│   └── ...
└── response/
    ├── recipe.ts         # Response types
    └── ...
hooks/
└── api/
    ├── useRecipe.ts      # React Query hooks
    └── ...
```

**Dependencies cần cài đặt**:
```bash
npm install axios @tanstack/react-query
# hoặc
yarn add axios @tanstack/react-query
```

---

### F.2. File Axios (lib/api/axios.ts)

File này cấu hình Axios instance với interceptors để tự động thêm token và xử lý lỗi.

```typescript
import axios, { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { tokenCache } from "@/lib/auth";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
	shouldNotify?: boolean;
}

async function getLocalAccessToken(): Promise<string | null> {
	try {
		const accessToken = await tokenCache.getToken("accessToken");
		return accessToken;
	} catch (error) {
		console.error("Error getting access token:", error);
		return null;
	}
}

const instance = axios.create({
	timeout: 3 * 60 * 1000, // 3 minutes
	baseURL: process.env.EXPO_PUBLIC_API_URL || "https://your-api-url.com/api",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

// Request interceptor - tự động thêm token vào header
instance.interceptors.request.use(
	async (config) => {
		const token = await getLocalAccessToken();
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// Response interceptor - xử lý lỗi 401 (Unauthorized)
instance.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as CustomAxiosRequestConfig;
		
		if (error.response?.status === 401) {
			// Xóa token và redirect về màn hình login
			await tokenCache.saveToken("accessToken", "");
			
			// Có thể thêm logic redirect ở đây nếu cần
			// Ví dụ: router.replace('/(auth)/sign-in');
		}
		
		return Promise.reject(error);
	}
);

export function logout() {
	tokenCache.saveToken("accessToken", "");
}

// Helper functions cho các HTTP methods
export const sendGet = async (url: string, params?: any): Promise<any> => {
	const response = await instance.get(url, { params });
	return response?.data;
};

export const sendPost = (url: string, params?: any, queryParams?: any) => {
	const config: AxiosRequestConfig = { params: queryParams };

	if (params instanceof FormData) {
		config.headers = {
			"Content-Type": "multipart/form-data",
		};
	}

	return instance.post(url, params, config)
		.then((res) => res?.data)
		.catch((error) => {
			if (error.response?.data) {
				throw error.response.data;
			}
			throw error;
		});
};

export const sendPut = (url: string, params?: any) => 
	instance.put(url, params)
		.then((res) => res?.data)
		.catch((error) => {
			if (error.response?.data) {
				throw error.response.data;
			}
			throw error;
		});

export const sendPatch = (url: string, params?: any) => 
	instance.patch(url, params)
		.then((res) => res?.data)
		.catch((error) => {
			if (error.response?.data) {
				throw error.response.data;
			}
			throw error;
		});

export const sendDelete = (url: string, params?: any) =>
	instance.delete(url, { data: params })
		.then((res) => res?.data)
		.catch((error) => {
			if (error.response?.data) {
				throw error.response.data;
			}
			throw error;
		});

// ApiClient class cho cách sử dụng advanced hơn
class ApiClient {
	get<T = any>(config: AxiosRequestConfig, options?: { shouldNotify: boolean }): Promise<T> {
		return this.request({
			...config,
			method: "GET",
			shouldNotify: options?.shouldNotify,
		});
	}

	post<T = any>(config: AxiosRequestConfig, options?: { shouldNotify: boolean }): Promise<T> {
		return this.request({
			...config,
			method: "POST",
			shouldNotify: options?.shouldNotify,
		});
	}

	put<T = any>(config: AxiosRequestConfig): Promise<T> {
		return this.request({ ...config, method: "PUT" });
	}

	delete<T = any>(config: AxiosRequestConfig): Promise<T> {
		return this.request({
			...config,
			method: "DELETE",
		});
	}

	patch<T = any>(config: AxiosRequestConfig): Promise<T> {
		return this.request({ ...config, method: "PATCH" });
	}

	private request<T = any>(config: CustomAxiosRequestConfig): Promise<T> {
		return new Promise((resolve, reject) => {
			instance
				.request<any, AxiosResponse<any>>(config)
				.then((res: AxiosResponse<any>) => {
					resolve(res as unknown as Promise<T>);
				})
				.catch((e: Error | AxiosError) => {
					reject(e);
				});
		});
	}
}

const apiClient = new ApiClient();

export default apiClient;
```
---

### F.3. Interface Request/Response

#### `interface/request/recipe.ts`

```typescript
// Request body cho tạo/cập nhật recipe
export interface ICreateRecipeBody {
	title: string;
	description: string;
	image?: string | FormData; // FormData nếu upload file
	time: number; // Thời gian nấu (phút)
	ingredients: string[];
	steps: string[];
	tags?: string[];
}

export interface IUpdateRecipeBody {
	title?: string;
	description?: string;
	image?: string | FormData;
	time?: number;
	ingredients?: string[];
	steps?: string[];
	tags?: string[];
}

// Request body cho tìm kiếm/ filter
export interface IGetRecipesQuery {
	page?: number;
	limit?: number;
	search?: string;
	tags?: string[];
	sortBy?: 'latest' | 'popular' | 'time';
}

// Request body cho rate/like recipe
export interface IRateRecipeBody {
	recipeId: string;
	rating: number; // 1-5
}

export interface ILikeRecipeBody {
	recipeId: string;
}
```

#### `interface/response/recipe.ts`

```typescript
// Response data types
export interface IRecipe {
	id: string;
	title: string;
	description: string;
	image: string;
	time: string; // Format: "3h 30m", "45m"
	likes: number;
	views: number;
	rating?: number;
	ingredients: string[];
	steps: string[];
	tags: string[];
	user: {
		id: string;
		name: string;
		avatar?: string;
	};
	createdAt: string;
	updatedAt: string;
}

// Response từ API
export interface IGetRecipesResponse {
	success: boolean;
	data: {
		recipes: IRecipe[];
		total: number;
		page: number;
		limit: number;
	};
	message?: string;
}

export interface IGetRecipeResponse {
	success: boolean;
	data: IRecipe;
	message?: string;
}

export interface ICreateRecipeResponse {
	success: boolean;
	data: {
		recipeId: string;
		recipe: IRecipe;
	};
	message?: string;
}

export interface IUpdateRecipeResponse {
	success: boolean;
	data: IRecipe;
	message?: string;
}

export interface IDeleteRecipeResponse {
	success: boolean;
	data: {
		recipeId: string;
	};
	message?: string;
}

export interface IRateRecipeResponse {
	success: boolean;
	data: {
		recipeId: string;
		rating: number;
		averageRating: number;
	};
	message?: string;
}

export interface ILikeRecipeResponse {
	success: boolean;
	data: {
		recipeId: string;
		likes: number;
		isLiked: boolean;
	};
	message?: string;
}
```

---

### F.4. Các File API

Tạo file API cho từng resource/module để tổ chức code tốt hơn.

#### `lib/api/recipe.ts`

```typescript
import { sendGet, sendPost, sendPut, sendDelete, sendPatch } from "./axios";
import {
	IGetRecipesResponse,
	IGetRecipeResponse,
	ICreateRecipeResponse,
	IUpdateRecipeResponse,
	IDeleteRecipeResponse,
	IRateRecipeResponse,
	ILikeRecipeResponse,
} from "@/interface/response/recipe";
import {
	ICreateRecipeBody,
	IUpdateRecipeBody,
	IGetRecipesQuery,
	IRateRecipeBody,
	ILikeRecipeBody,
} from "@/interface/request/recipe";

// Lấy danh sách recipes
export const getRecipes = async (query?: IGetRecipesQuery): Promise<IGetRecipesResponse> => {
	const res = await sendGet(`/recipes`, query);
	return res;
};

// Lấy chi tiết 1 recipe
export const getRecipe = async (id: string): Promise<IGetRecipeResponse> => {
	const res = await sendGet(`/recipes/${id}`);
	return res;
};

// Tạo recipe mới
export const createRecipe = async (body: ICreateRecipeBody): Promise<ICreateRecipeResponse> => {
	const res = await sendPost(`/recipes`, body);
	return res;
};

// Cập nhật recipe
export const updateRecipe = async (
	id: string,
	body: IUpdateRecipeBody
): Promise<IUpdateRecipeResponse> => {
	const res = await sendPut(`/recipes/${id}`, body);
	return res;
};

// Xóa recipe
export const deleteRecipe = async (id: string): Promise<IDeleteRecipeResponse> => {
	const res = await sendDelete(`/recipes/${id}`);
	return res;
};

// Rate recipe
export const rateRecipe = async (body: IRateRecipeBody): Promise<IRateRecipeResponse> => {
	const res = await sendPost(`/recipes/rate`, body);
	return res;
};

// Like/Unlike recipe
export const likeRecipe = async (body: ILikeRecipeBody): Promise<ILikeRecipeResponse> => {
	const res = await sendPost(`/recipes/like`, body);
	return res;
};

// Lấy recipes của user hiện tại
export const getMyRecipes = async (query?: IGetRecipesQuery): Promise<IGetRecipesResponse> => {
	const res = await sendGet(`/recipes/my-recipes`, query);
	return res;
};

// Lấy recipes đã like
export const getLikedRecipes = async (query?: IGetRecipesQuery): Promise<IGetRecipesResponse> => {
	const res = await sendGet(`/recipes/liked`, query);
	return res;
};
```

---

### F.5. Hooks với React Query

Sử dụng React Query để quản lý server state, caching, và refetching tự động.

**Lưu ý**: Cần wrap app với QueryClientProvider. Thêm vào `app/_layout.tsx`:

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
		},
	},
});

// Wrap RootLayout với QueryClientProvider
```

#### `hooks/api/useRecipe.ts`

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
	getRecipes,
	getRecipe,
	createRecipe,
	updateRecipe,
	deleteRecipe,
	rateRecipe,
	likeRecipe,
	getMyRecipes,
	getLikedRecipes,
} from '@/lib/api/recipe';
import {
	IGetRecipesResponse,
	IGetRecipeResponse,
	ICreateRecipeResponse,
	IUpdateRecipeResponse,
	IDeleteRecipeResponse,
	IRateRecipeResponse,
	ILikeRecipeResponse,
} from '@/interface/response/recipe';
import {
	ICreateRecipeBody,
	IUpdateRecipeBody,
	IGetRecipesQuery,
	IRateRecipeBody,
	ILikeRecipeBody,
} from '@/interface/request/recipe';

// Query: Lấy danh sách recipes
export const useGetRecipes = (query?: IGetRecipesQuery) => {
	return useQuery<IGetRecipesResponse, Error>({
		queryKey: ['recipes', 'list', query],
		queryFn: () => getRecipes(query),
	});
};

// Query: Lấy chi tiết 1 recipe
export const useGetRecipe = (id: string) => {
	return useQuery<IGetRecipeResponse, Error>({
		queryKey: ['recipes', 'detail', id],
		queryFn: () => getRecipe(id),
		enabled: !!id, // Chỉ fetch khi có id
	});
};

// Query: Lấy recipes của user
export const useGetMyRecipes = (query?: IGetRecipesQuery) => {
	return useQuery<IGetRecipesResponse, Error>({
		queryKey: ['recipes', 'my-recipes', query],
		queryFn: () => getMyRecipes(query),
	});
};

// Query: Lấy recipes đã like
export const useGetLikedRecipes = (query?: IGetRecipesQuery) => {
	return useQuery<IGetRecipesResponse, Error>({
		queryKey: ['recipes', 'liked', query],
		queryFn: () => getLikedRecipes(query),
	});
};

// Mutation: Tạo recipe mới
export const useCreateRecipe = () => {
	const queryClient = useQueryClient();

	return useMutation<ICreateRecipeResponse, Error, ICreateRecipeBody>({
		mutationFn: createRecipe,
		onSuccess: () => {
			// Invalidate và refetch danh sách recipes
			queryClient.invalidateQueries({ queryKey: ['recipes', 'list'] });
			queryClient.invalidateQueries({ queryKey: ['recipes', 'my-recipes'] });
		},
	});
};

// Mutation: Cập nhật recipe
export const useUpdateRecipe = () => {
	const queryClient = useQueryClient();

	return useMutation<
		IUpdateRecipeResponse,
		Error,
		{ id: string; body: IUpdateRecipeBody }
	>({
		mutationFn: ({ id, body }) => updateRecipe(id, body),
		onSuccess: (data, variables) => {
			// Invalidate chi tiết recipe đã update
			queryClient.invalidateQueries({ queryKey: ['recipes', 'detail', variables.id] });
			// Invalidate danh sách
			queryClient.invalidateQueries({ queryKey: ['recipes', 'list'] });
			queryClient.invalidateQueries({ queryKey: ['recipes', 'my-recipes'] });
		},
	});
};

// Mutation: Xóa recipe
export const useDeleteRecipe = () => {
	const queryClient = useQueryClient();

	return useMutation<IDeleteRecipeResponse, Error, string>({
		mutationFn: deleteRecipe,
		onSuccess: () => {
			// Invalidate tất cả queries liên quan đến recipes
			queryClient.invalidateQueries({ queryKey: ['recipes'] });
		},
	});
};

// Mutation: Rate recipe
export const useRateRecipe = () => {
	const queryClient = useQueryClient();

	return useMutation<IRateRecipeResponse, Error, IRateRecipeBody>({
		mutationFn: rateRecipe,
		onSuccess: (data, variables) => {
			// Invalidate chi tiết recipe để cập nhật rating
			queryClient.invalidateQueries({ queryKey: ['recipes', 'detail', variables.recipeId] });
		},
	});
};

// Mutation: Like/Unlike recipe
export const useLikeRecipe = () => {
	const queryClient = useQueryClient();

	return useMutation<ILikeRecipeResponse, Error, ILikeRecipeBody>({
		mutationFn: likeRecipe,
		onSuccess: (data, variables) => {
			// Invalidate chi tiết recipe để cập nhật like count
			queryClient.invalidateQueries({ queryKey: ['recipes', 'detail', variables.recipeId] });
			// Invalidate danh sách recipes
			queryClient.invalidateQueries({ queryKey: ['recipes', 'list'] });
			// Invalidate liked recipes nếu đang xem
			queryClient.invalidateQueries({ queryKey: ['recipes', 'liked'] });
		},
	});
};
```

---

### F.6. Sử Dụng trong Component

Ví dụ sử dụng hooks trong component:

```tsx
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useGetRecipes, useCreateRecipe, useLikeRecipe } from '@/hooks/api/useRecipe';
import { ICreateRecipeBody } from '@/interface/request/recipe';

const RecipeListScreen = () => {
	// Query: Fetch danh sách recipes
	const { data, isLoading, error, refetch } = useGetRecipes({
		page: 1,
		limit: 20,
		sortBy: 'latest',
	});

	// Mutation: Like recipe
	const likeMutation = useLikeRecipe();

	const handleLike = (recipeId: string) => {
		likeMutation.mutate(
			{ recipeId },
			{
				onSuccess: (response) => {
					console.log('Recipe liked!', response);
				},
				onError: (error) => {
					console.error('Error liking recipe:', error);
				},
			}
		);
	};

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	if (error) {
		return (
			<View>
				<Text>Error: {error.message}</Text>
			</View>
		);
	}

	return (
		<ScrollView>
			{data?.data.recipes.map((recipe) => (
				<RecipeCard
					key={recipe.id}
					recipe={recipe}
					onLike={() => handleLike(recipe.id)}
				/>
			))}
		</ScrollView>
	);
};

// Ví dụ tạo recipe mới
const CreateRecipeScreen = () => {
	const createMutation = useCreateRecipe();
	const router = useRouter();

	const handleCreate = (formData: ICreateRecipeBody) => {
		createMutation.mutate(formData, {
			onSuccess: (response) => {
				console.log('Recipe created!', response);
				router.push(`/(root)/food-detail?id=${response.data.recipeId}`);
			},
			onError: (error) => {
				console.error('Error creating recipe:', error);
			},
		});
	};

	return (
		// Form UI...
	);
};
```

**Các tính năng của React Query**:
- **Caching**: Tự động cache data, không cần fetch lại nếu data chưa stale
- **Refetching**: Tự động refetch khi component mount hoặc khi mất focus rồi focus lại
- **Optimistic Updates**: Có thể update UI trước khi API response (với `onMutate`)
- **Background Updates**: Update data ở background mà không làm gián đoạn UX
- **Error Retry**: Tự động retry khi request fail

**Best Practices**:
- Sử dụng `queryKey` rõ ràng và consistent
- `invalidateQueries` sau khi mutation để đảm bảo data luôn fresh
- Sử dụng `enabled` option để control khi nào query nên chạy
- Xử lý loading và error states trong UI

---
