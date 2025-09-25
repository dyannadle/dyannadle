import { useState, useEffect } from 'react';
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut, useSession } from 'next-auth/react';
import posthog from '@/integrations/posthog/client';

interface Profile {
  id: string;
  email: string | null;
  role: string;
}

export const useAuth = () => {
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(status === 'loading');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setLoading(status === 'loading');
    if (session?.user) {
      // Fetch or set profile here (from your DB or session)
      const userProfile: Profile = {
        id: session.user.id || '',
        email: session.user.email || null,
        role: 'user', // Replace with actual role logic
      };
      setProfile(userProfile);
      setIsAdmin(userProfile.role === 'admin');
      posthog.capture('user_logged_in', { email: userProfile.email });
    } else {
      setProfile(null);
      setIsAdmin(false);
    }
  }, [session, status]);

  const signIn = async (email: string, password: string) => {
    // NextAuth.js example
    const result = await nextAuthSignIn('credentials', { redirect: false, email, password });
    posthog.capture('user_sign_in_attempt', { email, success: !result?.error });
    return result;
  };

  const signUp = async (email: string, password: string) => {
    // Implement sign up logic with your provider
    posthog.capture('user_sign_up_attempt', { email });
    return { error: 'Not implemented' };
  };

  const signOut = async () => {
    await nextAuthSignOut();
    posthog.capture('user_signed_out');
  };

  return {
    user: session?.user || null,
    profile,
    loading,
    isAdmin,
    signIn,
    signUp,
    signOut,
  };
};