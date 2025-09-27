import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Wallet, 
  Shield, 
  Mail, 
  User, 
  Eye, 
  EyeOff,
  ExternalLink,
  Check,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { toast } from 'sonner';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuth: (user: any) => void;
}

const wallets = [
  {
    name: 'MetaMask',
    icon: '🦊',
    description: 'Most popular web3 wallet',
    installed: true
  },
  {
    name: 'WalletConnect',
    icon: '🔗',
    description: 'Connect with mobile wallets',
    installed: true
  },
  {
    name: 'Coinbase Wallet',
    icon: '🔵',
    description: 'Coinbase\'s self-custody wallet',
    installed: false
  },
  {
    name: 'Phantom',
    icon: '👻',
    description: 'Solana & multi-chain wallet',
    installed: false
  }
];

const benefits = [
  'Access real-time token analysis',
  'Stake ISH tokens for reporting',
  'Earn rewards for accurate reports',
  'Build decentralized reputation',
  'Vote in dispute resolutions',
  'Get priority customer support'
];

export default function AuthModal({ isOpen, onClose, onAuth }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState('wallet');
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleWalletConnect = async (walletName: string) => {
    if (!wallets.find(w => w.name === walletName)?.installed) {
      toast.error('Wallet not installed');
      return;
    }

    setIsConnecting(true);
    setConnectedWallet(walletName);

    // Simulate wallet connection
    setTimeout(() => {
      const mockUser = {
        address: '0x742d35Cc6639C0532fEb2082C5b86e4E',
        name: 'Anonymous User',
        wallet: walletName,
        balance: '1,247 ISH',
        reputation: 85
      };
      
      onAuth(mockUser);
      toast.success(`Connected with ${walletName}`);
      setIsConnecting(false);
      onClose();
    }, 2000);
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.name) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsConnecting(true);
    
    // Simulate account creation
    setTimeout(() => {
      const mockUser = {
        email: formData.email,
        name: formData.name,
        balance: '0 ISH',
        reputation: 0
      };
      
      onAuth(mockUser);
      toast.success('Account created successfully');
      setIsConnecting(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-slate-900/95 backdrop-blur-xl border-white/10 text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-white">
              Join Ruguard
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-emerald-600/20 to-emerald-600/20 rounded-lg p-4 border border-white/10"
          >
            <h3 className="font-semibold text-white mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-emerald-400" />
              Member Benefits
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {benefits.slice(0, 3).map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                  <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <button 
              className="text-xs text-emerald-400 hover:text-emerald-300 mt-2 flex items-center"
              onClick={() => {/* Show more benefits */}}
            >
              View all benefits
              <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10">
              <TabsTrigger 
                value="wallet" 
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Wallet
              </TabsTrigger>
              <TabsTrigger 
                value="email" 
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </TabsTrigger>
            </TabsList>

            <TabsContent value="wallet" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="font-semibold text-white mb-2">Connect Your Wallet</h3>
                <p className="text-sm text-gray-400">
                  Connect with your existing web3 wallet to get started
                </p>
              </div>

              <div className="space-y-3">
                {wallets.map((wallet, index) => (
                  <motion.div
                    key={wallet.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className={`w-full h-auto p-4 border-white/20 text-left relative overflow-hidden group ${
                        !wallet.installed ? 'opacity-50' : 'hover:border-emerald-400/50'
                      }`}
                      onClick={() => handleWalletConnect(wallet.name)}
                      disabled={!wallet.installed || isConnecting}
                    >
                      {isConnecting && connectedWallet === wallet.name && (
                        <div className="absolute inset-0 bg-emerald-600/20 backdrop-blur-sm flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-2 border-emerald-400 border-t-transparent" />
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-3 w-full">
                        <div className="text-2xl">{wallet.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium text-white flex items-center">
                            {wallet.name}
                            {!wallet.installed && (
                              <ExternalLink className="w-3 h-3 ml-2 text-gray-400" />
                            )}
                          </div>
                          <div className="text-sm text-gray-400">{wallet.description}</div>
                        </div>
                        {wallet.installed && (
                          <Badge className="bg-green-600 text-white">Detected</Badge>
                        )}
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="text-xs text-gray-500 text-center">
                By connecting, you agree to our{' '}
                <button className="text-purple-400 hover:text-purple-300">Terms of Service</button>
                {' '}and{' '}
                <button className="text-purple-400 hover:text-purple-300">Privacy Policy</button>
              </div>
            </TabsContent>

            <TabsContent value="email" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="font-semibold text-white mb-2">Create Account</h3>
                <p className="text-sm text-gray-400">
                  Start with email and add a wallet later
                </p>
              </div>

              <form onSubmit={handleEmailSignUp} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    disabled={isConnecting}
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    disabled={isConnecting}
                  />
                </div>

                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 pr-10"
                    disabled={isConnecting}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  disabled={isConnecting}
                >
                  {isConnecting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Create Account</span>
                    </div>
                  )}
                </Button>
              </form>

              <div className="text-center">
                <button 
                  className="text-sm text-gray-400 hover:text-white"
                  onClick={() => setActiveTab('wallet')}
                >
                  Already have a wallet? Connect instead
                </button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Security Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-3"
          >
            <div className="flex items-start space-x-2">
              <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-blue-300">
                <strong>Security:</strong> We never store private keys. Your wallet remains fully under your control.
              </div>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}