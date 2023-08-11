import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function PersonalDetails() {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Personal Details</Text>
      <Link href={"/checkout/delivery"}>Next</Link>
    </View>
  );
}
