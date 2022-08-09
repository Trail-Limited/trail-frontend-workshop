import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app/AppRoutes";
import "styled-components/macro";
import { BaseStyleContainer } from "./design-system";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <BaseStyleContainer>
        <AppRoutes />
      </BaseStyleContainer>
    </BrowserRouter>
  </StrictMode>
);
