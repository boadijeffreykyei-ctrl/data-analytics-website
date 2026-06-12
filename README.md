# Data Analytics Dashboard

A modern, responsive data analytics website with interactive charts, key metrics, and real-time data visualization.

## Features

✨ **Key Features:**
- 📊 Interactive charts (Line, Bar, Doughnut/Pie charts)
- 📈 Real-time key metrics display
- 💳 Metric cards with trend indicators
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌙 Dark theme UI for reduced eye strain
- 📋 Data tables with transaction history
- 🎨 Modern and clean interface
- ⚡ Smooth animations and transitions

## Project Structure

```
data-analytics-website/
├── index.html       # Main HTML structure
├── styles.css       # CSS styling and responsive design
├── script.js        # JavaScript for charts and interactions
└── README.md        # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and Grid/Flexbox
- **JavaScript (Vanilla)** - No dependencies except Chart.js
- **Chart.js** - Interactive chart library via CDN

## Dashboard Components

### 1. Header
- Dashboard title
- Current date and time display
- Professional branding

### 2. Navigation Bar
- Quick navigation menu
- Active link indication
- Hover effects

### 3. Key Metrics Section
- Total Revenue
- Active Users
- Average Order Value
- Conversion Rate
- Trend indicators (↑ ↓)

### 4. Charts Section
- **Revenue Trend**: 7-day revenue line chart
- **User Distribution**: Regional user breakdown (pie/doughnut)
- **Traffic Sources**: Visitor sources breakdown (horizontal bar)
- **Active Users**: Daily active users trend

### 5. Data Table
- Recent transactions
- Transaction status (Completed, Pending, Failed)
- Interactive rows with hover effects

## Getting Started

### Option 1: Local Development
1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process or server needed!

### Option 2: Live Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js http-server
npx http-server
```
Then navigate to `http://localhost:8000`

## Customization

### Change Color Scheme
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --accent-color: #10b981;
    /* ... more colors */
}
```

### Update Chart Data
In `script.js`, modify the data arrays in each chart configuration:
```javascript
data: [12500, 15200, 14800, 18900, 21200, 19800, 16400]
```

### Add Real API Integration
Replace sample data with API calls:
```javascript
fetch('/api/metrics')
    .then(response => response.json())
    .then(data => updateCharts(data));
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight: ~50KB total (uncompressed)
- No build step required
- Fast load times with CDN-hosted Chart.js
- Optimized images and assets

## Future Enhancements

- [ ] Real API integration
- [ ] User authentication
- [ ] Export functionality (PDF, CSV)
- [ ] Advanced filtering and date range selection
- [ ] Notifications system
- [ ] Dark/Light theme toggle
- [ ] Mobile app version
- [ ] Data refresh automation
- [ ] Custom report builder
- [ ] Multiple dashboard layouts

## License

MIT License - Feel free to use this project for personal and commercial purposes.

## Support

For issues or suggestions, please create an issue in the repository.

---

**Created:** June 2026  
**Version:** 1.0.0