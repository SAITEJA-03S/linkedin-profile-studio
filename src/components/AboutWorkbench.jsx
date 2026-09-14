import React, { useState } from 'react';
import { FileText, Sparkles, Copy, Check, Lightbulb, Zap, BookOpen, Layers } from 'lucide-react';
import { SUMMARY_TEMPLATES } from '../data/presetProfiles';

export default function AboutWorkbench({ profile, updateProfile }) {
  const [copied, setCopied] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const about = profile.about || '';
  const wordCount = about.trim().split(/\s+/).filter(Boolean).length;
  const charCount = about.length;

  const handleCopy = () => {
    navigator.clipboard.writeText(about);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const applyTemplate = (tpl) => {
    updateProfile({ about: tpl.template });
    setSelectedTemplate(tpl.id);
  };

  const insertSnippet = (snippetText) => {
    updateProfile({ about: about ? `${about}\n\n${snippetText}` : snippetText });
  };

  const getWordCountBadge = () => {
    if (wordCount >= 120 && wordCount <= 300) {
      return <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">Optimal Length ({wordCount} words)</span>;
    }
    if (wordCount < 120) {
      return <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-medium border border-amber-500/20">Brief ({wordCount} words - Add 50+ words)</span>;
    }
    return <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-medium border border-blue-500/20">Detailed ({wordCount} words)</span>;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2 m-0">
            <FileText className="w-5 h-5 text-indigo-400" /> About & Summary Workbench
          </h2>
          <p className="text-xs text-slate-400 m-0">Tell your professional story, list core technical wins, and state your call-to-action.</p>
        </div>

        <button
          onClick={handleCopy}
          disabled={!about}
          className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-all"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
          {copied ? 'Copied!' : 'Copy About Text'}
        </button>
      </div>

      {/* Templates Selector */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-purple-400" /> Choose Story Framework Template
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {SUMMARY_TEMPLATES.map((tpl) => (
            <div
              key={tpl.id}
              onClick={() => applyTemplate(tpl)}
              className={`p-3 rounded-xl glass-card cursor-pointer border transition-all hover:border-purple-500/50 hover:bg-slate-800/80 ${
                selectedTemplate === tpl.id ? 'border-purple-500 bg-purple-950/30 ring-1 ring-purple-500' : 'border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">{tpl.label}</span>
                <span className="text-[10px] text-purple-400 font-semibold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">Use Template</span>
              </div>
              <p className="text-[11px] text-slate-400 m-0 leading-snug">{tpl.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Editor Box */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-300">About Section Text</span>
            {getWordCountBadge()}
          </div>
          <span className="text-xs font-mono text-slate-400">{charCount} characters</span>
        </div>

        <textarea
          rows={10}
          value={about}
          onChange={(e) => updateProfile({ about: e.target.value })}
          placeholder="Write or paste your LinkedIn summary here..."
          className="w-full bg-slate-900/90 text-slate-100 text-sm p-4 rounded-xl border border-slate-700/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-y leading-relaxed font-sans"
        />

        {/* Quick Insert Blocks */}
        <div className="pt-2 border-t border-slate-800/80">
          <span className="text-xs font-semibold text-slate-400 block mb-2">Append Quick Structure Blocks:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => insertSnippet("Key Achievements:\n• Reduced latency by 45% across microservices.\n• Led team of 8 engineers delivering enterprise cloud platform.\n• Saved $400K annual cloud infrastructure spending.")}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition-all flex items-center gap-1"
            >
              + Add Key Wins List
            </button>
            <button
              onClick={() => insertSnippet("Core Tech Stack:\n⚡ Languages: TypeScript, Go, Python, SQL\n⚡ Frameworks: React, Node.js, FastAPI, Kubernetes\n⚡ Cloud: AWS, Terraform, Docker, Redis")}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition-all flex items-center gap-1"
            >
              + Add Tech Stack Grid
            </button>
            <button
              onClick={() => insertSnippet("📩 Open for tech advisory roles, keynotes, and strategic engineering leadership opportunities. Feel free to connect or drop an email!")}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition-all flex items-center gap-1"
            >
              + Add Call-To-Action (CTA)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
