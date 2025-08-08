
import React, { useState, useEffect, ReactNode } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useParams, Outlet, NavLink } from 'react-router-dom';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, XAxis, YAxis, Tooltip, Bar, Legend } from 'recharts';

// --- TYPES ---
export enum ViewerType {
  Investor = 'investidor',
  School = 'escola',
  Educator = 'educador',
  Partner = 'parceiro',
}

export interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

// --- CONSTANTS ---
export const COLORS = {
  primary: '#ff595a',
  secondary: '#ffa400',
  background: '#ffe9c9',
  accent1: '#e6cbe4',
  accent2: '#aec5e7',
  text: '#2d3748',
  lightText: '#4a5568',
  white: '#FFFFFF',
};

export const VIEWER_PROPS = {
  [ViewerType.Investor]: {
    title: "Investidor(a)",
    description: "Descubra um mercado de R$ 40 bilhões e um modelo de alto impacto.",
    cardClass: "bg-lab-blue/80 hover:bg-lab-blue",
  },
  [ViewerType.School]: {
    title: "Escola",
    description: "Inove, cresça e transforme seu contraturno em um centro de lucro.",
    cardClass: "bg-lab-red/80 hover:bg-lab-red",
  },
  [ViewerType.Educator]: {
    title: "Educador(a)",
    description: "Empreenda, transforme e seja valorizado pela sua paixão.",
    cardClass: "bg-lab-orange/80 hover:bg-lab-orange",
  },
  [ViewerType.Partner]: {
    title: "Parceiro(a)",
    description: "Acredite no poder das conexões e faça parte do ecossistema.",
    cardClass: "bg-lab-lavender/80 hover:bg-lab-lavender",
  },
};


// --- ICONS ---
const ArrowRightIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const PlusIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);

// --- BASE COMPONENTS ---

const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className }) => (
  <section className={`min-h-screen w-full flex flex-col justify-center items-center p-8 md:p-16 relative overflow-hidden ${className}`}>
    <div className="container mx-auto text-center">{children}</div>
  </section>
);

const DetailButton: React.FC<{onClick: () => void}> = ({ onClick }) => (
    <button onClick={onClick} className="absolute bottom-8 right-8 bg-white/50 hover:bg-white p-2 rounded-full transition-all duration-300 shadow-md backdrop-blur-sm">
        <PlusIcon className="h-6 w-6 text-lab-red" />
    </button>
);

const StatCard: React.FC<{ value: string; label: string; detail: string; color: string;}> = ({ value, label, detail, color }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div 
            className="bg-white/30 backdrop-blur-lg rounded-xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 w-full md:w-1/4 mx-4 flex flex-col justify-start"
            onClick={() => setIsOpen(!isOpen)}
        >
            <p className={`text-6xl font-black`} style={{color}}>{value}</p>
            <p className="mt-4 text-lg font-bold text-lab-text">{label}</p>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-lab-light-text">{detail}</p>
            </div>
        </div>
    );
};

// --- SLIDES - COMMON TRACK ---

const LandingSlide: React.FC = () => (
  <SlideWrapper className="bg-lab-cream">
    <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-lab-blue rounded-full opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-lab-red rounded-full opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-lab-orange rounded-full opacity-30 animate-blob animation-delay-4000"></div>
    </div>
    <div className="relative z-10">
      <h1 className="text-8xl font-black text-lab-text tracking-tighter">LABirintar</h1>
      <p className="mt-6 text-3xl font-bold text-lab-red">
        Somos a inteligência em rede por trás da construção da Escola em Tempo Integral.
      </p>
      <p className="mt-12 text-lg text-lab-light-text animate-pulse">Role para baixo para começar a jornada</p>
    </div>
  </SlideWrapper>
);

const ProblemSlide: React.FC = () => (
    <SlideWrapper className="bg-lab-lavender/30">
        <h2 className="text-5xl font-bold text-lab-red mb-12">
            O "Tapa na Cara":<br/> O Tempo Integral é Lei. A Qualidade é Desafio.
        </h2>
        <p className="max-w-3xl mx-auto text-xl text-lab-light-text mb-16">
            A simples extensão da carga horária, sem uma revolução pedagógica, cria um problema triplo: escolas sobrecarregadas, famílias insatisfeitas e crianças despreparadas para o futuro.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
             <StatCard value="70%" label="Busca Familiar" detail="Das famílias buscam ativamente o desenvolvimento de habilidades socioemocionais." color={COLORS.primary} />
             <StatCard value="65%" label="Futuro do Trabalho" detail="Das crianças de hoje trabalharão em profissões que ainda não existem." color={COLORS.secondary} />
             <StatCard value="Lei" label="14.640/2023" detail="A Lei da Escola em Tempo Integral não é uma sugestão, é uma nova regra do jogo." color={COLORS.accent1} />
        </div>
    </SlideWrapper>
);

