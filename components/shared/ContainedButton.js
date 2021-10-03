import React from "react";
import styled from "styled-components/native";
import { colors } from "../../colors";

const ButtonWrapper = styled.TouchableOpacity`
  width: ${(props) => (props.isFullWidth ? "100%" : "auto")};
  background-color: ${colors.blue};
  border-radius: 5px;
  padding: 15px 10px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const Button = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1.5px;
  text-align: center;
`;

const ContainedButton = ({
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
    >
      <Button>{text ? text : "Button"}</Button>
    </ButtonWrapper>
  );
};

export default ContainedButton;
