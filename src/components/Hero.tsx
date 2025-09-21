import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, TrendingUp, AlertTriangle, CheckCircle, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import TokenHealthGauge from './TokenHealthGauge';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const [tokenAddress, setTokenAddress] = useState('');
  const [stats, setStats] = useState({
    tokensAnalyzed: 12847,
    rugsPrevented: 342,
    communityRewards: 45.6
  });

  // Animate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        tokensAnalyzed: prev.tokensAnalyzed + Math.floor(Math.random() * 5),
        rugsPrevented: prev.rugsPrevented + (Math.random() > 0.95 ? 1 : 0),
        communityRewards: prev.communityRewards + Math.random() * 0.1
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-600/20 text-emerald-300 px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Real-time Rugpull Detection</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Protect your{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">
                  capital
                </span>
                {' '}— spot rugpulls in real time
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl">
                Advanced AI-powered analysis, community-driven reputation system, and real-time alerts 
                to keep you safe from token scams and rugpulls across all major blockchains.
              </p>
            </motion.div>

            {/* Token Analysis Input */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter token contract address (0x...)"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700 whitespace-nowrap"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Analyze Token
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Get instant security grade (A-F) with detailed risk analysis
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {stats.tokensAnalyzed.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">Tokens Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {stats.rugsPrevented}
                </div>
                <div className="text-sm text-gray-400">Rugs Prevented</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">
                  ${stats.communityRewards.toFixed(1)}K
                </div>
                <div className="text-sm text-gray-400">Community Rewards</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700"
                onClick={onGetStarted}
              >
                Connect Wallet & Start
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                View Demo Analysis
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Token Health Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <TokenHealthGauge />
          </motion.div>
        </div>

        {/* Recent Analysis Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
            Recent Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'SafeMoon V2', grade: 'A', risk: 'Low', status: 'safe' },
              { name: 'DogeCoin Copy', grade: 'F', risk: 'Critical', status: 'danger' },
              { name: 'EthereumMax', grade: 'C', risk: 'Medium', status: 'warning' }
            ].map((token, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white truncate">{token.name}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    token.grade === 'A' ? 'bg-green-600 text-white' :
                    token.grade === 'C' ? 'bg-yellow-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {token.grade}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{token.risk} Risk</span>
                  {token.status === 'safe' ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}