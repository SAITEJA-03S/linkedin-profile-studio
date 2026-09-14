export const PRESET_PROFILES = {
  software_engineer: {
    id: "software_engineer",
    label: "Senior Software Engineer / Tech Lead",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    bannerGradient: "from-blue-600 via-indigo-700 to-slate-900",
    bannerPattern: "tech",
    name: "Alex Morgan",
    pronouns: "he/him",
    headline: "Senior Staff Software Engineer @ CloudTech | Distributed Systems, Go, K8s & High-Throughput Microservices | Ex-Stripe | Speaker & Tech Mentor",
    location: "San Francisco, California, United States",
    industry: "Computer Software",
    currentCompany: "CloudTech Platform Solutions",
    education: "B.S. Computer Science, UC Berkeley",
    website: "https://alexmorgan.dev",
    openToWork: true,
    targetRole: "Staff / Principal Software Engineer",
    
    about: `🚀 Passionate Software Architect with 8+ years building enterprise-scale cloud systems processing 5B+ daily requests. Specializing in Go, Distributed Databases, Kubernetes, and low-latency API architectures.

Key Achievements:
• Re-engineered core billing pipeline at Stripe, cutting p99 latency from 450ms to 42ms and saving $1.4M in infrastructure costs.
• Spearheaded transition to event-driven architecture (Kafka + Event Sourcing), reducing system downtime by 99.9%.
• Mentored 15+ engineers to promotion; active contributor to CNCF ecosystem projects with 2.5k+ GitHub stars.

Core Technical Stack:
⚡ Languages: Go, TypeScript, Python, Rust
⚡ Infrastructure: Kubernetes, AWS, Terraform, Docker, Kafka, Redis, PostgreSQL
⚡ Architecture: Microservices, Event-Driven, DDD, API Gateway Design

Open for advisory roles, tech talks, and strategic tech leadership opportunities. Feel free to connect or email alex@morgan-tech.io!`,

    experience: [
      {
        id: "exp-1",
        title: "Senior Staff Software Engineer",
        company: "CloudTech Platform Solutions",
        employmentType: "Full-time",
        startDate: "2023-01",
        endDate: "Present",
        location: "San Francisco, CA (Hybrid)",
        description: "Leading the core messaging infrastructure team of 12 engineers building real-time event streaming systems.",
        bullets: [
          "Architected real-time event streaming engine handling 120,000 req/sec with 99.999% uptime, serving 14M active monthly users.",
          "Reduced cloud infrastructure expenditure by 34% ($850K annually) through memory optimization and ARM64 migration.",
          "Pioneered internal Developer Experience platform, cutting average deployment lead time from 4 days to 18 minutes."
        ],
        skills: ["Go", "Kubernetes", "Apache Kafka", "System Architecture", "AWS"]
      },
      {
        id: "exp-2",
        title: "Senior Software Engineer",
        company: "Stripe",
        employmentType: "Full-time",
        startDate: "2020-04",
        endDate: "2022-12",
        location: "San Francisco, CA",
        description: "Payments core platform & global API reliability.",
        bullets: [
          "Refactored legacy transaction validation service in Go, improving throughput by 4.2x under peak Black Friday load.",
          "Designed multi-region failover automation strategy eliminating single-region outage dependencies across 4 global regions.",
          "Authored comprehensive API standard guidelines adopted by 200+ product engineers across EMEA and Americas teams."
        ],
        skills: ["Go", "Distributed Systems", "PostgreSQL", "Redis", "Microservices"]
      }
    ],

    educationList: [
      {
        id: "edu-1",
        school: "University of California, Berkeley",
        degree: "Bachelor of Science (B.S.)",
        fieldOfStudy: "Computer Science & Electrical Engineering",
        startDate: "2012",
        endDate: "2016",
        activities: "Association for Computing Machinery (ACM) President, Hackathon Lead Winner 2015"
      }
    ],

    skills: [
      { name: "Distributed Systems Architecture", score: 98, endorsedCount: 42, pinned: true },
      { name: "Go (Golang)", score: 95, endorsedCount: 56, pinned: true },
      { name: "Kubernetes & Cloud Native", score: 92, endorsedCount: 38, pinned: true },
      { name: "High-Throughput Microservices", score: 90, endorsedCount: 29, pinned: true },
      { name: "System Design & Optimization", score: 94, endorsedCount: 31, pinned: true },
      { name: "AWS Cloud Infrastructure", score: 88, endorsedCount: 22, pinned: false },
      { name: "Apache Kafka & Event Streaming", score: 87, endorsedCount: 19, pinned: false },
      { name: "PostgreSQL & Database Tuning", score: 85, endorsedCount: 24, pinned: false },
      { name: "TypeScript & React", score: 82, endorsedCount: 18, pinned: false },
      { name: "Technical Leadership & Mentorship", score: 91, endorsedCount: 35, pinned: false }
    ],

    featured: [
      {
        title: "Building Resilient Microservices at Scale (Tech Conference 2024 Keynote)",
        type: "Link",
        description: "Watch the 45-minute keynote presentation on high-availability patterns in cloud native Go apps.",
        url: "https://youtube.com/watch?v=demo",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80"
      }
    ]
  },

  product_manager: {
    id: "product_manager",
    label: "Senior Product Manager (SaaS & FinTech)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    bannerGradient: "from-purple-700 via-pink-600 to-slate-900",
    bannerPattern: "growth",
    name: "Elena Rostova",
    pronouns: "she/her",
    headline: "Senior Product Manager @ PayPulse | Scaling B2B SaaS ARR $10M → $45M | Product-Led Growth (PLG), UX & Data Analytics | Ex-PayPal",
    location: "New York, New York, United States",
    industry: "Financial Services / Technology",
    currentCompany: "PayPulse Global",
    education: "MBA, Columbia Business School | B.S. Finance, NYU Stern",
    website: "https://elenarostova.pm",
    openToWork: false,
    targetRole: "Director of Product Management",

    about: `💡 Product Leader with 7+ years turning complex market problems into beloved software products. Driven by data, customer empathy, and high-velocity iteration.

What I Do:
• Product Strategy & Roadmap Execution: Delivered 0-to-1 enterprise products and scaled high-volume consumer flows.
• Product-Led Growth (PLG): Spearheaded freemium self-serve checkout funnel that increased user conversion by +68%.
• Data-Driven Prioritization: Championed North Star metric alignment across Design, Engineering, Marketing, and Sales.

Highlights & Metrics:
📈 Owned product line generating $45M ARR with 120% Net Revenue Retention (NRR).
📈 Launched AI-driven invoice reconciliation feature used by 85,000 business clients monthly.
📈 Speaker at Product School & Mind the Product NYC.

Let's discuss SaaS metrics, PLG strategies, or product leadership!`,

    experience: [
      {
        id: "exp-pm-1",
        title: "Senior Product Manager",
        company: "PayPulse Global",
        employmentType: "Full-time",
        startDate: "2021-08",
        endDate: "Present",
        location: "New York, NY",
        description: "Leading the Merchant Growth & Self-Serve Experience group.",
        bullets: [
          "Accelerated annual recurring revenue (ARR) from $10M to $45M in 24 months by launching self-serve onboarding.",
          "Conducted 120+ user research sessions, redesigning payment workflow to lower drop-off rate by 28%.",
          "Managed cross-functional team of 18 (Engineers, Designers, Data Scientists) delivering on quarterly OKRs."
        ],
        skills: ["Product Strategy", "Product-Led Growth", "A/B Testing", "Mixpanel", "User Research"]
      }
    ],

    educationList: [
      {
        id: "edu-pm-1",
        school: "Columbia Business School",
        degree: "Master of Business Administration (MBA)",
        fieldOfStudy: "Technology & Product Management",
        startDate: "2017",
        endDate: "2019",
        activities: "Tech Club Vice VP, Women in Business Fellow"
      }
    ],

    skills: [
      { name: "Product Strategy & Vision", score: 96, endorsedCount: 51, pinned: true },
      { name: "Product-Led Growth (PLG)", score: 94, endorsedCount: 44, pinned: true },
      { name: "Data Analytics & SQL (Mixpanel/Amplitude)", score: 90, endorsedCount: 33, pinned: true },
      { name: "Agile & Scrum Roadmap Management", score: 92, endorsedCount: 39, pinned: true },
      { name: "Customer Discovery & UX Research", score: 89, endorsedCount: 28, pinned: true },
      { name: "Go-To-Market Strategy (GTM)", score: 87, endorsedCount: 25, pinned: false },
      { name: "Wireframing & Prototyping (Figma)", score: 84, endorsedCount: 19, pinned: false }
    ],

    featured: [
      {
        title: "The Ultimate Guide to PLG Funnel Optimization",
        type: "Article",
        description: "Published on Mind the Product - read by over 45k product professionals.",
        url: "https://medium.com",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
      }
    ]
  },

  data_scientist: {
    id: "data_scientist",
    label: "Lead AI & Machine Learning Scientist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    bannerGradient: "from-teal-600 via-emerald-700 to-slate-900",
    bannerPattern: "ai",
    name: "Dr. Marcus Chen",
    pronouns: "he/him",
    headline: "Lead AI Scientist @ NeuralLabs | LLM Fine-Tuning, RAG, PyTorch & MLOps | Ph.D. Stanford | Published NeurIPS Researcher",
    location: "Austin, Texas, United States",
    industry: "Artificial Intelligence & Research",
    currentCompany: "NeuralLabs AI",
    education: "Ph.D. Computer Science (AI/ML), Stanford University",
    website: "https://marcuschen-ai.github.io",
    openToWork: true,
    targetRole: "Head of AI Research / Principal ML Scientist",

    about: `🧠 Artificial Intelligence Researcher & Practitioner specializing in Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Scalable MLOps Infrastructure.

Research & Industry Impact:
• Authored 12+ peer-reviewed papers published in NeurIPS, ICML, and CVPR with 1,400+ citations.
• Built production RAG architecture answering 5M monthly domain-specific queries with 94.2% factual precision.
• Optimized 70B parameter model latency by 3.8x using TensorRT-LLM and custom quantization techniques.

Specializations:
🔬 Deep Learning: PyTorch, Transformers, Hugging Face, vLLM, LangChain, LlamaIndex
🔬 MLOps & Infrastructure: MLflow, Kubeflow, Triton Inference Server, Ray, Docker, GCP
🔬 Advanced Analytics: Python, SQL, C++, Vector DBs (Pinecone, Qdrant, Milvus)

Let's collaborate on cutting-edge AI innovations and enterprise LLM integrations!`,

    experience: [
      {
        id: "exp-ds-1",
        title: "Lead AI Scientist",
        company: "NeuralLabs AI",
        employmentType: "Full-time",
        startDate: "2022-03",
        endDate: "Present",
        location: "Austin, TX",
        description: "Directing the Generative AI Applications research unit.",
        bullets: [
          "Developed enterprise RAG system incorporating fine-tuned open-source models, improving response accuracy by 32%.",
          "Reduced GPU compute hosting cost by $600K/year through dynamic batching and INT8/FP8 model quantization.",
          "Led team of 6 PhD researchers delivering 3 patent applications in multimodal retrieval."
        ],
        skills: ["PyTorch", "LLMs", "RAG Architecture", "Vector Databases", "MLOps"]
      }
    ],

    educationList: [
      {
        id: "edu-ds-1",
        school: "Stanford University",
        degree: "Doctor of Philosophy (Ph.D.)",
        fieldOfStudy: "Computer Science (Machine Learning)",
        startDate: "2016",
        endDate: "2021",
        activities: "Stanford AI Lab (SAIL), Outstanding Dissertation Award"
      }
    ],

    skills: [
      { name: "Generative AI & LLMs", score: 99, endorsedCount: 68, pinned: true },
      { name: "PyTorch & Deep Learning Frameworks", score: 97, endorsedCount: 60, pinned: true },
      { name: "RAG & Vector Search Architecture", score: 95, endorsedCount: 45, pinned: true },
      { name: "MLOps & GPU Inference Optimization", score: 92, endorsedCount: 38, pinned: true },
      { name: "Python & Scientific Computing (NumPy/Pandas)", score: 98, endorsedCount: 52, pinned: true }
    ],

    featured: [
      {
        title: "Efficient Multi-Modal RAG Systems (NeurIPS 2023 Paper)",
        type: "Publication",
        description: "Peer-reviewed research paper on low-latency vector retrieval mechanisms.",
        url: "https://arxiv.org",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80"
      }
    ]
  }
};

