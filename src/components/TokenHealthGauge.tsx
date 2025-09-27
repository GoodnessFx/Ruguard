import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TokenHealthGauge() {
  const [score, setScore] = useState(75);
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 500);
    return () => clearTimeout(timer);
  }, [score]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => {
        const newScore = prev + (Math.random() - 0.5) * 20;
        return Math.max(10, Math.min(95, newScore));
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400', bg: 'bg-green-400' };
    if (score >= 80) return { grade: 'B', color: 'text-blue-400', bg: 'bg-blue-400' };
    if (score >= 70) return { grade: 'C', color: 'text-yellow-400', bg: 'bg-yellow-400' };
    if (score >= 60) return { grade: 'D', color: 'text-orange-400', bg: 'bg-orange-400' };
    return { grade: 'F', color: 'text-red-400', bg: 'bg-red-400' };
  };

  const gradeInfo = getGrade(animatedScore);
  const circumference = 2 * Math.PI * 90;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-600/20 rounded-full blur-2xl" />
      
      {/* SVG Gauge */}
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
        {/* Background Circle */}
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
          fill="none"
        />
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="25%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="75%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        
        {/* Progress Circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          stroke="url(#gaugeGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div 
          className={`text-6xl font-bold ${gradeInfo.color} mb-2`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {gradeInfo.grade}
        </motion.div>
        
        <motion.div 
          className="text-2xl text-white font-semibold mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {Math.round(animatedScore)}%
        </motion.div>
        
        <motion.div 
          className="text-sm text-gray-400 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Token Health Score
        </motion.div>

        {/* Risk Indicators */}
        <motion.div 
          className="mt-4 flex space-x-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {['Liquidity', 'Distribution', 'Functions'].map((indicator, idx) => (
            <div key={indicator} className="text-center">
              <div className={`w-3 h-3 rounded-full ${
                animatedScore > 60 + idx * 10 ? gradeInfo.bg : 'bg-gray-600'
              } mb-1`} />
              <div className="text-xs text-gray-500">{indicator}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Risk Indicators */}
      <div className="absolute inset-0">
        {[
          { label: 'Liquidity Lock', angle: 45, status: animatedScore > 70 },
          { label: 'Owner Functions', angle: 135, status: animatedScore > 80 },
          { label: 'Distribution', angle: 225, status: animatedScore > 60 },
          { label: 'Audit Status', angle: 315, status: animatedScore > 85 }
        ].map((item, idx) => {
          const x = Math.cos((item.angle * Math.PI) / 180) * 120;
          const y = Math.sin((item.angle * Math.PI) / 180) * 120;
          
          return (
            <motion.div
              key={item.label}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.2 + idx * 0.1 }}
            >
              <div className={`w-3 h-3 rounded-full ${
                item.status ? 'bg-green-400' : 'bg-red-400'
              } shadow-lg`} />
              <div className="text-xs text-gray-400 mt-1 whitespace-nowrap text-center">
                {item.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}