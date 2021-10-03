import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/native";
import { colors } from "../colors";
import AuthLayout from "../components/auth/AuthLayout";
import ContainedButton from "../components/shared/ContainedButton";
import { TextInput } from "../components/shared/styles";

const FormWrapper = styled.View`
  width: 90%;
`;

export default function SignIn({ navigation }) {
  // Hooks.
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    // Regist react hook form when Mounted.
    register("username");
    register("password");
  }, [register]);

  // Refs.
  const passwordRef = useRef();

  // Handlers.
  const onNext = (nextRef) => nextRef?.current?.focus();
  const onValid = ({ username, password }) => {
    console.log(username, password);
  };

  return (
    <AuthLayout>
      <FormWrapper>
        <TextInput
          placeholder="Username"
          placeholderTextColor="gray"
          returnKeyType="next"
          onSubmitEditing={() => onNext(passwordRef)}
          blurOnSubmit={false}
          placeholderTextColor={colors.inputPlaceholder}
          onChangeText={(text) => setValue("username", text)}
          // autoCapitalize={false}
          autoCapitalize="none"
        />

        <TextInput
          ref={passwordRef}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleSubmit(onValid)}
          placeholderTextColor={colors.inputPlaceholder}
          onChangeText={(text) => setValue("password", text)}
          lastOne={true}
        />

        <ContainedButton
          text="Sign In"
          isFullWidth={true}
          disabled={false}
          onPress={handleSubmit(onValid)}
        />
      </FormWrapper>
    </AuthLayout>
  );
}
