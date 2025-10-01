import React from 'react'

const AreaFilters = ({ areas, selectedAreas, onAreaToggle, variant = 'default' }) => {
  const handleAreaToggle = (area) => {
    if (selectedAreas.includes(area)) {
      onAreaToggle(selectedAreas.filter(a => a !== area))
    } else {
      onAreaToggle([...selectedAreas, area])
    }
  }

  const chipClass = variant === 'hero' 
    ? 'text-sm px-3 py-2' 
    : 'text-xs px-2.5 py-1.5'

  if (areas.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2">
      {areas.map(area => (
        <button
          key={area}
          onClick={() => handleAreaToggle(area)}
          className={`filter-chip ${chipClass} ${
            selectedAreas.includes(area) 
              ? 'filter-chip-active' 
              : 'filter-chip-inactive'
          }`}
          aria-pressed={selectedAreas.includes(area)}
          aria-label={`Filter by ${area}`}
        >
          {area}
          {selectedAreas.includes(area) && (
            <span className="ml-1.5 text-xs" aria-hidden="true">×</span>
          )}
        </button>
      ))}
    </div>
  )
}

export default AreaFilters