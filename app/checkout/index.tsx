import { useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { Button, Card, TextInput, useTheme } from "react-native-paper";

export default function PersonalDetails() {
  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
    router.push("/checkout/delivery");
  };

  return (
    <View style={{ gap: 15 }}>
      <Card>
        <Card.Title title="Personal Information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            placeholder="Name"
            label="Name"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder="hey@gmail.com"
            label="Email"
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
