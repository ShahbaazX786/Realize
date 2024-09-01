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
        <Text className="capitalize text-base text-gray-500">{title}</Text>
        <Text className="font-semibold text-3xl mt-2">{value}%</Text>
      </View>
      <Text className="mt-28 text-base font-bold">5000 mAH</Text>
      <Text className="text-gray-500">/ 5000 mAH</Text>
    </View>
  );
};

export default BatteryCardLong;
