
import React, { useState, useMemo } from 'react';
import { Persona, SlideContent } from './types';
import { COMMON_TRUNK, BIFURCATION_SLIDE, TRACKS, COLORS } from './constants';
import Slide from './components/Slide';
import InteractiveCard from './components/InteractiveCard';
import AIAssistant from './components/AIAssistant';

type View = 'intro' | Persona;

const App: React.FC = () => {
  const [view, setView] = useState<View>('intro');
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = useMemo(() => {
    if (view === 'intro') {
      return COMMON_TRUNK;
    }
    return TRACKS[view];
  }, [view]);

  const handleNext = () => {
    if (view === 'intro' && slideIndex < COMMON_TRUNK.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (view !== 'intro' && slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };
  
  const handleHome = () => {
    setView('intro');
    setSlideIndex(0);
  };

  const handlePersonaSelect = (persona: Persona) => {
    setView(persona);
    setSlideIndex(0);
  };

  const handleBackToBifurcation = () => {
    setView('intro');
    setSlideIndex(COMMON_TRUNK.length);
  };

  const renderContent = () => {
    if (view === 'intro' && slideIndex === COMMON_TRUNK.length) {
      // Bifurcation slide
      return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-8 lg:p-12 bg-transparent">
          <div className="w-full max-w-6xl mx-auto text-center bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/30">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#2d3748]">{BIFURCATION_SLIDE.title}</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12">{BIFURCATION_SLIDE.keyMessage}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {BIFURCATION_SLIDE.cards.map((card, index) => {
                  const cardColors = [COLORS.red, COLORS.orange, COLORS.blue, COLORS.lavender];
                  return (
                    <InteractiveCard 
                        key={card.persona}
                        {...card}
                        onClick={handlePersonaSelect}
                        color={cardColors[index % cardColors.length]}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      );
    }

    const currentSlide = slides[slideIndex];
    if (!currentSlide) return null;
    return <Slide content={currentSlide} />;
  };

  const showBifurcation = view === 'intro' && slideIndex === COMMON_TRUNK.length;
  const isLastSlideOfTrack = view !== 'intro' && slideIndex === slides.length - 1;
  
  return (
    <div className="relative min-h-screen bg-transparent overflow-x-hidden">
        {/* Navigation */}
        <div className="fixed top-4 left-4 z-[60] flex items-center space-x-4">
           <button
              onClick={handleHome}
              className="px-4 py-2 bg-[#ffa400] text-white font-semibold rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-200 flex items-center"
           >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            Início
           </button>
           <AIAssistant />
        </div>

        {/* Back to Bifurcation Button */}
        {isLastSlideOfTrack && (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <button
                    onClick={handleBackToBifurcation}
                    className="px-6 py-3 bg-[#ffa400] text-white font-semibold rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-200 flex items-center transform hover:scale-105 animate-pulse"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Voltar à Seleção
                </button>
            </div>
        )}

        <div className="fixed bottom-4 right-4 z-50 flex space-x-4">
          {!showBifurcation && slideIndex > 0 && (
            <button
              onClick={handlePrev}
              className="w-14 h-14 bg-[#aec5e7] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-80 transition-transform duration-200 transform hover:scale-110"
              aria-label="Previous Slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
          {!showBifurcation && (
             (view === 'intro' && slideIndex < COMMON_TRUNK.length) || (view !== 'intro' && slideIndex < slides.length - 1)
          ) && (
            <button
              onClick={() => view === 'intro' && slideIndex === COMMON_TRUNK.length - 1 ? setSlideIndex(slideIndex + 1) : handleNext()}
              className="w-14 h-14 bg-[#ff595a] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-80 transition-transform duration-200 transform hover:scale-110"
              aria-label="Next Slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
        </div>

        {/* Slide Counter */}
        {!showBifurcation && 
          <div className="fixed bottom-4 left-4 z-50 px-3 py-1 bg-black/30 text-white text-sm rounded-full">
            {slideIndex + 1} / {slides.length}
          </div>
        }
        
      <div className="transition-opacity duration-700 ease-in-out">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
