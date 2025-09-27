import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Lock, 
  Eye, 
  Brain, 
  Award,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Real-time Detection',
    description: 'Instant analysis of new token launches with immediate risk assessment and grading.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning models detect rugpull patterns and anomalous behaviors.',
    color: 'from-emerald-400 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Multi-Layer Security',
    description: 'Comprehensive checks including liquidity locks, function analysis, and distribution patterns.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Community Reputation',
    description: 'Decentralized reputation system where community members stake and validate reports.',
    color: 'from-green-400 to-teal-500'
  },
  {
    icon: BarChart3,
    title: 'Risk Visualization',
    description: 'Interactive charts and graphs showing token distribution, vesting schedules, and transaction patterns.',
    color: 'from-emerald-400 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Multi-Chain Support',
    description: 'Analysis across Ethereum, BSC, Polygon, Arbitrum and other major blockchain networks.',
    color: 'from-emerald-400 to-emerald-500'
  }
];

const analysisTypes = [
  {
    icon: Lock,
    title: 'Liquidity Lock Analysis',
    description: 'Verify liquidity lock contracts and detect withdrawal rights',
    items: ['Lock duration verification', 'Owner withdrawal detection', 'Lock contract validation']
  },
  {
    icon: Eye,
    title: 'Token Distribution',
    description: 'Analyze holder concentration and distribution patterns',
    items: ['Top holder analysis', 'Gini coefficient calculation', 'Whale detection']
  },
  {
    icon: AlertTriangle,
    title: 'Function Inspection',
    description: 'Scan smart contract functions for rug potential',
    items: ['Hidden mint functions', 'Owner privileges', 'Pausable mechanisms']
  },
  {
    icon: TrendingUp,
    title: 'Pattern Detection',
    description: 'Identify pump & dump and rugpull transaction patterns',
    items: ['Volume correlation', 'Price manipulation', 'Sudden transfers']
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent" />
      
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
            Advanced Protection{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive security analysis powered by cutting-edge technology and community intelligence
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Analysis Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Comprehensive Analysis Types
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our multi-layered approach examines every aspect of token security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analysisTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl border border-white/10 p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-600 rounded-lg p-3 flex-shrink-0">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{type.title}</h4>
                    <p className="text-gray-400 mb-4">{type.description}</p>
                    <div className="space-y-2">
                      {type.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '99.7%', label: 'Accuracy Rate', icon: Award },
            { value: '<2s', label: 'Analysis Time', icon: Zap },
            { value: '15+', label: 'Blockchains', icon: Globe },
            { value: '24/7', label: 'Monitoring', icon: Eye }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}