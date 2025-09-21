import { projectId, publicAnonKey } from './supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-ec68bbf1`;

class ApiClient {
  private baseURL: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseURL = API_BASE_URL;
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`
    };
  }

  setAuthToken(token: string) {
    this.headers['Authorization'] = `Bearer ${token}`;
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.headers,
          ...options.headers
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Token Analysis APIs
  async ingestContract(chain: string, address: string) {
    return this.request('/api/v1/ingest/contract', {
      method: 'POST',
      body: JSON.stringify({ chain, address })
    });
  }

  async analyzeToken(chain: string, contract: string) {
    return this.request(`/api/v1/analyze/${chain}/${contract}`);
  }

  async getAnalysisReport(analysisId: string) {
    return this.request(`/api/v1/analyze/${analysisId}/report`);
  }

  // Reporting APIs
  async submitReport(reportData: {
    contractId: string;
    reason: string;
    stakeTx: string;
    evidence?: any;
  }) {
    return this.request('/api/v1/report', {
      method: 'POST',
      body: JSON.stringify(reportData)
    });
  }

  async getReports(contractId?: string) {
    const endpoint = contractId 
      ? `/api/v1/reports?contractId=${contractId}`
      : '/api/v1/reports';
    return this.request(endpoint);
  }

  // Reputation APIs
  async requestReputationAttestation(data: {
    address: string;
    badgeType: string;
    proofs: any[];
  }) {
    return this.request('/api/v1/reputation/attest', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async getReputation(address: string) {
    return this.request(`/api/v1/reputation/${address}`);
  }

  // Leaderboard APIs
  async getLeaderboard() {
    return this.request('/api/v1/leaderboard');
  }

  // Webhook APIs
  async registerWebhook(url: string, events: string[]) {
    return this.request('/api/v1/webhook', {
      method: 'POST',
      body: JSON.stringify({ url, events })
    });
  }

  // Health check
  async health() {
    return this.request('/health');
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export types for better TypeScript support
export interface TokenAnalysis {
  chain: string;
  contract: string;
  grade: string;
  score: number;
  risk: string;
  analysis: {
    liquidityLock: boolean;
    auditStatus: string;
    holders: number;
    marketCap: string;
    volume24h: string;
    risks: string[];
    features: string[];
  };
  evidence: {
    contractFunctions: string[];
    liquidityAnalysis: { locked: boolean; duration: string };
    distributionCheck: { giniCoefficient: number };
  };
}

export interface UserReport {
  id: string;
  contractId: string;
  reporterId: string;
  reason: string;
  stakeTx: string;
  evidence?: any;
  status: 'pending' | 'validated' | 'disputed' | 'resolved';
  votes: number;
  timestamp: string;
}

export interface ReputationAttestation {
  id: string;
  address: string;
  badgeType: string;
  issuedBy: string;
  proofs: any[];
  timestamp: string;
  verified: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  address: string;
  name?: string;
  reports: number;
  accuracy: number;
  tokens: number;
  badge: string;
  verified: boolean;
}