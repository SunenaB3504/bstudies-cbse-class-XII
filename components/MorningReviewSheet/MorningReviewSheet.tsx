import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { ChevronRight, Printer, AlertTriangle, Lightbulb, BookOpen, Scaling } from 'lucide-react';
import { ALL_UNITS } from '../../data';
import { CheatSheetItem } from '../../types';

interface MorningReviewSheetProps {
    onBack: () => void;
}

// Helper to determine the color theme based on the cheat sheet section title
const getSectionTheme = (title: string) => {
    const t = title.toLowerCase();

    if (t.includes('pitfall') || t.includes('trick') || t.includes('trap')) {
        return {
            bg: 'bg-rose-50',
            border: 'border-rose-200',
            iconBg: 'bg-rose-100',
            iconText: 'text-rose-600',
            titleText: 'text-rose-800',
            bulletPoint: 'text-rose-500',
            icon: <AlertTriangle className="w-5 h-5 text-rose-600" />
        };
    }

    if (t.includes('distinction') || t.includes('difference')) {
        return {
            bg: 'bg-amber-50',
            border: 'border-amber-200',
            iconBg: 'bg-amber-100',
            iconText: 'text-amber-600',
            titleText: 'text-amber-800',
            bulletPoint: 'text-amber-500',
            icon: <Scaling className="w-5 h-5 text-amber-600" />
        };
    }

    if (t.includes('definition') || t.includes('abbreviation')) {
        return {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            iconBg: 'bg-blue-100',
            iconText: 'text-blue-600',
            titleText: 'text-blue-800',
            bulletPoint: 'text-blue-500',
            icon: <BookOpen className="w-5 h-5 text-blue-600" />
        };
    }

    // Default (Core concepts, etc)
    return {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        iconBg: 'bg-purple-100',
        iconText: 'text-purple-600',
        titleText: 'text-purple-800',
        bulletPoint: 'text-purple-500',
        icon: <Lightbulb className="w-5 h-5 text-purple-600" />
    };
};

export const MorningReviewSheet: React.FC<MorningReviewSheetProps> = ({ onBack }) => {
    return (
        <div className="max-w-5xl mx-auto py-8 px-4 animate-in fade-in">
            {/* Action Bar - Hidden in Print */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-12 print:hidden gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <button
                    onClick={onBack}
                    className="text-xs font-black text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1 uppercase tracking-widest"
                >
                    <ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard
                </button>

                <div className="text-center sm:text-right">
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Morning Review Sheet</h1>
                    <p className="text-sm font-medium text-gray-500">All 12 Units • High-Yield Points</p>
                </div>

                <button
                    onClick={() => window.print()}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    <Printer className="w-5 h-5" /> Print / Save PDF
                </button>
            </div>

            {/* Print Header - Only visible in print */}
            <div className="hidden print:block text-center mb-8 border-b-2 border-gray-900 pb-4">
                <h1 className="text-4xl font-black text-gray-900 uppercase tracking-widest">BusinessMaster Class 12</h1>
                <h2 className="text-2xl font-medium text-gray-600 mt-2">Exam Morning Cheat Sheet</h2>
            </div>

            {/* Main Content Render */}
            <div className="space-y-12 print:space-y-8">
                {ALL_UNITS.map((unit, index) => (
                    <div
                        key={unit.id}
                        className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] print:shadow-none print:border-gray-300 print:rounded-none print:break-inside-avoid print:p-0 print:mb-12 print:border-none"
                    >
                        {/* Unit Header */}
                        <div className="flex items-center gap-4 mb-8 print:mb-4 border-b border-gray-100 print:border-gray-900 pb-4">
                            <div className="bg-gray-100 text-gray-900 font-black text-xl w-12 h-12 flex items-center justify-center rounded-xl print:rounded-none print:border border-gray-900 print:bg-white">
                                {unit.id}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                                {unit.name}
                            </h2>
                        </div>

                        {/* Cheat Sheet Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-6 print:text-sm">
                            {unit.cheatSheet.map((section: CheatSheetItem, secIdx: number) => {
                                const theme = getSectionTheme(section.title);
                                const points = section.points || section.content || [];

                                if (points.length === 0) return null;

                                return (
                                    <div
                                        key={secIdx}
                                        className={`rounded-2xl p-6 ${theme.bg} ${theme.border} border print:border-l-4 print:border-y-0 print:border-r-0 print:bg-white print:rounded-none`}
                                    >
                                        <div className="flex items-center gap-3 mb-4 print:mb-3">
                                            <div className={`p-2 rounded-lg ${theme.iconBg} print:hidden`}>
                                                {theme.icon}
                                            </div>
                                            <h3 className={`font-black uppercase tracking-widest text-sm ${theme.titleText} print:text-gray-900 print:text-[14px]`}>
                                                {section.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-4 print:space-y-3">
                                            {points.map((point: string, pIdx: number) => (
                                                <div key={pIdx} className="flex items-start gap-3">
                                                    <span className={`mt-0.5 font-bold ${theme.bulletPoint} print:text-gray-600 text-lg`}>•</span>
                                                    <div className="prose prose-sm prose-gray max-w-none text-gray-800 font-medium leading-relaxed print:text-black print:leading-snug">
                                                        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                                                            {point}
                                                        </ReactMarkdown>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Force Page Break logic for print readability — every 3 units for better spacing */}
                        {((index + 1) % 3 === 0) && (
                            <div className="hidden print:block print:break-after-page"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="hidden print:block text-center mt-8 text-gray-400 text-xs">
                Generated via BusinessMaster • CBSE Class 12 Premium Prep
            </div>
        </div>
    );
};
