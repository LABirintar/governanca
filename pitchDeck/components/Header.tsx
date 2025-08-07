
import React from 'react';
import { Audience } from '../types';
import LabirintarLogo from './icons/LabirintarLogo';

interface HeaderProps {
    onLogoClick: () => void;
    currentAudience: Audience;
}

const getAudienceName = (audience: Audience) => {
    switch(audience) {
        case Audience.INVESTOR: return 'Trilha do Investidor';
        case Audience.SCHOOL: return 'Trilha da Escola';
        case Audience.EDUCATOR: return 'Trilha do Educador';
        case Audience.PARTNER: return 'Trilha do Parceiro';
        default: return '';
    }
};


const Header: React.FC<HeaderProps> = ({ onLogoClick, currentAudience }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-lab-peach/80 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
                <button onClick={onLogoClick} className="transition-transform hover:scale-105">
                    <LabirintarLogo className="h-10 w-auto text-lab-red" />
                </button>
                {currentAudience !== Audience.GENERAL && (
                    <div className="hidden sm:block text-right">
                         <span className="text-sm font-semibold text-lab-red bg-lab-red/10 px-3 py-1 rounded-full">
                           {getAudienceName(currentAudience)}
                        </span>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
