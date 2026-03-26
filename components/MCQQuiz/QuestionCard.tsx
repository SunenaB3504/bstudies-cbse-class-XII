import React, { useState } from 'react';
import { MCQWithUnit } from '../../utils/mcqAggregator';
import { CheckCircle2, XCircle, ChevronRight, Zap } from 'lucide-react';

interface QuestionCardProps {
    question: MCQWithUnit;
    onAnswer: (selectedOption: string) => void;
    onNext: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onNext }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [revealed, setRevealed] = useState(false);

    const handleSelect = (option: string) => {
        if (revealed) return; // Prevent changing after reveal
        setSelected(option);
    };

    const handleSubmit = () => {
        if (!selected) return;

        if (!revealed) {
            onAnswer(selected);
            setRevealed(true);
        } else {
            onNext();
            setRevealed(false);
            setSelected(null);
        }
    };

    const options = [
        { id: 'A', text: question.optionA },
        { id: 'B', text: question.optionB },
        { id: 'C', text: question.optionC },
        { id: 'D', text: question.optionD },
    ].filter(opt => opt.text);

    const hasStructuredOptions = options.length > 0;
    
    // Robustly find the correct option letter (e.g. "A" from "A) Text" or matching text)
    const findCorrectOption = () => {
        const ans = question.answer || '';
        const trimmedAns = ans.trim();
        const firstChar = trimmedAns.charAt(0).toUpperCase();
        
        // Check if starts with A), A., or just A
        if (['A', 'B', 'C', 'D'].includes(firstChar)) {
            // Further verify it's a prefix like "A)" or "A." or "A "
            if (trimmedAns.length === 1 || /^[A-D][\s\).:-]/.test(trimmedAns)) {
                return firstChar;
            }
        }
        
        // Fallback: match text content against options
        const found = options.find(opt => 
            ans.toLowerCase().includes(opt.text.toLowerCase()) || 
            opt.text.toLowerCase().includes(ans.toLowerCase())
        );
        return found ? found.id : '';
    };
    
    const correctOption = findCorrectOption();

    return (
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full mb-6 tracking-wide">
                    {question.unitName}
                </span>
                <h2 className="text-2xl font-black text-gray-900 leading-snug">{question.question}</h2>
            </div>

            {hasStructuredOptions ? (
                <div className="space-y-4 mb-8">
                    {options.map((option) => {
                        const isSelected = selected === option.id;
                        const isCorrect = option.id === correctOption;
                        
                        let cardStyle = 'border-gray-100 hover:border-purple-200 hover:bg-gray-50';
                        let iconStyle = 'bg-gray-100 text-gray-500';

                        if (revealed) {
                            if (isCorrect) {
                                cardStyle = 'border-emerald-500 bg-emerald-50 shadow-md ring-1 ring-emerald-500';
                                iconStyle = 'bg-emerald-500 text-white';
                            } else if (isSelected && !isCorrect) {
                                cardStyle = 'border-rose-500 bg-rose-50 opacity-100';
                                iconStyle = 'bg-rose-500 text-white';
                            } else {
                                cardStyle = 'border-gray-50 bg-gray-100 opacity-40 grayscale-[0.5]';
                                iconStyle = 'bg-gray-200 text-gray-400';
                            }
                        } else if (isSelected) {
                            cardStyle = 'border-purple-600 bg-purple-50 shadow-md transform scale-[1.01]';
                            iconStyle = 'bg-purple-600 text-white shadow-inner';
                        }

                        return (
                            <button
                                key={option.id}
                                onClick={() => handleSelect(option.id)}
                                disabled={revealed}
                                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${cardStyle}`}
                            >
                                <div className="flex items-start">
                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black mr-4 transition-colors ${iconStyle}`}>
                                        {revealed && isCorrect ? <CheckCircle2 className="w-5 h-5" /> : 
                                         revealed && isSelected && !isCorrect ? <XCircle className="w-5 h-5" /> : 
                                         option.id}
                                    </span>
                                    <span className={`text-lg font-medium pt-0.5 ${isSelected && !revealed ? 'text-purple-900' : revealed && isCorrect ? 'text-emerald-950 font-bold' : 'text-gray-700'}`}>
                                        {option.text}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            ) : (
                <div className="mb-10 text-gray-500 italic">
                    This question requires a subjective True/False or blank answer.
                </div>
            )}

            {revealed && (
                <div className="mb-8 space-y-5 animate-in zoom-in-95 duration-500">
                    {/* Official Answer Box - Most Important */}
                    <div className="p-6 bg-emerald-50 border-2 border-emerald-500/20 rounded-3xl shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle2 className="w-16 h-16 text-emerald-600" />
                        </div>
                        <div className="relative z-10">
                            <h6 className="text-[11px] font-black text-emerald-800 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                Official Correct Answer (MS)
                            </h6>
                            <p className="text-emerald-950 font-black text-2xl leading-tight">
                                {question.answer}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Marking Scheme Box */}
                        {question.markingScheme && question.markingScheme !== question.answer && (
                            <div className="p-5 bg-purple-50 border border-purple-100 rounded-2xl">
                                <h6 className="text-[10px] font-black text-purple-900 uppercase tracking-widest mb-2 border-b border-purple-200/50 pb-1">Marking Scheme Context</h6>
                                <p className="text-purple-800 text-sm font-medium leading-relaxed whitespace-pre-line">
                                    {question.markingScheme}
                                </p>
                            </div>
                        )}

                        {/* AI Explanation Box */}
                        <div className={`p-5 bg-amber-50 rounded-2xl border border-amber-100 ${(!question.markingScheme || question.markingScheme === question.answer) ? 'md:col-span-2' : ''}`}>
                            <div className="flex items-center gap-2 mb-2 text-amber-900 font-black text-[10px] uppercase tracking-widest border-b border-amber-200/50 pb-1">
                                <Zap className="w-3 h-3 fill-amber-900" />
                                Pedantic AI Reasoning
                            </div>
                            <p className="text-amber-800 text-sm leading-relaxed whitespace-pre-line font-medium italic">
                                {question.aiExplanation}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={handleSubmit}
                disabled={!selected}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-2 ${selected
                        ? revealed 
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl translate-y-0'
                            : 'bg-purple-700 hover:bg-purple-800 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
            >
                {revealed ? (
                    <>
                        Continue to Next Question
                        <ChevronRight className="w-5 h-5" />
                    </>
                ) : (
                    'Reveal Answer & Explanation'
                )}
            </button>
        </div>
    );
};
