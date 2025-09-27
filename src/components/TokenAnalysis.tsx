import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  Lock,
  Filter,
  RefreshCw
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import TokenCard from './TokenCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

const mockTokens = [
  {
    id: 1,
    name: 'SafeMoon V2',
    symbol: 'SFM',
    address: '0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5',
    grade: 'A',
    score: 92,
    risk: 'Low',
    chain: 'BSC',
    liquidityLock: true,
    auditStatus: 'Verified',
    holders: 247892,
    marketCap: '$45.2M',
    volume24h: '$2.1M',
    analysisTime: '2 mins ago',
    risks: ['Low liquidity concentration'],
    features: ['Liquidity locked for 2 years', 'Renounced ownership', 'Audit completed']
  },
  {
    id: 2,
    name: 'DogeCoin Copy',
    symbol: 'DOGC',
    address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    grade: 'F',
    score: 12,
    risk: 'Critical',
    chain: 'ETH',
    liquidityLock: false,
    auditStatus: 'Failed',
    holders: 45,
    marketCap: '$180K',
    volume24h: '$12K',
    analysisTime: '5 mins ago',
    risks: ['Unlimited mint function', 'No liquidity lock', 'Suspicious transactions', 'Copy contract'],
    features: []
  },
  {
    id: 3,
    name: 'EthereumMax',
    symbol: 'EMAX',
    address: '0x15874d65e649880c2614e7a480cb7c9A55787FF6',
    grade: 'C',
    score: 68,
    risk: 'Medium',
    chain: 'ETH',
    liquidityLock: true,
    auditStatus: 'Pending',
    holders: 12847,
    marketCap: '$8.7M',
    volume24h: '$450K',
    analysisTime: '12 mins ago',
    risks: ['High holder concentration', 'Recent large transfers'],
    features: ['Partial liquidity lock', 'Active development']
  },
  {
    id: 4,
    name: 'MetaToken',
    symbol: 'META',
    address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    grade: 'B',
    score: 84,
    risk: 'Low',
    chain: 'POLYGON',
    liquidityLock: true,
    auditStatus: 'Verified',
    holders: 85629,
    marketCap: '$23.1M',
    volume24h: '$890K',
    analysisTime: '18 mins ago',
    risks: ['Moderate volatility'],
    features: ['Multi-sig wallet', 'Transparent tokenomics', 'Regular audits']
  }
];

export default function TokenAnalysis() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChain, setSelectedChain] = useState('all');
  const [selectedRisk, setSelectedRisk] = useState('all');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  const filteredTokens = mockTokens.filter(token => {
    const matchesSearch = token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         token.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         token.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesChain = selectedChain === 'all' || token.chain.toLowerCase() === selectedChain.toLowerCase();
    const matchesRisk = selectedRisk === 'all' || token.risk.toLowerCase() === selectedRisk.toLowerCase();
    
    return matchesSearch && matchesChain && matchesRisk;
  });

  return (
    <section id="analysis" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Token{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">
              Analysis
            </span>{' '}
            Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time security analysis and risk assessment for cryptocurrency tokens across all major blockchains
          </p>
        </motion.div>

        {/* Analysis Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Enter token name, symbol, or contract address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </div>
            
            {/* Analyze Button */}
            <Button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700 whitespace-nowrap"
            >
              {isAnalyzing ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Search className="w-4 h-4 mr-2" />
              )}
              {isAnalyzing ? 'Analyzing...' : 'Analyze Token'}
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Filters:</span>
            </div>
            
            <Select value={selectedChain} onValueChange={setSelectedChain}>
              <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Chain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Chains</SelectItem>
                <SelectItem value="eth">Ethereum</SelectItem>
                <SelectItem value="bsc">BSC</SelectItem>
                <SelectItem value="polygon">Polygon</SelectItem>
                <SelectItem value="arbitrum">Arbitrum</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedRisk} onValueChange={setSelectedRisk}>
              <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Risk" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Analysis Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">
              Recent Analysis ({filteredTokens.length})
            </h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Auto-refresh: 30s</span>
              </div>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Token Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTokens.map((token, index) => (
              <TokenCard key={token.id} token={token} delay={index * 0.1} />
            ))}
          </div>

          {filteredTokens.length === 0 && (
            <div className="text-center py-12">
              <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-300 mb-2">No tokens found</h4>
              <p className="text-gray-400">Try adjusting your search filters or analyze a new token</p>
            </div>
          )}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: TrendingUp, label: 'Total Analyzed', value: '12,847', color: 'text-green-400' },
            { icon: AlertTriangle, label: 'High Risk Found', value: '1,247', color: 'text-red-400' },
            { icon: CheckCircle, label: 'Safe Tokens', value: '8,962', color: 'text-green-400' },
            { icon: Users, label: 'Community Reports', value: '4,521', color: 'text-blue-400' }
          ].map((stat, index) => (
            <div key={stat.label} className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4 text-center">
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}