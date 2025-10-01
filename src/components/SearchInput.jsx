import React from 'react'
import { Search, X } from 'lucide-react'

const SearchInput = ({ value, onChange, placeholder = "Search events...", className = "" }) => {
  return (
    <div className={`relative max-w-2xl mx-auto ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 text-lg border border-gray-200 rounded-2xl 
                   focus:outline-none focus:ring-2 focus:ring-marigold-500 focus:border-marigold-500
                   bg-white shadow-lg placeholder-gray-400 transition-all duration-200"
          aria-label="Search events"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 
                     rounded-full transition-colors duration-200"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchInput