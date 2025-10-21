import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function ProfileScreen() {
  const user = {
    firstName: "Người",
    lastName: "Dùng",
    primaryEmailAddress: { emailAddress: "user@example.com" },
    primaryPhoneNumber: { phoneNumber: "0123456789" },
    externalAccounts: [{ imageUrl: null }],
    imageUrl: null
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="px-4"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text className="my-5 text-2xl font-JakartaBold">Hồ sơ của tôi</Text>

        <View className="flex justify-center items-center my-5">
          {/* <Image
            source={{
              uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl,
            }}
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
            className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
          /> */}
        </View>

        <View className="flex flex-col justify-center items-start p-4 bg-white rounded-lg shadow-sm shadow-neutral-300">
          <View className="flex flex-col justify-start items-start w-full">
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
