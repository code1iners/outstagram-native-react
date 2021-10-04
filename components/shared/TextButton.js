import React from "react";
import styled from "styled-components/native";
import { colors } from "../../colors";

const ButtonWrapper = styled.TouchableOpacity`
  width: ${(props) => (props.isFullWidth ? "100%" : "auto")};
  border-radius: 5px;
  padding: 15px 10px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const Button = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1.5px;
  text-align: center;
`;

const TextButton = ({
  text,
  disabled = false,
  isFullWidth = false,
  onPress,
}) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      onPress={onPress}
      isFullWidth={isFullWidth}
      loading={false}
    >
      <Button>{text}</Button>
    </ButtonWrapper>
  );
};

export default TextButton;
