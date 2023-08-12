import { useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { Button, Card, TextInput, useTheme } from "react-native-paper";

export default function DeliveryDetails() {
  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
    router.push("/checkout/payment");
  };

  return (
    <View style={{ gap: 15 }}>
      <Card>
        <Card.Title title="Delivery address" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label="City"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label="Postal code"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label="Address"
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={nextPage}>
        Next
      </Button>
    </View>
  );
}
