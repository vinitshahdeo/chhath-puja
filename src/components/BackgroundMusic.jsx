import React, { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'

const BackgroundMusic = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [volume, setVolume] = useState(0.3) // Start with lower volume
  const [audioError, setAudioError] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set initial volume
    audio.volume = volume
    audio.loop = true

    // Handle user interaction to start music (scroll, click, touch, keypress)
    const handleUserInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        if (!isPlaying) {
          playMusic()
        }
      }
    }

    // Handle visibility change to pause/resume
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseMusic()
      } else if (hasInteracted && !document.hidden) {
        playMusic()
      }
    }

    // Add multiple event listeners for user interaction
    window.addEventListener('scroll', handleUserInteraction, { passive: true })
    window.addEventListener('click', handleUserInteraction, { passive: true })
    window.addEventListener('touchstart', handleUserInteraction, { passive: true })
    window.addEventListener('keydown', handleUserInteraction, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('scroll', handleUserInteraction)
      window.removeEventListener('click', handleUserInteraction)
      window.removeEventListener('touchstart', handleUserInteraction)
      window.removeEventListener('keydown', handleUserInteraction)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [hasInteracted, isPlaying, volume])

  const playMusic = async () => {
    const audio = audioRef.current
    if (!audio) {
      console.log('Audio element not found')
      return
    }

    try {
      console.log('Attempting to play music...')
      await audio.play()
      setIsPlaying(true)
      console.log('Music started successfully')
    } catch (error) {
      console.log('Audio play failed:', error)
      // Auto-play might be blocked or file might not exist, that's okay
    }
  }

  const pauseMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.pause()
    setIsPlaying(false)
  }

  const togglePlay = () => {
    if (isPlaying) {
      pauseMusic()
    } else {
      setHasInteracted(true)
      playMusic()
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      audio.volume = volume
      setIsMuted(false)
    } else {
      audio.volume = 0
      setIsMuted(true)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    
    const audio = audioRef.current
    if (audio && !isMuted) {
      audio.volume = newVolume
    }
  }

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/tune.mp3"
        preload="auto"
        onError={(e) => {
          console.log('Audio load error:', e)
          console.log('Make sure tune.mp3 exists in the public folder')
          setAudioError(true)
        }}
        onLoadedData={() => {
          console.log('Audio file loaded successfully')
          setAudioError(false)
        }}
        onCanPlay={() => console.log('Audio ready to play')}
      />

      {/* Floating music controls */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-marigold-200 p-3">
        <div className="flex items-center space-x-2">
          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-marigold-500 hover:bg-marigold-600 text-white transition-colors duration-200"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4 ml-0.5" />
            )}
          </button>

          {/* Mute button */}
          <button
            onClick={toggleMute}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors duration-200"
            aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>

          {/* Volume slider - shows on hover */}
          <div className="hidden sm:block group">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{
                background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
              }}
            />
          </div>
        </div>

        {/* Music note indicator */}
        {isPlaying && (
          <div className="absolute -top-2 -right-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-xs">♪</span>
            </div>
          </div>
        )}
      </div>

      {/* Interaction hint for first-time users */}
      {!hasInteracted && !audioError && (
        <div className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 z-40 bg-marigold-500 text-white px-3 py-2 rounded-lg shadow-lg text-xs sm:text-sm animate-bounce max-w-xs">
          <div className="flex items-center space-x-2">
            <span>🎵</span>
            <span className="hidden sm:inline">Click anywhere to start music</span>
            <span className="sm:hidden">Tap to play</span>
          </div>
          <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-marigold-500 transform translate-y-full"></div>
        </div>
      )}

      {/* Debug message when audio file is missing */}
      {audioError && (
        <div className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 z-40 bg-red-500 text-white px-3 py-2 rounded-lg shadow-lg text-xs max-w-xs">
          <div className="flex items-center space-x-2">
            <span>⚠️</span>
            <span>Add tune.mp3 to public folder for music</span>
          </div>
        </div>
      )}
    </>
  )
}

export default BackgroundMusic