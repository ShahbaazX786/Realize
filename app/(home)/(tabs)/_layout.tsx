import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
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
          marginHorizontal: 20,
          marginBottom: 20,
          height: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
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
              icon={<FontAwesome5 name="home" size={24} color="white" />}
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
              icon={<FontAwesome5 name="home" size={24} color="white" />}
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
              icon={<FontAwesome5 name="home" size={24} color="white" />}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="features"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={<FontAwesome5 name="home" size={24} color="white" />}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tips"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={<FontAwesome5 name="home" size={24} color="white" />}
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
        focused ? "bg-general-300" : ""
      }`}
    >
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${
          focused ? "bg-general-400" : ""
        }`}
      >
        {icon}
      </View>
    </View>
  );
};
