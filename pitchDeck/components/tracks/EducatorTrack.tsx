
import React, { useState } from 'react';
import Slide from '../Slide';
import { Audience, SlideData } from '../../types';
import ChatAssistant from '../ChatAssistant';

const educatorSlides: SlideData[] = [
    {
        id: 'educator-intro',
        title: 'Você é mais que um professor. É um empreendedor.',
        subtitle: 'Empoderamento, Ganhos, Comunidade',
        mainText: 'Valorizamos sua autoria e sua paixão. A LABirintar é uma plataforma para educadores que querem empreender, ter autonomia e serem remunerados de forma justa.',
        bgColor: 'bg-lab-peach'
    },
    {
        id: 'educator-ganhos',
        title: 'Um Modelo de Ganhos Superior',
        subtitle: 'Remuneração justa e potencial de sociedade',
        mainText: 'Oferecemos remuneração por hora/aula acima da média do mercado, além de um modelo de stock options. Queremos que você cresça junto com a gente.',
        details: {
            title: "Foque no que você ama. Nós cuidamos do resto.",
            text: "Nossa plataforma automatiza a burocracia de matrículas, pagamentos e comunicação, liberando você para focar na prática pedagógica."
        },
        bgColor: 'bg-lab-lavender',
        textColor: 'text-lab-dark'
    },
    {
        id: 'educator-rede',
        title: 'Uma Rede de Pares',
        subtitle: 'Cresça com uma comunidade de educadores inovadores',
        mainText: 'Participe de formações semanais, colabore com outros educadores e faça parte de uma rede que apoia e impulsiona seu trabalho.',
        bgColor: 'bg-lab-blue',
        textColor: 'text-white'
    },
    {
        id: 'educator-acao',
        title: 'Faça Parte da Revolução',
        subtitle: 'Indique, crie, transforme. Seja um LABirintar.',
        mainText: 'Buscamos talentos como você para expandir nosso impacto. Cadastre-se, indique outros educadores e ajude a transformar a educação no Brasil.',
        bgColor: 'bg-lab-red',
        textColor: 'text-white'
    },
];

const EducatorTrack: React.FC = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleNext = () => {
        if (currentSlideIndex < educatorSlides.length - 1) {
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
                slide={educatorSlides[currentSlideIndex]}
                totalSlides={educatorSlides.length}
                currentSlideIndex={currentSlideIndex}
                onNext={handleNext}
                onPrev={handlePrev}
            />
            <ChatAssistant audience={Audience.EDUCATOR} assistantName="Empodera" assistantColor="#aec5e7" />
        </>
    );
};

export default EducatorTrack;