const SolutionSlide: React.FC = () => (
    <SlideWrapper className="bg-lab-blue/30">
         <h2 className="text-5xl font-bold text-lab-text mb-6">Não vendemos aulas.<br/><span className="text-lab-red">Orquestramos um Ecossistema Vivo.</span></h2>
         <p className="max-w-3xl mx-auto text-xl text-lab-light-text mb-12">
            A LABirintar conecta escolas, educadores e famílias em uma plataforma única que transforma o contraturno em um polo de inovação, desenvolvimento e receita.
         </p>
         <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-lg rounded-2xl p-10 shadow-xl flex items-center justify-around relative">
            <div className="absolute w-48 h-48 border-4 border-dashed border-lab-red rounded-full animate-spin-slow"></div>
            <div className="font-bold text-2xl text-lab-text z-10 bg-lab-cream p-6 rounded-full shadow-inner">LABirintar</div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8 text-center z-20">
                <span className="bg-lab-red text-white py-2 px-4 rounded-full font-bold shadow-md">Escolas</span>
                <p className="text-sm mt-2 text-lab-light-text">Receita nova, gestão zero</p>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-8 text-center z-20">
                <span className="bg-lab-orange text-white py-2 px-4 rounded-full font-bold shadow-md">Famílias</span>
                <p className="text-sm mt-2 text-lab-light-text">Desenvolvimento integral</p>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16 text-center z-20">
                <span className="bg-lab-blue text-white py-2 px-4 rounded-full font-bold shadow-md">Educadores</span>
                <p className="text-sm mt-2 text-lab-light-text">Autonomia e ganhos</p>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-16 text-center z-20">
                <span className="bg-lab-lavender text-white py-2 px-4 rounded-full font-bold shadow-md">Parceiros</span>
                <p className="text-sm mt-2 text-lab-light-text">Sinergia e escala</p>
            </div>
         </div>
    </SlideWrapper>
);

const HowItWorksSlide: React.FC = () => (
    <SlideWrapper className="bg-lab-orange/20">
        <h2 className="text-5xl font-bold text-lab-text mb-12">O Ecossistema em Ação</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold text-lab-red">Curadoria</h3>
                <p className="mt-4 text-lab-light-text">Curadoria pedagógica de ponta, uma rede autogerida de educadores-empreendedores.</p>
            </div>
            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold text-lab-orange">Rede</h3>
                <p className="mt-4 text-lab-light-text">Uma plataforma tecnológica que automatiza toda a operação. <span className="font-bold text-lab-text block mt-2">100% dos educadores vieram por indicação.</span></p>
            </div>
            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold text-lab-blue">Tecnologia</h3>
                <p className="mt-4 text-lab-light-text">Nossa solução se baseia em três pilares integrados que garantem qualidade e escala.</p>
            </div>
        </div>
    </SlideWrapper>
);

const TractionSlide: React.FC = () => (
    <SlideWrapper className="bg-lab-cream">
        <h2 className="text-5xl font-bold text-lab-text mb-8">Nascemos no Chão da Escola. <br/>E já estamos crescendo.</h2>
        <p className="text-xl text-lab-light-text max-w-2xl mx-auto mb-12">Nosso modelo foi validado no mundo real, gerando receita, impacto pedagógico e a confiança de nossos primeiros parceiros.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lab-text">
            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-xl shadow-xl text-center">
                <p className="text-5xl font-black text-lab-red">4</p>
                <p className="text-xl font-bold">meses de validação</p>
            </div>
            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-xl shadow-xl text-center">
                <p className="text-5xl font-black text-lab-orange">3</p>
                <p className="text-xl font-bold">escolas atendidas</p>
            </div>
            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-xl shadow-xl text-center">
                <p className="text-5xl font-black text-lab-blue">32</p>
                <p className="text-xl font-bold">alunos impactados</p>
            </div>
            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-xl shadow-xl text-center">
                <p className="text-5xl font-black text-lab-lavender">R$20k+</p>
                <p className="text-xl font-bold">em receita</p>
            </div>
        </div>
        <div className="mt-12">
            <h3 className="text-2xl font-bold text-lab-text">Depoimento da Escola Builders:</h3>
            <blockquote className="mt-4 text-lg text-lab-light-text italic max-w-3xl mx-auto">
                "A proposta é encantadora por 'sair da caixinha', validando o potencial da LABirintar em superar inseguranças do mercado com uma abordagem prática e tangível."
            </blockquote>
        </div>
    </SlideWrapper>
);

