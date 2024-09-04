import TabHeader from "@/components/tabHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Charging = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  const getLocalData = async () => {
    try {
      const deviceInfo = await AsyncStorage.getItem("device_info");
      return deviceInfo != null ? JSON.parse(deviceInfo) : null;
    } catch (e) {
      console.error("Unable to retrieve local data", e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLocalData();
      setDeviceInfo(data);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <TabHeader title={"Charging"} />
        <View>
          {deviceInfo?.features?.map((item, index) => <Text>{item}</Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Charging;
