import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COMPONENT_SIGN_IN, COMPONENT_SIGN_UP } from "../constants/components";
import { colors } from "../colors";

// styled start
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Logo = styled.Image`
  width: 50%;
  height: 200px;
`;

const ButtonsWrapper = styled.View`
  margin-top: 50px;
  align-items: center;
`;

// sign up start
const SignUpWrapper = styled.View`
  background-color: ${colors.blue};
  border-radius: 5px;
  padding: 5px 10px;
`;
const SignUpText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1.5px;
`;
// sign up end

// sign in start
const SignInLink = styled.Text`
  margin-top: 15px;
  color: ${colors.blue};
  font-weight: 600;
  font-size: 20px;
`;
// sign in end

// styled end

export default function Welcome({ navigation }) {
  // methods
  const navigateToSignUp = () => navigation.navigate(COMPONENT_SIGN_UP);
  const navigateToSignIn = () => navigation.navigate(COMPONENT_SIGN_IN);

  return (
    <Container>
      {/* logo */}
      <Logo resizeMode="contain" source={require("../assets/logo1.png")} />

      {/* buttons */}
      <ButtonsWrapper>
        {/* sign up */}
        <TouchableOpacity onPress={navigateToSignUp}>
          <SignUpWrapper>
            <SignUpText>Create Account</SignUpText>
          </SignUpWrapper>
        </TouchableOpacity>

        {/* sign in */}
        <TouchableOpacity onPress={navigateToSignIn}>
          <SignInLink>Sign In</SignInLink>
        </TouchableOpacity>
      </ButtonsWrapper>
    </Container>
  );
}
