import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles/theme";

describe("App Component", () => {
  it("renders Header component with Sign Up and Login buttons", () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );

    // "Sign Up" 버튼이 화면에 렌더링되는지 확인
    expect(screen.getByText("Sign Up")).toBeInTheDocument();

    // "Login" 버튼이 화면에 렌더링되는지 확인
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
