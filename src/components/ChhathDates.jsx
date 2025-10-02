import React from 'react'
import { Calendar, Sunrise, Sunset, Sun, Clock } from 'lucide-react'

const ChhathDates = () => {
  const chhathDates = [
    {
      day: 1,
      ritual: 'Nahay Khay',
      date: 'Saturday, October 25, 2025',
      description: 'Holy bath and preparation',
      icon: '🛁',
      color: 'teal'
    },
    {
      day: 2,
      ritual: 'Kharna',
      date: 'Sunday, October 26, 2025',
      description: 'Fasting and evening prayer',
      icon: '🙏',
      color: 'marigold'
    },
    {
      day: 3,
      ritual: 'Sandhya Arghya',
      date: 'Monday, October 27, 2025',
      description: 'Evening offering to setting sun',
      icon: '🌅',
      color: 'saffron'
    },
    {
      day: 4,
      ritual: 'Usha Arghya & Parana',
      date: 'Tuesday, October 28, 2025',
      description: 'Morning offering & breaking fast',
      icon: '🌞',
      color: 'sunrise'
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      teal: 'bg-teal-50 border-teal-200 text-teal-700',
      marigold: 'bg-marigold-50 border-marigold-200 text-marigold-700',
      saffron: 'bg-saffron-50 border-saffron-200 text-saffron-700',
      sunrise: 'bg-sunrise-50 border-sunrise-200 text-sunrise-700'
    }
    return colorMap[color] || colorMap.marigold
  }

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calendar className="h-10 w-10 text-marigold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            <span className="text-marigold-600">छठ पूजा</span> 2025 Dates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four sacred days of devotion, from October 25-28, 2025
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-marigold-400 to-saffron-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chhathDates.map((item, index) => (
              <div 
                key={item.day}
                className="relative group"
              >
                {/* Connection line for desktop */}
                {index < chhathDates.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 w-6 h-0.5 bg-marigold-200 z-0"></div>
                )}
                
                {/* Card */}
                <div className={`relative bg-white rounded-2xl border-2 ${getColorClasses(item.color)} p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg z-10`}>
                  {/* Day number */}
                  <div className="absolute -top-3 left-4 bg-marigold-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Day {item.day}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-3xl mb-3">
                    {item.icon}
                  </div>
                  
                  {/* Ritual name */}
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {item.ritual}
                  </h3>
                  
                  {/* Date */}
                  <p className="text-sm font-medium text-gray-800 mb-2">
                    {item.date}
                  </p>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-sunrise-50 to-marigold-50 rounded-2xl p-6 border border-marigold-100 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sun className="h-6 w-6 text-saffron-500" />
              <Clock className="h-6 w-6 text-marigold-500" />
            </div>
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-3">
              Important Timings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center justify-center space-x-2">
                <Sunset className="h-4 w-4 text-orange-500" />
                <span><strong>Sandhya Arghya:</strong> Around 5:30-6:00 PM</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Sunrise className="h-4 w-4 text-yellow-500" />
                <span><strong>Usha Arghya:</strong> Around 6:00-6:30 AM</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4">
              *Exact timings may vary by location. Please confirm with local organizers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChhathDates