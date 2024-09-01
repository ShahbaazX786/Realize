import BatteryCardNormal from "@/components/batteryCardNormal";
import TabHeader from "@/components/tabHeader";
import { AntDesign, Feather, FontAwesome6, Fontisto } from "@expo/vector-icons";
import * as Battery from "expo-battery";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [batteryState, setBatteryState] = useState(0);
  const [lowPowerMode, setLowPowerMode] = useState(false);

  useEffect(() => {
    async function fetchBatteryInfo() {
      const level = await Battery.getBatteryLevelAsync();
      const state = await Battery.getBatteryStateAsync();
      const powerState = await Battery.getPowerStateAsync();

      setBatteryLevel(level);
      setBatteryState(state);
      setLowPowerMode(powerState.lowPowerMode);
    }

    fetchBatteryInfo();

    const batteryLevelListener = Battery.addBatteryLevelListener(
      ({ batteryLevel }) => {
        setBatteryLevel(batteryLevel);
      }
    );

    const batteryStateListener = Battery.addBatteryStateListener(
      ({ batteryState }) => {
        setBatteryState(batteryState);
      }
    );

    const lowPowerModeListener = Battery.addLowPowerModeListener(
      ({ lowPowerMode }) => {
        setLowPowerMode(lowPowerMode);
      }
    );

    return () => {
      batteryLevelListener.remove();
      batteryStateListener.remove();
      lowPowerModeListener.remove();
    };
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <TabHeader title={"Dashboard"} />
      <View className="bg-red-500 flex flex-col justify-center items-center px-3 py-3">
        <View className="flex flex-row items-start justify-center">
          <BatteryCardNormal
            title={"Battery Health"}
            value={"Good"}
            icon={<AntDesign name="heart" size={24} color="green" />}
          />
        </View>

        <View className="flex flex-row items-start justify-center pt-3">
          <View className="w-1/2 pr-2">
            <BatteryCardNormal
              title={"Status"}
              value={"Charging"}
              icon={<Fontisto name="battery-full" size={28} color="green" />}
            />
          </View>
          <View className="w-1/2">
            <BatteryCardNormal
              title={"Charging Type"}
              value={"AC"}
              icon={<FontAwesome6 name="bolt" size={24} color="green" />}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
