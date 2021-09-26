import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Welcome from "../screens/WelcomePage";
import SignIn from "../screens/SignInPage";
import SignUp from "../screens/SignUpPage";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
