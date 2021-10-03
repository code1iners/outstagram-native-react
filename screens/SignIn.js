import React from "react";
import styled from "styled-components";
import { colors } from "../colors";
import AuthLayout from "../components/auth/AuthLayout";
import ContainedButton from "../components/shared/ContainedButton";
import { TextInput } from "../components/shared/styles";
import { COMPONENT_SIGN_UP } from "../constants/components";

const FormWrapper = styled.View`
  width: 90%;
`;

export default function SignIn({ navigation }) {
  // Handlers.
  const onDone = () => {
    // navigation.navigate(COMPONENT_SIGN_UP);
  };

  return (
    <AuthLayout>
      <FormWrapper>
        <TextInput
          placeholder="Username"
          placeholderTextColor="gray"
          returnKeyType="next"
          onSubmitEditing={() => onNext(emailRef)}
          blurOnSubmit={false}
          placeholderTextColor={colors.inputPlaceholder}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={onDone}
          placeholderTextColor={colors.inputPlaceholder}
          lastOne={true}
        />

        <ContainedButton
          text="Sign In"
          isFullWidth={true}
          disabled={false}
          onPress={onDone}
        />
      </FormWrapper>
    </AuthLayout>
  );
}
