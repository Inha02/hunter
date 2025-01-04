import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import theme from "../../styles/theme";

describe("Header Component", () => {
  // 테스트 1: 로그아웃 상태에서 Header가 올바르게 렌더링되는지 확인
  it("renders Header correctly for logged-out state", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header isLoggedIn={false} />
      </ThemeProvider>
    );

    // Sign Up 버튼이 화면에 표시되는지 확인
    expect(screen.getByText("Sign Up")).toBeInTheDocument();

    // Login 버튼이 화면에 표시되는지 확인
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  // 테스트 2: 로그인 상태에서 Header가 올바르게 렌더링되는지 확인
  it("renders Header correctly for logged-in state", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header isLoggedIn={true} username="김철수" />
      </ThemeProvider>
    );

    // 사용자 이름이 화면에 표시되는지 확인
    expect(screen.getByText("김철수 님")).toBeInTheDocument();

    // Log Out 버튼이 화면에 표시되는지 확인
    expect(screen.getByText("Log Out")).toBeInTheDocument();
  });
});
