import React from 'react'
import { Search, RefreshCw } from 'lucide-react'

const EmptyState = ({ onClearFilters }) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-md mx-auto">
          {/* Empty state icon */}
          <div className="mb-6">
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-marigold-100 to-saffron-100 rounded-full flex items-center justify-center">
              <Search className="h-12 w-12 text-marigold-400" />
            </div>
          </div>
          
          {/* Empty state message */}
          <h3 className="text-2xl font-display font-semibold text-gray-900 mb-3">
            No events match these filters
          </h3>
          
          <p className="text-gray-600 mb-8 text-lg">
            Try adjusting your search criteria or browse all available celebrations.
          </p>
          
          {/* Clear filters button */}
          <button
            onClick={onClearFilters}
            className="btn-primary inline-flex items-center space-x-2"
            aria-label="Clear all filters and show all events"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Clear Filters</span>
          </button>
          
          {/* Additional help text */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Looking for a specific area? Try searching by locality name or venue.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmptyState