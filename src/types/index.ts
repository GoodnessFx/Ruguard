// User types
export interface User {
  id: string;
  email: string;
  name?: string;
  wallet_address?: string;
  reputation_score: number;
  ish_balance: number;
  created_at: string;
  updated_at: string;
}

// Token types
export interface Token {
  id: string;
  address: string;
  name: string;
  symbol: string;
  network: string;
  security_grade: SecurityGrade;
  risk_score: number;
  market_cap?: number;
  volume_24h?: number;
  price?: number;
  holders_count?: number;
  liquidity_locked?: boolean;
  contract_verified?: boolean;
  audit_status?: AuditStatus;
  created_at: string;
  updated_at: string;
}

export type SecurityGrade = 'A' | 'B' | 'C' | 'D' | 'F';
export type AuditStatus = 'audited' | 'pending' | 'unaudited' | 'failed';

// Analysis types
export interface TokenAnalysis {
  id: string;
  token_id: string;
  analysis_type: AnalysisType;
  risk_factors: RiskFactor[];
  security_metrics: SecurityMetrics;
  ml_predictions: MLPredictions;
  community_reports: CommunityReport[];
  created_at: string;
}

export type AnalysisType = 'real_time' | 'deep_scan' | 'community_driven';

export interface RiskFactor {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  confidence: number;
}

export interface SecurityMetrics {
  contract_security: number;
  liquidity_risk: number;
  ownership_concentration: number;
  trading_patterns: number;
  social_sentiment: number;
}

export interface MLPredictions {
  rugpull_probability: number;
  pump_dump_risk: number;
  honeypot_likelihood: number;
  scam_indicators: string[];
}

// Community types
export interface CommunityReport {
  id: string;
  token_id: string;
  user_id: string;
  report_type: ReportType;
  description: string;
  evidence_urls: string[];
  stake_amount: number;
  status: ReportStatus;
  votes_for: number;
  votes_against: number;
  created_at: string;
  resolved_at?: string;
}

export type ReportType = 'rugpull' | 'scam' | 'honeypot' | 'pump_dump' | 'suspicious_activity';
export type ReportStatus = 'pending' | 'under_review' | 'verified' | 'disputed' | 'resolved';

// Leaderboard types
export interface LeaderboardEntry {
  user_id: string;
  user_name: string;
  reputation_score: number;
  successful_reports: number;
  total_reports: number;
  ish_earned: number;
  rank: number;
}

// Wallet types
export interface WalletConnection {
  address: string;
  chainId: number;
  isConnected: boolean;
  connector?: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// WebSocket types
export interface WebSocketMessage {
  type: string;
  payload: any;
  timestamp: string;
}

export interface RealTimeUpdate {
  type: 'token_analysis' | 'price_update' | 'security_alert' | 'community_report';
  token_address: string;
  data: any;
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface ReportForm {
  token_address: string;
  report_type: ReportType;
  description: string;
  evidence_urls: string[];
  stake_amount: number;
}

export interface TokenSearchForm {
  query: string;
  network?: string;
  security_grade?: SecurityGrade;
  sort_by?: 'risk_score' | 'market_cap' | 'volume' | 'created_at';
  sort_order?: 'asc' | 'desc';
}

// Notification types
export interface Notification {
  id: string;
  user_id: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: any;
  read: boolean;
  created_at: string;
}

export type NotificationType = 'security_alert' | 'report_update' | 'reward_earned' | 'system_update';