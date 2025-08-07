
import React, { useState } from 'react';
import Slide from '../Slide';
import { Audience, SlideData } from '../../types';
import ChatAssistant from '../ChatAssistant';

const schoolSlides: SlideData[] = [
    {
        id: 'school-dor',
        title: 'Entendemos a sua Dor',
        subtitle: 'Gestão complexa, pressão por receita e desafio pedagógico',
        mainText: 'Sabemos que gerenciar múltiplos parceiros, otimizar espaços e garantir qualidade pedagógica no contraturno é um grande desafio para as escolas.',
        bulletPoints: ["Sobrecarga administrativa", "Espaços físicos ociosos", "Dificuldade em encontrar educadores qualificados", "Pressão das famílias por atividades de qualidade"],
        bgColor: 'bg-lab-peach'
    },
    {
        id: 'school-solucao',
        title: 'De um "BO" a um Centro de Lucro e Inovação',
        subtitle: 'A Solução Completa para seu Contraturno',
        mainText: 'A LABirintar centraliza a gestão, a curadoria e a execução das atividades, transformando seu contraturno em uma operação eficiente, lucrativa e pedagogicamente rica, sem custo fixo para a escola.',
        details: {
            title: "Como Resolvemos?",
            text: "Nossa plataforma automatiza matrículas, pagamentos e comunicação. Nossa rede de educadores garante atividades de alta qualidade, alinhadas à BNCC."
        },
        bgColor: 'bg-lab-blue',
        textColor: 'text-white'
    },
    {
        id: 'school-parceria',
        title: 'Flexibilidade e Lucratividade para sua Escola',
        subtitle: 'A Parceria Financeira',
        mainText: 'Oferecemos modelos de parceria flexíveis. No modelo padrão, sua escola recebe 20% da receita gerada, sem custos. É receita nova com gestão zero.',
        bgColor: 'bg-lab-lavender',
        textColor: 'text-lab-dark'
    },
    {
        id: 'school-onboarding',
        title: 'Implementação simples em 3 passos',
        subtitle: 'Próximos Passos (Onboarding)',
        mainText: 'Nosso processo de onboarding é rápido e simples, começando com um diagnóstico científico-pedagógico gratuito para mapear os interesses dos seus alunos e garantir o sucesso da parceria.',
        bgColor: 'bg-lab-orange',
        textColor: 'text-white'
    },
];


const SchoolTrack: React.FC = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleNext = () => {
        if (currentSlideIndex < schoolSlides.length - 1) {
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
                slide={schoolSlides[currentSlideIndex]}
                totalSlides={schoolSlides.length}
                currentSlideIndex={currentSlideIndex}
                onNext={handleNext}
                onPrev={handlePrev}
            />
            <ChatAssistant audience={Audience.SCHOOL} assistantName="Solução" assistantColor="#ffa400" />
        </>
    );
};

export default SchoolTrack;
