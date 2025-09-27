import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { auth } from '../utils/supabase/client';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      try {
        const session = await auth.getSession();
        setUser((session as any)?.user ?? null);
      } catch {
        setUser(null);
      }
      setLoading(false);
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = auth.onAuthStateChange((_event: string, session: any) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const data = await auth.signIn(email, password);
      return { data, error: null } as const;
    } catch (error: any) {
      return { data: null, error } as const;
    }
  };

  const signUp = async (email: string, password: string, metadata?: any) => {
    try {
      const data = await auth.signUp(email, password, metadata);
      return { data, error: null } as const;
    } catch (error: any) {
      return { data: null, error } as const;
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      return { error: null } as const;
    } catch (error: any) {
      return { error } as const;
    }
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };
}