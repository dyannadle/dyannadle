import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PostHogProvider } from "posthog-js/react";

const options = {
  api_host: 'https://us.i.posthog.com',
  ui_host: 'https://us.posthog.com',
  loaded: (posthog: any) => {
    if (import.meta.env.DEV) posthog.debug();
  }
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY || 'phc_dummy_key_for_development'}
      options={options}
    >
      <App />
    </PostHogProvider>
  </StrictMode>,
);
