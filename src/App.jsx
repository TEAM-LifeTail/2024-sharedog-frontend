import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import GlobalStyle from "@styles/global";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";

import { KakaoAuthProvider } from "@hooks/useKakaoAuth";
import { SignupProvider } from "./context/SignupContext";

function App() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh(); // 초기값 설정
    window.addEventListener("resize", setVh); // 창 크기 변경 시 재계산

    return () => window.removeEventListener("resize", setVh); // 이벤트 해제
  }, []);

  return (
    <KakaoAuthProvider>
      <SignupProvider> {/* ✅ 회원가입 데이터 유지 */}
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </SignupProvider>
    </KakaoAuthProvider>
  );
}

export default App;
