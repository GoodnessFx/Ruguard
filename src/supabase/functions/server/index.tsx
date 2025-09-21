import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// CORS and logging middleware
app.use('*', cors({
  origin: '*',
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.use('*', logger(console.log));

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') || '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
);

// Token Analysis API
app.post('/make-server-ec68bbf1/api/v1/ingest/contract', async (c) => {
  try {
    const { chain, address } = await c.req.json();
    
    if (!chain || !address) {
      return c.json({ error: 'Chain and address are required' }, 400);
    }

    // Store analysis request
    const contractId = `${chain}:${address}`;
    const analysisData = {
      id: contractId,
      chain,
      address,
      status: 'analyzing',
      timestamp: new Date().toISOString()
    };

    await kv.set(`analysis:${contractId}`, analysisData);

    // Trigger analysis (in real implementation, this would be a queue/webhook)
    console.log(`Starting analysis for ${contractId}`);

    return c.json({ 
      success: true, 
      contractId,
      message: 'Analysis started',
      estimatedTime: '2-5 minutes'
    });
  } catch (error) {
    console.log(`Contract ingestion error: ${error}`);
    return c.json({ error: 'Failed to ingest contract' }, 500);
  }
});

app.get('/make-server-ec68bbf1/api/v1/analyze/:chain/:contract', async (c) => {
  try {
    const chain = c.req.param('chain');
    const contract = c.req.param('contract');
    const contractId = `${chain}:${contract}`;

    // Check if analysis exists
    const existingAnalysis = await kv.get(`analysis:${contractId}`);
    
    if (existingAnalysis && existingAnalysis.status === 'completed') {
      return c.json(existingAnalysis);
    }

    // Generate mock analysis (in real implementation, this would call ML service)
    const mockAnalysis = generateMockAnalysis(chain, contract);
    
    // Store completed analysis
    await kv.set(`analysis:${contractId}`, {
      ...mockAnalysis,
      id: contractId,
      status: 'completed',
      timestamp: new Date().toISOString()
    });

    return c.json(mockAnalysis);
  } catch (error) {
    console.log(`Analysis retrieval error: ${error}`);
    return c.json({ error: 'Failed to retrieve analysis' }, 500);
  }
});

// User Reports API
app.post('/make-server-ec68bbf1/api/v1/report', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { contractId, reason, stakeTx, evidence } = await c.req.json();
    
    const reportId = `report:${Date.now()}:${user.id}`;
    const reportData = {
      id: reportId,
      contractId,
      reporterId: user.id,
      reason,
      stakeTx,
      evidence,
      status: 'pending',
      votes: 0,
      timestamp: new Date().toISOString()
    };

    await kv.set(reportId, reportData);

    return c.json({ 
      success: true, 
      reportId,
      message: 'Report submitted successfully'
    });
  } catch (error) {
    console.log(`Report submission error: ${error}`);
    return c.json({ error: 'Failed to submit report' }, 500);
  }
});

// Reputation API
app.post('/make-server-ec68bbf1/api/v1/reputation/attest', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { address, badgeType, proofs } = await c.req.json();
    
    const attestationId = `attestation:${Date.now()}:${address}`;
    const attestationData = {
      id: attestationId,
      address,
      badgeType,
      issuedBy: user.id,
      proofs,
      timestamp: new Date().toISOString(),
      verified: false
    };

    await kv.set(attestationId, attestationData);

    return c.json({ 
      success: true, 
      attestationId,
      message: 'Reputation attestation created'
    });
  } catch (error) {
    console.log(`Reputation attestation error: ${error}`);
    return c.json({ error: 'Failed to create attestation' }, 500);
  }
});

app.get('/make-server-ec68bbf1/api/v1/reputation/:address', async (c) => {
  try {
    const address = c.req.param('address');
    
    // Get all attestations for address
    const attestations = await kv.getByPrefix(`attestation:`);
    const userAttestations = attestations.filter(att => att.address === address);
    
    const reputationScore = calculateReputationScore(userAttestations);
    
    return c.json({
      address,
      reputationScore,
      badges: userAttestations.filter(att => att.verified),
      totalAttestations: userAttestations.length
    });
  } catch (error) {
    console.log(`Reputation retrieval error: ${error}`);
    return c.json({ error: 'Failed to retrieve reputation' }, 500);
  }
});

