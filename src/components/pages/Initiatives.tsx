import { ArrowUpRight } from "lucide-react";

interface InitiativesProps {
  onSelectCase: (caseStudy: string) => void;
}

export function Initiatives({
  onSelectCase,
}: InitiativesProps) {
  const cases = [
    {
      id: "clothing",
      title: "Clothing Catalyst",
      metric: "Product Lead",
      summary:
        "Solved decision fatigue through auto-tagging and context-aware outfit suggestions.",
    },
    {
      id: "credpe",
      title: "CredPe",
      metric: "Behavioral Fintech Experiment",
      summary:
        "Validated nudges and reminders through 30+ interviews and testing.",
    },
    {
      id: "wellnest",
      title: "Wellnest",
      metric: "Wellness SaaS Prototype",
      summary:
        "Designed engagement features for emotional health tracking.",
    },
    {
      id: "mapit",
      title: "MapIt",
      metric: "Strategy & MVP Launch",
      summary: "Delivered full MVP and won competition.",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          Initiatives
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Case studies and key projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {cases.map((caseStudy) => (
          <div
            key={caseStudy.id}
            onClick={() => onSelectCase(caseStudy.id)}
            className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                {caseStudy.title}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
            </div>
            <div className="text-sm font-medium text-gray-600 mb-2">
              {caseStudy.metric}
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {caseStudy.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}