import React, { useState } from 'react';
import { Type, Sparkles, Copy, Check, Info, Lightbulb, Zap, HelpCircle } from 'lucide-react';
import { HEADLINE_FORMULAS } from '../data/presetProfiles';

export default function HeadlineStudio({ profile, updateProfile }) {
  const [copied, setCopied] = useState(false);
  const [activeFormula, setActiveFormula] = useState(null);

  const headline = profile.headline || '';
  const charCount = headline.length;
  const maxChars = 220;

  const handleCopy = () => {
    navigator.clipboard.writeText(headline);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const insertSymbol = (symbol) => {
    updateProfile({ headline: headline + ' ' + symbol + ' ' });
  };

  const applyFormulaTemplate = (formulaObj) => {
    let generated = '';
    const role = profile.targetRole || profile.name || 'Senior Specialist';
    const comp = profile.currentCompany || 'Tech Corp';

    if (formulaObj.name.includes('Impact')) {
      generated = `${role} @ ${comp} | Distributed Systems, Cloud & APIs | Cut Latency by 40% & Saved $500K`;
    } else if (formulaObj.name.includes('Value')) {
      generated = `Helping enterprise clients scale cloud infrastructure 10x using Go, K8s & AWS | Ex-${comp}`;
    } else {
      generated = `${role} | Microservices • Cloud Architecture • DevOps | B.S. CS Berkeley | Building High-Availability Systems`;
    }

    updateProfile({ headline: generated });
    setActiveFormula(formulaObj.name);
  };

  const enhanceHeadlineWithAI = () => {
    let current = headline.trim();
    if (!current) {
      current = `${profile.targetRole || 'Software Engineer'} @ ${profile.currentCompany || 'Company'} | Scalable Cloud Systems & Go`;
    }

    // Ensure proper separators and metric highlight
    if (!current.includes('|') && !current.includes('•')) {
      current = current.replace(/ at /gi, ' @ ').replace(/ and /gi, ' & ');
      current = `${current} | Cloud Infrastructure & Microservices | Proven Track Record of High-Impact Execution`;
    }

    updateProfile({ headline: current.substring(0, maxChars) });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2 m-0">
            <Type className="w-5 h-5 text-blue-400" /> Professional Headline Studio
          </h2>
          <p className="text-xs text-slate-400 m-0">Your headline is the #1 factor for Recruiter Search Click-Through Rate.</p>
        </div>

        <button
          onClick={handleCopy}
          disabled={!headline}
          className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-all"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
          {copied ? 'Copied!' : 'Copy Headline'}
        </button>
      </div>

      {/* Main Text Input Area */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-slate-300">
            Current Headline Draft
          </label>
          <span className={`text-xs font-mono font-bold ${
            charCount > maxChars ? 'text-rose-400' : charCount > 180 ? 'text-amber-400' : 'text-slate-400'
          }`}>
            {charCount} / {maxChars} chars
          </span>
        </div>

        <textarea
          rows={3}
          value={headline}
          onChange={(e) => updateProfile({ headline: e.target.value })}
          placeholder="e.g. Senior Software Engineer @ CloudTech | Go, Distributed Systems & K8s | Saved $1.4M in Cloud Costs"
          className="w-full bg-slate-900/90 text-slate-100 text-sm p-3 rounded-xl border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none leading-relaxed"
        />

        {/* Quick Separators & Polish Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span className="text-[11px] font-semibold text-slate-400">Quick Insert Separator:</span>
            {['|', '•', '@', '⚡', '🚀', '📈'].map((sym) => (
              <button
                key={sym}
                onClick={() => insertSymbol(sym)}
                className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono font-bold text-xs flex items-center justify-center border border-slate-700 transition-all hover:scale-105"
              >
                {sym}
              </button>
            ))}
          </div>

          <button
            onClick={enhanceHeadlineWithAI}
            className="flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-3 py-1.5 rounded-lg shadow-md shadow-purple-600/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Auto-Format & Polish
          </button>
        </div>
      </div>

      {/* Proven Formula Templates */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
          <Lightbulb className="w-4 h-4 text-amber-400" /> Recruiter-Approved Headline Formulas
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {HEADLINE_FORMULAS.map((f) => (
            <div
              key={f.name}
              onClick={() => applyFormulaTemplate(f)}
              className={`p-3.5 rounded-xl glass-card cursor-pointer border transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-800/80 ${
                activeFormula === f.name ? 'border-blue-500 bg-blue-950/30 ring-1 ring-blue-500' : 'border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-white">{f.name}</span>
                <span className="text-[10px] text-blue-400 font-semibold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">Apply</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-2 leading-snug">{f.formula}</p>
              <div className="p-2 rounded bg-slate-950/80 text-[10px] font-mono text-slate-300 border border-slate-800">
                "{f.example}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
