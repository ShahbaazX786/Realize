import BatteryCardLong from "@/components/batteryCardLong";
import BatteryCardNormal from "@/components/batteryCardNormal";
import TabHeader from "@/components/tabHeader";
import {
  getBatteryLevel,
  getBatteryState,
  getDeviceType,
  getSystemUptime,
} from "@/lib/helper";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as Battery from "expo-battery";
import * as Device from "expo-device";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    batteryLevel: 0,
    batteryState: "",
    lowPowerMode: false,
  });
  const [deviceInfo, setDeviceInfo] = useState({
    isRooted: false,
    features: [],
    maxMemory: 0,
    upTime: 0,
  });
  const upTimeRef = useRef(0);

  const fetchBatteryInfo = useCallback(async () => {
    const powerState = await Battery.getPowerStateAsync();
    setBatteryInfo({
      batteryLevel: getBatteryLevel(powerState.batteryLevel),
      batteryState: getBatteryState(powerState.batteryState),
      lowPowerMode: powerState.lowPowerMode,
    });
  }, []);

  const fetchDeviceInfo = useCallback(async () => {
    const [isRooted, features, maxMemory, systemUptime] = await Promise.all([
      Device.isRootedExperimentalAsync(),
      Device.getPlatformFeaturesAsync(),
      Device.getMaxMemoryAsync(),
      Device.getUptimeAsync(),
    ]);
    upTimeRef.current = systemUptime;
    setDeviceInfo({ isRooted, features, maxMemory, upTime: systemUptime });
  }, []);

  useEffect(() => {
    fetchDeviceInfo();
    fetchBatteryInfo();

    const upTimeInterval = setInterval(() => {
      upTimeRef.current += 1; // Update ref value
      setDeviceInfo((prev) => ({
        ...prev,
        upTime: upTimeRef.current, // Update state with current ref value
      }));
      console.log(deviceInfo.upTime);
    }, 1000);

    const batteryLevelListener = Battery.addBatteryLevelListener(
      ({ batteryLevel }) => {
        setBatteryInfo((prev) => ({
          ...prev,
          level: getBatteryLevel(batteryLevel),
        }));
      }
    );

    const batteryStateListener = Battery.addBatteryStateListener(
      ({ batteryState }) => {
        setBatteryInfo((prev) => ({
          ...prev,
          state: getBatteryState(batteryState),
        }));
      }
    );

    const lowPowerModeListener = Battery.addLowPowerModeListener(
      ({ lowPowerMode }) => {
        setBatteryInfo((prev) => ({
          ...prev,
          lowPowerMode,
        }));
      }
    );

    return () => {
      clearInterval(upTimeInterval);
      batteryLevelListener.remove();
      batteryStateListener.remove();
      lowPowerModeListener.remove();
    };
  }, [deviceInfo.upTime, fetchBatteryInfo, fetchDeviceInfo]);

  return (
    <SafeAreaView className="bg-white">
      <TabHeader title={"Dashboard"} />
      <ScrollView alwaysBounceVertical={true} scrollToOverflowEnabled>
        <View className="bg-[#f4f4f5] flex flex-col justify-center items-center px-3 pt-3 mb-0 pb-20">
          <View className="flex flex-row items-start justify-center">
            <BatteryCardNormal
              title={"Device Name"}
              value={`${Device.brand}  ${Device.designName}`}
              icon={<Entypo name="mobile" size={24} color="black" />}
            />
          </View>

          <View className="flex flex-row items-start justify-center pt-3">
            <View className="w-1/2 pr-2">
              <BatteryCardNormal
                title={"Battery Status"}
                value={batteryInfo.batteryState}
                icon={
                  <Fontisto
                    name="battery-full"
                    size={28}
                    color={
                      batteryInfo.batteryState === "Full" ||
                      batteryInfo.batteryState === "Charging"
                        ? "green"
                        : batteryInfo.batteryState === "Discharging"
                          ? "red"
                          : "black"
                    }
                  />
                }
              />
            </View>
            <View className="w-1/2">
              <BatteryCardNormal
                title={"Charging Type"}
                value={
                  batteryInfo.batteryState === "Charging" ? "AC" : "Unplugged"
                }
                icon={
                  <FontAwesome6
                    name="bolt"
                    size={24}
                    color={
                      batteryInfo.batteryState !== "Charging" ? "gray" : "green"
                    }
                  />
                }
              />
            </View>
          </View>

          <View className="flex flex-row items-start justify-center pt-3">
            <View className="w-1/2 pr-2 h-full">
              <BatteryCardLong
                title={"Battery Level"}
                value={batteryInfo.batteryLevel}
                icon={
                  <Feather name="battery-charging" size={50} color="green" />
                }
              />
            </View>
            <View className="w-1/2">
              <View>
                <BatteryCardNormal
                  title={"Battery Saver Mode"}
                  value={batteryInfo.lowPowerMode ? "On" : "Off"}
                  icon={
                    <MaterialIcons
                      name="energy-savings-leaf"
                      size={24}
                      color="green"
                    />
                  }
                />
              </View>
              <View className="pt-3">
                <BatteryCardNormal
                  title={"Battery Health"}
                  value={"Good"}
                  icon={<AntDesign name="heart" size={24} color="green" />}
                />
              </View>
            </View>
          </View>

          <View className="flex flex-row items-start justify-center pt-3">
            <View className="w-1/2 pr-2">
              <BatteryCardNormal
                title={"Device Manufacturer"}
                value={Device.manufacturer}
                icon={
                  <MaterialIcons
                    name="precision-manufacturing"
                    size={24}
                    color="green"
                  />
                }
              />
            </View>
            <View className="w-1/2">
              <BatteryCardNormal
                title={"Category"}
                value={getDeviceType(Device.deviceType)}
                icon={<Feather name="smartphone" size={24} color="black" />}
              />
            </View>
          </View>
          <View className="flex flex-row items-start justify-center pt-3">
            <View className="w-1/2 pr-2">
              <BatteryCardNormal
                title={"Root Access"}
                value={deviceInfo.isRooted ? "Enabled" : "Not Enabled"}
                icon={
                  <FontAwesome5
                    name="hashtag"
                    size={24}
                    color={deviceInfo.isRooted ? "red" : "green"}
                  />
                }
              />
            </View>
            <View className="w-1/2">
              <BatteryCardNormal
                title={"Up Time"}
                value={"s"}
                icon={<FontAwesome6 name="bolt" size={24} color="green" />}
              />
            </View>
          </View>
          <View className="flex flex-row items-start justify-center mt-3">
            <BatteryCardNormal
              title={"Up Time"}
              value={getSystemUptime(deviceInfo.upTime)}
              icon={<Ionicons name="timer" size={24} color="green" />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
