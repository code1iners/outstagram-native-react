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

export default function SignUp() {
  // Hooks.
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("firstName", {
      required: true,
    });
    register("lastName", {
      required: true,
    });
    register("username", {
      required: true,
    });
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);

  // Refs.
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Handlers.
  const onNext = (nextRef) => nextRef?.current?.focus();
  const onValid = ({ firstName, lastName, username, email, password }) => {
    console.log(firstName, lastName, username, email, password);
  };

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
          onChangeText={(text) => setValue("firstName", text)}
        />
        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          onSubmitEditing={() => onNext(usernameRef)}
          blurOnSubmit={false}
          placeholderTextColor={colors.inputPlaceholder}
          onChangeText={(text) => setValue("lastName", text)}
        />
        <TextInput
          ref={usernameRef}
          placeholder="Username"
          placeholderTextColor="gray"
          returnKeyType="next"
          onSubmitEditing={() => onNext(emailRef)}
          blurOnSubmit={false}
          placeholderTextColor={colors.inputPlaceholder}
          autoCapitalize="none"
          onChangeText={(text) => setValue("username", text)}
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
          autoCapitalize="none"
          onChangeText={(text) => setValue("email", text)}
        />
        <TextInput
          ref={passwordRef}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleSubmit(onValid)}
          placeholderTextColor={colors.inputPlaceholder}
          lastOne={true}
          onChangeText={(text) => setValue("password", text)}
        />

        <ContainedButton
          text="Create Account"
          isFullWidth={true}
          disabled={false}
          onPress={handleSubmit(onValid)}
          loading={true}
        />
      </FormWrapper>
    </AuthLayout>
  );
}
