import { useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function DeliveryDetails() {
  const router = useRouter();

  const nextPage = () => {
    router.push("/checkout/payment");
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Delivery Details</Text>

      <Button mode="contained" onPress={nextPage}>
        Next
      </Button>
    </View>
  );
}
