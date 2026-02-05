import { MetricCard } from "../MetricCard";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Overview() {
  const [expandedInitiative, setExpandedInitiative] = useState<
    number | null
  >(null);

  const metrics = [
    {
      value: "+25%",
      label: "Growth in paid userbase",
      source: "EmendoAI",
    },
    {
      value: "-20%",
      label: "Onboarding Churn Rate",
      source: "EmendoAI",
    },
    {
      value: "+20%",
      label: "Sprint Efficiency Improvement",
      source: "DebalesAI",
    },
    {
      value: "+30%",
      label: "User Growth Delivered",
      source: "SKIM",
    },
    {
      value: "₹5lacs+",
      label: "Revenue generated via sponsorships",
      source: "President, Student Activity Council",
    },
    {
      value: "Top 10 / 500",
      label: "Product Space National Challenge",
      source: "National Competition",
    },
  ];

  const initiatives = [
    {
      title: "Emendo AI — Product Management Intern",
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

    {
      title: "Clothing Catalyst — Product Lead",
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
    {
      title: "Debales AI — Project Management Intern",
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
    {
      title: "CredPe — Behavioral Nudge Fintech Prototype",
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
    {
      title: "Wellnest — Mental Wellness Tracker",
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
  ];

  const toggleInitiative = (index: number) => {
    setExpandedInitiative(
      expandedInitiative === index ? null : index,
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          Kunal Vardani
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-3">
          Product • Strategy • Analytics • GTM • Growth
        </p>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl">
          I build and scale user-centric products through
          structured discovery, rapid experimentation, and
          measurable outcomes.
        </p>
      </div>

      <div className="mb-8 sm:mb-12">
        <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              label={metric.label}
              source={metric.source}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          HIGHLIGHTS
        </h2>
        <div className="space-y-3">
          {initiatives.map((initiative, index) => {
            const isInProgress = index < 2; // First two are in progress (Emendo and Clothing Catalyst)
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleInitiative(index)}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors ${
                    !isInProgress ? "opacity-75" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        isInProgress
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    ></div>
                    <h3
                      className={`font-semibold text-sm sm:text-base truncate ${
                        isInProgress
                          ? "text-gray-900"
                          : "text-gray-500"
                      }`}
                    >
                      {initiative.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{
                      rotate:
                        expandedInitiative === index ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {expandedInitiative === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4 sm:space-y-6 border-t border-gray-100">
                        <div className="pt-4 sm:pt-6">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Problem
                          </h4>
                          <p className="text-sm sm:text-base text-gray-900">
                            {initiative.problem}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Hypothesis
                          </h4>
                          <p className="text-sm sm:text-base text-gray-900">
                            {initiative.hypothesis}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Actions
                          </h4>
                          <ul className="space-y-2">
                            {initiative.actions.map(
                              (action, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2"
                                >
                                  <span className="text-gray-400 mt-1">
                                    •
                                  </span>
                                  <span className="text-sm sm:text-base text-gray-900">
                                    {action}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Outcome
                          </h4>
                          <p className="text-sm sm:text-base text-gray-900">
                            {initiative.outcome}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Learnings
                          </h4>
                          <p className="text-sm sm:text-base text-gray-900">
                            {initiative.learnings}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}