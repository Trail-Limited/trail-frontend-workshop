import ReactDOM from "react-dom/client";
import App from "./app/App";
import { StrictMode } from "react";
import { tdsBaseStyles } from "./design-system";
import { GlobalStyles } from "twin.macro";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalStyles />
    <div css={tdsBaseStyles}>
      <App />
    </div>
  </StrictMode>
);
