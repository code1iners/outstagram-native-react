import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import {
  COMPONENT_SIGN_IN,
  COMPONENT_SIGN_UP,
  COMPONENT_WELCOME,
} from "../constants/components";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={COMPONENT_WELCOME}
        options={{
          headerShown: false,
        }}
        component={Welcome}
      />
      <Stack.Screen name={COMPONENT_SIGN_IN} component={SignIn} />
      <Stack.Screen name={COMPONENT_SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  );
}
