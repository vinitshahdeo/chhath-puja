<img width="1536" height="1024" alt="og" src="https://github.com/user-attachments/assets/abf0ffad-a538-4020-8a6a-1e2977ea3d61" />

# छठ पूजा (Chhath Puja) in Bengaluru 🌅

A responsive, mobile-first website that helps the community find Chhath Puja celebrations across Bengaluru. Built with festive aesthetics featuring sunrise gradients, marigold colors, and traditional motifs.

![Chhath Puja Bengaluru](https://img.shields.io/badge/Festival-Chhath%20Puja-orange) ![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20Vite%20%7C%20Tailwind-blue) ![Mobile First](https://img.shields.io/badge/Design-Mobile%20First-green)

This is dedicated for all of us far from home in Bengaluru—a bittersweet reminder of devotion, family bonds, the comfort of [Sharda Sinha’s songs](https://youtu.be/6DePUrUWtmE?list=RD6DePUrUWtmE&t=57), and the deep-rooted traditions that bind us. Just show up at the Ghat, let the echoes of “[Ugha He Suruj Dev](https://youtu.be/6e6Hp6R5SVU?list=RD6e6Hp6R5SVU&t=47)” feel like home, and savor the taste of Thekua. This is where we find our roots and each other, even thousands of miles away.


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
