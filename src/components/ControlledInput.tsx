import { Controller, Control } from "react-hook-form";
import { View } from "react-native";
import { TextInput, HelperText, useTheme } from "react-native-paper";

type ControlledInputProps = {
  control: Control;
  name: string;
} & React.ComponentProps<typeof TextInput>;

export default function ControlledInput({
  control,
  name,
  ...TextInputProps
}: ControlledInputProps) {
  const theme = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error, invalid },
      }) => (
        <View>
          <TextInput
            {...TextInputProps}
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
  );
}
