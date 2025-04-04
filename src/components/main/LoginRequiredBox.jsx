import styled from "styled-components";
import Logo from "@assets/icons/Logo.svg";
const LoginRequiredBox = () => {
  return (
    <Wrapper>
      <Contents>
        <img src={Logo} alt="로고" />
        <LoginRequiredText>
          로그인이 필요한 서비스에요.
        </LoginRequiredText>
      </Contents>
    </Wrapper>
  );
};

export default LoginRequiredBox;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 188px; /* 자동 높이 조정 */

  border-radius: 25px;
  background-color: #ffecec;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  box-sizing: border-box;
  gap: 40px;
  margin-top: 7px;
  @media screen and (max-height: 700px) {
    gap: 5px;
  }
  img {
    width: 46.5px;
    height: auto;
  }
`;

const LoginRequiredText = styled.p`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};
`;
