import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const TabHeader = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <View className="h-14 shadow-xl drop-shadow-lg bg-white  flex flex-row justify-between items-center px-4 w-full">
      <View>
        <Text className="text-xl font-semibold">{title}</Text>
      </View>
      <View className="flex flex-row justify-center items-center gap-5">
        <TouchableOpacity onPress={() => router.replace("/(features)/premium")}>
          <AntDesign name="staro" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("/(features)/settings")}
        >
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabHeader;
