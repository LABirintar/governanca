
import React, { useState, useCallback } from 'react';
import { Audience } from './types';
import GeneralTrack from './components/tracks/GeneralTrack';
import InvestorTrack from './components/tracks/InvestorTrack';
import SchoolTrack from './components/tracks/SchoolTrack';
import EducatorTrack from './components/tracks/EducatorTrack';
import PartnerTrack from './components/tracks/PartnerTrack';
import Header from './components/Header';

const App: React.FC = () => {
    const [audience, setAudience] = useState<Audience>(Audience.GENERAL);

    const selectAudience = useCallback((selectedAudience: Audience) => {
        setAudience(selectedAudience);
    }, []);
    
    const resetToGeneral = useCallback(() => {
        setAudience(Audience.GENERAL);
    }, []);

    const renderContent = () => {
        switch (audience) {
            case Audience.INVESTOR:
                return <InvestorTrack />;
            case Audience.SCHOOL:
                return <SchoolTrack />;
            case Audience.EDUCATOR:
                return <EducatorTrack />;
            case Audience.PARTNER:
                return <PartnerTrack />;
            case Audience.GENERAL:
            default:
                return <GeneralTrack onSelectAudience={selectAudience} />;
        }
    };

    return (
        <div className="min-h-screen bg-lab-peach text-lab-dark overflow-x-hidden">
            <Header onLogoClick={resetToGeneral} currentAudience={audience} />
            <main>
                {renderContent()}
            </main>
        </div>
    );
};

export default App;
