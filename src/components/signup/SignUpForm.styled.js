import styled from "styled-components";

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.fall}; */
  position: fixed;

  /* top: 50%; */
  /* left: 50%; */

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;

export const Text = styled.section`
  color: #2A2A2A;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; 
`;

export const Wrapper = styled.section`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Container = styled.section`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 33px;

  span {
    display: flex;
    height: 13px;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;

    color: #FF6969;
    font-family: SUIT;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 22.4px */
  };
`;

export const InputField = styled.input`
  display: flex;
  height: 51px;
  padding: 0px 13.5px;
  align-items: center;
  width: 100%;

  border-radius: 20px;
  border: 1px solid #E7E8EB;
  background: #FFF;

  ::placeholder {
    display: flex;
    color: #DCDCDC;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }
`;
