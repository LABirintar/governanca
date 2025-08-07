
import React from 'react';

const LabirintarLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="45" y="28" fontFamily="Raleway, sans-serif" fontSize="28" fontWeight="bold" fill="currentColor">
            LABirintar
        </text>
        <g transform="translate(15, 20) scale(0.6)">
            <circle cx="0" cy="0" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M 0 -16 V -9" stroke="currentColor" strokeWidth="2.5" />
            <path d="M 0 16 V 9" stroke="currentColor" strokeWidth="2.5" />
            <path d="M -16 0 H -9" stroke="currentColor" strokeWidth="2.5" />
            <path d="M 16 0 H 9" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M -6.36 6.36 L -3.5 3.5" stroke="currentColor" strokeWidth="2" />
            <path d="M 6.36 -6.36 L 3.5 -3.5" stroke="currentColor" strokeWidth="2" />
            <path d="M -9 0 a 9 9 0 0 1 9 -9" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 9 0 a 9 9 0 0 1 -9 9" fill="none" stroke="currentColor" strokeWidth="2" />
             <circle cx="0" cy="0" r="3" fill="currentColor" />
        </g>
    </svg>
);

export default LabirintarLogo;
