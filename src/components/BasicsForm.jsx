import React from 'react';
import { User, MapPin, Building, Globe, Shield, Sparkles, Check } from 'lucide-react';

export default function BasicsForm({ profile, updateProfile }) {
  const gradients = [
    { id: 'tech', label: 'Tech & Engineering', value: 'from-blue-600 via-indigo-700 to-slate-900' },
    { id: 'growth', label: 'Growth & Business', value: 'from-purple-700 via-pink-600 to-slate-900' },
    { id: 'ai', label: 'AI & Data Science', value: 'from-teal-600 via-emerald-700 to-slate-900' },
    { id: 'exec', label: 'Executive Leadership', value: 'from-amber-600 via-rose-700 to-slate-900' },
    { id: 'minimal', label: 'Minimalist Dark', value: 'from-slate-700 via-slate-800 to-slate-950' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div>
        <h2 className="text-lg font-bold text-white flex items-center gap-2 m-0">
          <User className="w-5 h-5 text-blue-400" /> Basic Details & Profile Aesthetics
        </h2>
        <p className="text-xs text-slate-400 m-0">Set your name, contact location, target role, and cover banner design.</p>
      </div>

      {/* Inputs Form Grid */}
      <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name</label>
            <input
              type="text"
              value={profile.name || ''}
              onChange={(e) => updateProfile({ name: e.target.value })}
              placeholder="e.g. Alex Morgan"
              className="w-full bg-slate-900 text-slate-100 text-xs p-2.5 rounded-xl border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Pronouns (Optional)</label>
            <input
              type="text"
              value={profile.pronouns || ''}
              onChange={(e) => updateProfile({ pronouns: e.target.value })}
              placeholder="he/him, she/her, they/them"
              className="w-full bg-slate-900 text-slate-100 text-xs p-2.5 rounded-xl border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Location</label>
            <input
              type="text"
              value={profile.location || ''}
              onChange={(e) => updateProfile({ location: e.target.value })}
              placeholder="San Francisco, CA, United States"
              className="w-full bg-slate-900 text-slate-100 text-xs p-2.5 rounded-xl border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Current Company / Org</label>
            <input
              type="text"
              value={profile.currentCompany || ''}
              onChange={(e) => updateProfile({ currentCompany: e.target.value })}
              placeholder="CloudTech Platform Solutions"
              className="w-full bg-slate-900 text-slate-100 text-xs p-2.5 rounded-xl border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Target Next Role</label>
            <input
              type="text"
              value={profile.targetRole || ''}
              onChange={(e) => updateProfile({ targetRole: e.target.value })}
              placeholder="Staff / Lead Engineer"
              className="w-full bg-slate-900 text-slate-100 text-xs p-2.5 rounded-xl border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Personal Portfolio / GitHub URL</label>
            <input
              type="text"
              value={profile.website || ''}
              onChange={(e) => updateProfile({ website: e.target.value })}
              placeholder="https://yourdomain.dev"
              className="w-full bg-slate-900 text-slate-100 text-xs p-2.5 rounded-xl border border-slate-700 outline-none focus:border-blue-500"
            />
          </div>

        </div>

        {/* Open To Work Toggle */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-200 block">#OpenToWork Badge Ring</span>
            <span className="text-[11px] text-slate-400">Display green recruiter ring badge on profile avatar</span>
          </div>

          <button
            onClick={() => updateProfile({ openToWork: !profile.openToWork })}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              profile.openToWork ? 'bg-emerald-500' : 'bg-slate-800 border border-slate-700'
            }`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
              profile.openToWork ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* Cover Banner Selector */}
        <div className="pt-3 border-t border-slate-800 space-y-2">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Cover Banner Gradient Theme
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {gradients.map((g) => (
              <div
                key={g.id}
                onClick={() => updateProfile({ bannerGradient: g.value })}
                className={`h-14 rounded-xl cursor-pointer bg-gradient-to-r ${g.value} p-2 flex items-end justify-between border transition-all hover:scale-105 ${
                  profile.bannerGradient === g.value ? 'ring-2 ring-blue-400 border-white' : 'border-slate-800'
                }`}
              >
                <span className="text-[10px] font-bold text-white drop-shadow">{g.label}</span>
                {profile.bannerGradient === g.value && <Check className="w-4 h-4 text-white drop-shadow" />}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
