import React, { useState, useEffect, useMemo } from 'react'
import Papa from 'papaparse'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ChhathDates from './components/ChhathDates'
import FilterSection from './components/FilterSection'
import EventsList from './components/EventsList'
import CommunityConnect from './components/CommunityConnect'
import Footer from './components/Footer'
import EmptyState from './components/EmptyState'
import BackgroundMusic from './components/BackgroundMusic'
import AboutChhathPuja from './pages/AboutChhathPuja'
import ShardaSinhaSongs from './pages/ShardaSinhaSongs'
import { generateEventJsonLd } from './utils/jsonLd'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAreas, setSelectedAreas] = useState([])
  const [urlParams, setUrlParams] = useState(new URLSearchParams())

  // Make navigation available globally for components
  useEffect(() => {
    window.app = { setCurrentPage }
    return () => {
      delete window.app
    }
  }, [setCurrentPage])

  // Load events from CSV
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch('/events.csv')
        if (!response.ok) {
          throw new Error('Failed to load events')
        }
        const csvText = await response.text()
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            if (results.errors.length > 0) {
              console.warn('CSV parsing warnings:', results.errors)
            }
            
            // Process and validate data
            const processedEvents = results.data
              .filter(event => event.id && event.name && event.date)
              .map(event => {
                const parsedDate = new Date(event.date + 'T00:00:00+05:30')
                
                // Skip events with invalid dates
                if (isNaN(parsedDate.getTime())) {
                  console.warn(`Skipping event with invalid date: ${event.name} - ${event.date}`)
                  return null
                }
                
                return {
                  ...event,
                  id: parseInt(event.id),
                  date: parsedDate,
                  start_time: event.start_time || '06:00',
                  end_time: event.end_time || '09:00',
                }
              })
              .filter(event => event !== null) // Remove invalid events
              .sort((a, b) => a.date - b.date) // Sort by date
            
            setEvents(processedEvents)
            
            // Generate JSON-LD for each event with error handling
            processedEvents.forEach(event => {
              try {
                const script = document.createElement('script')
                script.type = 'application/ld+json'
                script.textContent = JSON.stringify(generateEventJsonLd(event))
                document.head.appendChild(script)
              } catch (error) {
                console.warn(`Failed to generate JSON-LD for event: ${event.name}`, error)
              }
            })
            
            setLoading(false)
          },
          error: (error) => {
            console.error('CSV parsing error:', error)
            setError('Failed to parse events data')
            setLoading(false)
          }
        })
      } catch (err) {
        console.error('Error loading events:', err)
        setError('Failed to load events. Please try again later.')
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  // Handle URL parameters for shareable filters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const search = params.get('search') || ''
    const areas = params.get('areas')?.split(',').filter(Boolean) || []
    
    setSearchTerm(search)
    setSelectedAreas(areas)
    setUrlParams(params)
  }, [])

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchTerm) params.set('search', searchTerm)
    if (selectedAreas.length > 0) params.set('areas', selectedAreas.join(','))
    
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`
    window.history.replaceState({}, '', newUrl)
    setUrlParams(params)
  }, [searchTerm, selectedAreas])

  // Get unique areas from events
  const areas = useMemo(() => {
    const uniqueAreas = [...new Set(events.map(event => event.area))]
    return uniqueAreas.sort()
  }, [events])

  // Filter events based on search and area filters
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = !searchTerm || 
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.area.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesArea = selectedAreas.length === 0 || 
        selectedAreas.includes(event.area)
      
      return matchesSearch && matchesArea
    })
  }, [events, searchTerm, selectedAreas])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedAreas([])
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-sunrise flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-marigold-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-marigold-700 font-medium">Loading events...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-sunrise flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  // Render different pages based on current page state
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen">
        <AboutChhathPuja />
      </div>
    )
  }

  if (currentPage === 'songs') {
    return (
      <div className="min-h-screen">
        <ShardaSinhaSongs />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sunrise-50 overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          areas={areas}
          selectedAreas={selectedAreas}
          onAreaToggle={setSelectedAreas}
        />
        
        <FilterSection 
          areas={areas}
          selectedAreas={selectedAreas}
          onAreaToggle={setSelectedAreas}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          totalEvents={events.length}
          filteredEvents={filteredEvents.length}
        />
        
        {filteredEvents.length > 0 ? (
          <EventsList events={filteredEvents} />
        ) : (
          <EmptyState onClearFilters={clearFilters} />
        )}

        {/* <ChhathDates /> */}
      </main>

      {/* Community Connect Section */}
      <CommunityConnect />
      
      <Footer />
      
      {/* Background Music */}
      <BackgroundMusic />
    </div>
  )
}

export default App