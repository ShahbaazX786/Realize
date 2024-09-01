import BatteryCardNormal from "@/components/batteryCardNormal";
import TabHeader from "@/components/tabHeader";
import { Feather } from "@expo/vector-icons";
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
      <View className="bg-gray-100">
        <TabHeader title={"Dashboard"} />
        <View className="my-2 mx-4 grid grid-cols-2">
          <BatteryCardNormal
            title={"Battery Health"}
            value={"Good"}
            icon={<Feather name="battery" size={28} color="green" />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
