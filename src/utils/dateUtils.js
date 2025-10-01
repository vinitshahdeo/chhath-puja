// Date formatting utilities for IST timezone
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'short',
    month: 'short', 
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
  }).format(date)
}

export const formatTime = (timeString) => {
  // Convert 24-hour time string to 12-hour format
  const [hours, minutes] = timeString.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  
  return `${displayHour}:${minutes} ${ampm}`
}

export const formatDateTime = (date, timeString) => {
  const formattedDate = formatDate(date)
  const formattedTime = formatTime(timeString)
  return `${formattedDate} at ${formattedTime}`
}

export const isEventToday = (eventDate) => {
  const today = new Date()
  const istToday = new Date(today.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
  return eventDate.toDateString() === istToday.toDateString()
}

export const isEventPast = (eventDate) => {
  const today = new Date()
  const istToday = new Date(today.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
  return eventDate < istToday && !isEventToday(eventDate)
}