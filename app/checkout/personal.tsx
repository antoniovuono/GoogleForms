import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  HelperText,
} from "react-native-paper";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfoSchema,
  PersonalInfo,
} from "../../src/schema/checkout.schema";

export default function PersonalDetails() {
  const router = useRouter();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  console.log(errors);

  const nextPage = (data) => {
    console.log("Form Fields:", data);

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
          <Controller
            control={control}
            name="name"
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error, invalid },
            }) => (
              <View>
                <TextInput
                  placeholder="Name"
                  label="Name"
                  style={{ backgroundColor: theme.colors.background }}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={invalid}
                />
                <HelperText type="error" visible={invalid}>
                  {error?.message}
                </HelperText>
              </View>
            )}
          />

          <TextInput
            placeholder="hey@gmail.com"
            label="Email"
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={handleSubmit(nextPage)}>
        Next
      </Button>
    </ScrollView>
  );
}
