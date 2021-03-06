import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.15);
  padding: 15px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  color: white;
  margin-bottom: ${(props) => (props.lastOne ? 15 : 8)}px;
`;
