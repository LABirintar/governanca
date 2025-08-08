/*
  Core Brand Guidelines:
  - Color Palette:
    - Red: #ff595a
    - Orange: #ffa400
    - Cream: #efebe1
    - Lavender: #e6cbe4
    - Blue: #aec5e7
    - Dark Text: #2d3748
  - Typography:
    - Titles (h1, h2, h3, .font-serif): Raleway
    - Body Text: Montserrat
*/
import React from 'react';
import { SlideContent, Persona } from './types';
import { BriefcaseIcon } from './components/icons/BriefcaseIcon';
import { UsersIcon } from './components/icons/UsersIcon';
import { RocketIcon } from './components/icons/RocketIcon';
import { LightBulbIcon } from './components/icons/LightBulbIcon';
import { TargetIcon } from './components/icons/TargetIcon';

export const COLORS = {
  red: '#ff595a',
  orange: '#ffa400',
  cream: '#efebe1',
  lavender: '#e6cbe4',
  blue: '#aec5e7',
  darkText: '#2d3748', // A dark gray for readability
  lightText: '#f7fafc', // A light gray/white for dark backgrounds
};

// --- SLIDE DATA ---

export const COMMON_TRUNK: SlideContent[] = [
  {
    id: 'cover',
    title: '',
    keyMessage: '',
    visuals: {
      type: 'video-text-mask',
      content: {
        mainText: 'Somos a inteligência em rede por trás da construção da Escola em tempo Integral',
        subText: 'A LABirintar conecta escolas, educadores e famílias em um ecossistema vivo de experiências educativas, combinando curadoria pedagógica, rede de educadores empreendedores e tecnologia automatizada.',
        videoUrl: 'https://cdn.pixabay.com/video/2024/02/06/198642-913920701_large.mp4'
      }
    },
    notes: "Iniciar com uma pergunta retórica e provocadora: 'A Lei da Escola em Tempo Integral chegou. Sua escola está pronta para transformar o tempo ou apenas para preenchê-lo?'",
  },
  {
    id: 'problem',
    title: 'O Tempo Integral é Lei. A Qualidade é Desafio.',
    keyMessage: 'A simples extensão da carga horária (Lei 14.640/2023), sem uma revolução pedagógica, cria um problema triplo: escolas sobrecarregadas, famílias insatisfeitas e crianças despreparadas para o futuro.',
    dataPoints: [
      { icon: <UsersIcon className="w-10 h-10 text-[#ff595a]"/>, text: '70% das famílias buscam habilidades socioemocionais.', detail: 'Uma demanda que o modelo atual não supre.' },
      { icon: <BriefcaseIcon className="w-10 h-10 text-[#ffa400]"/>, text: 'Falta mão de obra qualificada para o ensino integral.', detail: 'Um gargalo crítico para novas linguagens como tecnologia e artes.' },
      { icon: <RocketIcon className="w-10 h-10 text-[#aec5e7]"/>, text: '65% das crianças de hoje trabalharão em profissões que ainda não existem.', detail: 'O futuro está sendo comprometido.' },
    ],
  },
  {
    id: 'solution',
    title: 'Não vendemos aulas. Orquestramos um Ecossistema Vivo.',
    keyMessage: 'A LABirintar conecta escolas, educadores e famílias em uma plataforma única que transforma o contraturno em um polo de inovação, desenvolvimento e receita.',
    visuals: {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1a0a?q=80&w=1470&auto=format&fit=crop'
    },
    notes: 'Visual: Um infográfico dinâmico e elegante, baseado no diagrama dos 4 stakeholders, mostrando a LABirintar como o núcleo central. Ao interagir com cada stakeholder, um benefício-chave é revelado.'
  },
  {
    id: 'how-it-works',
    title: 'Curadoria, Rede e Tecnologia.',
    keyMessage: 'Nossa solução se baseia em três pilares integrados: curadoria pedagógica de ponta, uma rede autogerida de educadores-empreendedores e uma plataforma tecnológica que automatiza toda a operação.',
     dataPoints: [
      { icon: <span className="text-4xl">📚</span>, text: 'Curadoria Pedagógica', detail: 'Conteúdo de ponta alinhado às competências do século XXI.' },
      { icon: <span className="text-4xl">🤝</span>, text: 'Rede Autogerida', detail: '100% dos educadores vieram por indicação, garantindo alta qualidade.' },
      { icon: <span className="text-4xl">💻</span>, text: 'Plataforma Tech', detail: 'Automatiza gestão, pagamentos e comunicação. (Screenshots da plataforma aqui)' },
    ],
  },
  {
    id: 'traction',
    title: 'Nascemos no Chão da Escola. E já estamos crescendo.',
    keyMessage: 'Nosso modelo foi validado no mundo real, gerando receita, impacto pedagógico e a confiança de nossos primeiros parceiros.',
    visuals: {
        type: 'testimonial',
        content: {
            quote: 'A proposta é "encantadora" por "sair da caixinha", validando o potencial da LABirintar em superar inseguranças do mercado com uma abordagem prática e tangível (a "degustação" do produto).',
            author: 'Depoimento da Escola Builders, referência em inovação',
            stats: [
                { value: '4', label: 'Meses de validação' },
                { value: '3', label: 'Escolas atendidas' },
                { value: '32', label: 'Alunos impactados' },
                { value: 'R$ 20k+', label: 'Receita gerada' },
            ]
        }
    }
  }
];

