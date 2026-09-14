import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BasicsForm from './components/BasicsForm';
import HeadlineStudio from './components/HeadlineStudio';
import AboutWorkbench from './components/AboutWorkbench';
import ExperienceEnhancer from './components/ExperienceEnhancer';
import SkillManager from './components/SkillManager';
import ProfilePreviewCard from './components/ProfilePreviewCard';
import ScoreAnalytics from './components/ScoreAnalytics';
import ExportModal from './components/ExportModal';
import { PRESET_PROFILES } from './data/presetProfiles';
import { calculateProfileScore } from './utils/scoreCalculator';

const LOCAL_STORAGE_KEY = 'linkedin_profile_studio_data_v2';

export default function App() {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load saved profile state', e);
    }
    return PRESET_PROFILES.saiteja_polu;
  });

  const [activeTab, setActiveTab] = useState('headline');
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Save to localStorage on profile updates
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.error('Failed to save profile state', e);
    }
  }, [profile]);

  const updateProfile = (fields) => {
    setProfile((prev) => ({ ...prev, ...fields }));
  };

  const handleSelectPreset = (presetId) => {
    const selected = PRESET_PROFILES[presetId];
    if (selected) {
      setProfile(selected);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your profile details?')) {
      setProfile({
        name: 'Jane Doe',
        pronouns: 'she/her',
        headline: 'Senior Professional | Key Expertise & Quantifiable Impact',
        location: 'San Francisco, CA',
        currentCompany: 'Technology Inc',
        openToWork: true,
        about: 'Write your summary here...',
        experience: [],
        skills: []
      });
    }
  };

  const scoreData = calculateProfileScore(profile);

  const renderWorkbenchTab = () => {
    switch (activeTab) {
      case 'basics':
        return <BasicsForm profile={profile} updateProfile={updateProfile} />;
      case 'headline':
        return <HeadlineStudio profile={profile} updateProfile={updateProfile} />;
      case 'about':
        return <AboutWorkbench profile={profile} updateProfile={updateProfile} />;
      case 'experience':
        return <ExperienceEnhancer profile={profile} updateProfile={updateProfile} />;
      case 'skills':
        return <SkillManager profile={profile} updateProfile={updateProfile} />;
      case 'analytics':
        return <ScoreAnalytics scoreData={scoreData} />;
      default:
        return <HeadlineStudio profile={profile} updateProfile={updateProfile} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col antialiased selection:bg-blue-500 selection:text-white">
      {/* Top Header */}
      <Header
        profile={profile}
        onSelectPreset={handleSelectPreset}
        onReset={handleReset}
        scoreData={scoreData}
        onOpenExportModal={() => setIsExportOpen(true)}
      />

      {/* Main Workspace Layout */}
      <main className="grow max-w-7xl w-full mx-auto p-4 lg:p-6 flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Navigation Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          scoreData={scoreData}
        />

        {/* Center Column: Editor Workbench */}
        <section className="grow lg:w-[48%] space-y-6">
          {renderWorkbenchTab()}
        </section>

        {/* Right Column: Live LinkedIn Mock Preview Card */}
        <section className="lg:w-[42%] shrink-0 sticky top-20 self-start">
          <ProfilePreviewCard profile={profile} />
        </section>

      </main>

      {/* Export Modal */}
      {isExportOpen && (
        <ExportModal
          profile={profile}
          onClose={() => setIsExportOpen(false)}
        />
      )}
    </div>
  );
}
