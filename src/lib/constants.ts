// Network configurations
export const SUPPORTED_NETWORKS = {
  ethereum: {
    chainId: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    rpcUrl: 'https://mainnet.infura.io/v3/',
    explorerUrl: 'https://etherscan.io',
  },
  bsc: {
    chainId: 56,
    name: 'BNB Smart Chain',
    symbol: 'BNB',
    rpcUrl: 'https://bsc-dataseed.binance.org',
    explorerUrl: 'https://bscscan.com',
  },
  polygon: {
    chainId: 137,
    name: 'Polygon',
    symbol: 'MATIC',
    rpcUrl: 'https://polygon-rpc.com',
    explorerUrl: 'https://polygonscan.com',
  },
  arbitrum: {
    chainId: 42161,
    name: 'Arbitrum One',
    symbol: 'ARB',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    explorerUrl: 'https://arbiscan.io',
  },
};

// Security grade thresholds
export const SECURITY_GRADE_THRESHOLDS = {
  A: { min: 90, max: 100 },
  B: { min: 80, max: 89 },
  C: { min: 70, max: 79 },
  D: { min: 60, max: 69 },
  F: { min: 0, max: 59 },
};

// Risk factor weights
export const RISK_WEIGHTS = {
  contract_security: 0.25,
  liquidity_risk: 0.2,
  ownership_concentration: 0.15,
  trading_patterns: 0.2,
  social_sentiment: 0.1,
  community_reports: 0.1,
};

// Staking requirements
export const STAKING_REQUIREMENTS = {
  minimum_stake: 100, // ISH tokens
  report_types: {
    rugpull: 500,
    scam: 300,
    honeypot: 200,
    pump_dump: 250,
    suspicious_activity: 150,
  },
};

// API endpoints
export const API_ENDPOINTS = {
  tokens: '/api/tokens',
  analysis: '/api/analysis',
  reports: '/api/reports',
  leaderboard: '/api/leaderboard',
  user: '/api/user',
  notifications: '/api/notifications',
  websocket: '/ws',
};

// WebSocket events
export const WS_EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  SUBSCRIBE_TOKEN: 'subscribe_token',
  UNSUBSCRIBE_TOKEN: 'unsubscribe_token',
  TOKEN_UPDATE: 'token_update',
  SECURITY_ALERT: 'security_alert',
  PRICE_UPDATE: 'price_update',
  COMMUNITY_REPORT: 'community_report',
};

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'ruguard_auth_token',
  WALLET_ADDRESS: 'ruguard_wallet_address',
  USER_PREFERENCES: 'ruguard_user_preferences',
  WATCHED_TOKENS: 'ruguard_watched_tokens',
};

// Animation durations
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
};

// Pagination defaults
export const PAGINATION = {
  defaultLimit: 20,
  maxLimit: 100,
};

// Security grade colors
export const GRADE_COLORS = {
  A: 'text-emerald-500',
  B: 'text-green-500',
  C: 'text-yellow-500',
  D: 'text-orange-500',
  F: 'text-red-500',
};

// Risk level colors
export const RISK_COLORS = {
  low: 'text-emerald-500',
  medium: 'text-yellow-500',
  high: 'text-orange-500',
  critical: 'text-red-500',
};