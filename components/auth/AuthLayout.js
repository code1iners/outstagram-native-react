import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";
import { isIos, isWeb } from "../../utils/platform";

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Logo = styled.Image`
  width: 50%;
  height: 200px;
`;

const AuthLayout = ({ children }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard} disabled={isWeb}>
      <Container>
        <KeyboardAvoidingView
          style={{
            width: "100%",
            alignItems: "center",
          }}
          behavior={isIos ? "padding" : "padding"}
          keyboardVerticalOffset={isIos ? 30 : 0}
        >
          <Logo
            resizeMode="contain"
            source={require("../../assets/logo1.png")}
          />

          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default AuthLayout;
