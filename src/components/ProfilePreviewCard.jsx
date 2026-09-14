import React, { useState } from 'react';
import { MapPin, Building, Globe, Copy, Check, CheckCircle2, Award, Briefcase, GraduationCap, Zap, Star, ExternalLink, Sparkles } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';

export default function ProfilePreviewCard({ profile }) {
  const [copiedSection, setCopiedSection] = useState(null);

  const copyText = (sectionKey, text) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const name = profile.name || 'Your Name';
  const headline = profile.headline || 'Your Headline will appear here...';
  const location = profile.location || 'San Francisco Bay Area';
  const company = profile.currentCompany || 'Current Company';
  const about = profile.about || 'Your professional summary and background will appear here...';
  const skills = profile.skills || [];
  const experience = profile.experience || [];
  const openToWork = profile.openToWork ?? true;

  const bannerGradient = profile.bannerGradient || 'from-blue-600 via-indigo-700 to-slate-900';

  return (
    <div className="w-full space-y-4">
      {/* Live Preview Header Notice */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <LinkedInIcon className="w-4 h-4 fill-blue-400" /> Live LinkedIn Profile Card Preview
        </span>

        <span className="text-[11px] bg-slate-800 text-slate-400 px-2.5 py-0.5 rounded-full font-mono border border-slate-700">
          Real-time Sync
        </span>
      </div>

      {/* Main LinkedIn Card Mock */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-slate-100 transition-all">
        
        {/* Banner */}
        <div className={`h-36 sm:h-44 w-full bg-gradient-to-r ${bannerGradient} relative overflow-hidden flex items-end justify-end p-3`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <button
            onClick={() => copyText('banner', `LinkedIn Cover Banner Theme: ${bannerGradient}`)}
            className="relative z-10 text-[10px] font-semibold bg-slate-900/80 hover:bg-slate-900 text-slate-200 px-2.5 py-1 rounded-lg backdrop-blur border border-slate-700 flex items-center gap-1"
          >
            {copiedSection === 'banner' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            {copiedSection === 'banner' ? 'Copied' : 'Banner Theme'}
          </button>
        </div>

        {/* Profile Identity Info Area */}
        <div className="px-6 pb-6 relative">
          
          {/* Avatar with #OPEN TO WORK badge overlay */}
          <div className="flex justify-between items-end -mt-16 sm:-mt-20 mb-4">
            <div className="relative group">
              <div className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-slate-900 overflow-hidden shadow-xl bg-slate-800 ${
                openToWork ? 'ring-4 ring-emerald-500/80' : ''
              }`}>
                <img
                  src={profile.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              {openToWork && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded-full border border-slate-900 shadow tracking-wider whitespace-nowrap">
                  #OPEN TO WORK
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => copyText('headline', `${name}\n${headline}`)}
                className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-full shadow-md transition-all flex items-center gap-1.5"
              >
                {copiedSection === 'headline' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedSection === 'headline' ? 'Copied' : 'Copy Headline'}
              </button>
            </div>
          </div>

          {/* Name & Pronouns */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight m-0">{name}</h2>
              {profile.pronouns && (
                <span className="text-xs text-slate-400 font-normal">({profile.pronouns})</span>
              )}
              <CheckCircle2 className="w-5 h-5 text-blue-400 fill-blue-400/20" />
            </div>

            {/* Headline */}
            <p className="text-sm text-slate-200 font-normal leading-relaxed m-0">{headline}</p>

            {/* Location & Current Org */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" /> {location}
              </span>
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-slate-500" /> {company}
              </span>
              {profile.website && (
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:underline"
                >
                  <Globe className="w-3.5 h-3.5" /> Website <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Section Tabs inside card */}
        <div className="border-t border-slate-800/80">
          
          {/* ABOUT SECTION */}
          <div className="p-6 border-b border-slate-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white m-0 flex items-center gap-2">
                About
              </h3>
              <button
                onClick={() => copyText('about', about)}
                className="text-xs text-slate-400 hover:text-blue-400 font-medium flex items-center gap-1"
              >
                {copiedSection === 'about' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copiedSection === 'about' ? 'Copied' : 'Copy About'}
              </button>
            </div>

            <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed m-0 font-sans">
              {about}
            </p>
          </div>

          {/* EXPERIENCE SECTION */}
          <div className="p-6 border-b border-slate-800/80 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white m-0 flex items-center gap-2">
                Experience
              </h3>
            </div>

            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-300">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 grow">
                    <h4 className="text-sm font-bold text-white m-0">{exp.title}</h4>
                    <p className="text-xs text-slate-400 m-0">{exp.company} • {exp.startDate} - {exp.endDate}</p>
                    <ul className="mt-2 space-y-1.5 pl-4 list-disc text-xs text-slate-300">
                      {(exp.bullets || []).map((b, idx) => (
                        <li key={idx} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white m-0 flex items-center gap-2">
                Skills & Endorsements
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s.name}
                  className={`text-xs px-3 py-1.5 rounded-xl border flex items-center gap-1.5 font-medium ${
                    s.pinned
                      ? 'bg-blue-950/60 text-blue-300 border-blue-500/40 shadow-sm'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700'
                  }`}
                >
                  {s.pinned && <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                  {s.name}
                  <span className="text-[10px] text-slate-400 font-mono">({s.endorsedCount || 12})</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
