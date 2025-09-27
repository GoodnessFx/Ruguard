import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, Wallet } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  onAuthOpen: () => void;
  user: any;
  onSignOut?: () => void;
}

export default function Header({ onAuthOpen, user, onSignOut }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="h-8 w-8 text-emerald-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">
              Ruguard
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('analysis')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Analysis
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('leaderboard')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Leaderboard
            </button>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-white">
                    {user.name?.[0] || 'U'}
                  </span>
                </div>
                <span className="text-gray-300">{user.name || 'User'}</span>
              </div>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="text-gray-300 hover:text-white"
                  onClick={onAuthOpen}
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700"
                  onClick={onAuthOpen}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/40 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('analysis')}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              Analysis
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('leaderboard')}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              Leaderboard
            </button>
            <div className="pt-4 border-t border-white/10">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">
                      {user.name?.[0] || 'U'}
                    </span>
                  </div>
                  <span className="text-gray-300">{user.name || 'User'}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <Button 
                    variant="ghost" 
                    className="w-full text-gray-300 hover:text-white"
                    onClick={onAuthOpen}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700"
                    onClick={onAuthOpen}
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}