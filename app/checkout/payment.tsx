import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Card, TextInput, useTheme } from "react-native-paper";

export default function PaymentDetails() {
  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
    //Submit:

    //Todo: Why is not navigating home
    router.push("/");
  };

  return (
    <ScrollView contentContainerStyle={{ gap: 10 }}>
      <Card>
        <Card.Title title="Payment details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label="Card number"
            placeholder="4242 4242 4242 4242"
            style={{ backgroundColor: theme.colors.background }}
          />
          <View style={{ flexDirection: "row", gap: 15 }}>
            <TextInput
              label="Expiration date"
              placeholder="mm/yyyy"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <TextInput
              label="Security code"
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={nextPage}>
        Next
      </Button>
    </ScrollView>
  );
}
