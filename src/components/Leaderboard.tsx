import { motion } from 'framer-motion';
import { 
  Trophy, 
  Award, 
  TrendingUp, 
  Users, 
  Shield,
  Star,
  Crown,
  Medal,
  Zap
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar } from './ui/avatar';

const topReporters = [
  {
    rank: 1,
    address: '0x742d35Cc6639C0532fEb2082C5b86e4E',
    name: 'CryptoSleuth',
    avatar: 'CS',
    reports: 342,
    accuracy: 98.5,
    tokens: 45600,
    badge: 'Diamond',
    streak: 28,
    verified: true
  },
  {
    rank: 2,
    address: '0x8ba1f109551bD432803012645Hac189',
    name: 'TokenHunter',
    avatar: 'TH',
    reports: 287,
    accuracy: 97.2,
    tokens: 38200,
    badge: 'Platinum',
    streak: 22,
    verified: true
  },
  {
    rank: 3,
    address: '0x1f9840a85d5aF5bf1D1762F925BDADd',
    name: 'RugDetector',
    avatar: 'RD',
    reports: 234,
    accuracy: 96.8,
    tokens: 29800,
    badge: 'Gold',
    streak: 15,
    verified: true
  },
  {
    rank: 4,
    address: '0x2260fac5e5542a773aa44fbcfedf7c1',
    name: 'SafetyFirst',
    avatar: 'SF',
    reports: 198,
    accuracy: 95.4,
    tokens: 21400,
    badge: 'Gold',
    streak: 12,
    verified: false
  },
  {
    rank: 5,
    address: '0xa0b86a33e6044291bf79103ecK156ce',
    name: 'BlockGuard',
    avatar: 'BG',
    reports: 176,
    accuracy: 94.7,
    tokens: 18900,
    badge: 'Silver',
    streak: 9,
    verified: true
  }
];

const recentActivity = [
  {
    reporter: 'CryptoSleuth',
    action: 'Reported rugpull',
    token: 'FakeDoge',
    result: 'Confirmed',
    reward: '+500 ISH',
    time: '2 mins ago'
  },
  {
    reporter: 'TokenHunter',
    action: 'Disputed report',
    token: 'SafeMoon Copy',
    result: 'Won dispute',
    reward: '+1200 ISH',
    time: '15 mins ago'
  },
  {
    reporter: 'RugDetector',
    action: 'Validated analysis',
    token: 'EthMax',
    result: 'Accurate',
    reward: '+300 ISH',
    time: '1 hour ago'
  }
];

const stats = [
  { label: 'Total Staked', value: '2.4M ISH', change: '+12.5%', icon: Shield },
  { label: 'Active Reporters', value: '1,847', change: '+8.2%', icon: Users },
  { label: 'Reports This Week', value: '342', change: '+15.4%', icon: TrendingUp },
  { label: 'Avg Accuracy', value: '96.8%', change: '+2.1%', icon: Award }
];

export default function Leaderboard() {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Diamond': return 'bg-gradient-to-r from-cyan-400 to-blue-500';
      case 'Platinum': return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 'Gold': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'Silver': return 'bg-gradient-to-r from-gray-400 to-gray-600';
      default: return 'bg-gradient-to-r from-orange-400 to-red-500';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2: return <Medal className="w-5 h-5 text-gray-400" />;
      case 3: return <Award className="w-5 h-5 text-orange-400" />;
      default: return <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">{rank}</div>;
    }
  };

  return (
    <section id="leaderboard" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Community{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Top contributors who help keep the community safe through accurate reporting and validation
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <Card key={stat.label} className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardContent className="p-4 text-center">
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className="text-xs text-green-400">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Reporters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Top Reporters</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {topReporters.map((reporter, index) => (
                  <motion.div
                    key={reporter.address}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-300 hover:border-white/30 ${
                      reporter.rank <= 3 ? 'bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border-yellow-500/30' : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {getRankIcon(reporter.rank)}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${getBadgeColor(reporter.badge)}`}>
                        {reporter.avatar}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-white truncate">{reporter.name}</span>
                        {reporter.verified && (
                          <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                              <path d="M2.3 4.1L3.8 5.6 5.7 2.4" stroke="currentColor" strokeWidth="1" fill="none" />
                            </svg>
                          </div>
                        )}
                        <Badge className={`${getBadgeColor(reporter.badge)} text-white text-xs px-2 py-0`}>
                          {reporter.badge}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-400 font-mono truncate">
                        {reporter.address.slice(0, 10)}...{reporter.address.slice(-4)}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-medium text-white">{reporter.reports} reports</div>
                      <div className="text-xs text-green-400">{reporter.accuracy}% accuracy</div>
                      <div className="text-xs text-emerald-400">{reporter.tokens.toLocaleString()} ISH</div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center text-xs text-orange-400">
                        <Zap className="w-3 h-3 mr-1" />
                        {reporter.streak}
                      </div>
                    </div>
                  </motion.div>
                ))}

                <div className="text-center pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 cursor-pointer"
                  >
                    <span className="text-sm">View Full Leaderboard</span>
                    <TrendingUp className="w-4 h-4" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity & Rewards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Recent Activity */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-lg p-3 border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate">
                          {activity.reporter}
                        </div>
                        <div className="text-xs text-gray-400">
                          {activity.action}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-300">
                        Token: {activity.token}
                      </div>
                      <div className="text-xs text-green-400 font-medium">
                        {activity.reward}
                      </div>
                    </div>
                    
                    <div className="mt-1">
                      <Badge className={`text-xs px-2 py-0 ${
                        activity.result.includes('Confirmed') || activity.result.includes('Won') || activity.result.includes('Accurate')
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-600 text-white'
                      }`}>
                        {activity.result}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Reward System */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-semibold text-white">Rewards</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-300">
                  Earn ISH tokens by participating in the community:
                </div>
                
                <div className="space-y-3">
                  {[
                    { action: 'Report rugpull (verified)', reward: '500-2000 ISH', color: 'text-green-400' },
                    { action: 'Win dispute resolution', reward: '1000-5000 ISH', color: 'text-blue-400' },
                    { action: 'Validate analysis', reward: '100-500 ISH', color: 'text-emerald-400' },
                    { action: 'Maintain accuracy streak', reward: '50-200 ISH', color: 'text-orange-400' }
                  ].map((reward, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.0 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-gray-300">{reward.action}</span>
                      <span className={`font-medium ${reward.color}`}>{reward.reward}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs text-gray-400 mb-2">
                    Current ISH Price: $0.0024 (+5.2%)
                  </div>
                  <div className="text-xs text-gray-400">
                    Total Rewards Distributed: $45.6K
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}