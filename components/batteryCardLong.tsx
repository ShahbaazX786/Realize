import { Text, View } from "react-native";

const BatteryCardLong = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: any;
}) => {
  return (
    <View className="shadow-2xl rounded-2xl flex flex-col justify-center items-center bg-white p-6">
      <View className="flex flex-col justify-center items-center w-full my-4">
        <Text className="capitalize text-lg text-gray-500">{title}</Text>
        <Text className="font-semibold text-5xl text-center mt-6">
          {value}%
        </Text>
      </View>
      <View className="mt-20">{icon}</View>
    </View>
  );
};

export default BatteryCardLong;
