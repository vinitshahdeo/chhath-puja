<img width="1536" height="1024" alt="chhath-puja-in-bengaluru" src="https://github.com/user-attachments/assets/c6bfaea0-ed10-4277-b096-637c570d58c2" />

# छठ पूजा (Chhath Puja) in Bengaluru 🌅

A responsive, mobile-first website that helps the community find [Chhath Puja](https://artsandculture.google.com/story/how-chhath-puja-is-celebrated-samoolam/9QXxQ8xSNXhwjw?hl=en) celebrations across Bengaluru. Built with festive aesthetics featuring sunrise gradients, marigold colors, and traditional motifs.

👉 **[Submit Your Celebration](https://forms.gle/RDoXHfEvTTwQRpin7)**

![Chhath Puja Bengaluru](https://img.shields.io/badge/Festival-Chhath%20Puja-orange) ![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20Vite%20%7C%20Tailwind-blue) ![Mobile First](https://img.shields.io/badge/Design-Mobile%20First-green)

## A Call From Home

This is dedicated for all of us far from home in Bengaluru—a bittersweet reminder of devotion, family bonds, the comfort of [Sharda Sinha’s songs](https://youtu.be/6DePUrUWtmE?list=RD6DePUrUWtmE&t=57), and the deep-rooted traditions that bind us. Just show up at the Ghat, let the echoes of “[Ugha He Suruj Dev](https://youtu.be/6e6Hp6R5SVU?list=RD6e6Hp6R5SVU&t=47)” feel like home, and savor the taste of Thekua. This is where we find our roots and each other, even thousands of miles away.

### Chhath Puja 2025 Dates

| Day | Ritual Name | Date |
| :--- | :--- | :--- |
| **Day 1** | **Nahay Khay** | Saturday, October 25, 2025 |
| **Day 2** | **Kharna** | Sunday, October 26, 2025 |
| **Day 3** | **Sandhya Arghya** (Evening Offering to the Setting Sun) | **Monday, October 27, 2025** |
| **Day 4** | **Usha Arghya** (Morning Offering to the Rising Sun) & Parana | **Tuesday, October 28, 2025** |

### Community Guidelines
- Always verify event details with organizers
- Respect local customs and venue rules
- Help maintain accuracy of information
- Spread joy and devotion in celebrations

Built with ❤️ for the Chhath Puja community in Bengaluru. 

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

## 🤝 Submit Your Event

Please use [this form](https://forms.gle/RDoXHfEvTTwQRpin7) to submit details about your community's Chhath Puja event (Ghat) in the Bengaluru area. The collected information will be listed on our community website to help people find and join a nearby celebration.

Thank you for helping us bring a piece of home to the city for all of us who couldn't go home.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

<div align="center">
<br/><br/>
🙏🌅🙏
<br/>

Crafted with love in Bengaluru—by <a href="https://vinitshahdeo.com/">Vinit Shahdeo</a>, with blessings.

<strong>Happy Chhath Puja!</strong>

</div>
