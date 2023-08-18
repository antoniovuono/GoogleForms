import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, ScrollView, View } from "react-native";
import { Button, Card, useTheme, Checkbox } from "react-native-paper";
import {
  PaymentInfo,
  PaymentInfoSchema,
} from "../../src/schema/payment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledInput from "../../src/components/ControlledInput";
import { useCheckoutContext } from "../../src/contexts/CheckoutContenxt";

export default function PaymentDetails() {
  const router = useRouter();
  const theme = useTheme();
  const { setPayment, onSubmitAll } = useCheckoutContext();

  const { control, handleSubmit } = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
  });

  const nextPage = async (data: PaymentInfo) => {
    //Submit:
    setPayment(data);
    const success = await onSubmitAll(data);

    if (success) {
      //Todo: Why is not navigating home
      router.push("/");
    } else {
      Alert.alert("Failed to submit the form");
    }
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
        <Card.Title title="Payment details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="number"
            label="Card number"
            placeholder="4242 4242 4242 4242"
          />
          <View style={{ flexDirection: "row", gap: 15 }}>
            <ControlledInput
              control={control}
              name="expirationDate"
              label="Expiration date"
              placeholder="mm/yyyy"
            />
            <ControlledInput
              control={control}
              name="securityCode"
              label="Security code"
            />
          </View>

          <Controller
            control={control}
            name="saveInformation"
            render={({ field: { value, onChange } }) => (
              <Checkbox.Item
                label="Save payment information"
                status={value ? "checked" : "unchecked"}
                onPress={() => onChange(!value)}
              />
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
