
import React, { useState } from 'react';
import { SlideData } from '../types';

interface SlideProps {
  slide: SlideData;
  totalSlides: number;
  currentSlideIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const PlusCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const Slide: React.FC<SlideProps> = ({ slide, totalSlides, currentSlideIndex, onNext, onPrev }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const bgColor = slide.bgColor || 'bg-lab-peach';
  const textColor = slide.textColor || 'text-lab-dark';

  return (
    <section className={`h-screen w-screen flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 transition-colors duration-500 relative ${bgColor} ${textColor}`}>
      <div className="container mx-auto max-w-5xl text-center animate-fade-in">
        {slide.subtitle && <p className="text-lg md:text-xl font-semibold mb-2 opacity-80">{slide.subtitle}</p>}
        {slide.title && <h1 className="text-4xl md:text-6xl font-black mb-4">{slide.title}</h1>}
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-6 leading-relaxed animate-fade-in-delay">{slide.mainText}</p>
        
        {slide.bulletPoints && (
          <ul className="text-left max-w-2xl mx-auto space-y-3 mb-8">
            {slide.bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start animate-slide-up" style={{ animationDelay: `${index * 150}ms`}}>
                <span className="text-lab-red mr-3 mt-1">&#10003;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {slide.details && (
          <div className="mt-8">
            <button
              onClick={() => setDetailsVisible(!detailsVisible)}
              className="flex items-center justify-center mx-auto text-lab-red font-semibold transition-transform hover:scale-105"
            >
              <PlusCircleIcon className="w-8 h-8 mr-2" />
              <span>{detailsVisible ? 'Ocultar Detalhes' : 'Saber Mais'}</span>
            </button>
            {detailsVisible && (
              <div className="mt-6 p-6 bg-white/50 rounded-lg text-left max-w-3xl mx-auto animate-fade-in">
                <h4 className="font-bold text-xl mb-3">{slide.details.title}</h4>
                <p className="mb-4">{slide.details.text}</p>
                {slide.details.items && (
                   <ul className="list-disc list-inside space-y-2">
                     {slide.details.items.map((item, index) => <li key={index}>{item}</li>)}
                   </ul>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 flex justify-between w-full px-8 container mx-auto max-w-7xl">
        <button onClick={onPrev} disabled={currentSlideIndex === 0} className="p-3 rounded-full bg-black/10 hover:bg-black/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
          <ArrowLeftIcon className="w-6 h-6"/>
        </button>
        <div className="flex items-center space-x-2">
            {Array.from({length: totalSlides}).map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentSlideIndex ? 'bg-lab-red scale-125' : 'bg-black/20'}`}></div>
            ))}
        </div>
        <button onClick={onNext} disabled={currentSlideIndex === totalSlides -1} className="p-3 rounded-full bg-black/10 hover:bg-black/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Slide;