export const BIFURCATION_SLIDE = {
    title: "A LABirintar é um ecossistema com um propósito para cada parceiro. Quem é você nesta jornada?",
    keyMessage: "O clique do usuário em um dos cards direciona para a trilha de slides correspondente.",
    cards: [
        { persona: Persona.INVESTOR, title: "Sou Investidor(a)", subtitle: "e busco o futuro da educação.", hoverText: "Descubra um mercado de R$ 40 bilhões e um modelo de alto impacto.", icon: <RocketIcon className="w-12 h-12 mx-auto mb-4"/> },
        { persona: Persona.SCHOOL, title: "Sou Escola", subtitle: "e quero inovar e crescer.", hoverText: "Transforme seu contraturno em um centro de lucro e inovação.", icon: <BriefcaseIcon className="w-12 h-12 mx-auto mb-4"/> },
        { persona: Persona.EDUCATOR, title: "Sou Educador(a)", subtitle: "e quero empreender e transformar.", hoverText: "Junte-se a uma rede que valoriza sua autoria e remunera melhor.", icon: <LightBulbIcon className="w-12 h-12 mx-auto mb-4"/> },
        { persona: Persona.PARTNER, title: "Sou Parceiro(a)", subtitle: "e acredito no poder das conexões.", hoverText: "Conecte sua solução à nossa rede e escale seu impacto.", icon: <UsersIcon className="w-12 h-12 mx-auto mb-4"/> },
    ]
}


