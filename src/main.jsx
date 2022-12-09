import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { store } from "./redux/store";
import { tokens } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={tokens}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>
);
