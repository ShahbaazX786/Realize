import CustomDropdown from "@/components/customDropdown";
import TabHeader from "@/components/tabHeader";
import { Switch } from "@/components/ui/switch";
import UpgradeCard from "@/components/upgradeCard";
import { languages, temperatureScale } from "@/lib/constants";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const [theme, setTheme] = useState("Light");
  const router = useRouter();

  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  return (
    <SafeAreaView>
      <TabHeader title={"Settings"} />
      <ScrollView
        className="flex flex-col w-full h-full px-6 py-6"
        alwaysBounceVertical
      >
        <View className="mb-4">
          <UpgradeCard />
        </View>
        <View className="flex flex-col justify-start items-start mt-6">
          <View className="flex flex-col justify-start items-start mb-6">
            <Text className="text-lg font-semibold text-gray-400 text-start">
              General Settings
            </Text>
            {/* Language */}
            <View className="flex flex-row justify-between items-center w-full mt-6">
              <View className="flex flex-row justify-start items-center">
                <FontAwesome
                  name="language"
                  size={24}
                  color="black"
                  className=" mr-6"
                />
                <Text className="text-xl">Language</Text>
              </View>
              <CustomDropdown data={languages} placeholder="Select Language" />
            </View>
            {/* theme */}
            <View className="flex flex-row justify-between items-center w-full mt-2">
              <View className="flex flex-row justify-start items-center">
                <Ionicons
                  name="color-palette-outline"
                  size={24}
                  color="black"
                  className="mr-6"
                />
                <Text className="text-xl">{theme} Mode</Text>
              </View>
              <View className="mr-4">
                <Switch
                  onChange={() => toggleTheme()}
                  size="lg"
                  isDisabled={false}
                  trackColor={{
                    false: "#94a3b8",
                    true: "#064e3b",
                  }}
                  thumbColor={"#22c55e"}
                  activeThumbColor={"#22c55e"}
                  ios_backgroundColor={"#064e3b"}
                />
              </View>
            </View>
            {/* temparature unit */}
            <View className="flex flex-row justify-between items-center w-full mt-2">
              <View className="flex flex-row justify-start items-center">
                <FontAwesome5
                  name="temperature-low"
                  size={24}
                  color="black"
                  className="mr-6"
                />
                <Text className="text-xl">Temperature Unit</Text>
              </View>
              <CustomDropdown
                data={temperatureScale}
                placeholder="Select Unit"
              />
            </View>
          </View>
          <View>
            <Text className="text-lg font-semibold text-gray-400 text-start">
              More settings
            </Text>
            {/* Link to play store dev page - More apps*/}
            {/* follow me on linktree */}
            {/* help translate */}
            {/* credits - About me*/}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
