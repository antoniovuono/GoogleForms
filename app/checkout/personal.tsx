import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Card, useTheme } from "react-native-paper";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfoSchema,
  PersonalInfo,
} from "../../src/schema/checkout.schema";

import ControlledInput from "../../src/components/ControlledInput";
import { useCheckoutContext } from "../../src/contexts/CheckoutContenxt";

export default function PersonalDetails() {
  const router = useRouter();

  const { setPersonal } = useCheckoutContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const nextPage = (data: PersonalInfo) => {
    setPersonal(data);

    router.push("/checkout/delivery");
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
        <Card.Title title="Personal Information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="name"
            placeholder="Name"
            label="Name"
          />

          <ControlledInput
            control={control}
            name="email"
            placeholder="hey@gmail.com"
            label="Email"
            autoCapitalize="none"
          />
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={handleSubmit(nextPage)}>
        Next
      </Button>
    </ScrollView>
  );
}
