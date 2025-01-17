import { styled } from "styled-components";

export const commonButton = styled.section`
  display: flex;
  width: 332px;
  height: 52px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
  margin-bottom: 42px;
  position: fixed;
  bottom: 0%;
  background-color: ${(props) => props.bgColor || "#FF6969"};
  cursor: pointer;
  border-radius: 1550px;
`;

export const buttonText = styled.p`
  color: #FFF;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  width: fit-content
`;