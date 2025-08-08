import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart, Line } from 'recharts';
import { SlideContent } from '../types';
import { COLORS } from '../constants';

const renderVisual = (visual: SlideContent['visuals']) => {
  if (!visual) return null;

  switch (visual.type) {
    case 'video-text-mask': {
      const { mainText, subText, videoUrl } = visual.content;
      return (
        <div className="relative w-full h-96 flex flex-col justify-center items-center text-center overflow-hidden rounded-lg shadow-2xl">
           <video
             src={videoUrl}
             autoPlay
             loop
             muted
             playsInline
             className="absolute top-0 left-0 w-full h-full object-cover z-0"
           />
           {/* The user wants a light background. This overlay provides it. */}
           <div className={`absolute inset-0 bg-[${COLORS.cream}] opacity-80`} />

           <div className="relative z-10 w-full p-8">
             <h1
               className={`font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[${COLORS.darkText}] animate-fade-in max-w-4xl mx-auto`}
             >
               {mainText}
             </h1>
             {subText && 
               <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in-delay">
                 {subText}
               </p>
             }
           </div>
           <style>{`
              @keyframes fade-in {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes fade-in-delay {
                0% { opacity: 0; transform: translateY(20px); }
                50% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in {
                animation: fade-in 1.2s ease-out forwards;
              }
              .animate-fade-in-delay {
                 animation: fade-in-delay 2s ease-out forwards;
              }
           `}</style>
        </div>
      );
    }
    case 'luminous-text': {
      const luminousTextColor = '#ffa400'; // Orange from the palette
      return (
          <div className="w-full h-48 bg-gray-800 rounded-lg shadow-xl overflow-hidden relative flex items-center">
              <style>{`
                  @keyframes marquee {
                      0% { transform: translateX(100vw); }
                      100% { transform: translateX(-100%); }
                  }
                  .luminous-text {
                      font-family: 'Raleway', sans-serif;
                      color: #fff;
                      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px ${luminousTextColor}, 0 0 30px ${luminousTextColor}, 0 0 40px ${luminousTextColor}, 0 0 55px ${luminousTextColor}, 0 0 75px ${luminousTextColor};
                      will-change: transform;
                      animation: marquee 30s linear infinite;
                      position: absolute;
                      white-space: nowrap;
                  }
              `}</style>
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '100% 100%, 20px 20px'}}></div>
              <p className="luminous-text text-3xl font-bold">
                  {visual.content}
              </p>
          </div>
      );
    }
    case 'image':
      return <img src={visual.content} alt="Visual content" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl" />;
    
    case 'testimonial':
      return (
        <div className={`bg-[${COLORS.cream}] p-8 rounded-lg shadow-lg text-center`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {visual.content.stats.map((stat: { value: string, label: string}) => (
              <div key={stat.label} className="p-4 bg-white/50 rounded-lg">
                <p className="text-2xl md:text-4xl font-bold text-[#ff595a]">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <blockquote className="text-lg italic text-gray-700">"{visual.content.quote}"</blockquote>
          <cite className="block mt-4 not-italic font-semibold text-[#ffa400]">{visual.content.author}</cite>
        </div>
      );
    
    case 'key-metrics':
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visual.content.map((metric: { metric: string, value: string, description: string }) => (
                <div key={metric.metric} className={`bg-[${COLORS.cream}] p-6 rounded-lg shadow-lg text-center`}>
                    <p className="text-4xl font-bold text-[#ff595a]">{metric.value}</p>
                    <h4 className="text-lg font-semibold text-[#2d3748] mt-2">{metric.metric}</h4>
                    <p className="text-sm text-gray-600 mt-1">{metric.description}</p>
                </div>
            ))}
        </div>
      );

    case 'partners':
        return (
            <div className={`bg-[${COLORS.cream}] p-8 rounded-lg shadow-lg`}>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    {visual.content.map((partnerName: string) => (
                        <div key={partnerName} className="bg-white px-4 py-2 rounded-full shadow-md text-[#2d3748] font-semibold">
                            {partnerName}
                        </div>
                    ))}
                </div>
            </div>
        );

    case 'team':
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                {visual.content.map((member: {name: string, role: string, image: string, bio: string}) => (
                    <div key={member.name} className={`bg-[${COLORS.cream}] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                        {member.image && <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#aec5e7]" />}
                        <h4 className="text-xl font-bold text-[#2d3748]">{member.name}</h4>
                        <p className="text-[#ff595a] font-semibold mb-2">{member.role}</p>
                        <p className="text-sm text-gray-600">{member.bio}</p>
                    </div>
                ))}
            </div>
        );
    
    case 'funds':
        return (
            <div className={`bg-[${COLORS.cream}] p-8 rounded-lg shadow-lg`}>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={visual.content} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} labelLine={false} label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}>
                             {visual.content.map((entry: {name: string, value: number, fill: string}, index: number) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                        </Pie>
                        <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );

    case 'chart':
        const { data, unit, dataKey, label } = visual.content;
        const currencyFormatter = (value: number) => {
            if (Math.abs(value) >= 1000000) return `${unit} ${(value / 1000000).toFixed(1)}M`;
            if (Math.abs(value) >= 1000) return `${unit} ${(value / 1000).toFixed(0)}k`;
            return `${unit} ${value}`;
        }
        
        return (
            <div className={`bg-[${COLORS.cream}] p-8 rounded-lg shadow-lg`}>
                <ResponsiveContainer width="100%" height={300}>
                     <ComposedChart data={data} margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
                        <XAxis dataKey="name" stroke={COLORS.darkText} />
                        <YAxis stroke={COLORS.darkText} tickFormatter={currencyFormatter} />
                        <Tooltip 
                            formatter={(value: number) => `${unit} ${Number(value).toLocaleString('pt-BR')}`} 
                            cursor={{fill: 'rgba(230, 203, 228, 0.3)'}}
                        />
                        <Legend />
                        <Bar dataKey={dataKey} name={label || 'Valor'} fill={COLORS.red}>
                           {data.map((entry: any, index: number) => (
                                <Cell key={`cell-${index}`} fill={entry[dataKey] < 0 ? COLORS.red : COLORS.blue} />
                            ))}
                        </Bar>
                        <Line type="monotone" dataKey={dataKey} stroke={COLORS.orange} strokeWidth={2} dot={{r: 4}} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        )

    default:
      return null;
  }
};


interface SlideProps {
  content: SlideContent;
}

const Slide: React.FC<SlideProps> = ({ content }) => {
  const [visibleDataPoints, setVisibleDataPoints] = React.useState(new Set<number>());

  React.useEffect(() => {
    if (!content.dataPoints || content.dataPoints.length === 0) {
      return;
    }

    // Reset visibility when content changes for re-animation
    setVisibleDataPoints(new Set());

    const timers: NodeJS.Timeout[] = [];
    content.dataPoints.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleDataPoints(prev => new Set(prev).add(index));
      }, 300 + index * 400); // Staggered delay
      timers.push(timer);
    });

    return () => {
      timers.forEach(clearTimeout); // Cleanup timers on unmount
    };
  }, [content.id]); // Re-run animation when the slide ID changes


  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-8 lg:p-12 bg-transparent">
      {content.visuals?.type === 'video-text-mask' ? (
        <div className="w-full max-w-7xl mx-auto">
          {renderVisual(content.visuals)}
        </div>
      ) : (
      <div className="w-full max-w-5xl mx-auto bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/30">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-[#2d3748]">{content.title}</h2>
        <p className={`text-center text-gray-700 mb-8 max-w-3xl mx-auto ${content.id === 'cover' ? 'text-2xl md:text-3xl font-bold' : 'text-lg md:text-xl'}`}>{content.keyMessage}</p>
        
        {content.dataPoints && (
          <div className={`grid grid-cols-1 md:grid-cols-${Math.min(content.dataPoints.length, 3)} gap-6 my-8`}>
            {content.dataPoints.map((point, index) => (
              <div 
                key={index} 
                className={`text-center p-6 bg-[${COLORS.cream}]/50 rounded-xl shadow-md transition-all duration-700 ease-out ${visibleDataPoints.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                <div className="flex justify-center items-center mb-4 text-5xl h-16">{point.icon}</div>
                <h3 className="text-xl font-semibold text-[#2d3748]">{point.text}</h3>
                {point.detail && (
                  <p className="text-gray-600 text-sm mt-2">{point.detail}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {content.visuals && (
            <div className="mt-8">
                {renderVisual(content.visuals)}
            </div>
        )}

      </div>
      )}
    </div>
  );
};

export default Slide;
