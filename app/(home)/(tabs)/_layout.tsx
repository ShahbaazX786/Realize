import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0,
          overflow: "hidden",
          marginHorizontal: 10,
          marginBottom: 10,
          height: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        },
      }}
    >
      <Tabs.Screen
        name="charging"
        options={{
          title: "Charging",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={
                <FontAwesome6 name="bolt-lightning" size={28} color="white" />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="usage"
        options={{
          title: "Usage",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={<MaterialIcons name="data-usage" size={28} color="white" />}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={<FontAwesome name="dashboard" size={28} color="white" />}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="features"
        options={{
          title: "Features",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={<Ionicons name="options" size={28} color="white" />}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tips"
        options={{
          title: "Tips",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={
                <MaterialIcons
                  name="tips-and-updates"
                  size={24}
                  color="white"
                />
              }
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const TabIcon = ({ focused, icon }: { icon: any; focused: boolean }) => {
  return (
    <View
      className={`flex flex-row justify-center items-center rounded-full ${
        focused ? "bg-green-300" : ""
      }`}
    >
      <View
        className={`rounded-full w-16 h-12 items-center justify-center ${
          focused ? "bg-green-400" : ""
        }`}
      >
        {icon}
      </View>
    </View>
  );
};
