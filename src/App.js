import React from "react";
import RoutePages from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./components/globalStyle/index";
import ColorProvider from "./components/globalStyle/themeProvider";
import AppProvider from "./provider/provider";
import { Provider } from "react-redux";
import { store } from "./store/store";
import UserContext from "./context/context";
import NavBar from "./components/NavBar/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <ColorProvider />
      <BrowserRouter>
        <Provider store={store}>
          <AppProvider store={UserContext}>
            <NavBar />
            <RoutePages />
          </AppProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
