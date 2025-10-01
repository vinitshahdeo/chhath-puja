import React from 'react'

const Diya = ({ size = 'md', className = '', animate = false }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  return (
    <div className={`inline-block ${sizeClasses[size]} ${className} ${animate ? 'animate-diya-glow' : ''}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full"
      >
        {/* Diya base */}
        <ellipse
          cx="12"
          cy="18"
          rx="8"
          ry="3"
          fill="#D97706"
          stroke="#92400E"
          strokeWidth="0.5"
        />
        
        {/* Diya body */}
        <path
          d="M4 18 C4 14, 8 12, 12 12 C16 12, 20 14, 20 18"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="0.5"
        />
        
        {/* Oil surface */}
        <ellipse
          cx="12"
          cy="16"
          rx="6"
          ry="1.5"
          fill="#FCD34D"
          opacity="0.8"
        />
        
        {/* Wick */}
        <rect
          x="11.5"
          y="14"
          width="1"
          height="3"
          fill="#78350F"
          rx="0.5"
        />
        
        {/* Flame */}
        <path
          d="M12 14 C11 12, 11 10, 12 8 C13 10, 13 12, 12 14"
          fill="url(#flameGradient)"
          className={animate ? 'animate-flame-flicker' : ''}
          style={{ transformOrigin: '12px 14px' }}
        />
        
        {/* Flame highlight */}
        <path
          d="M12 13 C11.5 11.5, 11.5 10, 12 9 C12.5 10, 12.5 11.5, 12 13"
          fill="#FEF3C7"
          opacity="0.8"
          className={animate ? 'animate-flame-flicker' : ''}
          style={{ transformOrigin: '12px 13px', animationDelay: '0.2s' }}
        />
        
        {/* Flame glow */}
        <circle
          cx="12"
          cy="10"
          r="3"
          fill="url(#glowGradient)"
          opacity="0.3"
          className={animate ? 'animate-pulse' : ''}
        />
        
        <defs>
          <radialGradient id="flameGradient" cx="0.5" cy="0.8" r="0.6">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="30%" stopColor="#FCD34D" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </radialGradient>
          
          <radialGradient id="glowGradient" cx="0.5" cy="0.5" r="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Diya