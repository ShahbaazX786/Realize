import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

const UpgradeCard = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="flex flex-col bg-yellow-400 h-auto w-full p-4 rounded-2xl shadow-xl shadow-yellow-500 drop-shadow-xl"
      onPress={() => router.replace("/(features)/premium")}
    >
      <View className="flex flex-row justify-between items-center">
        <Text className="text-base ">Upgrade to</Text>
        <Text className="text-2xl font-bold">Realize Pro</Text>
      </View>
      <View className="flex flex-row justify-between items-end">
        <View className="flex flex-col space-y-4 mt-4">
          <Text className="text-lg">✅ Ultimate Experience</Text>
          <Text className="text-lg">✅ Removes All Ads</Text>
        </View>
        <View>
          <Text className="text-4xl font-bold">4.99$</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UpgradeCard;
