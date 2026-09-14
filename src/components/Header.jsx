import React, { useState } from 'react';
import { Sparkles, RefreshCw, Download, Check, Award, Eye, Code } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';
import { PRESET_PROFILES } from '../data/presetProfiles';

export default function Header({ profile, onSelectPreset, onReset, scoreData, onOpenExportModal }) {
  const [copied, setCopied] = useState(false);

  const getScoreColor = (score) => {
    if (score >= 85) return 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40';
    if (score >= 70) return 'text-blue-400 bg-blue-950/60 border-blue-500/40';
    if (score >= 50) return 'text-amber-400 bg-amber-950/60 border-amber-500/40';
    return 'text-rose-400 bg-rose-950/60 border-rose-500/40';
  };

  return (
    <header className="glass-panel sticky top-0 z-40 border-b border-slate-800/80 px-4 lg:px-8 py-3 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <LinkedInIcon className="w-6 h-6 fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white m-0">LinkedIn Profile Studio</h1>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                AI Optimizer v2.4
              </span>
            </div>
            <p className="text-xs text-slate-400 m-0">Craft, Polish & Live Preview Your Recruiter-Ready Profile</p>
          </div>
        </div>

        {/* Center: Presets & Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Preset selector */}
          <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-700/60 rounded-lg p-1 text-xs">
            <span className="text-slate-400 px-2 flex items-center gap-1 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Presets:
            </span>
            <select
              className="bg-slate-800 text-slate-200 rounded px-2 py-1 outline-none border border-slate-700 cursor-pointer focus:border-blue-500 transition-colors"
              onChange={(e) => e.target.value && onSelectPreset(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>Load Sample Profile...</option>
              {Object.values(PRESET_PROFILES).map((p) => (
                <option key={p.id} value={p.id}>{p.label}</option>
              ))}
            </select>
          </div>

          {/* Reset */}
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-all active:scale-95"
            title="Reset to blank profile"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-400" /> Reset
          </button>
        </div>

        {/* Right Actions & Score */}
        <div className="flex items-center gap-3">
          {/* Score Badge */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold ${getScoreColor(scoreData.totalScore)}`}>
            <Award className="w-4 h-4" />
            <span>Profile Strength: <strong className="text-sm font-bold">{scoreData.totalScore}/100</strong></span>
          </div>

          {/* Export Button */}
          <button
            onClick={onOpenExportModal}
            className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-lg shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" /> Export & Copy All
          </button>
        </div>

      </div>
    </header>
  );
}
