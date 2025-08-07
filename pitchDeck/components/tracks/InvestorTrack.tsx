
import React, { useState } from 'react';
import Slide from '../Slide';
import { Audience, SlideData } from '../../types';
import ChatAssistant from '../ChatAssistant';

const investorSlides: SlideData[] = [
    {
        id: 'investor-oportunidade',
        title: 'Oportunidade (TAM/SAM/SOM)',
        subtitle: 'Um mercado de R$ 100 bilhões em transformação',
        mainText: 'O mercado de EdTech no Brasil é o maior da América Latina. Miramos em um SOM de R$ 40 bilhões, com um modelo de negócio escalável para capturar uma fatia significativa deste mercado.',
        details: {
            title: "Análise de Mercado",
            text: "O segmento de atividades extracurriculares movimenta R$ 40 bilhões anualmente. A LABirintar se posiciona para ser o 'sistema operacional' desse ecossistema.",
        },
        bgColor: 'bg-lab-peach'
    },
    {
        id: 'investor-modelo',
        title: 'Modelo de Negócio e Unit Economics',
        subtitle: 'Receita Recorrente com Efeito de Rede',
        mainText: 'Nosso modelo de Revenue Share (30% LABirintar, 20% Escola, 50% Rede) alinha interesses. Com uma relação LTV/CAC de 3.2x, demonstramos um modelo sustentável e lucrativo.',
        details: {
            title: "Projeções Financeiras",
            text: "Projetamos um crescimento exponencial, saindo de R$ 4.470/mês para mais de R$ 1.2 milhão/mês em 5 anos, alcançando 1.200 escolas."
        },
        bgColor: 'bg-lab-lavender',
        textColor: 'text-lab-dark'
    },
    {
        id: 'investor-ask',
        title: 'O Investimento (The Ask)',
        subtitle: 'Buscamos R$ 2 milhões para construir o motor de escala',
        mainText: 'O investimento será o catalisador para nossa transição de PMF para Scale-Up, com valuation de R$ 4.2 milhões. Os recursos serão alocados para profissionalizar marketing, vendas e tecnologia.',
        bulletPoints: ["35% Marketing e Vendas", "25% Operação", "20% Tecnologia", "20% Outros (Consultoria, Reserva)"],
        bgColor: 'bg-lab-orange',
        textColor: 'text-white'
    },
    {
        id: 'investor-saida',
        title: 'Cenário de M&A e Saída',
        subtitle: 'Um Setor Aquecido com Saídas Relevantes',
        mainText: 'O setor de EdTech tem alta liquidez. Planejamos saídas via aquisição por grandes grupos educacionais ou um IPO a longo prazo, oferecendo um retorno atrativo para o investimento.',
        bgColor: 'bg-lab-peach'
    }
];

const InvestorTrack: React.FC = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleNext = () => {
        if (currentSlideIndex < investorSlides.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        }
    };
    
    return (
        <>
            <Slide
                slide={investorSlides[currentSlideIndex]}
                totalSlides={investorSlides.length}
                currentSlideIndex={currentSlideIndex}
                onNext={handleNext}
                onPrev={handlePrev}
            />
            <ChatAssistant audience={Audience.INVESTOR} assistantName="Retorno" assistantColor="#ff595a" />
        </>
    );
};

export default InvestorTrack;
