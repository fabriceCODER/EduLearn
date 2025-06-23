import React from 'react';

const EduLearnLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 40 }) => (
  <div className={`flex items-center gap-2 ${className}`} style={{ fontFamily: 'inherit' }}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EduLearn logo"
    >
      <defs>
        <linearGradient id="edulearn-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#edulearn-gradient)" />
      <text
        x="50%"
        y="56%"
        textAnchor="middle"
        fontWeight="bold"
        fontSize="20"
        fill="#fff"
        fontFamily="inherit"
        dominantBaseline="middle"
      >
        E
      </text>
    </svg>
    <span className="text-2xl font-bold select-none">
      <span className="text-yellow-500">Edu</span>
      <span className="text-indigo-600">Learn</span>
    </span>
  </div>
);

export default EduLearnLogo; 