export const ACTION_VERBS = {
  leadership: ["Spearheaded", "Architected", "Pioneered", "Orchestrated", "Championship", "Directed", "Championed", "Mobilized", "Transformed", "Founded"],
  technical: ["Engineered", "Implemented", "Refactored", "Optimized", "Automated", "Deployed", "Migrated", "Benchmarked", "Configured", "Standardized"],
  growth: ["Accelerated", "Scaled", "Boosted", "Maximized", "Generated", "Expanded", "Captured", "Outperformed", "Multiplied", "Elevated"],
  efficiency: ["Streamlined", "Consolidated", "Eliminated", "Reduced", "Mitigated", "Automated", "Shortened", "Economized", "Slashed", "Simplified"]
};

export const HEADLINE_FORMULAS = [
  {
    name: "Standard Impact Formula",
    formula: "[Target Role] @ [Company/Industry] | [Top 2-3 Core Skills] | [Key Quantifiable Result or Distinction]",
    example: "Senior Staff Engineer @ CloudTech | Distributed Systems, Go & K8s | Cut Infra Costs by $1.4M"
  },
  {
    name: "Value Proposition Formula",
    formula: "Helping [Target Audience/Clients] achieve [Core Result] using [Specialized Expertise] | [Credential/Ex-Company]",
    example: "Helping FinTech SaaS companies scale ARR $10M→$50M through Product-Led Growth & UX | Ex-PayPal"
  },
  {
    name: "Keyword Heavy (SEO Recruiter Optimized)",
    formula: "[Primary Role] | [Skill 1] • [Skill 2] • [Skill 3] | [Certifications / Education] | [Mission Statement]",
    example: "Lead AI Scientist | GenAI, LLMs, RAG, PyTorch, MLOps | Ph.D. Stanford | Building Ethical AI Systems"
  }
];

