
import React, { useState } from 'react';
import Slide from '../Slide';
import { Audience, SlideData } from '../../types';
import ChatAssistant from '../ChatAssistant';

const partnerSlides: SlideData[] = [
    {
        id: 'partner-intro',
        title: 'O Poder do Ecossistema',
        subtitle: 'Sinergia, Mercado, Valor Mútuo',
        mainText: 'Acreditamos que juntos somos mais fortes. A LABirintar é uma rede resiliente e generativa, e buscamos parceiros para expandir nosso ecossistema e criar valor conjunto.',
        bgColor: 'bg-lab-peach'
    },
    {
        id: 'partner-sinergia',
        title: 'Sinergias e Criação de Valor Conjunto',
        subtitle: 'Nossa rede é o seu canal. Sua solução é nosso diferencial.',
        mainText: 'Oferecemos acesso a uma rede qualificada de escolas e educadores, inteligência de dados e uma plataforma tecnológica flexível para integrar sua solução e acelerar seu crescimento.',
        bgColor: 'bg-lab-blue',
        textColor: 'text-white'
    },
    {
        id: 'partner-modelos',
        title: 'Modelos de Parceria',
        subtitle: 'Joint Venture, Parceria Comercial, Integração Tecnológica',
        mainText: 'Estamos abertos a diversos modelos de parceria, desde a troca de leads e prospecção conjunta até a integração de valor e spinoffs estratégicos.',
        details: {
            title: "Parceiros Atuais",
            text: "Já colaboramos com empresas de tecnologia, marketing e conteúdo, como 8bits, Codifica e Agência Frila, validando nosso modelo de colaboração.",
        },
        bgColor: 'bg-lab-lavender',
        textColor: 'text-lab-dark'
    },
    {
        id: 'partner-acao',
        title: 'Conecte-se e Inove',
        subtitle: 'Vamos construir juntos a transformação da educação',
        mainText: 'Se sua empresa compartilha da nossa visão, vamos conversar. Agende uma reunião para explorarmos sinergias e discutirmos um plano de parceria personalizado.',
        bgColor: 'bg-lab-red',
        textColor: 'text-white'
    },
];

const PartnerTrack: React.FC = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleNext = () => {
        if (currentSlideIndex < partnerSlides.length - 1) {
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
                slide={partnerSlides[currentSlideIndex]}
                totalSlides={partnerSlides.length}
                currentSlideIndex={currentSlideIndex}
                onNext={handleNext}
                onPrev={handlePrev}
            />
            <ChatAssistant audience={Audience.PARTNER} assistantName="Sinergia" assistantColor="#e6cbe4" />
        </>
    );
};

export default PartnerTrack;
