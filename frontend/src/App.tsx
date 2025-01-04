import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import theme from "./styles/theme";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import SearchTab from "./components/SearchTab/SearchTab";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Header isLoggedIn={false} />
        <SearchTab />
        <Footer />
    </ThemeProvider>
  );
};

export default App;