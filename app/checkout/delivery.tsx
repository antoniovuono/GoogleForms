import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function DeliveryDetails() {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Delivery Details</Text>
      <Link href={"/checkout/payment"}>Next</Link>
    </View>
  );
}