const BifurcationSlide: React.FC = () => (
    <SlideWrapper className="bg-gray-800 text-white">
        <h2 className="text-5xl font-bold mb-6">Quem é você nesta jornada?</h2>
        <p className="text-xl text-gray-300 mb-12">A LABirintar é um ecossistema com um propósito para cada parceiro.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {Object.values(ViewerType).map((type) => {
                const props = VIEWER_PROPS[type];
                return (
                    <Link to={`/${type}`} key={type} className={`group rounded-xl p-8 flex flex-col justify-between text-white shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${props.cardClass}`}>
                        <div>
                            <h3 className="text-3xl font-black">{props.title}</h3>
                            <p className="mt-4 text-lg opacity-80 group-hover:opacity-100 transition-opacity">"Sou {props.title} e busco o futuro da educação."</p>
                        </div>
                        <div className="mt-8">
                            <p className="font-bold text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">{props.description}</p>
                            <ArrowRightIcon className="w-10 h-10 mt-2 ml-auto"/>
                        </div>
                    </Link>
                );
            })}
        </div>
    </SlideWrapper>
);

// --- SLIDES - INVESTOR TRACK ---

const InvestorSlides: React.FC = () => {
    const revenueData = [
        { name: 'Início', Receita: 4470 },
        { name: 'Ano 1', Receita: 150000 },
        { name: 'Ano 2', Receita: 500000 },
        { name: 'Ano 3', Receita: 2000000 },
        { name: 'Ano 4', Receita: 8000000 },
        { name: 'Ano 5', Receita: 25700000 },
    ];
    const allocationData = [
        { name: 'Marketing e Vendas', value: 35 },
        { name: 'Tecnologia', value: 30 },
        { name: 'Operações', value: 25 },
        { name: 'Outros', value: 10 },
    ];
    const pieColors = [COLORS.primary, COLORS.secondary, COLORS.accent2, COLORS.accent1];

    return (
        <div className="bg-lab-cream">
            <SlideWrapper>
                <h3 className="text-5xl font-bold text-lab-text">A Oportunidade (TAM/SAM/SOM)</h3>
                <p className="text-2xl mt-4 text-lab-red">Um mercado de R$ 100 bilhões em transformação.</p>
                <p className="mt-8 text-xl text-lab-light-text max-w-3xl mx-auto">O segmento de atividades extracurriculares movimenta R$ 40 bilhões anualmente no Brasil. A LABirintar está posicionada para capturar uma fatia significativa deste mercado com uma solução inovadora.</p>
            </SlideWrapper>
            <SlideWrapper>
                 <h3 className="text-5xl font-bold text-lab-text">Modelo de Negócio e Unit Economics</h3>
                 <p className="text-2xl mt-4 text-lab-red">Receita Recorrente com Efeito de Rede</p>
                 <div className="flex justify-around mt-12 text-center">
                    <div>
                        <p className="text-6xl font-black text-lab-orange">3.2x</p>
                        <p className="text-xl font-bold text-lab-text">LTV/CAC</p>
                    </div>
                    <div>
                        <p className="text-6xl font-black text-lab-blue">30%</p>
                        <p className="text-xl font-bold text-lab-text">Margem LABirintar</p>
                    </div>
                 </div>
                 <p className="mt-8 text-xl text-lab-light-text max-w-3xl mx-auto">Nosso modelo de Revenue Share (30% LABirintar, 20% Escola, 50% Rede) alinha interesses e cria um poderoso flywheel, mantendo o CAC baixo através de indicações.</p>
            </SlideWrapper>
            <SlideWrapper>
                <h3 className="text-5xl font-bold text-lab-text mb-8">Projeções Financeiras: O Caminho para 1.200 Escolas</h3>
                <div className="w-full h-96 bg-white/50 backdrop-blur-lg rounded-xl shadow-lg p-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData}>
                            <XAxis dataKey="name" stroke={COLORS.lightText} />
                            <YAxis stroke={COLORS.lightText} />
                            <Tooltip wrapperClassName="backdrop-blur-sm !bg-white/50 !border-lab-lavender" />
                            <Legend />
                            <Bar dataKey="Receita" fill={COLORS.primary} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </SlideWrapper>
            <SlideWrapper>
                <h3 className="text-5xl font-bold text-lab-text mb-8">O Investimento (The Ask)</h3>
                <p className="text-2xl mt-4 text-lab-red mb-8">Buscamos R$ 2 milhões para construir o motor de escala.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="md:w-1/2 text-left">
                        <p className="text-xl text-lab-light-text">Valuation pré-investimento de R$ 4,2 milhões. O capital será alocado para superar os desafios operacionais e desbloquear o crescimento exponencial, profissionalizando a aquisição de clientes.</p>
                    </div>
                    <div className="w-full md:w-1/2 h-80">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={allocationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
                                {allocationData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                ))}
                                </Pie>
                                <Tooltip wrapperClassName="backdrop-blur-sm !bg-white/50 !border-lab-lavender" />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </SlideWrapper>
        </div>
    );
};
// Other track components would be similarly structured
const SchoolSlides: React.FC = () => (
    <div className="bg-lab-cream">
        <SlideWrapper><h3 className="text-5xl font-bold text-lab-text">Trilha da Escola (Em Breve)</h3></SlideWrapper>
    </div>
);
const EducatorSlides: React.FC = () => (
    <div className="bg-lab-cream">
        <SlideWrapper><h3 className="text-5xl font-bold text-lab-text">Trilha do Educador (Em Breve)</h3></SlideWrapper>
    </div>
);
const PartnerSlides: React.FC = () => (
    <div className="bg-lab-cream">
        <SlideWrapper><h3 className="text-5xl font-bold text-lab-text">Trilha do Parceiro (Em Breve)</h3></SlideWrapper>
    </div>
);


