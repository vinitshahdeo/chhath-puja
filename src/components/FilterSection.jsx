import React, { useState } from 'react'
import { Filter, ChevronDown } from 'lucide-react'
import SearchInput from './SearchInput'
import AreaFilters from './AreaFilters'

const FilterSection = ({ 
  areas, 
  selectedAreas, 
  onAreaToggle, 
  searchTerm, 
  onSearchChange, 
  totalEvents,
  filteredEvents 
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasActiveFilters = selectedAreas.length > 0 || searchTerm

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 text-gray-700 hover:text-marigold-600 
                       transition-colors duration-200 sm:hidden"
              aria-expanded={isExpanded}
              aria-label="Toggle filters"
            >
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filters</span>
              <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`} />
              {hasActiveFilters && (
                <span className="ml-1 h-2 w-2 bg-marigold-500 rounded-full" aria-hidden="true"></span>
              )}
            </button>
            
            {/* Desktop filters - always visible */}
            <div className="hidden sm:block">
              <div className="flex items-center space-x-3">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter by area:</span>
                <AreaFilters 
                  areas={areas}
                  selectedAreas={selectedAreas}
                  onAreaToggle={onAreaToggle}
                />
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            <span className="font-medium">{filteredEvents}</span>
            {totalEvents !== filteredEvents && (
              <span> of {totalEvents}</span>
            )}
            <span> event{filteredEvents !== 1 ? 's' : ''}</span>
          </div>
        </div>
        
        {/* Mobile filters - collapsible */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 sm:hidden">
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-700 block mb-2">Filter by area:</span>
                <AreaFilters 
                  areas={areas}
                  selectedAreas={selectedAreas}
                  onAreaToggle={onAreaToggle}
                />
              </div>
              
              {hasActiveFilters && (
                <button
                  onClick={() => {
                    onAreaToggle([])
                    onSearchChange('')
                  }}
                  className="text-sm text-marigold-600 hover:text-marigold-700 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterSection