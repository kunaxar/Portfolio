export function Skills() {
  const skillGroups = [
    {
      category: 'Discovery',
      skills: ['User interviews', 'Personas', 'Journey mapping', 'Usability testing'],
    },
    {
      category: 'Execution',
      skills: ['Roadmapping', 'Prioritization', 'Sprint planning', 'Requirement scoping', 'OKRs'],
    },
    {
      category: 'Growth',
      skills: ['GTM strategy', 'Funnel analysis', 'KPI tracking', 'Analytics'],
    },
    {
      category: 'Tools',
      skills: ['Notion', 'Jira', 'Asana', 'Figma', 'SQL', 'Vercel', 'Canva', 'Grafana', 'GitHub'],
    },
    {
      category: 'Technical',
      skills: ['HTML', 'CSS', 'JavaScript', 'API basics'],
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Skills</h1>
        <p className="text-sm sm:text-base text-gray-600">Capabilities and technical stack</p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {skillGroups.map((group, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 sm:mb-4">
              {group.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm bg-gray-100 text-gray-700 border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}