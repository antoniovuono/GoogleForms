import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function CheckoutStack() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: { padding: 15, backgroundColor: "#F0EBF8", flex: 1 },
          headerStyle: { backgroundColor: "#673AB8" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "#F0EBF8",
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Personal Information" }}
        />
        <Stack.Screen
          name="delivery"
          options={{ title: "Delivery Information" }}
        />
        <Stack.Screen
          name="payment"
          options={{ title: "Paymentl Information" }}
        />
      </Stack>
    </>
  );
}
