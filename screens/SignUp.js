import React, { useRef } from "react";
import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import AuthLayout from "../components/auth/AuthLayout";
import ContainedButton from "../components/shared/ContainedButton";
import { TextInput } from "../components/shared/styles";
import { isIos } from "../utils/platform";

const FormWrapper = styled.View`
  width: 90%;
`;

export default function SignUp() {
  // Refs.
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  // Handlers.
  const onNext = (nextRef) => nextRef?.current?.focus();
  const onDone = () => {
    alert("hello");
  };
  const createNewAccount = () => {};

  return (
    <AuthLayout>
      {/* form */}
      <FormWrapper>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          onSubmitEditing={() => onNext(lastNameRef)}
          blurOnSubmit={false}
          placeholderTextColor={colors.inputPlaceholder}
        />
        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          onSubmitEditing={() => onNext(usernameRef)}
          blurOnSubmit={false}
          placeholderTextColor={colors.inputPlaceholder}
        />
        <TextInput
          ref={usernameRef}
          placeholder="Username"
          placeholderTextColor="gray"
          returnKeyType="next"
          onSubmitEditing={() => onNext(emailRef)}
          blurOnSubmit={false}
          placeholderTextColor={colors.inputPlaceholder}
        />
        <TextInput
          ref={emailRef}
          placeholder="Email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => onNext(passwordRef)}
          blurOnSubmit={false}
          placeholderTextColor={colors.inputPlaceholder}
        />
        <TextInput
          ref={passwordRef}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={onDone}
          placeholderTextColor={colors.inputPlaceholder}
          lastOne={true}
        />

        <ContainedButton
          text="Create Account"
          isFullWidth={true}
          disabled={false}
          onPress={createNewAccount}
        />
      </FormWrapper>
    </AuthLayout>
  );
}