// Leaderboard API
app.get('/make-server-ec68bbf1/api/v1/leaderboard', async (c) => {
  try {
    const reports = await kv.getByPrefix('report:');
    const leaderboard = generateLeaderboard(reports);
    
    return c.json({
      topReporters: leaderboard,
      totalReports: reports.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.log(`Leaderboard error: ${error}`);
    return c.json({ error: 'Failed to retrieve leaderboard' }, 500);
  }
});

// Webhook for external integrations
app.post('/make-server-ec68bbf1/api/v1/webhook', async (c) => {
  try {
    const { url, events } = await c.req.json();
    
    const webhookId = `webhook:${Date.now()}`;
    const webhookData = {
      id: webhookId,
      url,
      events,
      active: true,
      timestamp: new Date().toISOString()
    };

    await kv.set(webhookId, webhookData);

    return c.json({ 
      success: true, 
      webhookId,
      message: 'Webhook registered successfully'
    });
  } catch (error) {
    console.log(`Webhook registration error: ${error}`);
    return c.json({ error: 'Failed to register webhook' }, 500);
  }
});

// Helper functions
function generateMockAnalysis(chain: string, contract: string) {
  const riskScore = Math.floor(Math.random() * 100);
  const grade = getGradeFromScore(riskScore);
  
  return {
    chain,
    contract,
    grade,
    score: riskScore,
    risk: getRiskLevel(riskScore),
    analysis: {
      liquidityLock: riskScore > 60,
      auditStatus: riskScore > 80 ? 'Verified' : riskScore > 50 ? 'Pending' : 'Failed',
      holders: Math.floor(Math.random() * 100000),
      marketCap: `$${(Math.random() * 50).toFixed(1)}M`,
      volume24h: `$${(Math.random() * 5).toFixed(1)}M`,
      risks: generateRisks(riskScore),
      features: generateFeatures(riskScore)
    },
    evidence: {
      contractFunctions: riskScore > 50 ? ['renounceOwnership', 'lock'] : ['mint', 'pause'],
      liquidityAnalysis: { locked: riskScore > 60, duration: '2 years' },
      distributionCheck: { giniCoefficient: Math.random() * 0.5 }
    }
  };
}

function getGradeFromScore(score: number): string {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

function getRiskLevel(score: number): string {
  if (score >= 80) return 'Low';
  if (score >= 60) return 'Medium';
  if (score >= 40) return 'High';
  return 'Critical';
}

function generateRisks(score: number): string[] {
  const allRisks = [
    'High holder concentration',
    'No liquidity lock',
    'Hidden mint function',
    'Suspicious transactions',
    'Copy contract',
    'Unlimited supply',
    'Owner privileges'
  ];
  
  const riskCount = score > 70 ? 1 : score > 50 ? 2 : 4;
  return allRisks.slice(0, riskCount);
}

function generateFeatures(score: number): string[] {
  const allFeatures = [
    'Liquidity locked for 2 years',
    'Renounced ownership',
    'Audit completed',
    'Multi-sig wallet',
    'Transparent tokenomics',
    'Regular audits'
  ];
  
  const featureCount = score > 70 ? 3 : score > 50 ? 2 : 0;
  return allFeatures.slice(0, featureCount);
}

function calculateReputationScore(attestations: any[]): number {
  if (attestations.length === 0) return 0;
  
  const verifiedAttestations = attestations.filter(att => att.verified);
  return Math.min(100, verifiedAttestations.length * 10 + Math.random() * 20);
}

function generateLeaderboard(reports: any[]) {
  // Group reports by reporter and calculate stats
  const reporterStats = new Map();
  
  reports.forEach(report => {
    const reporterId = report.reporterId;
    if (!reporterStats.has(reporterId)) {
      reporterStats.set(reporterId, {
        reporterId,
        reports: 0,
        accuracy: 95 + Math.random() * 5,
        tokens: Math.floor(Math.random() * 50000)
      });
    }
    reporterStats.get(reporterId).reports++;
  });
  
  return Array.from(reporterStats.values())
    .sort((a, b) => b.reports - a.reports)
    .slice(0, 10);
}

// Health check
app.get('/make-server-ec68bbf1/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

Deno.serve(app.fetch);