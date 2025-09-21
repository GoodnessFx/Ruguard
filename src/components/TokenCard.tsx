import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Lock, 
  Eye,
  TrendingUp,
  Copy,
  MoreVertical
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { toast } from 'sonner';

interface Token {
  id: number;
  name: string;
  symbol: string;
  address: string;
  grade: string;
  score: number;
  risk: string;
  chain: string;
  liquidityLock: boolean;
  auditStatus: string;
  holders: number;
  marketCap: string;
  volume24h: string;
  analysisTime: string;
  risks: string[];
  features: string[];
}

interface TokenCardProps {
  token: Token;
  delay?: number;
}

export default function TokenCard({ token, delay = 0 }: TokenCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'bg-green-600 text-white border-green-500';
      case 'B': return 'bg-blue-600 text-white border-blue-500';
      case 'C': return 'bg-yellow-600 text-white border-yellow-500';
      case 'D': return 'bg-orange-600 text-white border-orange-500';
      case 'F': return 'bg-red-600 text-white border-red-500';
      default: return 'bg-gray-600 text-white border-gray-500';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getChainColor = (chain: string) => {
    switch (chain.toUpperCase()) {
      case 'ETH': return 'bg-blue-600';
      case 'BSC': return 'bg-yellow-600';
      case 'POLYGON': return 'bg-purple-600';
      case 'ARBITRUM': return 'bg-blue-500';
      default: return 'bg-gray-600';
    }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(token.address);
    toast.success('Address copied to clipboard');
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3 mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${getGradeColor(token.grade)}`}>
                    {token.grade}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white truncate">{token.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">{token.symbol}</span>
                      <Badge className={`${getChainColor(token.chain)} text-white text-xs px-2 py-0`}>
                        {token.chain}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className={`text-sm font-medium ${getRiskColor(token.risk)}`}>
                  {token.risk} Risk • Score: {token.score}%
                </div>
                <div className="text-xs text-gray-500">{token.analysisTime}</div>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={copyAddress}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Address
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Explorer
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Eye className="w-4 h-4 mr-2" />
                  Full Report
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs text-gray-400 mb-1">Market Cap</div>
              <div className="text-sm font-medium text-white">{token.marketCap}</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">24h Volume</div>
              <div className="text-sm font-medium text-white">{token.volume24h}</div>
            </div>
          </div>

          {/* Security Indicators */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Lock className={`w-4 h-4 ${token.liquidityLock ? 'text-green-400' : 'text-red-400'}`} />
                <span className="text-sm text-gray-300">Liquidity Lock</span>
              </div>
              <span className={`text-xs ${token.liquidityLock ? 'text-green-400' : 'text-red-400'}`}>
                {token.liquidityLock ? 'Secured' : 'Not Locked'}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className={`w-4 h-4 ${
                  token.auditStatus === 'Verified' ? 'text-green-400' : 
                  token.auditStatus === 'Pending' ? 'text-yellow-400' : 'text-red-400'
                }`} />
                <span className="text-sm text-gray-300">Audit Status</span>
              </div>
              <span className={`text-xs ${
                token.auditStatus === 'Verified' ? 'text-green-400' : 
                token.auditStatus === 'Pending' ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {token.auditStatus}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Holders</span>
              </div>
              <span className="text-xs text-blue-400">
                {formatNumber(token.holders)}
              </span>
            </div>
          </div>

          {/* Risk Factors */}
          {token.risks.length > 0 && (
            <div className="mb-4">
              <div className="text-xs text-gray-400 mb-2">Risk Factors:</div>
              <div className="space-y-1">
                {token.risks.slice(0, isExpanded ? token.risks.length : 2).map((risk, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <AlertTriangle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-red-300">{risk}</span>
                  </div>
                ))}
              </div>
              {token.risks.length > 2 && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs text-gray-400 hover:text-white p-0 h-auto mt-1"
                >
                  {isExpanded ? 'Show Less' : `Show ${token.risks.length - 2} More`}
                </Button>
              )}
            </div>
          )}

          {/* Features */}
          {token.features.length > 0 && (
            <div className="mb-4">
              <div className="text-xs text-gray-400 mb-2">Security Features:</div>
              <div className="space-y-1">
                {token.features.slice(0, isExpanded ? token.features.length : 2).map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-green-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contract Address */}
          <div className="bg-white/5 rounded-lg p-3 mb-4">
            <div className="text-xs text-gray-400 mb-1">Contract Address</div>
            <div className="flex items-center justify-between">
              <code className="text-xs text-gray-300 font-mono truncate flex-1">
                {`${token.address.slice(0, 6)}...${token.address.slice(-4)}`}
              </code>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={copyAddress}
                className="text-gray-400 hover:text-white p-1 h-auto ml-2"
              >
                <Copy className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              <Eye className="w-4 h-4 mr-2" />
              Full Report
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Watch Token
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}