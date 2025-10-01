# छठ पूजा in Bengaluru 🌅

A responsive, mobile-first website that helps the community find Chhath Puja celebrations across Bengaluru. Built with festive aesthetics featuring sunrise gradients, marigold colors, and traditional motifs.

![Chhath Puja Bengaluru](https://img.shields.io/badge/Festival-Chhath%20Puja-orange) ![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20Vite%20%7C%20Tailwind-blue) ![Mobile First](https://img.shields.io/badge/Design-Mobile%20First-green)

## ✨ Features

- **🔍 Smart Search & Filtering**: Search by location, venue, or organizer with real-time results
- **📍 Area-based Filtering**: Multi-select area filters with chip-based UI
- **🗺️ Google Maps Integration**: Direct links to event locations
- **📱 Mobile-First Design**: Optimized for phones with sticky filters and large tap targets
- **🎵 Background Music**: Traditional Chhath Puja tunes with floating player controls
- **♿ Accessibility First**: ARIA labels, focus states, high contrast support
- **🚀 Performance Optimized**: Lighthouse score ≥90, lazy loading, semantic HTML
- **🔗 SEO & Sharing**: JSON-LD structured data, Open Graph tags, shareable filter URLs
- **🎨 Festive Design**: Sunrise gradients, marigold colors, water ripples, and traditional motifs

## 🎨 Design Philosophy

**Color Palette**:
- Sunrise gradients (amber → coral)
- Marigold orange for accents
- Deep teal for water elements
- Saffron highlights
- Off-white backgrounds

**Visual Elements**:
- Animated sun icon with rising effect
- Water ripple separators
- Subtle rangoli patterns
- Lotus/marigold dividers
- Gentle hover animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS with custom theme
- **Data**: CSV parsing with PapaParse
- **Icons**: Lucide React
- **State Management**: React hooks with URL params
- **Deployment**: Static site ready

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd chhath-puja
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## 📊 Adding Events

### CSV Format
Events are loaded from `public/events.csv` with these columns:

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| `id` | number | ✅ | Unique identifier |
| `name` | string | ✅ | Event title |
| `area` | string | ✅ | Bengaluru area/locality |
| `venue` | string | ✅ | Venue name |
| `address` | string | ✅ | Full address |
| `map_url` | string | ✅ | Google Maps link |
| `date` | string | ✅ | YYYY-MM-DD format |
| `start_time` | string | ✅ | HH:MM (24-hour) |
| `end_time` | string | ✅ | HH:MM (24-hour) |
| `contact_name` | string | ✅ | Organizer name |
| `contact_phone` | string | ✅ | Phone with country code |
| `notes` | string | ❌ | Additional details |

### Example CSV Entry
```csv
6,Indiranagar Community Chhath,Indiranagar,HAL Park,HAL Airport Road Park Near CMH Road,https://maps.google.com/?q=HAL+Airport+Road+Park+Indiranagar+Bangalore,2025-11-07,05:30,09:00,Kavita Singh,+91-9876543215,Traditional breakfast served. Parking available at nearby mall.
```

### Adding New Events

1. **Edit the CSV file**:
   - Open `public/events.csv`
   - Add new row with all required columns
   - Ensure dates are in IST (Asia/Kolkata)

2. **Generate Google Maps URL**:
   - Search location on Google Maps
   - Copy shareable link or use format: `https://maps.google.com/?q=VENUE+AREA+Bangalore`

3. **Add Background Music** (Optional):
   - Replace `public/tune.mp3` with your Chhath Puja audio file
   - See `MUSIC_SETUP.md` for detailed instructions
   - Recommended: Traditional devotional songs under 5MB

4. **Redeploy**:
   - Commit changes to Git
   - Deploy will automatically refresh with new events

### Data Guidelines

- **Dates**: All times are IST (GMT+5:30)
- **Phone**: Include country code (+91 for India)
- **Address**: Be specific for better map accuracy
- **Notes**: Keep under 200 characters for better mobile display
- **Areas**: Use consistent naming (e.g., "Koramangala", not "Koramangala 5th Block")

## 🎯 Features in Detail

### Search & Filter
- **Text Search**: Searches across event name, venue, address, and area
- **Area Filters**: Multi-select with chip UI
- **URL State**: Filters are shareable via URL parameters
- **Empty State**: Helpful message with clear filters option

### Responsive Design
- **Mobile-first**: Optimized for phones and tablets
- **Sticky Filters**: Always accessible on mobile
- **Large Tap Targets**: Minimum 44px for accessibility
- **Readable Outdoors**: High contrast, large fonts

### Performance
- **Fast Loading**: Optimized bundle size
- **Lazy Loading**: Images load as needed
- **Efficient Rendering**: React optimization patterns
- **Offline Ready**: Works with cached data

### Accessibility
- **Screen Readers**: Proper ARIA labels and landmarks
- **Keyboard Navigation**: Full keyboard support
- **High Contrast**: Tested with contrast preferences
- **Focus Management**: Clear focus indicators

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```js
theme: {
  extend: {
    colors: {
      sunrise: { /* custom sunrise gradient */ },
      marigold: { /* marigold shades */ },
      // ... other colors
    }
  }
}
```

### Animations
Modify animations in `tailwind.config.js`:

```js
animation: {
  'sunrise': 'sunrise 3s ease-in-out infinite',
  'shimmer': 'shimmer 2s ease-in-out infinite',
  // ... other animations
}
```

### Content
- Update hero text in `src/components/HeroSection.jsx`
- Modify footer content in `src/components/Footer.jsx`
- Edit meta tags in `index.html`

## 📱 Mobile Optimization

- **Performance**: Lighthouse score ≥90 on mobile
- **Usability**: Large touch targets, readable fonts
- **Network**: Optimized for slower connections
- **Battery**: Minimal animations, efficient rendering

## 🌐 SEO & Social

- **Meta Tags**: Title, description, Open Graph
- **JSON-LD**: Structured data for each event
- **Sitemap**: Auto-generated for better indexing
- **Social Cards**: Custom Open Graph images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your events to the CSV
4. Test the changes locally
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Community

Built with ❤️ for the Chhath Puja community in Bengaluru. 

**Community Guidelines**:
- Always verify event details with organizers
- Respect local customs and venue rules
- Help maintain accuracy of information
- Spread joy and devotion in celebrations

---

*Made by the community, for the community* 🌅

**Happy Chhath Puja!** 🙏