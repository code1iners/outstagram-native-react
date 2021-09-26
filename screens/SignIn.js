import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COMPONENT_SIGN_UP } from "../constants/components";

export default function SignIn({ navigation }) {
  const onPressSignUp = () => {
    navigation.navigate(COMPONENT_SIGN_UP);
  };

  return (
    <View>
      <Text>Sign in</Text>
      <TouchableOpacity onPress={onPressSignUp}>
        <View>
          <Text>Go to Sign up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
