import React, { useState } from 'react';
import { X, Copy, Check, Download, FileText, Sparkles } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';
import confetti from 'canvas-confetti';

export default function ExportModal({ profile, onClose }) {
  const [copiedSection, setCopiedSection] = useState(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const copySection = (secName, content) => {
    navigator.clipboard.writeText(content);
    setCopiedSection(secName);
    triggerConfetti();
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const getFullMarkdown = () => {
    let md = `# LINKEDIN PROFILE EXPORT FOR ${profile.name?.toUpperCase() || 'USER'}\n\n`;
    md += `## 1. HEADLINE\n${profile.headline}\n\n`;
    md += `## 2. ABOUT / SUMMARY\n${profile.about}\n\n`;
    md += `## 3. EXPERIENCE BULLETS\n`;
    (profile.experience || []).forEach(exp => {
      md += `\n### ${exp.title} @ ${exp.company} (${exp.startDate} - ${exp.endDate})\n`;
      (exp.bullets || []).forEach(b => {
        md += `• ${b}\n`;
      });
    });
    md += `\n## 4. TOP SKILLS\n`;
    md += (profile.skills || []).map(s => s.name).join(', ');
    return md;
  };

  const downloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(profile, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `linkedin_profile_${profile.name?.toLowerCase().replace(/\s+/g, '_') || 'backup'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-5 shadow-2xl animate-fade-in relative max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white m-0">Profile Export Station</h2>
              <p className="text-xs text-slate-400 m-0">One-click copy snippets formatted directly for LinkedIn inputs.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section Snippets */}
        <div className="space-y-4">
          
          {/* Headline Snippet */}
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">1. Headline Text</span>
              <button
                onClick={() => copySection('headline', profile.headline)}
                className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all"
              >
                {copiedSection === 'headline' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedSection === 'headline' ? 'Copied to Clipboard!' : 'Copy Headline'}
              </button>
            </div>
            <p className="text-xs text-slate-300 font-mono bg-slate-900 p-2.5 rounded-xl border border-slate-800/80 m-0 leading-relaxed">
              {profile.headline}
            </p>
          </div>

          {/* About Snippet */}
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">2. About / Summary Text</span>
              <button
                onClick={() => copySection('about', profile.about)}
                className="text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all"
              >
                {copiedSection === 'about' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedSection === 'about' ? 'Copied to Clipboard!' : 'Copy About'}
              </button>
            </div>
            <p className="text-xs text-slate-300 font-sans bg-slate-900 p-2.5 rounded-xl border border-slate-800/80 m-0 max-h-32 overflow-y-auto whitespace-pre-line leading-relaxed">
              {profile.about}
            </p>
          </div>

          {/* Skills Snippet */}
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">3. Skills Tags List</span>
              <button
                onClick={() => copySection('skills', (profile.skills || []).map(s => s.name).join(', '))}
                className="text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all"
              >
                {copiedSection === 'skills' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedSection === 'skills' ? 'Copied to Clipboard!' : 'Copy All Skills'}
              </button>
            </div>
            <p className="text-xs text-slate-300 font-mono bg-slate-900 p-2.5 rounded-xl border border-slate-800/80 m-0 leading-relaxed">
              {(profile.skills || []).map(s => s.name).join(' • ')}
            </p>
          </div>

        </div>

        {/* Global Copy & Download Actions */}
        <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => copySection('full', getFullMarkdown())}
            className="flex items-center gap-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-xl border border-slate-700 transition-all"
          >
            {copiedSection === 'full' ? <Check className="w-4 h-4 text-emerald-400" /> : <FileText className="w-4 h-4 text-slate-400" />}
            {copiedSection === 'full' ? 'Copied Full Profile!' : 'Copy Full Markdown Summary'}
          </button>

          <button
            onClick={downloadJSON}
            className="flex items-center gap-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2.5 rounded-xl border border-slate-700 transition-all"
          >
            <Download className="w-4 h-4 text-blue-400" /> Download Profile Backup (.json)
          </button>
        </div>

      </div>
    </div>
  );
}
