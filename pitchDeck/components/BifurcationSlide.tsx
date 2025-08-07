
import React from 'react';
import { Audience } from '../types';

interface AudienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  hoverColor: string;
  onClick: () => void;
}

const Card: React.FC<AudienceCardProps> = ({ icon, title, description, hoverColor, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`group relative text-left bg-white/50 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full`}
            style={{ '--hover-color': hoverColor } as React.CSSProperties}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-[var(--hover-color)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative">
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-lab-red/10 text-lab-red">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-lab-dark">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </button>
    );
};


interface BifurcationSlideProps {
  onSelectAudience: (audience: Audience) => void;
}

const InvestorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414-.336.75-.75.75h-.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-15c-.621 0-1.125-.504-1.125-1.125v-9.75c0-.621.504-1.125 1.125-1.125h.375m15.75-1.5H2.25" /></svg>;
const SchoolIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>;
const EducatorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" /></svg>;
const PartnerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.512 2.72a9.094 9.094 0 013.741-.479 3 3 0 01-4.682-2.72M13.504 12c-1.244 0-2.25-1.006-2.25-2.25s1.006-2.25 2.25-2.25 2.25 1.006 2.25 2.25-1.006 2.25-2.25 2.25zM10.5 12c-1.244 0-2.25-1.006-2.25-2.25s1.006-2.25 2.25-2.25 2.25 1.006 2.25 2.25-1.006 2.25-2.25 2.25zM10.5 15c-1.244 0-2.25-1.006-2.25-2.25s1.006-2.25 2.25-2.25 2.25 1.006 2.25 2.25-1.006 2.25-2.25 2.25zM13.5 15c-1.244 0-2.25-1.006-2.25-2.25s1.006-2.25 2.25-2.25 2.25 1.006 2.25 2.25-1.006 2.25-2.25 2.25z" /></svg>;

const BifurcationSlide: React.FC<BifurcationSlideProps> = ({ onSelectAudience }) => {
  const cards = [
    { audience: Audience.INVESTOR, icon: <InvestorIcon />, title: 'Sou Investidor(a)', description: 'Descubra um mercado bilionário e um modelo de alto impacto.', color: '#ff595a' },
    { audience: Audience.SCHOOL, icon: <SchoolIcon />, title: 'Sou Escola', description: 'Transforme seu contraturno em um polo de inovação e receita.', color: '#ffa400' },
    { audience: Audience.EDUCATOR, icon: <EducatorIcon />, title: 'Sou Educador(a)', description: 'Empreenda, transforme e junte-se à nossa rede.', color: '#aec5e7' },
    { audience: Audience.PARTNER, icon: <PartnerIcon />, title: 'Sou Parceiro(a)', description: 'Acredito no poder das conexões para criar valor conjunto.', color: '#e6cbe4' },
  ];

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center p-4 sm:p-8 bg-lab-peach">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-black text-lab-dark mb-3">Quem é você nesta jornada?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">A LABirintar é um ecossistema com um propósito para cada parceiro. Escolha seu caminho para começar.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container max-w-6xl animate-fade-in-delay">
        {cards.map((card, index) => (
          <div key={card.audience} className="animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
            <Card
              icon={card.icon}
              title={card.title}
              description={card.description}
              hoverColor={card.color}
              onClick={() => onSelectAudience(card.audience)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BifurcationSlide;
