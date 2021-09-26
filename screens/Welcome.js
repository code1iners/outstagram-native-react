import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COMPONENT_SIGN_IN, COMPONENT_SIGN_UP } from "../constants/components";

export default function Welcome({ navigation }) {
  const onPressSignUp = () => {
    navigation.navigate(COMPONENT_SIGN_UP);
  };
  const onPressSignIn = () => {
    navigation.navigate(COMPONENT_SIGN_IN);
  };

  return (
    <View>
      {/* welcome */}
      <Text>Welcome</Text>
      <TouchableOpacity onPress={onPressSignUp}>
        <View>
          <Text>Go to Sign up</Text>
        </View>
      </TouchableOpacity>

      {/* sign in */}
      <TouchableOpacity onPress={onPressSignIn}>
        <View>
          <Text>Go to Sign in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
