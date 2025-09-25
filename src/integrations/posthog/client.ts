import posthog from 'posthog-js';

const posthogClient = posthog.init('YOUR_POSTHOG_API_KEY', {
  api_host: 'https://app.posthog.com',
});

export const trackEvent = (event: string, properties?: Record<string, any>) => {
  posthog.capture(event, properties);
};

export const identifyUser = (userId: string, properties?: Record<string, any>) => {
  posthog.identify(userId, properties);
};

export const reset = () => {
  posthog.reset();
};

export default posthogClient;