import React from 'react'
import { Sun } from 'lucide-react'
import SearchInput from './SearchInput'
import AreaFilters from './AreaFilters'

const HeroSection = ({ searchTerm, onSearchChange, areas, selectedAreas, onAreaToggle }) => {
  return (
    <section className="relative bg-gradient-sunrise py-16 sm:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-saffron-200 animate-ripple"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-teal-200 animate-ripple" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-marigold-100 animate-ripple" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Sun rays effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-8 left-1/4 w-px h-20 bg-saffron-400 transform rotate-12"></div>
        <div className="absolute top-12 right-1/4 w-px h-16 bg-saffron-400 transform -rotate-12"></div>
        <div className="absolute top-6 left-1/2 w-px h-24 bg-saffron-400"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Sun icon with water line */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Sun className="h-16 w-16 text-saffron-500 animate-sunrise drop-shadow-lg" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-400 rounded-full animate-shimmer"></div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4">
          <span className="text-marigold-600">छठ पूजा</span>
          <br />
          <span className="text-gray-800">in Bengaluru</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
          Find a nearby celebration
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover community Chhath Puja celebrations across Bengaluru. 
          Connect with local organizers and join the festivities from <strong>October 25-28</strong>, 2025.
        </p>
        
        {/* Search and filters */}
        <div className="max-w-4xl mx-auto space-y-6">
          <SearchInput 
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search by location, venue, or organizer..."
          />
          
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm font-medium text-gray-700 self-center mb-2 sm:mb-0">
              Popular areas:
            </span>
            <AreaFilters 
              areas={areas.slice(0, 5)} // Show first 5 areas in hero
              selectedAreas={selectedAreas}
              onAreaToggle={onAreaToggle}
              variant="hero"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12"
          fill="url(#wave-gradient)"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(20, 184, 166, 0.1)" />
              <stop offset="100%" stopColor="rgba(13, 148, 136, 0.2)" />
            </linearGradient>
          </defs>
          <path d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection