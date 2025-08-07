
import React, { useState } from 'react';
import Slide from '../Slide';
import BifurcationSlide from '../BifurcationSlide';
import { Audience, SlideData } from '../../types';

const generalSlides: SlideData[] = [
    {
        id: 'capa',
        title: 'LABirintar',
        subtitle: 'Somos a inteligência em rede por trás da construção da Escola em Tempo Integral.',
        mainText: 'Conectamos escolas, educadores e famílias em um ecossistema vivo que transforma o contraturno em um polo de inovação, desenvolvimento e receita.',
        bgColor: 'bg-lab-red',
        textColor: 'text-white'
    },
    {
        id: 'problema',
        title: 'O Tempo Integral é Lei. A Qualidade é Desafio.',
        subtitle: 'O "Tapa na Cara"',
        mainText: 'A simples extensão da carga horária, sem uma revolução pedagógica, cria um problema triplo: escolas sobrecarregadas, famílias insatisfeitas e crianças despreparadas para o futuro.',
        bulletPoints: [
            "70% das famílias buscam habilidades socioemocionais.",
            "Falta mão de obra qualificada para o ensino integral.",
            "65% das crianças de hoje trabalharão em profissões que ainda não existem."
        ],
        bgColor: 'bg-lab-peach',
        textColor: 'text-lab-dark'
    },
    {
        id: 'solucao',
        title: 'Não vendemos aulas. Orquestramos um Ecossistema Vivo.',
        subtitle: 'A Visão LABirintar',
        mainText: 'Nossa solução se baseia em três pilares integrados: curadoria pedagógica de ponta, uma rede autogerida de educadores-empreendedores e uma plataforma tecnológica que automatiza toda a operação.',
        details: {
            title: "Como Funciona",
            text: "Integramos stakeholders para criar um ciclo virtuoso: educadores de alta qualidade atraem escolas, que atraem alunos, gerando dados que refinam a pedagogia e, por sua vez, atraem mais educadores de elite.",
            items: ["Curadoria Pedagógica", "Rede de Educadores", "Plataforma Tecnológica"]
        },
        bgColor: 'bg-lab-blue',
        textColor: 'text-white'
    },
    {
        id: 'tracao',
        title: 'Nascemos no Chão da Escola. E já estamos crescendo.',
        subtitle: 'A Prova Social Inicial',
        mainText: 'Nosso modelo foi validado no mundo real, gerando receita, impacto pedagógico e a confiança de nossos primeiros parceiros.',
        bulletPoints: [
            "4 meses de validação",
            "3 escolas atendidas",
            "32 alunos impactados",
            "R$ 20.000+ em receita"
        ],
        bgColor: 'bg-lab-lavender',
        textColor: 'text-lab-dark'
    },
];

interface GeneralTrackProps {
    onSelectAudience: (audience: Audience) => void;
}

const GeneralTrack: React.FC<GeneralTrackProps> = ({ onSelectAudience }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const totalSlides = generalSlides.length;

    const handleNext = () => {
        if (currentSlideIndex < totalSlides) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        }
    };
    
    if (currentSlideIndex < totalSlides) {
         return (
             <Slide 
                slide={generalSlides[currentSlideIndex]}
                totalSlides={totalSlides}
                currentSlideIndex={currentSlideIndex}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        );
    }
    
    return <BifurcationSlide onSelectAudience={onSelectAudience} />;
};

export default GeneralTrack;