export const TRACKS: Record<Persona, SlideContent[]> = {
  [Persona.INVESTOR]: [
    {
        id: 'investor-opportunity',
        title: 'A Oportunidade (TAM/SAM/SOM)',
        keyMessage: 'Um mercado de R$ 100 bilhões em transformação. Apresentamos o SOM de R$ 40 bilhões e o posicionamento da LABirintar para capturá-lo.',
        visuals: {
            type: 'chart',
            content: {
                type: 'market',
                data: [
                    { name: 'TAM', value: 100000000000, fill: '#aec5e7', label: 'Educação BR' },
                    { name: 'SAM', value: 40000000000, fill: '#ffa400', label: 'Contraturno' },
                    { name: 'SOM', value: 4000000000, fill: '#ff595a', label: 'Nosso Foco Inicial' },
                ],
                unit: 'R$',
                dataKey: 'value'
            }
        }
    },
    {
      id: 'investor-business-model',
      title: 'Modelo de Negócio e Unit Economics',
      keyMessage: 'Receita Recorrente com Efeito de Rede. Nosso modelo de Revenue Share (30% LABirintar, 20% Escola, 50% Rede) alinha interesses e cria um motor de crescimento viral.',
      visuals: {
        type: 'key-metrics',
        content: [
            { metric: 'LTV/CAC', value: '3.2x', description: 'Relação saudável, baseada em um CAC de R$ 440 via indicação.' },
            { metric: 'Revenue Share', value: '30/20/50', description: 'Modelo escalável que alinha interesses de todos os stakeholders.' },
            { metric: 'Efeito de Rede', value: 'Viral', description: 'Educadores de qualidade atraem escolas e alunos, reduzindo o CAC.' },
        ]
      }
    },
    {
        id: 'investor-projections',
        title: 'Projeções Financeiras: O Caminho para 1.200 Escolas',
        keyMessage: 'O modelo projeta um crescimento exponencial na receita bruta, partindo de R$ 4.470 para mais de R$ 1,2 milhão mensais ao final de cinco anos.',
        visuals: {
            type: 'chart',
            content: {
                type: 'projection',
                data: [
                    { name: 'Mês 1', Receita: 4470 },
                    { name: 'Ano 1', Receita: 150000 },
                    { name: 'Ano 2', Receita: 800000 },
                    { name: 'Ano 3', Receita: 3500000 },
                    { name: 'Ano 4', Receita: 8000000 },
                    { name: 'Ano 5', Receita: 14400000 },
                ],
                unit: 'R$',
                dataKey: 'Receita',
                label: 'Projeção de Receita Bruta Anual'
            }
        },
        notes: "A camada de divulgação progressiva permite o acesso a detalhes como DRE e Fluxo de Caixa."
    },
    {
        id: 'investor-ask',
        title: 'O Investimento (The Ask)',
        keyMessage: 'Buscamos R$ 2 milhões para construir o motor de escala, com um valuation pré-investimento de R$ 4,2 milhões. O capital será o catalisador para essa transição, desbloqueando o crescimento exponencial.',
        visuals: {
            type: 'funds',
            content: [
                { name: 'Marketing & Vendas (35%)', value: 35, fill: '#ff595a' },
                { name: 'Tecnologia & Produto (40%)', value: 40, fill: '#ffa400' },
                { name: 'Operações & Pessoas (25%)', value: 25, fill: '#aec5e7' },
            ]
        },
        notes: 'O investimento é cirúrgico para construir a ponte sobre o abismo, profissionalizando o processo de aquisição de clientes e tornando-o escalável.'
    },
    {
        id: 'investor-team',
        title: 'O Time: Paixão de Educador com Visão de Negócio',
        keyMessage: 'Nossa equipe fundadora une a experiência profunda do "chão da escola" com a visão estratégica e tecnológica para escalar um negócio de alto impacto.',
        visuals: {
            type: 'team',
            content: [
                { name: 'Maria Lívia', role: 'Fundadora', image: 'https://picsum.photos/id/1027/400/400', bio: '"Nascida no chão da escola", especialista em pedagogia e desenvolvimento humano.' },
                { name: 'Edu Moreira', role: 'Co-fundador', image: 'https://picsum.photos/id/1005/400/400', bio: 'Especialista em estratégia, operações e escala de negócios de tecnologia.' },
            ]
        }
    },
    {
        id: 'investor-exit',
        title: 'Cenário de M&A e Saída',
        keyMessage: 'Um Setor Aquecido com Saídas Relevantes. O mercado de EdTech apresenta M&As significativos e rodadas de investimento robustas, validando o potencial de liquidez e saídas estratégicas.',
        visuals: {
            type: 'image',
            content: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1470&auto=format&fit=crop'
        },
        notes: 'Dados de M&A do setor EdTech para demonstrar a liquidez do mercado e potenciais caminhos de saída para o investimento.'
    }
  ],
  [Persona.SCHOOL]: [
    {
        id: 'school-pain',
        title: 'Entendemos a sua Dor',
        keyMessage: 'Gestão complexa, pressão por receita e o desafio pedagógico. Utilizamos as dores mapeadas em formato de checklist para gerar empatia e identificação.',
        dataPoints: [
          { icon: <span className="text-3xl">🤯</span>, text: 'Gestão Complexa', detail: 'Gerenciar múltiplos fornecedores e atividades.' },
          { icon: <span className="text-3xl">💸</span>, text: 'Pressão por Receita', detail: 'Espaços físicos ociosos e margens apertadas.' },
          { icon: <span className="text-3xl">🤔</span>, text: 'Desafio Pedagógico', detail: 'Dificuldade em recrutar e reter educadores qualificados.' },
        ]
    },
    {
        id: 'school-solution',
        title: 'A Solução Completa para seu Contraturno',
        keyMessage: 'De um "BO" a um Centro de Lucro e Inovação. Demonstra como a plataforma resolve a gestão e a curadoria resolve a qualidade pedagógica.',
        visuals: {
            type: 'image',
            content: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop'
        }
    },
    {
        id: 'school-models',
        title: 'A Parceria Financeira: Flexibilidade e Lucratividade para sua Escola',
        keyMessage: 'Apresenta dois modelos de parceria para a escola escolher, com uma análise de ponto de equilíbrio para ajudar na decisão.',
        visuals: {
            type: 'team',
            content: [
                { name: 'Parceria Padrão', role: 'Receita de 20%, Custo Zero', bio: 'A escola recebe 20% da receita gerada, sem custos fixos. A LABirintar fica com 30% e a rede com 50%.' },
                { name: 'Protagonismo Comercial', role: 'Receita de 30%, Assinatura Fixa', bio: 'A escola se torna o motor comercial, paga R$2.000/mês e recebe 30% da receita. Vantajoso a partir de ~68 matrículas.' },
            ]
        }
    },
     {
        id: 'school-social-proof',
        title: 'Provas Sociais: Escolas como a sua já confiam na LABirintar',
        keyMessage: 'Apresentamos depoimentos de escolas, com logos e vídeos curtos.',
        visuals: {
            type: 'testimonial',
            content: {
                quote: 'Estamos encantados com a proposta da Labirintar, que nos ajuda a "sair da caixinha", algo que a diretoria enfatiza constantemente.',
                author: 'Adrieli Ferreira, representante da escola Builders',
                stats: [
                    { value: 'Builders', label: 'Escola de Inovação' },
                    { value: 'Parceiros', label: 'Logos das escolas parceiras aqui' },
                    { value: 'Vídeos', label: 'Depoimentos em vídeo' },
                ]
            }
        }
    },
    {
        id: 'school-onboarding',
        title: 'Próximos Passos (Onboarding): Implementação simples em 3 passos',
        keyMessage: 'Detalhamos o processo de onboarding, incluindo o "diagnóstico científico-pedagógico gratuito" como um diferencial de valor.',
        dataPoints: [
          { icon: <span className="text-4xl font-bold text-[#ff595a]">1</span>, text: 'Diagnóstico Gratuito', detail: 'Diagnóstico científico-pedagógico para entender suas necessidades.' },
          { icon: <span className="text-4xl font-bold text-[#ffa400]">2</span>, text: 'Curadoria e Setup', detail: 'Configuração do portfólio de atividades na plataforma.' },
          { icon: <span className="text-4xl font-bold text-[#aec5e7]">3</span>, text: 'Lançamento', detail: 'Comunicação para as famílias e início das atividades.' },
        ]
    }
  ],
  [Persona.EDUCATOR]: [
    {
        id: 'educator-empowerment',
        title: 'Você é mais que um professor. É um empreendedor.',
        keyMessage: 'Valorizamos sua autoria e sua paixão. Uma mensagem direta que reconhece o valor do educador.',
        visuals: {
          type: 'image',
          content: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop'
        }
    },
    {
        id: 'educator-gains',
        title: 'Um Modelo de Ganhos Superior',
        keyMessage: 'Remuneração justa e potencial de sociedade. Comparamos o ganho por hora/aula com a média de mercado e explicamos o modelo de stock options.',
        visuals: {
            type: 'key-metrics',
            content: [
                { metric: 'Remuneração Justa', value: '> Mercado', description: 'Ganho por hora/aula superior à média do mercado.' },
                { metric: 'Stock Options', value: 'Sociedade', description: 'Potencial de participação societária no negócio.' },
                { metric: 'Autonomia', value: 'Total', description: 'Seja autor do seu projeto pedagógico.' },
            ]
        }
    },
    {
        id: 'educator-focus',
        title: 'Foque no que você ama. Nós cuidamos do resto.',
        keyMessage: 'Mostramos como a plataforma automatiza a burocracia, liberando o Educador Empreendedor para a prática pedagógica.',
        visuals: {
          type: 'image',
          content: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop'
        }
    },
    {
        id: 'educator-community',
        title: 'Uma Rede de Pares',
        keyMessage: 'Cresça com uma comunidade de educadores inovadores. Destacamos a formação semanal e o poder da colaboração em rede.',
        dataPoints: [
          { icon: <span className="text-3xl">🎓</span>, text: 'Formação Semanal', detail: 'Capacitação contínua em pedagogia e negócios.' },
          { icon: <span className="text-3xl">🤝</span>, text: 'Comunidade Forte', detail: 'Colabore e co-crie com outros educadores de ponta.' },
          { icon: <span className="text-3xl">💡</span>, text: 'Poder da Rede', detail: 'Acesso a oportunidades e projetos inovadores.' },
        ]
    },
    {
      id: 'educator-cta',
      title: 'Faça Parte da Revolução',
      keyMessage: 'Indique, crie, transforme. Seja um LABirintar. Chamada para ação focada em cadastro e indicação de novos talentos.',
       visuals: {
          type: 'image',
          content: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
        }
    }
  ],
  [Persona.PARTNER]: [
    {
        id: 'partner-ecosystem',
        title: 'O Poder do Ecossistema',
        keyMessage: 'Somos rede resiliente e generativa. Apresentamos o mapa do ecossistema, destacando onde o parceiro se encaixa.',
        visuals: {
          type: 'image',
          content: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1470&auto=format&fit=crop'
        }
    },
    {
        id: 'partner-synergies',
        title: 'Sinergias e Criação de Valor Conjunto',
        keyMessage: 'Nossa rede é o seu canal. Sua solução é nosso diferencial. Detalhamos a proposta de valor específica para cada tipo de parceiro.',
        dataPoints: [
          { icon: <span className="text-3xl">🚀</span>, text: 'Acesso ao Mercado', detail: 'Conecte-se a uma rede qualificada de escolas.' },
          { icon: <span className="text-3xl">💎</span>, text: 'Valor Agregado', detail: 'Enriqueça nosso portfólio com sua solução.' },
          { icon: <span className="text-3xl">📈</span>, text: 'Crescimento Mútuo', detail: 'Modelos de parceria que geram receita para todos.' },
        ]
    },
    {
        id: 'partner-models',
        title: 'Modelos de Parceria',
        keyMessage: 'Apresentamos os modelos de parceria já vislumbrados (Joint Venture, Parceria Comercial, Integração Tecnológica) e abrimos espaço para novas propostas.',
         visuals: {
            type: 'team',
            content: [
                { name: 'Joint Venture', role: 'Co-criação', bio: 'Desenvolver novos produtos e soluções em conjunto.' },
                { name: 'Parceria Comercial', role: 'Distribuição', bio: 'Integrar sua solução ao nosso portfólio e canais de venda.' },
                { name: 'Integração Tecnológica', role: 'API & White-label', bio: 'Conectar plataformas para uma experiência de usuário unificada.' },
            ]
        }
    },
    {
        id: 'partner-current-partners',
        title: 'Nossos Parceiros Atuais',
        keyMessage: 'Exibimos os logos dos parceiros atuais como prova social da nossa capacidade de colaboração.',
        visuals: {
            type: 'partners',
            content: [
                'Builders', 'IDB', 'Agenda Edu', 'Frella', '8bits & Didatech', 'FestPay', 'Rex', 'Circo do César', 'Infância sem Excesso', 'Felipe de panificação'
            ]
        }
    },
  ],
};
