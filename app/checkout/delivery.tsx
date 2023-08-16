import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  RadioButton,
  HelperText,
} from "react-native-paper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DeliveryInfo,
  DeliveryInfoSchema,
} from "../../src/schema/delivery.schema";
import ControlledInput from "../../src/components/ControlledInput";

export default function DeliveryDetails() {
  const [shipping, setShipping] = useState("");

  const router = useRouter();

  const { control, handleSubmit } = useForm<DeliveryInfo>({
    resolver: zodResolver(DeliveryInfoSchema),
    defaultValues: {
      shipping: "free",
    },
  });

  const nextPage = (data) => {
    router.push("/checkout/payment");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
        maxWidth: 500,
        width: "100%",
        alignSelf: "center",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card>
        <Card.Title title="Delivery address" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="city"
            placeholder="City"
            label="City"
          />

          <ControlledInput
            control={control}
            name="postalCode"
            placeholder="Postal Code"
            label="Postal Code"
          />

          <ControlledInput
            control={control}
            name="address"
            placeholder="Address"
            label="Address"
          />
        </Card.Content>
      </Card>

      <Card>
        <Card.Title title="Shipping options" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <Controller
            control={control}
            name="shipping"
            render={({
              field: { value, onChange },
              fieldState: { error, invalid },
            }) => (
              <View>
                <HelperText type="error" visible={invalid}>
                  {error?.message}
                </HelperText>
                <RadioButton.Group
                  value={value}
                  onValueChange={(value) => setShipping(value)}
                >
                  <RadioButton.Item label="Free" value="free" />
                  <RadioButton.Item label="Fast" value="fast" />
                  <RadioButton.Item label="Same day" value="same_day" />
                </RadioButton.Group>
              </View>
            )}
          />
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={handleSubmit(nextPage)}>
        Next
      </Button>
    </ScrollView>
  );
}
