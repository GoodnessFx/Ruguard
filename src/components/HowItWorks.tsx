import { motion } from 'motion/react';
import { 
  Search, 
  Zap, 
  Shield, 
  Users, 
  Brain,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  TrendingUp,
  Award
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Token Discovery',
    description: 'Our system automatically monitors blockchain networks for new token launches or you can manually submit tokens for analysis.',
    details: ['Mempool monitoring', 'Contract creation events', 'Community submissions', 'Exchange listings'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'AI Analysis',
    description: 'Advanced machine learning models analyze contract code, transaction patterns, and on-chain behavior in real-time.',
    details: ['Smart contract inspection', 'Pattern recognition', 'Anomaly detection', 'Risk calculation'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Security Scoring',
    description: 'Multi-layer security checks generate a comprehensive risk score and grade (A-F) with detailed evidence.',
    details: ['Liquidity analysis', 'Function inspection', 'Distribution check', 'Audit verification'],
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Users,
    title: 'Community Validation',
    description: 'Community members can stake tokens to report suspicious activity and earn rewards for accurate reporting.',
    details: ['Staking mechanism', 'Report validation', 'Dispute resolution', 'Reward distribution'],
    color: 'from-orange-500 to-red-500'
  }
];

const analysisChecks = [
  {
    category: 'Smart Contract Analysis',
    checks: [
      { name: 'Hidden mint functions', risk: 'Critical', status: 'checking' },
      { name: 'Owner privileges', risk: 'High', status: 'safe' },
      { name: 'Pausable mechanisms', risk: 'Medium', status: 'warning' },
      { name: 'Renounce ownership', risk: 'Low', status: 'safe' }
    ]
  },
  {
    category: 'Liquidity Analysis',
    checks: [
      { name: 'Liquidity lock verification', risk: 'Critical', status: 'safe' },
      { name: 'Lock duration', risk: 'High', status: 'safe' },
      { name: 'Withdrawal restrictions', risk: 'Medium', status: 'safe' },
      { name: 'LP token distribution', risk: 'Low', status: 'warning' }
    ]
  },
  {
    category: 'Token Distribution',
    checks: [
      { name: 'Holder concentration', risk: 'High', status: 'warning' },
      { name: 'Team allocation', risk: 'Medium', status: 'safe' },
      { name: 'Vesting schedule', risk: 'Medium', status: 'safe' },
      { name: 'Public allocation', risk: 'Low', status: 'safe' }
    ]
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-emerald-900/10" />
      
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
            How{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">
              Ruguard
            </span>{' '}
            Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive four-step process combines AI analysis, community intelligence, 
            and blockchain security to protect your investments
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-emerald-400 mb-1">
                      Step {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  {/* Step Number */}
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-4xl font-bold text-white shadow-2xl`}>
                    {index + 1}
                  </div>
                  
                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className={`absolute ${index % 2 === 0 ? 'right-0 translate-x-8' : 'left-0 -translate-x-8'} top-1/2 transform -translate-y-1/2 hidden lg:block`}>
                      <ArrowRight className="w-6 h-6 text-gray-600" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analysis Demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Real-Time Analysis in Action
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Watch how our system analyzes a token in real-time, performing comprehensive security checks
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {analysisChecks.map((category, categoryIdx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIdx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl border border-white/10 p-6"
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-emerald-400" />
                  {category.category}
                </h4>
                
                <div className="space-y-3">
                  {category.checks.map((check, checkIdx) => (
                    <motion.div
                      key={check.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (categoryIdx * 0.2) + (checkIdx * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5"
                    >
                      <div className="flex-1">
                        <div className="text-sm text-gray-300 mb-1">{check.name}</div>
                        <div className={`text-xs ${
                          check.risk === 'Critical' ? 'text-red-400' :
                          check.risk === 'High' ? 'text-orange-400' :
                          check.risk === 'Medium' ? 'text-yellow-400' :
                          'text-gray-400'
                        }`}>
                          {check.risk} Risk
                        </div>
                      </div>
                      
                      <div className="ml-3">
                        {check.status === 'safe' && (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                        {check.status === 'warning' && (
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        )}
                        {check.status === 'checking' && (
                          <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Grade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-emerald-600/20 to-emerald-600/20 rounded-2xl border border-white/20 p-6">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Final Grade</div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  A
                </div>
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-white mb-1">Token Analysis Complete</div>
                <div className="text-sm text-gray-400">
                  Score: 92/100 • Low Risk • Analysis time: 1.2s
                </div>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="text-xs text-green-400 flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Safe to invest
                  </span>
                  <span className="text-xs text-blue-400 flex items-center">
                    <Award className="w-3 h-3 mr-1" />
                    Verified audit
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}