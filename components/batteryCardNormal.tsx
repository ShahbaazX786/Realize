import { Text, View } from "react-native";

const BatteryCardNormal = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: any;
}) => {
  return (
    <View className="shadow-2xl rounded-2xl flex flex-col justify-between bg-white p-6">
      <View className="flex flex-row justify-between items-start w-full">
        <Text className="capitalize text-base text-gray-600 break-words">
          {title}
        </Text>
        <Text className="font-semibold text-lg">{value}</Text>
      </View>
      <View className="mt-10">{icon}</View>
    </View>
  );
};

export default BatteryCardNormal;
