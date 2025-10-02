// JSON-LD structured data for SEO
export const generateEventJsonLd = (event) => {
  // Validate that the event has a valid date
  if (!event.date || isNaN(event.date.getTime())) {
    throw new Error(`Invalid date for event: ${event.name}`)
  }

  const dateString = event.date.toISOString().split('T')[0]
  
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": `Chhath Puja celebration in ${event.area}, Bengaluru. ${event.notes || 'Join the community for traditional festivities.'}`,
    "startDate": `${dateString}T${event.start_time}:00+05:30`,
    "endDate": `${dateString}T${event.end_time}:00+05:30`,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.venue,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": event.address,
        "addressLocality": event.area,
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "url": event.map_url
    },
    "organizer": {
      "@type": "Person", 
      "name": event.contact_name,
      "telephone": event.contact_phone
    },
    "url": window.location.href,
    "image": "https://chhath-puja.netlify.app/chhath-puja.png",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  }
}

export const generateWebsiteJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "छठ पूजा (Chhath Puja) in Bengaluru",
    "alternateName": "Chhath Puja Bengaluru",
    "description": "Find Chhath Puja celebrations across Bengaluru. Community-curated list of events, locations, and organizer contacts.",
    "url": window.location.origin,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${window.location.origin}?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Hindu devotees, Bihar, Jharkhand and UP community in Bangalore"
    },
    "about": {
      "@type": "Thing",
      "name": "Chhath Puja",
      "description": "Ancient Hindu festival dedicated to Sun God"
    }
  }
}