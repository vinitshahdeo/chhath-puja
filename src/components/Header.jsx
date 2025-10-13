import React, { useState } from 'react'
import { Sun, Menu, X } from 'lucide-react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-marigold-100 relative">
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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Main navigation">
            <button 
              onClick={() => {
                // If already on home page, scroll to events section
                if (window.location.pathname === '/' && document.querySelector('#events')) {
                  document.querySelector('#events').scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.app?.setCurrentPage?.('home');
                }
              }}
              className="text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
            >
              Events
            </button>
            <button 
              onClick={() => window.app?.setCurrentPage?.('about')}
              className="text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
            >
              About Chhath Puja
            </button>
            <button 
              onClick={() => window.app?.setCurrentPage?.('songs')}
              className="text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
            >
              Chhath Songs
            </button>
            <a 
              href="https://forms.gle/RDoXHfEvTTwQRpin7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
            >
              Add Event
            </a>
            <a 
              href="https://forms.gle/UAVTiY8ewEy4cXcn8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
            >
              Submit Community
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-marigold-600 hover:bg-marigold-50 transition-colors duration-200"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-b border-marigold-100 z-50">
            <nav className="px-4 py-4 space-y-3" role="navigation" aria-label="Mobile navigation">
              <button 
                onClick={() => {
                  // If already on home page, scroll to events section
                  if (window.location.pathname === '/' && document.querySelector('#events')) {
                    document.querySelector('#events').scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.app?.setCurrentPage?.('home');
                  }
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left py-2 text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
              >
                Events
              </button>
              <button 
                onClick={() => {
                  window.app?.setCurrentPage?.('about')
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left py-2 text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
              >
                About Chhath Puja
              </button>
              <button 
                onClick={() => {
                  window.app?.setCurrentPage?.('songs')
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left py-2 text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
              >
                Chhath Songs
              </button>
              <a 
                href="https://forms.gle/RDoXHfEvTTwQRpin7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-2 text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Add Event
              </a>
              <a 
                href="https://forms.gle/UAVTiY8ewEy4cXcn8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-2 text-gray-600 hover:text-marigold-600 transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Submit Community
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header