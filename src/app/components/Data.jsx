// components/Data.jsx
// CHECKLIST: Verify all bullet points match your current resume before committing.
// Placeholders marked with [FILL HERE] require your manual input.

export const experienceData = [
    {
        id: 1,
        title: "Software Engineer",
        employer: "Bloomberg LP",
        location: "New York, NY",
        tenure: "Sept. 2023 – Apr. 2026",
        description: {
            p1: "Built and maintained full-stack systems supporting internal productivity tools used by 27,000+ employees globally.",
            p2: "Led investigation of a production issue during a migration impacting 27,000+ users, identifying root causes across services and driving a safe staged rollout.",
            p3: "Improved SSL certificate renewal efficiency through documentation improvements and AI-assisted troubleshooting, enabling engineers to complete renewals up to 50% faster.",
            p4: "Contributed to infrastructure migrations including Oracle to Postgres, IAM modernization, and Exchange Online, implementing API changes across backend services.",
            p5: "Built an MCP server integrated with Copilot to retrieve event data across 5 internal APIs, delivering a working prototype with a new team on an unfamiliar codebase.",
            p6: "Worked across teams to support infrastructure migrations and improve engineering workflows on a team of 16+ engineers.",
        },
    },
    {
        id: 2,
        title: "Software Engineer Intern",
        employer: "Intuit Mailchimp",
        location: "Remote, GA",
        tenure: "May 2022 – May 2023",
        description: {
            p1: "Developed and improved frontend features for the Inbox UI using React and Node.js, enhancing performance and user experience.",
            p2: "Navigated a large production codebase to implement features using feature flags for safe rollout.",
            p3: "Collaborated with designers and engineers to build scalable, responsive web applications.",
            p4: "Participated in Agile ceremonies with 10+ team members.",
        },
    },
    {
        id: 3,
        title: "Leadership Coach Fellow",
        employer: "Hispanic Organization Promoting Education (HoPe)",
        location: "Remote",
        tenure: "June 2019 – June 2023",
        description: {
            p1: "Mentored 50+ high school students, providing tailored academic guidance.",
            p2: "Presented monthly leadership trainings to 12+ participants.",
            p3: "Onboarded 250+ chapter presidents with technical tools and operational fundamentals.",
        },
    },
];

export const highlightsData = [
    {
        id: 1,
        label: "Production Incident",
        title: "Migration Issue — 27,000+ Users",
        body: "Led the investigation of a production issue during a large-scale user data migration at Bloomberg. Identified root causes across services and coordinated a safe staged rollout to resolve the incident.",
        tags: ["Incident Response", "Full-Stack", "Cross-team"],
    },
    {
        id: 2,
        label: "Developer Tooling",
        title: "SSL Renewal Efficiency — 50% Faster",
        body: "Improved SSL certificate renewal workflows by rewriting documentation and introducing AI-assisted troubleshooting steps. Engineers completing renewals saw up to a 50% reduction in time.",
        tags: ["Documentation", "AI Tooling", "DevEx"],
    },
    {
        id: 3,
        label: "MCP / API Integration",
        title: "MCP Server + Copilot Integration",
        body: "Built a Model Context Protocol (MCP) server integrated with Copilot to process user queries and retrieve event data across 5 internal APIs. Ramped quickly on an unfamiliar codebase to deliver a working prototype.",
        tags: ["Python", "MCP", "API Integration"],
    },
];

export const howIWorkData = [
    {
        id: 1,
        title: "Understand the problem before touching the code.",
        body: "I read the system, trace the data, and ask the right questions before proposing a solution. Skipping this step is how you fix the wrong thing.",
    },
    {
        id: 2,
        title: "Break ambiguity into smaller, answerable questions.",
        body: "When a problem is unclear, I don't wait for it to resolve itself. I identify what I do and don't know, then move forward on what I can.",
    },
    {
        id: 3,
        title: "Ship something that works, then make it better.",
        body: "I favor pragmatic solutions over perfect ones — get it working, get it reviewed, improve it with more information. Done beats theorized.",
    },
    {
        id: 4,
        title: "Communicate clearly across the stack.",
        body: "I write for the person reading it next — whether that's documentation, a commit message, or an explanation to someone non-technical. Clarity is part of the job.",
    },
];

// Services section — commented out per current scope.
// Uncomment when ready to re-enable.
// export const serviceData = [
//   {
//     id: 1,
//     title: "Website Revamp",
//     description:
//       "Need to make some tweaks to an existing website? Need a brand new website for your business? Let's discuss solutions.",
//   },
//   {
//     id: 2,
//     title: "Computer Science Tutoring",
//     description:
//       "Data Structures, Algorithms, or coding interview prep. Let me know how I can help.",
//   },
//   {
//     id: 3,
//     title: "College Success Coaching",
//     description:
//       "Tips, techniques, and strategies you can use to succeed in college. I'm here to help.",
//   },
// ];