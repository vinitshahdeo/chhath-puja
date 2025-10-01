import React from 'react'
import { Sun } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-marigold-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Sun className="h-8 w-8 text-marigold-500 animate-sunrise" />
            <div>
              <h1 className="text-xl font-display font-bold text-gray-900">
                <span className="text-marigold-600">छठ पूजा</span> in Bengaluru
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Community Celebrations</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Main navigation">
            <a 
              href="#events" 
              className="text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
            >
              Events
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header