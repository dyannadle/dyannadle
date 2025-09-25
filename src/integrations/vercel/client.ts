import { createClient } from '@vercel/client';

const vercelClient = createClient({
  projectId: process.env.VERCEL_PROJECT_ID,
  token: process.env.VERCEL_TOKEN,
});

export default vercelClient;