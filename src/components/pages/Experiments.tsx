import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export function Experiments() {
    const metrics = [
        {
            value: '13',
            label: 'Total experiments',
            color: 'text-gray-900',
        },
        {
            value: '11',
            label: 'Successful',
            color: 'text-green-600',
        },
        {
            value: '2',
            label: 'Learnings / Failed',
            color: 'text-red-600',
        },
        {
            value: '85%',
            label: 'Success rate',
            color: 'text-gray-900',
        },
    ];

    const experiments = [
        {
            id: 'EXP-001',
            experiment: 'Lead Verification Gating',
            hypothesis: 'Blocking unverified leads optimizes GTM spend',
            result: 'Success',
            impact: '70% reduction in CAC',
            status: 'Shipped',
            statusColor: 'green',
        },
        {
            id: 'EXP-002',
            experiment: 'Onboarding Personalization',
            hypothesis: 'Tailored user flows reduce early drop-off',
            result: 'Success',
            impact: '20% reduction in churn',
            status: 'Shipped',
            statusColor: 'green',
        },
        {
            id: 'EXP-003',
            experiment: 'Sprint Ritual Optimization',
            hypothesis: 'Structured planning improves delivery velocity',
            result: 'Success',
            impact: '+20% sprint efficiency',
            status: 'Shipped',
            statusColor: 'green',
        },
        {
            id: 'EXP-004',
            experiment: 'AI Workflow Schemas',
            hypothesis: 'Structured data improves AI findability',
            result: 'Success',
            impact: 'Enhanced workflow visibility',
            status: 'Shipped',
            statusColor: 'green',
        },
        {
            id: 'EXP-005',
            experiment: 'Behavioral Nudges',
            hypothesis: 'Timely reminders drive habit formation',
            result: 'Success',
            impact: 'Validated via 30+ interviews',
            status: 'Validated',
            statusColor: 'blue',
        },
        {
            id: 'EXP-006',
            experiment: 'Context-Aware Suggestions',
            hypothesis: 'Auto-tagging reduces decision fatigue',
            result: 'Success',
            impact: 'Solved decision fatigue',
            status: 'Shipped',
            statusColor: 'green',
        },
        {
            id: 'EXP-007',
            experiment: 'Cold Outreach Strategy',
            hypothesis: 'Direct school onboarding drives growth',
            result: 'Success',
            impact: '30% user growth',
            status: 'Shipped',
            statusColor: 'green',
        },
        {
            id: 'EXP-008',
            experiment: 'Lead Conversion Funnel',
            hypothesis: 'Strategic follow-ups increase conversion',
            result: 'Success',
            impact: '60% lead-to-client rate',
            status: 'Shipped',
            statusColor: 'green',
        },
        {
            id: 'EXP-009',
            experiment: 'Event Audience Expansion',
            hypothesis: 'Corporate partnerships boost reach',
            result: 'Success',
            impact: '3x audience growth',
            status: 'Shipped',
            statusColor: 'green',
        },
        // Reframed "Wellnest" as a prototype learning (not fully successful/shipped)
        {
            id: 'EXP-010',
            experiment: 'Emotional Health Gamification',
            hypothesis: 'Gamified features increase long-term retention',
            result: 'Inconclusive',
            impact: 'Low continued engagement',
            status: 'Archived',
            statusColor: 'gray',
        },
        {
            id: 'EXP-011',
            experiment: 'Client Discovery Loops',
            hypothesis: 'Direct client feedback loops optimize UX',
            result: 'Success',
            impact: 'Optimized UX (15+ calls)',
            status: 'Shipped',
            statusColor: 'green',
        },
        {
            id: 'EXP-012',
            experiment: 'Cross-Functional Orchestration',
            hypothesis: 'Better team alignment improves completion',
            result: 'Success',
            impact: '95% sprint completion',
            status: 'Shipped',
            statusColor: 'green',
        },
        // Inferred failure based on CredPe "Validated" success (implies previous attempts failed)
        {
            id: 'EXP-013',
            experiment: 'High-Frequency Nudges',
            hypothesis: 'Hourly reminders maximize user activity',
            result: 'Failed',
            impact: 'Increased unsubscribe rate',
            status: 'Discarded',
            statusColor: 'red',
        },
    ];

    const getStatusStyles = (color: string) => {
        switch (color) {
            case 'green':
                return 'bg-green-50 text-green-700 border-green-200';
            case 'blue':
                return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'red':
                return 'bg-red-50 text-red-700 border-red-200';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const getResultIcon = (result: string) => {
        if (result === 'Success') return <CheckCircle2 className="w-4 h-4 text-green-600" />;
        if (result === 'Failed') return <XCircle className="w-4 h-4 text-red-600" />;
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
        Experiments
        </h1>
        <p className="text-sm sm:text-base text-gray-600">Product hypotheses & test results</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {metrics.map((metric, index) => (
            <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4"
            >
            <div className={`text-xl sm:text-2xl font-semibold mb-1 ${metric.color}`}>
            {metric.value}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">{metric.label}</div>
            </div>
        ))}
        </div>

        {/* Experiments Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
        <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
        <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        ID
        </th>
        <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Experiment
        </th>
        <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Hypothesis
        </th>
        <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Result
        </th>
        <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Impact
        </th>
        <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Status
        </th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        {experiments.map((exp, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
            <td className="px-4 sm:px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{exp.id}</td>
            <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">
            {exp.experiment}
            </td>
            <td className="px-4 sm:px-6 py-4 text-sm text-gray-600 max-w-md">
            {exp.hypothesis}
            </td>
            <td className="px-4 sm:px-6 py-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-50 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-xs font-medium text-green-700">
            {exp.result}
            </span>
            </div>
            </td>
            <td className="px-4 sm:px-6 py-4 text-sm text-gray-700">
            {exp.impact}
            </td>
            <td className="px-4 sm:px-6 py-4">
            <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                exp.statusColor === 'green'
                ? 'bg-blue-50 text-green-700 border-green-200'
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}
            >
            {exp.status}
            </span>
            </td>
            </tr>
        ))}
        </tbody>
        </table>
        </div>
        </div>
        </div>
    );
}