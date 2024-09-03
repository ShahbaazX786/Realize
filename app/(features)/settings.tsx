import CustomDropdown from "@/components/customDropdown";
import TabHeader from "@/components/tabHeader";
import { Switch } from "@/components/ui/switch";
import UpgradeCard from "@/components/upgradeCard";
import { languages, temperatureScale } from "@/lib/constants";
import { getDevStoreProfile, getUrl } from "@/lib/helper";
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const [theme, setTheme] = useState("Light");
  const router = useRouter();

  const openExternalLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    try {
      supported && (await Linking.openURL(url));
    } catch (error) {
      console.error(`Don't know how to open this URL: ${url},`);
    }
  };

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
            <View className="flex flex-row justify-between items-center w-full mt-4">
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
            <View className="flex flex-row justify-between items-center w-full mt-4">
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
          <View className="mt-6 w-full">
            <Text className="text-lg font-semibold text-gray-400 text-start">
              More settings
            </Text>
            <View className="flex flex-row justify-between items-center w-full mt-6">
              <TouchableOpacity
                onPress={() => openExternalLink(getUrl("playstore"))}
                className="flex flex-row justify-start items-center w-full"
              >
                <AntDesign
                  name="appstore-o"
                  size={20}
                  color="black"
                  className="mr-6"
                />
                <Text className="text-xl">Explore other apps</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-between items-center w-full mt-6">
              <TouchableOpacity
                onPress={() => openExternalLink(getUrl("twitter"))}
                className="flex flex-row justify-start items-center w-full"
              >
                <FontAwesome5
                  name="telegram-plane"
                  size={24}
                  color="black"
                  className="mr-6"
                />
                <Text className="text-xl">Follow Us</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-between items-center w-full mt-6">
              <TouchableOpacity
                onPress={() => openExternalLink(getUrl("github"))}
                className="flex flex-row justify-start items-center w-full"
              >
                <Ionicons
                  name="help-circle-outline"
                  size={24}
                  color="black"
                  className="mr-6"
                />
                <Text className="text-xl">Contribute project?</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-between items-center w-full mt-6">
              <TouchableOpacity
                onPress={() => router.replace("/(features)/about")}
                className="flex flex-row justify-start items-center w-full"
              >
                <Feather
                  name="alert-circle"
                  size={22}
                  color="black"
                  className="mr-6"
                />
                <Text className="text-xl">About Us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