// --- ROUTING & APP STRUCTURE ---
const AppLayout: React.FC = () => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname === '/');

    useEffect(() => {
        setIsHome(location.pathname === '/');
    }, [location]);

    return (
        <main className="bg-lab-cream text-lab-text font-sans">
             {!isHome && (
                <header className="fixed top-0 left-0 w-full p-4 z-50 bg-lab-cream/80 backdrop-blur-sm">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link to="/" className="text-2xl font-black text-lab-text">LABirintar</Link>
                        <nav className="flex gap-4">
                            {Object.values(ViewerType).map(type => (
                                <NavLink 
                                    key={type} 
                                    to={`/${type}`} 
                                    className={({ isActive }) => 
                                        `capitalize font-bold pb-1 border-b-2 transition-colors ${
                                            isActive ? 'border-lab-red text-lab-red' : 'border-transparent hover:text-lab-red'
                                        }`
                                    }
                                >
                                    {VIEWER_PROPS[type].title}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </header>
            )}
            <Outlet />
        </main>
    );
};

const CommonTrack: React.FC = () => (
    <>
        <LandingSlide />
        <ProblemSlide />
        <SolutionSlide />
        <HowItWorksSlide />
        <TractionSlide />
        <BifurcationSlide />
    </>
);

const AudienceTrack: React.FC = () => {
    const { viewerType } = useParams<{ viewerType: string }>();

    const renderTrack = () => {
        switch (viewerType) {
            case ViewerType.Investor: return <InvestorSlides />;
            case ViewerType.School: return <SchoolSlides />;
            case ViewerType.Educator: return <EducatorSlides />;
            case ViewerType.Partner: return <PartnerSlides />;
            default: return <CommonTrack />; // Fallback to home
        }
    };
    
    return <div className="pt-20">{renderTrack()}</div>;
};


const App: React.FC = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<CommonTrack />} />
                <Route path=":viewerType" element={<AudienceTrack />} />
            </Route>
        </Routes>
    </HashRouter>
  );
};

export default App;
