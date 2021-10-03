import React from "react";
import styled from "styled-components/native";
import { COMPONENT_SIGN_IN, COMPONENT_SIGN_UP } from "../constants/components";
import { colors } from "../colors";
import AuthLayout from "../components/auth/AuthLayout";
import ContainedButton from "../components/shared/ContainedButton";
import TextButton from "../components/shared/TextButton";

// styled start

const SignUpButton = styled.View`
  width: 90%;
  margin-top: 50px;
  align-items: center;
`;

const SIgnInButton = styled.View`
  width: 90%;
  margin-top: 10px;
`;

// styled end

export default function Welcome({ navigation }) {
  // methods
  const navigateToSignUp = () => navigation.navigate(COMPONENT_SIGN_UP);
  const navigateToSignIn = () => navigation.navigate(COMPONENT_SIGN_IN);

  return (
    <AuthLayout>
      {/* Sign up */}
      <SignUpButton>
        <ContainedButton
          text="Create Account"
          onPress={navigateToSignUp}
          isFullWidth={true}
        />
      </SignUpButton>

      {/* Sign in */}
      <SIgnInButton>
        <TextButton text="Sign In" onPress={navigateToSignIn} />
      </SIgnInButton>
    </AuthLayout>
  );
}
