import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TokenAnalysis from './components/TokenAnalysis';
import HowItWorks from './components/HowItWorks';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { Toaster } from './components/ui/sonner';
import { auth } from './utils/supabase/client';
import { apiClient } from './utils/api';
import './styles/globals.css';

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      try {
        const session = await auth.getSession();
        if (session?.user) {
          setUser(session.user);
          apiClient.setAuthToken(session.access_token);
        }
      } catch (error) {
        console.error('Session check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Listen for auth state changes
    const { data: { subscription } } = auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        apiClient.setAuthToken(session.access_token);
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAuth = (userData: any) => {
    setUser(userData);
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-white text-lg">Loading Ruguard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Header 
        onAuthOpen={() => setIsAuthOpen(true)} 
        user={user}
        onSignOut={handleSignOut}
      />
      <main>
        <Hero onGetStarted={() => setIsAuthOpen(true)} />
        <Features />
        <TokenAnalysis />
        <HowItWorks />
        <Leaderboard />
      </main>
      <Footer />
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)}
        onAuth={handleAuth}
      />
      <Toaster />
    </div>
  );
}