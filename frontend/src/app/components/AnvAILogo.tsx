import React from 'react';

interface AnvAILogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'badge';
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
}

export function AnvAILogo({ size = 'md', variant = 'full', className = '', theme = 'auto' }: AnvAILogoProps) {
  // Dimension definitions
  const dimensions = {
    sm: { icon: 26, textTitle: 'text-xs', textSub: 'text-[9px]', gap: 'gap-2' },
    md: { icon: 36, textTitle: 'text-sm font-black', textSub: 'text-[10px]', gap: 'gap-2.5' },
    lg: { icon: 48, textTitle: 'text-lg font-black', textSub: 'text-xs', gap: 'gap-3' },
    xl: { icon: 64, textTitle: 'text-2xl font-black', textSub: 'text-sm', gap: 'gap-3.5' },
  }[size];

  // Dynamic Crown / Analytics Waveform Logo
  const IconSVG = (
    <svg
      width={dimensions.icon}
      height={dimensions.icon}
      viewBox="0 0 300 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-xs transition-transform duration-200 group-hover:scale-105"
    >
      <defs>
        <linearGradient id="anvaiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA726" />
          <stop offset="40%" stopColor="#FB8C00" />
          <stop offset="100%" stopColor="#F57C00" />
        </linearGradient>
      </defs>

      <path
        d="M 20 175
           C 28 135, 42 98, 58 78
           C 74 98, 88 126, 100 140
           C 112 100, 130 45, 150 15
           C 170 45, 188 100, 200 140
           C 212 126, 226 98, 242 78
           C 258 98, 272 135, 280 175
           C 266 148, 252 133, 238 122
           C 225 142, 214 185, 208 230
           C 200 234, 192 235, 186 235
           C 178 175, 166 110, 150 62
           C 134 110, 122 175, 114 235
           C 108 235, 100 234, 92 230
           C 86 185, 75 142, 62 122
           C 48 133, 34 148, 20 175 Z"
        fill="url(#anvaiaGrad)"
      />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{IconSVG}</div>;
  }

  return (
    <div className={`inline-flex items-center ${dimensions.gap} ${className} select-none`}>
      {IconSVG}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-center gap-1.5">
          <span className={`tracking-tight font-black ${dimensions.textTitle} bg-gradient-to-r from-[#F57C00] via-[#FB8C00] to-[#FFA726] bg-clip-text text-transparent`}>
            AnvAIa
          </span>
          <span className={`font-black tracking-tight ${dimensions.textTitle} ${theme === 'dark' ? 'text-white' : 'text-[#073B35]'}`}>
            ANALYTICS
          </span>
        </div>
        <span className={`font-semibold tracking-wider uppercase text-[#D4AF37] ${dimensions.textSub}`}>
          PT Bank Pembangunan Daerah Bali
        </span>
      </div>
    </div>
  );
}
