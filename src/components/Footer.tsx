import { motion } from 'framer-motion';
import { 
  Shield, 
  Twitter, 
  Github, 
  MessageCircle, 
  Mail,
  ExternalLink,
  BookOpen,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

const links = {
  product: [
    { name: 'Token Analysis', href: '#analysis' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'API Documentation', href: '#' }
  ],
  resources: [
    { name: 'Security Guide', href: '#' },
    { name: 'Whitepaper', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Community Forum', href: '#' }
  ],
  developers: [
    { name: 'API Reference', href: '#' },
    { name: 'SDK Documentation', href: '#' },
    { name: 'GitHub Repository', href: '#' },
    { name: 'Bug Bounty', href: '#' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Audit Reports', href: '#' }
  ]
};

const socials = [
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  { name: 'Discord', icon: MessageCircle, href: '#', color: 'hover:text-purple-400' },
  { name: 'Telegram', icon: Mail, href: '#', color: 'hover:text-cyan-400' },
  { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-300' }
];

const stats = [
  { icon: Shield, value: '12,847', label: 'Tokens Analyzed' },
  { icon: Users, value: '1,847', label: 'Active Members' },
  { icon: TrendingUp, value: '342', label: 'Rugs Prevented' },
  { icon: Award, value: '$45.6K', label: 'Rewards Distributed' }
];

export default function Footer() {
  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ruguard
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Advanced AI-powered rugpull detection and community-driven security analysis 
                for the decentralized finance ecosystem.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Product */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  {links.product.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        {link.href === '#' && (
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  {links.resources.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Developers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Developers</h3>
                <ul className="space-y-3">
                  {links.developers.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  {links.legal.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Get the latest security alerts and platform updates
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Ruguard. All rights reserved. Built with ❤️ for the DeFi community.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Status: All systems operational</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Live</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}