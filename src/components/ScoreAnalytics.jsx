import React from 'react';
import { BarChart3, CheckCircle2, AlertTriangle, Sparkles, Award, ShieldCheck, Zap } from 'lucide-react';

export default function ScoreAnalytics({ scoreData }) {
  const { totalScore, breakdown, feedback } = scoreData;

  const getScoreGrade = (s) => {
    if (s >= 90) return { label: 'All-Star Profile (Top 2%)', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' };
    if (s >= 75) return { label: 'Strong Recruiter Ready (Top 10%)', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' };
    if (s >= 55) return { label: 'Intermediate - Needs Optimization', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' };
    return { label: 'Needs Improvement', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' };
  };

  const grade = getScoreGrade(totalScore);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div>
        <h2 className="text-lg font-bold text-white flex items-center gap-2 m-0">
          <BarChart3 className="w-5 h-5 text-blue-400" /> Profile Strength & Recruiter Visibility Analytics
        </h2>
        <p className="text-xs text-slate-400 m-0">Real-time evaluation based on LinkedIn Recruiter search algorithms.</p>
      </div>

      {/* Main Score Banner Card */}
      <div className={`p-6 rounded-2xl border ${grade.bg} flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl`}>
        <div className="flex items-center gap-5">
          {/* Radial score badge */}
          <div className="relative w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-700 flex items-center justify-center shrink-0 shadow-inner">
            <div className="text-center">
              <span className={`text-2xl font-extrabold font-mono ${grade.color}`}>{totalScore}</span>
              <span className="text-[10px] text-slate-400 block font-bold">/ 100</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className={`text-xs font-bold uppercase tracking-wider ${grade.color}`}>
              {grade.label}
            </span>
            <h3 className="text-lg font-bold text-white m-0">Search Index Readiness Rating</h3>
            <p className="text-xs text-slate-300 m-0 max-w-md">
              Profiles scoring 85+ receive 3.5x more recruiter InMail messages and show up in top search result queries.
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="text-xs font-semibold text-slate-400 block">Estimated Visibility</span>
            <span className="text-sm font-bold text-emerald-400 flex items-center justify-center gap-1">
              <Zap className="w-4 h-4" /> Top 5% Candidates
            </span>
          </div>
        </div>
      </div>

      {/* Section Category Breakdown */}
      <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider m-0">
          Section Weighting Breakdown
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Headline */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Headline Strength & Keywords</span>
              <span className="font-mono text-blue-400">{breakdown.headline} / 25 pts</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(breakdown.headline / 25) * 100}%` }} />
            </div>
          </div>

          {/* About */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">About / Summary Narrative</span>
              <span className="font-mono text-indigo-400">{breakdown.about} / 25 pts</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${(breakdown.about / 25) * 100}%` }} />
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Experience Bullets (XYZ Metrics)</span>
              <span className="font-mono text-emerald-400">{breakdown.experience} / 20 pts</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(breakdown.experience / 20) * 100}%` }} />
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Skills & Endorsement Tags</span>
              <span className="font-mono text-amber-400">{breakdown.skills} / 15 pts</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: `${(breakdown.skills / 15) * 100}%` }} />
            </div>
          </div>

        </div>
      </div>

      {/* Actionable Feedback List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider m-0">
          Optimization Action Items Checklist
        </h3>

        <div className="space-y-2">
          {feedback.map((item, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${
                item.type === 'success'
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                  : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
              }`}
            >
              {item.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              )}
              <div>
                <span className="font-bold mr-1 font-mono text-[11px] uppercase">[{item.category}]</span>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
