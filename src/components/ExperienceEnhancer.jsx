import React, { useState } from 'react';
import { Briefcase, Plus, Trash2, Sparkles, Check, ChevronDown, ChevronUp, Zap, HelpCircle } from 'lucide-react';
import { ACTION_VERBS } from '../data/presetProfiles';

export default function ExperienceEnhancer({ profile, updateProfile }) {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [expandedExpId, setExpandedExpId] = useState(profile.experience?.[0]?.id || null);

  const experiences = profile.experience || [];

  const addExperience = () => {
    const newExp = {
      id: `exp-${Date.now()}`,
      title: 'Senior Engineer / Leader',
      company: 'Tech Corporation',
      employmentType: 'Full-time',
      startDate: '2022-01',
      endDate: 'Present',
      location: 'San Francisco, CA',
      bullets: [
        'Architected high-throughput cloud API handling 50M daily requests with 99.99% uptime.',
        'Reduced infrastructure compute overhead by 30% through caching and memory optimization.'
      ],
      skills: ['System Design', 'Cloud Architecture']
    };

    updateProfile({ experience: [newExp, ...experiences] });
    setExpandedExpId(newExp.id);
  };

  const removeExperience = (id) => {
    updateProfile({ experience: experiences.filter(e => e.id !== id) });
  };

  const updateExperienceItem = (id, fields) => {
    const updated = experiences.map(e => e.id === id ? { ...e, ...fields } : e);
    updateProfile({ experience: updated });
  };

  const updateBullet = (expId, index, newText) => {
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;
    const newBullets = [...exp.bullets];
    newBullets[index] = newText;
    updateExperienceItem(expId, { bullets: newBullets });
  };

  const addBullet = (expId) => {
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;
    updateExperienceItem(expId, {
      bullets: [...(exp.bullets || []), 'Engineered [System/Feature] resulting in [X]% improvement in [Metric] by implementing [Method].']
    });
  };

  const removeBullet = (expId, index) => {
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;
    const newBullets = exp.bullets.filter((_, i) => i !== index);
    updateExperienceItem(expId, { bullets: newBullets });
  };

  const transformToXYZ = (expId, index) => {
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;
    const current = exp.bullets[index] || '';

    let transformed = current;
    if (!/\d+/.test(current)) {
      transformed = `Spearheaded redesign of ${current.toLowerCase().replace(/^(built|led|worked on|did|created)\s+/i, '')}, improving performance by 35% and saving 12 hours weekly.`;
    } else {
      transformed = current.replace(/^(built|worked on|did)/i, 'Architected and deployed');
    }

    updateBullet(expId, index, transformed);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2 m-0">
            <Briefcase className="w-5 h-5 text-emerald-400" /> Experience & Bullet Point Enhancer
          </h2>
          <p className="text-xs text-slate-400 m-0">Transform weak descriptions into metric-rich achievements using Google's XYZ formula.</p>
        </div>

        <button
          onClick={addExperience}
          className="flex items-center gap-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg shadow-md transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" /> Add Experience Position
        </button>
      </div>

      {/* Action Verbs Lookup Box */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" /> Action Verb Power Dictionary
          </span>
          <div className="flex gap-1">
            {Object.keys(ACTION_VERBS).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] capitalize font-medium px-2.5 py-1 rounded-md transition-all ${
                  activeCategory === cat ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {ACTION_VERBS[activeCategory]?.map((verb) => (
            <span
              key={verb}
              onClick={() => navigator.clipboard.writeText(verb)}
              className="text-xs bg-slate-900 hover:bg-emerald-950/60 hover:text-emerald-300 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800 font-mono cursor-pointer transition-all hover:scale-105"
              title="Click to copy verb"
            >
              {verb}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Accordion List */}
      <div className="space-y-4">
        {experiences.map((exp) => {
          const isExpanded = expandedExpId === exp.id;
          return (
            <div key={exp.id} className="glass-panel rounded-2xl border border-slate-800/90 overflow-hidden">
              
              {/* Card Header */}
              <div
                onClick={() => setExpandedExpId(isExpanded ? null : exp.id)}
                className="p-4 bg-slate-900/60 hover:bg-slate-800/50 cursor-pointer flex items-center justify-between transition-colors border-b border-slate-800/60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 border border-slate-700">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white m-0">{exp.title || 'Untitled Role'}</h3>
                    <p className="text-xs text-slate-400 m-0">{exp.company} • {exp.startDate} – {exp.endDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); removeExperience(exp.id); }}
                    className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                    title="Delete position"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </div>
              </div>

              {/* Card Body */}
              {isExpanded && (
                <div className="p-4 space-y-4">
                  {/* Basic Inputs Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 block mb-1">Job Title</label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => updateExperienceItem(exp.id, { title: e.target.value })}
                        className="w-full bg-slate-900 text-slate-100 text-xs p-2.5 rounded-lg border border-slate-700 outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 block mb-1">Company Name</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperienceItem(exp.id, { company: e.target.value })}
                        className="w-full bg-slate-900 text-slate-100 text-xs p-2.5 rounded-lg border border-slate-700 outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 block mb-1">Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => updateExperienceItem(exp.id, { startDate: e.target.value })}
                        className="w-full bg-slate-900 text-slate-100 text-xs p-2.5 rounded-lg border border-slate-700 outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 block mb-1">End Date</label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => updateExperienceItem(exp.id, { endDate: e.target.value })}
                        className="w-full bg-slate-900 text-slate-100 text-xs p-2.5 rounded-lg border border-slate-700 outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Bullet Points Section */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Achievement Bullets (XYZ Formula)</span>
                      <button
                        onClick={() => addBullet(exp.id)}
                        className="text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                      >
                        + Add Bullet Point
                      </button>
                    </div>

                    <div className="space-y-2">
                      {(exp.bullets || []).map((bullet, bIdx) => {
                        const hasMetric = /\d+%|\$\d+|\d+x|\d+k|\d+M/i.test(bullet);
                        return (
                          <div key={bIdx} className="flex gap-2 items-start">
                            <div className="grow space-y-1">
                              <div className="flex items-center justify-between">
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                  hasMetric ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                                }`}>
                                  {hasMetric ? '✓ Metric Included' : '⚠️ Missing Numbers/Metrics'}
                                </span>

                                <button
                                  onClick={() => transformToXYZ(exp.id, bIdx)}
                                  className="text-[10px] font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                                >
                                  <Sparkles className="w-3 h-3" /> Auto XYZ Enhance
                                </button>
                              </div>

                              <textarea
                                rows={2}
                                value={bullet}
                                onChange={(e) => updateBullet(exp.id, bIdx, e.target.value)}
                                className="w-full bg-slate-900/90 text-slate-200 text-xs p-2.5 rounded-lg border border-slate-800 focus:border-emerald-500 outline-none resize-none leading-relaxed"
                              />
                            </div>

                            <button
                              onClick={() => removeBullet(exp.id, bIdx)}
                              className="mt-6 text-slate-500 hover:text-rose-400 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
