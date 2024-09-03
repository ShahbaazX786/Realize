import { Stack } from "expo-router";

const FeatureLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="premium"
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
    </Stack>
  );
};

export default FeatureLayout;
