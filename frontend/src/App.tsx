import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import theme from "./styles/theme";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Header isLoggedIn={false} />
        <Navigation />
        <Footer />
    </ThemeProvider>
  );
};

export default App;