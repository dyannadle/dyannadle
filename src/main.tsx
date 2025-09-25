import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PostHogProvider } from "posthog-js/react";

const options = {
  ui_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  api_host: "/relay-ddd/",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostHogProvider
      apiKey={
        import.meta.env.VITE_PUBLIC_POSTHOG_KEY ||
        "phc_dummy_key_for_development"
      }
      options={options}
    >
      <App />
    </PostHogProvider>
  </StrictMode>,
);
