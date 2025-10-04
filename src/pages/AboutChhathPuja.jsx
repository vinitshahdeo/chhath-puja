import React, { useState, useEffect } from 'react'
import { Sun, Moon, Waves, Heart, Users, Calendar, Clock, Star, Flower, ArrowLeft, Droplets, Sunrise, Sunset } from 'lucide-react'

const AboutChhathPuja = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.3 }
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const rituals = [
    {
      day: "Day 1",
      name: "Nahay Khay",
      description: "Holy bath and eating pure food",
      icon: Waves,
      color: "from-blue-400 to-teal-500"
    },
    {
      day: "Day 2", 
      name: "Lohanda & Kharna",
      description: "Fasting and evening meal preparation",
      icon: Moon,
      color: "from-purple-400 to-indigo-500"
    },
    {
      day: "Day 3",
      name: "Sandhya Arghya",
      description: "Evening offerings to the setting sun",
      icon: Sun,
      color: "from-orange-400 to-red-500"
    },
    {
      day: "Day 4",
      name: "Usha Arghya",
      description: "Dawn offerings to the rising sun",
      icon: Star,
      color: "from-yellow-400 to-orange-500"
    }
  ]

  const traditions = [
    {
      title: "Standing in Water",
      description: "Devotees stand waist-deep in holy waters, connecting with nature's elements",
      icon: Waves
    },
    {
      title: "Community Bonding",
      description: "Families and neighbors come together, sharing the spiritual journey",
      icon: Users
    },
    {
      title: "Folk Songs",
      description: "Traditional Chhath songs create a divine atmosphere of devotion",
      icon: Heart
    },
    {
      title: "Pure Offerings",
      description: "Thekua, fruits, and other prasad prepared with utmost purity",
      icon: Flower
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sunrise-50 via-marigold-50 to-saffron-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-marigold-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => window.app?.setCurrentPage?.('home')}
              className="flex items-center space-x-2 text-marigold-600 hover:text-marigold-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Events</span>
            </button>
            <h1 className="font-display font-bold text-xl text-gray-900">
              About <span className="text-marigold-600">छठ पूजा</span>
            </h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-saffron-300 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-marigold-300 animate-bounce" style={{animationDuration: '6s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-sunrise-200 animate-pulse" style={{animationDuration: '5s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Sun className="h-20 w-20 text-saffron-500 mx-auto animate-spin" style={{animationDuration: '20s'}} />
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-display font-bold text-gray-900 mb-6">
            <span className="text-marigold-600 animate-pulse">छठ पूजा</span>
            <br />
            <span className="text-3xl sm:text-4xl text-gray-700">The Festival of the Sun</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A sacred journey of devotion, purity, and gratitude to the Sun God and nature's divine forces
          </p>
        </div>
      </section>

      {/* What is Chhath Puja */}
      <section 
        id="what-is-chhath" 
        data-section
        className={`py-16 transition-all duration-1000 ${isVisible['what-is-chhath'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                What is <span className="text-marigold-600">छठ पूजा</span>?
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Chhath Puja is an ancient Hindu festival dedicated to the Sun God (Surya) and his consort, Usha. 
                  It's a festival of faith, purity, and devotion that spans four days of rigorous rituals.
                </p>
                <p>
                  Originating from the Vedic period, this festival is primarily celebrated in Bihar, Jharkhand, 
                  Eastern Uttar Pradesh, and Nepal. The word "Chhath" means "six" in Hindi, referring to the 
                  sixth day of the lunar month when the festival begins.
                </p>
                <p className="text-marigold-700 font-semibold">
                  It's not just a festival—it's a spiritual journey that connects devotees with the cosmic energies 
                  of the sun, promoting physical purification and mental peace.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-marigold-100 to-saffron-100 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <Sun className="h-12 w-12 text-saffron-500 mx-auto animate-pulse" />
                    <h3 className="font-semibold text-gray-900">Sun Worship</h3>
                    <p className="text-sm text-gray-600">Direct devotion to Surya Dev</p>
                  </div>
                  <div className="space-y-2">
                    <Waves className="h-12 w-12 text-blue-500 mx-auto animate-bounce" style={{animationDuration: '3s'}} />
                    <h3 className="font-semibold text-gray-900">Water Rituals</h3>
                    <p className="text-sm text-gray-600">Sacred offerings in rivers</p>
                  </div>
                  <div className="space-y-2">
                    <Users className="h-12 w-12 text-green-500 mx-auto animate-pulse" style={{animationDuration: '4s'}} />
                    <h3 className="font-semibold text-gray-900">Family Unity</h3>
                    <p className="text-sm text-gray-600">Brings families together</p>
                  </div>
                  <div className="space-y-2">
                    <Heart className="h-12 w-12 text-red-500 mx-auto animate-bounce" style={{animationDuration: '2s'}} />
                    <h3 className="font-semibold text-gray-900">Pure Devotion</h3>
                    <p className="text-sm text-gray-600">Selfless spiritual practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Days Journey */}
      <section 
        id="four-days" 
        data-section
        className={`py-16 bg-white transition-all duration-1000 ${isVisible['four-days'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              The Sacred <span className="text-marigold-600">Four Days</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each day of Chhath Puja has its own significance and rituals, building toward the climactic sun offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rituals.map((ritual, index) => {
              const Icon = ritual.icon
              return (
                <div 
                  key={index}
                  className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible['four-days'] ? 'animate-fade-in' : ''}`}
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${ritual.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${ritual.color} flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{ritual.day}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{ritual.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{ritual.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Chhath Puja 2025 Dates */}
      <section 
        id="dates-2025" 
        data-section
        className={`py-16 bg-gradient-to-r from-sunrise-50 to-saffron-50 transition-all duration-1000 ${isVisible['dates-2025'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              <span className="text-marigold-600">छठ पूजा</span> 2025 Dates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mark your calendar for the four sacred days of devotion
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-marigold-400 to-saffron-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                day: 1,
                ritual: 'Nahay Khay',
                date: 'October 25, 2025',
                weekday: 'Saturday',
                description: 'Holy bath and preparation',
                icon: Droplets,
                color: 'from-teal-400 to-blue-500'
              },
              {
                day: 2,
                ritual: 'Kharna',
                date: 'October 26, 2025',
                weekday: 'Sunday',
                description: 'Fasting and evening prayer',
                icon: Heart,
                color: 'from-marigold-400 to-orange-500'
              },
              {
                day: 3,
                ritual: 'Sandhya Arghya',
                date: 'October 27, 2025',
                weekday: 'Monday',
                description: 'Evening offering to setting sun',
                icon: Sunset,
                color: 'from-saffron-400 to-red-500'
              },
              {
                day: 4,
                ritual: 'Usha Arghya & Parana',
                date: 'October 28, 2025',
                weekday: 'Tuesday',
                description: 'Morning offering & breaking fast',
                icon: Sunrise,
                color: 'from-sunrise-400 to-yellow-500'
              }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div 
                  key={item.day}
                  className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible['dates-2025'] ? 'animate-fade-in' : ''}`}
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  {/* Day badge */}
                  <div className="absolute -top-3 left-4 bg-marigold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Day {item.day}
                  </div>
                  
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:animate-pulse`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {item.ritual}
                  </h3>
                  
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-marigold-600">
                      {item.weekday}
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      {item.date}
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              )
            })}
          </div>

          {/* Important Timings */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-marigold-100 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Clock className="h-6 w-6 text-marigold-500 animate-pulse" />
                <Sun className="h-6 w-6 text-saffron-500 animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900">
                Important Timings
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Sun className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sandhya Arghya</h4>
                <p className="text-lg font-bold text-orange-600 mb-1">5:30 - 6:00 PM</p>
                <p className="text-sm text-gray-600">Evening offering to setting sun</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Usha Arghya</h4>
                <p className="text-lg font-bold text-yellow-600 mb-1">6:00 - 6:30 AM</p>
                <p className="text-sm text-gray-600">Dawn offering to rising sun</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                <strong>Note:</strong> Exact timings may vary by location. Please confirm with local organizers for precise sunrise/sunset times in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traditions Section */}
      <section 
        id="traditions" 
        data-section
        className={`py-16 bg-white transition-all duration-1000 ${isVisible['traditions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Sacred <span className="text-marigold-600">Traditions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The beautiful customs that make Chhath Puja a unique spiritual experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {traditions.map((tradition, index) => {
              const Icon = tradition.icon
              return (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${isVisible['traditions'] ? 'animate-slide-in-left' : ''}`}
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-marigold-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-marigold-600 animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tradition.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tradition.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section 
        id="significance" 
        data-section
        className={`py-16 bg-gradient-to-r from-marigold-50 to-saffron-50 transition-all duration-1000 ${isVisible['significance'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Spiritual <span className="text-marigold-600">Significance</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-spin" style={{animationDuration: '3s'}}>
                <Sun className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solar Energy</h3>
              <p className="text-gray-600 leading-relaxed">
                The festival harnesses the healing power of solar energy, promoting physical and mental well-being through direct sun worship.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <Waves className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Purification</h3>
              <p className="text-gray-600 leading-relaxed">
                The rituals cleanse the body, mind, and soul, removing negative energies and promoting spiritual growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce" style={{animationDuration: '2s'}}>
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Divine Grace</h3>
              <p className="text-gray-600 leading-relaxed">
                Devotees seek blessings for prosperity, health, and happiness, expressing gratitude to the cosmic forces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
            Experience <span className="text-marigold-600">छठ पूजा</span> in Bengaluru
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Join the vibrant Chhath Puja celebrations across Bengaluru and connect with your roots, 
            even when you're far from home. Find a community celebration near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.app?.setCurrentPage?.('home')}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-marigold-500 hover:bg-marigold-600 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              <span>Find Celebrations Near You</span>
            </button>
            <button 
              onClick={() => window.app?.setCurrentPage?.('songs')}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-white hover:bg-gray-50 text-marigold-600 font-semibold rounded-lg border-2 border-marigold-500 transition-colors duration-200 transform hover:scale-105"
            >
              <Heart className="h-5 w-5" />
              <span>Listen to Chhath Songs</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutChhathPuja