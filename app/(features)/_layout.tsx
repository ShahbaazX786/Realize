import { Stack } from "expo-router";

const FeatureLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="premium"
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
    </Stack>
  );
};

export default FeatureLayout;
