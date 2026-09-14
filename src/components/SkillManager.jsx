import React, { useState } from 'react';
import { Zap, Plus, X, Star, Sparkles, Check, Hash } from 'lucide-react';

export default function SkillManager({ profile, updateProfile }) {
  const [newSkillName, setNewSkillName] = useState('');

  const skills = profile.skills || [];

  const addSkill = (name, pinned = false) => {
    if (!name.trim()) return;
    if (skills.some(s => s.name.toLowerCase() === name.toLowerCase())) return;

    const newSkill = {
      name: name.trim(),
      score: 90,
      endorsedCount: Math.floor(Math.random() * 25) + 5,
      pinned
    };

    updateProfile({ skills: [...skills, newSkill] });
    setNewSkillName('');
  };

  const removeSkill = (name) => {
    updateProfile({ skills: skills.filter(s => s.name !== name) });
  };

  const togglePin = (name) => {
    const updated = skills.map(s => s.name === name ? { ...s, pinned: !s.pinned } : s);
    updateProfile({ skills: updated });
  };

  const recommendedSkills = [
    "System Design & Architecture", "Go (Golang)", "Kubernetes", "TypeScript", 
    "Product Strategy", "Generative AI & LLMs", "AWS Cloud Infrastructure", 
    "Microservices", "PostgreSQL", "Data Analytics (SQL)", "Agile / Scrum", 
    "User Research & Usability", "MLOps", "React & Modern Web"
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2 m-0">
            <Zap className="w-5 h-5 text-amber-400" /> Skills & Keyword Optimization Strategy
          </h2>
          <p className="text-xs text-slate-400 m-0">Recruiters search LinkedIn using skill filters. Pin your top 3 core strengths.</p>
        </div>

        <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
          {skills.length} Skills Listed
        </span>
      </div>

      {/* Add Skill Input */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3">
        <form
          onSubmit={(e) => { e.preventDefault(); addSkill(newSkillName); }}
          className="flex gap-2"
        >
          <div className="relative grow">
            <Hash className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              value={newSkillName}
              onChange={(e) => setNewSkillName(e.target.value)}
              placeholder="e.g. Distributed Systems, Kubernetes, Product Strategy..."
              className="w-full bg-slate-900 text-slate-100 text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-700 outline-none focus:border-amber-500"
            />
          </div>
          <button
            type="submit"
            disabled={!newSkillName.trim()}
            className="flex items-center gap-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50"
          >
            <Plus className="w-4 h-4" /> Add Skill
          </button>
        </form>

        {/* Suggested Quick Add Tags */}
        <div className="pt-2">
          <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">Quick Add Industry Keyword Tags:</span>
          <div className="flex flex-wrap gap-1.5">
            {recommendedSkills.map((rec) => {
              const isAdded = skills.some(s => s.name.toLowerCase() === rec.toLowerCase());
              return (
                <button
                  key={rec}
                  onClick={() => !isAdded && addSkill(rec)}
                  disabled={isAdded}
                  className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium transition-all ${
                    isAdded
                      ? 'bg-slate-900/60 text-slate-500 border-slate-800 cursor-default'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700 hover:border-amber-500/50'
                  }`}
                >
                  {isAdded ? '✓ ' : '+ '} {rec}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Skills Grid */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
          Current Skills & Endorsement Tags
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-3 rounded-xl glass-card flex items-center justify-between border transition-all ${
                skill.pinned ? 'border-amber-500/60 bg-amber-950/20' : 'border-slate-800'
              }`}
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <button
                  onClick={() => togglePin(skill.name)}
                  className={`p-1 rounded transition-colors ${
                    skill.pinned ? 'text-amber-400 hover:text-amber-300' : 'text-slate-600 hover:text-slate-400'
                  }`}
                  title={skill.pinned ? 'Unpin skill' : 'Pin to top 3 skills'}
                >
                  <Star className={`w-4 h-4 ${skill.pinned ? 'fill-amber-400' : ''}`} />
                </button>
                <div className="truncate">
                  <span className="text-xs font-semibold text-slate-200 block truncate">{skill.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{skill.endorsedCount} endorsements</span>
                </div>
              </div>

              <button
                onClick={() => removeSkill(skill.name)}
                className="text-slate-500 hover:text-rose-400 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
