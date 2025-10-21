import { icons } from "@/constants";
import { useCallback } from "react";
import { Alert, Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";

const OAuth = () => {
  const handleGoogleSignIn = useCallback(async () => {
    // TODO: Implement your own Google OAuth logic here
    Alert.alert("Thông báo", "Chức năng đăng nhập Google đang được phát triển");
  }, []);

  return (
    <View>
      <View className="flex flex-row gap-x-4 justify-center items-center mt-4">
        <View className="h-[1px] bg-general-100 flex-1" />
        <Text className="text-lg">Hoặc</Text>
        <View className="h-[1px] bg-general-100 flex-1" />
      </View>

      <CustomButton title="Đăng nhập với Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image source={icons.google} resizeMode="contain" className="mx-2 w-5 h-5" />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  )
}

export default OAuth;