
import React, { useState } from 'react';
import { Zap, Map as MapIcon, ClipboardCheck, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Chapter, Flashcard } from '../types';

const FlashcardComp: React.FC<{ card: Flashcard; isActive?: boolean }> = ({ card, isActive = true }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div 
      onClick={() => setFlipped(!flipped)}
      className={`relative h-80 cursor-pointer group w-full transition-all duration-300 perspective-1000 ${isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-40'}`}
    >
      {/* Flip animation container */}
      <div 
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${flipped ? 'rotate-y-180' : 'rotate-y-0'}`}
      >
        {/* Front - Question */}
        <div 
          className="absolute inset-0 bg-white border-3 border-purple-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl group-hover:shadow-2xl group-hover:border-purple-400 transition-all backface-hidden"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">📝</span>
            <span className="text-xs font-black text-purple-600 tracking-widest uppercase">{card.category}</span>
          </div>
          <p className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{card.question}</p>
          <div className="mt-6 flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest animate-bounce">
            <span>✨ Tap to Reveal</span>
          </div>
        </div>

        {/* Back - Answer */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl rotate-y-180 backface-hidden"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">✅</span>
            <span className="text-xs font-black text-amber-300 tracking-widest uppercase">Answer</span>
          </div>
          <p className="text-lg md:text-xl font-medium text-white leading-relaxed italic">"{card.answer}"</p>
          <div className="mt-6 text-amber-300 text-xs font-bold uppercase tracking-widest">Tap to flip back</div>
        </div>
      </div>
    </div>
  );
};

interface SlidingFlashcardsProps {
  chapter: Chapter;
}

const SlidingFlashcards: React.FC<SlidingFlashcardsProps> = ({ chapter }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  
  const cards = chapter.flashcards;
  const totalCards = cards.length;
  
  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };
  
  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };
  
  const getVisibleCards = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((currentIndex + i + totalCards) % totalCards);
    }
    return indices;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8 text-center">
        <p className="text-sm font-black text-purple-600 uppercase tracking-widest mb-3">
          Card {currentIndex + 1} of {totalCards}
        </p>
        <progress 
          value={currentIndex + 1} 
          max={totalCards} 
          className="w-full h-2 rounded-full overflow-hidden appearance-none [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-purple-500 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-300 [&::-moz-progress-bar]:bg-purple-500"
        />
      </div>

      {/* Flashcard display */}
      <div className="relative h-96 mb-8 flex items-center justify-center perspective">
        <div className="relative w-full h-full flex items-center justify-center px-12">
          {/* Left card (blurred) */}
          {getVisibleCards()[0] !== currentIndex && (
            <div className="absolute left-0 opacity-30 scale-75 pointer-events-none">
              <FlashcardComp card={cards[getVisibleCards()[0]]} isActive={false} />
            </div>
          )}
          
          {/* Center card (active) */}
          <div className="z-10 w-full">
            <FlashcardComp card={cards[currentIndex]} isActive={true} />
          </div>
          
          {/* Right card (blurred) */}
          {getVisibleCards()[2] !== currentIndex && (
            <div className="absolute right-0 opacity-30 scale-75 pointer-events-none">
              <FlashcardComp card={cards[getVisibleCards()[2]]} isActive={false} />
            </div>
          )}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 justify-center flex-1">
          {Array.from(new Set(cards.map(c => c.category))).map(cat => (
            <button
              key={cat}
              onClick={() => {
                const index = cards.findIndex(c => c.category === cat);
                setCurrentIndex(index);
              }}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight transition-all ${
                cards[currentIndex].category === cat
                  ? 'bg-amber-400 text-amber-950 shadow-md scale-105'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
          aria-label="Next card"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Keyboard shortcut hint */}
      <div className="text-center text-xs text-gray-400 font-medium">
        💡 Use arrow buttons or keyboard (← →) to navigate
      </div>
    </div>
  );
};

export const RevisionHQ: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'map' | 'cheat'>('cards');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {[
          { id: 'cards' as const, label: 'Flashcards', icon: Zap },
          { id: 'map' as const, label: 'Mind Map', icon: MapIcon },
          { id: 'cheat' as const, label: 'Cheat Sheet', icon: ClipboardCheck }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-black text-sm flex items-center gap-2 transition-all ${activeTab === tab.id ? 'bg-amber-400 text-amber-950 shadow-xl scale-105' : 'bg-purple-900 text-purple-100 opacity-60 hover:opacity-100'}`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'cards' && (
        <div className="flex justify-center py-8">
          <SlidingFlashcards chapter={chapter} />
        </div>
      )}

      {activeTab === 'map' && (
        <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center overflow-x-auto">
          <div className="text-center mb-12 min-w-[300px]">
            <h3 className="text-3xl font-black text-purple-900">{chapter.name}</h3>
            <div className="h-1 w-24 bg-amber-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="flex flex-wrap justify-center gap-12 max-w-4xl min-w-[600px]">
            {chapter.mindMap.children?.map(node => (
              <div key={node.id} className="flex flex-col items-center gap-4">
                <div className="px-8 py-4 bg-purple-900 text-white rounded-2xl font-bold shadow-lg text-sm text-center">
                  {node.label}
                </div>
                <div className="w-0.5 h-8 bg-purple-200" />
                <div className="grid gap-2">
                  {node.children?.map(child => (
                    <div key={child.id} className="px-4 py-2 bg-purple-50 text-purple-800 rounded-lg text-xs font-bold border border-purple-100 text-center">
                      {child.label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'cheat' && (
        <div className="grid md:grid-cols-2 gap-8">
          {chapter.cheatSheet.map((section, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h4 className="text-xl font-black text-amber-600 mb-6 flex items-center gap-2 uppercase tracking-tight">
                <Star className="w-5 h-5 fill-amber-600" />
                {section.title}
              </h4>
              <ul className="space-y-4">
                {(section.content || section.points || []).map((p, j) => (
                  <li key={j} className="flex gap-3 text-gray-700 font-medium text-sm items-start">
                    <span className="text-purple-500 font-black shrink-0 mt-1">•</span>
                    <span>
                      {p.split(/(\*\*.*?\*\*)/).map((part, k) => (
                        part.startsWith('**') && part.endsWith('**') ? (
                          <strong key={k} className="font-extrabold text-gray-900">
                            {part.slice(2, -2)}
                          </strong>
                        ) : (
                          <span key={k}>{part}</span>
                        )
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
