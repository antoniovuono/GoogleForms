import { useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function PaymentDetails() {
  const router = useRouter();

  const nextPage = () => {
    //Submit:

    //Todo: Why is not navigating home
    router.push("/");
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Payment Details</Text>

      <Button mode="contained" onPress={nextPage}>
        Next
      </Button>
    </View>
  );
}