export const SUMMARY_TEMPLATES = [
  {
    id: "storyteller",
    label: "Storyteller & Visionary",
    description: "Engaging narrative hook focusing on passion, career evolution, and mission.",
    template: `🚀 I build products at the intersection of [Industry/Domain] and [Core Technology/Skill]. With [X]+ years of experience, my mission is to [Core Value Statement].

Key Highlights:
• [Major Achievement 1 with metrics]
• [Major Achievement 2 with metrics]
• [Leadership or Tech Highlight]

Core Stack & Strengths:
⚡ Tech & Tools: [Skill 1], [Skill 2], [Skill 3]
⚡ Leadership: [Capability 1], [Capability 2]

Outside of work, I am passionate about [Hobby/Community involvement]. Feel free to connect or send a message!`
  },
  {
    id: "executive",
    label: "Executive & Results-Driven Leader",
    description: "Direct, high-impact overview highlighting revenue, P&L, team leadership, and strategy.",
    template: `Strategic [Role Title] with proven track record of driving revenue growth, operational efficiency, and scaling cross-functional teams across [Industry].

Core Competencies:
📈 Strategic Planning & Execution | P&L Management ($[X]M+)
📈 Team Building & Talent Retention (scaled teams from [X] to [Y])
📈 Cross-Functional Leadership & Board Presentations

Proven Impact:
• Delivered $[X]M in new revenue by executing [Key Strategy].
• Decreased operational overhead by [Y]% via workflow automation and platform standardization.

Looking to connect with fellow industry executives and innovative founders.`
  },
  {
    id: "technical_deep_dive",
    label: "Technical Specialist / Builder",
    description: "Deep dive into architecture, tools, frameworks, and engineering craft.",
    template: `Hand-on [Role Title] specializing in [Core Domain]. Focused on building resilient, scalable, and maintainable systems under heavy load.

Technical Toolkit:
🛠️ Languages: [Lang 1], [Lang 2], [Lang 3]
🛠️ Frameworks & Infra: [Tool 1], [Tool 2], [Tool 3]
🛠️ Architecture: [Pattern 1], [Pattern 2]

Engineering Achievements:
• Re-architected legacy system resulting in [X]% throughput improvement.
• Contributor to open source projects including [Project Name].

Always interested in discussing system design, performance tuning, and technical challenges.`
  }
];
