import { ArrowLeft, ExternalLink } from "lucide-react";

interface CaseStudyDetailProps {
  caseStudy: string;
  onBack: () => void;
}

const caseStudies: Record<string, any> = {
  clothing: {
    title: "Clothing Catalyst",
    subtitle: "Product Lead",
    referenceUrl:
      "https://play.google.com/store/apps/details?id=com.uvstudio.clothing_catalyst&pcampaignid=web_share",
    problem:
      "Users face decision fatigue and wardrobe disorganization. They struggle to decide what to wear quickly and confidently using clothes they already own. Existing apps have high friction with uploading overhead and rigid filtering.",
    hypothesis:
      "By reducing the friction of digitization through auto-tagging and background removal, and providing context-aware suggestions, we can create a daily habit. Context-aware recommendations (weather, occasion) will yield better results than keyword search.",
    actions: [
      "Launched MVP (v0) to gather initial feedback from specific users",
      "Defined three core personas: The Busy Professional, The Style Seeker, The Practical Minimalist",
      "Implemented auto-tagging for items (type, fabric, color, seasonality)",
      "Designed contextual home screen with mood and occasion chips",
      "Integrated weather APIs for temperature-based recommendations",
      "Set up background removal and color extraction infrastructure",
    ],
    outcome:
      "v0 feedback revealed UI/UX gaps in onboarding, feature gaps (missing edit functionality), and demand for social features. Validated that users think destination/occasion-based rather than rigid filters.",
    learnings:
      "Education is necessary—users need tooltips for fashion terminology. Color nuance matters significantly. Context is destination-based. Onboarding must immediately convey fashion purpose or users lose connection.",
  },
  wellnest: {
    title: "Wellnest",
    subtitle: "Mental Wellness Tracker",
    referenceUrl:
      "https://www.linkedin.com/posts/kunalvardani_wellnest-portfolio-deck-activity-7332624031470276613-0DXv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEW2etABYQAxGwOS62FUWzbncyaJcMFHeBU",
    problem:
      "Working professionals struggle to consistently track mental wellness and maintain healthy habits.",
    hypothesis:
      "Simple check-ins, streak rewards, and lock-screen widgets increase engagement.",
    actions: [
      "Conducted 10+ interviews",
      "Defined 4 personas",
      "Designed 5+ engagement features",
      "Built interactive prototype",
    ],
    outcome:
      "Improved user motivation and daily check-in consistency during testing",
    learnings:
      "Habit loops and micro-interactions drive retention better than complex dashboards",
  },
  emendo: {
    title: "Emendo AI",
    subtitle: "GTM & Product Discovery",
    problem:
      "Cross-team ambiguity between engineering and GTM teams led to misaligned product features and unclear value propositions.",
    hypothesis:
      "Standardized requirement formats and improved AI workflow discoverability would align teams and clarify product positioning.",
    actions: [
      "Conducted customer discovery calls",
      "Created requirement scoping templates",
      "Standardized USP and bug reporting formats",
      "Optimized schema for AI workflow discoverability",
    ],
    outcome:
      "Reduced cross-team ambiguity and improved alignment between engineering and GTM",
    learnings:
      "Clear documentation and structured processes are essential for cross-functional collaboration",
  },
  debales: {
    title: "Debales AI",
    subtitle: "Execution & Delivery",
    problem:
      "Managing 5 cross-functional teams without structured processes led to inefficiencies and missed deadlines.",
    hypothesis:
      "Implementing sprint rituals and clear tracking would improve team coordination and velocity.",
    actions: [
      "Orchestrated 5 cross-functional teams",
      "Implemented structured sprint planning",
      "Introduced tracking and accountability mechanisms",
      "Optimized team communication workflows",
    ],
    outcome:
      "Improved sprint efficiency by 20% and achieved 95% sprint completion rate",
    learnings:
      "Consistent rituals and clear ownership dramatically improve execution velocity",
  },
  credpe: {
    title: "CredPe",
    subtitle: "Behavioral Fintech Experiment",
    referenceUrl:
      "https://www.linkedin.com/posts/kunalvardani_project-deck-for-credpe-activity-7330691289635520512-_QkV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEW2etABYQAxGwOS62FUWzbncyaJcMFHeBU",
    problem:
      "Credit card users often miss payment deadlines, leading to penalties and reduced credit scores.",
    hypothesis:
      "Behavioral nudges and timely reminders can increase on-time payment rates.",
    actions: [
      "Conducted 30+ user interviews",
      "Designed behavioral nudge features",
      "Created prototype with reminder system",
      "Validated concepts through user testing",
    ],
    outcome:
      "Users showed higher payment intent and engagement with nudge-based reminders",
    learnings:
      "Behavioral psychology principles can significantly influence financial habits when applied correctly",
  },
  mapit: {
    title: "MapIt",
    subtitle: "Strategy & MVP Launch",
    problem:
      "Users needed a reliable way to set location-based reminders but existing solutions were complex.",
    hypothesis:
      "A simple, intuitive MVP focused on core location reminder functionality would resonate with users.",
    actions: [
      "Built MVP with team of 4",
      "Owned backend architecture decisions",
      "Conducted iterative user testing",
      "Prepared competition presentation",
    ],
    outcome:
      "Won 1st Prize at product showcase, rated highly by 80% of judges",
    learnings:
      "Focused MVPs that solve one problem well outperform feature-heavy alternatives",
  },
};

export function CaseStudyDetail({
  caseStudy,
  onBack,
}: CaseStudyDetailProps) {
  const study = caseStudies[caseStudy];

  if (!study) {
    return (
      <div className="p-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <p>Case study not found</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 mb-6 sm:mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Initiatives
      </button>

      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {study.title}
          </h1>
          {study.referenceUrl && (
            <a
              href={study.referenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-fit"
            >
              <ExternalLink className="w-4 h-4" />
              View Reference
            </a>
          )}
        </div>
        <p className="text-base sm:text-lg text-gray-600">
          {study.subtitle}
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Problem
          </h2>
          <p className="text-sm sm:text-base text-gray-900">
            {study.problem}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Hypothesis
          </h2>
          <p className="text-sm sm:text-base text-gray-900">
            {study.hypothesis}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Actions
          </h2>
          <ul className="space-y-2">
            {study.actions.map(
              (action: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                >
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-sm sm:text-base text-gray-900">
                    {action}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Outcome
          </h2>
          <p className="text-sm sm:text-base text-gray-900">
            {study.outcome}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Learnings
          </h2>
          <p className="text-sm sm:text-base text-gray-900">
            {study.learnings}
          </p>
        </div>
      </div>
    </div>
  );
}