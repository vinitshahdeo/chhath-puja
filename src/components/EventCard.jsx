import React, { useState } from 'react'
import { MapPin, Phone, Clock, Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { formatDate, formatTime } from '../utils/dateUtils'

const EventCard = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleMapClick = () => {
    window.open(event.map_url, '_blank', 'noopener,noreferrer')
  }

  const handleCallClick = () => {
    window.location.href = `tel:${event.contact_phone}`
  }

  const isToday = new Date().toDateString() === event.date.toDateString()
  const isPast = event.date < new Date() && !isToday

  return (
    <article className="bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden group">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-marigold-50 to-saffron-50 p-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-lg text-gray-900 text-clamp-2 mb-1">
              {event.name}
            </h3>
            <p className="text-sm font-medium text-marigold-600 bg-marigold-100 px-2 py-1 rounded-full inline-block">
              {event.area}
            </p>
          </div>
          {isToday && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full ml-2 whitespace-nowrap">
              Today
            </span>
          )}
          {isPast && (
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full ml-2 whitespace-nowrap">
              Past
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span className="font-medium">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{formatTime(event.start_time)} - {formatTime(event.end_time)}</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="p-4 pt-2">
        <div className="space-y-3">
          {/* Venue and address */}
          <div className="flex items-start space-x-2">
            <MapPin className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-clamp-1" title={event.venue}>
                {event.venue}
              </p>
              <p className="text-sm text-gray-600 text-clamp-2" title={event.address}>
                {event.address}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-marigold-500 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{event.contact_name}</p>
              <button
                onClick={handleCallClick}
                className="text-sm text-marigold-600 hover:text-marigold-700 hover:underline transition-colors duration-200"
                aria-label={`Call ${event.contact_name} at ${event.contact_phone}`}
              >
                {event.contact_phone}
              </button>
            </div>
          </div>

          {/* Notes - expandable if long */}
          {event.notes && (
            <div>
              <p className={`text-sm text-gray-600 ${!isExpanded ? 'text-clamp-2' : ''}`}>
                {event.notes}
              </p>
              {event.notes.length > 100 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs text-marigold-600 hover:text-marigold-700 mt-1 flex items-center space-x-1"
                >
                  <span>{isExpanded ? 'Show less' : 'Read more'}</span>
                  {isExpanded ? (
                    <ChevronUp className="h-3 w-3" />
                  ) : (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-4 pt-4 border-t border-gray-100">
          <button
            onClick={handleMapClick}
            className="btn-secondary flex-1 flex items-center justify-center space-x-2 text-sm"
            aria-label={`View ${event.name} location on Google Maps`}
          >
            <ExternalLink className="h-4 w-4" />
            <span>View on Google Maps</span>
          </button>
          
          <button
            onClick={handleCallClick}
            className="btn-primary flex-1 flex items-center justify-center space-x-2 text-sm"
            aria-label={`Call organizer ${event.contact_name}`}
          >
            <Phone className="h-4 w-4" />
            <span>Call Organizer</span>
          </button>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-marigold-200 via-saffron-200 to-teal-200"></div>
    </article>
  )
}

export default EventCard