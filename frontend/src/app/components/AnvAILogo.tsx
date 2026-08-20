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
    sm: { height: 'h-7', textTitle: 'text-xs', textSub: 'text-[9px]', gap: 'gap-2' },
    md: { height: 'h-9', textTitle: 'text-sm font-black', textSub: 'text-[10px]', gap: 'gap-2.5' },
    lg: { height: 'h-12', textTitle: 'text-lg font-black', textSub: 'text-xs', gap: 'gap-3' },
    xl: { height: 'h-16', textTitle: 'text-2xl font-black', textSub: 'text-sm', gap: 'gap-3.5' },
  }[size];

  const LogoImage = (
    <img
      src="/logo-bpd-bali.png"
      alt="Bank BPD Bali Logo"
      className={`${dimensions.height} w-auto object-contain shrink-0 drop-shadow-xs transition-transform duration-200 group-hover:scale-105`}
    />
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{LogoImage}</div>;
  }

  return (
    <div className={`inline-flex items-center ${dimensions.gap} ${className} select-none`}>
      {LogoImage}
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
