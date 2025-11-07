import React from 'react'
import { Heart, Star, Sparkles, Users } from 'lucide-react'

const ThankYouSection = () => {
  const currentDate = new Date();
  const chhathEndDate = new Date('2025-10-28T09:00:00+05:30');
  
  // Only show this section after Chhath Puja has ended
  if (currentDate <= chhathEndDate) {
    return null;
  }
  
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-marigold-50 via-saffron-25 to-white relative overflow-hidden">
      {/* Decorative divider at the top */}
      <div className="absolute top-0 left-0 w-full">
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-marigold-300 to-transparent"></div>
            <Star className="h-4 w-4 text-marigold-400" />
            <div className="w-8 h-px bg-marigold-300"></div>
            <Heart className="h-5 w-5 text-marigold-500" />
            <div className="w-8 h-px bg-marigold-300"></div>
            <Star className="h-4 w-4 text-marigold-400" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-marigold-300 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-marigold-200 animate-pulse"></div>
        <div className="absolute bottom-16 left-10 w-16 h-16 rounded-full bg-saffron-200 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-teal-100 animate-ping"></div>
        <Sparkles className="absolute top-20 left-1/2 h-8 w-8 text-marigold-300 animate-spin" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main thank you message */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Heart className="h-8 w-8 text-marigold-600 animate-pulse" />
              <span className="font-display font-bold text-marigold-700 text-4xl sm:text-5xl">
                धन्यवाद!
              </span>
              <Heart className="h-8 w-8 text-marigold-600 animate-pulse" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Thank You for an Amazing Chhath Puja 2025!
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your participation made this celebration truly special. From every offering to Chhathi Maiya 
              to the beautiful community gatherings across Bengaluru, we witnessed the power of faith and unity.
            </p>
          </div>

          {/* Statistics or highlights */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-marigold-100">
              <Users className="h-8 w-8 text-marigold-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">12+</div>
              <div className="text-sm text-gray-600">Community Events</div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-saffron-100">
              <Star className="h-8 w-8 text-saffron-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">4 Days</div>
              <div className="text-sm text-gray-600">Of Sacred Celebration</div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-teal-100">
              <Sparkles className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">Oct 25-28</div>
              <div className="text-sm text-gray-600">Blessed Days</div>
            </div>
          </div> */}

          {/* Future message */}
          {/* <div className="bg-gradient-to-r from-marigold-100 to-saffron-100 rounded-2xl p-8 shadow-xl border-2 border-marigold-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="h-6 w-6 text-saffron-500" />
              <h3 className="text-xl font-bold text-gray-800">Until We Meet Again</h3>
              <Star className="h-6 w-6 text-saffron-500" />
            </div>
            
            <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
              May the blessings of Chhathi Maiya continue to shine upon you and your families. 
              Keep the spirit of devotion and community alive throughout the year.
            </p>
            
            <p className="text-lg font-semibold text-marigold-700">
              🙏 See you next year for Chhath Puja 2026! 🌅
            </p>
          </div> */}
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-6 sm:h-8"
          fill="url(#thank-you-gradient)"
        >
          <defs>
            <linearGradient id="thank-you-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(251, 191, 36, 0.1)" />
              <stop offset="100%" stopColor="rgba(245, 158, 11, 0.2)" />
            </linearGradient>
          </defs>
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}

export default ThankYouSection