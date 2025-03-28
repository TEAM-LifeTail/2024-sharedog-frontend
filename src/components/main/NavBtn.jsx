import styled from 'styled-components';
import { useCustomNavigate } from '@hooks/useCustomNavigate';
const NavBtn = ({ icon, text, $paddingLeft, to }) => {
  const { goTo } = useCustomNavigate(); // ✅ 커스텀 navigate 훅 사용
  const handleClick = () => {
    if (to) goTo(to); // to가 있으면 navigate
  };
  return (
    <InfoNavBtn onClick={handleClick}>
      <NavCircle $paddingLeft={$paddingLeft}>
        <img
          src={icon}
          alt={text}
          style={{ width: '17px', height: '17px' }}
        />
      </NavCircle>
      <NavText>{text}</NavText>
    </InfoNavBtn>
  );
};

export default NavBtn;

const InfoNavBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 11.583px;
  border: 0.5px solid #dadada;
  background: #f9f9fb;
  box-shadow: 0px 3.861px 3.861px 3.861px rgba(0, 0, 0, 0.02);
`;

const NavCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background-color: #fff;
  /* 아이콘 가운데정렬안돼서 두번째 아이콘만 동적으로 패딩 적용 */
  ${({ $paddingLeft }) =>
    $paddingLeft && `padding-left: ${$paddingLeft};`}
`;

const NavText = styled.div`
  display: flex;
  font-size: 0.875rem;
  color: #373737;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold['font-family']};
`;
