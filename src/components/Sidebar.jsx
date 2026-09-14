import React from 'react';
import { User, Type, FileText, Briefcase, Zap, BarChart3, Palette } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, scoreData }) {
  const tabs = [
    { id: 'basics', label: 'Basics & Contact', icon: User, badge: null },
    { id: 'headline', label: 'Headline Studio', icon: Type, badge: scoreData?.breakdown?.headline ? `${scoreData.breakdown.headline}/25` : null },
    { id: 'about', label: 'About / Summary', icon: FileText, badge: scoreData?.breakdown?.about ? `${scoreData.breakdown.about}/25` : null },
    { id: 'experience', label: 'Experience & Bullets', icon: Briefcase, badge: scoreData?.breakdown?.experience ? `${scoreData.breakdown.experience}/20` : null },
    { id: 'skills', label: 'Skills & Keywords', icon: Zap, badge: scoreData?.breakdown?.skills ? `${scoreData.breakdown.skills}/15` : null },
    { id: 'analytics', label: 'Profile Score Breakdown', icon: BarChart3, badge: `${scoreData?.totalScore || 0}%` }
  ];

  return (
    <aside className="w-full lg:w-64 shrink-0 glass-panel rounded-2xl p-3 flex flex-col gap-1 border border-slate-800/80">
      <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
        Profile Sections
      </div>
      <nav className="flex flex-col gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </div>
              {tab.badge && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Quick Tip Box */}
      <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
        <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-1">
          💡 Pro Recruiter Tip
        </div>
        <p className="text-[11px] leading-relaxed text-slate-400">
          LinkedIn profiles with numbers in the headline and bullet points receive 40% more recruiter message replies.
        </p>
      </div>
    </aside>
  );
}
