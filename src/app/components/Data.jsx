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
            p6: "Presented technical and business-centric work to stakeholders bi-weekly on a team of 16+ engineers.",
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
        title: "Read the system before changing it.",
        body: "I spend time understanding how things fit together before I write a line. This is how you avoid breaking something upstream.",
    },
    {
        id: 2,
        title: "Write for the person reading it next.",
        body: "Documentation, commit messages, READMEs — I treat them as part of the work, not an afterthought.",
    },
    {
        id: 3,
        title: "Present the work.",
        body: "I give bi-weekly stakeholder updates and structure my communication to be clear to both technical and non-technical audiences.",
    },
    {
        id: 4,
        title: "Work at the seam.",
        body: "I'm comfortable in the space between engineering and the people it serves — whether that's a user, a teammate, or a business stakeholder.",
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