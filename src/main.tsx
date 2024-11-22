import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing.tsx";
import { Provider } from "react-redux";
import store from "./Store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </StrictMode>
);
