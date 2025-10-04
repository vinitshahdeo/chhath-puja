import React, { useState, useEffect } from 'react'
import { Music, Play, Heart, Star, ArrowLeft, Volume2, Headphones, Users, Award } from 'lucide-react'

const ShardaSinhaSongs = () => {
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

  const popularSongs = [
    {
      title: "Hey Chhath Mayya",
      description: "The most beloved Chhath song that fills hearts with devotion",
      duration: "6:12"
    },
    {
      title: "Kelwa Ke Paat Par",
      description: "Traditional song about offering prayers on banana leaves",
      duration: "5:45"
    },
    {
      title: "Pahile Pahile Chhathi Maiya",
      description: "A beautiful song welcoming Chhathi Maiya",
      duration: "7:23"
    },
    {
      title: "Suraj Dev Ho",
      description: "Devotional hymn dedicated to the Sun God",
      duration: "4:56"
    },
    {
      title: "Kaanch Hi Baans Ke Bahangiya",
      description: "Folk song about bamboo baskets used in Chhath rituals",
      duration: "6:34"
    },
    {
      title: "Kath ke Kothirya Ho Dinanaath",
      description: "A soulful rendition praising Lord Sun during Chhath",
      duration: "5:50"
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
              <span className="text-marigold-600">Sharda Sinha</span> Songs
            </h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-saffron-300 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-marigold-300 animate-bounce" style={{animationDuration: '6s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-sunrise-200 animate-pulse" style={{animationDuration: '5s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Music className="h-20 w-20 text-saffron-500 mx-auto animate-bounce" style={{animationDuration: '3s'}} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
            <span className="text-marigold-600 animate-pulse">Sharda Sinha</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-700">The Voice of छठ पूजा</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 px-4 sm:px-0">
            Listen to the soul-stirring melodies that have defined Chhath Puja celebrations for generations
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-marigold-500" />
              <span>Padma Bhushan Recipient</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Folk Music Legend</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Bihar Kokila</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Sharda Sinha */}
      <section 
        id="about-sharda" 
        data-section
        className={`py-16 bg-white transition-all duration-1000 ${isVisible['about-sharda'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                The <span className="text-marigold-600">Legendary Voice</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Sharda Sinha, fondly known as the "Bihar Kokila" (Nightingale of Bihar), is the most celebrated voice 
                  of Chhath Puja. Her melodious renditions of traditional folk songs have become synonymous with the festival.
                </p>
                <p>
                  Born in Bihar, she dedicated her life to preserving and promoting Maithili and Bhojpuri folk music. 
                  Her songs during Chhath Puja create an atmosphere of pure devotion and spiritual connection.
                </p>
                <p className="text-marigold-700 font-semibold">
                  Her voice has the power to transport listeners to the ghats of Bihar, where devotees stand in holy waters, 
                  offering prayers to the Sun God with hearts full of faith.
                </p>
                <p className='text-sm text-gray-500 mb-6'>
                    This page is dedicated to her timeless contributions to Chhath Puja music. 
                </p>
                
                {/* Custom Styled Tweet */}
                <div className="mt-6">
                  <div className="bg-gradient-to-r from-marigold-50 to-saffron-50 border-l-4 border-marigold-400 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Tweet Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-marigold-400 to-saffron-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">VS</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Vinit Shahdeo</p>
                          <p className="text-sm text-gray-500">@Vinit_Shahdeo</p>
                        </div>
                      </div>
                      <a
                        href="https://x.com/Vinit_Shahdeo/status/1853846978494443607"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-marigold-100 hover:bg-marigold-200 transition-colors duration-200 group"
                        title="View on Twitter/X"
                      >
                        <svg 
                          className="w-5 h-5 text-marigold-600 group-hover:text-marigold-700" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                    
                    {/* Tweet Content */}
                    <div className="mb-4">
                      <p className="text-gray-800 leading-relaxed">
                        I grew up watching my mom offer her prayers during Chhath Puja, with{' '}
                        <span className="text-marigold-600 font-medium">#ShardaSinha</span>'s voice echoing in the background. 
                        Your songs were the soundtrack to countless prayers, and your music will live on in our hearts forever. 💔
                      </p>
                      <p className="mt-2 text-gray-800 leading-relaxed">
                        RIP 🙏
                      </p>
                    </div>
                    
                    {/* Tweet Metadata */}
                    <div className="flex items-center justify-between pt-3 border-t border-marigold-200">
                      <p className="text-sm text-gray-500">November 5, 2024</p>
                      <a
                        href="https://x.com/Vinit_Shahdeo/status/1853846978494443607"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-marigold-600 hover:text-marigold-700 font-medium transition-colors duration-200"
                      >
                        View on X →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-marigold-100 to-saffron-100 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-1 gap-6 text-center">
                  <div className="space-y-4">
                    <Volume2 className="h-16 w-16 text-marigold-500 mx-auto animate-pulse" />
                    <h3 className="font-semibold text-xl text-gray-900">50+ Years of Music</h3>
                    <p className="text-gray-600">Dedicated her life to preserving Bihar's folk traditions</p>
                  </div>
                  <div className="space-y-4">
                    <Users className="h-16 w-16 text-saffron-500 mx-auto animate-bounce" style={{animationDuration: '3s'}} />
                    <h3 className="font-semibold text-xl text-gray-900">Millions of Devotees</h3>
                    <p className="text-gray-600">Her songs unite Bihari communities worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Songs */}
      <section 
        id="popular-songs" 
        data-section
        className={`py-16 transition-all duration-1000 ${isVisible['popular-songs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Most <span className="text-marigold-600">Beloved Songs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These timeless melodies have been echoing in Chhath celebrations for decades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {popularSongs.map((song, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible['popular-songs'] ? 'animate-fade-in' : ''}`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-marigold-400 to-saffron-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{song.title}</h3>
                    <p className="text-sm text-gray-600 mb-2 leading-relaxed">{song.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-marigold-600 font-medium">{song.duration}</span>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4 text-red-500" />
                        <Music className="h-4 w-4 text-marigold-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Playlist Section */}
      <section 
        id="playlist" 
        data-section
        className={`py-16 bg-white transition-all duration-1000 ${isVisible['playlist'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Headphones className="h-8 w-8 text-marigold-500 animate-pulse" />
              <Music className="h-8 w-8 text-saffron-500 animate-bounce" style={{animationDuration: '2s'}} />
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Complete <span className="text-marigold-600">Chhath Songs</span> Playlist
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Immerse yourself in the divine melodies of Sharda Sinha ji's Chhath Puja songs
            </p>
          </div>

          {/* YouTube Playlist Embed */}
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <div className="bg-gradient-to-r from-marigold-100 to-saffron-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl">
              <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/6DePUrUWtmE?list=RD6DePUrUWtmE&autoplay=0&mute=0"
                  title="Sharda Sinha Chhath Puja Songs - Hey Chhath Mayya"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Playlist Info */}
              <div className="mt-6 text-center">
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                  Sharda Sinha - छठ पूजा Songs Collection
                </h3>
                <p className="text-gray-600 mb-4">
                  A curated collection of the most beautiful Chhath Puja songs by the legendary Sharda Sinha ji
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Play className="h-4 w-4 text-marigold-500" />
                    <span>20+ Songs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>Traditional Folk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>HD Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular YouTube Videos */}
          <div className="mt-12 max-w-6xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
              Popular <span className="text-marigold-600">YouTube Videos</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 px-4 sm:px-0">
              {[
                {
                  title: "Ho Deenanath",
                  url: "https://youtu.be/fOVGz9WFymU?list=RDfOVGz9WFymU",
                  views: "52M+ views",
                  thumbnail: "🎵"
                },
                {
                  title: "Kelwa Ke Paat Par",
                  url: "https://youtu.be/-mpGoG0nWPo?list=RD-mpGoG0nWPo",
                  views: "39M+ views", 
                  thumbnail: "🌿"
                },
                {
                  title: "Uga He Suraj Dev",
                  url: "https://youtu.be/6e6Hp6R5SVU?list=RD6e6Hp6R5SVU",
                  views: "260M+ views",
                  thumbnail: "🙏"
                },
                {
                  title: "Kath ke Kothirya Ho Dinanaath",
                  url: "https://youtu.be/X6NUpqLF_Ww?list=RDX6NUpqLF_Ww", // Replace with actual URL
                  views: "3M+ views",
                  thumbnail: "🌞"
                },
                {
                  title: "Kaanch Hi Baans Ke Bahangiya",
                  url: "https://youtu.be/Eyq7vfxu4iA?list=RDEyq7vfxu4iA",
                  views: "75M+ views",
                  thumbnail: "🎋"
                },
                {
                  title: "Chhathi Maiya Aayi Na Dulari",
                  url: "https://youtu.be/CeIFoKoGszY?list=RDCeIFoKoGszY", // Replace with actual URL
                  views: "35M+ views",
                  thumbnail: "✨"
                }
              ].map((video, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group touch-manipulation"
                >
                  <div className="text-center mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-marigold-400 to-saffron-500 rounded-full flex items-center justify-center mx-auto text-xl sm:text-2xl mb-3 group-hover:animate-pulse">
                      {video.thumbnail}
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg text-gray-900 mb-2 line-clamp-2">{video.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mb-4">{video.views}</p>
                  </div>
                  
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-marigold-500 to-saffron-500 hover:from-marigold-600 hover:to-saffron-600 active:from-marigold-700 active:to-saffron-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-200 transform group-hover:scale-105 active:scale-95 touch-manipulation"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Play className="h-5 w-5" />
                      <span>Play on YouTube</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Listening Tips */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-sunrise-50 to-marigold-50 rounded-2xl p-8 border border-marigold-100">
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-4 text-center">
                🎵 Perfect for Chhath Celebrations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-marigold-600 mb-2">During Rituals:</h4>
                  <p>Play these songs softly in the background while performing Chhath rituals to create a devotional atmosphere.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-marigold-600 mb-2">Community Gatherings:</h4>
                  <p>Perfect for group celebrations, bringing people together through the shared love of these timeless melodies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
            Share the <span className="text-marigold-600">Divine Melodies</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Help preserve and spread the beautiful tradition of Chhath Puja songs. 
            Share these melodies with your family and friends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.app?.setCurrentPage?.('home')}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-marigold-500 hover:bg-marigold-600 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Events</span>
            </button>
            <button 
              onClick={() => window.app?.setCurrentPage?.('about')}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-white hover:bg-gray-50 text-marigold-600 font-semibold rounded-lg border-2 border-marigold-500 transition-colors duration-200 transform hover:scale-105"
            >
              <Heart className="h-5 w-5" />
              <span>Learn About छठ पूजा</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShardaSinhaSongs