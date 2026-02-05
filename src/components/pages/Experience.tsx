import {
  Briefcase,
  Users,
  Calendar,
  Award,
} from "lucide-react";

export function Experience() {
  const timeline = [
    {
      year: "2025–Present",
      title: "Emendo AI",
      type: "work",
      role: "Product Management Intern",
      skills: [
        "User interviews",
        "Journey Mapping",
        "GTM strategy",
        "Analytics",
        "Figma",
        "Grafana",
        "Sentry",
      ],
      achievements: [
        "Reduction in CAC by 70% of GTM by blocking unverified leads",
        "Improved AI workflow discoverability via schema optimization",
        "Optimized UX via 15+ client discovery calls",
        "Cut onboarding churn 20% via personalization",
        "Expanded paid user base by 25%",
      ],
    },
    {
      year: "2023–Present",
      title: "AASF(Techno-Managerial Forum)",
      type: "leadership",
      role: "Public Relations Lead",
      skills: [
        "Adobe Photoshop",
        "Public Speaking",
        "Public Relations",
      ],
      achievements: [
        "Led coordination of 2 inter-campus forum chapters",
        "Facilitated participation of over 2500+ students across more than 25 technical and management-focused sessions",
      ],
    },
    {
      year: "2025",
      title: "DebalesAI",
      type: "work",
      role: "Project Management Intern",
      skills: [
        "Cross Team Collaboration",
        "Sprint planning",
        "Jira",
        "Prioritization",
        "Asana",
      ],
      achievements: [
        "Orchestrated 5 cross-functional teams",
        "Improved sprint efficiency by 20%",
        "Achieved 95% sprint completion",
      ],
    },
    {
      year: "2024–2025",
      title: "Student Activity Council",
      type: "leadership",
      role: "President",
      skills: ["Event Management", "Stakeholder Management"],
      achievements: [
        "Coordinated 3 major institute events including the techno-managerial fest Infotsav, and sports events Urja & Twaran",
        "Organized 40+ events, demonstrating consistent leadership",
      ],
    },
    {
      year: "2024",
      title: "Infotsav",
      type: "leadership",
      role: "Coordinator",
      skills: [
        "Stakeholder Management",
        "Adobe Photoshop",
        "Client Communication",
      ],
      achievements: [
        "Raised ₹5lacs+ through sponsorship acquisition and corporate partnerships",
        "Achieved 3x audience growth from last time",
      ],
    },

    {
      year: "2023",
      title: "SKIM",
      type: "work",
      role: "Business Development Intern",
      skills: [
        "Client Communication",
        "Sales",
        "Cold Reachout",
      ],
      achievements: [
        "Onboarded 5+ schools across multiple regions",
        "Drove 30% user growth through strategic initiatives",
        "Converted 60% leads to active paying clients",
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return Briefcase;
      case "leadership":
        return Users;
      default:
        return Briefcase;
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          Experience & Positions
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Professional timeline of Roles & Responsiblities
        </p>
      </div>
      {/* Legend */}
      <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-900 rounded"></div>
          <span>Work Experience</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-600 rounded"></div>
          <span>Leadership Positions</span>
        </div>
      </div>
      {/* Experience Items */}
      <div className="space-y-3">
        {timeline.map((item, index) => {
          const Icon = getIcon(item.type);
          const isWork = item.type === "work";

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              {/* Header with Company, Tags, and Timeline */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div
                    className={`w-8 h-8 ${isWork ? "bg-gray-900" : "bg-blue-600"} rounded flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      {/* Skill Tags - Desktop only */}
                      <div className="hidden lg:flex flex-wrap gap-1.5">
                        {item.skills.map((skill, i) => {
                          return (
                            <span
                              key={i}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs border bg-gray-50/70 text-gray-700 border-gray-200/50"
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-500 px-2 py-1 bg-gray-100 rounded flex-shrink-0 w-fit">
                  {item.year}
                </span>
              </div>

              {/* Achievements */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                {item.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
                  >
                    <span className="text-gray-400 mt-0.5">
                      •
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags - Mobile only, below achievements */}
              <div className="flex lg:hidden flex-wrap gap-1.5 mt-3">
                {item.skills.map((skill, i) => {
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs border bg-gray-50/70 text-gray-700 border-gray-200/50"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}