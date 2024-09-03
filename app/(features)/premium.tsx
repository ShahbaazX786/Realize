import { Ionicons, MaterialIcons, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Premium = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View className="flex flex-col w-full h-full px-6 py-6">
        {/* header */}
        <View className="flex flex-row justify-between items-center">
          <Text className="text-3xl font-semibold">Upgrade To Pro</Text>
          <TouchableOpacity
            className="rounded-full p-3 bg-gray-200"
            onPress={() => router.replace("/(home)/(tabs)/dashboard")}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* content */}

        <View className="mt-auto items-center justify-center flex">
          <FontAwesome6 name="bolt" size={120} color="green" />
          <Text className="text-green-700 font-bold text-4xl mt-4">
            Realize PRO
          </Text>
          <Text className="text-xl text-center mt-6">
            Get rid of all annoying ads with Realize Pro membership for an
            completely ad-free experience
          </Text>
        </View>
        {/* buttons */}

        <View className="flex flex-col justify-center items-center mt-auto">
          <TouchableOpacity className="rounded-full bg-gray-200 p-5 mb-5 w-full">
            <View className="flex flex-row justify-center items-center gap-4">
              <Text className="text-black font-bold text-lg">
                Free for 6 hours - Watch Ad
              </Text>
              <MaterialIcons name="ondemand-video" size={28} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full bg-green-500 p-5 w-full">
            <View className="flex flex-row justify-center items-center gap-4">
              <Text className="text-white font-bold text-lg">
                Upgrade To Pro Now
              </Text>
            </View>
          </TouchableOpacity>
          <Text className="text-center mt-4 text-gray-500">
            Your subscription will be auto-renewed unless revoked at least 24
            hours before the end of the current period
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Premium;
