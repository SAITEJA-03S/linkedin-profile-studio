/**
 * Calculate LinkedIn Profile Strength Score (0 to 100)
 * Evaluates Headline, About, Experience, Skills, Location, etc.
 */
export function calculateProfileScore(profile) {
  if (!profile) return { totalScore: 0, breakdown: {}, feedback: [] };

  let score = 0;
  const feedback = [];
  const breakdown = {
    headline: 0,
    about: 0,
    experience: 0,
    skills: 0,
    basics: 0
  };

  // 1. Basics & Contact (Max 15 pts)
  if (profile.name?.trim()) breakdown.basics += 4;
  if (profile.location?.trim()) breakdown.basics += 4;
  if (profile.currentCompany?.trim()) breakdown.basics += 4;
  if (profile.website?.trim() || profile.openToWork) breakdown.basics += 3;

  if (breakdown.basics < 15) {
    feedback.push({
      type: "warning",
      category: "Basics",
      text: "Fill out your location, current company, and website to improve search visibility by 30%."
    });
  } else {
    feedback.push({
      type: "success",
      category: "Basics",
      text: "Basic contact and location info is complete!"
    });
  }

  // 2. Headline Analysis (Max 25 pts)
  const headlineLen = profile.headline?.length || 0;
  if (headlineLen >= 60 && headlineLen <= 220) {
    breakdown.headline += 15;
    // Check for metrics/numbers in headline
    if (/\d+/.test(profile.headline)) breakdown.headline += 5;
    // Check for role keywords
    if (profile.headline.includes("|") || profile.headline.includes("•") || profile.headline.includes("@")) {
      breakdown.headline += 5;
    }
  } else if (headlineLen > 0) {
    breakdown.headline += 8;
  }

  if (headlineLen < 60) {
    feedback.push({
      type: "warning",
      category: "Headline",
      text: "Headline is under 60 characters. Add key tech stack, role title, or quantifiable metric."
    });
  } else {
    feedback.push({
      type: "success",
      category: "Headline",
      text: "Strong, detailed headline with key separators and metrics."
    });
  }

  // 3. About / Summary (Max 25 pts)
  const aboutText = profile.about || "";
  const aboutWords = aboutText.trim().split(/\s+/).filter(Boolean).length;
  if (aboutWords >= 100 && aboutWords <= 400) {
    breakdown.about += 18;
  } else if (aboutWords > 30) {
    breakdown.about += 10;
  }

  // Check for bullet points or emojis in summary
  if (/•|⚡|🚀|📈|🛠️|\*/.test(aboutText)) breakdown.about += 4;
  // Check for call to action / contact email
  if (/@|connect|email|talk/i.test(aboutText)) breakdown.about += 3;

  if (aboutWords < 80) {
    feedback.push({
      type: "warning",
      category: "About",
      text: "Summary is too brief. Aim for 150–250 words telling your story, top wins, and core tech stack."
    });
  } else {
    feedback.push({
      type: "success",
      category: "About",
      text: "Rich, well-structured summary with strong readability."
    });
  }

  // 4. Experience Bullets (Max 20 pts)
  const expList = profile.experience || [];
  if (expList.length >= 2) {
    breakdown.experience += 10;
  } else if (expList.length === 1) {
    breakdown.experience += 5;
  }

  let totalBullets = 0;
  let bulletsWithMetrics = 0;
  expList.forEach(exp => {
    (exp.bullets || []).forEach(b => {
      totalBullets++;
      if (/\d+%|\$\d+|\d+x|\d+k|\d+M/i.test(b)) {
        bulletsWithMetrics++;
      }
    });
  });

  if (totalBullets >= 4) breakdown.experience += 5;
  if (bulletsWithMetrics >= 2) breakdown.experience += 5;

  if (bulletsWithMetrics < 2) {
    feedback.push({
      type: "warning",
      category: "Experience",
      text: "Add numbers or percentages (% saved, $ revenue, x throughput) to your experience bullet points."
    });
  } else {
    feedback.push({
      type: "success",
      category: "Experience",
      text: "Great metric-driven bullet points using the XYZ formula!"
    });
  }

  // 5. Skills & Endorsements (Max 15 pts)
  const skillsCount = (profile.skills || []).length;
  if (skillsCount >= 5) {
    breakdown.skills += 10;
  } else {
    breakdown.skills += skillsCount * 2;
  }
  const pinnedSkills = (profile.skills || []).filter(s => s.pinned).length;
  if (pinnedSkills >= 3) breakdown.skills += 5;

  if (skillsCount < 5) {
    feedback.push({
      type: "warning",
      category: "Skills",
      text: "Add at least 5 to 10 skills to appear in recruiter search filters."
    });
  } else {
    feedback.push({
      type: "success",
      category: "Skills",
      text: "Robust skill tag list with top pinned skills."
    });
  }

  const totalScore = breakdown.basics + breakdown.headline + breakdown.about + breakdown.experience + breakdown.skills;

  return {
    totalScore: Math.min(100, Math.max(0, totalScore)),
    breakdown,
    feedback
  };
}
