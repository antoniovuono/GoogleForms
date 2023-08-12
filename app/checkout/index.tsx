import { useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function PersonalDetails() {
  const router = useRouter();

  const nextPage = () => {
    console.warn("Next page");
    router.push("/checkout/delivery");
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Personal Details</Text>

      <Button mode="contained" onPress={nextPage}>
        Next
      </Button>
    </View>
  );
}
